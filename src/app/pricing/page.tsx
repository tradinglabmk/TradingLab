import { redirect } from "next/navigation";
import { PricingSection } from "../components/Pricing/PricingSection";

export const metadata = {
  title: "Цени | TradingLab",
  description:
    "Изберете помеѓу Group Coaching и Trading Signals — месечни или пакетни планови.",
};

export default function PricingPage() {
  if (process.env.NEXT_PUBLIC_SHOW_PRICING !== "true") {
    redirect("/home");
  }
  return (
    <div className="bg-[#0F0F14] min-h-screen pt-[80px]">
      <PricingSection />
    </div>
  );
}
