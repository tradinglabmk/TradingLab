import { MdEmail } from "react-icons/md";
import Image from "next/image";
import guidance from "../../../../public/assets/guiadance_section/guidance.svg";

const GuidanceSection = () => {
  return (
    <div className="bg-[#0F0F14] text-white py-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 px-5 md:px-[150px] justify-between">
      <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
        {/* Header and description */}
        <div className="mb-6 lg:mb-12">
          <h2 className="text-xl font-bold mb-6 text-[#9F62F8]">
            Ти требаат дополнителни насоки?
          </h2>
          <p className="text-lg leading-relaxed">
            Зборувај со нашите професионалци и преку заедничка проценка и
            советување дознај која од академиите е соодветна за твоите едукативни
            и/или кариерни цели.
          </p>
        </div>

        {/* Contact info */}
        <div>
          <p className="text-[#999999] text-base mb-1">Испратете ни порака</p>
          <div className="flex items-center gap-2">
            <MdEmail className="text-[#9A5FF1] text-2xl" />
            <span className="text-white text-md">contact@tradinglab.mk</span>
          </div>
        </div>
      </div>

      {/* Guidance Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src={guidance}
          alt="Trading guidance illustration"
          width={400}
          height={400}
          className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl"
          style={{
            filter:
              "drop-shadow(0 0 20px rgba(159, 98, 248, 0.4)) drop-shadow(0 0 40px rgba(159, 98, 248, 0.2))",
          }}
        />
      </div>
    </div>
  );
};

export default GuidanceSection;
