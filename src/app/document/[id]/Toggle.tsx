"use client";
import { Arrow } from "@/app/assets";
import React, { useState } from "react";

interface ContentsProps {
  num: string;
  title: string;
  details?: string;
}

export const Toggle = ({ num, title, details }: ContentsProps) => {
  const [visible, setVisible] = useState<boolean>(true);
  const dotNum = num.split(".").length;
  return (
    <div className="w-full flex flex-col gap-2.5">
      <div className="w-full flex justify-between items-end pb-2.5 border-b border-gray200">
        <div
          onClick={() => setVisible(!visible)}
          className={`flex gap-3 transition-all items-end cursor-pointer ${visible ? "opacity-100" : "opacity-50"}`}
        >
          <Arrow
            direction={visible ? "down" : "right"}
            size={40}
            className="text-gray500 transition-all"
          />
          <p
            className={`${dotNum == 3 ? "text-semibold24" : dotNum == 2 ? "text-semibold28" : "text-semibold36"} text-black`}
          >
            <span className={`text-lime500`}>{num}.</span> {title}
          </p>
        </div>
        <div />
      </div>
      {visible && (
        <div className="flex w-full flex-col px-5 py-2.5">
          <p className="text-medium18 text-black">{details}</p>
        </div>
      )}
    </div>
  );
};
