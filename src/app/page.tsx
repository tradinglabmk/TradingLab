"use client";

import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import GuidanceSection from "./components/GuidanceSection/GuidanceSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { TradingIdeas } from "./components/TradingIdeas/TradingIdeas";
import { HowToJoinVideo } from "./components/Video/HowToJoinVideo";
import WhyFree from "./components/WhyFree/WhyFree";
// import TradingLabSteps from "./components/TradingLabSteps/TradingLabSteps";
import { Widgets } from "./components/Widgets/Widgets";

export default function Home() {
  return (
    <div className="w-full">
      <HowToJoinVideo/>
      <TradingIdeas />
      <HeroSection />
      {/* <TradingLabSteps /> */}
      <GuidanceSection />
      <Widgets />
      <WhyFree/>
      <FAQAccordion />
    </div>
  );
}
