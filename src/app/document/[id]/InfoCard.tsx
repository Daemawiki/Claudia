import React from "react";

interface CardProps {
  title: string;
  text?: string;
}

export const InfoCard = ({ title, text }: CardProps) => {
  return (
    <div className="w-full h-40 flex flex-col gap-4 max-w-[180px]">
      <div className="rounded-lg w-fit bg-lime50 py-1 px-3 flex">
        <p className="text-lime500 text-medium16">{title}</p>
      </div>
      <div className="w-full px-1 h-full flex">
        <p className="text-medium18 text-black">{text}</p>
      </div>
    </div>
  );
};
