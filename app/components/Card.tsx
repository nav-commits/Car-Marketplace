import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;      
  bgColor?: string;          
  className?: string;        
}

const Card: React.FC<CardProps> = ({ children, bgColor , className  }) => {
  return (
    <div
      className={`rounded-xl shadow-md p-4 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};

export default Card;
