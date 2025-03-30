"use client";

import React from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { MarketData } from "react-ts-tradingview-widgets";

const ForexComponent = () => {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* First Section */}
        <div style={{ minHeight: "400px" }}>
          <MarketOverview
            colorTheme="dark"
            height={400}
            width="100%"
            showFloatingTooltip
          ></MarketOverview>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl text-purple-400 font-bold mb-4">
            Што е Форекс тргување?
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Форекс, или тргување со странски валути, е глобален пазар каде што
            се купуваат и продаваат валути. Со дневен обрт од над 5 трилиони
            долари, тоа е најголемиот и најдинамичен финансиски пазар во светот,
            кој работи 24 часа на ден, од понеделник до петок. За да го
            објасниме Форекс, замислете дека треба да одите во Америка и
            разменувате 100 € за 150 $. Но не сте ги потрошиле додека сте
            таму.Се враќате во својата родна земја, истите 150 $ ги разменувате
            за 110 €. Всушност, заработивте дополнителни 10 € затоа што курсот
            на размена против доларот се зголемил, и тоа е причината зошто
            секојдневно тргувањето со форекс е популарно. Тоа е слично на
            тргување со акции, само што ние тргувааме со курсеви на размена на
            валути наместо со акции. Успехот во Форекс тргувањето бара добро
            познавање на пазарот, дисциплина и јасна стратегија за тргување.
            Иако нуди можности за заработка, Форекс носи и значителен ризик, па
            затоа е важно внимателно да се управува со капиталот.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        {/* Second Section */}
        <div style={{ minHeight: "400px" }}>
          <MarketData colorTheme="dark" width="100%" height={400}></MarketData>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl text-purple-400 font-bold mb-4">
            Предности со нашата заедница
          </h2>

          <p className="text-gray-300 text-sm md:text-base font-bold mb-4">
            Се е бесплатно!
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            Нашето искуство и професионално разбирање на Форекс пазарот се
            клучни за вашиот успех. Користиме метод на 80% техничка анализа и
            20% фундаментална анализа, со добро пресметан ризик, за да
            обезбедиме стабилни и профитабилни резултати. Останете поврзани со
            пазарот преку 24/7 корисничка поддршка и стручни насоки.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForexComponent;
