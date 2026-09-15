import Image from "next/image";
import communityAdvantagesImage from "../../../../public/assets/community_adventages.svg";

const CommunityAdvantagesSection = () => {
  return (
    <section className="bg-gradient-to-br from-black via-[#371c60] to-[#0d011e] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#9F62F8] mb-2">
              Предности со нашата заедница
            </h2>
            
            <h3 className="text-xl md:text-2xl font-light text-white mb-8">
              Се е бесплатно!
            </h3>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
              <p>
                Нашето искуство и професионално разбирање на 
                Форекс пазарот се клучни за вашиот успех.
              </p>

              <p>
                Користиме метод на <strong className="text-[#9F62F8]">80% техничка анализа</strong> и <strong className="text-[#9F62F8]">20% 
                фундаментална анализа</strong>, со добро пресметан 
                ризик, за да обезбедиме стабилни и профитабилни 
                резултати. Останете поврзани со пазарот преку 
                <strong className="text-[#9F62F8]"> 24/7 корисничка поддршка</strong> и стручни насоки.
              </p>
            </div>
          </div>

          {/* Image Section with Purple Glow */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Purple glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#9F62F8] opacity-20 blur-3xl transform scale-110"></div>
              
              {/* Main image */}
              <div className="relative z-10 p-8">
                <Image
                  src={communityAdvantagesImage}
                  alt="Community Advantages Illustration"
                  className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
                  width={600}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityAdvantagesSection;