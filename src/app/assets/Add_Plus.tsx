interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const AddPlus = ({ size, onClick, className }: PropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className={className}
  >
    <path
      d="M6.5 12H12.5M12.5 12H18.5M12.5 12V18M12.5 12V6"
      stroke="#9CA3AF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
