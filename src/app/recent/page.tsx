import React from "react";
import { Title } from "../document/[id]/Title";
import { List } from "./List";
import { Pagination } from "./Pagination";

function Recent() {
  const arr = new Array(10).fill({
    title: "이태영",
    group: "학생",
    changeUserName: "김승원",
    changeTime: "2424-08-28 08:37",
  });
  return (
    <div className="w-full flex justify-center pb-12">
      <div className="w-full pt-16 px-12 max-w-[1200px] flex flex-col gap-14">
        <Title
          noPadding
          noShow
          title="최근변경"
          group="대마위키"
          details="최신순"
        />
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
  );
}

export default Recent;
