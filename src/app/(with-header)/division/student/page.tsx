import React from "react";
import { Arrow } from "@/assets";
import { Title } from "../../document/[id]/Title";
import { RegisterInput } from "@/components";
import { periodMenu, majorMenu, clubMenu } from "@/constant/dropdownItem";
import { Pagination } from "../../recent/Pagination";
import { List } from "../../recent/List";

function StudentPage() {
  const arr = new Array(10).fill({
    title: "이태영",
    group: "학생",
    changeUserName: "김승원",
    changeTime: "2424-08-28 08:37",
  });
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full max-w-[1200px]">
        <div className="flex w-full flex-col gap-3 pb-12 pt-28">
          <div className="rounded-md p-2 w-fit border border-gray200 bg-white hover:bg-gray50">
            <Arrow className="text-gray600" />
          </div>
          <Title noPadding noShow title="학생" group="분류" details="대마고" />
          <div className="w-full flex gap-6">
            <RegisterInput
              title="전공"
              dropdownValue={majorMenu}
              placeholder="전체"
              type="dropdown"
            />

            <RegisterInput
              dropdownValue={clubMenu}
              title="동아리"
              placeholder="전체"
              type="dropdown"
            />
            <RegisterInput
              title="기수"
              dropdownValue={periodMenu}
              placeholder="전체"
              type="dropdown"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-[60px] pb-12">
          <div className="w-full flex flex-col">
            <List
              listTitle
              title="항목"
              group="분류"
              changeUserName="변경자"
              changeTime="변경 시간"
            />
            {arr.map(({ title, group, changeUserName, changeTime }, index) => (
              <List
                key={index}
                title={title}
                group={group}
                changeUserName={changeUserName}
                changeTime={changeTime}
              />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
export default StudentPage;
