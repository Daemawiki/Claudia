import React from "react";
import { Arrow } from "@/assets";

export const Pagination = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="w-full flex justify-center gap-7 px-6">
      <div className="flex cursor-pointer p-1.5 rounded-lg hover:bg-gray100">
        <Arrow className="text-gray700" />
      </div>
      <div className="flex items-center">
        {arr.map((item, index) => (
          <div className=" cursor-pointer rounded-lg h-9 w-9 flex items-center justify-center hover:bg-lime50">
            {item}
          </div>
        ))}
      </div>
      <div className={`flex cursor-pointer p-1.5 rounded-lg hover:bg-gray100`}>
        <Arrow direction="right" className="text-gray700" />
      </div>
    </div>
  );
};
