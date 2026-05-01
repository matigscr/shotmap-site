import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="px-5 py-24 text-center sm:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-4xl">
        <h2 className="text-5xl font-semibold leading-none text-white sm:text-6xl">
          Walk away with total clarity
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          A clean, shareable coverage schematic your entire crew understands.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
          >
            Start Free Trial
          </a>
          <a
            href="#sample-export"
            className="rounded-full border border-white/15 bg-white/7 px-7 py-3 text-sm font-semibold text-white transition hover:border-blue-300/60 hover:bg-white/12"
          >
            Download Sample Export
          </a>
        </div>
      </Reveal>
    </section>
  );
}
