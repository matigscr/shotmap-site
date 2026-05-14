import Link from "next/link";
import { Reveal } from "./Reveal";

export function PricingCTA() {
  return (
    <section id="pricing" className="px-5 pb-24 sm:px-8 lg:pb-32">
      <Reveal className="mx-auto max-w-xl rounded-2xl border border-blue-300/20 bg-white/[0.06] p-8 text-center shadow-cinematic">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Launch Offer
        </p>
        <h2 className="mt-5 text-4xl font-semibold text-white">Free 7-day trial</h2>
        <p className="mt-3 text-2xl font-semibold text-slate-200">
          Then $99 one-time purchase
        </p>
         <Link
          href="/download"
          prefetch={false}
          className="mt-8 inline-flex rounded-full bg-electric px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
        >
          Start Free Trial
         </Link>
        <p className="mt-5 text-xs text-slate-500">
          Pricing placeholder - final launch pricing may change.
        </p>
      </Reveal>
    </section>
  );
}
