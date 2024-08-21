import { Show } from "@/app/assets";
import React from "react";

export const Title = () => {
  return (
    <div className="w-full flex justify-between items-end py-[60px] px-12 border-b border-gray100">
      <div className="flex flex-col gap-1">
        <p className="text-semibold20 text-lime500">학생</p>
        <p className="text-bold36 text-black">이태영</p>
      </div>
      <div className="flex items-center gap-1.5">
        <Show size={20} className="text-gray400" />
        <p className="text-semibold14 text-gray400">210</p>
      </div>
    </div>
  );
};
