"use client";
import { Logo, Arrow_Down, Search } from "@/app/assets";
import Link from "next/link";
import React, { useState } from "react";

const sublist = ["동아리", "기수", "전공"];
const sublist2 = ["학생", "선생님", "어쩌고"];

const Nav = ({ text = "", visible = false, array = [] as string[] }) => {
  return (
    <div className="group relative flex p-2 cursor-pointer items-center">
      <p className="text-[16px] font-semibold text-gray-600 group-hover:text-lime-500 whitespace-nowrap duration-300">
        {text}
      </p>
      {visible && (
        <>
          <Arrow_Down
            size={20}
            className={`text-gray-600 group-hover:text-lime-500 ml-1 group-hover:rotate-180 transition ease-in-out`}
          />
          <ul className="flex flex-col group-hover:left-0 absolute top-10 rounded-b-lg -left-[9999px] w-[100px] shadow-lg bg-white">
            {array.map((i, j) => (
              <li
                key={j}
                className="py-2 px-4 hover:bg-gray-100 whitespace-nowrap"
              >
                {i}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

function Header2() {
  const navList = [
    { text: "분류", visible: true, array: sublist },
    { text: "게시판", visible: true, array: sublist2 },
    { text: "최근변경", visible: false, array: [""] },
    { text: "팀소개", visible: false, array: [""] },
  ];

  return (
    <div className="fixed top-0 w-full px-[32px] flex bg-white justify-center h-[64px] border-b border-gray-200">
      <div className="flex w-full max-w-[1400px] items-center justify-between py-3">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-4">
            <div className="flex gap-3 items-center">
              <Logo size={36} className="text-lime-500" />
              <p className="text-[20px] font-semibold whitespace-nowrap">
                대마위키
              </p>
            </div>
            <div className="flex rounded-full px-2 py-1 bg-gray-100 group items-center gap-0.5">
              <p className="font-semibold text-[14px] text-gray-500">v 1.0.0</p>
              <Arrow_Down
                size={20}
                className="text-gray-400 group-hover:rotate-180"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {navList.map(({ text, visible, array }, index) => (
              <Nav key={index} text={text} visible={visible} array={array} />
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-4 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md max-w-60 h-9">
            <input
              className="w-full placeholder:text-gray-400 font-medium text-md"
              placeholder="검색"
            />
            <Search className="text-gray-400" />
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-md flex px-3 py-1.5 text-gray-800 text-[16px] font-semibold hover:bg-gray-100">
              <Link href={"/login"}>로그인</Link>
            </div>
            <div className="rounded-md flex px-3 py-1.5 text-white bg-lime-500 font-medium hover:bg-lime-600">
              <Link href={"/signup"}>회원가입</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
