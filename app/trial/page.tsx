import Link from "next/link";

export const metadata = {
  title: "Start Your Trial | Shotmap Studio",
  description: "How to start the 7-day Shotmap Studio trial after downloading the Mac app."
};

export default function TrialPage() {
  const purchaseHref = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "/buy";

  return (
    <main className="relative z-10 min-h-screen overflow-hidden px-5 py-8 text-white sm:px-8 lg:py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col">
        <nav className="flex items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-semibold text-blue-200 transition hover:text-white">
            Back to Shotmap Studio
          </Link>
          <Link href="/download" className="text-slate-400 transition hover:text-white">
            Download again
          </Link>
        </nav>

        <section className="flex flex-1 items-center justify-center py-16">
          <div className="w-full max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
              Free 7-day trial
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-semibold leading-none text-white sm:text-6xl">
              Start your trial inside the app.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Once the download finishes, install Shotmap Studio and begin the trial from the app.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-left">
              {[
                "Open the downloaded DMG.",
                "Move Shotmap Studio into Applications.",
                "Launch Shotmap Studio.",
                "Choose Start Free Trial inside the app.",
                "After purchase, enter the activation code from your purchase email inside the app."
              ].map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[2.25rem_1fr] items-start gap-4 rounded-2xl border border-blue-300/20 bg-white/[0.06] p-4 shadow-cinematic"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-400/15 text-sm font-semibold text-blue-200">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/download"
                className="inline-flex justify-center rounded-full border border-white/15 bg-white/[0.06] px-9 py-3.5 text-sm font-semibold text-white transition hover:border-blue-300/60 hover:bg-white/12"
              >
                Download again
              </Link>
              <a
                href={purchaseHref}
                className="inline-flex justify-center rounded-full bg-electric px-9 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
              >
                Purchase License
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
