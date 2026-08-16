import { redirect } from "next/navigation";
import { SEOScrollWrapper } from "./components/SEOScrollWrapper/SEOScrollWrapper";
import { ApplicationForm } from "./components/Apply/ApplicationForm";

export default function Home() {
  if (process.env.NEXT_PUBLIC_SHOW_APPLY_FORM !== "true") {
    redirect("/home");
  }
  return (
    <div className="bg-[#101016] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <SEOScrollWrapper animationType="fadeInUp" delay={0} duration={0.8}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-white text-center">
            АПЛИКАЦИЈА ЗА{" "}
            <span style={{ color: "#9F62F8" }} className="font-bold">
              TRADINGLAB.MK
            </span>
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-300 mb-4">
            Ви благодариме за интересот за програмите на TradingLab.mk.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-300 mb-2">
            Оваа апликација е наменета за лица кои се заинтересирани за:
          </p>
          <ul className="space-y-2 text-base md:text-lg pl-1">
            <li className="flex items-center gap-2">
              <span style={{ color: "#9F62F8" }} className="shrink-0">
                ▸
              </span>
              <span className="font-semibold" style={{ color: "#BF94FF" }}>
                1-на-1 индивидуално Mentorship;
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "#9F62F8" }} className="shrink-0">
                ▸
              </span>
              <span className="font-semibold" style={{ color: "#BF94FF" }}>
                Group Coaching во мала група;
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "#9F62F8" }} className="shrink-0">
                ▸
              </span>
              <span className="font-semibold" style={{ color: "#BF94FF" }}>
                Trading Signals.
              </span>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-gray-700/40 bg-white/[0.02] px-5 py-4 space-y-3">
            <p className="text-sm md:text-base font-light leading-relaxed text-gray-300">
              Пополнувањето на формата не претставува автоматско прифаќање во
              програмата. По разгледувањето на одговорите, избраните кандидати
              ќе бидат контактирани преку е-пошта или преку избраниот начин на
              комуникација.
            </p>
            <p className="text-sm md:text-base font-light text-gray-400 flex items-center gap-2">
              <svg
                className="h-4 w-4 shrink-0"
                style={{ color: "#9F62F8" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Потребно време за пополнување: приближно{" "}
              <span className="font-medium text-white">7–12 минути</span>.
            </p>
          </div>
        </SEOScrollWrapper>

        <SEOScrollWrapper animationType="fadeInUp" delay={150} duration={0.8}>
          <div className="mt-10">
            <ApplicationForm />
          </div>
        </SEOScrollWrapper>
      </div>
    </div>
  );
}
