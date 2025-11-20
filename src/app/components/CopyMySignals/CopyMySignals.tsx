"use client";

import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import macedoniaFlag from "../../../../public/assets/macedonia.png";
import germanFlag from "../../../../public/assets/german.png"
import frenchFlag from "../../../../public/assets/france.png"
import italianFlag from "../../../../public/assets/italy.png"
import spanishFlag from "../../../../public/assets/spain.png"

export const CopyMySignals = () => {
  return (
    <section className="bg-[#101015] text-white py-16 px-6 relative overflow-hidden">
      {/* Top Purple Shadow */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 md:h-40 lg:h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, transparent 0%, rgba(139, 92, 246, 0.03) 50%, rgba(139, 92, 246, 0.08) 100%)',
          filter: 'blur(20px)',
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-3xl font-normal mb-12 max-w-4xl mx-auto">
          Копирај ги моите сигнали{" "}
          <span className="text-[#9F62F8]">БЕСПЛАТНО!</span>
        </h2>

        {/* Benefits List */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-2 text-center md:text-left max-w-4xl mx-auto">
            Во рамките на групата добиваш:
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-4 font-light text-[16px]">
            <div className="flex items-start gap-3 text-lg md:text-xl">
              <IoMdCheckmark className="text-[#fff] mt-1 flex-shrink-0 text-xl" />
              <span>Бесплатен пристап до нашата трејдинг група за сигнали</span>
            </div>

            <div className="flex items-start gap-3 text-lg md:text-xl">
              <IoMdCheckmark className="text-[#fff] mt-1 flex-shrink-0 text-xl" />
              <span>Бесплатни видео анализа на маркетот секоја недела</span>
            </div>

            <div className="flex items-start gap-3 text-lg md:text-xl">
              <IoMdCheckmark className="text-[#fff] mt-1 flex-shrink-0 text-xl" />
              <span>Бесплатен пристап на видеа во вид на едукација</span>
            </div>

            <div className="flex items-start gap-3 text-lg md:text-xl">
              <IoMdCheckmark className="text-[#fff] mt-1 flex-shrink-0 text-xl" />
              <span>
                Бесплатна Е-Книга{" "}
                <span className="text-[#fff] font-normal">"The Candlestick Trading Bible"</span> од{" "}
                <span className="text-[#fff] font-normal">Munehisa Homma</span>{" "}
                преведена на македонски јазик од тимот на{" "}
                <span className="text-[#fff] font-normal">TradingLabMK</span>
              </span>
            </div>
          </div>
        </div>

        {/* Create Account Section */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-gray-300">
            Креирај сметка
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Македонија", flag: macedoniaFlag },
              { name: "Германија", flag: germanFlag },
              { name: "Италија", flag: italianFlag},
              { name: "Франција", flag: frenchFlag },
              { name: "Шпанија", flag: spanishFlag },
              { name: "Останати држави", flag: "" },
            ].map((country, index) => (
              <a
                key={index}
                href="https://go.startrader.com/visit/?bta=36621&brand=startrader"
                className="flex items-center justify-center gap-3 border border-purple-500/30 bg-purple-900/20 text-white px-6 py-4 rounded-2xl text-base font-medium hover:bg-purple-900/40 hover:border-purple-400/50 transition-all duration-300"
              >
                {country.flag &&
                  (typeof country.flag === "string" ? (
                    <span className="text-lg">{country.flag}</span>
                  ) : (
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={24}
                      height={18}
                      className="rounded-sm"
                    />
                  ))}
                <span>{country.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
