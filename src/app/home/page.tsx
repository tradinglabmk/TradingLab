import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import GuidanceSection from "../components/GuidanceSection/GuidanceSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { CopyMySignals } from "../components/CopyMySignals/CopyMySignals";
import { HowToJoinVideo } from "../components/Video/HowToJoinVideo";
import WhyFree from "../components/WhyFree/WhyFree";
import { WhyUs } from "../components/WhyUs/WhyUs";
import TelegramSection from "../components/TelegramSection/TelegramSection";
import CommunitySection from "../components/CommunitySection/CommunitySection";
import { SEOScrollWrapper } from "../components/SEOScrollWrapper/SEOScrollWrapper";
import Link from "next/link";
import { ApplyWidget } from "../components/ApplyWidget/ApplyWidget";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />

      <SEOScrollWrapper animationType="fadeInUp" delay={0} duration={0.8}>
        <HowToJoinVideo />
      </SEOScrollWrapper>

      <SEOScrollWrapper animationType="slideUp" delay={100} duration={0.9}>
        <CopyMySignals />
      </SEOScrollWrapper>

      <SEOScrollWrapper animationType="fadeInLeft" delay={200} duration={0.8}>
        <WhyFree />
      </SEOScrollWrapper>

      <SEOScrollWrapper animationType="fadeInRight" delay={150} duration={0.9}>
        <WhyUs />
      </SEOScrollWrapper>

      <SEOScrollWrapper animationType="zoomIn" delay={100} duration={0.7}>
        <TelegramSection />
      </SEOScrollWrapper>

      <CommunitySection />

      <SEOScrollWrapper animationType="slideUp" delay={150} duration={0.9}>
        <GuidanceSection />
      </SEOScrollWrapper>

      <FAQAccordion />

      <ApplyWidget />
    </div>
  );
}
