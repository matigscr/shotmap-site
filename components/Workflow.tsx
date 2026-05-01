import { Reveal } from "./Reveal";

const items = [
  "Create blocking",
  "Plan coverage",
  "Align teams",
  "Reference instantly during production meetings"
];

export function Workflow() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Clarity from prep through production
        </h2>
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-6xl gap-3 md:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item} delay={index * 0.07}>
            <div className="relative h-full rounded-2xl border border-white/10 bg-charcoal p-5">
              <span className="mb-8 grid h-10 w-10 place-items-center rounded-full bg-blue-400/12 text-sm font-bold text-blue-200">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-white">{item}</h3>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-xl text-slate-300">
          When decisions need to happen fast, everyone sees the same plan.
        </p>
      </Reveal>
    </section>
  );
}
