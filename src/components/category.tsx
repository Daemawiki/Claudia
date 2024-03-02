interface CategoryProps {
  groups: string[][];
}

const Category = ({ groups }: CategoryProps) => {
  const renderGroups = () => {
    const formatGroups = groups.map((group, index) => {
      const format = group.map((item, index) => {
        const isLastItem = index === group.length - 1;
        return (
          <span className="text-myDocumentNameColor flex gap-[6px]">
            {`${item}`}
            <span>{isLastItem ? "" : "/"}</span>
          </span>
        );
      });
      const isLastGroup = index === groups.length - 1;
      return (
        <span className="flex gap-[10px]">
          <span className="flex gap-[6px]">{format}</span>
          {isLastGroup ? "" : "|"}
        </span>
      );
    });
    return <div className="flex gap-[10px]">{formatGroups}</div>;
  };
  return (
    <div className="flex gap-[10px] px-[10px] py-[8px] border-[#d2d2d2] border-[1px] rounded-[4px]">
      <span>분류 :</span>
      {renderGroups()}
    </div>
  );
};

export default Category;
