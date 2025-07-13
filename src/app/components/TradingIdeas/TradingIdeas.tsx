"use client";

import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import macedoniaFlag from "../../../../public/assets/macedonia.png";
import germanFlag from "../../../../public/assets/german.png"
import frenchFlag from "../../../../public/assets/france.png"
import italianFlag from "../../../../public/assets/italy.png"
import spanishFlag from "../../../../public/assets/spain.png"

export const TradingIdeas = () => {
  return (
    <section className="bg-[#191C21] text-white py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        📢 Копирај ги нашите трејдинг идеи{" "}
        <span className="text-[#FEBF10]">БЕСПЛАТНО!</span>
      </h2>

      <div className="text-left max-w-2xl mx-auto">
        <p className="font-bold text-2xl">Во рамките на групата добиваш:</p>
        <ul className="mt-4 space-y-4">
          <li className="text-xl font-normal flex items-start gap-2">
            <IoMdCheckmark className="text-[#FEBF10] mt-1 flex-shrink-0" />
            Бесплатен пристап до нашата трејдинг група за сигнали
          </li>

          <li className="text-xl font-normal flex items-start gap-2">
            <IoMdCheckmark className="text-[#FEBF10] mt-1 flex-shrink-0" />
            <span>
              Бесплатен пристап на преку{" "}
              <span className="text-[#FEBF10] font-bold">100 видеа</span> во вид
              на едукација
            </span>
          </li>

          <li className="text-xl font-normal flex items-start gap-2">
            <IoMdCheckmark className="text-[#FEBF10] mt-1 flex-shrink-0" />
            <span>
              Бесплатна Е-Книга
              <span className="text-[#FEBF10]"> The Candlestick Trading Bible</span> од
              <span className="font-bold text-[#FEBF10]"> Munehisa Homma</span>, превод на
              македонски јазик од тимот на
              <span className="text-[#FEBF10]"> TradingLabMK</span>
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="font-bold mb-4 text-lg">Креирај сметка</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { name: "Останати држави", flag: "" },
            { name: "Македонија", flag: macedoniaFlag },
            { name: "Германија", flag: germanFlag },
            { name: "Италија", flag: italianFlag},
            { name: "Франција", flag: frenchFlag },
            { name: "Шпанија", flag: spanishFlag },
          ].map((country, index) => (
            <a
              key={index}
              href="https://go.startrader.com/visit/?bta=36621&brand=startrader"
              className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-all"
            >
              {country.flag &&
                (typeof country.flag === "string" ? (
                  <span className="text-lg">{country.flag}</span>
                ) : (
                  <Image
                    src={country.flag}
                    alt={country.name}
                    width={20}
                    height={14}
                    className="rounded-sm"
                  />
                ))}
              {country.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
