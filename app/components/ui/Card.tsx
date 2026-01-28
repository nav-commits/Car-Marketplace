import React, { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  bgColor?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, bgColor, className }) => {
  return (
    <div
      className={clsx("p-4", bgColor, className)}
    >
      {children}
    </div>
  );
};

export default Card;
