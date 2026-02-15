"use client";
import { Logo, Arrow, User, Search } from "@/assets";
import React from "react";
import { SearchInput } from "@/components";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "@/apis/cookies";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
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
  const accessToken = getCookie("access_token");

  const isNavActive = (text: string, link: string) => {
    if (link === "/division") return pathname.startsWith("/division");
    if (link === "/recent") {
      return pathname.startsWith("/recent") || pathname.startsWith("/popular");
    }
    if (link === "/team") return pathname.startsWith("/team");
    if (text === "게시판") {
      return pathname.startsWith("/document") || pathname.startsWith("/search");
    }

    return pathname === "/" || pathname.startsWith("/main");
  };

  return (
    <div className="w-full z-40 top-0 bg-white border-b border-gray200 flex flex-col">
      <div className="flex justify-center w-full bg-white border-b border-gray200 px-6 sm:px-4">
        <div className="flex w-full max-w-[1600px] items-center justify-between gap-3 py-3 sm:gap-2">
          <div className="flex items-center gap-3 lg:gap-6 min-w-0">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => router.push("/")}
                aria-label="대마위키 홈"
                className="flex items-center gap-3"
              >
                <Logo size={36} className="text-lime500" />
                <p className="text-black text-semibold20 whitespace-nowrap">
                  대마위키
                </p>
              </button>
              <div className="flex items-center gap-0.5 rounded-full bg-gray100 px-2 py-1 sm:hidden">
                <p className="text-semibold14 text-gray500 whitespace-nowrap">
                  v 1.0.0
                </p>
                <Arrow className="text-gray400" size={16} direction="down" />
              </div>
            </div>
            <div className="flex min-w-0 max-w-full items-center gap-2 overflow-x-auto pr-1 sm:w-full sm:gap-1">
              {navList.map(({ text, array, link }) => {
                const isActive = isNavActive(text, link);

                return (
                  <div key={text} className="group relative shrink-0">
                    <button
                      type="button"
                      onClick={() => router.push(`${link}`)}
                      className="flex items-center justify-center gap-0.5 rounded-md p-2 transition-all hover:bg-gray50 sm:px-2 sm:py-1.5"
                    >
                      <p
                        className={`text-semibold18 transition-all sm:text-semibold16 ${isActive ? "text-lime500" : "text-gray600 group-hover:text-lime500"}`}
                      >
                        {text}
                      </p>
                      {array.length > 1 && (
                        <Arrow
                          direction="down"
                          className={`transition-all ${isActive ? "text-lime500" : "text-gray600 group-hover:text-lime500"}`}
                        />
                      )}
                    </button>
                    {array.length > 1 && (
                      <ul className="absolute -left-[9999px] top-10 flex w-[100px] flex-col overflow-hidden rounded-lg bg-white shadow-lg group-hover:left-0">
                        {array.map(itemText => (
                          <li
                            key={`${text}-${itemText}`}
                            className="w-full whitespace-nowrap bg-white px-4 py-2 hover:bg-gray50"
                          >
                            {itemText}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center lg:gap-10 gap-4">
            <div className="w-[240px] flex md:hidden sm:hidden">
              <SearchInput placeholder="검색" />
            </div>
            {accessToken ? (
              <div />
            ) : (
              <>
                <div className="flex md:hidden sm:hidden items-center gap-2">
                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="rounded-md bg-white px-3 py-2 text-semibold16 text-gray600 transition-all hover:bg-gray50"
                  >
                    로그인
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push("/signup")}
                    className="rounded-md bg-lime500 px-3 py-2 text-semibold16 text-white transition-all hover:bg-lime600"
                  >
                    회원가입
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  aria-label="로그인"
                  className="hidden md:flex sm:flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray50"
                >
                  <User className="text-gray500" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:flex sm:flex border-t border-gray100 px-6 py-3">
        <div className="flex min-h-10 w-full items-center gap-2 rounded-md border border-gray200 bg-gray50 px-3">
          <input
            placeholder="여기에서 검색"
            className="w-full bg-transparent py-2 text-medium16 text-black placeholder:text-gray400"
          />
          <button
            type="button"
            aria-label="검색"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray200 bg-white text-gray500 hover:bg-lime50 hover:text-lime600"
          >
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
