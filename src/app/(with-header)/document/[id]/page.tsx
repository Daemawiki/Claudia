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
    { num: "1", title: "개요", details: "1학년 4반의 오타쿠 이태영" },
    { num: "2", title: "특징", details: "햄스터" },
    { num: "3", title: "논란", details: "너무 많다" },
    { num: "4", title: "성격", details: "오타쿠 씹덕의 성격을 가졌다." },
    { num: "5", title: "여담", details: "있다." },
    { num: "5.1", title: "햄스터라는 사실", details: "부인하지 않고 있다." },
    { num: "5.2", title: "404 논란", details: "이상한 걸 좋아한다." },
    {
      num: "5.2.1",
      title: "여러가지 논란이 된 이유",
      details:
        "“너무나도 청렴한 사람이라 명언록만 있지, 망언록은 존재하지 않는다.”",
    },
    {
      num: "5.2.2",
      title: "여러가지 논란이 된 이유",
      details:
        "“너무나도 청렴한 사람이라 명언록만 있지, 망언록은 존재하지 않는다.”",
    },
    {
      num: "5.2.3",
      title: "여러가지 논란이 된 이유",
      details:
        "“너무나도 청렴한 사람이라 명언록만 있지, 망언록은 존재하지 않는다.”",
    },
    {
      num: "5.3",
      title: "쓸 말 없음",
      details:
        "“너무나도 청렴한 사람이라 명언록만 있지, 망언록은 존재하지 않는다.”",
    },
    {
      num: "6",
      title: "쓸 말 없음",
      details:
        "“너무나도 청렴한 사람이라 명언록만 있지, 망언록은 존재하지 않는다.”",
    },
  ];
  return (
    <div
      className={`${openSidebar ? "pl-[300px]" : "pl-6"} transition-all pt-20 pb-52 pr-6 bg-gray100 justify-center flex w-full`}
    >
      <div
        className={` max-w-[1200px] h-fit w-full flex flex-col rounded-2xl bg-white border border-gray300`}
      >
        <Title />
        <Profile />
        <div className="w-full p-12 gap-12 flex flex-col">
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
