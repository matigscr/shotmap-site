import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Differentiator } from "@/components/Differentiator";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HorizontalProcess } from "@/components/HorizontalProcess";
import { OutputFeature } from "@/components/OutputFeature";
import { PricingCTA } from "@/components/PricingCTA";
import { ProductionReality } from "@/components/ProductionReality";
import { UseCases } from "@/components/UseCases";
import { Workflow } from "@/components/Workflow";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen text-white">
      <Hero />
      <CredibilityStrip />
      <ProductionReality />
      <HorizontalProcess />
      <Differentiator />
      <OutputFeature />
      <UseCases />
      <Workflow />
      <FinalCTA />
      <PricingCTA />
    </main>
  );
}
