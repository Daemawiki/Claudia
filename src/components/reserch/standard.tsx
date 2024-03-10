interface StandardProps {
  width: number | "grow";
  title: string;
}

const Standard = ({ width, title }: StandardProps) => {
  let widthStyle = { flexGrow: 1, width: "auto" };
  if (typeof width === "number") {
    widthStyle = { width: `${width}px`, flexGrow: 0 };
  } else {
  }
  return (
    <div className="grow" style={widthStyle}>
      <span className="font-medium text-2xl">{title}</span>
      <hr />
    </div>
  );
};

export default Standard;
