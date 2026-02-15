"use client";

import { useRouter } from "next/navigation";
import { WikiDocumentSummary } from "@/interfaces/wiki";
import CategoryBadge from "./CategoryBadge";

interface DocumentTableProps {
  rows: WikiDocumentSummary[];
  emptyText?: string;
}

function DocumentTable({
  rows,
  emptyText = "표시할 문서가 없습니다.",
}: DocumentTableProps) {
  const router = useRouter();

  return (
    <div className="overflow-hidden rounded-2xl border border-gray200 bg-white">
      <div className="grid grid-cols-5 gap-4 bg-gray50 px-5 py-4 text-medium16 text-gray600 md:grid-cols-3 sm:grid-cols-2">
        <p>문서</p>
        <p className="md:hidden sm:hidden">분류</p>
        <p>편집자</p>
        <p className="sm:hidden">최근 수정</p>
        <p className="text-right md:text-left">조회수</p>
      </div>

      {rows.length === 0 && (
        <div className="px-5 py-12 text-center text-medium16 text-gray500">
          {emptyText}
        </div>
      )}

      {rows.map(row => (
        <button
          key={row.id}
          type="button"
          onClick={() => router.push(`/document/${row.id}`)}
          className="grid w-full grid-cols-5 gap-4 border-t border-gray100 px-5 py-4 text-left transition-all hover:bg-gray50 md:grid-cols-3 sm:grid-cols-2"
        >
          <p className="text-medium16 text-black">{row.title}</p>
          <div className="md:hidden sm:hidden">
            <CategoryBadge category={row.category} />
          </div>
          <p className="text-medium16 text-gray600">{row.editor}</p>
          <p className="text-medium16 text-gray500 sm:hidden">
            {row.updatedAt}
          </p>
          <p className="text-right text-medium16 text-gray500 md:text-left">
            {row.views}
          </p>
        </button>
      ))}
    </div>
  );
}

DocumentTable.defaultProps = {
  emptyText: "표시할 문서가 없습니다.",
};

export default DocumentTable;
