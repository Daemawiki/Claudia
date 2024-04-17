import React from "react";
import Link from "next/link";

interface PropsType {
  title: string;
  isValue?: boolean;
  onClick?: () => void;
}

export const Button = ({ title, isValue = true, onClick }: PropsType) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg w-full h-[52px] flex justify-center items-center ${isValue ? "bg-lime-500" : "bg-gray-300"} text-white text-lg font-bold cursor-pointer ${isValue ? "hover:bg-lime-600" : ""}`}
    >
      {title}
    </div>
  );
};

export const BackButton = ({ title, onClick }: PropsType) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg w-full h-[52px] flex justify-center items-center bg-gray-100 text-gray-600 text-lg font-bold cursor-pointer hover:bg-gray-200`}
    >
      {title}
    </div>
  );
};
