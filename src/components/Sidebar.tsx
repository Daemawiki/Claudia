"use client";

import { useEffect, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

import {
  Arrow_Double as ArrowDouble,
  Edit,
  Info,
  Setting,
  Slash,
} from "@/assets";
import { SearchInput } from "@/components/SearchInput";

interface SidebarListItemProps {
  icon: ReactNode;
  text: string;
  isIndexList: boolean;
  paddingLevel: number;
  onClick: () => void;
}

interface SidebarProps {
  fixed?: boolean;
  setOpenSidebar?: Dispatch<SetStateAction<boolean>>;
  titleList?: TitleListProps[];
}

interface TitleListProps {
  num: string;
  title: string;
}

const defaultSetOpenSidebar: Dispatch<SetStateAction<boolean>> = () =>
  undefined;

function getPaddingClass(paddingLevel: number): string {
  if (paddingLevel === 2) {
    return "pl-5";
  }

  if (paddingLevel === 3) {
    return "pl-[30px]";
  }

  return "pl-2.5";
}

function SidebarListItem({
  icon,
  text,
  isIndexList,
  paddingLevel,
  onClick,
}: SidebarListItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full peer transition-all flex items-center text-gray600 overflow-hidden text-nowrap rounded-lg ${isIndexList ? "gap-2" : "gap-3"} py-2.5 pr-2.5 ${getPaddingClass(paddingLevel)} bg-white ${isIndexList ? "hover:bg-lime50" : "hover:bg-gray100"}`}
    >
      {icon}
      <p
        className={`${isIndexList ? "text-medium18" : "text-medium16"} overflow-hidden overflow-ellipsis text-nowrap`}
      >
        {text}
      </p>
    </button>
  );
}

function Sidebar({
  fixed = false,
  setOpenSidebar = defaultSetOpenSidebar,
  titleList = [],
}: SidebarProps) {
  const [visible, setVisible] = useState<boolean>(true);
  const tocList = titleList;
  const isFixed = fixed;

  useEffect(() => {
    if (isFixed) {
      return () => {};
    }

    const desktopMedia = window.matchMedia("(min-width: 1420px)");

    const syncVisibility = (event?: MediaQueryListEvent) => {
      const isDesktop = event ? event.matches : desktopMedia.matches;
      setVisible(isDesktop);
    };

    syncVisibility();
    desktopMedia.addEventListener("change", syncVisibility);

    return () => {
      desktopMedia.removeEventListener("change", syncVisibility);
    };
  }, [isFixed]);

  useEffect(() => {
    setOpenSidebar(visible);
  }, [setOpenSidebar, visible]);

  const listArr = [
    { icon: <Edit size={22} />, text: "문서 수정" },
    { icon: <Info size={22} />, text: "문서 정보" },
    { icon: <Setting size={22} />, text: "설정" },
  ];

  const handleOpenSidebar = () => {
    setVisible(true);
  };

  const handleToggleSidebar = () => {
    setVisible(prev => !prev);
  };

  const handleNoop = () => undefined;

  return (
    <>
      {!visible && !isFixed && (
        <>
          <button
            type="button"
            onClick={handleOpenSidebar}
            aria-label="목차 열기"
            className="fixed bottom-6 right-4 z-30 flex items-center gap-2 rounded-full border border-lime300 bg-lime50 px-4 py-2 text-semibold16 text-lime600 shadow-md transition hover:bg-lime100 lg:hidden"
          >
            <ArrowDouble
              className="text-lime500 transition-all"
              direction="right"
            />
            목차
          </button>
          <button
            type="button"
            onClick={handleOpenSidebar}
            aria-label="사이드바 열기"
            className="fixed left-0 top-24 z-30 hidden h-10 w-10 items-center justify-center rounded-r-xl border border-l-0 border-gray300 bg-white text-gray400 shadow-sm transition hover:bg-gray50 lg:flex"
          >
            <ArrowDouble
              className="text-gray400 transition-all"
              direction="right"
            />
          </button>
        </>
      )}

      <div
        className={`fixed z-20 flex h-[calc(100vh-124px)] w-[280px] flex-col rounded-r-2xl border border-gray300 bg-white shadow-sm transition-all top-[124px] lg:h-[calc(100vh-100px)] lg:top-20 ${isFixed || visible ? "left-0" : "-left-72"}`}
      >
        <div className="w-full flex p-4 items-center justify-between overflow">
          <div className="flex items-center">
            <div className="rounded-md px-2 py-1 flex text-gray500 text-semibold16 hover:bg-gray50 cursor-pointer">
              학생
            </div>
            <Slash className="text-gray300" />
            <div className="rounded-md px-2 py-1 flex text-semibold16 text-lime500 bg-lime50 hover:bg-lime100 cursor-pointer">
              이태영
            </div>
          </div>
          {!isFixed && (
            <button
              type="button"
              aria-label="사이드바 닫기"
              onClick={handleToggleSidebar}
              className="absolute right-4 top-3.5 flex p-1 transition-all"
            >
              <ArrowDouble
                className="text-gray400 transition-all"
                direction={visible ? "left" : "right"}
              />
            </button>
          )}
        </div>
        <div className="w-full flex flex-col pl-5 pr-1 py-2 gap-8 h-full overflow-y-scroll">
          <SearchInput placeholder="문서 내 검색" />
          <div className="w-full flex flex-col gap-2">
            <p className="text-semibold14 text-gray600">설정</p>
            <div className="flex w-full gap-1 flex-col">
              {listArr.map(({ icon, text }) => (
                <SidebarListItem
                  key={text}
                  icon={icon}
                  text={text}
                  isIndexList={false}
                  paddingLevel={1}
                  onClick={handleNoop}
                />
              ))}
            </div>
          </div>
          {tocList.length > 0 && (
            <div className="w-full flex flex-col gap-2">
              <p className="text-semibold14 text-gray600">목차</p>
              <div className="flex w-full gap-1 flex-col">
                {tocList.map(({ num, title }) => (
                  <SidebarListItem
                    paddingLevel={num.split(".").length}
                    isIndexList
                    key={`${num}-${title}`}
                    icon={<p className="text-semibold18 text-lime500">{num}</p>}
                    text={title}
                    onClick={() => {
                      const targetId = `section-${num.replace(/\./g, "-")}`;
                      document.getElementById(targetId)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });

                      if (window.innerWidth < 1420) {
                        setVisible(false);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Sidebar.defaultProps = {
  fixed: false,
  setOpenSidebar: defaultSetOpenSidebar,
  titleList: [],
};

export { Sidebar };
export default Sidebar;
