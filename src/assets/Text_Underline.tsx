interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Text_Underline = ({
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
      viewBox="0 0 28 29"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 22.666h14M9.333 6.333v7a4.667 4.667 0 0 0 9.334 0v-7"
      />
    </svg>
  );
};
