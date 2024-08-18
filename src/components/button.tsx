import React from "react";

interface ButtonProps {
  text: string;
  style?: "primary" | "primary2" | "white";
  onClick?: () => void;
}

export const Button = ({ text, onClick, style = "primary" }: ButtonProps) => {
  const buttonStyle = {
    primary: "text-lime500 bg-white hover:bg-gray50",
    primary2: "text-white bg-lime500 hover:bg-lime600",
    white: "bg-white text-gray800 hover:bg-gray100",
  };
  return (
    <button
      onClick={onClick}
      className={`transition-all text-semibold16 flex px-3 py-2 rounded-md ${buttonStyle[style]}`}
    >
      {text}
    </button>
  );
};
