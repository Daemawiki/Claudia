"use client";
import React from "react";
import { Arrow, TeamLogo } from "../assets";
import { Button, RegisterInput } from "@/components";
import { useRouter } from "next/navigation";
import { MemberCard } from "./MemberCard";
import { ValuesCard } from "./ValuesCard";

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
        <div className="w-full px-12 py-24 gap-6 flex justify-between">
          <div className="flex flex-col gap-6">
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
          <TeamLogo size={240} className="animate-fadeIn" />
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
            {member.map(({ name, img, github, major }, index) => (
              <MemberCard name={name} img={img} github={github} major={major} />
            ))}
          </div>
        </div>
        <div className="w-full px-12 py-24 gap-12 flex flex-col">
          <div className="flex flex-col gap-6">
            <p className="text-[18px] font-bold text-lime500">
              우리들의 가치관
            </p>
            <p className="text-bold40 text-gray800">멋지고 예쁜게 최고</p>
            <p className="text-medium20 text-gray500">
              놀랍게도 김스뭔만 <br />
              벨로그에 이상한걸 적고 있습니다.
            </p>
            <div className="grid grid-cols-2 gap-6 w-full">
              <ValuesCard
                index={1}
                title="사용자 편의성을 중시해요"
                details="구성원에게 도덕성을 기대해요. 라운지를 깨끗하게 사용하는 것, 지각하지 않는 것, 법인카드 사용 규정을 잘 지키는 것 등 우리가 서로에게 약속한 모습들을 보여줘요."
              />
              <ValuesCard
                index={1}
                title="사용자 편의성을 중시해요"
                details="구성원에게 도덕성을 기대해요. 라운지를 깨끗하게 사용하는 것, 지각하지 않는 것, 법인카드 사용 규정을 잘 지키는 것 등 우리가 서로에게 약속한 모습들을 보여줘요."
              />
              <ValuesCard
                index={1}
                title="사용자 편의성을 중시해요"
                details="구성원에게 도덕성을 기대해요. 라운지를 깨끗하게 사용하는 것, 지각하지 않는 것, 법인카드 사용 규정을 잘 지키는 것 등 우리가 서로에게 약속한 모습들을 보여줘요."
              />
              <ValuesCard
                index={1}
                title="사용자 편의성을 중시해요"
                details="구성원에게 도덕성을 기대해요. 라운지를 깨끗하게 사용하는 것, 지각하지 않는 것, 법인카드 사용 규정을 잘 지키는 것 등 우리가 서로에게 약속한 모습들을 보여줘요."
              />
            </div>
            <button className="rounded-full bg-gray100 px-4 py-3 flex text-medium16 w-max">
              벨로그 보러가기
            </button>
          </div>
        </div>
        <div className="w-full px-12 py-24 gap-12 flex flex-col">
          <div className="flex flex-col gap-6">
            <p className="text-bold text-[18px] text-lime500">
              활동 및 기술 스택
            </p>
            <p className="text-bold40 text-gray800">저희는 이런 걸 해요</p>
            <p className="text-medium20 text-gray500">
              하도 이상한 일이 많이 일어나는 대마고, 부마위키를 보고
              <br />
              우리도 이런 위키를 만들어서 박제해버리면 어떨까? 하는 생각을 가진
              네명이 모여 만들었습니다.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-semibold24">Frontend</p>
            <ul className="list-disc list-inside flex flex-col gap-3 text-medium18 pl-4">
              <li>더 나은 퍼포먼스 발휘를 위한 최고급・최신형 장비 지원</li>
              <li>씹덕의 영양 보충을 위한 연 150만원 애니시청 지원금 지원</li>
              <li>함께 성장하기 위한 노력을 지원하는 그룹 스터디 식대 제공</li>
            </ul>
          </div>
          <hr className="w-0 border-[1px] border-gray100" />
          <div className="flex flex-col gap-6">
            <p className="text-semibold24">Backend</p>
            <ul className="list-disc list-inside flex flex-col gap-3 text-medium18 pl-4">
              <li>대충 어렵고 쉬운 일</li>
              <li>어쩌고 저쩌고</li>
              <li>API 명세서 작성</li>
            </ul>
          </div>
          <hr className="w-0 border-[1px] border-gray100" />
          <div className="flex flex-col gap-6">
            <p className="text-semibold24">Design</p>
            <ul className="list-disc list-inside flex flex-col gap-3 text-medium18 pl-4">
              <li>대충 어렵고 쉬운 일</li>
              <li>어쩌고 저쩌고</li>
              <li>API 명세서 작성</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-9 py-24 px-12">
          <p className="text-semibold18 text-gray400">밤이 되었습니다</p>
          <p className="text-center font-semibold text-[32px] leading-9">
            대마위키와 함께하실 분은
            <br />
            고개를 들어주세요.
          </p>
          <button className="bg-gray100 rounded-full px-4 py-3">
            대마위키 살펴보기
          </button>
        </div>
      </div>
    </div>
  );
}
