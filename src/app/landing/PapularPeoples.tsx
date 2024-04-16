import React from "react";

interface PropsType {
  name: string;
  type?: string;
  details?: string;
  images?: string;
}

function PapularPeoples({ name, type, details, images }: PropsType) {
  return (
    <div className="mb-4 z-0 break-inside-avoid-column rounded-2xl flex flex-col gap-5 px-7 py-6 border border-gray-200 bg-white hover:border-lime-300 hover:bg-lime-50 transition-all duration-100 ${className}">
      <div className="w-full flex justify-between">
        <div className="flex justify-between gap-4 items-center">
          <div
            className={`rounded-full w-10 h-10 ${images ? "" : "bg-gray-300"}`}
          />

          <p className="font-semibold text-gray-700 text-xl">{name}</p>
        </div>

        <p className="font-semibold text-base text-lime-500 whitespace-nowrap">
          {type}
        </p>
      </div>
      <p className="text-base text-gray-400 font-medium">{details}</p>
    </div>
  );
}

export default PapularPeoples;
