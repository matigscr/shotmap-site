import Link from "next/link";

export const metadata = {
  title: "Shotmap Studio Access",
  description: "Learn about Shotmap Studio Access for iPad and browser."
};

const details = [
  {
    title: "Use it on iPad or browser",
    body: "Shotmap Studio Access is the web and iPad version of Shotmap Studio, built for use when you are away from the desktop app."
  },
  {
    title: "Included with desktop purchase",
    body: "Every Shotmap Studio desktop purchase includes one year of Access. Access is separate from the lifetime desktop license."
  },
  {
    title: "Available separately",
    body: "Access is also available as a standalone subscription. Subscription purchase happens inside the Access app after email login and account-state check."
  },
  {
    title: "Local-first projects",
    body: "Access projects are local-first in V1. There is no cloud sync in V1."
  },
  {
    title: "Install on iPad",
    body: "On iPad, open Access in Safari and use Add to Home Screen for an app-like launch icon."
  }
];

export default function AccessPage() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden px-5 py-8 text-white sm:px-8 lg:py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
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

        <section className="py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
            Shotmap Studio Access
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-none text-white sm:text-6xl">
            Shotmap Studio for iPad and browser.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Access is the web/iPad version of Shotmap Studio. The Mac desktop app remains the primary homepage funnel, while Access gives you a separate way to work from Safari or a browser.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://access.shotmapstudio.com"
              className="inline-flex justify-center rounded-full bg-electric px-9 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
            >
              Open Shotmap Studio Access
            </a>
            <Link
              href="/download"
              className="inline-flex justify-center rounded-full border border-white/15 bg-white/[0.06] px-9 py-3.5 text-sm font-semibold text-white transition hover:border-blue-300/60 hover:bg-white/12"
            >
              Download Mac App
            </Link>
          </div>
        </section>

        <section className="grid gap-4 pb-20 md:grid-cols-2">
          {details.map((detail) => (
            <article
              key={detail.title}
              className="rounded-[1.25rem] border border-blue-300/20 bg-white/[0.06] p-6 shadow-cinematic"
            >
              <h2 className="text-xl font-semibold text-white">{detail.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-300">{detail.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
