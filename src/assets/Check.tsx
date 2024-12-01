interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Check = ({ size = 24, onClick, className }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 12 4.243 4.243 8.484-8.486"
      />
    </svg>
  );
};
