interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Edit = ({ size = 24, onClick, className }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 22 22"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.667 18.333h14.667m-14.667 0v-3.666l9.963-9.963.002-.002c.361-.362.543-.543.752-.61a.917.917 0 0 1 .566 0c.21.067.39.248.752.61l1.595 1.594c.363.363.544.545.612.754.06.184.06.383 0 .567-.068.209-.25.39-.612.753h0l-9.963 9.963H3.667Z"
      />
    </svg>
  );
};
