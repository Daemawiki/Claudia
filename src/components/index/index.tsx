import { IndexItem } from "@/constant/indexItem";
import { flattenArray } from "@/utils/flatteAarray";
import Link from "next/link";

interface IndexProps {
  index: IndexItem[];
}

const Index = ({ index }: IndexProps) => {
  const rernderIndex = (indexObject: IndexItem[]) => {
    const index = flattenArray(indexObject);
    console.log(index);
    return index.map((item, index) => {
      return (
        <Link href={`#${item.title}`}>
          <div className="text-[18px] border-l-2 border-l-transparent hover:border-l-[#93CB56] hover:bg-[#F5F5F5] pl-[10px] hover:cursor-pointer">
            <span key={index} className="text-[#93DF3F]">
              {item.index}
            </span>
            <span>{`. ${item.title}`}</span>
          </div>
        </Link>
      );
    });
  };
  return (
    <div className="w-[270px] flex flex-col gap-5 px-4 py-5 border rounded-lg border-[#cecece]">
      <span className="font-medium text-[24px] pl-[10px]">목차</span>
      <div className="flex flex-col gap-[2px]">{rernderIndex(index)}</div>
    </div>
  );
};

export default Index;
