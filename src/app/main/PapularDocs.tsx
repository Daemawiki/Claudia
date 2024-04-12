import React from "react";
import { Quotes, Show, Slash } from "../assets";

interface PropsType {
  title?: string;
  details?: string;
  type?: string[];
  views?: number;
}

function PapularDocs({ title, details, type = [], views = 0 }: PropsType) {
  let hot = false;
  if (views >= 100) {
    hot = true;
  }
  return (
    <div className="flex cursor-pointer flex-col w-full p-6 gap-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
      <div className="flex w-full justify-between">
        <div className="rounded-lg bg-gray-100 w-[60px] h-[60px] flex justify-center items-center">
          <Quotes size={36} className="text-gray-400" />
        </div>
        <div
          className={`flex h-fit px-2.5 py-1 rounded-md text-sm font-bold text-white ${hot ? "bg-lime-400" : ""}`}
        >
          HOT
        </div>
      </div>
      <div className="flex w-full gap-3 flex-col h-full">
        <p className="text-gray-700 text-2xl font-bold">{title}</p>
        <p className="text-gray-400 text-lg font-medium">{details}</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex px-2 py-0.5 rounded-[4px] text-gray-500 text-base font-semibold bg-white hover:bg-gray-100">
            {type[0]}
          </div>
          <Slash className="text-gray-300" />
          <div className="flex px-2 py-0.5 rounded-[4px] text-lime-500 text-base font-semibold bg-gray-50 hover:bg-gray-100">
            {type[1]}
          </div>
        </div>
        <div className="flex gap-1.5">
          <Show size={20} className="text-gray-400" />
          <p className="font-semibold text-sm text-gray-400">{views}</p>
        </div>
      </div>
    </div>
  );
}

export default PapularDocs;
