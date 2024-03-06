import Button from "../button";

interface ButtonsProps {
  info: {
    title: string;
    content: string;
  }[];
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const Buttons = ({ info, setState }: ButtonsProps) => {
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
        onClick={() => undefined}
        width={80}
        height={40}
        rounded={16}
      />
    </div>
  );
};

export default Buttons;
