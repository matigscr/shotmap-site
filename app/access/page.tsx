import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Shotmap Studio Access",
  description: "Use Shotmap Studio from iPad or browser."
};

const details = [
  {
    title: "Included with desktop purchase",
    body: "Every Shotmap Studio desktop purchase includes one year of Shotmap Studio Access."
  },
  {
    title: "Available separately",
    body: "Standalone Access is available for $4.99/month or $49.99/year."
  },
  {
    title: "Local-first projects",
    body: "Projects are stored locally on your device and do not automatically sync. Export project files to move work between desktop and iPad/browser."
  },
  {
    title: "Install on iPad",
    body: "On iPad, open Access in Safari and use Add to Home Screen for an app-like launch icon."
  }
];

export default function AccessPage() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-[#0a0a0d] px-5 py-8 text-white sm:px-8 lg:py-10">
      <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-[50%] bg-blue-400/12 blur-[150px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col">
        <nav className="flex items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-semibold text-blue-200 transition hover:text-white">
            Back to Shotmap Studio
          </Link>
          <a
            href="https://access.shotmapstudio.com"
            className="text-slate-400 transition hover:text-white"
          >
            Open Access
          </a>
        </nav>

        <section className="grid flex-1 items-center gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.86fr] lg:py-20">
          <div className="text-center lg:text-left">
            <div className="mb-5 flex flex-col items-center gap-3 text-center lg:flex-row lg:items-center lg:text-left">
              <div className="relative shrink-0">
                <div className="absolute left-1/2 top-1/2 h-20 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-blue-400/28 blur-2xl" />
                <div className="relative h-16 w-16 overflow-hidden rounded-[0.55rem] shadow-[0_0_26px_rgba(59,130,246,0.50),0_14px_30px_rgba(0,0,0,0.42)]">
                  <Image
                    src="/shotmap-app-icon.png"
                    alt="Shotmap Studio"
                    width={64}
                    height={64}
                    priority
                    sizes="64px"
                    className="h-full w-full object-contain"
                    draggable={false}
                  />
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
                Shotmap Studio Access
              </p>
            </div>
            <h1 className="mx-auto mt-5 max-w-4xl lg:mx-0 text-[2.6rem] font-semibold leading-[0.98] text-white sm:text-6xl lg:text-[4rem]">
              Use Shotmap Studio from iPad or browser.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl lg:mx-0 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Access is the web/iPad version of Shotmap Studio, built for working away from the desktop app.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="https://access.shotmapstudio.com"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-electric px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
              >
                Open Access
              </a>
              <Link
                href="/"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-8 py-3 text-sm font-semibold text-white transition hover:border-blue-300/60 hover:bg-white/12"
              >
                Back to Shotmap Studio
              </Link>
            </div>
          </div>

          <div className="relative rounded-[1.5rem] border border-blue-300/20 bg-white/[0.045] p-5 shadow-cinematic sm:p-6">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-[50%] bg-blue-400/12 blur-3xl" />
            <div className="relative space-y-4">
              {details.map((detail) => (
                <article
                  key={detail.title}
                  className="rounded-[1.15rem] border border-blue-300/18 bg-[#0a0a0d]/45 p-5 shadow-[inset_0_1px_0_rgba(147,197,253,0.10)]"
                >
                  <h2 className="text-lg font-semibold text-white">{detail.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    {detail.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
