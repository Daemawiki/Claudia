"use client";
import { Logo, Arrow, User, Search } from "@/assets";
import React from "react";
import { Button, SearchInput } from "@/components";
import { useRouter } from "next/navigation";
import { getCookie } from "@/apis/cookies";

export const Header = () => {
  const router = useRouter();
  const navList = [
    {
      text: "분류",
      link: "/division",
      array: ["학생", "선생님", "사건/사고", "동아리"],
    },
    { text: "게시판", link: "/", array: ["학생", "선생님", "어쩌고"] },
    { text: "최근변경", link: "/recent", array: [""] },
    { text: "팀소개", link: "/team", array: [""] },
  ];
  const access_token = getCookie("access_token");

  return (
    <div className="w-full z-40 top-0 bg-white border-b border-gray200 flex flex-col">
      <div className="flex justify-center w-full px-6 bg-white border-b border-gray200">
        <div className="py-3 w-full max-w-[1600px] justify-between items-center flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div
                onClick={() => router.push("/")}
                className="flex cursor-pointer items-center gap-3"
              >
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
              {navList.map(({ text, array, link }, index) => (
                <div
                  onClick={() => router.push(`${link}`)}
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
          <div className="flex items-center lg:gap-10 gap-4">
            <div className="w-[240px] flex md:hidden sm:hidden">
              <SearchInput placeholder="검색" />
            </div>
            {access_token ? (
              <div></div>
            ) : (
              <>
                <div className="flex md:hidden sm:hidden items-center gap-2">
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
                <div
                  onClick={() => router.push("/login")}
                  className="hidden md:flex sm:flex p-1 cursor-pointer"
                >
                  <User className="text-gray500" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:flex sm:flex px-6 items-center">
        <input
          placeholder="여기에서 검색"
          className="text-black placeholder:text-gray400 bg-transparent text-medium16 w-full py-2"
        />
        <Arrow direction="right" className="text-gray300" />
      </div>
    </div>
  );
};
