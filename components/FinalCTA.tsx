import Image from "next/image";
import { DownloadThenTrialLink } from "./DownloadThenTrialLink";

export function FinalCTA() {
  const purchaseHref = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "/buy";

  return (
    <section id="pricing" className="render-contained relative z-30 overflow-hidden px-5 pb-12 pt-6 sm:px-8 sm:pb-[4.5rem] sm:pt-8 lg:overflow-visible lg:pb-24 lg:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-blue-400/8 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-6xl min-w-0 overflow-hidden sm:overflow-visible rounded-[1.75rem] border border-blue-300/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_50%,rgba(47,140,255,0.06))] p-5 pt-8 shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:p-6 sm:pt-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-6 lg:p-8 lg:pt-10">
        <div className="pointer-events-none absolute -right-10 -top-20 sm:-right-20 sm:-top-24 h-72 w-72 rounded-full bg-blue-400/18 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-56 w-[120%] max-w-[34rem] sm:-bottom-24 sm:h-72 sm:w-[34rem] -translate-x-1/2 rounded-[50%] bg-blue-400/10 blur-3xl" />
        <div className="relative flex flex-col justify-center py-2 text-center lg:text-left">
          <div className="relative mx-auto mt-2 inline-block max-w-full lg:mx-0 lg:max-w-3xl">
            <div className="mb-4 flex flex-col items-center gap-3 lg:flex-row lg:justify-start">
              <div className="relative shrink-0">
                <div className="absolute left-1/2 top-1/2 h-[4.75rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-blue-400/26 blur-2xl" />
                <div className="relative h-14 w-14 overflow-hidden rounded-[0.5rem] shadow-[0_0_22px_rgba(59,130,246,0.46),0_12px_26px_rgba(0,0,0,0.40)]">
                  <Image
                    src="/shotmap-app-icon.png"
                    alt="Shotmap Studio"
                    width={56}
                    height={56}
                    sizes="56px"
                    className="h-full w-full object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.32em] text-blue-300 lg:text-left">
                Launch Offer
              </p>
            </div>
            <h2
                className="text-[2.15rem] font-semibold leading-none !text-white [text-shadow:0_0_24px_rgba(255,255,255,0.08)] sm:text-5xl lg:text-[3.1rem]"
              style={{ color: "#fff", opacity: 1 }}
              >
              Create and<br className="hidden sm:block" /> communicate with<br /> total clarity.
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8 lg:mx-0">
            A clean, shareable coverage schematic your entire crew understands.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none rounded-[1.25rem] border border-blue-300/25 bg-[#0a0a0d]/55 p-5 text-center shadow-[inset_0_1px_0_rgba(147,197,253,0.12)] sm:p-6">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-[50%] bg-blue-400/12 blur-3xl" />
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Free 7-day trial
            </p>
            <p className="mt-3 text-2xl font-semibold text-white sm:text-[1.7rem]">
              Then $99 one-time purchase
            </p>
            <div className="mx-auto mt-5 h-px max-w-xs bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
            <div className="mx-auto mt-5 flex w-full max-w-sm lg:max-w-none flex-col items-center justify-center gap-3">
              <div className="flex w-full flex-col justify-center gap-3">
                <DownloadThenTrialLink
                  className="relative isolate inline-flex min-h-[46px] items-center justify-center rounded-full bg-electric px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
                >
                  Start Free Trial
                </DownloadThenTrialLink>
                <a
                  href={purchaseHref}
                  className="relative isolate inline-flex min-h-[46px] items-center justify-center rounded-full border border-blue-300/40 bg-blue-400/10 px-8 py-3 text-sm font-semibold text-blue-100 transition hover:border-blue-300/70 hover:bg-blue-400/18"
                >
                  Purchase License
                </a>
              </div>
            </div>
            <p className="mt-5 text-xs text-slate-500">
              Shotmap Studio for Mac is $99. Includes one year of Shotmap Studio Access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
