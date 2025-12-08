import { ReactNode } from "react";

interface CTAButtonProps {
  text: string;
  icon: ReactNode;
  variant: "primary" | "secondary" | "white" | "outline-white";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const CTAButton = ({
  text,
  icon,
  variant,
  size = "md",
  onClick,
}: CTAButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all hover:shadow-md active:scale-95";

  const variantStyles = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800",
    secondary:
      "bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50 active:bg-emerald-100",
    white: "bg-white text-gray-900 hover:bg-gray-100 active:bg-gray-200",
    "outline-white":
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 active:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-sm min-h-10",
    md: "px-5 py-3 text-base min-h-12",
    lg: "px-6 py-4 text-lg min-h-14",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}>
      <span className="truncate">{text}</span>
      <span className="ml-2 flex-shrink-0">{icon}</span>
    </button>
  );
};

export default CTAButton;
