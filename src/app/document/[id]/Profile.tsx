import React from "react";
import Image from "next/image";
import Frame24 from "../../../../public/images/Frame 24.png";
import { Github, Instagram } from "@/app/assets";
import { InfoCard } from "./InfoCard";

export const Profile = () => {
  const infoArr = [
    { title: "별명", text: "씹덕" },
    { title: "전공", text: "오타쿠" },
    { title: "기수", text: "10 - 1기" },
    { title: "특징", text: "오타쿠\n씹덕" },
    { title: "지역", text: "대전 갈마" },
    { title: "생년월일", text: "2007 / 11 / 03" },
  ];
  return (
    <div className="w-full flex flex-col gap-[60px] px-12 py-6">
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-12 flex-wrap">
          <Image
            alt=""
            src={Frame24}
            className="rounded-full h-40 w-40 border border-gray200 bg-gray800 bg-cover"
          />
          <div className="flex flex-col gap-4">
            <div className="flex px-2 py-1 rounded-lg bg-lime50 w-fit">
              <p className="text-medium16 text-lime500">백엔드</p>
            </div>
            <p className="text-bold32 text-black">2113 이태영</p>
            <p className="text-medium16 text-gray400">
              뭔가 많이 붉은 햄스터
              <br />좀 이상하다
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Github size={22} className="text-gray400" />
            <p className="text-gray400 text-medium14">Daybreak312</p>
          </div>
          <div className="flex gap-2 items-center">
            <Instagram size={22} className="text-gray400" />
            <p className="text-gray400 text-medium14">tae._.young_07</p>
          </div>
        </div>
      </div>
      <div className="w-full flex-wrap flex px-2">
        {infoArr.map(({ title, text }, index) => (
          <InfoCard title={title} text={text} key={index} />
        ))}
      </div>
    </div>
  );
};
