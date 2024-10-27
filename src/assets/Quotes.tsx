interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Quotes = ({ size = 24, className = "", onClick }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 36 36"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M24 25.5a4.5 4.5 0 0 0 4.5-4.5v-3m0 0v-5.102c0-.839 0-1.259-.163-1.58a1.5 1.5 0 0 0-.657-.654c-.32-.164-.74-.164-1.58-.164h-2.7c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.655.655C21 11.639 21 12.06 21 12.9v2.7c0 .84 0 1.26.163 1.58a1.5 1.5 0 0 0 .656.657c.32.163.74.163 1.579.163H28.5Zm-18 7.5A4.5 4.5 0 0 0 15 21v-3m0 0v-5.102c0-.839 0-1.259-.163-1.58a1.5 1.5 0 0 0-.656-.654c-.321-.164-.74-.164-1.58-.164H9.9c-.84 0-1.261 0-1.582.164a1.5 1.5 0 0 0-.656.655c-.163.32-.163.741-.163 1.581v2.7c0 .84 0 1.26.163 1.58a1.5 1.5 0 0 0 .656.657c.32.163.74.163 1.579.163H15Z"
      />
    </svg>
  );
};
