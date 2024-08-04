interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
  direction?: "left" | "up" | "right" | "down";
}

export const Arrow_Long = ({
  size = 24,
  className = "",
  onClick,
  direction = "left",
}: PropsType) => {
  const rotate = {
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
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className} ${
        rotate[direction]
      }`}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16.25 9.5 12.5 5.75m3.75 3.75-3.75 3.75m3.75-3.75H2.75"
      />
    </svg>
  );
};
