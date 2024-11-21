"use client";
import {
  AddPlus,
  Arrow,
  Arrow_Double,
  Close,
  Document,
  Slash,
} from "@/app/assets";
import { Button } from "@/components";
import Editor from "./editor";
import { useState } from "react";

interface IndexT {
  num: string;
  title: string;
}

const Edit = () => {
  const [indexListArr, setIndexListArr] = useState<IndexT[]>([
    { num: "1", title: "개요" },
    { num: "2", title: "특징" },
    { num: "3", title: "논란" },
    { num: "4", title: "성격" },
    { num: "5", title: "여담" },
    { num: "5.1", title: "햄스터라는 사실" },
    { num: "5.2", title: "404 논란" },
    { num: "5.2.1", title: "여러가지 논란이 된 이유" },
  ]);

  const IndexList = () => {
    return (
      <div className="flex flex-col gap-1">
        {indexListArr.map(({ num, title }) => (
          <Index depth={num.split(".").length} index={num} title={title} />
        ))}
      </div>
    );
  };

  const Index = ({
    depth,
    index,
    title,
  }: {
    depth: number;
    index: string;
    title: string;
  }) => {
    return (
      <div
        className={`rounded-lg flex gap-2 items-center hover:bg-lime50 py-2.5 pr-2.5 ${depth == 2 ? "pl-5" : depth == 3 ? "pl-[30px]" : "pl-2.5"}`}
      >
        <span className="text-semibold18 text-lime500">{index}</span>
        <span className="text-medium18 text-gray800">{title}</span>
      </div>
    );
  };

  const EditSideBar = () => (
    <div className="flex flex-col w-full max-w-[280px]">
      <div className="flex justify-between border-b border-b-gray200 p-3">
        <div className="flex items-center">
          <span className="text-gray500 px-2 text-semibold16">학생</span>
          <Slash className="text-gray300" />
          <span className="bg-lime50 text-lime500 text-semibold16 px-2 py-[2px]">
            이태영
          </span>
        </div>
        <div className="border rounded-md border-gray100 p-1 text-gray400">
          <Arrow_Double />
        </div>
      </div>
      <div className="flex flex-col gap-5 px-2 py-4">
        <div className="flex justify-between px-2 w-full">
          <span className="text-semibold16 text-gray600">목차</span>
          <Arrow direction="down" className="text-gray400" />
        </div>
        <IndexList />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full h-[100vh]">
      <div className="flex justify-between px-6 py-3 items-center border-b border-b-gray200">
        <Close className="text-gray600 w-6" />
        <Button style="primary2" text="저장">
          <Document />
        </Button>
      </div>
      <div className="flex flex-grow">
        <EditSideBar />
        <Editor />
      </div>
    </div>
  );
};

export default Edit;
