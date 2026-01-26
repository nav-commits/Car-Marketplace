import React from "react";

interface ButtonProps {
  title: string;
  bgClass?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, bgClass, icon }) => {
  return (
    <button
      className={`flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer ${bgClass}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {title}
    </button>
  );
};

export default Button;
