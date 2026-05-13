import { Reveal } from "./Reveal";

const items = [
  "Create blocking",
  "Plan coverage",
  "Align teams",
  "Production reference"
];

export function Workflow() {
  return (
    <section className="relative z-20 bg-white/[0.014] px-5 pb-10 pt-3 sm:px-8 sm:pt-4 lg:-mt-[66vh]">
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
        <div className="relative grid gap-3 md:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 0.07}>
              <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-blue-300/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025)_52%,rgba(47,140,255,0.04))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-20 rounded-[50%] bg-blue-400/10 blur-3xl" />
                <span className="relative mb-8 grid h-10 w-10 place-items-center rounded-full bg-blue-400/12 text-sm font-bold text-blue-200">
                  {index + 1}
                </span>
                <h3 className="relative text-lg font-semibold text-white">{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
