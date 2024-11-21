interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
  direction?: "left" | "right" | "up" | "down" | "upRight";
}

export const Arrow_Short = ({
  size = 24,
  className = "",
  onClick,
  direction = "left",
}: PropsType) => {
  const rotate = {
    upRight: "rotate-[315deg]",
    right: "rotate-[0deg]",
    down: "rotate-[90deg]",
    left: "rotate-[180deg]",
    up: "rotate-[270deg]",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      onClick={onClick}
      viewBox="0 0 24 24"
      className={`${onClick ? "cursor-pointer" : ""} ${className} ${
        rotate[direction]
      }`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14m0 0-6-6m6 6-6 6"
      />
    </svg>
  );
};
