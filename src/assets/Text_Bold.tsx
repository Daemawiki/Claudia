interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

function TextBold({ size = 24, onClick, className = "" }: PropsType) {
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
        d="M9.333 14.5h5.25m-5.25 0V6.333h5.25a4.083 4.083 0 1 1 0 8.167m-5.25 0v8.166h6.417a4.083 4.083 0 1 0 0-8.166h-1.167"
      />
    </svg>
  );
}

TextBold.defaultProps = {
  size: 24,
  className: "",
  onClick: undefined,
};

export { TextBold as Text_Bold };
export default TextBold;
