import { ProductPlaceholder } from "./Placeholders";
import { Reveal } from "./Reveal";

const bullets = [
  "Coverage decisions happen quickly.",
  "Teams need alignment immediately.",
  "Every department depends on clarity."
];

export function ProductionReality() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Production Reality
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Production moves fast. Communication has to keep up.
          </h2>
          <div className="mt-8 space-y-4">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex gap-3 text-lg text-slate-300">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-electric" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <ProductPlaceholder
            label="APP_IN_USE_PLACEHOLDER"
            variant="app"
            className="min-h-[400px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
