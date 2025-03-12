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
            кој работи 24 часа на ден, од понеделник до петок.
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            Успехот во Форекс тргувањето бара добро познавање на пазарот,
            дисциплина и јасна стратегија за тргување. Иако нуди можности за
            заработка, Форекс носи и значителен ризик, па затоа е важно
            внимателно да се управува со капиталот.
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
            Предности од тргувањето на Форекс пазарот со{" "}
            <span className="text-purple-500">TradingLab MK</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            TradingLab MK го прави Форекс тргувањето едноставно и достапно.
            Нашата платформа ви овозможува ефикасно тргување со резултати во
            реално време и лесни за користење алатки. Останете поврзани со
            пазарот преку 24/7 корисничка поддршка и стручни насоки. Добијте
            пристап до врвни едукатори за тргување и нашата ексклузивна услуга
            Forex Signals за подобрување на вашите трговски вештини. Со повеќе
            од три години искуство, TradingLab MK е посветен на вашето успешно
            тргување на Форекс пазарот.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForexComponent;
