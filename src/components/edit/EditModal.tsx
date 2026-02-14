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
import { Button } from "@/components";
import React from "react";

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
        <div className="flex w-full items-center justify-between border-b border-gray200 px-6 py-3">
          <div className="flex items-center w-full">
            <Close className="text-gray600 hover:cursor-pointer" />
          </div>
          <div className="flex justify-center items-center gap-2">
            {icons.map(([i, j], index) => (
              <div
                key={`toolbar-${index}-${j ?? "empty"}`}
                className="group relative flex items-center justify-center p-1 text-gray500 hover:cursor-pointer hover:text-lime500"
              >
                {i}
                <div className="absolute rounded-[4px] bg-black bg-opacity-60 px-2 py-1 top-10 text-sm font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100">
                  {j}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-end">
            <Button
              text="저장"
              style="primary2"
              className="h-fit gap-2 px-4 py-1.5"
            >
              <Document size={20} className="text-white"></Document>
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 px-12 pt-6 pb-12">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-[32px] text-lime500">1</p>
            <input
              className="w-full text-[32px] font-medium placeholder:text-gray300"
              placeholder="제목"
            ></input>
          </div>
          <div className="h-px w-full bg-gray100" />
          <div className="w-full min-h-[340px] flex">
            <textarea
              className="flex h-full w-full resize-none break-words text-lg placeholder:text-gray300"
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
