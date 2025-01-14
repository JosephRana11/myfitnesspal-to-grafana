import React from "react";
import { cn } from "@/app/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl inline-flex w-fit items-center px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 mt-4 font-bold",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
