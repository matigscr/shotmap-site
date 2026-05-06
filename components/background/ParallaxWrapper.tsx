"use client";

import { useScroll, useTransform } from "framer-motion";
import { BackgroundBase } from "./BackgroundBase";
import { backgroundMotion, backgroundOpacity } from "./backgroundConfig";
import { GridOverlay } from "./GridOverlay";
import { SchematicLayer } from "./SchematicLayer";

export function ParallaxWrapper() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, backgroundMotion.gridParallaxY]);
  const schematicY = useTransform(scrollYProgress, [0, 1], [0, backgroundMotion.schematicParallaxY]);
  const schematicX = useTransform(scrollYProgress, [0, 1], [0, backgroundMotion.schematicParallaxX]);
  const schematicScale = useTransform(scrollYProgress, [0, 1], [1, backgroundMotion.schematicScale]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <BackgroundBase />
      <GridOverlay y={gridY} opacity={backgroundOpacity.grid} />
      <SchematicLayer
        x={schematicX}
        y={schematicY}
        scale={schematicScale}
        intensity="quiet"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(80,120,255,0.035)_0%,transparent_28%,rgba(10,10,13,0.24)_78%,rgba(10,10,13,0.54)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,transparent_0%,rgba(10,10,13,0.28)_66%,rgba(0,0,0,0.42)_100%)]" />
    </div>
  );
}
