"use client";

import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { backgroundOpacity } from "./backgroundConfig";

type SchematicLayerProps = {
  x?: MotionValue<string> | MotionValue<number>;
  y?: MotionValue<string> | MotionValue<number>;
  scale?: MotionValue<number>;
  intensity?: "quiet" | "active" | "reduced";
  showPaths?: boolean;
  className?: string;
};

const intensityClass = {
  quiet: backgroundOpacity.schematicQuiet,
  active: backgroundOpacity.schematicActive,
  reduced: backgroundOpacity.schematicReduced
};

const paths = [
  {
    d: "M72 148 C180 42 310 236 462 92",
    className: "left-[4%] top-[16%] h-56 w-[34rem]",
    delay: 0
  },
  {
    d: "M48 182 C162 96 246 116 336 40 C404 -16 472 42 510 110",
    className: "right-[2%] top-[36%] h-64 w-[32rem]",
    delay: 2.4
  },
  {
    d: "M36 70 C134 160 250 18 390 132 C450 182 504 158 552 116",
    className: "left-[18%] bottom-[9%] h-52 w-[36rem]",
    delay: 4.6
  },
  {
    d: "M82 96 C190 170 286 42 402 130 C486 194 548 122 612 74",
    className: "right-[26%] bottom-[26%] h-44 w-[30rem]",
    delay: 6.1
  }
];

const cameras = [
  "left-[13%] top-[30%]",
  "right-[17%] top-[24%]",
  "left-[58%] top-[62%]",
  "right-[34%] bottom-[14%]",
  "left-[42%] top-[42%]"
];

export function SchematicLayer({
  x,
  y,
  scale,
  intensity = "quiet",
  showPaths = false,
  className = ""
}: SchematicLayerProps) {
  return (
    <motion.div
      style={{ x, y, scale }}
      className={`pointer-events-none absolute inset-0 will-change-transform ${intensityClass[intensity]} ${className}`}
      aria-hidden="true"
    >
      {showPaths &&
        paths.map((path) => (
          <svg
            key={path.d}
            className={`absolute ${path.className}`}
            viewBox="0 0 580 260"
            fill="none"
          >
            <motion.path
              d={path.d}
              stroke="rgba(120,160,255,0.1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 0.95, 0] }}
              transition={{
                duration: 9,
                delay: path.delay,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              }}
            />
          </svg>
        ))}

      {cameras.map((position, index) => (
        <motion.div
          key={position}
          className={`absolute ${position} flex items-center gap-1.5 opacity-[0.54] will-change-transform`}
          animate={{ x: [-4, 4, -4], y: [-6, 6, -6] }}
          transition={{
            duration: 10 + (index % 5),
            delay: index * 1.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[rgba(120,160,255,0.24)]" />
          <span className="h-0 w-0 border-y-[4px] border-l-[9px] border-y-transparent border-l-[rgba(120,160,255,0.18)]" />
        </motion.div>
      ))}

      {["left-[34%] top-[18%]", "right-[9%] bottom-[28%]", "left-[7%] bottom-[20%]", "right-[46%] top-[72%]"].map(
        (position, index) => (
          <motion.span
            key={position}
            className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-[rgba(120,160,255,0.18)] opacity-[0.48] will-change-transform`}
            animate={{ y: [6, -6, 6], x: [-4, 4, -4] }}
            transition={{
              duration: 11 + (index % 4),
              delay: index * 1.7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )
      )}
    </motion.div>
  );
}
