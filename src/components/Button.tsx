import React, { useEffect } from "react";

interface ButtonProps {
  text?: string;
  style?: "primary" | "primary2" | "white";
  state?: "enabled" | "disabled";
  onClick?: () => void;
  big?: boolean;
  children?: Readonly<React.ReactNode>;
}

export const Button = ({
  text,
  onClick,
  style = "primary",
  state = "enabled",
  big,
  children,
}: ButtonProps) => {
  const buttonStyle = {
    primary: { enabled: "text-lime500 bg-white hover:bg-gray50", disabled: "" },
    primary2: {
      enabled: "text-white bg-lime500 hover:bg-lime600",
      disabled: "",
    },
    white: { enabled: "", disabled: "" },
  };
  return (
    <>
      <button
        onClick={onClick}
        className={`transition-all justify-center items-center gap-1 flex  ${big ? "rounded-lg p-4 text-semibold18" : "px-3 py-2 rounded-md text-semibold16"} ${buttonStyle[style][state]}`}
      >
        {text}
        {children}
      </button>
    </>
  );
};
