import { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  href?: string;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  className = "text-center mb-8",
  titleClassName = "text-2xl md:text-3xl font-light mb-2",
  href = "#"
}: SectionHeaderProps) => {
  return (
    <a className={className} href={href}>
      <h3 className={titleClassName}>
        {title}
      </h3>
      {subtitle && (
        <p className="text-gray-400 text-lg">{subtitle}</p>
      )}
    </a>
  );
};