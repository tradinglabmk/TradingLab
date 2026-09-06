"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import type { Plan } from "@/app/data/plans";

interface Props {
  plan: Plan;
}

export const PricingCard = ({ plan }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: plan.id }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Не можевме да ја креираме сесијата");
      }
      window.location.href = data.url;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Настана грешка";
      toast.error(message);
      setLoading(false);
    }
  };

  const isHighlighted = plan.highlighted;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
        isHighlighted
          ? "border-[#9F62F8]/60 bg-gradient-to-b from-[#9F62F8]/10 to-transparent shadow-[0_0_40px_-15px_rgba(159,98,248,0.5)]"
          : "border-gray-700/50 bg-white/[0.02] hover:border-gray-600/70"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#BF94FF] to-[#863DE9] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
          {plan.badge}
        </span>
      )}

      <h3 className="text-lg font-semibold text-white">{plan.title}</h3>
      <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
      <p className="mt-3 text-3xl font-bold text-white">
        €{plan.priceEUR}
        <span className="ml-2 text-sm font-normal text-gray-400">
          {plan.intervalLabel}
        </span>
      </p>
      <p className="mt-1 text-xs text-gray-500">{plan.billingLabel}</p>

      <ul className="mt-5 flex-1 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="mt-0.5 text-[#9F62F8]">▸</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`mt-6 w-full cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
          isHighlighted
            ? "bg-gradient-to-r from-[#BF94FF] to-[#863DE9] text-white hover:shadow-[0_0_20px_rgba(159,98,248,0.5)]"
            : "border border-gray-600/80 bg-white/[0.03] text-white hover:bg-white/[0.06]"
        }`}
      >
        {loading ? "Се пренасочува..." : "Плати сега"}
      </button>
    </div>
  );
};
