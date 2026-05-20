"use client";

export const HowToJoinVideo = () => {
  return (
    <section className="bg-black text-white py-16 px-4 text-center pt-24">
      <div className="aspect-video max-w-5xl mx-auto rounded-[40px] overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/W2zK83kqGUI?si=AtC8L4C0XPBKUshY&autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&fs=1&disablekb=1"
          title="Why Its Free"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
