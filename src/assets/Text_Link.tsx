interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Text_Link = ({
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
        d="m10.7 17.8 6.6-6.6m-9.074 2.475-1.65 1.65a4.667 4.667 0 1 0 6.6 6.599l1.648-1.65m-1.649-11.55 1.65-1.65a4.666 4.666 0 1 1 6.6 6.6l-1.65 1.65"
      />
    </svg>
  );
};
