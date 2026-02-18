"use client";
import { Logo, Arrow, User, Search } from "@/assets";
import React, { useEffect, useRef, useState } from "react";
import { Button, SearchInput } from "@/components";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "@/apis/cookies";

interface NavItem {
  text: string;
  link: string;
  priority: number;
  subItems?: {
    text: string;
    link: string;
  }[];
}

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navList: NavItem[] = [
    {
      text: "분류",
      link: "/division",
      subItems: [
        { text: "학생", link: "/division/student" },
        { text: "선생님", link: "/division" },
        { text: "사건/사고", link: "/division" },
        { text: "동아리", link: "/division" },
      ],
      priority: 1,
    },
    {
      text: "인기문서",
      link: "/popular",
      priority: 2,
    },
    { text: "최근변경", link: "/recent", priority: 3 },
    { text: "랜덤문서", link: "/document/1", priority: 4 },
    { text: "팀소개", link: "/team", priority: 5 },
  ];

  const primaryMobileNav = navList
    .filter(item => item.priority <= 3)
    .sort((a, b) => a.priority - b.priority);
  const secondaryMobileNav = navList.filter(item => item.priority > 3);

  const routeTo = (link: string) => {
    router.push(link);
    setMobileMenuOpen(false);
  };

  const submitSearch = () => {
    const trimmedKeyword = searchKeyword.trim();

    if (!trimmedKeyword) {
      router.push("/search");
      return;
    }

    router.push(`/search?q=${encodeURIComponent(trimmedKeyword)}`);
  };

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
              {navList.map(({ text, link, subItems }, index) => (
                <div
                  key={index}
                  className="flex relative items-center justify-center min-h-[44px] group"
                >
                  <button
                    type="button"
                    onClick={() => routeTo(link)}
                    aria-current={isActive(link) ? "page" : undefined}
                    className={`flex items-center gap-0.5 rounded-md px-3 py-2 transition-all ${
                      isActive(link)
                        ? "bg-lime100 text-lime500"
                        : "text-gray600 hover:text-lime500"
                    }`}
                  >
                    <p className="text-semibold18">{text}</p>
                    {subItems && subItems.length > 0 && (
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
                  {subItems && subItems.length > 0 && (
                    <ul className="flex flex-col group-hover:left-0 group-focus-within:left-0 absolute top-11 rounded-lg -left-[9999px] min-w-[120px] shadow-lg bg-white overflow-hidden border border-gray200">
                      {subItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="w-full">
                          <button
                            type="button"
                            onClick={() => routeTo(item.link)}
                            className="w-full px-4 py-2 bg-white hover:bg-gray50 whitespace-nowrap text-medium16 text-gray700 text-left"
                          >
                            {item.text}
                          </button>
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
              <SearchInput
                placeholder="검색"
                value={searchKeyword}
                onChange={setSearchKeyword}
                onSubmit={submitSearch}
              />
            </div>
            {access_token ? (
              <div className="flex md:hidden sm:hidden items-center gap-2">
                <Button
                  onClick={() => routeTo("/mypage")}
                  text="마이페이지"
                  style="white"
                />
              </div>
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
                  onClick={() => routeTo(access_token ? "/mypage" : "/login")}
                  className="hidden md:flex sm:flex p-1 cursor-pointer min-h-[44px] min-w-[44px] items-center justify-center"
                >
                  <User className="text-gray500" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="hidden md:flex sm:flex px-6 py-2 items-center">
        <SearchInput
          placeholder="여기에서 검색"
          value={searchKeyword}
          onChange={setSearchKeyword}
          onSubmit={submitSearch}
        />
      </div>

      <div className="hidden md:flex sm:flex px-4 py-2 border-t border-gray200 items-center gap-2">
        {primaryMobileNav.map(item => (
          <button
            type="button"
            key={item.text}
            onClick={() => routeTo(item.link)}
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
                    onClick={() => routeTo(item.link)}
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
