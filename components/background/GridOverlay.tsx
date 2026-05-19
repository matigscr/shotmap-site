"use client";

import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { backgroundMotion } from "./backgroundConfig";

type GridOverlayProps = {
  y: MotionValue<number>;
  opacity?: number;
  reduceMotion?: boolean | null;
};

export function GridOverlay({ y, opacity = 0.72, reduceMotion = false }: GridOverlayProps) {
  return (
    <motion.div
      style={{ y: reduceMotion ? 0 : y, opacity }}
      className="coverage-grid-plane absolute -inset-x-28 -inset-y-32 origin-center will-change-transform"
    >
      <motion.div
        animate={reduceMotion ? undefined : {
          x: [0, backgroundMotion.gridDriftX],
          y: [0, backgroundMotion.gridDriftY]
        }}
        transition={reduceMotion ? undefined : {
          duration: 96,
          ease: "linear",
          repeat: Infinity
        }}
        className="coverage-grid-drift absolute inset-0 will-change-transform"
      />
      <div className="coverage-grid-falloff absolute inset-0" />
    </motion.div>
  );
}
