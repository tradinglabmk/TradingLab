"use client";

import {
  MarketAnalysisSection,
  ComparisonSection,
  ForexAcademySection,
  forexVideos,
  marketAnalysisData,
} from "./";

export const WhyUs = () => {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <ComparisonSection />
        <ForexAcademySection videos={forexVideos} />
        <MarketAnalysisSection analyses={marketAnalysisData} />
      </div>
    </section>
  );
};
