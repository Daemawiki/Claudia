"use client";

import { Sidebar } from "@/components";
import { Title } from "../Title";
import { User, Calendar } from "@/app/assets";
import EditHistory from "./EditHistory";
import { useState } from "react";

interface MockDataType {
  index: string;
  title: string;
  editor: string;
  editDate: string;
  editHistory: { value: string; removed?: true; added?: true }[];
}

export default function UserInfo() {
  const MockData: MockDataType[] = [
    {
      index: "5.1",
      title: "햄스터라는 사실",
      editor: "김어진",
      editDate: "2024.04.16 12:30",
      editHistory: [
        {
          value: "이건 사실이 아닙니다. 명백한 구라입니다",
          removed: true,
        },
        {
          value: "맞습니다. 그는 햄스터입니다",
          added: true,
        },
      ],
    },
    {
      index: "5.1",
      title: "햄스터라는 사실",
      editor: "김어진",
      editDate: "2024.04.15 08:48",
      editHistory: [
        {
          value: "이건 사실이 아닙니다. 명백한 구라입니다",
          added: true,
        },
      ],
    },
    {
      index: "5.1",
      title: "햄스터라는 사실",
      editor: "김어진",
      editDate: "2024.04.15 08:20",
      editHistory: [
        {
          value: "사실 이태영은 햄스터입니다.",
          added: true,
        },
        {
          value: "그는 귀여운 인간입니다.",
          removed: true,
        },
      ],
    },
  ];

  const [openHistory, setOpenHistory] = useState<number | null>(null);

  const handleOpen = (number: number) => {
    setOpenHistory(prev => (prev === number ? null : number));
  };

  return (
    <div className="flex justify-center pt-16">
      <Sidebar fixed />
      <div className="flex flex-col max-w-[1200px] flex-grow">
        <Title />
        <div className="flex flex-col py-6 px-12 gap-20">
          <div className="flex gap-20">
            <div className="flex flex-col gap-5">
              <span className="text-medium20">문서 정보</span>
              <div className="flex flex-col gap-4">
                <div className="flex gap-5 items-center">
                  <div className="w-[100px] text-medium18">생성자</div>
                  <div className="flex px-3 py-2 gap-2 border-[1px] border-gray200 rounded-lg">
                    <User className="text-gray500" />
                    <span>이태영</span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="w-[100px] text-medium18">문서 생성일</div>
                  <div className="flex px-3 py-2 gap-2 border-[1px] border-gray200 rounded-lg">
                    <Calendar className="text-gray500" />
                    <span className="whitespace-nowrap">2024.09.12 10:39</span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="w-[100px] text-medium18">최근 수정일</div>
                  <div className="flex px-3 py-2 gap-2 border-[1px] border-gray200 rounded-lg">
                    <Calendar className="text-gray500" />
                    <span className="whitespace-nowrap">2024.08.03 23:20</span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="w-[100px] text-medium18">분류</div>
                  <div className="flex px-3 py-[6px] gap-[10px] rounded-full bg-lime100 items-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-lime400"></div>
                    <span className="whitespace-nowrap">학생</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 flex-grow">
              <span className="text-medium20">기여자</span>
              <div className="flex gap-4 p-4 border-[1px] border-gray200 rounded-xl flex-wrap flex-shrink-0 w-full">
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
                <span>박지민</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-medium20">문서 수정 내역</span>
            <div className="py-4 flex flex-col border-[1px] border-gray200">
              <div className="px-4">
                <div className="bg-gray100 p-3 flex text-gray500 rounded-md h-10 items-center">
                  <div className="flex-grow">목차</div>
                  <div className="flex-grow max-w-[240px]">이름</div>
                  <div className="flex-grow max-w-[240px]">날짜</div>
                  <div className="w-6"></div>
                </div>
              </div>
              {MockData.map(
                ({ index, title, editor, editDate, editHistory }, key) => (
                  <EditHistory
                    key={key}
                    index={index}
                    title={title}
                    editor={editor}
                    editDate={editDate}
                    editHistory={editHistory}
                    isOpen={openHistory === key}
                    handleOpen={() => handleOpen(key)}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-[1200px]"></section>
    </div>
  );
}
