import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { FeatureList } from "./FeatureList";

export const ComparisonSection = () => {
  const benefits = [
    "КОПИРАЈ ГИ НАШИТЕ ПОЗИЦИИ И ПРОФИТИРАЈ 100% БЕСПЛАТНО",
    "НЕ ТИ ТРЕБА НИКАКВО ПРЕТХОДНО ИСКУСТВО", 
    "ПОСВЕТИ САМО 5 - 10 МИНУТИ ДНЕВНО",
    "СЛЕДИ ГИ ЧЕКОРИТЕ И ЗА КРАТКО ПЕРИОД МОЖЕШ САМОСТОЈНО ДА ТРГУВАШ БЕЗ ПРОФЕСИОНАЛНА ПОМОШ"
  ];

  const drawbacks = [
    "40+ ЧАСА НЕДЕЛНО ПРЕД CHART",
    "ПОТРЕБНИ СЕ ГОДИНИ ИСКУСТВО ЗА СТАБИЛЕН ПРОФИТ", 
    "НЕМА ГАРАНЦИЈА ЗА РЕЗУЛТАТИ САМО РИЗИК",
    "ГУБИШ ИЛЈАДНИЦИ ДОЛАРИ ДОДЕКА УЧИШ НА СОПСТВЕНИ ГРЕШКИ"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
      <FeatureList
        title={<>COPY & PROFIT CO <span className="text-[#FEBF10]">TRADINGLAB.MK</span></>}
        items={benefits}
        icon={<IoMdCheckmark className="text-lg" />}
        iconColor="text-[#FEBF10]"
      />
      
      <FeatureList
        title={<>САМОСТОЈНО ТРГУВАЊЕ <span className="text-red-500">(БЕЗ НАС)</span></>}
        items={drawbacks}
        icon={<IoMdClose className="text-lg" />}
        iconColor="text-red-500"
      />
    </div>
  );
};