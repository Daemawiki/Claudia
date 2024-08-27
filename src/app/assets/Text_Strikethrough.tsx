interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Text_Strikethrough = ({
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
        d="M14 14.5c1.046 0 2.071.225 2.97.65.407.192.78.423 1.115.685.405.318.752.682 1.028 1.084.503.732.751 1.56.718 2.395-.032.835-.345 1.648-.905 2.354-.56.705-1.346 1.277-2.277 1.657-.93.38-1.972.552-3.014.5a6.841 6.841 0 0 1-2.912-.799c-.865-.47-1.555-1.116-2-1.872m5.278-6.654H4.667m9.334 0h9.333m-4.055-6.653c-.445-.756-1.136-1.403-2-1.873a6.844 6.844 0 0 0-2.912-.798 7.087 7.087 0 0 0-3.015.5c-.93.38-1.717.952-2.277 1.657-.56.706-.872 1.52-.905 2.355-.01.244.005.488.043.73"
      />
    </svg>
  );
};
