import Link from "next/link";

interface Button {
  body: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

export const Button = ({
  body,
  href,
  variant = "primary",
  className = "",
  onClick,
  external = true,
}: Button) => {
  const baseStyles = "uppercase text-center font-normal text-[16px] px-6";

  const primaryStyles =
    "bg-gradient-to-r from-[#BF94FF] to-[#863DE9] text-white";
  const secondaryStyles =
    "bg-gradient-to-r from-[#FFDC7C] to-[#FEBF10] text-black";

  const variantStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <button
      style={{
        borderRadius: "24px",
        textShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
        height: "40px",
      }}
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {body}
        </a>
      ) : (
        <Link href={href ?? "#"}>{body}</Link>
      )}
    </button>
  );
};
