interface PropsType {
  size?: number;
  className?: string;
}

export const Heading3 = ({ size, className }: PropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.5 10.5002H24.5L19.8333 15.1668H21C22.933 15.1668 24.5 16.7338 24.5 18.6668C24.5 20.5998 22.933 22.1668 21 22.1668C20.2759 22.1668 19.5694 21.9425 18.9783 21.5243C18.3872 21.106 17.9404 20.5146 17.6994 19.8318M3.5 5.8335V14.0002M3.5 14.0002V22.1668M3.5 14.0002H12.8333M12.8333 5.8335V14.0002M12.8333 14.0002V22.1668"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
