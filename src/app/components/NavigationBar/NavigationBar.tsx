"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import whiteLogo from "../../../../public/assets/white-logo.png";
import arrowRight from "../../../../public/assets/arrow-right.png";
import { Menu, X, ChevronDown } from "lucide-react";

export const NavigationBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <div className="bg-[#0F1014] p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={whiteLogo}
            alt="logo"
            width={150}
            className="object-contain cursor-pointer"
          />
        </Link>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden lg:flex">
          <ul className="flex gap-6 text-white font-semibold relative">
            <li>
              <Link
                href="/"
                className={`transition ${
                  pathname === "/" ? "text-white" : "hover:text-[#FEBF10]"
                }`}
              >
                Почетна
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <Link
                href="/services"
                className={`transition flex items-center gap-1 ${
                  pathname === "/services"
                    ? "text-white"
                    : "hover:text-[#FEBF10]"
                }`}
              >
                Услуги
                <ChevronDown size={16} />
              </Link>

              {isServicesHovered && (
                <div className="absolute pt-6 left-0 top-full z-10 w-60">
                  <div className="bg-[#0F1014] text-white rounded-xl shadow-lg overflow-hidden">
                    {[
                      "Бесплатна едукација",
                      "Бесплатна E - Книга",
                      "Бесплатни сигнали",
                    ].map((label, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-3 hover:bg-[#FEBF10] hover:text-black transition-all duration-200 text-sm font-medium"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/forex"
                className={`transition ${
                  pathname === "/forex" ? "text-white" : "hover:text-[#FEBF10]"
                }`}
              >
                Што е Forex
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`transition ${
                  pathname === "/about" ? "text-white" : "hover:text-[#FEBF10]"
                }`}
              >
                За нас
              </Link>
            </li>
          </ul>
        </nav>

        <button className="hidden lg:flex border border-white rounded-full text-white transition relative overflow-hidden p-2 cursor-pointer">
          <span className="pl-6 pr-16 py-2">
            <Link href={"https://m.me/61573558067668"}>Закажи разговор</Link>
          </span>
          <span className="w-14 h-14 flex items-center justify-center border border-white rounded-full top-0 absolute right-7 translate-x-1/2">
            <Image src={arrowRight} alt="arrowRight" width={16} height={16} />
          </span>
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4 text-white font-semibold">
            {[
              { name: "Почетна", href: "/" },
              { name: "Услуги", href: "/services" },
              { name: "Што е Forex", href: "/forex" },
              { name: "За нас", href: "/about" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block p-2 transition ${
                    pathname === item.href
                      ? "text-[#FEBF10]"
                      : "hover:text-[#FEBF10]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
