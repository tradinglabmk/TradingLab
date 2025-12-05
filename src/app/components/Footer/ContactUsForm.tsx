"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../Button/Button";
import { saveContact } from "../../data/contacts";

export const ContactUsForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/assets/book.pdf";
  //   link.download = "библија_за_тргување.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const onSubmit = async () => {
    try {
      await saveContact({
        fullName,
        email,
        message
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
    // handleDownload();
    resetForm();
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-white">ИСПРАТИ ПОРАКА</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">
            Име и презиме
          </label>
          <input
            type="text"
            placeholder="Петар Петровски"
            className="w-full p-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors duration-200"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">
            E - Маил
          </label>
          <input
            type="email"
            placeholder="petarpetrovski@gmail.com"
            className="w-full p-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">
            Порака
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="ех. Како да се зачленам?"
            className="w-full p-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors duration-200 resize-none"
          />
        </div>

        <div className="pt-2">
          <Button
            body={isSubmitting ? "Се праќа..." : "ИСПРАТИ"}
            variant="primary"
            onClick={handleSubmit}
            className={`${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};
