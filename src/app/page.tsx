"use client";

// import { handleAddContact } from "./actions";
// import toast from "react-hot-toast";
// import { ContactUs } from "./components/ContactUs";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";

export interface OnSubmitProps {
  email: string;
  fullName?: string;
  message?: string;
  agreeToMarketing: boolean;
}

export default function Home() {
  // const onSubmit = async ({
  //   email,
  //   fullName,
  //   message,
  //   agreeToMarketing,
  // }: OnSubmitProps) => {
  //   try {
  //     await handleAddContact({
  //       email,
  //       fullName,
  //       message,
  //       agreeToMarketing,
  //     });
  //     toast.success("Успешно се зачувани вашите информации. Ви благодариме!🔥");
  //   } catch {
  //     toast.error(
  //       "Имаше грешка при зачувување на вашите информации. Ве молиме обидете се повторно!"
  //     );
  //   }
  // };

  return (
    <div className="w-full">
      {/* <ContactUs onSubmit={onSubmit} /> */}
      <NavigationBar />
    </div>
  );
}
