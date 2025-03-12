import Image from "next/image";
import traderTrading from "../../../../public/assets/trader-trading.png";

export const HeroSection = () => {
  return (
    <div className="bg-[#191C21] text-white flex py-20 flex-col md:flex-row items-center md:items-start rounded-xl max-w-5xl mx-auto min-w-full px-5 md:px-20">
      {/* Left side - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="rounded-lg overflow-hidden max-w-sm md:max-w-none">
          <Image
            src={traderTrading}
            width={400}
            // height={300}
            alt="Trading desk"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Right side - Text and Buttons */}
      <div className="md:w-1/2 w-full md:pl-8 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold">
          Влези во нашата{" "}
          <span className="text-purple-500">Премиум Телеграм</span> група!
        </h2>
        <p className="mt-4 text-gray-400">
          Со прецизни инструкции, ќе те водиме чекор по чекор – ќе ти кажеме
          кога да отвориш или затвориш позиција, помагајќи ти да ги зголемиш
          твоите шанси за успех и да оствариш стабилен профит, исто како што го
          правиме тоа секојдневно.
        </p>
        <p className="mt-4 font-semibold text-white">
          🚀 Биди чекор пред другите – приклучи се сега!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[linear-gradient(88.9deg,_rgba(193,_23,_255,_0)_6.85%,_rgba(123,_33,_156,_0.25)_41.67%,_#700199_98.87%)] text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 shadow-xl cursor-pointer">
            🚀 Зачлени се
          </button>
          <button className="border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 shadow-xl cursor-pointer">
            ▶️ Се прашуваш како ?
          </button>
        </div>
      </div>
    </div>
  );
};
