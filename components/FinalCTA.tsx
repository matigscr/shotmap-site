import Link from "next/link";

export function FinalCTA() {
  return (
    <section id="pricing" className="relative z-30 overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:overflow-visible lg:py-32">
      <div className="absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-blue-400/8 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-6xl min-w-0 overflow-hidden sm:overflow-visible rounded-[1.75rem] border border-blue-300/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_50%,rgba(47,140,255,0.06))] p-6 pt-12 shadow-[0_28px_100px_rgba(0,0,0,0.42)] sm:p-8 sm:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:p-10 lg:pt-14">
        <div className="pointer-events-none absolute -right-10 -top-20 sm:-right-20 sm:-top-24 h-72 w-72 rounded-full bg-blue-400/18 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-56 w-[120%] max-w-[34rem] sm:-bottom-24 sm:h-72 sm:w-[34rem] -translate-x-1/2 rounded-[50%] bg-blue-400/10 blur-3xl" />
        <div className="relative flex flex-col justify-center py-4 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
            Launch Offer
          </p>
          <div className="relative mx-auto mt-5 inline-block max-w-full lg:mx-0 lg:max-w-4xl">
            <div className="pointer-events-none absolute left-[72%] top-[calc(0.62em-25px)] z-10 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 overflow-visible p-2 sm:block lg:left-[78%] lg:h-32 lg:w-32">
              <div className="absolute inset-[-28px] rounded-full bg-blue-400/34 blur-2xl" />
              <img
                src="/shotmap-app-icon.png"
                alt="Shotmap Studio"
                className="relative h-full w-full rounded-[14px] object-contain drop-shadow-[0_0_28px_rgba(59,130,246,0.68)]"
                draggable={false}
              />
            </div>
            <h2
                className="text-[2.35rem] font-semibold sm:text-6xl leading-none !text-white [text-shadow:0_0_24px_rgba(255,255,255,0.08)]"
              style={{ color: "#fff", opacity: 1 }}
              >
              Create and<br className="hidden sm:block" /> communicate with<br /> total clarity.
            </h2>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8 text-slate-300 lg:mx-0">
            A clean, shareable coverage schematic your entire crew understands.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none rounded-[1.35rem] border border-blue-300/25 bg-[#0a0a0d]/55 p-6 text-center shadow-[inset_0_1px_0_rgba(147,197,253,0.12)] sm:p-8">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-[50%] bg-blue-400/12 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Free 7-day trial
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">
              Then $99 one-time purchase
            </p>
            <div className="mx-auto mt-7 h-px max-w-xs bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
            <div className="mx-auto mt-7 flex w-full max-w-sm lg:max-w-none flex-col justify-center gap-3">
               <Link
                href="/download"
                prefetch={false}
                className="relative isolate inline-flex min-h-[46px] items-center justify-center rounded-full bg-electric px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
              >
                Start Free Trial
               </Link>
              <Link
                href="/buy"
                prefetch={false}
                className="relative isolate inline-flex min-h-[46px] items-center justify-center rounded-full border border-blue-300/40 bg-blue-400/10 px-8 py-3 text-sm font-semibold text-blue-100 transition hover:border-blue-300/70 hover:bg-blue-400/18"
              >
                Purchase License
               </Link>
              <a
                href="/download/sample-export"
                className="relative isolate inline-flex min-h-[46px] items-center justify-center rounded-full border border-blue-300/30 bg-[#0a0a0d]/75 px-8 py-3 text-sm font-semibold text-white transition hover:border-blue-300/70 hover:bg-white/12"
              >
                Download Sample Export
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Pricing placeholder - final launch pricing may change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
