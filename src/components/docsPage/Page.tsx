"use client";
import Image from "next/image";
import React, { useState } from "react";
import Frame from "../../../public/images/Frame 24.png";
import DetailBox from "./DetailBox";

function Page() {
  const list = [
    ["별명", "햄스터"],
    ["전공", "배젠드데브오브스"],
    ["특징", "오타쿠\n씹덕"],
    ["신체", "10mm"],
    ["생년월일", "2007 / 12 / 34"],
    ["URL", "LeeHamter"],
  ];
  const contents = [
    {
      index: "1",
      title: "개요",
      detail: "개요를 변경합니다.",
    },
    {
      index: "1.1",
      title: "빈칸",
      detail: "빈 내용",
    },
    {
      index: "2",
      title: "논란",
      detail: "빈 내용",
    },
  ];
  return (
    <div className="flex w-full max-w-[1200px] flex-col bg-white border-l-2 border-gray-100">
      <div className="w-full flex flex-col px-12 pt-[60px] pb-8 gap-9">
        <div className="w-full flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <p className=" font-semibold text-xl text-lime-500">학생</p>
            <p className="font-bold text-4xl">이태영</p>
          </div>
          <p className="font-medium text-sm text-gray-400">
            최근 수정 : 2023.11.12 11:40
          </p>
        </div>
        <div className=" h-[1px] w-full rounded-full bg-gray-200" />
      </div>
      <div className="flex w-full px-12 py-6 gap-12">
        <div className="overflow-hidden flex flex-col rounded-xl items-center max-w-[280px] max-h-[340px] h-full">
          <Image src={Frame} alt="" />
          <div className=" rounded-b-xl bg-lime-100 flex flex-col w-full px-3 pt-2 pb-3 items-center justify-center">
            <p className="text-base text-lime-600 font-medium">
              새까만 Hamster
            </p>
            <p className=" text-2xl font-bold text-gray-900">이태영</p>
          </div>
        </div>
        <div className="flex-wrap flex w-full h-full">
          {list.map(([a, b], j) => (
            <div className="h-[170px] max-w-[210px] min-w-[100px] w-full flex flex-col gap-3">
              <div className="flex px-3 py-1 text-sm font-medium text-lime-600 bg-lime-50 w-fit rounded-lg">
                {a}
              </div>
              <div className="flex w-full h-full p-1 text-lg font-medium">
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col py-12 px-12 gap-12">
        {contents.map(({ title, index, detail }) => (
          <DetailBox title={title} index={index} detail={detail} />
        ))}
      </div>
    </div>
  );
}

export default Page;
