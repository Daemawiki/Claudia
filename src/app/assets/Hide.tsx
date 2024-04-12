interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Hide = ({ size = 24, onClick, className = "" }: PropsType) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 4 16 16m-3.5-3.244C15.146 17.485 13.617 18 12 18c-3.531 0-6.634-2.452-8.414-4.221-.47-.467-.704-.7-.854-1.159-.106-.327-.106-.913 0-1.24.15-.459.385-.693.856-1.16.897-.892 2.13-1.956 3.584-2.793m12.327 7.207c.334-.293.639-.582.912-.854l.003-.003c.469-.466.704-.7.853-1.156.107-.327.106-.914 0-1.241-.15-.458-.385-.692-.854-1.159C18.633 8.452 15.53 6 11.999 6c-.337 0-.67.022-1 .064m2.323 7.436a2 2 0 0 1-2.762-2.889"
      />
    </svg>
  );
};
