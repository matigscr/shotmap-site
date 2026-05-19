import Image from "next/image";
import { Reveal } from "./Reveal";

const cards = [
  {
    title: "Studio & Competition Shows",
    image: "/usecase-studio.png",
    items: ["Large camera counts", "Coordinated coverage across big sets"]
  },
  {
    title: "Multicam Reality",
    image: "/usecase-multicam.png",
    items: ["Fast-moving environments", "Clear team alignment"]
  },
  {
    title: "Narrative",
    image: "/usecase-narrative.png",
    items: ["Focused shot planning", "Precise coverage"]
  }
];

export function UseCases() {
  return (
    <section className="render-contained px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:pb-14 lg:pt-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-[2rem] font-semibold leading-tight text-white sm:text-5xl">
          For complex coverage environments
        </h2>
      </Reveal>
      <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.08}>
            <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-blue-300/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025)_48%,rgba(47,140,255,0.04))] p-5 sm:p-7 shadow-[0_22px_80px_rgba(0,0,0,0.34)]">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-[50%] bg-blue-400/12 blur-3xl" />
              <div className="relative mb-7 aspect-[1340/804] overflow-hidden rounded-xl border border-blue-300/30 bg-slate-950/35 shadow-[inset_0_1px_0_rgba(147,197,253,0.12)]">
                <Image
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  width={1340}
                  height={804}
                  sizes="(min-width: 768px) 31vw, 90vw"
                  className="h-full w-full object-cover opacity-95 saturate-[1.08]"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-300/10 via-transparent to-black/10" />
              </div>
              <h3 className="relative text-xl font-semibold text-white">{card.title}</h3>
              <div className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <p key={item} className="relative flex gap-3 text-sm text-slate-300">
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
