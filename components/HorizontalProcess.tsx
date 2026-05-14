"use client";

import { motion, type MotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { backgroundOpacity } from "./background/backgroundConfig";
import { SchematicLayer } from "./background/SchematicLayer";

const DEBUG_TIMING_COUNTER = false;

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
  }
];

const shotmapDeltas = {
  props: {
    src: "/shotmap-progress/deltas/props.png",
    alt: "Props and set elements added to the schematic"
  },
  characters: {
    src: "/shotmap-progress/deltas/characters.png",
    alt: "Character positions added without motion paths"
  },
  motionPaths: {
    src: "/shotmap-progress/deltas/motion-paths.png",
    alt: "Character blocking with motion paths added"
  },
  cameraWave1: {
    src: "/shotmap-progress/deltas/camera-wave-1.png",
    alt: "First complete camera coverage wave"
  },
  cameraWave2: {
    src: "/shotmap-progress/deltas/camera-wave-2.png",
    alt: "Second complete camera coverage wave"
  },
  cameraWave3: {
    src: "/shotmap-progress/deltas/camera-wave-3.png",
    alt: "Third complete camera coverage wave"
  }
};

const propRevealMasks = [
  "inset(18% 62% 58% 16%)",
  "inset(26% 39% 61% 47%)",
  "inset(42% 35% 42% 58%)",
  "inset(63% 36% 23% 48%)",
  "inset(0% 58% 88% 2%)",
  "inset(32% 10% 21% 64%)"
];

const characterRevealMasks = [
  "inset(30% 78% 62% 17%)",
  "inset(26% 72% 66% 21%)",
  "inset(18% 63% 73% 27%)",
  "inset(17% 55% 75% 35%)",
  "inset(38% 58% 51% 32%)",
  "inset(42% 49% 45% 41%)",
  "inset(47% 54% 39% 42%)",
  "inset(49% 58% 37% 35%)",
  "inset(52% 34% 18% 48%)"
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

const PINNED_PROCESS_MIN_WIDTH = 768;
const PINNED_PROCESS_MIN_HEIGHT = 620;
const DEFAULT_PROCESS_METRICS = {
  captionOffset: 960,
  isPinned: false,
  sectionHeight: 0
};

function getTimingLabel(progress: number, timing: { end: number; label: string }[]) {
  return timing.find((item) => progress <= item.end)?.label ?? timing[timing.length - 1].label;
}

export function HorizontalProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const captionContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [timingProgress, setTimingProgress] = useState(0);
  const [processMetrics, setProcessMetrics] = useState(DEFAULT_PROCESS_METRICS);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end end"]
  });
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1.62]);

  useEffect(() => {
    const calculateProcessMetrics = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const isPinned =
        viewportWidth >= PINNED_PROCESS_MIN_WIDTH && viewportHeight >= PINNED_PROCESS_MIN_HEIGHT;
      const measuredCaptionWidth = Math.max(
        ...captionContentRefs.current.map((node) => node?.scrollWidth ?? 0),
        0
      );
      const fallbackCaptionWidth = Math.min(viewportWidth - 64, 896);
      const captionWidth = measuredCaptionWidth || fallbackCaptionWidth;
      const captionOffset = Math.ceil((viewportWidth + captionWidth) / 2 + 56);
      const horizontalScrollDistance = captionOffset * panels.length * 1.05 + viewportWidth * 1.4;
      const scrollDistance = Math.max(viewportHeight * 5.2, horizontalScrollDistance);

      setProcessMetrics({
        captionOffset,
        isPinned,
        sectionHeight: isPinned ? Math.ceil(viewportHeight + scrollDistance) : 0
      });
    };

    calculateProcessMetrics();
    const measurementFrame = window.requestAnimationFrame(calculateProcessMetrics);
    window.addEventListener("resize", calculateProcessMetrics);
    window.addEventListener("orientationchange", calculateProcessMetrics);
    document.fonts?.ready.then(calculateProcessMetrics).catch(() => undefined);

    return () => {
      window.cancelAnimationFrame(measurementFrame);
      window.removeEventListener("resize", calculateProcessMetrics);
      window.removeEventListener("orientationchange", calculateProcessMetrics);
    };
  }, []);

  useMotionValueEvent(timelineProgress, "change", (latest) => {
    setTimingProgress(Number(latest.toFixed(3)));
  });

  // The pinned section keeps one persistent product visual in place. Vertical
  // scroll first slides the visual and captions in from the right, then keeps
  // the visual centered while the captions move horizontally beneath it. At the
  // end, the captions leave while the export stays onscreen and shrinks into the
  // following section.
  const captionStartX = processMetrics.captionOffset;
  const captionEndX = -processMetrics.captionOffset;
  const visualX = useTransform(timelineProgress, [0, 0.158, 1.191, 1.38, 1.5, 1.62], ["100vw", "0vw", "0vw", "-30vw", "-30vw", "-30vw"]);
  const visualScale = useTransform(timelineProgress, [0, 1.191, 1.38, 1.62], [1, 1, 0.82, 0.82]);
  const visualY = useTransform(timelineProgress, [0, 1.36, 1.62], [0, 0, -760]);
  const handoffTextOpacity = useTransform(timelineProgress, [1.24, 1.28, 1.62], [0, 1, 1]);
  const handoffTextX = useTransform(timelineProgress, [1.24, 1.36, 1.48], ["48vw", "0vw", "0vw"]);
  const handoffTextY = useTransform(timelineProgress, [1.24, 1.36, 1.52], ["8vh", "8vh", "-78vh"]);
  const outputTextOpacity = useTransform(timelineProgress, [1.36, 1.361, 1.62], [0, 1, 1]);
  const outputTextY = useTransform(timelineProgress, [1.36, 1.52, 1.62], ["76vh", "0vh", "-96vh"]);
  const captionMotion = [
    {
      opacity: useTransform(timelineProgress, [0.082, 0.11, 0.54, 0.57], [0, 1, 1, 0]),
      x: useTransform(timelineProgress, [0.082, 0.57], [captionStartX, captionEndX])
    },
    {
      opacity: useTransform(timelineProgress, [0.42, 0.45, 0.84, 0.87], [0, 1, 1, 0]),
      x: useTransform(timelineProgress, [0.42, 0.87], [captionStartX, captionEndX])
    },
    {
      opacity: useTransform(timelineProgress, [0.72, 0.75, 1.14, 1.17], [0, 1, 1, 0]),
      x: useTransform(timelineProgress, [0.72, 1.17], [captionStartX, captionEndX])
    },
    {
      opacity: useTransform(timelineProgress, [1.02, 1.05, 1.26, 1.32], [0, 1, 1, 0]),
      x: useTransform(timelineProgress, [1.02, 1.32], [captionStartX, captionEndX])
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
    useTransform(timelineProgress, [0, 0.076, 0.158], [1, 1, 0]),
    useTransform(timelineProgress, [0.056, 0.076, 0.158], [0, 0.75, 0]),
    useTransform(timelineProgress, [0.076, 0.158, 1.18, 1.19], [0, 1, 1, 0])
  ];
  const propGroupOpacities = [
    useTransform(timelineProgress, [0.162, 0.22], [0, 1]),
    useTransform(timelineProgress, [0.185, 0.245], [0, 1]),
    useTransform(timelineProgress, [0.225, 0.285], [0, 1]),
    useTransform(timelineProgress, [0.255, 0.315], [0, 1]),
    useTransform(timelineProgress, [0.285, 0.345], [0, 1]),
    useTransform(timelineProgress, [0.315, 0.37], [0, 1])
  ];
  const propGroupScales = [
    useTransform(timelineProgress, [0.162, 0.22], [0.94, 1]),
    useTransform(timelineProgress, [0.185, 0.245], [0.96, 1]),
    useTransform(timelineProgress, [0.225, 0.285], [0.96, 1]),
    useTransform(timelineProgress, [0.255, 0.315], [0.96, 1]),
    useTransform(timelineProgress, [0.285, 0.345], [0.97, 1]),
    useTransform(timelineProgress, [0.315, 0.37], [0.97, 1])
  ];
  const propGroupY = [
    useTransform(timelineProgress, [0.162, 0.22], [18, 0]),
    useTransform(timelineProgress, [0.185, 0.245], [10, 0]),
    useTransform(timelineProgress, [0.225, 0.285], [10, 0]),
    useTransform(timelineProgress, [0.255, 0.315], [10, 0]),
    useTransform(timelineProgress, [0.285, 0.345], [8, 0]),
    useTransform(timelineProgress, [0.315, 0.37], [8, 0])
  ];
  const propsFullOpacity = useTransform(timelineProgress, [0.365, 0.375, 1.18, 1.19], [0, 1, 1, 0]);
  const characterGroupOpacities = [
    useTransform(timelineProgress, [0.495, 0.525], [0, 1]),
    useTransform(timelineProgress, [0.515, 0.545], [0, 1]),
    useTransform(timelineProgress, [0.535, 0.565], [0, 1]),
    useTransform(timelineProgress, [0.555, 0.585], [0, 1]),
    useTransform(timelineProgress, [0.585, 0.615], [0, 1]),
    useTransform(timelineProgress, [0.605, 0.635], [0, 1]),
    useTransform(timelineProgress, [0.625, 0.655], [0, 1]),
    useTransform(timelineProgress, [0.645, 0.675], [0, 1]),
    useTransform(timelineProgress, [0.675, 0.705], [0, 1])
  ];
  const characterGroupScales = [
    useTransform(timelineProgress, [0.495, 0.525], [0.97, 1]),
    useTransform(timelineProgress, [0.515, 0.545], [0.97, 1]),
    useTransform(timelineProgress, [0.535, 0.565], [0.97, 1]),
    useTransform(timelineProgress, [0.555, 0.585], [0.97, 1]),
    useTransform(timelineProgress, [0.585, 0.615], [0.98, 1]),
    useTransform(timelineProgress, [0.605, 0.635], [0.98, 1]),
    useTransform(timelineProgress, [0.625, 0.655], [0.98, 1]),
    useTransform(timelineProgress, [0.645, 0.675], [0.98, 1]),
    useTransform(timelineProgress, [0.675, 0.705], [0.98, 1])
  ];
  const characterGroupY = [
    useTransform(timelineProgress, [0.495, 0.525], [4, 0]),
    useTransform(timelineProgress, [0.515, 0.545], [4, 0]),
    useTransform(timelineProgress, [0.535, 0.565], [4, 0]),
    useTransform(timelineProgress, [0.555, 0.585], [4, 0]),
    useTransform(timelineProgress, [0.585, 0.615], [4, 0]),
    useTransform(timelineProgress, [0.605, 0.635], [4, 0]),
    useTransform(timelineProgress, [0.625, 0.655], [4, 0]),
    useTransform(timelineProgress, [0.645, 0.675], [4, 0]),
    useTransform(timelineProgress, [0.675, 0.705], [4, 0])
  ];
  const characterGroupRotations = [
    useTransform(timelineProgress, [0.495, 0.525], [-1.5, 0]),
    useTransform(timelineProgress, [0.515, 0.545], [1.5, 0]),
    useTransform(timelineProgress, [0.535, 0.565], [-1.25, 0]),
    useTransform(timelineProgress, [0.555, 0.585], [1.25, 0]),
    useTransform(timelineProgress, [0.585, 0.615], [-1, 0]),
    useTransform(timelineProgress, [0.605, 0.635], [1, 0]),
    useTransform(timelineProgress, [0.625, 0.655], [-1, 0]),
    useTransform(timelineProgress, [0.645, 0.675], [1, 0]),
    useTransform(timelineProgress, [0.675, 0.705], [1, 0])
  ];
  const charactersFullOpacity = useTransform(timelineProgress, [0.705, 0.72, 1.18, 1.19], [0, 1, 1, 0]);
  const motionPathOpacity = useTransform(timelineProgress, [0.66, 0.75, 1.18, 1.19], [0, 1, 1, 0]);
  const motionPathClip = useTransform(timelineProgress, [0.66, 0.75], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const cameraWaveOpacities = [
    useTransform(timelineProgress, [0.795, 0.865, 1.18, 1.19], [0, 1, 1, 0]),
    useTransform(timelineProgress, [0.88, 0.91, 1.18, 1.19], [0, 1, 1, 0]),
    useTransform(timelineProgress, [0.9, 0.98, 1.18, 1.19], [0, 1, 1, 0])
  ];
  const cameraWaveClipPaths = [
    useTransform(timelineProgress, [0.795, 0.865], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]),
    useTransform(timelineProgress, [0.88, 0.91], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]),
    useTransform(timelineProgress, [0.9, 0.98], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"])
  ];
  const cameraWaveX = [
    useTransform(timelineProgress, [0.795, 0.865], [-14, 0]),
    useTransform(timelineProgress, [0.88, 0.91], [-18, 0]),
    useTransform(timelineProgress, [0.9, 0.98], [30, 0])
  ];
  const cameraWaveY = [
    useTransform(timelineProgress, [0.795, 0.865], [12, 0]),
    useTransform(timelineProgress, [0.88, 0.91], [18, 0]),
    useTransform(timelineProgress, [0.9, 0.98], [-30, 0])
  ];
  const cameraWaveScales = [
    useTransform(timelineProgress, [0.795, 0.865], [0.97, 1]),
    useTransform(timelineProgress, [0.88, 0.91], [0.98, 1]),
    useTransform(timelineProgress, [0.9, 0.98], [0.97, 1])
  ];
  const packetShellOpacity = useTransform(timelineProgress, [1.105, 1.115], [0, 1]);
  const packetTopOpacity = useTransform(timelineProgress, [1.166, 1.18], [0, 1]);
  const packetBottomOpacity = useTransform(timelineProgress, [1.25, 1.27], [0, 1]);
  const packetScale = useTransform(timelineProgress, [1.165, 1.19], [1, 1]);
  const workingMockOpacity = useTransform(timelineProgress, [1.166, 1.18], [1, 0]);
  const workingMockScaleX = useTransform(timelineProgress, [1.115, 1.165], [1, 0.4359]);
  const workingMockScaleY = useTransform(timelineProgress, [1.115, 1.165], [1, 0.4359]);
  const workingMockX = useTransform(timelineProgress, [1.115, 1.165], [0, -16]);
  const workingMockY = useTransform(timelineProgress, [1.115, 1.165], [0, -111]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={processMetrics.isPinned ? { height: processMetrics.sectionHeight } : undefined}
    >
      <div className={processMetrics.isPinned ? "sticky top-0 block h-screen overflow-hidden" : "hidden"}>
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
            className="hidden md:block"
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
              cameraWaveClipPaths={cameraWaveClipPaths}
              cameraWaveOpacities={cameraWaveOpacities}
              cameraWaveScales={cameraWaveScales}
              cameraWaveX={cameraWaveX}
              cameraWaveY={cameraWaveY}
              characterGroupOpacities={characterGroupOpacities}
              characterGroupRotations={characterGroupRotations}
              characterGroupScales={characterGroupScales}
              characterGroupY={characterGroupY}
              charactersFullOpacity={charactersFullOpacity}
              frameOpacities={frameOpacities}
              motionPathClip={motionPathClip}
              motionPathOpacity={motionPathOpacity}
              packetBottomOpacity={packetBottomOpacity}
              packetScale={packetScale}
              packetShellOpacity={packetShellOpacity}
              packetTopOpacity={packetTopOpacity}
              propGroupOpacities={propGroupOpacities}
              propGroupScales={propGroupScales}
              propGroupY={propGroupY}
              propsFullOpacity={propsFullOpacity}
              workingMockOpacity={workingMockOpacity}
              workingMockScaleX={workingMockScaleX}
              workingMockScaleY={workingMockScaleY}
              workingMockX={workingMockX}
              workingMockY={workingMockY}
            />
          </motion.div>

          <div className="relative mt-6 h-[170px] w-screen overflow-hidden">
              {panels.map((panel, index) => (
                <motion.article
                  key={panel.title}
                  style={captionMotion[index]}
                  className="absolute inset-0 flex h-full w-screen items-start justify-center px-5 sm:px-8"
                >
                  <div
                    ref={(node) => {
                      captionContentRefs.current[index] = node;
                    }}
                    className="w-full max-w-4xl text-center"
                  >
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
          className="pointer-events-none absolute left-[43vw] right-[4vw] top-[24vh] z-20 hidden md:block"
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

      <div className={processMetrics.isPinned ? "hidden" : "px-5 py-20 sm:px-8"}>
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
  cameraWaveClipPaths: MotionValue<string>[];
  cameraWaveOpacities: MotionValue<number>[];
  cameraWaveScales: MotionValue<number>[];
  cameraWaveX: MotionValue<number>[];
  cameraWaveY: MotionValue<number>[];
  characterGroupOpacities: MotionValue<number>[];
  characterGroupRotations: MotionValue<number>[];
  characterGroupScales: MotionValue<number>[];
  characterGroupY: MotionValue<number>[];
  charactersFullOpacity: MotionValue<number>;
  frameOpacities: MotionValue<number>[];
  motionPathClip: MotionValue<string>;
  motionPathOpacity: MotionValue<number>;
  packetBottomOpacity: MotionValue<number>;
  packetScale: MotionValue<number>;
  packetShellOpacity: MotionValue<number>;
  packetTopOpacity: MotionValue<number>;
  propGroupOpacities: MotionValue<number>[];
  propGroupScales: MotionValue<number>[];
  propGroupY: MotionValue<number>[];
  propsFullOpacity: MotionValue<number>;
  workingMockOpacity: MotionValue<number>;
  workingMockScaleX: MotionValue<number>;
  workingMockScaleY: MotionValue<number>;
  workingMockX: MotionValue<number>;
  workingMockY: MotionValue<number>;
};

function ProgressiveShotmapVisual({
  cameraWaveClipPaths,
  cameraWaveOpacities,
  cameraWaveScales,
  cameraWaveX,
  cameraWaveY,
  characterGroupOpacities,
  characterGroupRotations,
  characterGroupScales,
  characterGroupY,
  charactersFullOpacity,
  frameOpacities,
  motionPathClip,
  motionPathOpacity,
  packetBottomOpacity,
  packetScale,
  packetShellOpacity,
  packetTopOpacity,
  propGroupOpacities,
  propGroupScales,
  propGroupY,
  propsFullOpacity,
  workingMockOpacity,
  workingMockScaleX,
  workingMockScaleY,
  workingMockX,
  workingMockY
}: ProgressiveShotmapVisualProps) {
  const cameraLayers = [
    shotmapDeltas.cameraWave1,
    shotmapDeltas.cameraWave2,
    shotmapDeltas.cameraWave3
  ];

  return (
    <div className="relative mx-auto w-full max-w-[min(980px,calc((100vh-250px)*1.237))]">
      <motion.div
        style={{ opacity: workingMockOpacity }}
        className="absolute -inset-x-6 -inset-y-4 rounded-[48%] bg-blue-400/8 blur-[46px]"
      />
      <motion.div
        style={{
          opacity: workingMockOpacity,
          scaleX: workingMockScaleX,
          scaleY: workingMockScaleY,
          x: workingMockX,
          y: workingMockY
        }}
        className="relative z-40 overflow-hidden rounded-2xl border border-white/55 bg-slate-100/95 shadow-cinematic"
      >
          <div className="relative aspect-[1420/1148] overflow-hidden rounded-xl border border-slate-300/80 bg-slate-50">
            {shotmapFrames.map((frame, index) => (
              <motion.img
                key={frame.src}
                src={frame.src}
                alt={frame.alt}
                style={{ opacity: frameOpacities[index] }}
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
            ))}
            {propRevealMasks.map((mask, index) => (
              <motion.img
                key={mask}
                src={shotmapDeltas.props.src}
                alt={index === 0 ? shotmapDeltas.props.alt : ""}
                aria-hidden={index === 0 ? undefined : true}
                style={{
                  clipPath: mask,
                  opacity: propGroupOpacities[index],
                  scale: propGroupScales[index],
                  y: propGroupY[index]
                }}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
                draggable={false}
              />
            ))}
            <motion.img
              src={shotmapDeltas.props.src}
              alt=""
              aria-hidden="true"
              style={{ opacity: propsFullOpacity }}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            {characterRevealMasks.map((mask, index) => (
              <motion.img
                key={mask}
                src={shotmapDeltas.characters.src}
                alt={index === 0 ? shotmapDeltas.characters.alt : ""}
                aria-hidden={index === 0 ? undefined : true}
                style={{
                  clipPath: mask,
                  opacity: characterGroupOpacities[index],
                  rotate: characterGroupRotations[index],
                  scale: characterGroupScales[index],
                  y: characterGroupY[index]
                }}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
                draggable={false}
              />
            ))}
            <motion.img
              src={shotmapDeltas.characters.src}
              alt=""
              aria-hidden="true"
              style={{ opacity: charactersFullOpacity }}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <motion.img
              src={shotmapDeltas.motionPaths.src}
              alt={shotmapDeltas.motionPaths.alt}
              style={{ clipPath: motionPathClip, opacity: motionPathOpacity }}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            {cameraLayers.map((layer, index) => (
              <motion.img
                key={layer.src}
                src={layer.src}
                alt={layer.alt}
                style={{
                  clipPath: cameraWaveClipPaths[index],
                  opacity: cameraWaveOpacities[index],
                  scale: cameraWaveScales[index],
                  x: cameraWaveX[index],
                  y: cameraWaveY[index]
                }}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
                draggable={false}
              />
            ))}
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
            {[...shotmapFrames, ...Object.values(shotmapDeltas)].map((frame) => (
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
        style={{ opacity: packetShellOpacity, scale: packetScale }}
        className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-visible"
      >
        <div className="relative h-full aspect-[2437/3155]">
          <div className="absolute -inset-x-5 -inset-y-7 rounded-[50%] bg-blue-400/7 blur-[42px]" />
          <div className="relative h-full overflow-hidden bg-white shadow-[0_18px_54px_rgba(56,121,255,0.16)]">
            <motion.div
              style={{ opacity: packetTopOpacity }}
              className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_44%_0)]"
            >
              <img
                src="/shotmap-progress/11-export-top.png"
                alt="Camera packet export top half"
                className="h-full w-full object-contain"
                draggable={false}
              />
            </motion.div>
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
        <div className="relative aspect-[2437/3155] overflow-hidden rounded-xl border border-slate-300/80 bg-slate-50">
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
