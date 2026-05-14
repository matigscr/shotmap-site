import { Reveal } from "./Reveal";

const items = [
  "Create blocking",
  "Plan coverage",
  "Align teams",
  "Production reference"
];

export function Workflow() {
  return (
    <section className="relative z-20 bg-white/[0.014] px-5 pb-10 pt-3 sm:px-8 sm:pt-4 lg:-mt-[135vh]">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="text-4xl font-semibold leading-tight !text-white [text-shadow:0_0_24px_rgba(255,255,255,0.08)] sm:text-5xl"
          style={{ color: "#fff", opacity: 1 }}
        >
          Clarity from prep through production
        </h2>
      </div>
      <div className="relative mx-auto mt-8 max-w-6xl overflow-visible rounded-[1.75rem]">
        <div className="workflow-progress-sweep pointer-events-none absolute inset-y-3 left-0 right-0 rounded-[50%] bg-blue-400/12 blur-3xl" />
        <div className="pointer-events-none absolute left-10 right-10 top-9 hidden h-px bg-gradient-to-r from-transparent via-blue-200/35 to-transparent md:block" />
        <div className="relative grid gap-4 md:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 0.07}>
              <div className="group relative h-full min-h-[132px] overflow-hidden rounded-[1.15rem] border border-blue-200/30 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025)_56%,rgba(47,140,255,0.075))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent" />
                <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-blue-400/14 blur-3xl transition duration-500 group-hover:bg-blue-300/22" />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-blue-200/35 bg-blue-300/10 text-sm font-bold text-blue-100 shadow-[0_0_24px_rgba(59,130,246,0.22)]">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold leading-tight text-white">{item}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
