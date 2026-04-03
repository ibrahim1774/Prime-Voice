import HomeHero from "@/components/HomeHero";
import DemoSection from "@/components/DemoSection";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import PricingTeaser from "@/components/PricingTeaser";
import PhoneCapture from "@/components/PhoneCapture";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <DemoSection />
      <PainPoints />
      <HowItWorks />
      <BenefitsSection />
      <PricingTeaser />
      <PhoneCapture />
      <FinalCTA />
      <Footer />
    </main>
  );
}
