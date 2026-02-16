"use client";

import { fetchRecentChangesByCategory, wikiCategoryLabel } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Arrow } from "@/assets";
import { RegisterInput } from "@/components";
import { periodMenu, majorMenu, clubMenu } from "@/constant/dropdownItem";
import { Title } from "../../document/[id]/Title";
import { Pagination } from "../../recent/Pagination";
import { List } from "../../recent/List";

function StudentPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["recent-changes", "student"],
    queryFn: () => fetchRecentChangesByCategory("student"),
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
    <div className="w-full flex justify-center">
      <div className="flex w-full max-w-screen-xl flex-col px-6 sm:px-4 lg:px-12">
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
            {isLoading && (
              <div className="border-b border-b-gray100 px-5 py-6 text-medium16 text-gray500 sm:px-4">
                학생 문서를 불러오는 중입니다...
              </div>
            )}
            {!isLoading && rows.length === 0 && (
              <div className="border-b border-b-gray100 px-5 py-6 text-medium16 text-gray500 sm:px-4">
                표시할 학생 문서가 없습니다.
              </div>
            )}
            {!isLoading &&
              rows.map(({ id, title, group, changeUserName, changeTime }) => (
                <List
                  key={id}
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
