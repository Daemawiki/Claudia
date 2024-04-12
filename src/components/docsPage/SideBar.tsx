"use client";
import React, { useState } from "react";
import {
  Arrow_Double,
  Arrow_Down,
  Edit,
  Search,
  Setting,
  Slash,
  Info,
} from "../../app/assets";

function SideBar2() {
  const [openListToggle, setOpenListToggle] = useState(true);
  const [openSetToggle, setOpenSetToggle] = useState(true);
  const [visibleSideMenu, setVisibleSideMenu] = useState(true);

  const settingToggle = () => {
    setOpenSetToggle(!openSetToggle);
  };

  const listToggle = () => {
    setOpenListToggle(!openListToggle);
  };

  const visibleMenu = () => {
    setVisibleSideMenu(!visibleSideMenu);
  };

  const list = [
    { num: "1", title: "개요" },
    { num: "2", title: "특징" },
    { num: "3", title: "논란" },
    { num: "4", title: "성격" },
    { num: "5", title: "여담" },
    { num: "5.1", title: "햄스터라는 사실" },
    { num: "5.2", title: "논란 및 비판" },
    { num: "5.2.1", title: "여러가지 논란이 된 발언들 이것저것" },
  ];

  return (
    <>
      <div
        onClick={visibleMenu}
        className={`${visibleSideMenu ? "hidden" : "flex"} p-1 hover:bg-gray-50 rounded-md m-4 hover:border-gray-300 border h-fit bg-white`}
      >
        <Arrow_Double className="rotate-180 text-gray-400" />
      </div>
      <div
        className={`max-w-[280px] ${visibleSideMenu ? "w-full" : "hidden"} flex flex-col h-full pl-2`}
      >
        <div className="flex justify-between p-4 items-center w-full">
          <div className="flex items-center">
            <div className="flex px-2 py-0.5 rounded-[4px] text-gray-500 text-base font-semibold bg-white hover:bg-gray-100">
              학생
            </div>
            <Slash className="text-gray-300" />
            <div className="flex px-2 py-0.5 rounded-[4px] text-lime-500 text-base font-semibold bg-gray-50 hover:bg-gray-100">
              이태영
            </div>
          </div>
          <div
            onClick={visibleMenu}
            className="flex p-1 hover:bg-gray-50 rounded-md"
          >
            <Arrow_Double className="text-gray-400" />
          </div>
        </div>
        <div className="flex w-full p-4 ">
          <div className="flex items-center gap-4 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md h-9">
            <input
              className="w-full placeholder:text-gray-400 font-medium text-md"
              placeholder="문서 내 검색"
            />
            <Search className="text-gray-400" />
          </div>
        </div>
        <div className="px-4 py-6 w-full ">
          <div className="rounded-full border border-gray-100 max-w-[120px]" />
        </div>
        <div className="flex flex-col w-full px-2 gap-3">
          <div className="flex w-full items-center justify-between px-2">
            <p className="font-semibold text-base text-gray-600">설정</p>
            <Arrow_Down
              onClick={settingToggle}
              className={`text-gray-400 hover:bg-gray-100 rounded ${openSetToggle ? "" : "rotate-90"}`}
            />
          </div>
          {openSetToggle && (
            <ul className="gap-0.5 w-full flex flex-col">
              <li className="flex px-2 py-2 gap-2 items-center hover:bg-gray-100 rounded-md">
                <Edit size={20} className="text-gray-500" />
                <p className="font-medium text-base text-gray-500">문서 수정</p>
              </li>
              <li className="flex px-2 py-2 gap-2 items-center hover:bg-gray-100 rounded-md">
                <Info size={20} className="text-gray-500" />
                <p className="font-medium text-base text-gray-500">문서 정보</p>
              </li>
              <li className="flex px-2 py-2 gap-2 items-center hover:bg-gray-100 rounded-md">
                <Setting size={20} className="text-gray-500" />
                <p className="font-medium text-base text-gray-500">설정</p>
              </li>
            </ul>
          )}
        </div>
        <div className="px-4 py-6 w-full ">
          <div className="rounded-full border border-gray-100 max-w-[120px]" />
        </div>
        <div className="flex flex-col w-full px-2 gap-3">
          <div className="flex w-full items-center justify-between px-2">
            <p className="font-semibold text-base text-gray-600">목차</p>
            <Arrow_Down
              onClick={listToggle}
              className={`text-gray-400 hover:bg-gray-100 rounded ${openListToggle ? "" : "rotate-90"}`}
            />
          </div>
          {openListToggle && (
            <ul className="flex w-full gap-0.5 flex-col">
              {list.map(i => (
                <li
                  className={`py-1.5 pr-2 ${i.num.split(".").length == 3 ? "pl-6" : i.num.split(".").length == 2 ? "pl-4" : "pl-2"} flex w-full gap-2 hover:bg-gray-100 rounded-md items-center`}
                >
                  <p className="text-lg text-lime-500 font-bold">{i.num}</p>
                  <p className="text-lg text-gray-800 font-medium w-full overflow-hidden whitespace-nowrap text-ellipsis">
                    {i.title}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default SideBar2;
