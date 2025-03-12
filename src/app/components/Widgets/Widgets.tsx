"use client";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export const Widgets = () => {
  return (
    <div style={{ minHeight: "400px" }} className="px-5 md:px-20">
      <AdvancedRealTimeChart
        theme="dark"
        autosize
        height="500"
      ></AdvancedRealTimeChart>
    </div>
  );
};
