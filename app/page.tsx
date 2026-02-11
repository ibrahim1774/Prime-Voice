import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PainPoints from "@/components/PainPoints";
import BenefitsSection from "@/components/BenefitsSection";
import PricingTeaser from "@/components/PricingTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div id="hero">
        <HeroSection />
      </div>
      <HowItWorks />
      <PainPoints />
      <BenefitsSection />
      <PricingTeaser />
      <Footer />
    </main>
  );
}
