"use client";

import { fetchPopularDocuments } from "@/apis";
import { DocumentTable, PageHeader, PageSection } from "@/components/wiki";
import { useQuery } from "@tanstack/react-query";

function Popular() {
  const { data, isLoading } = useQuery({
    queryKey: ["popular-documents"],
    queryFn: fetchPopularDocuments,
  });

  return (
    <div className="flex w-full justify-center pb-12">
      <div className="flex w-full max-w-screen-xl flex-col gap-10 px-6 pt-16 sm:px-4 lg:px-12">
        <PageHeader
          title="인기 문서"
          subtitle="대마위키"
          description="조회수가 높은 문서를 확인하세요"
        />

        <PageSection title="인기 순위">
          {isLoading ? (
            <div className="rounded-2xl border border-gray200 bg-white px-6 py-12 text-center text-medium16 text-gray500">
              문서를 불러오는 중입니다...
            </div>
          ) : (
            <DocumentTable rows={data ?? []} />
          )}
        </PageSection>
      </div>
    </div>
  );
}

export default Popular;
