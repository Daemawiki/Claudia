"use client";
import { Logo, Arrow, User } from "@/app/assets";
import React from "react";
import { SearchInput } from "./input/SearchInput";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const navList = [
    { text: "분류", link: "/", array: ["동아리", "기수", "전공"] },
    { text: "게시판", link: "/", array: ["학생", "선생님", "어쩌고"] },
    { text: "최근변경", link: "/", array: [""] },
    { text: "팀소개", link: "/", array: [""] },
  ];

  return (
    <div className="fixed z-40 top-0 flex justify-center w-full px-6 bg-white border-b border-gray200">
      <div className="py-3 w-full max-w-[1600px] justify-between items-center flex">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Logo size={36} className="text-lime500" />
              <p className="text-black text-semibold20 whitespace-nowrap">
                대마위키
              </p>
            </div>
            <div className="flex items-center gap-0.5 px-2 py-1 rounded-full bg-gray100">
              <p className="text-semibold14 text-gray500 whitespace-nowrap">
                v 1.0.0
              </p>
              <Arrow className="text-gray400" size={16} direction="down" />
            </div>
          </div>
          <div
            className="flex items-center gap-2 flex-none
          "
          >
            {navList.map(({ text, array }, index) => (
              <div
                key={index}
                className="flex relative items-center justify-center p-2 gap-0.5 group cursor-pointer transition-all"
              >
                <p className="text-semibold18 text-gray600 group-hover:text-lime500 transition-all">
                  {text}
                </p>
                {array.length > 1 && (
                  <>
                    <Arrow
                      direction="down"
                      className="text-gray600 group-hover:text-lime500"
                    />
                    <ul className="flex flex-col group-hover:left-0 absolute top-10 rounded-lg -left-[9999px] w-[100px] shadow-lg bg-white overflow-hidden">
                      {array.map((text, index) => (
                        <li
                          key={index}
                          className="w-full px-4 py-2 bg-white hover:bg-gray50 whitespace-nowrap"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:hidden items-center gap-10">
          <div className="w-[240px] flex">
            <SearchInput placeholder="검색" />
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => router.push("/login")}
              text="로그인"
              style="white"
            />
            <Button
              onClick={() => router.push("/signup")}
              text="회원가입"
              style="primary2"
            />
          </div>
        </div>
        <div
          onClick={() => router.push("/login")}
          className="hidden md:flex p-1 cursor-pointer"
        >
          <User className="text-gray500" />
        </div>
      </div>
    </div>
  );
}

export default Header;
