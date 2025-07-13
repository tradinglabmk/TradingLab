"use client";

export const HowToJoinVideo = () => {
  return (
    <section className="bg-[#191C21] text-white py-16 px-4 text-center pt-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        <span className="text-[#FEBF10]">ВИДЕО</span> објаснување како да станете член !
      </h2>

      <div className="aspect-video max-w-4xl mx-auto border border-white rounded-[40px] overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/W6lXoIM44is"
          title="How to Join"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
