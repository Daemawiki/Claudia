interface PropsType {
  size?: number;
  className?: string;
}

export const TeamLogo = ({ size, className }: PropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="240" height="240" rx="28.8" fill="#D9F99D" />
    <path
      d="M78.75 70.1057H52.5V101.255H98.1562V89.2548M98.1562 113.255V70.1057V89.2548M98.1562 89.2548H119.25V113.255V62.4609"
      stroke="white"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="108.75"
      y="40.5"
      width="21"
      height="21"
      rx="10.5"
      stroke="white"
      stroke-width="12"
    />
    <path
      d="M175.406 163.155V156.006M175.406 182.8V132.006V156.006M175.406 156.006H192M156 139.651H129.75V170.8H156V139.651Z"
      stroke="white"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="192.75"
      y="144.545"
      width="21"
      height="21"
      rx="10.5"
      stroke="white"
      stroke-width="12"
    />
    <path
      d="M53.25 159H107.25"
      stroke="white"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.25 180H107.25"
      stroke="white"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M141 91.5H174"
      stroke="white"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M141 112.5H174"
      stroke="white"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.25 139.506H155.25"
      stroke="white"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
