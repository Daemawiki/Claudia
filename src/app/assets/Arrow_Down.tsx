interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}
export const Arrow_Down = ({
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
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m16 10-4 4-4-4"
      />
    </svg>
  );
};
