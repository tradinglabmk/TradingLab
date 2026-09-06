// Client-safe plan metadata. Real Stripe Price IDs live in env vars and are
// resolved on the server only (see src/utils/server/stripePrices.ts).

export type PlanCategory = "group" | "signals" | "test";
export type PlanMode = "subscription" | "payment";

export interface Plan {
  id: string;
  category: PlanCategory;
  title: string;
  description: string;
  priceEUR: number;
  billingLabel: string;
  intervalLabel: string;
  mode: PlanMode;
  features: string[];
  badge?: string;
  highlighted?: boolean;
}

const showTestPlan = process.env.NEXT_PUBLIC_SHOW_TEST_PLAN === "true";

export const PLANS: Plan[] = [
  {
    id: "group_monthly",
    category: "group",
    title: "Group Coaching — месечно",
    description:
      "Континуирана поддршка и едукација во мала група, со автоматско месечно обновување.",
    priceEUR: 67,
    billingLabel: "€67 / месечно",
    intervalLabel: "/ месечно",
    mode: "subscription",
    features: [
      "Пристап до неделни сесии",
      "Снимка од секој одржан час",
      "Пристап до сите претходно снимени лекции",
      "Пристап до сите TradingLab индикатори",
      "Практична анализа на реални пазарни ситуации",
      "Неделна анализа и подготовка за пазарот",
      "Насоки за изработка на сопствен Trading Plan",
      "Поддршка во текот на целиот процес на учење",
      "Пристап до затворената едукативна заедница",
      "Пристап до сите позиции на менторот",
    ],
  },
  {
    id: "group_3m",
    category: "group",
    title: "Group Coaching — 3 месеци",
    description:
      "Иста програма по поповолна цена, со автоматско обновување на следните 3 месеци.",
    priceEUR: 150,
    billingLabel: "€150 на следните 3 месеци",
    intervalLabel: "на следните 3 месеци",
    mode: "subscription",
    badge: "Најпопуларно",
    highlighted: true,
    features: [
      "Сè од месечниот план",
      "Заклучена цена за 3 месеци",
      "Заштеда од €51 споредено со месечно",
      "Автоматско обновување на следните 3 месеци",
    ],
  },
  {
    id: "group_6m",
    category: "group",
    title: "Group Coaching — 6 месеци",
    description:
      "Најголема заштеда со еднократна уплата за 6 месеци пристап, без автоматско обновување.",
    priceEUR: 300,
    billingLabel: "€300 еднократно · 6 месеци",
    intervalLabel: "еднократно",
    mode: "payment",
    features: [
      "Сè од месечниот план",
      "Заклучена цена за 6 месеци",
      "Заштеда од €102 споредено со месечно",
    ],
  },
  {
    id: "signals_monthly",
    category: "signals",
    title: "Trading Signals — месечно",
    description:
      "Дневни trading сигнали директно во вашиот инбокс, со автоматско месечно обновување.",
    priceEUR: 50,
    billingLabel: "€50 / месечно",
    intervalLabel: "/ месечно",
    mode: "subscription",
    features: [
      "Дневни trading signals",
      "Точки за влез, стоп и цел",
      "Достапни преку Telegram",
      "Автоматско месечно обновување",
      "Откажување во било кое време",
    ],
  },
  ...(showTestPlan
    ? [
        {
          id: "test_1eur",
          category: "test" as PlanCategory,
          title: "Тест плаќање",
          description:
            "Само за проверување на live плаќања — не е вистински план.",
          priceEUR: 1,
          billingLabel: "€1 еднократно",
          intervalLabel: "еднократно",
          mode: "payment" as PlanMode,
          features: ["Само за тестирање"],
        },
      ]
    : []),
];

export function getPlanById(id: string): Plan | undefined {
  return PLANS.find((p) => p.id === id);
}
