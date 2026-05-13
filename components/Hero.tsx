"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProductPlaceholder } from "./Placeholders";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const exportY = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-x-hidden px-5 py-14 sm:px-8 lg:min-h-screen lg:items-start lg:pb-8 lg:pt-12"
    >
      <motion.div
        style={{ y: gridY }}
        className="cinematic-grid absolute inset-0 opacity-65 will-change-transform"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/10 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="text-center lg:text-left">
          <motion.div
            className="relative mb-6 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute left-1/2 top-1/2 h-36 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-blue-400/20 blur-3xl lg:left-[4.875rem] lg:translate-x-0" />
            <img
              src="/shotmap-studio-logo.png"
              alt="Shotmap Studio"
              className="relative h-40 w-40 object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.42)] [filter:drop-shadow(0_16px_34px_rgba(0,0,0,0.46))]"
              draggable={false}
            />
          </motion.div>
          <motion.h1
            className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05 }}
          >
            Plan and communicate complex camera coverage with speed and clarity.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 lg:mx-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
          >
            Built for production - from multicam studio shows to narrative and reality.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.26 }}
          >
            <a
              href="/download"
              className="rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
            >
              Start Free Trial
            </a>
            <a
              href="/download/sample-export"
              className="rounded-full border border-white/15 bg-white/7 px-7 py-3 text-sm font-semibold text-white transition hover:border-blue-300/60 hover:bg-white/12"
            >
              Download Sample Export
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative self-start pt-1"
        >
          <motion.div
            style={{ y: exportY }}
            className="relative will-change-transform"
          >
            <motion.div
              animate={{ y: [-8, 8, -8], scale: [1, 1.012, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative will-change-transform"
            >
              <div className="absolute left-1/2 top-1/2 h-[82%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-blue-400/16 blur-3xl" />
              <ProductPlaceholder
                label="FINAL_EXPORT_PLACEHOLDER"
                variant="export"
                className="relative"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
