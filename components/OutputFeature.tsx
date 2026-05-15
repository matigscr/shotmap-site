import { Reveal } from "./Reveal";

const chips = [
  "Camera labels",
  "Color-coded assignments",
  "Crew-ready legend",
  "Notes included"
];

export function OutputFeature() {
  return (
    <section
      id="sample-export"
      className="relative px-5 py-16 sm:px-8 sm:py-20 lg:hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[rgba(10,10,13,0.7)] backdrop-blur-[1.5px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
        <Reveal delay={0.08} className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute -inset-8 rounded-[2rem] bg-blue-400/20 blur-3xl" />
          <div className="relative overflow-hidden bg-white shadow-[0_24px_90px_rgba(56,121,255,0.22)]">
            <img
              src="/shotmap-progress/10-camera-packet-export.png"
              alt="Final coverage export with camera legend and notes"
              className="h-auto w-full"
              draggable={false}
            />
          </div>
        </Reveal>
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Output
          </p>
          <h2 className="text-[2rem] font-semibold leading-tight text-white sm:text-5xl">
            Communicate your coverage in seconds
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Generate a complete schematic with legend - ready for your crew.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100"
              >
                {chip}
              </span>
            ))}
          </div>
          <a
            href="/download/sample-export"
            className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
          >
            Download Sample Export
          </a>
        </Reveal>
      </div>
    </section>
  );
}
