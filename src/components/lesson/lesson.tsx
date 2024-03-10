import formatText from "@/utils/function/formatText";
import Image from "next/image";

interface LessonProps {
  title: string;
  index: string;
  content: string;
}

const Lesson = ({ title, index, content }: LessonProps) => {
  const lines = content.split("\n");
  const formattedValue = lines.map((line, index) => {
    return (
      <>
        <span
          key={index}
          dangerouslySetInnerHTML={{ __html: formatText(line) }}
        ></span>
        <br />
      </>
    );
  });
  return (
    <details className="flex px-[10px] pt-[5px] py-[10px]">
      <summary className="list-none flex gap-[5px] flex-col font-medium hover:cursor-pointer">
        <div className="flex gap-[11px]">
          <Image src={"/images/arrowUp.svg"} alt="" width={30} height={30} />
          <a id={title} className="text-2xl">
            <span className="text-[#93DF3F]">{index}. </span>
            <span>{title}</span>
          </a>
        </div>
        <hr />
      </summary>
      <div className="px-[36px] py-[16px]">{formattedValue}</div>
    </details>
  );
};

export default Lesson;
