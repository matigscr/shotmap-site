import { AccessSection } from "@/components/AccessSection";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Differentiator } from "@/components/Differentiator";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HorizontalProcess } from "@/components/HorizontalProcess";
import { OutputFeature } from "@/components/OutputFeature";
import { UseCases } from "@/components/UseCases";
import { Workflow } from "@/components/Workflow";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen text-white">
      <Hero />
      <section className="relative z-20 border-y border-white/10 bg-white/[0.025] px-5 py-3 text-center sm:px-8">
        <a
          href="/access"
          className="inline-flex max-w-full items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/[0.06] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-300/45 hover:bg-blue-400/[0.10] hover:text-blue-100"
        >
          <span className="whitespace-nowrap">Using iPad or browser? <span className="text-blue-200">Learn about Shotmap Studio Access -&gt;</span></span>
        </a>
      </section>
      <CredibilityStrip />
      <UseCases />
      <HorizontalProcess />
      <Differentiator />
      <OutputFeature />
      <Workflow />
      <AccessSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
