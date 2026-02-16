"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchRecentChanges, wikiCategoryLabel } from "@/apis";
import { Title } from "../document/[id]/Title";
import RecentList from "./List";
import RecentPagination from "./Pagination";

function Recent() {
  const { data, isLoading } = useQuery({
    queryKey: ["recent-changes"],
    queryFn: fetchRecentChanges,
  });

  const rows =
    data?.map(change => ({
      id: change.id,
      title: change.title,
      group: wikiCategoryLabel(change.category),
      changeUserName: change.editor,
      changeTime: change.updatedAt,
    })) ?? [];

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
          {isLoading && (
            <div className="border-b border-b-gray100 px-5 py-6 text-medium16 text-gray500 sm:px-4">
              최근 변경을 불러오는 중입니다...
            </div>
          )}
          {!isLoading && rows.length === 0 && (
            <div className="border-b border-b-gray100 px-5 py-6 text-medium16 text-gray500 sm:px-4">
              표시할 최근 변경 항목이 없습니다.
            </div>
          )}
          {!isLoading &&
            rows.map(({ id, title, group, changeUserName, changeTime }) => (
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
