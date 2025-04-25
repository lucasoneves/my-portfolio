"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
};

const variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
};

const sizeStyles = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
};

export const MainButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        "rounded-xl cursor-pointer font-medium transition-all duration-200 focus:outline-none px-6 py-3 w-full sm:w-auto",
        variantStyles[variant],
        sizeStyles[size],
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
    >
      {isLoading ? "Enviando..." : children}
    </button>
  );
};
