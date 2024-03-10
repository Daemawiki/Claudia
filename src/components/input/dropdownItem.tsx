interface DropdownItemProps {
  key: number;
  item: string;
  clickHandler: (e: React.MouseEvent<HTMLElement>) => void;
}

const DropdownItem = ({ key, item, clickHandler }: DropdownItemProps) => {
  return (
    <div
      key={key}
      className="border-t border-black p-[10px] h-[24px] box-content bg-white"
      onClick={clickHandler}
    >
      {item}
    </div>
  );
};

export default DropdownItem;
