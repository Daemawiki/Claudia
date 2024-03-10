import DocumentPreview from "./documentPreview";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-10  w-[300px] mt-5">
      <div className="bg-white rounded-2xl">
        <div className="px-5 py-[10px] border-b">
          <span className="font-bold text-base">최근 변경된 문서</span>
        </div>
        <DocumentPreview documentName="박자민" time={456} views={54} />
        <DocumentPreview documentName="박지민" time={456} views={5948} />
        <DocumentPreview documentName="박지미" time={789} views={3} />
        <DocumentPreview documentName="빡지민" time={6155} views={1004} />
        <DocumentPreview documentName="박시민" time={6155} views={7942} />
        <DocumentPreview documentName="부지민" time={6155} views={1592} />
        <DocumentPreview documentName="반지민" time={6155} views={5877} />
        <DocumentPreview documentName="박지마" time={6155} views={4485} />
        <DocumentPreview documentName="보지민" time={6155} views={6974} />
        <DocumentPreview documentName="박주민" time={6155} views={32} />
        <div className="px-5 py-[10px] flex justify-end">
          <Link href={"/recent"}>
            <span>더보기</span>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl">
        <div className="px-5 py-[10px] border-b">
          <span className="font-bold text-base">인기 TOP 10</span>
        </div>
        <DocumentPreview documentName="박시민" time={6155} views={7942} />
        <DocumentPreview documentName="보지민" time={6155} views={6974} />
        <DocumentPreview documentName="박지민" time={456} views={5948} />
        <DocumentPreview documentName="반지민" time={6155} views={5877} />
        <DocumentPreview documentName="박지마" time={6155} views={4485} />
        <DocumentPreview documentName="부지민" time={6155} views={1592} />
        <DocumentPreview documentName="빡지민" time={6155} views={1004} />
        <DocumentPreview documentName="박자민" time={456} views={54} />
        <DocumentPreview documentName="박주민" time={6155} views={32} />
        <DocumentPreview documentName="박지미" time={789} views={3} />
        <div className="px-5 py-[10px] flex justify-end">
          <Link href={"/popular"}>
            <span>더보기</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
