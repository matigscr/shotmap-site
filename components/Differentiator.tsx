import { Reveal } from "./Reveal";

const bullets = [
  "Directors define intent.",
  "Camera operators understand assignments.",
  "DP and lighting align instantly.",
  "Everyone sees the same plan."
];

export function Differentiator() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hidden lg:block" aria-hidden="true" />
        <Reveal delay={0.12}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Final Coverage First
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Designed around the final coverage - not just the creation
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every tool in the app is built with one goal in mind: clearly communicating your
            blocking and coverage to the entire team.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div
                key={bullet}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-medium text-slate-200"
              >
                {bullet}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
