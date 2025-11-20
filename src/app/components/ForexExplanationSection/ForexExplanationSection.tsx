import Image from "next/image";
import forexTradingImage from "../../../../public/assets/forex_trading.svg";

const ForexExplanationSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section with Yellow Glow */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Yellow glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#FEBF10] opacity-20 blur-3xl transform scale-110"></div>
              
              {/* Main image */}
              <div className="relative z-10 p-8">
                <Image
                  src={forexTradingImage}
                  alt="Forex Trading Illustration"
                  className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
                  width={600}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FEBF10] mb-8">
              Што е Forex Trading?
            </h2>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
              <p>
                <strong className="text-[#FEBF10]">Форекс</strong> или тргување со странски валути, е глобален пазар каде 
                што се купуваат и продаваат валути. Со дневен обрт од над <strong className="text-[#FEBF10]">7.5 
                трилиони долари</strong>, тоа е најголемиот и најдинамичен финансиски 
                пазар во светот, кој работи <strong className="text-[#FEBF10]">24 часа</strong> на ден, од <strong className="text-[#FEBF10]">понеделник</strong> до 
                <strong className="text-[#FEBF10]"> петок</strong>.
              </p>

              <p>
                За да го објасниме <strong className="text-[#FEBF10]">Форекс</strong>, замислете дека треба да одите во 
                Америка и разменувате <strong className="text-[#FEBF10]">100€</strong> за <strong className="text-[#FEBF10]">$150</strong>. Но не сте ги потрошиле 
                додека сте таму. Се враќате во својата родна земја, истите <strong className="text-[#FEBF10]">$150</strong> ги 
                разменувате за <strong className="text-[#FEBF10]">110€</strong>. Всушност, заработавте дополнителни <strong className="text-[#FEBF10]">10€ </strong> 
                затоа што курсот на размена против долар се зголемил, и тоа е 
                причината зошто секојдневно тргувањето со форекс е популарно. 
                Тоа е слично на тргување со акции, само што ние тргуваме со 
                курсеви на размена на валути наместо со акции.
              </p>

              <p>
                Успехот во Форекс тргувањето бара добро познавање на пазарот, 
                дисциплина и јасна стратегија за тргување.
              </p>

              <p>
                <strong className="text-[#FEBF10]">Иако нуди можности за заработка, Форекс носи и значителен 
                ризик, па затоа е важно внимателно да се управува со капиталот.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexExplanationSection;