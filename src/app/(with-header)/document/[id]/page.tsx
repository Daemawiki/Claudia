"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components";
import Bottom from "./Bottom";
import Profile from "./Profile";
import Title from "./Title";
import Toggle from "./Toggle";

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
      className={`${openSidebar ? "pl-[300px]" : "pl-6"} transition-all pt-20 pb-20 pr-6 bg-gray100 justify-center flex w-full min-h-screen`}
    >
      <div className="flex w-full max-w-screen-xl flex-col overflow-hidden rounded-2xl border border-gray200 bg-white">
        <Title />
        <Profile />
        <div className="w-full px-12 py-6">
          {contentsListArr.map(({ num, title, details }) => (
            <Toggle key={num} num={num} title={title} details={details} />
          ))}
        </div>
        <Bottom />
      </div>
      <Sidebar titleList={contentsListArr} setOpenSidebar={setOpenSidebar} />
    </div>
  );
}

export default Document;
