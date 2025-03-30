import { ContactUsForm } from "./ContactUsForm";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo and description */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-purple-400">TradingLab</h2>
          <p className="text-purple-400 mt-2 max-w-sm">
            Стани дел од најдобрата трејдерска лабораторија во Македонија и
            пошироко, и почни да заработуваш.
          </p>
        </div>

        {/* Menu */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold">Мени</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-purple-400">
                Почетна
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Услуги
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Што е Forex
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                За нас
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <ContactUsForm />
      </div>
      <div className="border-t border-purple-400 mt-10"></div>
    </footer>
  );
};
