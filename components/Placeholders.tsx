"use client";

import { motion } from "framer-motion";

type PlaceholderProps = {
  label: string;
  variant?: "export" | "app" | "space" | "blocking" | "coverage" | "full";
  className?: string;
};

const cameraPositions = [
  "left-[18%] top-[28%]",
  "left-[72%] top-[24%]",
  "left-[62%] top-[68%]"
];

export function ProductPlaceholder({
  label,
  variant = "export",
  className = ""
}: PlaceholderProps) {
  return (
    <div
      className={`light-ui relative overflow-hidden rounded-2xl border border-white/70 shadow-cinematic ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/90 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-700">
          {label}
        </span>
      </div>

      <div className="relative min-h-[280px] p-5 sm:min-h-[360px] sm:p-7">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative h-full min-h-[240px] rounded-xl border border-slate-300/90 bg-white/65 p-5">
          {(variant === "space" || variant === "blocking" || variant === "coverage" || variant === "full" || variant === "export") && (
            <RoomLines />
          )}
          {(variant === "blocking" || variant === "coverage" || variant === "full" || variant === "export") && (
            <MotionPaths />
          )}
          {(variant === "coverage" || variant === "full" || variant === "export") && (
            <CameraMarks />
          )}
          {(variant === "app" || variant === "full") && <AppSidebar />}
          {variant === "export" && <Legend />}
        </div>
      </div>
    </div>
  );
}

function RoomLines() {
  return (
    <div className="absolute inset-5">
      <div className="absolute left-[8%] top-[12%] h-[64%] w-[76%] rounded-sm border-2 border-slate-800" />
      <div className="absolute left-[8%] top-[42%] h-0.5 w-[30%] bg-slate-800" />
      <div className="absolute left-[52%] top-[12%] h-[35%] w-0.5 bg-slate-800" />
      <div className="absolute bottom-[18%] right-[16%] h-16 w-28 rounded-t-full border-2 border-b-0 border-slate-700" />
      <div className="absolute bottom-[18%] left-[14%] h-10 w-24 rounded border border-slate-400 bg-slate-100/80" />
    </div>
  );
}

function MotionPaths() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 300" fill="none">
      <motion.path
        d="M98 214 C154 138 214 178 268 112 C312 58 384 76 425 122"
        stroke="#2f8cff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="10 14"
        initial={{ pathLength: 0, opacity: 0.2 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <circle cx="98" cy="214" r="8" fill="#2f8cff" />
      <circle cx="425" cy="122" r="8" fill="#2f8cff" />
    </svg>
  );
}

function CameraMarks() {
  return (
    <>
      {cameraPositions.map((position, index) => (
        <motion.div
          key={position}
          className={`absolute ${position} flex items-center gap-2`}
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.14, duration: 0.45 }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-xs font-bold text-white shadow-lg">
            C{index + 1}
          </span>
          <span className="h-0 w-0 border-y-[8px] border-l-[18px] border-y-transparent border-l-blue-500" />
        </motion.div>
      ))}
    </>
  );
}

function Legend() {
  return (
    <div className="absolute bottom-5 right-5 w-44 rounded-lg border border-slate-200 bg-white/95 p-3 shadow-lg">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
        Crew Legend
      </div>
      {["Wide", "Host", "Contestants"].map((item, index) => (
        <div key={item} className="mb-1.5 flex items-center gap-2 text-xs text-slate-700">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: ["#2f8cff", "#16a34a", "#f59e0b"][index] }}
          />
          {item}
        </div>
      ))}
    </div>
  );
}

function AppSidebar() {
  return (
    <div className="absolute left-5 top-5 w-28 rounded-lg border border-slate-200 bg-slate-50/95 p-3 shadow-sm">
      <div className="mb-3 h-2 w-14 rounded bg-slate-300" />
      <div className="space-y-2">
        <div className="h-6 rounded bg-blue-100" />
        <div className="h-6 rounded bg-slate-200" />
        <div className="h-6 rounded bg-slate-200" />
      </div>
    </div>
  );
}
