import React from "react";
import { Arrow } from "@/assets";

export const Pagination = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="w-full flex justify-center gap-7 px-6">
      <button
        type="button"
        aria-label="이전 페이지"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg hover:bg-gray100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime300 focus-visible:ring-offset-2"
      >
        <Arrow className="text-gray700" />
      </button>
      <div className="flex items-center">
        {arr.map(item => (
          <button
            key={item}
            type="button"
            aria-label={`${item} 페이지`}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg hover:bg-lime50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime300 focus-visible:ring-offset-2"
          >
            {item}
          </button>
        ))}
      </div>
      <button
        type="button"
        aria-label="다음 페이지"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg hover:bg-gray100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime300 focus-visible:ring-offset-2"
      >
        <Arrow direction="right" className="text-gray700" />
      </button>
    </div>
  );
};
