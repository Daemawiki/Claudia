import { Arrow } from "@/app/assets";

interface PropsType {
  index: string;
  title: string;
  editor: string;
  editDate: string;
  editHistory: { value: string; added?: true; removed?: true }[];
  isOpen: boolean;
  handleOpen: () => void;
  isFirst: boolean;
}

interface HistoryProps {
  text: string;
}

const EditHistory = ({
  index,
  title,
  editor,
  editDate,
  editHistory,
  isOpen,
  handleOpen,
  isFirst,
}: PropsType) => {
  const firstHistoryStyle = isFirst ? "border-t-[0px]" : "";

  return (
    <div
      className={`${firstHistoryStyle} py-5 px-7 flex flex-col gap-3 border-t-[1px] border-gray200`}
    >
      <div
        className="flex items-center text-medium18 text-black"
        onClick={handleOpen}
      >
        <div className="flex-grow flex gap-3">
          <span className="text-semibold18 text-lime500">{index}</span>
          <span>{title}</span>
        </div>
        <div className="max-w-[240px] flex-grow">{editor}</div>
        <div className="flex-grow max-w-[240px]">{editDate}</div>
        <Arrow direction={isOpen ? "up" : "down"} />
      </div>
      {isOpen && (
        <div className="flex-col flex px-3 gap-1 text-medium18 border-l-[1px] border-gray200">
          {editHistory
            .filter(history => history.added || history.removed)
            .map(history =>
              history.added ? (
                <AddedHistory text={history.value} />
              ) : (
                <RemoveHistory text={history.value} />
              ),
            )}
        </div>
      )}
    </div>
  );
};

const RemoveHistory = ({ text }: HistoryProps) => {
  return <span className="text-gray400 line-through">{text}</span>;
};

const AddedHistory = ({ text }: HistoryProps) => {
  return <span className="text-lime500">{text}</span>;
};

export default EditHistory;
