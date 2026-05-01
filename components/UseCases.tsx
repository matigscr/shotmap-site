import { Reveal } from "./Reveal";

const cards = [
  {
    title: "Studio & Competition Shows",
    items: ["Large camera counts", "Coordinated coverage across big sets"]
  },
  {
    title: "Multicam Reality",
    items: ["Fast-moving environments", "Clear team alignment"]
  },
  {
    title: "Narrative",
    items: ["Focused shot planning", "Precise coverage"]
  }
];

export function UseCases() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Built for complex coverage environments
        </h2>
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-cinematic">
              <div className="mb-6 h-32 rounded-xl border border-blue-300/15 bg-[radial-gradient(circle_at_30%_25%,rgba(47,140,255,0.28),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <div className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <p key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-electric" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
