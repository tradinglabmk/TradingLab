import Image from "next/image";
import iphone13 from "../../../../public/assets/iphone13.png";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="bg-[#191C21] text-white flex py-20 flex-col md:flex-row items-center md:items-start rounded-xl max-w-5xl mx-auto min-w-full px-5 md:px-20">
      {/* Left side - Image */}
      <div className="w-full flex justify-center">
        <div className="rounded-lg overflow-hidden max-w-sm md:max-w-none">
          <Image
            src={iphone13}
            width={400}
            // height={300}
            alt="Trading desk"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Right side - Text and Buttons */}
      <div className="w-full md:pl-8 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold">
          📢 Приклучи се на нашата{" "}
          <span className="text-purple-500">Бесплатна Премиум Телеграм</span>{" "}
          група!
        </h2>
        <p className="mt-4 text-white">Во рамките на групата добиваш:</p>
        <p className="text-white">✔️ Прецизни сигнали и анализи за тргување.</p>
        <p className="text-white">✔️ Поддршка и водство од искусни трејдери.</p>
        <p className="text-white">
          ✔️ Структуриран пристап за стабилен профит.
        </p>

        <p className="mt-4 font-semibold text-white">
          🚀 Биди чекор пред другите – приклучи се сега!
        </p>

        {/* Buttons */}
        <div className="mt-6">
          <button
            className="bg-[linear-gradient(88.9deg,_rgba(193,_23,_255,_0)_6.85%,_rgba(123,_33,_156,_0.25)_41.67%,_#700199_98.87%)] text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 shadow-xl cursor-pointer"
            style={{ width: "300px" }}
          >
            <Link href={"https://m.me/61573558067668"}>🚀 Зачлени се</Link>
          </button>
          {/* <button className="border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 shadow-xl cursor-pointer">
            ▶️ Се прашуваш како ?
          </button> */}
        </div>
      </div>
    </div>
  );
};
