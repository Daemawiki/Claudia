"use client";

import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchItem {
  id: string;
  title: string;
  group: string;
  content: string;
}

const searchSource: SearchItem[] = [
  {
    id: "1",
    title: "이태영",
    group: "학생",
    content: "1학년 4반의 오타쿠 이태영.",
  },
  {
    id: "2",
    title: "김승원",
    group: "학생",
    content: "대마위키를 운영하는 개발자 멤버입니다.",
  },
  {
    id: "3",
    title: "대마위키",
    group: "프로젝트",
    content: "대덕소프트웨어마이스터고 학생 위키 서비스입니다.",
  },
];

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [keyword, setKeyword] = useState<string>(query);

  useEffect(() => {
    setKeyword(query);
  }, [query]);

  const normalizedQuery = query.trim().toLowerCase();
  const searchedList = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return searchSource.filter(item => {
      const title = item.title.toLowerCase();
      const content = item.content.toLowerCase();

      return (
        title.includes(normalizedQuery) || content.includes(normalizedQuery)
      );
    });
  }, [normalizedQuery]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      router.push("/search");
      return;
    }

    router.push(`/search?q=${encodeURIComponent(trimmedKeyword)}`);
  };

  return (
    <div className="w-full flex justify-center pb-12">
      <div className="w-full pt-16 px-12 max-w-[1200px] flex flex-col gap-10">
        <section className="flex flex-col gap-3">
          <h1 className="text-bold36 text-black">문서 검색</h1>
          <p className="text-medium18 text-gray500">
            제목과 내용으로 문서를 검색할 수 있습니다.
          </p>
        </section>

        <form
          onSubmit={onSubmit}
          className="flex gap-3 md:flex-col sm:flex-col"
        >
          <input
            value={keyword}
            onChange={event => setKeyword(event.target.value)}
            placeholder="검색어를 입력하세요"
            className="w-full rounded-lg border border-gray200 px-4 py-3 text-medium16 text-black placeholder:text-gray400"
          />
          <button
            type="submit"
            className="rounded-lg bg-lime500 px-6 py-3 text-semibold16 text-white hover:bg-lime600 transition-all"
          >
            검색
          </button>
        </form>

        {normalizedQuery ? (
          <div className="flex flex-col gap-3">
            {searchedList.length > 0 ? (
              searchedList.map(item => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => router.push(`/document/${item.id}`)}
                  className="w-full rounded-xl border border-gray200 bg-white p-5 text-left hover:border-lime300 transition-all"
                >
                  <p className="text-semibold20 text-black">{item.title}</p>
                  <p className="pt-2 text-medium14 text-gray500">
                    {item.group}
                  </p>
                  <p className="pt-3 text-medium16 text-gray600">
                    {item.content}
                  </p>
                </button>
              ))
            ) : (
              <div className="rounded-xl border border-gray200 bg-white p-8 text-center text-medium16 text-gray500">
                검색 결과가 없습니다.
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-gray200 bg-white p-8 text-center text-medium16 text-gray500">
            검색어를 입력하면 결과가 표시됩니다.
          </div>
        )}
      </div>
    </div>
  );
}
