import { Reveal } from "./Reveal";

const logos = ["Netflix", "HBO", "FOX", "ABC", "NBC", "Food Network", "Discovery"];
const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

export function CredibilityStrip() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/[0.03] px-5 py-6 sm:px-8">
      <Reveal className="mx-auto max-w-7xl text-center">
        <p className="text-lg font-medium text-white">
          Rooted in real-world production experience on major productions.
        </p>
        <div className="relative mx-auto mt-4 max-w-5xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0a0a0d] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0a0a0d] to-transparent" />
          <div className="credit-marquee flex w-max items-center gap-8 whitespace-nowrap">
            {marqueeLogos.map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300/75"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-3 h-px max-w-3xl bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
        <div className="sr-only">
          {logos.map((logo) => (
            <span
              key={logo}
            >
              {logo}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
