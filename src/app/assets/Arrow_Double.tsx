interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Arrow_Double = ({
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
      viewBox="0 0 24 25"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m11 16.5-4-4 4-4m6 8-4-4 4-4"
      />
    </svg>
  );
};
