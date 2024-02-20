"use client";
import Image from "next/image";
import { useState } from "react";
import DropdownItem from "./dropdownItem";

interface DropdownProps {
  title: string;
  content: Array<string>;
  width: number;
}

const Dropdown = ({ title, content, width }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState("");
  const widthStyle = { width: `${width}px` };
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
    setSelect(e.currentTarget.innerText);
  };
  const renderContent = content.map((item, key) => {
    return <DropdownItem item={item} key={key} clickHandler={clickHandler} />;
  });

  return (
    <div className="flex flex-col gap-[10px]">
      <span className="text-base font-bold w-fit">{title}</span>
      <div
        className="border border-solid border-black flex rounded-2xl flex-col"
        style={widthStyle}
      >
        <div
          className="flex justify-between w-full p-[10px]"
          onClick={clickHandler}
        >
          <div>{select}</div>
          <Image src={"/images/caretdown.svg"} alt="" width={24} height={24} />
        </div>
        {isOpen && renderContent}
      </div>
    </div>
  );
};

export default Dropdown;
