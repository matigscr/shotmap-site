"use client";

import Image from "next/image";
import { DownloadThenTrialLink } from "./DownloadThenTrialLink";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProductPlaceholder } from "./Placeholders";

export function Hero() {
  const purchaseHref = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "/buy";

  const shouldReduceMotion = useReducedMotion();
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
      className="relative flex min-h-[calc(100svh-96px)] items-center overflow-x-hidden px-5 pb-5 pt-10 sm:min-h-[calc(100svh-104px)] sm:px-8 sm:pb-6 sm:pt-12 lg:min-h-[calc(100vh-112px)] lg:items-start lg:pb-5 lg:pt-12"
    >
      <motion.div
        style={{ y: gridY }}
        className="cinematic-grid pointer-events-none absolute inset-0 opacity-65 will-change-transform"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/10 to-transparent" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-20 text-center lg:text-left">
          <motion.div
            className="relative mb-4 flex justify-center sm:mb-5 lg:justify-start"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-40 sm:h-40 sm:w-52 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-blue-400/30 blur-3xl lg:left-[4.625rem] lg:translate-x-0" />
            <div className="relative h-[6.5rem] w-[6.5rem] sm:h-[9.25rem] sm:w-[9.25rem] overflow-hidden rounded-[1.3rem] shadow-[0_0_34px_rgba(59,130,246,0.54),0_18px_38px_rgba(0,0,0,0.48)]">
              <Image
                src="/shotmap-app-icon.png"
                alt="Shotmap Studio"
                width={148}
                height={148}
                priority
                sizes="(min-width: 640px) 148px, 104px"
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>
          </motion.div>
          <motion.h1
            className="mx-auto max-w-5xl text-[2.62rem] font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-[3.9rem] xl:text-[4rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05 }}
          >
            Plan and communicate complex camera coverage with speed and clarity.
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base sm:mt-6 sm:text-lg leading-8 text-slate-300 lg:mx-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
          >
            Built for production - from multicam studio shows to narrative and reality.
          </motion.p>
          <motion.div
            className="relative z-30 mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 lg:items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.26 }}
          >
            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <DownloadThenTrialLink
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
              >
                Start Free Trial
              </DownloadThenTrialLink>
              <a
                href={purchaseHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-blue-300/35 bg-blue-400/10 px-7 py-3 text-sm font-semibold text-blue-100 transition hover:border-blue-300/70 hover:bg-blue-400/18"
              >
                Purchase License
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none relative z-0 self-start pt-0 sm:pt-1"
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
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-blue-400/16 blur-3xl" />
              <ProductPlaceholder
                label="FINAL_EXPORT_PLACEHOLDER"
                variant="export"
                className="shotmap-mobile-export relative"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.a
        href="#shotmap-in-action"
        className="absolute bottom-2 left-1/2 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center text-blue-100/30 transition hover:text-blue-100/55 sm:bottom-3"
        initial={{ opacity: 0, y: 8 }}
        animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, 4, 0] }}
        transition={shouldReduceMotion ? { duration: 0.7, delay: 1.05 } : { opacity: { duration: 0.7, delay: 1.05 }, y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" } }}
        aria-label="Scroll"
      >
        <span className="h-5 w-px bg-gradient-to-b from-current via-current/45 to-transparent" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
