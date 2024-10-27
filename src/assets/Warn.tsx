interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Warn = ({ size = 24, onClick, className = "" }: PropsType) => {
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8.45v4M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.05-5.55v.1h-.1v-.1h.1Z"
      />
    </svg>
  );
};
