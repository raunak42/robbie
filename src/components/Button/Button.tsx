"use client"
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "text-black font-bold flex items-center justify-center bg-[#E0FF00] hover:bg-[#95a520] px-4 py-2 ",
        className
      )}
    >
      {children}
    </button>
  );
};
