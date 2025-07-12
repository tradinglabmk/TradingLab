"use client";
import { handleAddContact } from "@/app/actions";
import { useState } from "react";
import toast from "react-hot-toast";

export const ContactUsForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/book.pdf";
    link.download = "библија_за_тргување.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onSubmit = async () => {
    try {
      await handleAddContact({
        email,
        fullName,
        message,
        agreeToMarketing: true,
      });
      toast.success("Успешно се зачувани вашите информации. Ви благодариме!🔥");
    } catch {
      toast.error(
        "Имаше грешка при зачувување на вашите информации. Ве молиме обидете се повторно!"
      );
    }
  };

  const resetForm = () => {
    setEmail("");
    setFullName("");
    setMessage("");
  };

  const handleSubmit = async () => {
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      toast.error("Ве молиме пополнете ги сите полиња пред да ја превземете книгата.");
      return;
    }

    setIsSubmitting(true);
    await onSubmit();
    handleDownload();
    resetForm();
    setIsSubmitting(false);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Бесплатна Е-Книга</h3>
      <div className="mt-2 space-y-2">
        <input
          type="text"
          placeholder="Име и презиме"
          className="w-full p-2 bg-black border border-gray-600 rounded-md"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E - Маил Адреса"
          className="w-full p-2 bg-black border border-gray-600 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Порака"
          className="w-full p-2 bg-black border border-gray-600 rounded-md"
        />
        <label className="text-sm flex items-start">
          <input type="checkbox" className="mr-2 mt-1" defaultChecked />
          Се согласувам TradingLabMK да ми испраќа корисен материјал
        </label>
        <button
          className="bg-purple-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-purple-500 disabled:opacity-50"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Се презема..." : "Преземи"}
        </button>
      </div>
    </div>
  );
};
