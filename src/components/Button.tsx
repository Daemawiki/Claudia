import React from "react";

interface ButtonProps {
  text?: string;
  style?: "primary" | "primary2" | "white" | "neutral" | "dark";
  state?: "enabled" | "disabled";
  onClick?: () => void;
  big?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children?: Readonly<React.ReactNode>;
}

export const Button = ({
  text,
  onClick,
  style = "primary",
  state = "enabled",
  big,
  type = "button",
  disabled = false,
  className = "",
  children,
}: ButtonProps) => {
  const isDisabled = state === "disabled" || disabled;

  const buttonStyle = {
    primary: {
      enabled: "bg-white text-lime500 hover:bg-gray50",
      disabled: "bg-white text-gray400",
    },
    primary2: {
      enabled: "bg-lime500 text-white hover:bg-lime600",
      disabled: "bg-lime300 text-white",
    },
    white: {
      enabled: "bg-white text-gray600 hover:bg-gray50",
      disabled: "bg-white text-gray400",
    },
    neutral: {
      enabled: "bg-gray100 text-gray700 hover:bg-gray200",
      disabled: "bg-gray100 text-gray400",
    },
    dark: {
      enabled: "bg-gray900 text-white hover:bg-black",
      disabled: "bg-gray400 text-white",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap transition-all ${
        big
          ? "rounded-lg p-4 text-semibold18"
          : "rounded-md px-3 py-2 text-semibold16"
      } ${buttonStyle[style][isDisabled ? "disabled" : "enabled"]} ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      {text}
      {children}
    </button>
  );
};
