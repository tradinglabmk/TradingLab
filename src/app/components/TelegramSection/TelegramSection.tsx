"use client";

import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";

export default function TelegramSection() {
  return (
    <section className="w-full bg-[#0F0F14] py-16 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-center">
          {/* Left side - iPhone image */}
          <div className="flex justify-center lg:justify-start lg:col-span-2 w-full">
            <div className="relative">
            {/* <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg"> */}
              <Image
                src="/assets/iphone.png"
                alt="TradingLab Telegram Group"
                width={200}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-8 lg:col-span-3">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight">
              Придружете се во бесплатната телеграм група на TradingLab MK
            </h2>

            <div className="space-y-6">
              {/* Bullet point 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-transparent border border-[#FEBF10] rounded-full p-2 flex items-center justify-center flex-shrink-0 mt-1">
                  <IoMdCheckmark className="text-[#FEBF10] text-lg" />
                </div>
                <p className="text-base lg:text-lg font-normal leading-relaxed">
                  Ако сакате да видите како тргуваат професионалци и да добивате 
                  реални сигнали секој ден ова е вистинското место.
                </p>
              </div>

              {/* Bullet point 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-transparent border border-[#FEBF10] rounded-full p-2 flex items-center justify-center flex-shrink-0 mt-1">
                  <IoMdCheckmark className="text-[#FEBF10] text-lg" />
                </div>
                <p className="text-base lg:text-lg font-normal leading-relaxed">
                  Во TradingLab.mk споделуваме анализи, конкретни сетапи и влезови што 
                  ги користиме на реален пазар, без тајни и без маркетинг приказни.
                </p>
              </div>

              {/* Bullet point 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-transparent border border-[#FEBF10] rounded-full p-2 flex items-center justify-center flex-shrink-0 mt-1">
                  <IoMdCheckmark className="text-[#FEBF10] text-lg" />
                </div>
                <p className="text-base lg:text-lg font-normal leading-relaxed">
                  Во групата сме трејдери од целиот СВЕТ кои секојдневно објавуваме 
                  идеи за тргување, сигнали и ги објаснуваме нашите анализи и 
                  размислувања, и заедно учиме како да градиме конзистентен профит.
                </p>
              </div>

              {/* Bullet point 4 */}
              <div className="flex items-start space-x-4">
                <div className="bg-transparent border border-[#FEBF10] rounded-full p-2 flex items-center justify-center flex-shrink-0 mt-1">
                  <IoMdCheckmark className="text-[#FEBF10] text-lg" />
                </div>
                <p className="text-base lg:text-lg font-normal leading-relaxed">
                  <span className="font-bold">Нема трошоци</span>, <span className="font-bold">нема скриени услови</span>, целта е едноставна: 
                  да создадеме средина каде сите растеме и заработуваме подобро.
                </p>
              </div>

              {/* Bullet point 5 */}
              <div className="flex items-start space-x-4">
                <div className="bg-transparent border border-[#FEBF10] rounded-full p-2 flex items-center justify-center flex-shrink-0 mt-1">
                  <IoMdCheckmark className="text-[#FEBF10] text-lg" />
                </div>
                <p className="text-base lg:text-lg font-normal leading-relaxed">
                  Придружете се сега и започнете со нашите бесплатни ресурси. 
                  TradingLab.mk место каде знаењето и резултатите одат заедно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
