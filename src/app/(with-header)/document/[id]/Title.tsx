import { Show } from "@/assets";
import React from "react";

interface TitleProps {
  group?: string;
  title?: string;
  details?: string;
  noPadding?: boolean;
  noShow?: boolean;
}

export const Title = ({
  title = "이태영",
  group = "학생",
  details = "210",
  noPadding,
  noShow,
}: TitleProps) => {
  return (
    <div
      className={`w-full flex justify-between items-end py-[60px] ${noPadding ? "" : "px-12"} border-b border-gray100`}
    >
      <div className="flex flex-col gap-1">
        <p className="text-semibold20 text-lime500">{group}</p>
        <p className="text-bold36 text-black">{title}</p>
      </div>
      <div className="flex items-center gap-1.5">
        {!noShow && <Show size={20} className="text-gray400" />}
        <p className="text-semibold14 text-gray400">{details}</p>
      </div>
    </div>
  );
};
