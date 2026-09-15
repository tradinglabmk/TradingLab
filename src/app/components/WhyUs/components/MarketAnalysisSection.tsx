import { MarketAnalysis } from './types';
import { VideoCarousel } from './VideoCarousel';
import { SectionHeader } from './SectionHeader';

interface MarketAnalysisSectionProps {
  analyses: MarketAnalysis[];
}

export const MarketAnalysisSection = ({ analyses }: MarketAnalysisSectionProps) => {
  return (
    <div>
      <SectionHeader
        title="Market Recap - Market Analysis - Live"
        subtitle="ПОГЛЕДНИ ЦЕЛА ЛИСТА НА YOUTUBE"
        className="text-center mb-8"
        titleClassName="text-2xl md:text-3xl font-bold mb-2"
        href="https://www.youtube.com/@tradinglabmk/streams"
      />

      <VideoCarousel
        videos={analyses}
        autoPlayInterval={4000}
        showDesktopGrid={false}
        gridCols={4}
      />
    </div>
  );
};