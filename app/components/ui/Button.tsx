import React from "react";
import clsx from "clsx";

interface ButtonProps {
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  borderRadius?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  className,
  icon,
  borderRadius = "rounded-lg",
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center gap-2 cursor-pointer px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#405FF2] disabled:opacity-50 disabled:cursor-not-allowed",
        borderRadius,
        className
      )}
    >
      {title && <span>{title}</span>}
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
};

export default Button;
