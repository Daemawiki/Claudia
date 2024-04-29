interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Close = ({ size = 24, onClick, className = "" }: PropsType) => {
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.833 14.5a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0Zm-7 0a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0Zm-7 0a1.167 1.167 0 1 0 2.333 0 1.167 1.167 0 0 0-2.333 0Z"
      />
    </svg>
  );
};
