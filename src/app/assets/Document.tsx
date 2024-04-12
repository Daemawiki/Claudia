interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Document = ({ size = 24, onClick, className = "" }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7.5 14.167h5m-5-2.5h5M10.834 2.5l-.271-.001h-3.73c-.933 0-1.4 0-1.756.182-.314.16-.569.414-.728.728-.182.356-.182.823-.182 1.757v9.666c0 .934 0 1.4.182 1.757.16.314.414.569.728.729.356.181.822.181 1.754.181h6.339c.931 0 1.397 0 1.753-.181.314-.16.57-.415.73-.73.18-.355.18-.821.18-1.753V7.5m-4.999-5c.238.003.388.012.532.046.17.041.332.108.482.2.168.103.312.247.6.535l2.605 2.605c.288.288.431.432.534.6.092.15.16.312.2.482.035.143.044.294.046.532m-4.999-5v2.334c0 .933 0 1.4.181 1.756.16.314.415.569.728.729.357.181.823.181 1.755.181h2.335"
      />
    </svg>
  );
};
