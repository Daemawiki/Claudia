"use client";
import React from "react";
import { Arrow } from "../assets";
import { Button, RegisterInput } from "@/components";
import { useRouter } from "next/navigation";
import { MemberCard } from "./MemberCard";

export default function Team() {
  const member = [
    {
      name: "김어진",
      img: "https://public-content.pro.arooo.co.kr/community/post/666b919b3b848300126da30e_23d087ab-ec3b-4f74-9a63-b8a0ec737dfb.jpeg",
      github: "https://github.com/kimeojin35",
      major: "Frontend · Design",
    },
    { name: "김승원", img: "", github: "", major: "Backend" },
    { name: "박지민", img: "", github: "", major: "Frontend" },
    { name: "이태영", img: "", github: "", major: "Backend" },
  ];
  const router = useRouter();
  return (
    <div className="w-full flex justify-center px-6">
      <div className="w-full max-w-[1200px] flex flex-col pt-16">
        <div className="w-full px-12 py-24 gap-6 flex flex-col">
          <p className="text-bold40">
            대마위키를 만든
            <br />
            사람들을 소개합니다
          </p>
          <p className="text-medium20 text-gray500">
            팀 DM은 대덕소프트웨어마이스터고등학교 학생들을 위한 <br />
            위키 서비스, 대마위키를 기획하였습니다.
          </p>
        </div>
        <div className="w-full px-12 py-24 gap-12 flex flex-col">
          <div className="flex flex-col gap-6">
            <p className="text-lime500 text-semibold18">팀 DM 멤버 소개</p>
            <p className="text-bold40">저희를 소개합니다</p>
            <p className="text-medium20 text-gray500">
              하도 이상한 일이 많이 일어나는 대마고, 부마위키를 보고
              <br />
              우리도 이런 위키를 만들어서 박제해버리면 어떨까? 하는 생각을 가진
              네명이 모여 만들었습니다.
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-2">
            {member.map(({ name, img }, index) => (
              <MemberCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
