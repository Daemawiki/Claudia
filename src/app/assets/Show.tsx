interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Show = ({ size = 24, onClick, className = "" }: PropsType) => {
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
        d="M3.586 13.779c1.78 1.769 4.883 4.22 8.414 4.22 3.53 0 6.633-2.451 8.413-4.22.469-.467.704-.7.854-1.159.106-.327.106-.913 0-1.24-.15-.458-.385-.692-.854-1.159C18.633 8.452 15.53 6 12 6c-3.531 0-6.634 2.452-8.414 4.221-.47.467-.704.7-.854 1.159-.106.327-.106.913 0 1.24.15.458.385.692.854 1.159Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      />
    </svg>
  );
};
