"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  fetchSidebarPopularDocuments,
  fetchSidebarRecentDocuments,
  SidebarDocumentItem,
} from "@/apis";
import DocumentPreview from "./documentPreview";

interface SideBarProps {
  className?: string;
}

const SidebarSection = ({
  title,
  moreLink,
  documents,
  isLoading,
}: {
  title: string;
  moreLink: string;
  documents?: SidebarDocumentItem[];
  isLoading: boolean;
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray200 bg-white">
      <div className="border-b border-gray200 px-5 py-3">
        <span className="text-semibold18 text-gray800">{title}</span>
      </div>

      {isLoading ? (
        <div className="flex flex-col gap-2 px-5 py-4">
          {[0, 1, 2].map(index => (
            <div
              key={index}
              className="h-11 w-full rounded-lg bg-gray100 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <>
          {documents?.slice(0, 6).map(document => (
            <DocumentPreview
              key={document.id}
              documentId={document.id}
              documentName={document.title}
              minutesAgo={document.minutesAgo}
              views={document.views}
            />
          ))}
          <div className="flex justify-end px-5 py-3">
            <Link
              href={moreLink}
              className="rounded-md px-2 py-1 text-medium14 text-lime500 hover:bg-lime50"
            >
              더보기
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const SideBar = ({ className }: SideBarProps) => {
  const { data: recentDocuments, isLoading: isRecentLoading } = useQuery({
    queryKey: ["sidebar-recent-documents"],
    queryFn: fetchSidebarRecentDocuments,
  });

  const { data: popularDocuments, isLoading: isPopularLoading } = useQuery({
    queryKey: ["sidebar-popular-documents"],
    queryFn: fetchSidebarPopularDocuments,
  });

  return (
    <aside className={`flex w-full flex-col gap-4 ${className ?? ""}`}>
      <div className="rounded-2xl border border-gray200 bg-white p-4">
        <p className="text-semibold16 text-gray700">바로가기</p>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-1">
          <Link
            href="/recent"
            className="flex min-h-[44px] items-center justify-center rounded-lg bg-gray50 px-3 text-medium14 text-gray700 hover:bg-gray100"
          >
            최근 변경
          </Link>
          <Link
            href="/popular"
            className="flex min-h-[44px] items-center justify-center rounded-lg bg-gray50 px-3 text-medium14 text-gray700 hover:bg-gray100"
          >
            인기 문서
          </Link>
          <Link
            href="/document/1"
            className="flex min-h-[44px] items-center justify-center rounded-lg bg-lime100 px-3 text-medium14 text-lime500 hover:bg-lime200"
          >
            문서 바로가기
          </Link>
        </div>
      </div>

      <SidebarSection
        title="최근 변경된 문서"
        moreLink="/recent"
        documents={recentDocuments}
        isLoading={isRecentLoading}
      />
      <SidebarSection
        title="인기 TOP 10"
        moreLink="/popular"
        documents={popularDocuments}
        isLoading={isPopularLoading}
      />
    </aside>
  );
};

export default SideBar;
