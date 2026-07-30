"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../Button/Button";
import { saveApplication } from "../../data/applications";
import { MentorshipForm, MentorshipData } from "./MentorshipForm";
import { GroupCoachingForm, GroupCoachingData } from "./GroupCoachingForm";
import { TradingSignalsForm, TradingSignalsData } from "./TradingSignalsForm";

const ageGroups = [
  "Под 18 години",
  "Од 18 до 24 години",
  "Од 25 до 34 години",
  "Од 35 до 44 години",
  "Од 45 до 54 години",
  "Над 55 години",
];

const contactMethods = [
  "Е-пошта",
  "Instagram",
  "WhatsApp",
  "Telegram",
  "Телефонски повик",
];

const serviceOptions = [
  {
    title: "1-на-1 индивидуално Mentorship",
    description: "Персонализирано водство, целосно прилагодено на вас.",
  },
  {
    title: "Group Coaching во мала група",
    description: "Едукација и поддршка заедно со мала група трговци.",
  },
  {
    title: "Trading Signals",
    description: "Аналитички trading идеи со Entry, SL и TP нивоа.",
  },
];

interface Step1Fields {
  fullName: string;
  email: string;
  ageGroup: string;
  country: string;
  city: string;
  contactMethod: string;
  additionalContact: string;
}

export const ApplicationForm = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<Step1Fields>({
    defaultValues: {
      fullName: "",
      email: "",
      ageGroup: "",
      country: "",
      city: "",
      contactMethod: "",
      additionalContact: "",
    },
  });

  const resetForm = () => {
    reset();
    setService("");
    setStep(1);
  };

  const onStep1Valid = () => {
    setStep(2);
  };

  const handleNext = () => {
    handleFormSubmit(onStep1Valid, () => {
      toast.error("Ве молиме пополнете ги задолжителните полиња.");
    })();
  };

  const handleSubmit = async (
    formData?: MentorshipData | GroupCoachingData | TradingSignalsData,
  ) => {
    if (!service.trim()) {
      toast.error("Ве молиме изберете услуга.");
      return;
    }

    const values = getValues();
    setIsSubmitting(true);
    try {
      await saveApplication({
        fullName: values.fullName,
        email: values.email,
        ageGroup: values.ageGroup,
        country: values.country,
        city: values.city,
        contactMethod: values.contactMethod,
        additionalContact: values.additionalContact,
        service,
        ...(formData && service === "1-на-1 индивидуално Mentorship"
          ? { mentorshipData: formData as unknown as Record<string, unknown> }
          : {}),
        ...(formData && service === "Group Coaching во мала група"
          ? {
              groupCoachingData: formData as unknown as Record<string, unknown>,
            }
          : {}),
        ...(formData && service === "Trading Signals"
          ? {
              tradingSignalsData: formData as unknown as Record<
                string,
                unknown
              >,
            }
          : {}),
      });
      toast.success("Успешно ја испративте апликацијата. Ви благодариме!🔥");
      resetForm();
    } catch {
      toast.error(
        "Имаше грешка при испраќање на апликацијата. Ве молиме обидете се повторно!",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceSubmit = () => {
    if (!service.trim()) {
      toast.error("Ве молиме изберете услуга.");
      return;
    }
    if (service === "1-на-1 индивидуално Mentorship") {
      setStep(3);
    } else if (service === "Group Coaching во мала група") {
      setStep(3);
    } else if (service === "Trading Signals") {
      setStep(3);
    } else {
      handleSubmit();
    }
  };

  if (step === 2) {
    return (
      <div className="space-y-6">
        <label className="block text-2xl md:text-3xl font-semibold text-white">
          За која услуга сте заинтересирани?{" "}
          <span style={{ color: "#9F62F8" }}>*</span>
        </label>
        <div className="flex flex-col gap-4">
          {serviceOptions.map(({ title, description }) => {
            const isSelected = service === title;
            return (
              <div
                key={title}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => setService(title)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setService(title);
                  }
                }}
                className={`group flex w-full cursor-pointer select-none items-center gap-4 rounded-2xl border px-6 py-5 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                  isSelected
                    ? "border-[#9F62F8] bg-gradient-to-r from-[#241a38] to-[#2c1e46] shadow-[0_0_35px_-6px_rgba(159,98,248,0.8)]"
                    : "border-[#9F62F8]/30 bg-gradient-to-r from-[#161320] to-[#1c1730] shadow-[0_0_20px_-10px_rgba(159,98,248,0.5)] hover:border-[#9F62F8]/70 hover:shadow-[0_0_30px_-8px_rgba(159,98,248,0.7)]"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                    isSelected
                      ? "border-[#9F62F8] bg-[#9F62F8]"
                      : "border-gray-500 bg-transparent group-hover:border-[#9F62F8]"
                  }`}
                >
                  {isSelected && (
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  )}
                </span>
                <span className="flex flex-col">
                  <span className="text-white font-semibold text-base md:text-lg">
                    {title}
                  </span>
                  <span className="text-gray-400 text-sm mt-1">
                    {description}
                  </span>
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wide"
          >
            Назад
          </button>
          <Button
            body={isSubmitting ? "Се праќа..." : "СЛЕДНО"}
            variant="primary"
            onClick={handleServiceSubmit}
            className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
          />
        </div>
      </div>
    );
  }

  if (step === 3) {
    if (service === "Group Coaching во мала група") {
      return (
        <GroupCoachingForm
          onSubmit={(groupCoachingData) => handleSubmit(groupCoachingData)}
          onBack={() => setStep(2)}
          isSubmitting={isSubmitting}
        />
      );
    }
    if (service === "Trading Signals") {
      return (
        <TradingSignalsForm
          onSubmit={(tradingSignalsData) => handleSubmit(tradingSignalsData)}
          onBack={() => setStep(2)}
          isSubmitting={isSubmitting}
        />
      );
    }
    return (
      <MentorshipForm
        onSubmit={(mentorshipData) => handleSubmit(mentorshipData)}
        onBack={() => setStep(2)}
        isSubmitting={isSubmitting}
      />
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-[13px] text-gray-400 mb-2 uppercase tracking-wider font-medium">
          Име и презиме *
        </label>
        <input
          type="text"
          placeholder="Петар Петровски"
          className={`w-full rounded-xl border ${errors.fullName ? "border-red-500" : "border-gray-700/60"} bg-white/[0.02] px-4 py-3.5 text-white placeholder-gray-500 backdrop-blur-sm focus:border-[#9F62F8] focus:bg-white/[0.04] focus:shadow-[0_0_15px_-5px_rgba(159,98,248,0.3)] focus:outline-none transition-all duration-300`}
          {...register("fullName", {
            required: "Полето е задолжително",
            validate: (v) => v.trim() !== "" || "Полето е задолжително",
          })}
        />
        {errors.fullName && (
          <p className="text-red-400 text-xs mt-1.5">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-[13px] text-gray-400 mb-2 uppercase tracking-wider font-medium">
          Е-пошта *
        </label>
        <input
          type="email"
          placeholder="petarpetrovski@gmail.com"
          className={`w-full rounded-xl border ${errors.email ? "border-red-500" : "border-gray-700/60"} bg-white/[0.02] px-4 py-3.5 text-white placeholder-gray-500 backdrop-blur-sm focus:border-[#9F62F8] focus:bg-white/[0.04] focus:shadow-[0_0_15px_-5px_rgba(159,98,248,0.3)] focus:outline-none transition-all duration-300`}
          {...register("email", {
            required: "Полето е задолжително",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Внесете валидна е-пошта",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-[13px] text-gray-400 mb-2 uppercase tracking-wider font-medium">
          Возрасна група *
        </label>
        <select
          className={`w-full rounded-xl border ${errors.ageGroup ? "border-red-500" : "border-gray-700/60"} bg-[#101016] px-4 py-3.5 text-white backdrop-blur-sm focus:border-[#9F62F8] focus:shadow-[0_0_15px_-5px_rgba(159,98,248,0.3)] focus:outline-none transition-all duration-300`}
          defaultValue=""
          {...register("ageGroup", { required: "Полето е задолжително" })}
        >
          <option value="" disabled>
            Изберете возрасна група
          </option>
          {ageGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
        {errors.ageGroup && (
          <p className="text-red-400 text-xs mt-1.5">
            {errors.ageGroup.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-[13px] text-gray-400 mb-2 uppercase tracking-wider font-medium">
          Држава *
        </label>
        <input
          type="text"
          placeholder="Македонија"
          className={`w-full rounded-xl border ${errors.country ? "border-red-500" : "border-gray-700/60"} bg-white/[0.02] px-4 py-3.5 text-white placeholder-gray-500 backdrop-blur-sm focus:border-[#9F62F8] focus:bg-white/[0.04] focus:shadow-[0_0_15px_-5px_rgba(159,98,248,0.3)] focus:outline-none transition-all duration-300`}
          {...register("country", {
            required: "Полето е задолжително",
            validate: (v) => v.trim() !== "" || "Полето е задолжително",
          })}
        />
        {errors.country && (
          <p className="text-red-400 text-xs mt-1.5">
            {errors.country.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-[13px] text-gray-400 mb-2 uppercase tracking-wider font-medium">
          Град *
        </label>
        <input
          type="text"
          placeholder="Скопје"
          className={`w-full rounded-xl border ${errors.city ? "border-red-500" : "border-gray-700/60"} bg-white/[0.02] px-4 py-3.5 text-white placeholder-gray-500 backdrop-blur-sm focus:border-[#9F62F8] focus:bg-white/[0.04] focus:shadow-[0_0_15px_-5px_rgba(159,98,248,0.3)] focus:outline-none transition-all duration-300`}
          {...register("city", {
            required: "Полето е задолжително",
            validate: (v) => v.trim() !== "" || "Полето е задолжително",
          })}
        />
        {errors.city && (
          <p className="text-red-400 text-xs mt-1.5">{errors.city.message}</p>
        )}
      </div>

      <div>
        <label className="block text-[13px] text-gray-400 mb-2 uppercase tracking-wider font-medium">
          Кој е најдобриот начин да ве контактираме? *
        </label>
        <select
          className={`w-full rounded-xl border ${errors.contactMethod ? "border-red-500" : "border-gray-700/60"} bg-[#101016] px-4 py-3.5 text-white backdrop-blur-sm focus:border-[#9F62F8] focus:shadow-[0_0_15px_-5px_rgba(159,98,248,0.3)] focus:outline-none transition-all duration-300`}
          defaultValue=""
          {...register("contactMethod", { required: "Полето е задолжително" })}
        >
          <option value="" disabled>
            Изберете начин на контакт
          </option>
          {contactMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
        {errors.contactMethod && (
          <p className="text-red-400 text-xs mt-1.5">
            {errors.contactMethod.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-[13px] text-gray-400 mb-2 uppercase tracking-wider font-medium">
          Дополнителен контакт
        </label>
        <p className="text-xs text-gray-500 mb-2">
          Напишете го вашиот Instagram профил, телефонски број, WhatsApp или
          Telegram корисничко име.
        </p>
        <input
          type="text"
          placeholder="@instagram_profil / 070 123 456"
          className="w-full rounded-xl border border-gray-700/60 bg-white/[0.02] px-4 py-3.5 text-white placeholder-gray-500 backdrop-blur-sm focus:border-[#9F62F8] focus:bg-white/[0.04] focus:shadow-[0_0_15px_-5px_rgba(159,98,248,0.3)] focus:outline-none transition-all duration-300"
          {...register("additionalContact")}
        />
      </div>

      <div className="pt-3">
        <Button body="СЛЕДНО" variant="primary" onClick={handleNext} />
      </div>
    </div>
  );
};
