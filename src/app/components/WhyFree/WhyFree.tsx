import Image from "next/image";
import personImage from "../../../../public/assets/why_its_free.png";

export const WhyFree = () => {
  return (
    <div className="bg-[#111114] text-white px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-500 mb-6">
            Зошто е бесплатно ?
          </h2>
          <p className="mb-4">
            Нашата цел е да им помогнеме на што е можно повеќе луѓе да станат
            финансиски слободни преку дневно тргување или барем да заработуваат
            дополнителни пари секој ден. Секој треба да има можност да го живее
            животот од своите соништа, не само финансиски, туку и во однос на
            контролирање на сопственото време.
          </p>
          <p className="mb-4">
            Сонот на многумина е – да работат кога сакаат, од каде сакаат, а
            дневното тргување е како создадено за овој начин на живот.
          </p>
          <p className="mb-4">
            Ние пронајдовме начин ова да биде бесплатно. Склучивме партнерство
            со една од најголемите и наградувани трговски платформи во светот.
            Сè додека сите ја користиме оваа платформа за тргување, 100% од
            нашите услуги ќе бидат бесплатни за секого!
          </p>
          <p className="mb-4">
            Единствениот критериум е да имате некој капитал за тргување – за сè
            останато ќе ви помогнеме ние, на секој чекор од патот.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full max-w-md">
          <div className="overflow-hidden rounded-[30px]">
            <Image
              src={personImage}
              alt="person talking"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <p className="mt-6">
            — Спонзорирани сме од најголемите трговски платформи во светот, што
            значи дека нашата услуга е 100% бесплатна.
          </p>
        </div>
      </div>
    </div>
  );
};
