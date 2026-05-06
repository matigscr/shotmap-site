import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { inflateSync, deflateSync } from "node:zlib";

const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

function crc32(buffer) {
  let crc = -1;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ -1) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const output = Buffer.alloc(12 + data.length);
  output.writeUInt32BE(data.length, 0);
  typeBuffer.copy(output, 4);
  data.copy(output, 8);
  output.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 8 + data.length);
  return output;
}

function paeth(left, up, upLeft) {
  const estimate = left + up - upLeft;
  const leftDistance = Math.abs(estimate - left);
  const upDistance = Math.abs(estimate - up);
  const upLeftDistance = Math.abs(estimate - upLeft);
  if (leftDistance <= upDistance && leftDistance <= upLeftDistance) return left;
  if (upDistance <= upLeftDistance) return up;
  return upLeft;
}

function readPNG(path) {
  const file = readFileSync(path);
  if (!file.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error(`${path} is not a PNG`);
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  const idat = [];

  while (offset < file.length) {
    const length = file.readUInt32BE(offset);
    const type = file.subarray(offset + 4, offset + 8).toString("ascii");
    const data = file.subarray(offset + 8, offset + 8 + length);
    offset += length + 12;

    if (type === "IHDR") {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
    } else if (type === "IDAT") {
      idat.push(data);
    } else if (type === "IEND") {
      break;
    }
  }

  if (bitDepth !== 8 || ![2, 6].includes(colorType)) {
    throw new Error(`${path} must be 8-bit RGB or RGBA`);
  }

  const channels = colorType === 6 ? 4 : 3;
  const bytesPerPixel = channels;
  const stride = width * channels;
  const inflated = inflateSync(Buffer.concat(idat));
  const unfiltered = Buffer.alloc(width * height * channels);

  let sourceOffset = 0;
  for (let y = 0; y < height; y += 1) {
    const filter = inflated[sourceOffset];
    sourceOffset += 1;
    const rowStart = y * stride;

    for (let x = 0; x < stride; x += 1) {
      const raw = inflated[sourceOffset + x];
      const left = x >= bytesPerPixel ? unfiltered[rowStart + x - bytesPerPixel] : 0;
      const up = y > 0 ? unfiltered[rowStart + x - stride] : 0;
      const upLeft = y > 0 && x >= bytesPerPixel ? unfiltered[rowStart + x - stride - bytesPerPixel] : 0;

      let value = raw;
      if (filter === 1) value = raw + left;
      if (filter === 2) value = raw + up;
      if (filter === 3) value = raw + Math.floor((left + up) / 2);
      if (filter === 4) value = raw + paeth(left, up, upLeft);
      unfiltered[rowStart + x] = value & 255;
    }
    sourceOffset += stride;
  }

  const rgba = Buffer.alloc(width * height * 4);
  for (let pixel = 0; pixel < width * height; pixel += 1) {
    const source = pixel * channels;
    const target = pixel * 4;
    rgba[target] = unfiltered[source];
    rgba[target + 1] = unfiltered[source + 1];
    rgba[target + 2] = unfiltered[source + 2];
    rgba[target + 3] = colorType === 6 ? unfiltered[source + 3] : 255;
  }

  return { width, height, rgba };
}

function writePNG(path, image) {
  const rawStride = image.width * 4;
  const raw = Buffer.alloc((rawStride + 1) * image.height);
  for (let y = 0; y < image.height; y += 1) {
    const rowStart = y * (rawStride + 1);
    raw[rowStart] = 0;
    image.rgba.copy(raw, rowStart + 1, y * rawStride, (y + 1) * rawStride);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(image.width, 0);
  ihdr.writeUInt32BE(image.height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, Buffer.concat([
    PNG_SIGNATURE,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]));
}

const [basePath, targetPath, outputPath, rawThreshold] = process.argv.slice(2);
const threshold = Number(rawThreshold ?? 72);
if (!basePath || !targetPath || !outputPath || Number.isNaN(threshold)) {
  throw new Error("Usage: node make-shotmap-deltas.mjs base.png target.png output.png threshold");
}

const base = readPNG(basePath);
const target = readPNG(targetPath);
if (base.width !== target.width || base.height !== target.height) {
  throw new Error("Input PNG sizes must match");
}

const output = Buffer.from(target.rgba);
for (let offset = 0; offset < output.length; offset += 4) {
  const diff =
    Math.abs(target.rgba[offset] - base.rgba[offset]) +
    Math.abs(target.rgba[offset + 1] - base.rgba[offset + 1]) +
    Math.abs(target.rgba[offset + 2] - base.rgba[offset + 2]) +
    Math.abs(target.rgba[offset + 3] - base.rgba[offset + 3]);

  if (diff < threshold) {
    output[offset] = 0;
    output[offset + 1] = 0;
    output[offset + 2] = 0;
    output[offset + 3] = 0;
  }
}

writePNG(outputPath, { width: target.width, height: target.height, rgba: output });
