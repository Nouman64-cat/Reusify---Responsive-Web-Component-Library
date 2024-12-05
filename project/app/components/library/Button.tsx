import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = "primary", onClick }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-parkinsans text-lg transition-all";
  const variants = {
    primary: "bg-[#9117E1] text-white hover:bg-[#7e0ecb]",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    outline: "border-2 border-[#9117E1] text-[#9117E1] hover:bg-[#9117E1] hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
