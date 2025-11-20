"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  href: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

export const NavigationLink = ({ href, text, className = "", onClick }: NavigationLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`transition ${
        pathname === href ? "text-[#9F62F8] font-normal" : " font-extralight hover:text-[#c09afa] text-white"
      } ${className} text-lg`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};