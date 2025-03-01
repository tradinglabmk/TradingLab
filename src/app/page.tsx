"use client";

import { handleAddContact } from "./actions";
import toast from "react-hot-toast";
import { ContactUs } from "./components/ContactUs";
import Image from "next/image";
import whiteLogo from "../../public/assets/white-logo.png";

export interface OnSubmitProps {
  email: string;
  firstName?: string;
  lastName?: string;
  message?: string;
  agreeToMarketing: boolean;
}

export default function Home() {
  const onSubmit = async ({
    email,
    firstName,
    lastName,
    message,
    agreeToMarketing,
  }: OnSubmitProps) => {
    try {
      await handleAddContact({
        email,
        firstName,
        lastName,
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
    <div className="items-center justify-center flex py-15 sm:w-full">
      <ContactUs onSubmit={onSubmit} />
    </div>
  );
}
