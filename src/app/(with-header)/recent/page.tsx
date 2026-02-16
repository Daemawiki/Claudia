import React from "react";
import { Title } from "../document/[id]/Title";
import RecentList from "./List";
import RecentPagination from "./Pagination";

function Recent() {
  const arr = Array.from({ length: 10 }, (_, index) => ({
    id: `recent-${index + 1}`,
    title: "이태영",
    group: "학생",
    changeUserName: "김승원",
    changeTime: "2424-08-28 08:37",
  }));
  return (
    <div className="w-full flex justify-center pb-12">
      <div className="flex w-full max-w-screen-xl flex-col gap-14 px-6 pt-16 sm:px-4 lg:px-12">
        <Title
          noPadding
          noShow
          title="최근변경"
          group="대마위키"
          details="최신순"
        />
        <div className="w-full flex flex-col">
          <RecentList
            listTitle
            title="항목"
            group="분류"
            changeUserName="변경자"
            changeTime="변경 시간"
          />
          {arr.map(({ id, title, group, changeUserName, changeTime }) => (
            <RecentList
              key={id}
              listTitle={false}
              title={title}
              group={group}
              changeUserName={changeUserName}
              changeTime={changeTime}
            />
          ))}
        </div>
        <RecentPagination />
      </div>
    </div>
  );
}

export default Recent;
