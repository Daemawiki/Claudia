"use client";
import linkChecker from "@/utils/function/linkCheck";
import React, { CSSProperties, useEffect, useState } from "react";
import LinkBlock from "./linkBlock";
import formatText from "@/utils/function/formatText";
import { Info } from "@/constant/documentType";

interface TableItemProps {
  name: string;
  value: string;
  del?: boolean;
  setValue?: React.Dispatch<React.SetStateAction<Info[] | undefined>>;
  index: number;
}

const TableItem = ({ name, value, del, setValue, index }: TableItemProps) => {
  const [containerStyle, setContainerStyle] = useState<CSSProperties>({
    display: "flex",
  });
  const lines = value.split("</p><p>");
  const formattedValue = lines.map((line, index) => {
    const delpTag = line.replace("<p>", "").replace("</p>", "");
    const linkContent = linkChecker(delpTag);
    if (linkContent.githubMatches.href)
      return (
        <LinkBlock
          key={index}
          mode="github"
          text={linkContent.githubMatches.text}
          href={linkContent.githubMatches.href}
        />
      );
    else if (linkContent.instagramMatches.href)
      return (
        <LinkBlock
          key={index}
          mode="instagram"
          text={linkContent.instagramMatches.text}
          href={linkContent.instagramMatches.href}
        />
      );
    return (
      <div
        key={index}
        dangerouslySetInnerHTML={{ __html: formatText(delpTag) }}
      ></div>
    );
  });

  const delClickHandler = () => {
    setContainerStyle({
      display: "none",
    });
    setValue &&
      setValue(prev => {
        if (prev) {
          return prev?.filter((_, i) => {
            return i !== index;
          });
        }
      });
  };

  return (
    <div
      className="flex flex-col min-w-[150px] min-h-[100px] gap-[8px] relative"
      style={containerStyle}
    >
      <div className="font-medium text-2xl text-[#93DF3F] flex justify-between w-full">
        <span>{name}</span>
        {del && (
          <button
            className="w-6 h-6 text-center font-bold"
            onClick={delClickHandler}
          >
            <div className="w-[14px] border-none h-[2px] bg-red-500 rounded-[5px]"></div>
          </button>
        )}
      </div>
      <span className="font-medium text-base flex gap-[8px] flex-col">
        {formattedValue}
      </span>
    </div>
  );
};

export default TableItem;
