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
      viewBox="0 0 24 25"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m18 18.5-6-6m0 0-6-6m6 6 6-6m-6 6-6 6"
      />
    </svg>
  );
};
