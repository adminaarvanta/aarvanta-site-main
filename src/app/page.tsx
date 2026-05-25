import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import ProductsPreviewSection from "@/components/home/ProductsPreviewSection";
import StatsSection from "@/components/home/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutPreviewSection />
      <ProductsPreviewSection />
      <StatsSection />
    </>
  );
}
