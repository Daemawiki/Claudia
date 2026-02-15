import React from "react";
import Image from "next/image";
import { InfoCard } from "./InfoCard";

export const Profile = () => {
  const infoArr = [
    { title: "학년", text: "3학년" },
    { title: "전공", text: "백엔드" },
    { title: "생년월일", text: "10 · 1-1" },
    { title: "MBTI", text: "INTP" },
    { title: "성별", text: "대장 갓이" },
    { title: "대마입학", text: "2007 / 11 / 03" },
  ];

  return (
    <div className="w-full flex flex-col gap-8 border-b border-gray200 px-6 py-8 sm:px-4 lg:px-12">
      {/* Profile Section */}
      <div className="w-full flex items-start gap-6">
        <div className="w-40 h-40 rounded-full border border-gray200 bg-gray100 overflow-hidden flex-shrink-0">
          <div className="w-full h-full flex items-center justify-center text-gray400 text-medium16">
            Profile
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="px-4 py-2 bg-lime50 rounded-lg w-fit">
            <p className="text-lime500 text-semibold14">2113 이태영</p>
          </div>
          <p className="text-gray600 text-medium18">
            김승윤이 사랑한 김어진 박지민 이태영 최고의 인재 팀원 중 한
            명입니다.
          </p>
        </div>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-6 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {infoArr.map(({ title, text }, index) => (
          <InfoCard title={title} text={text} key={index} />
        ))}
      </div>
    </div>
  );
};
