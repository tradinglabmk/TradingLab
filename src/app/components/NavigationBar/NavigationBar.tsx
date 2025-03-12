import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To detect active route
import whiteLogo from "../../../../public/assets/white-logo.png";
import arrowRight from "../../../../public/assets/arrow-right.png";

export const NavigationBar = () => {
  const pathname = usePathname(); 

  return (
    <div className="flex justify-between items-center p-4 bg-[#0F1014]">

      <Link href="/" className="flex-shrink-0">
        <Image
          src={whiteLogo}
          alt="logo"
          width={200}
          className="object-contain cursor-pointer"
        />
      </Link>

      <nav>
        <ul className="flex gap-6 text-white font-semibold">
          {[
            { name: "Почетна", href: "/" },
            { name: "Услуги", href: "/servicesPage" },
            { name: "Што е Forex", href: "/forexPage" },
            { name: "За нас", href: "/about" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition ${
                  pathname === item.href
                    ? "text-[#BB01FF]"
                    : "hover:text-[#BB01FF]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="flex border border-white rounded-full text-white transition relative overflow-hidden p-2 cursor-pointer">
        <span className="pl-6 pr-16 py-2">Закажи разговор</span>
        <span className="w-14 h-14 flex items-center justify-center border border-white rounded-full top-0 absolute right-7 translate-x-1/2">
          <Image src={arrowRight} alt="arrowRight" width={16} height={16} />
        </span>
      </button>
    </div>
  );
};
