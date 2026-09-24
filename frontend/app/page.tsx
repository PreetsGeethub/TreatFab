import Hero from "@/components/hero/Hero";
import BrandStatement from "@/components/brand-statement/BrandStatement";
import ProcessSection from "@/components/ProcessSection";
import ProcessDirectory from "@/components/process-directory/process-directory";
import EthicalChemistry from "@/components/ethical-chemistry/EthicalChemistry";
import ProductRange from "@/components/ProductRange/ProductRange";
import WhyTreatfabProcess from "@/components/WhyTreatFabProcess/WhyTreatFabProcess";
export default function Home() {
  return (
    <main>
      <Hero />
      <ProcessDirectory />
      <EthicalChemistry />
      <ProductRange />
      <WhyTreatfabProcess />
    </main>
  );
}