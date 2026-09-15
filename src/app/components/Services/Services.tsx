import { ContactUsForm } from "../Footer/ContactUsForm";
import { CopyMySignals } from "../CopyMySignals/CopyMySignals";
import { Social } from "./Social";

export const Services = () => {
  return (
    <div className="bg-[#191C21]">
      <CopyMySignals />

      <Social />

      <div className="py-12 flex items-center justify-center">
        <ContactUsForm />
      </div>
    </div>
  );
};
