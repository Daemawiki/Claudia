import Link from "next/link";

interface PreviewProps {
  title: string;
  review?: number;
  editor: string;
  editTime: string;
}

const Preview = ({ title, review, editor, editTime }: PreviewProps) => {
  let widthStyle = { width: "300px" };
  if (review) {
    widthStyle = { width: "220px" };
  }
  return (
    <div className="flex gap-[10px] text-[#93DF3F]">
      <div className="grow">
        <Link href={"#"}>{title}</Link>
      </div>
      {review && <div className="w-[150px]">{review}</div>}
      <div style={widthStyle}>
        <Link href={"#"}>{editor}</Link>
      </div>
      <div className="w-[150px] text-[#AEACAC]">{editTime}</div>
    </div>
  );
};

export default Preview;
