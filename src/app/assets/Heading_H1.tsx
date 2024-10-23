interface PropsType {
  size?: number;
  className?: string;
}

export const Heading1 = ({ size, className }: PropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18.6667 11.6668L22.1667 10.5002L22.1667 22.1668M3.5 5.8335V14.0002M3.5 14.0002V22.1668M3.5 14.0002H12.8333M12.8333 5.8335V14.0002M12.8333 14.0002V22.1668"
      stroke="#6B7280"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
