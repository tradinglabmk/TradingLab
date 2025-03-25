import { useState } from "react";
import { AlumniResults } from "./AlumniResults";

const faqs = [
  {
    question: "Што е Tradinglab MK ?",
    answer: "Tradinglab MK е платформа за тргување и едукација.",
  },
  {
    question: "Што треба да направам за да пристапам до премиум групата?",
    answer: "За да пристапите, контактирајте нè преку официјалниот вебсајт.",
  },
  {
    question: "Може ли TradingLab MK да ми понуди финансиски совет?",
    answer: "Не, TradingLab MK не нуди персонализирани финансиски совети.",
  },
  {
    question: "Дали ми треба искуство за да ги следам сигналите?",
    answer:
      "Не ви треба претходно искуство, но основно познавање е препорачливо.",
  },
  {
    question:
      "Дали ми треба искуство пред да почнам со следење на академијата ?",
    answer: "Не, академијата е прилагодена за почетници.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl py-20 mx-auto text-white bg-[#191C21] min-w-full flex flex-col items-center justify-center px-5 md:px-0">
      <h2 className="text-2xl font-bold text-center mb-6">
        Често поставувани прашања
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-purple-500 rounded-xl mb-3 w-full md:w-2/3"
        >
          <button
            className="w-full text-left p-4 flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 border-t border-purple-500">{faq.answer}</div>
          )}
        </div>
      ))}

      <div className="mt-10">
        <AlumniResults />
      </div>
    </div>
  );
};

export default FAQAccordion;
