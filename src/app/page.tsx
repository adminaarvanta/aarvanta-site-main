import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import PositioningSection from "@/components/home/PositioningSection";
import ProductsSection from "@/components/home/ProductsSection";
import UspSection from "@/components/home/UspSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import PartnerSection from "@/components/home/PartnerSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import GlobalSection from "@/components/home/GlobalSection";
import PricingSection from "@/components/home/PricingSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PositioningSection />
      <ProductsSection />
      <UspSection />
      <IndustriesSection />
      <PartnerSection />
      <CaseStudiesSection />
      <GlobalSection />
      <PricingSection />
      <FinalCtaSection />
    </>
  );
}
