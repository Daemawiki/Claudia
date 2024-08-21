import React from "react";

export const Bottom = () => {
  const documentList = [
    "INFO",
    "백엔드",
    "대마위키 개발자",
    "햄스터 급발진 사건",
  ];
  return (
    <div className="w-full flex flex-col gap-12 py-12">
      <div className="w-full flex gap-6 px-12 flex-wrap">
        <p className="text-semibold16 text-gray600 whitespace-nowrap">
          관련 문서
        </p>
        {/* <div className="flex gap-4 w-full items-center flex-wrap"> */}
        {documentList.map((text, index) => (
          <p
            key={index}
            className="text-semibold16 whitespace-nowrap cursor-pointer text-lime500"
          >
            {text}
          </p>
        ))}
        {/* </div> */}
      </div>
      <div className="flex w-full px-12 py-6 border-t border-gray100">
        <p className="text-medium16 text-gray400">
          최근 수정: 2024.08.01 07:50
        </p>
      </div>
    </div>
  );
};
