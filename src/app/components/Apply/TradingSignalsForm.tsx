"use client";

import { useState } from "react";
import { Button } from "../Button/Button";

// Section 3V: Experience & Account
const tradingDurationOptions = [
  "Немам претходно искуство",
  "Помалку од 3 месеци",
  "Од 3 до 6 месеци",
  "Од 6 до 12 месеци",
  "Од 1 до 2 години",
  "Од 2 до 5 години",
  "Повеќе од 5 години",
];

const previousSignalsOptions = [
  "Да, сè уште користам",
  "Да, но повеќе не ги користам",
  "Сум пробал краток период",
  "Никогаш не сум користел",
  "Не сум сигурен како функционираат",
];

const accountTypeOptions = [
  "Demo сметка",
  "Лична Live сметка",
  "Prop Firm Challenge",
  "Funded Prop Firm сметка",
  "На повеќе видови сметки",
  "Сè уште немам отворено сметка",
];

const marketsOptions = [
  "Forex",
  "Indices",
  "Commodities",
  "Gold и Silver",
  "Stocks",
  "Futures",
  "Crypto",
  "Отворен сум за повеќе пазари",
];

const signalTypeOptions = [
  "Scalping сигнали",
  "Day Trading сигнали",
  "Swing Trading сигнали",
  "Подолгорочни Position Trading идеи",
  "Комбинација од повеќе стилови",
  "Не сум сигурен",
];

const checkFrequencyOptions = [
  "Можам да реагирам веднаш",
  "Можам да проверувам неколкупати во текот на денот",
  "Можам да проверувам еднаш дневно",
  "Најмногу ми одговараат Swing сигнали без потреба од брза реакција",
  "Не сум сигурен",
];

// Section 4V: Signal Expectations
const weeklySignalsOptions = [
  "Од 1 до 3 квалитетни сигнали",
  "Од 3 до 5 сигнали",
  "Најмалку еден сигнал дневно",
  "Колку што дозволува пазарот",
  "Не ми е важна количината, туку квалитетот",
  "Не сум сигурен",
];

const signalContentOptions = [
  "Точен Entry",
  "Entry зона",
  "Stop Loss",
  "Еден Take Profit",
  "Повеќе Take Profit Targets",
  "Препорачан Risk Percentage",
  "Risk-to-Reward Ratio",
  "Техничко објаснување",
  "Fundamental и Macro контекст",
  "COT и позиционирање",
  "Инструкции за управување со позицијата",
  "Известување за затворање или промена на позицијата",
  "Кратка едукативна анализа",
];

const signalBenefitsOptions = [
  "Јасна trading насока",
  "Подобри Entry можности",
  "Заштеда на време при анализа",
  "Подобра дисциплина",
  "Помош при управување со позициите",
  "Подобро разбирање на пазарот",
  "Дополнителна потврда за сопствената анализа",
  "Можност постепено да учам од анализите",
  "Краткорочна заработка",
  "Долгорочна конзистентност",
  "Подготовка за Prop Firm Challenge",
  "Друго",
];

const analysisDepthOptions = [
  "Сакам само јасни Entry, Stop Loss и Targets",
  "Сакам сигнал со кратко објаснување",
  "Сакам детална анализа и едукативен контекст",
  "Сакам со текот на времето самостојно да научам да анализирам",
  "Не сум сигурен",
];

// Section 5V: Capital & Risk Management
const capitalOptions = [
  "Во почетокот ќе користам само Demo сметка",
  "Помалку од 250 €",
  "Од 250 до 500 €",
  "Од 500 до 1.000 €",
  "Од 1.000 до 2.500 €",
  "Од 2.500 до 5.000 €",
  "Повеќе од 5.000 €",
  "Ќе користам Prop Firm сметка",
  "Сè уште не сум одлучил",
];

const depositOptions = [
  "Не планирам да депонирам и прво ќе користам Demo",
  "До 250 €",
  "Од 250 до 500 €",
  "Од 500 до 1.000 €",
  "Од 1.000 до 2.500 €",
  "Повеќе од 2.500 €",
  "Зависи од резултатите и мојата подготвеност",
  "Сè уште не сум одлучил",
];

const affordableCapitalOptions = [
  "Да",
  "Да, но би започнал со многу мал ризик",
  "Не сум сигурен",
  "Не",
];

const riskPerSignalOptions = [
  "До 0,25% од сметката",
  "До 0,50% од сметката",
  "До 1% од сметката",
  "Од 1% до 2% од сметката",
  "Повеќе од 2% од сметката",
  "Не знам како се пресметува ризикот",
  "Би го следел препорачаниот Risk Management",
];

const maxDrawdownOptions = [
  "До 2%",
  "Од 2% до 5%",
  "Од 5% до 10%",
  "Повеќе од 10%",
  "Не сум сигурен",
  "Не знам што значи Drawdown",
];

const positionSizeOptions = [
  "Да, знам правилно да го пресметам ризикот",
  "Да, но ми е потребен Position Size Calculator",
  "Делумно, но ми е потребна дополнителна насока",
  "Не знам како се пресметува големината на позицијата",
  "Очекувам точната големина на позицијата да биде дадена во сигналот",
];

// Section 6V: Realistic Expectations
const losingStreakOptions = [
  "Би продолжил да го следам системот со ист ризик",
  "Би го намалил ризикот",
  "Би направил пауза и би ја разгледал анализата",
  "Би престанал да ги следам сигналите",
  "Би го зголемил ризикот за да ги вратам загубите",
  "Не сум сигурен",
];

const expectedResultsOptions = [
  "Немам фиксен процент и разбирам дека резултатите варираат",
  "Очекувам позитивен резултат на долг рок",
  "Просечно од 1% до 3% месечно",
  "Просечно од 3% до 5% месечно",
  "Просечно од 5% до 10% месечно",
  "Повеќе од 10% месечно",
  "Очекувам брзо да го зголемам капиталот",
  "Не сум сигурен што е реално",
];

const investmentOptions = [
  "До 30 €",
  "Од 30 до 50 €",
  "Од 50 до 100 €",
  "Повеќе од 100 €",
  "Зависи од бројот на сигнали, анализата и поддршката",
  "Би сакал прво да добијам пробен период",
  "Моментално само собирам информации",
];

const communicationOptions = [
  "Discord",
  "Telegram",
  "WhatsApp",
  "Е-пошта",
  "Mobile notifications",
  "Не ми е важно",
];

const startTimeOptions = [
  "Веднаш",
  "Во следните 7 дена",
  "Во следните 30 дена",
  "Во следните 2–3 месеци",
  "Прво би сакал повеќе информации",
  "Само собирам информации",
];

export interface TradingSignalsData {
  tradingDuration: string;
  knowledgeLevel: number;
  previousSignals: string;
  previousExperience: string;
  accountType: string;
  markets: string[];
  signalType: string;
  checkFrequency: string;
  weeklySignals: string;
  signalContent: string[];
  signalBenefits: string[];
  analysisDepth: string;
  importantResult: string;
  capital: string;
  deposit: string;
  affordableCapital: string;
  riskPerSignal: string;
  maxDrawdown: string;
  positionSize: string;
  losingStreak: string;
  expectedResults: string;
  investment: string;
  communication: string[];
  startTime: string;
  additionalInfo: string;
  confirmRisk: boolean;
  confirmPastResults: boolean;
  confirmResponsibility: boolean;
  confirmAccountManagement: boolean;
  confirmAffordableCapital: boolean;
  confirmContact: boolean;
}

const initialData: TradingSignalsData = {
  tradingDuration: "",
  knowledgeLevel: 0,
  previousSignals: "",
  previousExperience: "",
  accountType: "",
  markets: [],
  signalType: "",
  checkFrequency: "",
  weeklySignals: "",
  signalContent: [],
  signalBenefits: [],
  analysisDepth: "",
  importantResult: "",
  capital: "",
  deposit: "",
  affordableCapital: "",
  riskPerSignal: "",
  maxDrawdown: "",
  positionSize: "",
  losingStreak: "",
  expectedResults: "",
  investment: "",
  communication: [],
  startTime: "",
  additionalInfo: "",
  confirmRisk: false,
  confirmPastResults: false,
  confirmResponsibility: false,
  confirmAccountManagement: false,
  confirmAffordableCapital: false,
  confirmContact: false,
};

interface TradingSignalsFormProps {
  onSubmit: (data: TradingSignalsData) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

// Reusable components
const RadioGroup = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="space-y-3">
    {options.map((opt) => (
      <div
        key={opt}
        role="button"
        tabIndex={0}
        onClick={() => onChange(opt)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onChange(opt);
          }
        }}
        className={`flex cursor-pointer items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-300 ${
          value === opt
            ? "border-[#9F62F8] bg-gradient-to-r from-[#9F62F8]/15 to-[#9F62F8]/5 shadow-[inset_0_0_20px_-12px_rgba(159,98,248,0.4)]"
            : "border-gray-700/60 bg-white/[0.02] hover:border-[#9F62F8]/40 hover:bg-white/[0.04]"
        }`}
      >
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
            value === opt
              ? "border-[#9F62F8] bg-[#9F62F8] shadow-[0_0_8px_rgba(159,98,248,0.5)]"
              : "border-gray-500"
          }`}
        >
          {value === opt && <span className="h-2 w-2 rounded-full bg-white" />}
        </span>
        <span
          className={`text-[15px] transition-colors duration-200 ${value === opt ? "text-white font-medium" : "text-gray-300"}`}
        >
          {opt}
        </span>
      </div>
    ))}
  </div>
);

const CheckboxGroup = ({
  options,
  values,
  onChange,
}: {
  options: string[];
  values: string[];
  onChange: (v: string[]) => void;
}) => (
  <div className="space-y-3">
    {options.map((opt) => {
      const isChecked = values.includes(opt);
      return (
        <div
          key={opt}
          role="button"
          tabIndex={0}
          onClick={() =>
            onChange(
              isChecked ? values.filter((v) => v !== opt) : [...values, opt],
            )
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onChange(
                isChecked ? values.filter((v) => v !== opt) : [...values, opt],
              );
            }
          }}
          className={`flex cursor-pointer items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-300 ${
            isChecked
              ? "border-[#9F62F8] bg-gradient-to-r from-[#9F62F8]/15 to-[#9F62F8]/5 shadow-[inset_0_0_20px_-12px_rgba(159,98,248,0.4)]"
              : "border-gray-700/60 bg-white/[0.02] hover:border-[#9F62F8]/40 hover:bg-white/[0.04]"
          }`}
        >
          <span
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-2 transition-all duration-300 ${
              isChecked
                ? "border-[#9F62F8] bg-[#9F62F8] shadow-[0_0_8px_rgba(159,98,248,0.5)]"
                : "border-gray-500"
            }`}
          >
            {isChecked && (
              <svg
                className="h-3 w-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </span>
          <span
            className={`text-[15px] transition-colors duration-200 ${isChecked ? "text-white font-medium" : "text-gray-300"}`}
          >
            {opt}
          </span>
        </div>
      );
    })}
  </div>
);

const LinearScale = ({
  value,
  onChange,
  labelMin,
  labelMax,
}: {
  value: number;
  onChange: (v: number) => void;
  labelMin: string;
  labelMax: string;
}) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between gap-2">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className={`flex h-12 w-full max-w-[48px] items-center justify-center rounded-xl border text-[15px] font-semibold transition-all duration-300 ${
            value === n
              ? "border-[#9F62F8] bg-[#9F62F8] text-white shadow-[0_0_12px_rgba(159,98,248,0.5)] scale-110"
              : value > 0 && n <= value
                ? "border-[#9F62F8]/50 bg-[#9F62F8]/20 text-white"
                : "border-gray-700/60 bg-white/[0.02] text-gray-400 hover:border-[#9F62F8]/40 hover:text-white"
          }`}
        >
          {n}
        </button>
      ))}
    </div>
    <div className="flex justify-between text-xs text-gray-500 px-1">
      <span>{labelMin}</span>
      <span>{labelMax}</span>
    </div>
  </div>
);

const TextArea = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) => (
  <textarea
    rows={5}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="w-full rounded-xl border border-gray-700/60 bg-white/[0.02] px-5 py-4 text-[15px] text-white placeholder-gray-500 backdrop-blur-sm focus:border-[#9F62F8] focus:bg-white/[0.04] focus:shadow-[0_0_15px_-5px_rgba(159,98,248,0.3)] focus:outline-none transition-all duration-300 resize-none leading-relaxed"
  />
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-10">
    <h3 className="text-2xl md:text-3xl font-bold text-white">{children}</h3>
    <div className="mt-3 h-0.5 w-20 rounded-full bg-gradient-to-r from-[#9F62F8] to-transparent" />
  </div>
);

const QuestionLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-base text-gray-200 mb-4 font-medium leading-relaxed">
    {children}
  </label>
);

const TOTAL_SECTIONS = 5;

export const TradingSignalsForm = ({
  onSubmit,
  onBack,
  isSubmitting,
}: TradingSignalsFormProps) => {
  const [section, setSection] = useState(1);
  const [data, setData] = useState<TradingSignalsData>(initialData);
  const [error, setError] = useState("");

  const update = <K extends keyof TradingSignalsData>(
    key: K,
    value: TradingSignalsData[K],
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setError("");
  };

  const validateSection = (): boolean => {
    switch (section) {
      case 1:
        if (!data.tradingDuration)
          return fail("Изберете колку долго тргувате.");
        if (!data.knowledgeLevel) return fail("Оценете го вашето знаење.");
        if (!data.previousSignals)
          return fail("Одговорете за претходно искуство со сигнали.");
        if (!data.accountType) return fail("Изберете тип на сметка.");
        if (data.markets.length === 0)
          return fail("Изберете барем еден пазар.");
        if (!data.signalType) return fail("Изберете тип на сигнали.");
        if (!data.checkFrequency)
          return fail("Изберете колку често проверувате.");
        return true;
      case 2:
        if (!data.weeklySignals) return fail("Изберете очекуван број сигнали.");
        if (data.signalContent.length === 0)
          return fail("Изберете содржина на сигнал.");
        if (data.signalBenefits.length === 0)
          return fail("Изберете барем едно очекување.");
        if (!data.analysisDepth) return fail("Изберете ниво на анализа.");
        if (!data.importantResult.trim())
          return fail("Напишете најважен резултат.");
        return true;
      case 3:
        if (!data.capital) return fail("Изберете trading капитал.");
        if (!data.deposit) return fail("Одговорете за депозит.");
        if (!data.affordableCapital)
          return fail("Одговорете за достапен капитал.");
        if (!data.riskPerSignal) return fail("Изберете ризик по сигнал.");
        if (!data.maxDrawdown) return fail("Изберете максимален Drawdown.");
        if (!data.positionSize) return fail("Одговорете за Position Size.");
        return true;
      case 4:
        if (!data.losingStreak) return fail("Одговорете за серија загуби.");
        if (!data.expectedResults) return fail("Изберете очекувани резултати.");
        if (!data.investment) return fail("Изберете месечна инвестиција.");
        if (data.communication.length === 0)
          return fail("Изберете начин на комуникација.");
        if (!data.startTime) return fail("Изберете кога би започнале.");
        return true;
      case 5:
        if (!data.confirmRisk)
          return fail("Потврдете го разбирањето за ризик.");
        if (!data.confirmPastResults)
          return fail("Потврдете за минати резултати.");
        if (!data.confirmResponsibility)
          return fail("Потврдете лична одговорност.");
        if (!data.confirmAccountManagement)
          return fail("Потврдете за управување со сметка.");
        if (!data.confirmAffordableCapital)
          return fail("Потврдете за расположлив капитал.");
        if (!data.confirmContact) return fail("Дадете согласност за контакт.");
        return true;
      default:
        return true;
    }
  };

  const fail = (msg: string) => {
    setError(msg);
    return false;
  };

  const handleNext = () => {
    if (!validateSection()) return;
    setSection((s) => (s + 1) as 1 | 2 | 3 | 4 | 5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (section === 1) {
      onBack();
    } else {
      setSection((s) => (s - 1) as 1 | 2 | 3 | 4 | 5);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    if (!validateSection()) return;
    onSubmit(data);
  };

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="space-y-3">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-400">
            Секција {section} од {TOTAL_SECTIONS}
          </span>
          <span className="text-[#BF94FF]">
            {Math.round((section / TOTAL_SECTIONS) * 100)}%
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-800/80 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#9F62F8] to-[#BF94FF] transition-all duration-700 ease-out shadow-[0_0_10px_rgba(159,98,248,0.5)]"
            style={{ width: `${(section / TOTAL_SECTIONS) * 100}%` }}
          />
        </div>
      </div>

      {/* Section 1: Experience & Account */}
      {section === 1 && (
        <div className="space-y-10">
          <SectionTitle>Искуство и Trading сметка</SectionTitle>

          <div>
            <QuestionLabel>
              В1. Колку долго се занимавате со trading? *
            </QuestionLabel>
            <RadioGroup
              options={tradingDurationOptions}
              value={data.tradingDuration}
              onChange={(v) => update("tradingDuration", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В2. Како би го оцениле вашето моментално знаење? *
            </QuestionLabel>
            <LinearScale
              value={data.knowledgeLevel}
              onChange={(v) => update("knowledgeLevel", v)}
              labelMin="Целосен почетник"
              labelMax="Напредно знаење"
            />
          </div>

          <div>
            <QuestionLabel>
              В3. Дали претходно сте користеле Trading Signals? *
            </QuestionLabel>
            <RadioGroup
              options={previousSignalsOptions}
              value={data.previousSignals}
              onChange={(v) => update("previousSignals", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В4. Какво е вашето претходно искуство со Trading Signals?
            </QuestionLabel>
            <p className="text-xs text-gray-500 mb-2">
              Објаснете што ви се допаднало, што не функционирало и дали сте
              имале позитивно или негативно искуство.
            </p>
            <TextArea
              value={data.previousExperience}
              onChange={(v) => update("previousExperience", v)}
              placeholder="Опционално"
            />
          </div>

          <div>
            <QuestionLabel>
              В5. На каква сметка планирате да ги користите сигналите? *
            </QuestionLabel>
            <RadioGroup
              options={accountTypeOptions}
              value={data.accountType}
              onChange={(v) => update("accountType", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В6. За кои пазари сте најмногу заинтересирани? *
            </QuestionLabel>
            <CheckboxGroup
              options={marketsOptions}
              values={data.markets}
              onChange={(v) => update("markets", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В7. Каков тип Trading Signals најмногу ви одговара? *
            </QuestionLabel>
            <RadioGroup
              options={signalTypeOptions}
              value={data.signalType}
              onChange={(v) => update("signalType", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В8. Колку често можете да ги проверувате сигналите и отворените
              позиции? *
            </QuestionLabel>
            <RadioGroup
              options={checkFrequencyOptions}
              value={data.checkFrequency}
              onChange={(v) => update("checkFrequency", v)}
            />
          </div>
        </div>
      )}

      {/* Section 2: Signal Expectations */}
      {section === 2 && (
        <div className="space-y-10">
          <SectionTitle>Очекувања од сигналите</SectionTitle>

          <div>
            <QuestionLabel>
              В9. Колку Trading Signals неделно очекувате? *
            </QuestionLabel>
            <RadioGroup
              options={weeklySignalsOptions}
              value={data.weeklySignals}
              onChange={(v) => update("weeklySignals", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В10. Што очекувате да содржи еден Trading Signal? *
            </QuestionLabel>
            <CheckboxGroup
              options={signalContentOptions}
              values={data.signalContent}
              onChange={(v) => update("signalContent", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В11. Што најмногу очекувате да добиете од сигналите? *
            </QuestionLabel>
            <CheckboxGroup
              options={signalBenefitsOptions}
              values={data.signalBenefits}
              onChange={(v) => update("signalBenefits", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В12. Дали сакате само да ги следите сигналите или сакате да ја
              разбирате анализата зад нив? *
            </QuestionLabel>
            <RadioGroup
              options={analysisDepthOptions}
              value={data.analysisDepth}
              onChange={(v) => update("analysisDepth", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В13. Кој е најважниот резултат што го очекувате од сигналите? *
            </QuestionLabel>
            <p className="text-xs text-gray-500 mb-2">
              Наведете дали очекувате дополнителна насока, подобра дисциплина,
              учење, помош со Prop Firm, долгорочна конзистентност или друг
              конкретен резултат.
            </p>
            <TextArea
              value={data.importantResult}
              onChange={(v) => update("importantResult", v)}
            />
          </div>
        </div>
      )}

      {/* Section 3: Capital & Risk Management */}
      {section === 3 && (
        <div className="space-y-10">
          <SectionTitle>Капитал и Risk Management</SectionTitle>

          <div>
            <QuestionLabel>
              В14. Колкав сопствен trading капитал планирате да користите? *
            </QuestionLabel>
            <p className="text-xs text-gray-500 mb-2">
              Висината на капиталот не влијае врз прифаќањето и не претставува
              услов за користење на услугата. Информацијата се користи исклучиво
              за подобро разбирање на вашиот Risk Management и очекувања.
            </p>
            <RadioGroup
              options={capitalOptions}
              value={data.capital}
              onChange={(v) => update("capital", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В15. Доколку сè уште немате Live сметка, колку би биле подготвени
              да депонирате кога ќе започнете? *
            </QuestionLabel>
            <p className="text-xs text-gray-500 mb-2">
              Никогаш не треба да депонирате средства што не можете да си
              дозволите да ги изгубите.
            </p>
            <RadioGroup
              options={depositOptions}
              value={data.deposit}
              onChange={(v) => update("deposit", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В16. Дали капиталот што планирате да го користите е капитал што
              можете да си дозволите да го изгубите? *
            </QuestionLabel>
            <RadioGroup
              options={affordableCapitalOptions}
              value={data.affordableCapital}
              onChange={(v) => update("affordableCapital", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В17. Колкав ризик би користеле по еден Trading Signal? *
            </QuestionLabel>
            <RadioGroup
              options={riskPerSignalOptions}
              value={data.riskPerSignal}
              onChange={(v) => update("riskPerSignal", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В18. Колкав максимален месечен Drawdown можете психолошки и
              финансиски да го прифатите? *
            </QuestionLabel>
            <RadioGroup
              options={maxDrawdownOptions}
              value={data.maxDrawdown}
              onChange={(v) => update("maxDrawdown", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В19. Дали знаете самостојно да ја пресметате големината на
              позицијата? *
            </QuestionLabel>
            <RadioGroup
              options={positionSizeOptions}
              value={data.positionSize}
              onChange={(v) => update("positionSize", v)}
            />
          </div>
        </div>
      )}

      {/* Section 4: Realistic Expectations */}
      {section === 4 && (
        <div className="space-y-10">
          <SectionTitle>Реални очекувања</SectionTitle>

          <div>
            <QuestionLabel>
              В20. Како би реагирале доколку добиеме серија од 3 до 5 загубени
              сигнали? *
            </QuestionLabel>
            <RadioGroup
              options={losingStreakOptions}
              value={data.losingStreak}
              onChange={(v) => update("losingStreak", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В21. Какви резултати реално очекувате од Trading Signals? *
            </QuestionLabel>
            <RadioGroup
              options={expectedResultsOptions}
              value={data.expectedResults}
              onChange={(v) => update("expectedResults", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В22. Колку сте подготвени да инвестирате месечно за квалитетна
              Trading Signals услуга? *
            </QuestionLabel>
            <RadioGroup
              options={investmentOptions}
              value={data.investment}
              onChange={(v) => update("investment", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В23. Кој начин на комуникација најмногу ви одговара за добивање
              сигнали? *
            </QuestionLabel>
            <CheckboxGroup
              options={communicationOptions}
              values={data.communication}
              onChange={(v) => update("communication", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В24. Кога би биле подготвени да започнете? *
            </QuestionLabel>
            <RadioGroup
              options={startTimeOptions}
              value={data.startTime}
              onChange={(v) => update("startTime", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              В25. Дали има нешто дополнително што треба да знаеме за вашето
              искуство, капитал или очекувања?
            </QuestionLabel>
            <TextArea
              value={data.additionalInfo}
              onChange={(v) => update("additionalInfo", v)}
              placeholder="Опционално"
            />
          </div>
        </div>
      )}

      {/* Section 5: Confirmations */}
      {section === 5 && (
        <div className="space-y-10">
          <SectionTitle>Потврди и согласност</SectionTitle>

          <div className="space-y-3">
            <div
              role="button"
              tabIndex={0}
              onClick={() => update("confirmRisk", !data.confirmRisk)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  update("confirmRisk", !data.confirmRisk);
                }
              }}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all duration-200 ${
                data.confirmRisk
                  ? "border-[#9F62F8] bg-[#9F62F8]/10"
                  : "border-gray-700 hover:border-[#9F62F8]/50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${data.confirmRisk ? "border-[#9F62F8] bg-[#9F62F8]" : "border-gray-500"}`}
              >
                {data.confirmRisk && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm text-white">
                Разбирам дека Trading Signals не претставуваат гаранција за
                заработка и дека секој trading систем може да има загубени
                позиции и периоди на Drawdown.
              </span>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() =>
                update("confirmPastResults", !data.confirmPastResults)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  update("confirmPastResults", !data.confirmPastResults);
                }
              }}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all duration-200 ${
                data.confirmPastResults
                  ? "border-[#9F62F8] bg-[#9F62F8]/10"
                  : "border-gray-700 hover:border-[#9F62F8]/50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${data.confirmPastResults ? "border-[#9F62F8] bg-[#9F62F8]" : "border-gray-500"}`}
              >
                {data.confirmPastResults && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm text-white">
                Разбирам дека минатите резултати не гарантираат исти или слични
                резултати во иднина.
              </span>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() =>
                update("confirmResponsibility", !data.confirmResponsibility)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  update("confirmResponsibility", !data.confirmResponsibility);
                }
              }}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all duration-200 ${
                data.confirmResponsibility
                  ? "border-[#9F62F8] bg-[#9F62F8]/10"
                  : "border-gray-700 hover:border-[#9F62F8]/50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${data.confirmResponsibility ? "border-[#9F62F8] bg-[#9F62F8]" : "border-gray-500"}`}
              >
                {data.confirmResponsibility && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm text-white">
                Разбирам дека сум лично одговорен за секоја позиција што ќе ја
                отворам, за големината на позицијата и за Risk Management.
              </span>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() =>
                update(
                  "confirmAccountManagement",
                  !data.confirmAccountManagement,
                )
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  update(
                    "confirmAccountManagement",
                    !data.confirmAccountManagement,
                  );
                }
              }}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all duration-200 ${
                data.confirmAccountManagement
                  ? "border-[#9F62F8] bg-[#9F62F8]/10"
                  : "border-gray-700 hover:border-[#9F62F8]/50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${data.confirmAccountManagement ? "border-[#9F62F8] bg-[#9F62F8]" : "border-gray-500"}`}
              >
                {data.confirmAccountManagement && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm text-white">
                Разбирам дека TradingLab.mk не управува со мојата trading сметка
                и не отвора или затвора позиции во мое име.
              </span>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() =>
                update(
                  "confirmAffordableCapital",
                  !data.confirmAffordableCapital,
                )
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  update(
                    "confirmAffordableCapital",
                    !data.confirmAffordableCapital,
                  );
                }
              }}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all duration-200 ${
                data.confirmAffordableCapital
                  ? "border-[#9F62F8] bg-[#9F62F8]/10"
                  : "border-gray-700 hover:border-[#9F62F8]/50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${data.confirmAffordableCapital ? "border-[#9F62F8] bg-[#9F62F8]" : "border-gray-500"}`}
              >
                {data.confirmAffordableCapital && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm text-white">
                Разбирам дека треба да користам само капитал што можам да си
                дозволам да го изгубам.
              </span>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => update("confirmContact", !data.confirmContact)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  update("confirmContact", !data.confirmContact);
                }
              }}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all duration-200 ${
                data.confirmContact
                  ? "border-[#9F62F8] bg-[#9F62F8]/10"
                  : "border-gray-700 hover:border-[#9F62F8]/50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${data.confirmContact ? "border-[#9F62F8] bg-[#9F62F8]" : "border-gray-500"}`}
              >
                {data.confirmContact && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm text-white">
                Се согласувам TradingLab.mk да ги користи информациите доставени
                во оваа форма за процена на мојата апликација и за да ме
                контактира во врска со Trading Signals услугата.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
          <svg
            className="h-4 w-4 shrink-0 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
        <button
          type="button"
          onClick={handlePrev}
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wide"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Назад
        </button>
        {section < TOTAL_SECTIONS ? (
          <Button body="СЛЕДНО" variant="primary" onClick={handleNext} />
        ) : (
          <Button
            body={isSubmitting ? "Се праќа..." : "ИСПРАТИ"}
            variant="primary"
            onClick={handleSubmit}
            className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
          />
        )}
      </div>
    </div>
  );
};
