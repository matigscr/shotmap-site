import { ProductPlaceholder } from "./Placeholders";
import { Reveal } from "./Reveal";

const chips = [
  "Camera labels",
  "Color-coded assignments",
  "Crew-ready legend",
  "Notes included"
];

export function OutputFeature() {
  return (
    <section id="sample-export" className="px-5 py-24 sm:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
          Output
        </p>
        <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Communicate your coverage in seconds
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Generate a complete schematic with legend - ready for your crew.
        </p>
      </Reveal>
      <Reveal delay={0.12} className="mx-auto mt-12 max-w-6xl">
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/10 blur-3xl" />
          <ProductPlaceholder
            label="FINAL_EXPORT_WITH_LEGEND"
            variant="export"
            className="relative min-h-[520px]"
          />
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
