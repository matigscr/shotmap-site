import type { Metadata } from "next";
import Link from "next/link";
import { ActivationRequestMailer } from "@/components/buy/ActivationRequestMailer";

export const metadata: Metadata = {
  title: "Buy License | Shotmap Studio",
  description: "Purchase a Shotmap Studio license and submit an activation request."
};

export default function BuyPage() {
  const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? "";

  return (
    <main className="relative z-10 min-h-screen px-5 py-10 text-white sm:px-8 lg:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-blue-200 transition hover:text-white"
        >
          Back to Shotmap Studio
        </Link>

        <section className="pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
            Shotmap Studio License
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-none text-white sm:text-6xl">
            Buy a Shotmap Studio license
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Purchase first, then paste the activation request copied from the app so a machine-specific license file can be generated and emailed back to you.
          </p>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[1.25rem] border border-blue-300/25 bg-white/[0.07] p-7 shadow-cinematic sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Step 1
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Purchase through Stripe</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Complete payment before submitting your activation request. Use the same email address in the request form so the order can be matched quickly.
            </p>
            {stripePaymentLink ? (
              <a
                href={stripePaymentLink}
                className="mt-8 inline-flex rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
              >
                Continue to Stripe
              </a>
            ) : (
              <div className="mt-8 grid gap-3">
                <span className="inline-flex w-fit rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-slate-400">
                  Stripe Link Coming Soon
                </span>
                <p className="text-sm leading-6 text-slate-400">
                  This page is ready for the app link. Add `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` in the deployment environment to activate the checkout button.
                </p>
              </div>
            )}
          </article>

          <article className="rounded-[1.25rem] border border-blue-300/20 bg-white/[0.06] p-7 shadow-cinematic sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Step 2
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Submit activation request</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              In the app, click <strong>Copy Activation Request</strong>, then paste it here after payment. A signed license file will be emailed back for import into the app.
            </p>
            <ActivationRequestMailer />
          </article>
        </section>

        <section className="mt-8 rounded-[1.25rem] border border-blue-300/20 bg-white/[0.05] p-6 text-sm leading-7 text-slate-300 shadow-cinematic">
          <h2 className="text-xl font-semibold text-white">What happens next?</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <p>1. Your Stripe payment confirms the purchase.</p>
            <p>2. Your activation request identifies the computer to license.</p>
            <p>3. A `.shotmaplicense` file is emailed back for import in the app.</p>
          </div>
          <nav className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-blue-200">
            <Link href="/download" className="transition hover:text-white">Download app</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
            <Link href="/eula" className="transition hover:text-white">EULA</Link>
            <Link href="/refund" className="transition hover:text-white">Refund policy</Link>
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
