import React, { ReactNode } from "react";

interface ButtonProps {
  variant: "primaryBtn" | "secondaryBtn" | "addToCartBtn";
  onClick?: () => void;
  children?: string | ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  const baseClasses = "px-10 py-3 rounded text-center";

  const variantClasses = {
    primaryBtn: "bg-primary text-secondary",
    secondaryBtn: "bg-secondary text-primary hover:bg-gray-600",
    addToCartBtn: "bg-secondary text-white hover:bg-green-600",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
