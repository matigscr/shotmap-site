import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { getDownload } from "@/lib/downloads";

export const runtime = "nodejs";

type RouteContext = {
  params: {
    slug: string;
  };
};

export async function GET(request: Request, { params }: RouteContext) {
  const download = getDownload(params.slug);

  if (!download) {
    return NextResponse.json({ error: "Download not found." }, { status: 404 });
  }

  if (!download.available) {
    return NextResponse.json({ error: "Download is not available yet." }, { status: 404 });
  }

  if (download.externalUrl) {
    return NextResponse.redirect(download.externalUrl);
  }

  if (!download.publicPath) {
    return NextResponse.json({ error: "Download file is not configured." }, { status: 404 });
  }

  if (download.category === "app") {
    return NextResponse.redirect(new URL(download.publicPath, request.url));
  }

  const publicPath = download.publicPath.replace(/^\/+/, "");
  const filePath = path.join(process.cwd(), "public", publicPath);

  try {
    const file = await readFile(filePath);

    return new NextResponse(file, {
      headers: {
        "Content-Disposition": `attachment; filename="${download.filename}"`,
        "Content-Length": file.byteLength.toString(),
        "Content-Type": download.contentType,
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch {
    return NextResponse.json({ error: "Download file is missing." }, { status: 404 });
  }
}
