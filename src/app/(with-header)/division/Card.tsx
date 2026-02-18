import {
  Arrow_Short as ArrowShort,
  Book,
  Notebook,
  User,
  Warn,
} from "@/assets";

interface CardProps {
  longWidth?: boolean;
  type: "student" | "teacher" | "accident" | "club";
  onClick?: () => void;
}

const cardIconMap = {
  student: {
    icon: <User />,
    title: "학생",
    details: "대마고의 이상한 학생들을\n구경해보세요.",
  },
  teacher: {
    icon: <Book />,
    title: "선생님",
    details: "대마고의 선생님들을\n확인해보세요.",
  },
  accident: {
    icon: <Warn />,
    title: "사건/사고",
    details: "대마고의 신박한 사건사고를\n확인해보세요.",
  },
  club: {
    icon: <Notebook />,
    title: "동아리",
    details: "다양한 동아리들을\n만나보세요.",
  },
};

function Card({ longWidth = false, type, onClick = undefined }: CardProps) {
  const currentCard = cardIconMap[type];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full group hover:shadow-lg ${longWidth ? "max-w-[468px]" : "max-w-[260px]"} min-w-[220px] flex flex-col justify-between px-6 py-7 bg-white border border-gray200 rounded-2xl h-[260px] transition-all text-left`}
    >
      <div className="w-full flex justify-between">
        <div className="rounded-lg flex bg-lime50 border border-lime300 p-2.5 text-lime500">
          {currentCard.icon}
        </div>
        <ArrowShort
          direction={longWidth ? "upRight" : "right"}
          className="text-gray200 opacity-0 cursor-pointer group-hover:opacity-100 transition-all"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="text-bold28 text-black">{currentCard.title}</p>
        <p className="text-medium16 text-gray500 whitespace-pre-line">
          {currentCard.details}
        </p>
      </div>
    </button>
  );
}

Card.defaultProps = {
  longWidth: false,
  onClick: undefined,
};

export default Card;
