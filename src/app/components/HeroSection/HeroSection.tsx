import { IoMdCheckmark } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import iphone13 from "../../../../public/assets/iphone13.png";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="bg-[#191C21] text-white flex py-20 pt-24 flex-col md:flex-row items-center md:items-start rounded-xl max-w-5xl mx-auto min-w-full px-5 md:px-20">
      <div className="w-full flex justify-center">
        <div className="rounded-lg overflow-hidden max-w-sm md:max-w-none">
          <Image
            src={iphone13}
            width={380}
            alt="Trading desk"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full md:pl-8 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold">
          📢 Приклучи се на нашата бесплатна{" "}
          <span className="text-[#FEBF10]">Премиум Телеграм</span> група!
        </h2>

        <p className="mt-4 text-white flex items-center gap-1.5 text-2xl">
          <IoMdCheckmark /> Во рамките на групата добиваш:
        </p>
        <p className="text-white flex gap-1.5 items-center text-2xl">
          <IoMdCheckmark /> Прецизни сигнали и анализи за тргување.
        </p>
        <p className="text-white flex gap-1.5 items-center text-2xl">
          <IoMdCheckmark /> Поддршка и водство од искусни трејдери.
        </p>
        <p className="text-white flex gap-1.5 items-center text-2xl">
          <IoMdCheckmark /> Структуриран пристап за стабилен профит.
        </p>

        <p className="mt-4 font-semibold text-white text-2xl">
          🚀 Биди чекор пред другите – приклучи се сега!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <Link href="https://m.me/61573558067668">
            <button
              className="bg-[linear-gradient(88.9deg,_rgba(254,191,16,0)_6.85%,_rgba(254,191,16,0.4)_41.67%,_#FEBF10_98.87%)] text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 shadow-xl cursor-pointer"
              style={{ width: "300px" }}
            >
              🚀 Зачлени се
            </button>
          </Link>

          <Link href="#how">
            <button
              className="border border-[#FEBF10] text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 hover:bg-[#FEBF10]/10 transition"
              style={{ width: "300px" }}
            >
              <FaPlay className="text-[#FEBF10]" />
              Се прашуваш како ?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
