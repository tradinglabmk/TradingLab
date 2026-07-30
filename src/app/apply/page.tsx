import { SEOScrollWrapper } from "../components/SEOScrollWrapper/SEOScrollWrapper";
import { ApplicationForm } from "../components/Apply/ApplicationForm";
import { ApplyWidget } from "../components/ApplyWidget/ApplyWidget";

export default function Apply() {
  return (
    <div className="bg-[#101016] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <SEOScrollWrapper animationType="fadeInUp" delay={0} duration={0.8}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6">
            <span style={{ color: "#9F62F8" }}>
              1-на-1 Mentorship, Group Coaching и Trading Signals
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
            Пополнете ја апликацијата подолу за да аплицирате за 1-на-1
            Mentorship, Group Coaching или Trading Signals.
          </p>
        </SEOScrollWrapper>

        <SEOScrollWrapper animationType="fadeInUp" delay={150} duration={0.8}>
          <div className="mt-10">
            <ApplicationForm />
          </div>
        </SEOScrollWrapper>
      </div>

      <ApplyWidget />
    </div>
  );
}
