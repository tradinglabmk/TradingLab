"use client";

import { useState } from "react";
import { Button } from "../Button/Button";

// Section 3B: Experience
const tradingDurationOptions = [
  "Немам претходно искуство",
  "Помалку од 3 месеци",
  "Од 3 до 6 месеци",
  "Од 6 до 12 месеци",
  "Од 1 до 2 години",
  "Од 2 до 5 години",
  "Повеќе од 5 години",
];

const marketsOptions = [
  "Forex",
  "Indices",
  "Commodities",
  "Stocks",
  "Futures",
  "Crypto",
  "Немам практично искуство",
  "Друго",
];

const tradingStyleOptions = [
  "Scalping",
  "Day Trading",
  "Swing Trading",
  "Position Trading",
  "Комбинирам повеќе стилови",
  "Сè уште немам дефиниран стил",
  "Не сум сигурен што најмногу ми одговара",
];

const accountTypeOptions = [
  "Не тргувам во моментов",
  "Demo сметка",
  "Лична Live сметка",
  "Prop Firm Challenge",
  "Funded Prop Firm сметка",
  "Комбинирам повеќе видови сметки",
];

const conceptsOptions = [
  "Supply and Demand",
  "Market Structure",
  "Support and Resistance",
  "Price Action",
  "COT Report",
  "Open Interest",
  "Fundamental и Macro анализа",
  "Seasonality",
  "Valuation",
  "Risk Management",
  "Trading Psychology",
  "Trading Journal",
  "Немам изграден trading систем",
  "Друго",
];

const tradingPlanOptions = [
  "Да, имам целосно дефиниран систем",
  "Имам основа, но системот не е целосно разработен",
  "Имам стратегија, но не ја следам доследно",
  "Немам јасно дефиниран Trading Plan",
  "Не знам како правилно да изградам Trading Plan",
];

// Section 4B: Problems & Expectations
const problemsOptions = [
  "Немам јасна стратегија",
  "Немам дефинирана насока за анализа",
  "Не знам кога да влезам во позиција",
  "Не знам кога да излезам од позиција",
  "Имам проблем со Risk Management",
  "Отворам премногу позиции",
  "Имам проблем со FOMO",
  "Имам проблем со Revenge Trading",
  "Емоциите влијаат врз моите одлуки",
  "Немам доволно дисциплина",
  "Не знам како да анализирам Fundamentals",
  "Не знам како да го користам COT Report",
  "Не можам да бидам конзистентен",
  "Имам стратегија, но немам доверба во неа",
  "Не водам Trading Journal",
  "Не знам како правилно да направам backtesting",
  "Друго",
];

const expectationsOptions = [
  "Изградба на целосен Trading Plan",
  "Подобро разбирање на Supply and Demand",
  "Правилно читање на Market Structure",
  "Подобри Entries и Confirmations",
  "COT и позиционирање на пазарните учесници",
  "Fundamental и Macro анализа",
  "Risk Management",
  "Trading Psychology",
  "Анализа на trades од учесниците",
  "Feedback од менторот",
  "Подготовка за Prop Firm",
  "Trading Journal и Review процес",
  "Подобра дисциплина и конзистентност",
  "Учење од прашањата и грешките на другите",
  "Долгорочна насока и структура",
  "Друго",
];

const progressTimeOptions = [
  "Во следните 1–3 месеци",
  "Во следните 3–6 месеци",
  "Во следните 6–12 месеци",
  "Немам фиксен рок и сакам правилно да го научам процесот",
  "Не сум сигурен",
];

// Section 5B: Time & Commitment
const weeklyTimeOptions = [
  "Помалку од 2 часа",
  "Од 2 до 4 часа",
  "Од 5 до 7 часа",
  "Од 8 до 10 часа",
  "Повеќе од 10 часа",
];

const availabilityOptions = [
  "Работни денови претпладне",
  "Работни денови попладне",
  "Работни денови навечер",
  "Сабота",
  "Недела",
  "Имам флексибилен распоред",
];

const commitmentOptions = [
  "Да, целосно сум подготвен",
  "Да, доколку имам јасна структура и насока",
  "Не сум сигурен",
  "Барам побрз резултат",
  "Не можам да се обврзам во овој период",
];

const journalReadinessOptions = [
  "Да, целосно",
  "Да, но ќе ми биде потребна насока",
  "Не сум сигурен",
  "Не",
];

// Section 6B: Group Coaching Format
const whyGroupOptions = [
  "Попристапна цена",
  "Учење и размена на искуства со други ученици",
  "Групна мотивација и дисциплина",
  "Заеднички анализи",
  "Можност да учам од туѓи прашања и грешки",
  "Не ми е потребен целосно индивидуален пристап",
  "Друго",
];

const groupSizeOptions = [
  "До 5 ученици",
  "Од 6 до 10 ученици",
  "Од 11 до 15 ученици",
  "Не ми е важна големината доколку програмата е квалитетна",
];

const programContentOptions = [
  "Неделни Live сесии",
  "Детално изучување на trading концептот",
  "Заедничка Market анализа",
  "Домашни задачи",
  "Trading Journal и Review",
  "Анализа на trades од учениците",
  "Q&A сесии",
  "Приватна Discord или Telegram група",
  "Снимки од сите сесии",
  "Краток индивидуален feedback",
  "Материјали и Trading Plan",
  "Друго",
];

const sessionFrequencyOptions = [
  "Еднаш неделно",
  "Двапати неделно",
  "Трипати месечно",
  "Двапати месечно",
  "Не сум сигурен",
];

const sessionDurationOptions = [
  "60 минути",
  "90 минути",
  "120 минути",
  "Не ми е важно доколку сесијата е квалитетна",
];

const investmentOptions = [
  "До 50 € месечно",
  "Од 50 до 100 € месечно",
  "Од 100 до 150 € месечно",
  "Од 150 до 250 € месечно",
  "Повеќе од 250 € месечно",
  "Би преферирал еднократна уплата за целата програма",
  "Зависи од времетраењето, содржината и поддршката",
  "Моментално само собирам информации",
];

const paymentOptions = [
  "Месечна уплата",
  "Еднократна уплата за целата програма",
  "Плаќање на рати",
  "Зависи од понудата",
];

// Section 7B: Final Assessment
const startTimeOptions = [
  "Веднаш",
  "Во следните 7 дена",
  "Во следните 30 дена",
  "Во следните 2–3 месеци",
  "Само собирам информации",
  "Не сум сигурен",
];

export interface GroupCoachingData {
  tradingDuration: string;
  knowledgeLevel: number;
  markets: string[];
  tradingStyle: string;
  accountType: string;
  concepts: string[];
  tradingPlan: string;
  problems: string[];
  currentSituation: string;
  expectations: string[];
  importantResult: string;
  successDefinition: string;
  progressTime: string;
  weeklyTime: string;
  availability: string[];
  commitment: string;
  journalReadiness: string;
  responsibilityLevel: number;
  whyGroup: string[];
  groupSize: string;
  programContent: string[];
  sessionFrequency: string;
  sessionDuration: string;
  individualFeedbackImportance: number;
  investment: string;
  paymentMethod: string;
  startTime: string;
  mentorExpectations: string;
  additionalInfo: string;
  confirmRealistic: boolean;
  confirmResponsibility: boolean;
  confirmContact: boolean;
}

const initialData: GroupCoachingData = {
  tradingDuration: "",
  knowledgeLevel: 0,
  markets: [],
  tradingStyle: "",
  accountType: "",
  concepts: [],
  tradingPlan: "",
  problems: [],
  currentSituation: "",
  expectations: [],
  importantResult: "",
  successDefinition: "",
  progressTime: "",
  weeklyTime: "",
  availability: [],
  commitment: "",
  journalReadiness: "",
  responsibilityLevel: 0,
  whyGroup: [],
  groupSize: "",
  programContent: [],
  sessionFrequency: "",
  sessionDuration: "",
  individualFeedbackImportance: 0,
  investment: "",
  paymentMethod: "",
  startTime: "",
  mentorExpectations: "",
  additionalInfo: "",
  confirmRealistic: false,
  confirmResponsibility: false,
  confirmContact: false,
};

interface GroupCoachingFormProps {
  onSubmit: (data: GroupCoachingData) => void;
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

export const GroupCoachingForm = ({
  onSubmit,
  onBack,
  isSubmitting,
}: GroupCoachingFormProps) => {
  const [section, setSection] = useState(1);
  const [data, setData] = useState<GroupCoachingData>(initialData);
  const [error, setError] = useState("");

  const update = <K extends keyof GroupCoachingData>(
    key: K,
    value: GroupCoachingData[K],
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
        if (data.markets.length === 0)
          return fail("Изберете барем еден пазар.");
        if (!data.tradingStyle) return fail("Изберете trading стил.");
        if (!data.accountType) return fail("Изберете тип на сметка.");
        if (data.concepts.length === 0)
          return fail("Изберете барем еден концепт.");
        if (!data.tradingPlan) return fail("Одговорете за Trading Plan.");
        return true;
      case 2:
        if (data.problems.length === 0)
          return fail("Изберете барем еден проблем.");
        if (!data.currentSituation.trim())
          return fail("Опишете ја моменталната ситуација.");
        if (data.expectations.length === 0)
          return fail("Изберете барем едно очекување.");
        if (!data.importantResult.trim())
          return fail("Напишете најважен резултат.");
        if (!data.successDefinition.trim())
          return fail("Опишете успешен Group Coaching процес.");
        if (!data.progressTime) return fail("Изберете период за напредок.");
        return true;
      case 3:
        if (!data.weeklyTime) return fail("Изберете неделно време.");
        if (data.availability.length === 0) return fail("Изберете достапност.");
        if (!data.commitment) return fail("Одговорете за посветеност.");
        if (!data.journalReadiness)
          return fail("Одговорете за Trading Journal.");
        if (!data.responsibilityLevel) return fail("Оценете ја подготвеноста.");
        return true;
      case 4:
        if (data.whyGroup.length === 0)
          return fail("Изберете зошто Group Coaching.");
        if (!data.groupSize) return fail("Изберете големина на групата.");
        if (data.programContent.length === 0)
          return fail("Изберете содржина на програмата.");
        if (!data.sessionFrequency)
          return fail("Изберете фреквенција на сесии.");
        if (!data.sessionDuration)
          return fail("Изберете времетраење на сесија.");
        if (!data.individualFeedbackImportance)
          return fail("Оценете ја важноста на индивидуален feedback.");
        if (!data.investment) return fail("Изберете инвестиција.");
        if (!data.paymentMethod) return fail("Изберете начин на плаќање.");
        return true;
      case 5:
        if (!data.startTime) return fail("Изберете кога би започнале.");
        if (!data.mentorExpectations.trim())
          return fail("Напишете очекувања од менторот и групата.");
        if (!data.confirmRealistic)
          return fail("Потврдете ги реалните очекувања.");
        if (!data.confirmResponsibility)
          return fail("Потврдете лична одговорност.");
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

      {/* Section 1: Experience */}
      {section === 1 && (
        <div className="space-y-10">
          <SectionTitle>Моментално искуство</SectionTitle>

          <div>
            <QuestionLabel>
              Б1. Колку долго се занимавате со trading? *
            </QuestionLabel>
            <RadioGroup
              options={tradingDurationOptions}
              value={data.tradingDuration}
              onChange={(v) => update("tradingDuration", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б2. Како би го оцениле вашето моментално знаење? *
            </QuestionLabel>
            <LinearScale
              value={data.knowledgeLevel}
              onChange={(v) => update("knowledgeLevel", v)}
              labelMin="Целосен почетник"
              labelMax="Напредно знаење"
            />
          </div>

          <div>
            <QuestionLabel>Б3. Со кои пазари имате искуство? *</QuestionLabel>
            <CheckboxGroup
              options={marketsOptions}
              values={data.markets}
              onChange={(v) => update("markets", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б4. Кој trading стил најмногу го користите? *
            </QuestionLabel>
            <RadioGroup
              options={tradingStyleOptions}
              value={data.tradingStyle}
              onChange={(v) => update("tradingStyle", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б5. На каква сметка моментално тргувате? *
            </QuestionLabel>
            <RadioGroup
              options={accountTypeOptions}
              value={data.accountType}
              onChange={(v) => update("accountType", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б6. Кои концепти моментално ги познавате или користите? *
            </QuestionLabel>
            <CheckboxGroup
              options={conceptsOptions}
              values={data.concepts}
              onChange={(v) => update("concepts", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б7. Дали имате јасно дефиниран Trading Plan? *
            </QuestionLabel>
            <RadioGroup
              options={tradingPlanOptions}
              value={data.tradingPlan}
              onChange={(v) => update("tradingPlan", v)}
            />
          </div>
        </div>
      )}

      {/* Section 2: Problems & Expectations */}
      {section === 2 && (
        <div className="space-y-10">
          <SectionTitle>Проблеми и очекувања</SectionTitle>

          <div>
            <QuestionLabel>
              Б8. Кои се вашите најголеми проблеми во trading? *
            </QuestionLabel>
            <CheckboxGroup
              options={problemsOptions}
              values={data.problems}
              onChange={(v) => update("problems", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б9. Објаснете ја вашата моментална ситуација. *
            </QuestionLabel>
            <p className="text-xs text-gray-500 mb-2">
              Што сте учеле досега, што сте пробале, какви резултати сте имале и
              каде сметате дека најмногу заглавувате?
            </p>
            <TextArea
              value={data.currentSituation}
              onChange={(v) => update("currentSituation", v)}
              placeholder="Опишете детално..."
            />
          </div>

          <div>
            <QuestionLabel>
              Б10. Што очекувате да добиете од Group Coaching? *
            </QuestionLabel>
            <CheckboxGroup
              options={expectationsOptions}
              values={data.expectations}
              onChange={(v) => update("expectations", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б11. Кој е најважниот резултат што сакате да го постигнете? *
            </QuestionLabel>
            <TextArea
              value={data.importantResult}
              onChange={(v) => update("importantResult", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б12. Што за вас би претставувало успешно завршен Group Coaching
              процес? *
            </QuestionLabel>
            <TextArea
              value={data.successDefinition}
              onChange={(v) => update("successDefinition", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б13. Во кој период очекувате да забележите напредок? *
            </QuestionLabel>
            <RadioGroup
              options={progressTimeOptions}
              value={data.progressTime}
              onChange={(v) => update("progressTime", v)}
            />
          </div>
        </div>
      )}

      {/* Section 3: Time & Commitment */}
      {section === 3 && (
        <div className="space-y-10">
          <SectionTitle>Време и посветеност</SectionTitle>

          <div>
            <QuestionLabel>
              Б14. Колку време неделно можете реално да посветите на учење,
              анализа и задачи? *
            </QuestionLabel>
            <RadioGroup
              options={weeklyTimeOptions}
              value={data.weeklyTime}
              onChange={(v) => update("weeklyTime", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б15. Во кој период најчесто сте слободни за Group Coaching сесии?
              *
            </QuestionLabel>
            <CheckboxGroup
              options={availabilityOptions}
              values={data.availability}
              onChange={(v) => update("availability", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б16. Дали сте подготвени да учите и да работите на процесот
              најмалку 5–6 месеци? *
            </QuestionLabel>
            <RadioGroup
              options={commitmentOptions}
              value={data.commitment}
              onChange={(v) => update("commitment", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б17. Дали сте подготвени да водите Trading Journal, да извршувате
              задачи и да ги следите правилата на групата? *
            </QuestionLabel>
            <RadioGroup
              options={journalReadinessOptions}
              value={data.journalReadiness}
              onChange={(v) => update("journalReadiness", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б18. Колку сте подготвени да преземете лична одговорност за
              сопствениот напредок? *
            </QuestionLabel>
            <LinearScale
              value={data.responsibilityLevel}
              onChange={(v) => update("responsibilityLevel", v)}
              labelMin="Не сум подготвен"
              labelMax="Целосно сум подготвен"
            />
          </div>
        </div>
      )}

      {/* Section 4: Group Coaching Format */}
      {section === 4 && (
        <div className="space-y-10">
          <SectionTitle>Group Coaching формат</SectionTitle>

          <div>
            <QuestionLabel>
              Б19. Зошто го преферирате Group Coaching форматот? *
            </QuestionLabel>
            <CheckboxGroup
              options={whyGroupOptions}
              values={data.whyGroup}
              onChange={(v) => update("whyGroup", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б20. Колкава група најмногу би ви одговарала? *
            </QuestionLabel>
            <RadioGroup
              options={groupSizeOptions}
              value={data.groupSize}
              onChange={(v) => update("groupSize", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б21. Што очекувате да содржи Group Coaching програмата? *
            </QuestionLabel>
            <CheckboxGroup
              options={programContentOptions}
              values={data.programContent}
              onChange={(v) => update("programContent", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б22. Колку често би сакале да се одржуваат групните сесии? *
            </QuestionLabel>
            <RadioGroup
              options={sessionFrequencyOptions}
              value={data.sessionFrequency}
              onChange={(v) => update("sessionFrequency", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б23. Колкаво времетраење на една Group Coaching сесија најмногу би
              ви одговарало? *
            </QuestionLabel>
            <RadioGroup
              options={sessionDurationOptions}
              value={data.sessionDuration}
              onChange={(v) => update("sessionDuration", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б24. Колку ви е важен краток индивидуален feedback во рамки на
              групната програма? *
            </QuestionLabel>
            <LinearScale
              value={data.individualFeedbackImportance}
              onChange={(v) => update("individualFeedbackImportance", v)}
              labelMin="Воопшто не ми е важен"
              labelMax="Исклучително ми е важен"
            />
          </div>

          <div>
            <QuestionLabel>
              Б25. Колку сте подготвени да инвестирате во Group Coaching? *
            </QuestionLabel>
            <RadioGroup
              options={investmentOptions}
              value={data.investment}
              onChange={(v) => update("investment", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б26. Кој начин на плаќање најмногу би ви одговарал? *
            </QuestionLabel>
            <RadioGroup
              options={paymentOptions}
              value={data.paymentMethod}
              onChange={(v) => update("paymentMethod", v)}
            />
          </div>
        </div>
      )}

      {/* Section 5: Final Assessment */}
      {section === 5 && (
        <div className="space-y-10">
          <SectionTitle>Завршна процена</SectionTitle>

          <div>
            <QuestionLabel>
              Б27. Кога би биле подготвени да започнете? *
            </QuestionLabel>
            <RadioGroup
              options={startTimeOptions}
              value={data.startTime}
              onChange={(v) => update("startTime", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б28. Што очекувате од менторот и групата, а што сте подготвени вие
              да направите? *
            </QuestionLabel>
            <TextArea
              value={data.mentorExpectations}
              onChange={(v) => update("mentorExpectations", v)}
            />
          </div>

          <div>
            <QuestionLabel>
              Б29. Дали има нешто дополнително што треба да знаеме за вас?
            </QuestionLabel>
            <TextArea
              value={data.additionalInfo}
              onChange={(v) => update("additionalInfo", v)}
              placeholder="Опционално"
            />
          </div>

          <div className="space-y-3">
            <QuestionLabel>Потврди и согласности *</QuestionLabel>

            <div
              role="button"
              tabIndex={0}
              onClick={() => update("confirmRealistic", !data.confirmRealistic)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  update("confirmRealistic", !data.confirmRealistic);
                }
              }}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all duration-200 ${
                data.confirmRealistic
                  ? "border-[#9F62F8] bg-[#9F62F8]/10"
                  : "border-gray-700 hover:border-[#9F62F8]/50"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${data.confirmRealistic ? "border-[#9F62F8] bg-[#9F62F8]" : "border-gray-500"}`}
              >
                {data.confirmRealistic && (
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
                Разбирам дека Group Coaching е едукативен процес и дека не
                постои гаранција за заработка, профитабилност или успешно
                поминување на Prop Firm Challenge.
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
                Разбирам дека моите резултати зависат од мојата работа,
                дисциплина, Risk Management и примена на наученото.
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
                контактира во врска со Group Coaching програмата.
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
