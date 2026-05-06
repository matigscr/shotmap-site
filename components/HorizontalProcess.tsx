"use client";

import { motion, type MotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { backgroundOpacity } from "./background/backgroundConfig";
import { SchematicLayer } from "./background/SchematicLayer";

const DEBUG_TIMING_COUNTER = true;

const shotmapFrames = [
  {
    src: "/shotmap-progress/01-floorplan.png",
    alt: "Imported set plan reference at full opacity"
  },
  {
    src: "/shotmap-progress/02-floorplan-faded.png",
    alt: "Imported set plan reference faded back for tracing"
  },
  {
    src: "/shotmap-progress/03-walls-clean.png",
    alt: "Clean wall and set layout created in Coverage Schematic"
  },
  {
    src: "/shotmap-progress/04-props-clean.png",
    alt: "Props and set elements added to the schematic"
  },
  {
    src: "/shotmap-progress/05-characters-clean.png",
    alt: "Character positions added without motion paths"
  },
  {
    src: "/shotmap-progress/06-characters-paths.png",
    alt: "Character blocking with motion paths added"
  },
  {
    src: "/shotmap-progress/07-camera-wave-1.png",
    alt: "First complete camera coverage wave"
  },
  {
    src: "/shotmap-progress/08-camera-wave-2.png",
    alt: "Second complete camera coverage wave"
  },
  {
    src: "/shotmap-progress/09-camera-wave-3.png",
    alt: "Third complete camera coverage wave"
  }
];

const panels = [
  {
    eyebrow: "Walls",
    title: "Build the Space",
    text: "Create sets, locations, or studio layouts."
  },
  {
    eyebrow: "Paths",
    title: "Add characters and create blocking",
    text: "Place actors, add movement, and define action."
  },
  {
    eyebrow: "Cameras",
    title: "Create coverage",
    text: "Place cameras, assign colors, and add dynamic angles."
  },
  {
    eyebrow: "Export",
    title: "Deliver instantly",
    text: "Use the legend to export a clean coverage map with notes for the team."
  }
];

const handoffBullets = [
  "Directors define intent.",
  "Camera operators understand assignments.",
  "DP and lighting align instantly.",
  "Everyone sees the same plan."
];

const outputChips = [
  "Camera labels",
  "Color-coded assignments",
  "Crew-ready legend",
  "Notes included"
];

const captionTiming = [
  { end: 0.12, label: "Text waiting" },
  { end: 0.42, label: "Build active" },
  { end: 0.72, label: "Characters active" },
  { end: 1.02, label: "Coverage active" },
  { end: 1.4, label: "Deliver/export active" },
  { end: 1.62, label: "Output handoff" }
];

const visualTiming = [
  { end: 0.06, label: "Image entering" },
  { end: 0.17, label: "Floorplan dissolving" },
  { end: 0.22, label: "Walls only hold" },
  { end: 0.42, label: "Props animating" },
  { end: 0.52, label: "Characters revealing" },
  { end: 0.72, label: "Motion paths drawing" },
  { end: 0.78, label: "Camera wave 1" },
  { end: 0.84, label: "Camera wave 2" },
  { end: 0.89, label: "Camera wave 3" },
  { end: 1.18, label: "Legend" },
  { end: 1.25, label: "Export reveal" },
  { end: 1.4, label: "Output landing" },
  { end: 1.62, label: "Output scroll" }
];

function getTimingLabel(progress: number, timing: { end: number; label: string }[]) {
  return timing.find((item) => progress <= item.end)?.label ?? timing[timing.length - 1].label;
}

export function HorizontalProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [timingProgress, setTimingProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end end"]
  });
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1.62]);

  useMotionValueEvent(timelineProgress, "change", (latest) => {
    setTimingProgress(Number(latest.toFixed(3)));
  });

  // The pinned section keeps one persistent product visual in place. Vertical
  // scroll first slides the visual and captions in from the right, then keeps
  // the visual centered while the captions move horizontally beneath it. At the
  // end, the captions leave while the export stays onscreen and shrinks into the
  // following section.
  const visualX = useTransform(timelineProgress, [0, 0.12, 1.191, 1.38, 1.5, 1.62], ["100vw", "0vw", "0vw", "-30vw", "-30vw", "-30vw"]);
  const visualScale = useTransform(timelineProgress, [0, 1.191, 1.38, 1.62], [1, 1, 0.82, 0.82]);
  const visualY = useTransform(timelineProgress, [0, 1.5, 1.62], [0, 0, -84]);
  const handoffTextOpacity = useTransform(timelineProgress, [1.24, 1.28, 1.62], [0, 1, 1]);
  const handoffTextX = useTransform(timelineProgress, [1.24, 1.36, 1.48], ["48vw", "0vw", "0vw"]);
  const handoffTextY = useTransform(timelineProgress, [1.34, 1.52], ["0vh", "-78vh"]);
  const outputTextOpacity = useTransform(timelineProgress, [1.38, 1.42, 1.62], [0, 1, 1]);
  const outputTextY = useTransform(timelineProgress, [1.38, 1.52, 1.62], ["52vh", "0vh", "-12vh"]);
  const captionMotion = [
    {
      opacity: useTransform(timelineProgress, [0.12, 0.15, 0.54, 0.57], [0, 1, 1, 0]),
      x: useTransform(timelineProgress, [0.12, 0.57], ["100vw", "-100vw"])
    },
    {
      opacity: useTransform(timelineProgress, [0.42, 0.45, 0.84, 0.87], [0, 1, 1, 0]),
      x: useTransform(timelineProgress, [0.42, 0.87], ["100vw", "-100vw"])
    },
    {
      opacity: useTransform(timelineProgress, [0.72, 0.75, 1.14, 1.17], [0, 1, 1, 0]),
      x: useTransform(timelineProgress, [0.72, 1.17], ["100vw", "-100vw"])
    },
    {
      opacity: useTransform(timelineProgress, [1.02, 1.05, 1.26, 1.32], [0, 1, 1, 0]),
      x: useTransform(timelineProgress, [1.02, 1.32], ["100vw", "-100vw"])
    }
  ];
  const gridX = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-36, 120]);
  const markerX = useTransform(scrollYProgress, [0, 1], [80, -180]);
  const processOpacity = useTransform(scrollYProgress, [0, 0.08, 0.88, 1], [0, 1, 1, 0]);
  const processGridOpacity = useTransform(scrollYProgress, [0, 0.08, 0.88, 1], [0, 0.45, 0.45, 0]);
  const processPathOpacity = useTransform(scrollYProgress, [0, 0.08, 0.88, 1], [0, 0.72, 0.72, 0]);
  const pathOne = useTransform(scrollYProgress, [0.1, 0.22], [0, 1]);
  const pathTwo = useTransform(scrollYProgress, [0.34, 0.48], [0, 1]);
  const pathThree = useTransform(scrollYProgress, [0.58, 0.72], [0, 1]);
  const pathFour = useTransform(scrollYProgress, [0.78, 0.92], [0, 1]);
  const frameOpacities = [
    useTransform(timelineProgress, [0, 0.08, 0.18], [1, 1, 0]),
    useTransform(timelineProgress, [0.06, 0.14, 0.24], [0, 0.75, 0]),
    useTransform(timelineProgress, [0.1, 0.22, 1.18, 1.19], [0, 1, 1, 0]),
    useTransform(timelineProgress, [0.145, 0.545, 1.18, 1.19], [0, 1, 1, 0]),
    useTransform(timelineProgress, [0.445, 0.68, 1.18, 1.19], [0, 1, 1, 0]),
    useTransform(timelineProgress, [0.58, 0.845, 1.18, 1.19], [0, 1, 1, 0]),
    useTransform(timelineProgress, [0.82, 0.85, 1.18, 1.19], [0, 1, 1, 0]),
    useTransform(timelineProgress, [0.88, 0.91, 1.18, 1.19], [0, 1, 1, 0]),
    useTransform(timelineProgress, [0.94, 0.98, 1.18, 1.19], [0, 1, 1, 0])
  ];
  const frameScales = [
    useTransform(timelineProgress, [0, 0.18], [1, 1]),
    useTransform(timelineProgress, [0.06, 0.24], [1.01, 1]),
    useTransform(timelineProgress, [0.1, 0.22], [1, 1]),
    useTransform(timelineProgress, [0.145, 0.545], [0.985, 1]),
    useTransform(timelineProgress, [0.445, 0.68], [0.965, 1]),
    useTransform(timelineProgress, [0.58, 0.845], [1, 1]),
    useTransform(timelineProgress, [0.82, 0.85], [0.98, 1]),
    useTransform(timelineProgress, [0.88, 0.91], [0.98, 1]),
    useTransform(timelineProgress, [0.94, 0.98], [0.98, 1])
  ];
  const frameY = [
    useTransform(timelineProgress, [0, 0.18], [0, 0]),
    useTransform(timelineProgress, [0.06, 0.24], [0, 0]),
    useTransform(timelineProgress, [0.1, 0.22], [0, 0]),
    useTransform(timelineProgress, [0.145, 0.545], [14, 0]),
    useTransform(timelineProgress, [0.445, 0.68], [16, 0]),
    useTransform(timelineProgress, [0.58, 0.845], [0, 0]),
    useTransform(timelineProgress, [0.82, 0.85], [18, 0]),
    useTransform(timelineProgress, [0.88, 0.91], [18, 0]),
    useTransform(timelineProgress, [0.94, 0.98], [-18, 0])
  ];
  const frameX = [
    useTransform(timelineProgress, [0, 0.18], [0, 0]),
    useTransform(timelineProgress, [0.06, 0.24], [0, 0]),
    useTransform(timelineProgress, [0.1, 0.22], [0, 0]),
    useTransform(timelineProgress, [0.145, 0.545], [0, 0]),
    useTransform(timelineProgress, [0.445, 0.68], [0, 0]),
    useTransform(timelineProgress, [0.58, 0.845], [0, 0]),
    useTransform(timelineProgress, [0.82, 0.85], [-18, 0]),
    useTransform(timelineProgress, [0.88, 0.91], [-18, 0]),
    useTransform(timelineProgress, [0.94, 0.98], [18, 0])
  ];
  const frameClipPaths = [
    undefined,
    undefined,
    useTransform(timelineProgress, [0.1, 0.22], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]),
    undefined,
    undefined,
    useTransform(timelineProgress, [0.58, 0.845], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]),
    useTransform(timelineProgress, [0.82, 0.85], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]),
    useTransform(timelineProgress, [0.88, 0.91], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]),
    useTransform(timelineProgress, [0.94, 0.98], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"])
  ];
  const legendX = useTransform(timelineProgress, [1.105, 1.19], [260, -1120]);
  const legendOverlayOpacity = useTransform(timelineProgress, [1.104, 1.105, 1.19, 1.191], [0, 1, 1, 0]);
  const packetTopOpacity = useTransform(timelineProgress, [1.105, 1.106], [0, 1]);
  const packetBottomOpacity = useTransform(timelineProgress, [1.25, 1.27], [0, 1]);
  const packetScale = useTransform(timelineProgress, [1.105, 1.19], [0.985, 1]);
  const packetRevealClip = useTransform(timelineProgress, [1.105, 1.19], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]);
  const workingMockOpacity = useTransform(timelineProgress, [1.18, 1.19], [1, 0]);

  return (
    <section ref={sectionRef} className="relative lg:h-[950vh]">
      <div className="hidden lg:sticky lg:top-0 lg:block lg:h-screen lg:overflow-hidden">
        {DEBUG_TIMING_COUNTER && (
          <div className="pointer-events-none absolute right-5 top-5 z-50 w-72 rounded-xl border border-blue-300/30 bg-slate-950/85 p-4 font-mono text-xs text-blue-50 shadow-2xl backdrop-blur-md">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-blue-300">
              <span>Timing</span>
              <span>{Math.round(timingProgress * 100)}%</span>
            </div>
            <div className="text-2xl font-semibold text-white">{timingProgress.toFixed(3)}</div>
            <div className="mt-3 grid gap-1.5 text-[11px] leading-5 text-slate-300">
              <div>
                <span className="text-slate-500">Text:</span>{" "}
                {getTimingLabel(timingProgress, captionTiming)}
              </div>
              <div>
                <span className="text-slate-500">Visual:</span>{" "}
                {getTimingLabel(timingProgress, visualTiming)}
              </div>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[rgba(5,7,11,0.42)]" />
        <motion.div
          style={{ x: gridX, opacity: processGridOpacity }}
          className="pointer-events-none absolute inset-0 cinematic-grid"
        />
        <motion.div style={{ opacity: processOpacity }} className="absolute inset-0">
          <SchematicLayer
            x={backgroundX}
            y={backgroundY}
            intensity="active"
            showPaths
            className="hidden lg:block"
          />
        </motion.div>
        <motion.svg
          style={{ x: backgroundX, y: backgroundY, opacity: processPathOpacity }}
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          aria-hidden="true"
        >
          {[
            { d: "M80 680 C260 520 420 620 600 430 C760 260 910 330 1080 180", progress: pathOne },
            { d: "M220 190 C390 310 520 130 730 250 C920 360 1050 280 1240 420", progress: pathTwo },
            { d: "M110 420 C300 350 410 460 570 360 C760 240 930 520 1160 330", progress: pathThree },
            { d: "M360 740 C520 610 710 700 870 560 C1020 430 1160 510 1340 360", progress: pathFour },
            { d: "M40 250 C230 205 350 300 520 210 C710 110 860 160 1010 90", progress: pathOne },
            { d: "M620 820 C760 660 920 760 1080 610 C1200 500 1280 555 1410 470", progress: pathThree }
          ].map((path) => (
            <motion.path
              key={path.d}
              d={path.d}
              style={{ pathLength: path.progress }}
              stroke="rgba(120,160,255,0.14)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ))}
        </motion.svg>
        <motion.div
          style={{ x: markerX, opacity: processOpacity }}
          className={`pointer-events-none absolute inset-0 ${backgroundOpacity.schematicActive}`}
          aria-hidden="true"
        >
          {["left-[18%] top-[22%]", "left-[44%] top-[70%]", "left-[72%] top-[34%]", "left-[86%] bottom-[18%]"].map(
            (position, index) => (
              <motion.span
                key={position}
                className={`absolute ${position} h-2 w-2 rounded-full bg-[rgba(120,160,255,0.18)] shadow-[0_0_24px_rgba(80,120,255,0.18)] will-change-transform`}
                animate={{ x: [-10, 10, -10], y: [-14, 14, -14] }}
                transition={{
                  duration: 7 + (index % 3),
                  delay: index * 0.9,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )
          )}
        </motion.div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 py-10 sm:px-8">
          <motion.div style={{ scale: visualScale, x: visualX, y: visualY }} className="w-full will-change-transform">
            <ProgressiveShotmapVisual
              frameClipPaths={frameClipPaths}
              frameOpacities={frameOpacities}
              frameScales={frameScales}
              frameX={frameX}
              frameY={frameY}
              legendOverlayOpacity={legendOverlayOpacity}
              legendX={legendX}
              packetBottomOpacity={packetBottomOpacity}
              packetRevealClip={packetRevealClip}
              packetScale={packetScale}
              packetTopOpacity={packetTopOpacity}
              workingMockOpacity={workingMockOpacity}
            />
          </motion.div>

          <div className="relative mt-6 h-[170px] w-screen overflow-hidden">
              {panels.map((panel, index) => (
                <motion.article
                  key={panel.title}
                  style={captionMotion[index]}
                  className="absolute inset-0 flex h-full w-screen items-start justify-center px-5 sm:px-8"
                >
                  <div className="w-full max-w-4xl text-center">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
                      {panel.eyebrow} / 0{index + 1}
                    </p>
                    <h2 className="text-4xl font-semibold leading-none text-white sm:text-5xl">
                      {panel.title}
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                      {panel.text}
                    </p>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
        <motion.div
          style={{ opacity: handoffTextOpacity, x: handoffTextX, y: handoffTextY }}
          className="pointer-events-none absolute left-[43vw] right-[4vw] top-[24vh] z-20 hidden lg:block"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Final Coverage First
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Designed around the final coverage - not just the creation
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every tool in the app is built with one goal in mind: clearly communicating your
            blocking and coverage to the entire team.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {handoffBullets.map((bullet) => (
              <div
                key={bullet}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-200"
              >
                {bullet}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          style={{ opacity: outputTextOpacity, y: outputTextY }}
          className="pointer-events-none absolute left-[43vw] right-[4vw] top-[24vh] z-20 hidden lg:block"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Output
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Communicate your coverage in seconds
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Generate a complete schematic with legend - ready for your crew.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {outputChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="px-5 py-20 sm:px-8 lg:hidden">
        <div className="mx-auto max-w-3xl space-y-16">
          <StaticShotmapVisual />
          {panels.map((panel, index) => (
            <motion.article
              key={panel.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
                {panel.eyebrow} / 0{index + 1}
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-white">
                {panel.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{panel.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

type ProgressiveShotmapVisualProps = {
  frameClipPaths: (MotionValue<string> | undefined)[];
  frameOpacities: MotionValue<number>[];
  frameScales: MotionValue<number>[];
  frameX: MotionValue<number>[];
  frameY: MotionValue<number>[];
  legendOverlayOpacity: MotionValue<number>;
  legendX: MotionValue<number>;
  packetBottomOpacity: MotionValue<number>;
  packetRevealClip: MotionValue<string>;
  packetScale: MotionValue<number>;
  packetTopOpacity: MotionValue<number>;
  workingMockOpacity: MotionValue<number>;
};

function ProgressiveShotmapVisual({
  frameClipPaths,
  frameOpacities,
  frameScales,
  frameX,
  frameY,
  legendOverlayOpacity,
  legendX,
  packetBottomOpacity,
  packetRevealClip,
  packetScale,
  packetTopOpacity,
  workingMockOpacity
}: ProgressiveShotmapVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-[min(980px,calc((100vh-250px)*1.237))]">
      <motion.div
        style={{ opacity: workingMockOpacity }}
        className="absolute -inset-x-6 -inset-y-4 rounded-[48%] bg-blue-400/8 blur-[46px]"
      />
      <motion.div
        style={{ opacity: workingMockOpacity }}
        className="relative overflow-hidden rounded-2xl border border-white/55 bg-slate-100/95 shadow-cinematic"
      >
          <div className="relative aspect-[1420/1148] overflow-hidden rounded-xl border border-slate-300/80 bg-slate-50">
            {shotmapFrames.map((frame, index) => (
              <motion.img
                key={frame.src}
                src={frame.src}
                alt={frame.alt}
                style={{
                  clipPath: frameClipPaths[index],
                  opacity: frameOpacities[index],
                  scale: frameScales[index],
                  x: frameX[index],
                  y: frameY[index]
                }}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
                draggable={false}
              />
            ))}
            <motion.img
              src="/shotmap-progress/10-legend-open.png"
              alt=""
              aria-hidden="true"
              style={{ opacity: legendOverlayOpacity, x: legendX }}
              className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover will-change-transform"
              draggable={false}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/40"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(59,130,246,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.05))]"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_40px_rgba(15,23,42,0.08)]" />
            {shotmapFrames.map((frame) => (
              <img
                key={frame.src}
                src={frame.src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
                aria-hidden="true"
                hidden
              />
            ))}
          </div>
      </motion.div>
      <motion.div
        style={{ clipPath: packetRevealClip, opacity: packetTopOpacity, scale: packetScale }}
        className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-visible"
      >
        <div className="relative h-full aspect-[2501/3155]">
          <div className="absolute -inset-x-5 -inset-y-7 rounded-[50%] bg-blue-400/7 blur-[42px]" />
          <div className="relative h-full overflow-hidden bg-white shadow-[0_18px_54px_rgba(56,121,255,0.16)]">
            <div className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_44%_0)]">
              <img
                src="/shotmap-progress/11-export-top.png"
                alt="Camera packet export top half"
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>
            <motion.div
              style={{ opacity: packetBottomOpacity }}
              className="absolute inset-0 overflow-hidden [clip-path:inset(56%_0_0_0)]"
            >
              <img
                src="/shotmap-progress/12-export-full.png"
                alt="Camera packet export with notes grid"
                className="h-full w-full object-contain"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StaticShotmapVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/55 bg-slate-100/95 p-2 shadow-cinematic">
      <div className="absolute -inset-10 rounded-[2.25rem] bg-blue-400/20 blur-3xl" />
        <div className="relative aspect-[2501/3155] overflow-hidden rounded-xl border border-slate-300/80 bg-slate-50">
          <img
            src="/shotmap-progress/12-export-full.png"
            alt="Final crew-ready export with legend"
            className="h-full w-full object-contain"
            draggable={false}
          />
        </div>
    </div>
  );
}
