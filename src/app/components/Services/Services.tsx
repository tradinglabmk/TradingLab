import { ContactUsForm } from "../Footer/ContactUsForm";
import { TradingIdeas } from "../TradingIdeas/TradingIdeas";
import { Social } from "./Social";

export const Services = () => {
  return (
    <div className="bg-[#191C21]">
      <TradingIdeas />

      <Social />

      <div className="py-12 flex items-center justify-center">
        <ContactUsForm />
      </div>
    </div>
  );
};
