interface PropsType {
  size?: number;
  className?: string;
}

export const Heading2 = ({ size, className }: PropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.5 14.5835V14.0002C17.5 12.0672 19.067 10.5002 21 10.5002H21.2002C23.0226 10.5002 24.4996 11.9778 24.4996 13.8002C24.4996 14.6754 24.1523 15.5147 23.5335 16.1335L17.5 22.167L24.5 22.1668M3.5 5.8335V14.0002M3.5 14.0002V22.1668M3.5 14.0002H12.8333M12.8333 5.8335V14.0002M12.8333 14.0002V22.1668"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
