import linkChecker from "@/utils/function/linkCheck";
import React from "react";
import LinkBlock from "./linkBlock";

interface TableItemProps {
  name: string;
  value: string;
}

const TableItem = ({ name, value }: TableItemProps) => {
  const lines = value.split("\n");
  const formattedValue = lines.map((line, index) => {
    const linkContent = linkChecker(line);
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
    return <div key={index}>{line}</div>;
  });

  return (
    <div className="flex flex-col min-w-[150px] min-h-[100px] gap-[8px]">
      <span className="font-medium text-2xl text-[#93DF3F]">{name}</span>
      <span className="font-medium text-base flex gap-[8px] flex-col">
        {formattedValue}
      </span>
    </div>
  );
};

export default TableItem;
