import { ForexVideo, SectionHeader, VideoCarousel } from "./";

interface ForexAcademySectionProps {
  videos: ForexVideo[];
}

export const ForexAcademySection = ({ videos }: ForexAcademySectionProps) => {
  return (
    <section className="mb-20" id="forex-academy">
      <SectionHeader
        title={
          <>
            Forex <span className="text-gray-400">Академија - From</span>{" "}
            <span className="text-white">Zero</span>{" "}
            <span className="text-gray-400">to</span>{" "}
            <span className="text-white">Hero</span>
          </>
        }
        href="https://youtube.com/playlist?list=PLhNrjUko0M7I3GBCNlO5QvtJHtDuOnvKF&si=Mrv4RdP0SaWJNAN4"
        subtitle="ПОГЛЕДНИ ЦЕЛА ЛИСТА НА YOUTUBE"
      />

      <VideoCarousel
        videos={videos}
        autoPlayInterval={3500}
        showDesktopGrid={true}
        gridCols={4}
        containerClassName="bg-[#00D4AA]"
      />
    </section>
  );
};
