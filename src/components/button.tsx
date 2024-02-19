interface ButtonProps<T extends (...args: any[]) => void> {
  text: string;
  color?: string;
  fontSize?: number;
  onClick?: T;
  width: number;
  height: number;
  rounded: number;
  style?: React.CSSProperties;
}

const Button = <T extends (...args: any[]) => void>({
  text,
  color,
  fontSize,
  onClick,
  width,
  height,
  rounded,
  style = {},
}: ButtonProps<T>) => {
  const widthStyle = { width: `${width}px` };
  const heightStyle = { height: `${height}px` };
  const roundedStyle = { borderRadius: `${rounded}px` };
  let fontSizeStyle = { fontSize: `24px` };
  if (fontSize) {
    fontSizeStyle = { fontSize: `${fontSize}px` };
  }

  return (
    <button
      onClick={onClick}
      className={`button ${color ? "bg-black" : "bg-[#93DF3F]"} text-white`}
      style={{
        ...fontSizeStyle,
        ...widthStyle,
        ...heightStyle,
        ...roundedStyle,
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
