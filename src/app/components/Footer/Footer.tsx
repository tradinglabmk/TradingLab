import Image from "next/image";
import { ContactUsForm } from "./ContactUsForm";
import whiteLogo from "../../../../public/assets/white-logo.png";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-5 md:px-20">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Section - Logo and Description */}
          <div className="space-y-6">
            <Image
              src={whiteLogo}
              alt="TradingLab Logo"
              width={200}
              height={50}
              className="object-contain"
            />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Стани дел од најдобрата трејдерска лабораторија во Македонија и пошироко, и почни да заработуваш.
            </p>
            
            {/* Social Media Links */}
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/tradinglab.mk/" 
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
              >
                <FaInstagram className="text-xl" />
                <span>INSTAGRAM</span>
              </a>
              <a 
                href="https://www.youtube.com/@tradinglabmk" 
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
              >
                <FaYoutube className="text-xl" />
                <span>YOUTUBE</span>
              </a>
            </div>
          </div>

          {/* Middle Section - Menu */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white">Мени</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/#forex-academy" className="hover:text-white transition-colors duration-200">
                  ЗОШТО Е БЕСПЛАТНО?
                </Link>
              </li>
              <li>
                <Link href="/#forex-academy" className="hover:text-white transition-colors duration-200">
                  КУРС
                </Link>
              </li>
              <li>
                <Link href="/#community-experiences" className="hover:text-white transition-colors duration-200">
                  ИСКУСТВА ОД ЗАЕДНИЦАТА
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  ЗА НАС
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors duration-200">
                  КОНТАКТ
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Form */}
          <ContactUsForm />
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-500">
            <p>© 2025 TradingLabMK. All rights reserved.</p>
            <p className="mt-1 text-sm">
              designed by <a href="#" className="underline hover:text-white transition-colors duration-200">Adrijan G</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
