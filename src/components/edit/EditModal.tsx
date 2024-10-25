import {
  Close,
  Document,
  Text,
  Text_Bold,
  Text_Italic,
  Text_Link,
  Text_Strikethrough,
  Text_Underline,
} from "@/assets";
import React, { useState } from "react";

const icons = [
  [<Text size={28} />, "Text"],
  [<Text_Bold size={28} />, "볼"],
  [<Text_Italic size={28} />, "이탤릭"],
  [<Text_Underline size={28} />, "밑줄"],
  [<Text_Strikethrough size={28} />, "취소선"],
  [<Text_Link size={28} />, "링크"],
  [],
];

function EditModal() {
  return (
    <div className="w-full absolute h-full bg-black bg-opacity-20 flex pt-[120px] px-8 justify-center z-50">
      <div className="flex w-[1000px] h-[560px] rounded-2xl flex-col bg-white">
        <div className="flex w-full items-center px-6 py-3 justify-between border-b border-gray-200">
          <div className="flex items-center w-full">
            <Close className="hover:cursor-pointer text-gray-600" />
          </div>
          <div className="flex justify-center items-center gap-2">
            {icons.map(([i, j]) => (
              <div className="flex p-1 justify-center items-center text-gray-500 hover:text-lime-500 hover:cursor-pointer relative group">
                {i}
                <div className="absolute rounded-[4px] bg-black bg-opacity-60 px-2 py-1 top-10 text-sm font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100">
                  {j}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-end">
            <button className="rounded-md gap-2 px-4 py-1.5 flex bg-lime-500 h-fit items-center hover:bg-lime-600">
              <p className="text-white text-md font-semibold">저장</p>
              <Document size={20} className="text-white"></Document>
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 px-12 pt-6 pb-12">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-[32px] text-lime-500">1</p>
            <input
              className="font-medium text-[32px] placeholder:text-gray-300 w-full"
              placeholder="제목"
            ></input>
          </div>
          <div className="w-full bg-gray-100 h-[1px]" />
          <div className="w-full min-h-[340px] flex">
            <textarea
              className="placeholder:text-gray-300 text-lg h-full w-full flex break-words resize-none"
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
