interface DocumentType {
  documentName: string;
  time: number;
  views: number;
}

const DocumentPreview = ({ documentName: name, time, views }: DocumentType) => {
  return (
    <div className="flex px-5 py-[5px] items-center justify-between border-b">
      <div className="flex flex-col">
        <span className="text-xl font-medium text-myDocumentNameColor">
          {name}
        </span>
        <span className="text-[#A0A0A0] text-xs">몇 초 전</span>
      </div>
      <span className="text-xl">{`${views} 회`}</span>
    </div>
  );
};

export default DocumentPreview;
