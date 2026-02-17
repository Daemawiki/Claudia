"use client";
import { Logo, Arrow, User, Search } from "@/assets";
import React, { useEffect, useRef, useState } from "react";
import { Button, SearchInput } from "@/components";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "@/apis/cookies";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navList = [
    {
      text: "분류",
      link: "/division",
      array: ["학생", "선생님", "사건/사고", "동아리"],
      priority: 1,
    },
    {
      text: "게시판",
      link: "/",
      array: ["학생", "선생님", "어쩌고"],
      priority: 2,
    },
    { text: "최근변경", link: "/recent", array: [""], priority: 3 },
    { text: "팀소개", link: "/team", array: [""], priority: 4 },
  ];

  const primaryMobileNav = navList
    .filter(item => item.priority <= 3)
    .sort((a, b) => a.priority - b.priority);
  const secondaryMobileNav = navList.filter(item => item.priority > 3);

  const isActive = (link: string) => {
    if (link === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(link);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const access_token = getCookie("access_token");

  return (
    <div className="w-full z-40 top-0 bg-white border-b border-gray200 flex flex-col">
      <div className="flex justify-center w-full px-6 bg-white border-b border-gray200">
        <div className="py-3 w-full max-w-[1600px] justify-between items-center flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="flex cursor-pointer items-center gap-3 min-h-[44px]"
              >
                <Logo size={36} className="text-lime500" />
                <p className="text-black text-semibold20 whitespace-nowrap">
                  대마위키
                </p>
              </button>
              <div className="flex items-center gap-0.5 px-2 py-1 rounded-full bg-gray100">
                <p className="text-semibold14 text-gray500 whitespace-nowrap">
                  v 1.0.0
                </p>
                <Arrow className="text-gray400" size={16} direction="down" />
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-1 flex-none">
              {navList.map(({ text, array, link }, index) => (
                <div
                  key={index}
                  className="flex relative items-center justify-center min-h-[44px] group"
                >
                  <button
                    type="button"
                    onClick={() => router.push(link)}
                    aria-current={isActive(link) ? "page" : undefined}
                    className={`flex items-center gap-0.5 rounded-md px-3 py-2 transition-all ${
                      isActive(link)
                        ? "bg-lime100 text-lime500"
                        : "text-gray600 hover:text-lime500"
                    }`}
                  >
                    <p className="text-semibold18">{text}</p>
                    {array.length > 1 && (
                      <Arrow
                        direction="down"
                        className={
                          isActive(link)
                            ? "text-lime500"
                            : "text-gray600 group-hover:text-lime500"
                        }
                      />
                    )}
                  </button>
                  {array.length > 1 && (
                    <ul className="flex flex-col group-hover:left-0 group-focus-within:left-0 absolute top-11 rounded-lg -left-[9999px] min-w-[120px] shadow-lg bg-white overflow-hidden border border-gray200">
                      {array.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="w-full px-4 py-2 bg-white hover:bg-gray50 whitespace-nowrap text-medium16 text-gray700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
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
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="hidden md:flex sm:flex p-1 cursor-pointer min-h-[44px] min-w-[44px] items-center justify-center"
                >
                  <User className="text-gray500" />
                </button>
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

      <div className="hidden md:flex sm:flex px-4 py-2 border-t border-gray200 items-center gap-2">
        {primaryMobileNav.map(item => (
          <button
            type="button"
            key={item.text}
            onClick={() => router.push(item.link)}
            aria-current={isActive(item.link) ? "page" : undefined}
            className={`flex-1 min-h-[44px] rounded-md px-2 text-medium16 text-center ${
              isActive(item.link)
                ? "bg-lime100 text-lime500"
                : "bg-gray50 text-gray600"
            }`}
          >
            {item.text}
          </button>
        ))}
        {secondaryMobileNav.length > 0 && (
          <div className="relative" ref={mobileMenuRef}>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="min-h-[44px] min-w-[44px] rounded-md border border-gray200 text-gray600 px-3"
              aria-expanded={mobileMenuOpen}
              aria-haspopup="menu"
              aria-label="추가 메뉴 열기"
            >
              <Search className="text-gray500" />
            </button>
            {mobileMenuOpen && (
              <div className="absolute right-0 top-12 z-20 w-[160px] rounded-lg border border-gray200 bg-white shadow-lg overflow-hidden">
                {secondaryMobileNav.map(item => (
                  <button
                    type="button"
                    key={item.text}
                    onClick={() => {
                      router.push(item.link);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full min-h-[44px] px-4 text-left text-medium16 ${
                      isActive(item.link)
                        ? "bg-lime100 text-lime500"
                        : "text-gray700 hover:bg-gray50"
                    }`}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
