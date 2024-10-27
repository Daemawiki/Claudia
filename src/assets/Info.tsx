interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Info = ({ size = 24, onClick, className = "" }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 22 22"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 10.083v4.584m0 4.583a8.25 8.25 0 1 1 0-16.5 8.25 8.25 0 0 1 0 16.5Zm.046-11.917v.092h-.092v-.092h.092Z"
      />
    </svg>
  );
};
