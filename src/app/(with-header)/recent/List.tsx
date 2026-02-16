import React from "react";

interface ListProps {
  listTitle?: boolean;
  title: string;
  group: string;
  changeUserName: string;
  changeTime: string;
}

function List({
  listTitle = false,
  title,
  group,
  changeUserName,
  changeTime,
}: ListProps) {
  const isHeader = Boolean(listTitle);
  const primaryTextClass = isHeader
    ? "text-medium18 text-gray700"
    : "text-medium16 text-black";
  const secondaryTextClass = isHeader
    ? "text-medium18 text-gray700"
    : "text-medium16 text-gray500";

  return (
    <div
      className={`w-full px-5 py-4 sm:px-4 ${isHeader ? "bg-gray50" : "bg-white border-b border-b-gray100"}`}
    >
      <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.3fr)] items-center gap-3 sm:hidden">
        <p className={`${primaryTextClass} truncate`}>{title}</p>
        <p className={`${secondaryTextClass} truncate`}>{group}</p>
        <p className={`${primaryTextClass} truncate`}>{changeUserName}</p>
        <p className={`${secondaryTextClass} truncate`}>{changeTime}</p>
      </div>

      <div className="hidden grid-cols-2 items-center gap-2 sm:grid">
        <p className={`${primaryTextClass} truncate`}>{title}</p>
        <p className={`${secondaryTextClass} truncate text-right`}>{group}</p>
        <p className={`${primaryTextClass} truncate`}>{changeUserName}</p>
        <p className={`${secondaryTextClass} truncate text-right`}>
          {changeTime}
        </p>
      </div>
    </div>
  );
}

List.defaultProps = {
  listTitle: false,
};

export { List };
export default List;
