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
            📊 Бесплатна Телеграм група со сигнали – Добиј точни и навремени
            информации за подобро тргување.
          </li>
          <li>
            🎓 Бесплатен курс – Преку 100 снимени видео лекции, научи од 0 до
            100 целосно бесплатно.
          </li>
          <li>📚 Бесплатна Е-Книга – Дополни го твоето знаење!</li>
        </ul>

        <div className="mt-12">
          <p className="text-[#999999] text-base mb-1">Испрати порака</p>
          <div className="flex items-center gap-2">
            <MdEmail className="text-red-500 text-2xl" />
            <span className="text-white text-md">contact@tradinglab.mk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidanceSection;
