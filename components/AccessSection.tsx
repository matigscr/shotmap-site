import Link from "next/link";

export function AccessSection() {
  return (
    <section className="relative z-30 px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[1.5rem] border border-blue-300/20 bg-white/[0.05] p-6 shadow-cinematic sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Shotmap Studio Access
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Use Shotmap Studio from iPad or browser.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Access is the web and iPad version of Shotmap Studio. Desktop remains the primary app, and every desktop purchase includes one year of Access.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="https://access.shotmapstudio.com"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
          >
            Open Shotmap Studio Access
          </a>
          <Link
            href="/access"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-blue-300/35 bg-blue-400/10 px-7 py-3 text-sm font-semibold text-blue-100 transition hover:border-blue-300/70 hover:bg-blue-400/18"
          >
            Learn About Access
          </Link>
        </div>
      </div>
    </section>
  );
}
