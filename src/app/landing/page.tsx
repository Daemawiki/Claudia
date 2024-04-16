"use client";
import React, { useState } from "react";
// import { Arrow_Left, Arrow_Long_Right, Document } from "../assets";
import PapularDocs from "./PapularDocs";
import PapularPeoples from "./PapularPeoples";
import { popularDocs, popularPeople } from "@/constant/Popular";

const list = ["문서 생성", "문서 수정", "게시판 사용"];
const list2 = [
  {
    title: "문서를 생성하세요.",
    details:
      "분류에 들어가 문서 추가 버튼을 눌러 문서를 생성하세요.\n워드프로세서를 통해 문서를 작성하고 서식을 적용하며,\n코드 또는 마크다운 형식으로 문서를 작성할 수 있습니다.",
  },
  {
    title: "문서를 수정하세요.",
    details:
      "분류에 들어가 문서 추가 버튼을 눌러 문서를 생성하세요.\n워드프로세서를 통해 문서를 작성하고 서식을 적용하며,\n코드 또는 마크다운 형식으로 문서를 작성할 수 있습니다.",
  },
  {
    title: "게시판을 사용하세요.",
    details:
      "분류에 들어가 문서 추가 버튼을 눌러 문서를 생성하세요.\n워드프로세서를 통해 문서를 작성하고 서식을 적용하며,\n코드 또는 마크다운 형식으로 문서를 작성할 수 있습니다.",
  },
];

function Landing() {
  const [click, setClick] = useState<number>(0);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full max-w-[1200px]">
        <div className="flex flex-col w-full gap-[100px] px-12 py-24">
          <div className="flex flex-col gap-[68px] items-center">
            <div className="flex group cursor-pointer rounded-full items-center px-6 py-1.5 gap-3 bg-gray-100">
              <p className="font-semibold text-[16px] text-gray-500">
                내 문서 만들기
              </p>
              {/* <Arrow_Long_Right
                size={18}
                className="text-gray-500 group-hover:translate-x-2 transition-all duration-300"
              /> */}
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center">
                <p className="text-gray-800 font-bold text-[68px] leading-tight">
                  우리의 학교생활 이야기
                </p>
                <p className="text-lime-500 font-bold text-[68px] leading-tight">
                  대마위키에서
                </p>
              </div>

              <p className="font-medium text-[20px] text-gray-500 text-center leading-snug">
                학생들의 정보와 학교에서 일어난 사건을 기록하는 곳,
                <br />
                대마위키에서 함께 정보를 공유하고 학교 생활을 기록해보세요.
                <br />
                나만 몰랐던 우리 학교 이야기.
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="cursor-pointer flex rounded-lg px-5 py-2 border border-lime-500 bg-lime-400 hover:bg-lime-500">
              <p className="text-white font-bold text-[18px]">시작하기</p>
            </div>
            <div className="flex cursor-pointer gap-[6px] px-5 py-2 bg-gray-100 border border-gray-200 rounded-lg items-center hover:bg-gray-200 hover:border-gray-300">
              {/* <Document size={20} className="text-gray-500" /> */}
              <p className="font-semibold text-[18px] text-gray-600">
                랜덤 문서
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-12 py-24 gap-[60px] flex flex-col items-center">
          <div className="flex flex-col gap-6 items-center">
            <p className="font-bold text-[32px] text-black">인기있는 문서들</p>
            <p className="font-medium text-xl text-gray-500 text-center">
              다양한 주제와 깊이 있는 정보로 학생들의 호기심을 자극하는 <br />
              인기있는 문서들이 모여있습니다.
            </p>
          </div>
          <div className="flex w-full gap-6">
            {popularDocs.map(i => (
              <PapularDocs
                title={i.title}
                details={i.details}
                type={i.type}
                views={i.views}
              />
            ))}
          </div>
          <div className="rounded-lg gap-3 bg-white border border-gray-200 px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <p className="font-semibold text-lg text-gray-600">더보기</p>
            {/* <Arrow_Left /> */}
          </div>
        </div>
        <div className="w-full flex flex-col gap-[60px] px-12 py-24 items-center">
          <div className="flex flex-col items-center gap-6">
            <p className="font-bold text-[32px] text-black">인기있는 사람들</p>
            <p className="font-medium text-xl text-gray-500">
              대마고에서는 주로 이상한 사람들이 인기가 많습니다.
            </p>
            <div className="flex gap-2">
              <div className="rounded-md gap-3 px-4 py-1.5 border border-gray-200 bg-gray-100 hover:bg-gray-200 hover:border-gray-300">
                <p className="font-semibold text-base text-gray-600">
                  분야별 사람 보기
                </p>
              </div>
              <div className="rounded-md gap-3 px-4 py-1.5 border border-gray-200 bg-gray-100 hover:bg-gray-200 hover:border-gray-300">
                <p className="font-semibold text-base text-gray-600">선생님</p>
              </div>
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 overflow-hidden relative transition-all">
            <div className="absolute bottom-0 left-0 z-10 w-full h-[220px] bg-gradient-to-t from-white via-transperent"></div>
            {popularPeople.map(i => (
              <PapularPeoples name={i.name} type={i.type} details={i.details} />
            ))}
          </div>
          <div className="rounded-lg gap-3 bg-white border border-gray-200 px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <p className="font-semibold text-lg text-gray-600">더보기</p>
            {/* <Arrow_Left /> */}
          </div>
        </div>
        <div className="w-full flex flex-col gap-[60px] px-12 py-24">
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-lime-500 text-xl">
              첫 사용자를 위한
            </p>
            <p className="font-bold text-4xl">대마위키 사용법</p>
            <p className="font-medium text-xl text-gray-500">
              스트레스를 해소하고 친구를 유명하게 만들어주고 싶나요?
              <br /> 키보드를 잡으세요.
            </p>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex w-full">
              {list.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setClick(index)}
                  className={`flex p-3 ${
                    click === index
                      ? "border-lime-500 text-black"
                      : "border-gray-100 text-gray-500"
                  } font-semibold text-lg whitespace-nowrap border-b-2 transition-all duration-200 hover:bg-gray-50 cursor-pointer rounded-t-lg`}
                >
                  {item}
                </div>
              ))}

              <div className="w-full h-full border-b border-gray-100" />
            </div>
            <div className="flex w-full gap-12 py-6">
              <div className="flex w-full justify-between flex-wrap">
                <div className="flex flex-col gap-6">
                  <div className="flex h-[60px] w-[60px] justify-center items-center rounded-lg bg-lime-50 text-lime-500 text-2xl font-bold">
                    {click + 1}
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-2xl">{list2[click].title}</p>
                    <p className="font-medium text-lg text-gray-500">
                      {list2[click].details.split("\n").map((i, j) => (
                        <span key={j}>
                          {i}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className=" rounded-2xl bg-gray-100 w-[400px] h-[240px]" />
              </div>
            </div>
            <div className="flex w-fit rounded-full bg-gray-100 px-5 py-2">
              <p className="font-semibold text-base text-gray-700">
                직접 해보기
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12 px-12 py-24 items-center">
          <p className="font-bold text-[32px]">대마위키 문서 구경하러가기</p>
          <div className="cursor-pointer flex rounded-lg px-5 py-2 border border-lime-500 bg-lime-400 hover:bg-lime-500">
            <p className="text-white font-bold text-[18px]">시작하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
