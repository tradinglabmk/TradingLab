"use client";

import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import blackLogo from "../../../public/assets/black-logo.png";
import Image from "next/image";
import { OnSubmitProps } from "../page";

interface ContactUsProps {
  onSubmit: ({
    email,
    firstName,
    lastName,
    message,
  }: OnSubmitProps) => Promise<void>;
}

export const ContactUs = ({ onSubmit }: ContactUsProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setMessage("");
  };

  const handleSubmit = () => {
    onSubmit({
      email,
      firstName,
      lastName,
      message,
      agreeToMarketing: true,
    });
    resetForm();
  };

  return (
    <div
      style={{ width: "340px" }}
      className="flex flex-col items-center justify-center bg-white px-6 py-8 sm:py-10 sm:m-0 lg:px-8"
    >
      <div
        className="text-center items-center justify-center"
        style={{ width: "320px" }}
      >
        <h2 className="text-sm font-semibold tracking-tight text-balance text-gray-900">
          Нашиот сајт е во изработка. Оставете информации за контакт доколку
          сакате да добиете пристап до нашиот бесплатен курс за тргување!
        </h2>
        <div className="items-center justify-center ml-14">
          <Image src={blackLogo} alt="Black Logo" height={100} width={200} />
        </div>
      </div>
      <div className="mt-8 sm:mt-8">
        <div className="">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Име и презиме
            </label>
            <div className="mt-2.5">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="w-full block rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Е-маил
            </label>
            <div className="mt-2.5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full block rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Порака
            </label>
            <div className="mt-2.5">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                rows={4}
                className="w-full block rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <Field className="mt-4 flex gap-x-4">
            <div className="flex h-6 items-center">
              <Switch
                checked={true}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              Се согласувам TradingLab да ми испраќа маркетинг материјал
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            onClick={handleSubmit}
            className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Испрати
          </button>
        </div>
      </div>
    </div>
  );
};
