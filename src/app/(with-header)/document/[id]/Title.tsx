import React from "react";

interface TitleProps {
  group?: string;
  title?: string;
  views?: number;
  details?: string;
  noPadding?: boolean;
  noShow?: boolean;
  additionalInfo?: string;
  lastModifiedTime?: string;
}

function Title({
  group,
  title = "이태영",
  views = 210,
  details,
  noPadding,
  noShow,
  additionalInfo,
  lastModifiedTime,
}: TitleProps) {
  const metaText = lastModifiedTime
    ? `최근 수정 시각 : ${lastModifiedTime}`
    : additionalInfo ||
      (group && details ? `${group} · ${details}` : group || details || "");

  return (
    <div
      className={`w-full flex justify-between items-end gap-4 border-b border-gray200 sm:flex-col sm:items-start ${
        noPadding
          ? "py-8 md:py-6 sm:py-5"
          : "py-12 px-12 md:py-8 md:px-8 sm:py-6 sm:px-4"
      }`}
    >
      <h1 className="text-bold36 text-black md:text-bold30 sm:text-bold24">
        {title}
      </h1>
      <div className="flex flex-col items-end gap-1 sm:items-start">
        {metaText && (
          <span className="text-medium14 text-gray400">{metaText}</span>
        )}
        {!noShow && (
          <div className="flex items-center gap-2 text-gray500 text-medium14">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99 12.482C6.47 13.957 9.06 16 12 16C14.94 16 17.53 13.957 19.01 12.482C19.4 12.094 19.6 11.898 19.72 11.517C19.81 11.244 19.81 10.756 19.72 10.483C19.6 10.102 19.4 9.906 19.01 9.518C17.53 8.043 14.94 6 12 6C9.06 6 6.47 8.043 4.99 9.518C4.6 9.907 4.4 10.101 4.28 10.483C4.19 10.756 4.19 11.244 4.28 11.517C4.4 11.899 4.6 12.093 4.99 12.482Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.33 11C10.33 11.92 11.08 12.667 12 12.667C12.92 12.667 13.67 11.92 13.67 11C13.67 10.08 12.92 9.333 12 9.333C11.08 9.333 10.33 10.08 10.33 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>조회수: {views}</span>
          </div>
        )}
      </div>
    </div>
  );
}

Title.defaultProps = {
  group: "",
  title: "이태영",
  views: 210,
  details: "",
  noPadding: false,
  noShow: false,
  additionalInfo: "",
  lastModifiedTime: "",
};

export { Title };
export default Title;
