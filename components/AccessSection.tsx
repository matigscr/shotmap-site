import Link from "next/link";

export function AccessSection() {
  return (
    <section className="relative z-30 px-5 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-6">
      <div className="mx-auto grid max-w-6xl gap-5 rounded-[1.25rem] border border-blue-300/16 bg-white/[0.035] p-5 shadow-cinematic sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-blue-300">
            Shotmap Studio Access
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Use Shotmap Studio from iPad or browser.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Included for one year with every desktop purchase. Also available separately.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
          <Link
            href="/access"
            className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-blue-300/30 bg-blue-400/8 px-5 py-2.5 text-sm font-semibold text-blue-100 transition hover:border-blue-300/55 hover:bg-blue-400/14"
          >
            Learn About Access
          </Link>
          <Link
            href="/access"
            className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-300/35 hover:text-blue-100"
          >
            Open Access
          </Link>
        </div>
      </div>
    </section>
  );
}
