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
      <CredibilityStrip />
      <UseCases />
      <HorizontalProcess />
      <Differentiator />
      <OutputFeature />
      <Workflow />
      <FinalCTA />
      <AccessSection />
      <Footer />
    </main>
  );
}
