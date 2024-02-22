import Image from "next/image";
import TableItem from "./item";

const Table = () => {
  return (
    <div className="h-[600px] flex px-[50px] py-[70px] gap-[50px] border border-[#CECECE] rounded-[32px] items-center">
      <div className="flex flex-col py-[24px] justify-between items-center h-full">
        <Image
          src={"/images/logo.svg"}
          alt=""
          width={0}
          height={0}
          style={{ width: "300px", height: "300px" }}
        />
        <div className="flex flex-col gap-[10px] items-center ">
          <span className="font-medium text-xl text-[#93DF3F] whitespace-nowrap">
            대덕소프트웨어마이스터고등학교의 위키
          </span>
          <span className="font-bold text-4xl">대마위키</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <TableItem name="이름" value="대마위키" />
        <TableItem name="개발도구" value={"Next.js\nSpring Boot\nMongo DB"} />
        <TableItem name="서비스 개시일" value={"???"} />
        <TableItem name="개발 시작일" value={"2월 17일"} />
        <TableItem
          name="개발 레포지토리"
          value={`<a href="https://github.com/daemawiki/daemawiki_front">front</a>\n<a href="https://github.com/daemawiki/daemawiki_back">backend</a>`}
        />
      </div>
    </div>
  );
};

export default Table;
