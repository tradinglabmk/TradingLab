import { PLANS } from "@/app/data/plans";
import { PricingCard } from "./PricingCard";
import { AdminOnly } from "./AdminOnly";

interface Props {
  heading?: string;
  subheading?: string;
  className?: string;
}

export const PricingSection = ({
  heading = "Изберете план",
  subheading = "Инвестирајте во вашето трговско образование",
  className = "",
}: Props) => {
  const groupPlans = PLANS.filter((p) => p.category === "group");
  const signalsPlans = PLANS.filter((p) => p.category === "signals");
  const testPlans = PLANS.filter((p) => p.category === "test");

  return (
    <section
      className={`w-full bg-[#0F0F14] pt-6 sm:pt-10 pb-16 sm:pb-24 ${className}`}
    >
      <div className="mx-auto w-[90%] max-w-6xl">
        <header className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            {heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 font-light">
            {subheading}
          </p>
        </header>

        <div className="mb-10">
          <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-[#BF94FF]">
            Group Coaching
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {groupPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-[#BF94FF]">
            Trading Signals
          </h3>
          <div className="mx-auto grid max-w-md gap-6">
            {signalsPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>

        {testPlans.length > 0 && (
          <AdminOnly>
            <div className="mt-10">
              <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-yellow-400">
                Тест (само за проверување на плаєања)
              </h3>
              <div className="mx-auto grid max-w-md gap-6">
                {testPlans.map((plan) => (
                  <PricingCard key={plan.id} plan={plan} />
                ))}
              </div>
            </div>
          </AdminOnly>
        )}
      </div>
    </section>
  );
};
