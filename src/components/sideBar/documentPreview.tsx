import Link from "next/link";

interface DocumentType {
  documentId: string;
  documentName: string;
  minutesAgo: number;
  views: number;
}

const DocumentPreview = ({
  documentId,
  documentName: name,
  minutesAgo,
  views,
}: DocumentType) => {
  const timeLabel =
    minutesAgo < 60
      ? `${minutesAgo}분 전`
      : `${Math.floor(minutesAgo / 60)}시간 전`;

  return (
    <Link
      href={`/document/${documentId}`}
      className="flex items-center justify-between border-b border-gray200 px-5 py-2.5 hover:bg-gray50 transition-all"
    >
      <div className="flex flex-col gap-0.5 overflow-hidden">
        <span className="truncate text-medium18 text-gray800">{name}</span>
        <span className="text-medium12 text-gray400">{timeLabel}</span>
      </div>
      <span className="whitespace-nowrap text-medium16 text-gray600">{`${views}회`}</span>
    </Link>
  );
};

export default DocumentPreview;
