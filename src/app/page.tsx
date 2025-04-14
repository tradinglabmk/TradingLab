import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import GuidanceSection from "./components/GuidanceSection/GuidanceSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { TradingIdeas } from "./components/TradingIdeas/TradingIdeas";
import { VimeoPlayer } from "./components/VimeoPlayer/VimeoPlayer";
import { Widgets } from "./components/Widgets/Widgets";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      {/* <TradingLabSteps /> */}
      <VimeoPlayer />
      <TradingIdeas />
      <Widgets />
      <GuidanceSection />
      <FAQAccordion />
    </div>
  );
}
