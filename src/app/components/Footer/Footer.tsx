import Image from "next/image";
import { ContactUsForm } from "./ContactUsForm";
import whiteLogo from "../../../../public/assets/white-logo.png"

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <Image
            src={whiteLogo}
            alt="TradingLab Logo"
            width={160}
            height={40}
            className="object-contain"
          />
          <p className="text-[#FEBF10] mt-4 max-w-sm">
            Стани дел од најдобрата трејдерска лабораторија во Македонија и
            пошироко, и почни да заработуваш.
          </p>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold">Мени</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-[#FEBF10]">
                Почетна
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FEBF10]">
                Услуги
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FEBF10]">
                Што е Forex
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FEBF10]">
                За нас
              </a>
            </li>
          </ul>
        </div>

        <ContactUsForm />
      </div>
      <div className="border-t border-[#FEBF10] mt-10"></div>
    </footer>
  );
};
