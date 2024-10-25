"use client";
import React, { useState } from "react";
import { Arrow_Double, Edit, Info, Setting, Slash } from "@/assets";
import { SearchInput } from "@/components/input/SearchInput";

interface ListProps {
  icon: React.ReactNode;
  text: string;
  indexList?: boolean;
  padding?: number;
}

interface SidebarProps {
  fixed?: boolean;
}

export const Sidebar = ({ fixed }: SidebarProps) => {
  const [visible, setVisible] = useState<boolean>(true);
  const listArr = [
    { icon: <Edit size={22} />, text: "문서 수정" },
    { icon: <Info size={22} />, text: "문서 정보" },
    { icon: <Setting size={22} />, text: "설정" },
  ];

  const indexListArr = [
    { num: "1", title: "개요" },
    { num: "2", title: "특징" },
    { num: "3", title: "논란" },
    { num: "4", title: "성격" },
    { num: "5", title: "여담" },
    { num: "5.1", title: "햄스터라는 사실" },
    { num: "5.2", title: "404 논란" },
    { num: "5.2.1", title: "여러가지 논란이 된 이유" },
  ];

  const List = ({ icon, text, indexList, padding }: ListProps) => {
    return (
      <div
        className={`w-full cursor-pointer peer transition-all flex items-center text-gray600 overflow-hidden text-nowrap rounded-lg ${indexList ? "gap-2" : "gap-3"} py-2.5 pr-2.5 ${padding == 2 ? "pl-5" : padding == 3 ? "pl-[30px]" : "pl-2.5"} bg-white ${indexList ? "hover:bg-lime50" : "hover:bg-gray100"}`}
      >
        {icon}
        <p
          className={`${indexList ? "text-medium18" : "text-medium16"} overflow-hidden overflow-ellipsis text-nowrap`}
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <>
      {!visible && (
        <div
          style={{ height: `calc(100vh - 100px)` }}
          className="top-20 left-0 fixed z-10 w-[40px] peer"
        />
      )}

      <div
        style={{ height: `calc(100vh - 100px)` }}
        className={`border z-20 fixed top-20 hover:left-0 peer-hover:left-0 ${visible ? "left-0" : "-left-72"} transition-all bg-white rounded-r-2xl border-gray300 w-[280px] flex flex-col`}
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
          <div
            onClick={() => setVisible(!visible)}
            className={`flex p-1 cursor-pointer transition-all absolute right-4 top-3.5`}
          >
            <Arrow_Double
              className="text-gray400 transition-all"
              direction={visible ? "left" : "right"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col px-5 py-2 gap-8 h-full overflow-y-scroll">
          <SearchInput placeholder="문서 내 검색" />
          <div className="w-full flex flex-col gap-2">
            <p className="text-semibold14 text-gray600">설정</p>
            <div className="flex w-full gap-1 flex-col">
              {listArr.map(({ icon, text }, index) => (
                <List key={index} icon={icon} text={text} />
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-semibold14 text-gray600">목차</p>
            <div className="flex w-full gap-1 flex-col">
              {indexListArr.map(({ num, title }, index) => (
                <List
                  padding={num.split(".").length}
                  indexList
                  key={index}
                  icon={<p className="text-semibold18 text-lime500">{num}</p>}
                  text={title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
