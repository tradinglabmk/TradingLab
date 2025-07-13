import Image from "next/image";
import whyFreeImage from "../../../../public/assets/dimce.jpg";

const WhyFreeSection = () => {
  return (
    <section className="bg-[#191C21] text-white py-16 px-5 md:px-20 flex flex-col lg:flex-row items-start gap-10">
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="text-[#FEBF10]">Зошто е бесплатно ?</span>
        </h2>

        <p className="mb-4 leading-relaxed">
          Нашата цел е да им помогнеме на што е можно повеќе луѓе да станат
          финансиски слободни преку дневно тргување или барем да заработуваат
          дополнителни пари секој ден. Секој треба да има можност да го живее
          животот од своите соништа, не само финансиски, туку и во однос на
          контролирање на сопственото време.
        </p>

        <p className="mb-4 leading-relaxed">
          Сонот на многумина е – да работат кога сакаат, од каде сакаат, а
          дневното тргување е како создадено за овој начин на живот.
        </p>

        <p className="mb-4 leading-relaxed">
          Ние пронајдовме начин ова да биде бесплатно. Склучивме партнерство со
          една од најголемите и наградувани трговски платформи во светот. Сè
          додека сите ја користиме оваа платформа за тргување, 100% од нашите
          услуги ќе бидат бесплатни за секого!
        </p>

        <p className="mb-6 leading-relaxed">
          Единствениот критериум е да имате некој капитал за тргување – за сè
          останато ќе ви помогнеме ние, на секој чекор од патот.
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
        <Image
          src={whyFreeImage}
          alt="Why it's free"
          className="rounded-3xl w-full h-auto object-cover"
        />
        <p className="italic text-lg text-[#fff] text-center max-w-md">
          — Спонзорирани сме од најголемите трговски платформи во светот, што
          значи дека нашата услуга е 100% бесплатна.
        </p>
      </div>
    </section>
  );
};

export default WhyFreeSection;
