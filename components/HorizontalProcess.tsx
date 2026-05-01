"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProductPlaceholder } from "./Placeholders";

const panels = [
  {
    eyebrow: "Walls",
    title: "Build the space",
    text: "Create sets, rooms, locations, and studio layouts.",
    label: "ROOM_LAYOUT_PLACEHOLDER",
    variant: "space" as const
  },
  {
    eyebrow: "Paths",
    title: "Create blocking",
    text: "Map talent movement, positions, and action.",
    label: "BLOCKING_PATHS_PLACEHOLDER",
    variant: "blocking" as const
  },
  {
    eyebrow: "Cameras",
    title: "Plan coverage",
    text: "Place cameras, assign colors, and clarify assignments.",
    label: "CAMERA_COVERAGE_PLACEHOLDER",
    variant: "coverage" as const
  },
  {
    eyebrow: "Export",
    title: "Deliver instantly",
    text: "Export a clean schematic with notes and legend for your crew.",
    label: "EXPORT_WITH_LEGEND_PLACEHOLDER",
    variant: "export" as const
  }
];

export function HorizontalProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end end"]
  });

  // The outer section is taller than the viewport. While the sticky child stays
  // pinned, Framer Motion converts vertical scroll progress into a horizontal
  // translate value. Progress starts before this section reaches the middle of
  // the viewport, so the first panel begins sliding in while more of the
  // previous section is still visible. It still starts fully offscreen to the right.
  const x = useTransform(scrollYProgress, [0, 0.16, 1], ["100vw", "0vw", "-300vw"]);

  return (
    <section ref={sectionRef} className="relative bg-ink lg:h-[520vh]">
      <div className="hidden lg:sticky lg:top-0 lg:block lg:h-screen lg:overflow-hidden">
        <div className="pointer-events-none absolute inset-0 cinematic-grid opacity-40" />
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {panels.map((panel, index) => (
            <article
              key={panel.title}
              className="flex h-screen w-screen items-center px-5 py-16 sm:px-8"
            >
              <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                <motion.div
                  initial={index === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
                    {panel.eyebrow} / 0{index + 1}
                  </p>
                  <h2 className="text-5xl font-semibold leading-none text-white sm:text-6xl">
                    {panel.title}
                  </h2>
                  <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                    {panel.text}
                  </p>
                </motion.div>
                <motion.div
                  initial={
                    index === 0
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.96, y: 24 }
                  }
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProductPlaceholder
                    label={panel.label}
                    variant={panel.variant}
                    className="min-h-[clamp(320px,54vh,440px)]"
                  />
                </motion.div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="px-5 py-20 sm:px-8 lg:hidden">
        <div className="mx-auto max-w-3xl space-y-16">
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
              <ProductPlaceholder
                label={panel.label}
                variant={panel.variant}
                className="mt-8 min-h-[340px]"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
