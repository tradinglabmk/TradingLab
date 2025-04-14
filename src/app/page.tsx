"use client";

import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import GuidanceSection from "./components/GuidanceSection/GuidanceSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { TradingIdeas } from "./components/TradingIdeas/TradingIdeas";
import { VimeoPlayer } from "./components/VimeoPlayer/VimeoPlayer";
import { WhyFree } from "./components/WhyFree/WhyFree";
// import TradingLabSteps from "./components/TradingLabSteps/TradingLabSteps";
import { Widgets } from "./components/Widgets/Widgets";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      {/* <TradingLabSteps /> */}
      <VimeoPlayer />
      <Widgets />
      <TradingIdeas />
      <GuidanceSection />
      <WhyFree />
      <FAQAccordion />
    </div>
  );
}
