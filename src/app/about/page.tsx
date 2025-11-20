import ImageTextSection from "../components/ImageTextSection/ImageTextSection";
import ForexExplanationSection from "../components/ForexExplanationSection/ForexExplanationSection";
import CommunityAdvantagesSection from "../components/CommunityAdvantagesSection/CommunityAdvantagesSection";
import { SEOScrollWrapper } from "../components/SEOScrollWrapper/SEOScrollWrapper";

export default function AboutUs() {
  return (
    <div className="bg-[#191C21]">
      {/* About Section */}
      <SEOScrollWrapper animationType="fadeInUp" delay={0} duration={0.8}>
        <ImageTextSection
          title="За нас"
          titleColor="#9F62F8"
          showQuoteOverlay={true}
          quoteText="Димитар Аврамоски"
          imageAlt="Димитар Аврамоски - TradingLab MK"
        >
          <p>
            Ние сме посветен тим на трговци во форекс со повеќе од <strong>3 години</strong> искуство во навигација низ глобалните финансиски пазари. Нашата експертиза произлегува од долгогодишно практично искуство и успешни стратегии.
          </p>
          
          <p>
            Поседуваме <strong>сертификати</strong> за успешно завршување на различни предизвици, коишто ја потврдуваат нашата вештина и способноста постојано да остваруваме <strong>профитабилни резултати</strong>. Исто така, имаме докажана историја на повлекувања од водечки глобални брокери, што <strong>транспарентно</strong> ја покажува нашата веродостојност и успех во индустријата.
          </p>
          
          <p>
            Повеќе од <strong>3 години</strong>, сме посветени на <strong>едукација</strong> и оспособување на оние кои сакаат да тргуваат преку нашата академија. Без разлика дали сте почетник или искусен трговец, нудиме сеопфатна едукација за да ви помогнеме да успеете во светот на форекс тргувањето. Нашата услуга нуди <strong>курс создаден и приспособен</strong> да ве опремат со алатки и стратегии потребни за успех на пазарот. Покрај нашите <strong>едукациски услуги</strong>, изградивме живописна заедница на трговци кои споделуваат знаења, поддршка и увиди. Нашата заедница поддржува соработување, овозможувајќи им на членовите заедно да растат и да ги остварат своите трговски цели. Нашиот домет се простира подалеку од академија и заедница.
          </p>
        </ImageTextSection>
      </SEOScrollWrapper>

      {/* Forex Explanation Section */}
      <SEOScrollWrapper animationType="slideUp" delay={100} duration={0.9}>
        <ForexExplanationSection />
      </SEOScrollWrapper>

      {/* Community Advantages Section */}
      <SEOScrollWrapper animationType="fadeInRight" delay={150} duration={0.8}>
        <CommunityAdvantagesSection />
      </SEOScrollWrapper>
    </div>
  );
}
