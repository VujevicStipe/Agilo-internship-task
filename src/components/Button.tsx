import React, { ReactNode } from "react";

interface ButtonProps {
  variant: "primaryBtn" | "secondaryBtn" | "incrementBtn" | "categoryBtn";
  name?: string;
  onClick?: () => void;
  children?: string | ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, name, onClick, children }) => {
  const baseClasses = "px-10 py-3 rounded text-center";

  const variantClasses = {
    primaryBtn: "bg-primary text-secondary hover:bg-gray-100",
    secondaryBtn: "bg-secondary text-primary hover:bg-gray-600",
    incrementBtn: "text-gray-600",
    categoryBtn: "text-secondary",
  };
  return (
    <button
      name={name}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
