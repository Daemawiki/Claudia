"use client";

import { Sidebar } from "@/components";
import { User, Calendar } from "@/assets";
import { useState } from "react";
import { Title } from "../Title";
import EditHistory from "./EditHistory";

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
    <div className="flex justify-center pt-16 sm:pt-10">
      <Sidebar fixed />
      <div className="flex flex-grow max-w-screen-xl flex-col">
        <Title />
        <div className="flex flex-col gap-20 px-6 py-6 sm:px-4 sm:gap-10 lg:px-12">
          <div className="flex gap-20 sm:flex-col sm:gap-8">
            <div className="flex flex-col gap-5">
              <span className="text-medium20">문서 정보</span>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <div className="w-[100px] text-medium18 sm:w-auto">
                    생성자
                  </div>
                  <div className="flex px-3 py-2 gap-2 border-[1px] border-gray200 rounded-lg">
                    <User className="text-gray500" />
                    <span>이태영</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <div className="w-[100px] text-medium18 sm:w-auto">
                    문서 생성일
                  </div>
                  <div className="flex px-3 py-2 gap-2 border-[1px] border-gray200 rounded-lg">
                    <Calendar className="text-gray500" />
                    <span className="whitespace-nowrap">2024.09.12 10:39</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <div className="w-[100px] text-medium18 sm:w-auto">
                    최근 수정일
                  </div>
                  <div className="flex px-3 py-2 gap-2 border-[1px] border-gray200 rounded-lg">
                    <Calendar className="text-gray500" />
                    <span className="whitespace-nowrap">2024.08.03 23:20</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 sm:flex-col sm:items-start sm:gap-2">
                  <div className="w-[100px] text-medium18 sm:w-auto">분류</div>
                  <div className="flex px-3 py-[6px] gap-[10px] rounded-full bg-lime100 items-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-lime400" />
                    <span className="whitespace-nowrap">학생</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 flex-grow">
              <span className="text-medium20">기여자</span>
              <div className="flex w-full flex-shrink-0 flex-wrap gap-4 border-[1px] border-gray200 rounded-xl p-4 sm:gap-3">
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
            <div className="py-4 flex flex-col border-[1px] border-gray200 rounded-xl overflow-x-auto">
              <div className="px-4">
                <div className="bg-gray100 p-3 flex text-gray500 rounded-md h-10 items-center min-w-[540px] sm:min-w-[480px]">
                  <div className="flex-grow">목차</div>
                  <div className="flex-grow max-w-[240px]">이름</div>
                  <div className="flex-grow max-w-[240px]">날짜</div>
                  <div className="w-6" />
                </div>
              </div>
              {MockData.map(
                ({ index, title, editor, editDate, editHistory }, key) => (
                  <EditHistory
                    key={`${editDate}-${title}`}
                    index={index}
                    title={title}
                    editor={editor}
                    editDate={editDate}
                    editHistory={editHistory}
                    isOpen={openHistory === key}
                    handleOpen={() => handleOpen(key)}
                    isFirst={key === 0}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-screen-xl" />
    </div>
  );
}
