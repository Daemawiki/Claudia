interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Text = ({ size = 24, onClick, className = "" }: PropsType) => {
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
        d="M11.667 22.666H14m0 0h2.333m-2.333 0V6.333m0 0H7V7.5m7-1.167h7V7.5"
      />
    </svg>
  );
};
