interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Arrow_Long_Right = ({
  size = 24,
  onClick,
  className = "",
}: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 19 19"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
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
