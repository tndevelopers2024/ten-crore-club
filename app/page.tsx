import Script from "next/script";
import { BannerSlider } from "@/components/home/BannerSlider";
import { LuxuryTicker } from "@/components/home/LuxuryTicker";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { RegretSection } from "@/components/home/RegretSection";
import { DelayCalculatorSection } from "@/components/home/DelayCalculatorSection";
import { IndiaOpportunitySection } from "@/components/home/IndiaOpportunitySection";
import { MethodSection } from "@/components/home/MethodSection";
import { MemberStoriesSection } from "@/components/home/MemberStoriesSection";
import { CommunityPreviewSection } from "@/components/home/CommunityPreviewSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Ten Crore Club",
  description:
    "India's private wealth community for serious investors. Structured SIP plans, behavioral coaching, and the Ten Crore Method™.",
  url: "https://tencroreclub.in",
  areaServed: "IN",
  slogan: "Let Your Investments Fly Higher",
  knowsAbout: [
    "Mutual Fund SIP",
    "Wealth Creation",
    "Retirement Planning",
    "Behavioral Finance",
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="ld-financialservice"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BannerSlider />
      <LuxuryTicker />
      <HomeServicesSection />
      <HeroSection />
      <RegretSection />
      <DelayCalculatorSection />
      <IndiaOpportunitySection />
      <MethodSection />
      <MemberStoriesSection />
      <CommunityPreviewSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
