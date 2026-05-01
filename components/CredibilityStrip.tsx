import { Reveal } from "./Reveal";

const logos = ["Netflix", "HBO", "FOX", "ABC", "NBC", "Food Network", "Discovery"];

export function CredibilityStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-5 py-10 sm:px-8">
      <Reveal className="mx-auto max-w-7xl text-center">
        <p className="text-lg font-medium text-white">
          Built from real-world production experience on major productions.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {logos.map((logo) => (
            <span
              key={logo}
              className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200"
            >
              {logo}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-400">
          40+ years of production experience · Emmy-winning background
        </p>
      </Reveal>
    </section>
  );
}
