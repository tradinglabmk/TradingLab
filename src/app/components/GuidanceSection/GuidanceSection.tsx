import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import traderAnalyzingCharts from "../../../../public/assets/trader-analyzing-charts.png";
import Image from "next/image";

const GuidanceSection = () => {
  return (
    <div className="bg-black text-white py-12 flex flex-col lg:flex-row items-center gap-12 px-5 md:px-20">
      <div className="w-full lg:w-1/2">
        <Image
          src={traderAnalyzingCharts}
          alt="Trader analyzing charts"
          className="rounded-2xl w-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-bold mb-6">
          Потребни ти се дополнителни насоки?
        </h2>
        <p className="mb-6">
          Разговарај со нашите експерти и преку заедничка проценка и
          консултација дознај која од нашите услуги најмногу ти одговара:
        </p>
        <ul className="space-y-4">
          <li>
            📊 <strong>Телеграм група со сигнали</strong> – Добиј точни и
            навремени информации за подобро тргување.
          </li>
          <li>
            📈 <strong>Менаџирање на акаунт</strong> – Дозволи им на нашите
            професионалци да го оптимизираат твојот профит.
          </li>
          <li>
            🎓 <strong>Бесплатен курс</strong> – Преку 100 снимени видео лекции,
            научи ги основите и напредните стратегии целосно бесплатно.
          </li>
          <li>
            🏫 <strong>Forex академија</strong> – наскоро отворање на нова
            академија откако се ребрендиравме.
          </li>
        </ul>
        <div className="mt-12 flex flex-col sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-red-500" />
            <span>+389 070 XXX XXX</span>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <MdEmail className="text-red-500" />
            <span>contact@tradinglab.mk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidanceSection;
