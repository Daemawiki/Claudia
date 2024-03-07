import { Info } from "@/constant/documentType";
import Button from "../button";

interface ButtonsProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setInfo: React.Dispatch<React.SetStateAction<Info[]>>;
  newInfo?: Info[];
}

const Buttons = ({ state, setState, setInfo, newInfo }: ButtonsProps) => {
  const onClickHandler = () => {
    switch (state) {
      case "add":
        newInfo &&
          setInfo(prev => {
            return [...prev, ...newInfo];
          });
        setState("");
        break;
      case "edit":
        newInfo &&
          setInfo(prev => {
            console.log(prev);
            console.log(newInfo);
            return newInfo;
          });
        setState("");
        break;
      case "del":
    }
  };
  return (
    <div className="flex absolute right-[50px] bottom-[20px] gap-5">
      <Button
        text="취소"
        color="black"
        fontSize={20}
        onClick={() => setState("")}
        width={80}
        height={40}
        rounded={16}
      />
      <Button
        text="저장"
        fontSize={20}
        onClick={onClickHandler}
        width={80}
        height={40}
        rounded={16}
      />
    </div>
  );
};

export default Buttons;
