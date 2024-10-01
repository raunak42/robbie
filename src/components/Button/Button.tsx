import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={clsx(
        "text-black font-bold text-xl flex items-center justify-center bg-[#E0FF00] px-4 py-2 ",
        className
      )}
    >
      {children}
    </button>
  );
};
