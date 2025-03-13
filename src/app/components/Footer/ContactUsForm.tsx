"use client";
import { handleAddContact } from "@/app/actions";
import { useState } from "react";
import toast from "react-hot-toast";

export const ContactUsForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = () => {
    onSubmit();
    resetForm();
  };
  return (
    <div>
      <h3 className="text-lg font-semibold">Контакт</h3>
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
          className="bg-purple-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-purple-500"
          onClick={handleSubmit}
        >
          Испрати
        </button>
      </div>
      <div className="flex space-x-4 mt-4 text-purple-400">
        <a href="#" aria-label="Facebook">
          🌐
        </a>
        <a href="#" aria-label="Instagram">
          📷
        </a>
        <a href="#" aria-label="YouTube">
          ▶️
        </a>
      </div>
    </div>
  );
};
