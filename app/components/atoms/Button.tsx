import React from "react";
import { cn } from "@/app/utils/cn";
export default function Button({
  className,
  children,
  ...props
}: Readonly<{
  className?: string;
  children: React.HTMLInputTypeAttribute;
}>) {
  return (
    <button
      className={cn("rounded-xl inline-flex w-fit items-center px-6 py-3 text-gray-700 bg-gray-100  hover:bg-gray-200 hover:text-gray-600 mt-4 font-bold" , className)}
      {...props}
    >
      {children}
    </button>
  );
}
