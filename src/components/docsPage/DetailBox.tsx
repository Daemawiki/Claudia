"use client";
import React, { useState } from "react";
import { Arrow_Down } from "@/app/assets";

interface PropsType {
  index: string;
  title?: string;
  detail?: string;
}

const DetailBox = ({ index, title = "", detail = "" }: PropsType) => {
  const [visibleDetail, setVisibleDetail] = useState(true);

  const handleVisible = () => {
    setVisibleDetail(!visibleDetail);
  };

  return (
    <div
      className={`${visibleDetail ? "" : "opacity-50"} flex flex-col w-full gap-2.5`}
    >
      <div className="w-full flex items-center">
        <div className="flex items-end gap-3">
          <Arrow_Down
            onClick={handleVisible}
            size={40}
            className={`${visibleDetail ? "" : "-rotate-90"} transition-all hover:-rotate-90 duration-200 text-gray-500 rounded-lg hover:bg-gray-100`}
          />
          <div className="flex gap-3 items-center">
            <p
              className={`${index.split(".").length == 1 ? "text-4xl" : index.split(".").length == 2 ? "text-[28px]" : " text-2xl"} font-bold text-lime-500`}
            >
              {index}
            </p>
            <p
              className={`${index.split(".").length == 1 ? "text-4xl" : index.split(".").length == 2 ? "text-[28px]" : " text-2xl"} font-medium text-gray-900`}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      {visibleDetail && (
        <div className="px-5 py-[10px] flex w-full text-gray-900 text-lg">
          {detail}
        </div>
      )}
    </div>
  );
};

export default DetailBox;
