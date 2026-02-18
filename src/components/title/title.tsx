interface TitleProps {
  title: string;
  additionalInfo?: string;
  lastModifiedTime?: string;
}

function Title({ title, additionalInfo, lastModifiedTime }: TitleProps) {
  let subText = additionalInfo || "";
  if (lastModifiedTime) subText = `최근 수정 시각 : ${lastModifiedTime}`;
  return (
    <div className="flex justify-between items-end">
      <span className="font-bold text-[48px]">{title}</span>
      <span className="text-sm text-[#BDBDBD]">{subText}</span>
    </div>
  );
}

Title.defaultProps = {
  additionalInfo: "",
  lastModifiedTime: "",
};

export default Title;
