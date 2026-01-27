import React from "react";
import clsx from "clsx";

interface ButtonProps {
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  boderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className, icon, boderRadius }) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-2 cursor-pointer",
        boderRadius,
        className
      )}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {title && <span>{title}</span>}
    </button>
  );
};

export default Button;
