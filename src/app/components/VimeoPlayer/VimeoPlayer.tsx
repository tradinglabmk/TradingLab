export const VimeoPlayer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#191C21] px-4">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">
        <span className="text-purple-500 font-bold">ВИДЕО</span> објаснување
        како да станете член !
      </h2>
      <div className="rounded-[40px] border border-white w-full max-w-4xl aspect-video overflow-hidden mb-12">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/W6lXoIM44is?si=td37tpChfZx584d3&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
