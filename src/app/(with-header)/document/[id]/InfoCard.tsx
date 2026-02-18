import React from "react";

interface CardProps {
  title: string;
  text?: string;
}

function InfoCard({ title, text }: CardProps) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-gray50 rounded-lg">
      <span className="text-lime500 text-semibold14">{title}</span>
      <span className="text-black text-medium20 whitespace-pre-line">
        {text}
      </span>
    </div>
  );
}

InfoCard.defaultProps = {
  text: "",
};

export { InfoCard };
export default InfoCard;
