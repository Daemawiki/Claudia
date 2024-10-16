import { Info } from "@/constant/documentType";
import { Button } from "../Button";
import duplicationCheck from "@/utils/function/duplicationCheck";

interface ButtonsProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setInfo: React.Dispatch<React.SetStateAction<Info[]>>;
  newInfo?: Info[];
  info: Info[];
}

const Buttons = ({ state, setState, setInfo, newInfo, info }: ButtonsProps) => {
  const onClickHandler = () => {
    switch (state) {
      case "add":
        if (newInfo && duplicationCheck([...info, ...newInfo])) {
          alert("중복되거나 빈 제목은 사용할 수 없어요!");
          break;
        }
        newInfo &&
          setInfo(prev => {
            return [...prev, ...newInfo];
          });
        setState("");
        break;
      case "edit":
        if (newInfo && duplicationCheck(newInfo)) {
          alert("중복되거나 빈 제목은 사용할 수 없어요!");
          break;
        } else {
          newInfo && setInfo(newInfo);
          setState("");
          break;
        }
      case "del":
        newInfo && setInfo(newInfo);
        setState("");
        break;
    }
  };
  return (
    <div className="flex absolute right-[50px] bottom-[20px] gap-5">
      <Button
        text="취소"
        onClick={() => {
          setState("");
        }}
      />
      <Button text="저장" onClick={onClickHandler} />
    </div>
  );
};

export default Buttons;
