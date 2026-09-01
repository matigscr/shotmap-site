import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Buy License | Shotmap Studio",
  description: "Purchase a Shotmap Studio license through Stripe Checkout."
};

export default function BuyPage() {
  const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? "";

  if (stripePaymentLink) {
    redirect(stripePaymentLink);
  }

  return (
    <main className="relative z-10 min-h-screen px-5 py-10 text-white sm:px-8 lg:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-blue-200 transition hover:text-white"
        >
          Back to Shotmap Studio
        </Link>

        <section className="pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
            Shotmap Studio for Mac
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-none text-white sm:text-6xl">
            Purchase Shotmap Studio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Purchase Shotmap Studio for Mac for $99. Your desktop purchase includes one year of Shotmap Studio Access. Included Access does not auto-renew.
          </p>
        </section>

        <section className="mt-10 rounded-[1.25rem] border border-blue-300/20 bg-white/[0.06] p-6 text-sm leading-7 text-slate-300 shadow-cinematic">
          <h2 className="text-xl font-semibold text-white">Access options</h2>
          <p className="mt-4 font-semibold text-blue-100">Shotmap Studio Access is also available separately for $4.99/month or $49.99/year.</p>
          <p className="mt-4">
            Free trials do not automatically convert to paid. Paid Access starts only when you choose and complete a paid checkout.
          </p>
        </section>
      </div>
    </main>
  );
}
