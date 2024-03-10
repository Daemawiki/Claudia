"use client";

import Image from "next/image";

interface LinkBlockProps {
  mode: "instagram" | "github";
  text: string | null;
  href: string;
}

const LinkBlock = ({ mode, text, href }: LinkBlockProps) => {
  const ClickHandler = () => {
    window.open(href, "blank");
  };
  return (
    <button onClick={ClickHandler} className="flex gap-[6px]">
      <Image src={`/images/${mode}.svg`} alt="" width={24} height={24} />
      <div className="flex px-1 gap-1 rounded-[4px] bg-[#ECECEC]">
        <span className="text-[#606060]">{text}</span>
        <Image src={"/images/link.svg"} alt="" width={24} height={24} />
      </div>
    </button>
  );
};

export default LinkBlock;
