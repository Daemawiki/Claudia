interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Text_Italic = ({
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
        d="M9.333 22.666h2.333m0 0H14m-2.334 0 4.667-16.333m-2.333 0h2.333m0 0h2.333"
      />
    </svg>
  );
};
