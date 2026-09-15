import { Button } from "../Button/Button";
import { StatsCard } from "../StatsCard/StatsCard";
import { ScrollAnimationWrapper } from "../ScrollAnimationWrapper/ScrollAnimationWrapper";
import Image from "next/image";
import elipseLeft from "../../../../public/assets/hero_section/elipseLeft.svg";
import elipseRight from "../../../../public/assets/hero_section/elipseRight.svg";

export const HeroSection = () => {
  return (
    <div className="bg-[#0F0F14] text-white min-h-screen flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Animated Ellipses */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-between">
        {/* Left Ellipse */}
        <div>
          <Image
            src={elipseLeft}
            alt=""
            width={1200}
            height={1200}
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[500px] md:h-[500px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px] 2xl:w-[1200px] 2xl:h-[1200px]"
          />
        </div>
        
        {/* Right Ellipse */}
        <div>
          <Image
            src={elipseRight}
            alt=""
            width={1200}
            height={1200}
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[500px] md:h-[500px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px] 2xl:w-[1200px] 2xl:h-[1200px]"
          />
        </div>
      </div>

      {/* Bottom Purple Shadow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.03) 50%, rgba(139, 92, 246, 0.08) 100%)',
          filter: 'blur(20px)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top Badge */}
        <div className="mb-8 text-center animate-fadeInDown" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <div className="bg-gradient-to-r from-purple-600/20 to-teal-600/20 border border-purple-500/30 rounded-full px-6 py-2 text-sm text-purple-200 inline-block">
            ⭐ БРОИМЕ НАД 300 ЗАДОВОЛНИ ЧЛЕНОВИ
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            TRADE. WIN. REPEAT.
          </h1>

          {/* Decorative Line */}
          <div className="w-[100%] h-[1px] bg-[#FEBF1099] mx-auto mb-8 animate-fadeIn" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}></div>

          {/* Subheading */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-100 animate-fadeInUp" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
            ТВОЈОТ FOREX ПАТ
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-[785px] mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '1.3s', animationFillMode: 'both' }}>
            Вистинските резултати почнуваат со вистинското знаење. Учи од бесплатниот курс, 
            читај професионална е-книга на македонски, или едноставно доколку немаш време 
            следи маркет анализи и копирај ги нашите сигнали потполно бесплатно!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
            <Button 
              body="ПРИДРУЖИ СЕ" 
              variant="primary"
              className="min-w-[200px]"
              href="https://m.me/61573558067668"
            />
            <Button 
              body={`ЕДУКАЦИСКИ ВИДЕА`} 
              variant="secondary"
              className="min-w-[200px]"
              href="#forex-academy"
            />
          </div>

          {/* Stats Cards */}
          <ScrollAnimationWrapper animationType="fadeInUp" delay={200} duration={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="animate-fadeInUp" style={{ animationDelay: '1.7s', animationFillMode: 'both' }}>
                <StatsCard value="100%" label="БЕСПЛАТНО" />
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: '1.8s', animationFillMode: 'both' }}>
                <StatsCard value="3+ год" label="ИСКУСТВО" />
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: '1.9s', animationFillMode: 'both' }}>
                <StatsCard value="70%" label="ПРОФИТАБИЛНОСТ" />
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: '2.0s', animationFillMode: 'both' }}>
                <StatsCard value="24/7" label="ПОДДРШКА" />
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};
