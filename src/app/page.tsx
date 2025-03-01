"use client";

import { handleAddContact } from "./actions";
import toast from "react-hot-toast";
import { ContactUs } from "./components/ContactUs";

export interface OnSubmitProps {
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  message?: string;
  agreeToMarketing: boolean;
}

export default function Home() {
  const onSubmit = async ({
    email,
    firstName,
    lastName,
    phoneNumber,
    message,
    agreeToMarketing,
  }: OnSubmitProps) => {
    try {
      await handleAddContact({
        email,
        firstName,
        lastName,
        phoneNumber,
        message,
        agreeToMarketing,
      });
      toast.success("Успешно се зачувани вашите информации. Ви благодариме!🔥");
    } catch {
      toast.error(
        "Имаше грешка при зачувување на вашите информации. Ве молиме обидете се повторно!"
      );
    }
  };

  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)] py-15">
      <ContactUs onSubmit={onSubmit} />
    </div>
  );
}
