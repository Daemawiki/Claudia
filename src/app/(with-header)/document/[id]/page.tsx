"use client";
import React, { useState } from "react";
import { Sidebar } from "@/components";
import { Title } from "./Title";
import { Profile } from "./Profile";
import { Toggle } from "./Toggle";
import { Bottom } from "./Bottom";

function Document() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const contentsListArr = [
    { num: "1", title: "개요", details: "1학년 4반의 오타쿠 이태영." },
    { num: "2", title: "특징", details: "" },
    { num: "3", title: "논란", details: "" },
    { num: "4", title: "성격", details: "오타쿠 씹덕의 성격을 가졌다." },
    {
      num: "4.1",
      title: "MBTI",
      details: "UGAM : 우울감이다.",
    },
    {
      num: "4.1.1",
      title: "오타쿠",
      details: "이상한 걸 좋아한다.",
    },
    {
      num: "5",
      title: "망언록",
      details:
        "“너무나도 청렴한 사람이라 명언록만 있지, 망언록은 존재하지 않는다.”",
    },
  ];
  return (
    <div
      className={`${openSidebar ? "lg:pl-[320px]" : "lg:pl-6"} pl-4 pr-4 lg:pr-6 transition-all pt-24 pb-20 bg-gray100 justify-center flex w-full min-h-screen`}
    >
      <div className="max-w-[1200px] w-full flex flex-col rounded-2xl bg-white border border-gray200 overflow-hidden">
        <Title />
        <Profile />
        <div className="w-full px-12 py-6">
          {contentsListArr.map(({ num, title, details }, index) => (
            <Toggle key={index} num={num} title={title} details={details} />
          ))}
        </div>
        <Bottom />
      </div>
      <Sidebar titleList={contentsListArr} setOpenSidebar={setOpenSidebar} />
    </div>
  );
}

export default Document;
