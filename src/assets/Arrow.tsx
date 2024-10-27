interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
  direction?: "left" | "up" | "right" | "down";
}

export const Arrow = ({
  size = 24,
  className = "",
  onClick,
  direction = "left",
}: PropsType) => {
  const rotate = {
    left: "rotate-[0deg]",
    up: "rotate-[90deg]",
    right: "rotate-[180deg]",
    down: "rotate-[270deg]",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className} ${
        rotate[direction]
      }`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m14 16-4-4 4-4"
      />
    </svg>
  );
};
