"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../../../../public/assets/white-logo.png";
import { Menu, X } from "lucide-react";
import { NavigationLink } from "./NavigationLink";
import { Button } from "../Button/Button";

const navLinks = [
  { name: "Аплицирај", href: "/" },
  { name: "Едукација", href: "/home" },
  { name: "Зошто е бесплатно?", href: "/home#why-free" },
  { name: "Курс", href: "/home#forex-academy" },
  { name: "Искуства од заедницата", href: "/home#community-experiences" },
  { name: "За нас", href: "/about" },
];

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Get current scroll position
      const scrollY = window.scrollY;

      // Apply styles to prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Get the scroll position from the body's top style
      const scrollY = document.body.style.top;

      // Remove the fixed positioning
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`bg-[#0F0F14] px-4 lg:px-16 h-[80px] fixed top-0 left-0 right-0 z-50`}
    >
      <div className="flex justify-between items-center h-[80px]">
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
          <ul className="flex gap-5 text-white font-normal text-sm relative">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavigationLink href={link.href} text={link.name} />
              </li>
            ))}
          </ul>
        </nav>

        <Button
          body="БЕСПЛАТНИ СИГНАЛИ"
          variant="primary"
          href="https://m.me/61573558067668"
          className="hidden lg:block"
        />
      </div>

      {isOpen && (
        <nav className="lg:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-[#0F0F14] border-t border-gray-700 z-50 flex flex-col justify-between items-center px-4 py-12">
          <div className="flex flex-col items-center">
            <ul className="flex flex-col gap-0 text-white font-medium text-center">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <NavigationLink
                    href={item.href}
                    text={item.name}
                    className="block p-4 rounded-lg hover:bg-gray-800/50 transition-colors text-base"
                    onClick={() => setIsOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Button
              body="БЕСПЛАТНИ СИГНАЛИ"
              variant="primary"
              href="https://m.me/61573558067668"
              className="min-w-[250px]"
            />
          </div>
        </nav>
      )}
    </div>
  );
};
