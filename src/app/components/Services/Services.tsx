import { ContactUsForm } from "../Footer/ContactUsForm";
import { Social } from "./Social";

export const Services = () => {
  return (
    <div className="bg-gray-900">
      <Social />

      <div className="py-12 flex items-center justify-center">
        <ContactUsForm />
      </div>
    </div>
  );
};
