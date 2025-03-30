"use client";

import { MarketData } from "react-ts-tradingview-widgets";

export const Widgets = () => {
  return (
    <div style={{ minHeight: "400px" }} className="px-5 md:px-20">
      <MarketData colorTheme="dark" width="100%" height={400}></MarketData>
    </div>
  );
};
