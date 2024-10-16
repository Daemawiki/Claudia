import React from "react";

interface ListProps {
  listTitle?: boolean;
  title?: string;
  group?: string;
  changeUserName?: string;
  changeTime?: string;
}

export const List = ({
  listTitle,
  title,
  group,
  changeUserName,
  changeTime,
}: ListProps) => {
  return (
    <div
      className={`w-full gap-2 flex items-center p-5 ${listTitle ? "bg-gray50" : "bg-white border-b border-b-gray100"}`}
    >
      <p
        className={`w-full cursor-pointer ${listTitle ? "text-medium18 text-gray700" : "text-medium16"}`}
      >
        {title}
      </p>
      <div className={`w-full flex items-center gap-2`}>
        <p
          className={`w-full ${listTitle ? "text-medium18 text-gray700" : "text-medium16 text-gray500"}`}
        >
          {group}
        </p>
        <p
          className={`w-full ${listTitle ? "text-medium18 text-gray700" : "text-medium16"}`}
        >
          {changeUserName}
        </p>
        <p
          className={`w-full ${listTitle ? "text-medium18 text-gray700" : "text-medium16 text-gray500"}`}
        >
          {changeTime}
        </p>
      </div>
    </div>
  );
};
