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

      {/* Sticky Apply Widget */}
      <Link
        href="/"
        className="group fixed left-0 top-1/2 -translate-y-1/2 z-40"
        aria-label="Аплицирај сега"
      >
        <div className="relative flex items-center gap-2 rounded-r-2xl border border-l-0 border-[#9F62F8]/40 bg-[#0f0f17]/90 backdrop-blur-md pl-4 pr-4 py-3 shadow-[0_0_24px_-6px_rgba(159,98,248,0.6)] transition-all duration-300 group-hover:border-[#9F62F8]/80 group-hover:shadow-[0_0_32px_-4px_rgba(159,98,248,0.8)] group-hover:bg-[#16102a]/90 group-hover:pr-5">
          {/* Glow bar on left edge */}
          <div className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-gradient-to-b from-[#9F62F8] to-[#7B3FE4] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#BF94FF] group-hover:text-white transition-colors duration-300 whitespace-nowrap">
            Аплицирај сега
          </span>
          <svg
            className="h-3 w-3 text-[#9F62F8] transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  );
}
