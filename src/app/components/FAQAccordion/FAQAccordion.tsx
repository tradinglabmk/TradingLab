"use client";

import { useState } from "react";
import { ScrollAnimationWrapper } from "../ScrollAnimationWrapper/ScrollAnimationWrapper";

const faqs = [
  {
    question: "Што е Tradinglab MK?",
    answer:
      "TradingLab MK е заедница на професионални трејдери посветена на едукација, правилно насочување и успех во финансиските пазари. Со претходно изградена академија и докажана стабилност во тргувањето, нашата мисија е да им помогнеме на што повеќе луѓе да го разберат Forex пазарот на вистинскиот начин. Преку структурирана едукација, стратешки насоки и поддршка, ние ги подготвуваме трејдерите за доследен и стабилен успех.",
  },
  {
    question: "Што треба да направам за да пристапам до премиум групата?",
    answer:
      "Контактирај не директно на нашите социјални мрежи или преку е-маил.",
  },
  {
    question: "Може ли TradingLab MK да ми понуди финансиски совет?",
    answer:
      "Сакаме да ве информираме дека ние НЕ сме финансиски советници и НЕ можеме да гарантираме за никаква добивка или загуба што може да настане како резултат на вашето тргување или инвестирање. Сето она што го споделуваме со вас е исклучиво за едукативни цели. Ве молиме да ги земете предвид сите ризици и да се консултирате со лиценциран финансиски советник пред да донесете одлука.",
  },
  {
    question: "Дали ми треба искуство за да ги следам сигналите?",
    answer:
      "Не, не ви е потребно никакво претходно искуство! 📈 🔍 Сите сигнали доаѓаат со детални насоки чекор по чекор, така што и почетници можат лесно да ги следат. Нашиот тим обезбедува јасни објаснувања за секој потег, помагајќи ви да стекнете знаење и самодоверба в процесот на тргување.",
  },
  {
    question:
      "Дали ми треба искуство пред да почнам со следење на академијата?",
    answer:
      "Не, не ви е потребно никакво претходно искуство! 📚 ✅ Нашата академија е дизајнирана така што секој може да ја следи и успешно да напредува. Започнуваме од основите, а потоа постепено преминуваме на напредни стратегии, секогаш со јасни насоки и практични примери.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl py-20 mx-auto text-white bg-[#101015] min-w-full flex flex-col items-center justify-center px-5 md:px-0">
      <ScrollAnimationWrapper animationType="fadeInUp" delay={0} duration={0.6}>
        <h2 className="text-xl text-center mb-6 text-[#9F62F8]">
          Често поставувани прашања
        </h2>
      </ScrollAnimationWrapper>

      <div className="w-full md:w-2/3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <ScrollAnimationWrapper 
              key={index}
              animationType="fadeInUp" 
              delay={index * 100} 
              duration={0.5}
            >
              <div className="border border-[#BF94FF] rounded-xl mb-3 w-full overflow-hidden transition-all duration-500">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  {/* <span
                    className={`transition-transform duration-300 text-[#FEBF10] ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span> */}
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 border-t border-[#BF94FF]">{faq.answer}</div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
