"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { fetchDivisionCategories } from "@/apis";
import { WikiDivisionCategory } from "@/interfaces/wiki";
import { Title } from "../document/[id]/Title";
import Card from "./Card";

const defaultCategories: WikiDivisionCategory[] = [
  {
    id: "student",
    featured: true,
    route: "/division/student",
  },
  {
    id: "teacher",
  },
  {
    id: "accident",
  },
  {
    id: "club",
  },
];

export default function Division() {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["division-categories"],
    queryFn: fetchDivisionCategories,
  });

  const categories = data ?? defaultCategories;

  return (
    <div className="w-full flex justify-center pb-12">
      <div className="flex w-full max-w-screen-xl flex-col gap-14 px-6 pt-16 sm:px-4 lg:px-12">
        <Title
          noPadding
          noShow
          title="분류"
          group="대마위키"
          details="카테고리"
        />
        {isLoading && (
          <p className="text-medium14 text-gray500">
            분류를 불러오는 중입니다...
          </p>
        )}
        <div className="w-full flex-wrap gap-6 py-12 flex">
          {categories.map(category => {
            const { id, featured, route } = category;

            return (
              <Card
                key={id}
                longWidth={featured}
                type={id}
                onClick={route ? () => router.push(route) : undefined}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
