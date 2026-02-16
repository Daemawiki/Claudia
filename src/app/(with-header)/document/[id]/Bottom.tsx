import React from "react";

function Bottom() {
  const documentList = [
    "관련 문서",
    "이태영",
    "대마위키",
    "동아리 대장님이 작성",
  ];

  return (
    <div className="w-full flex flex-col px-6 py-8 sm:px-4 lg:px-12">
      <div className="flex flex-wrap gap-2 pb-4">
        {documentList.map(text => (
          <span key={text} className="text-lime500 text-medium14">
            {text}
            {text !== documentList[documentList.length - 1] && " ·"}
          </span>
        ))}
      </div>
      <p className="text-gray400 text-medium12">최근 수정: 2024-08-04 07:03</p>
    </div>
  );
}

export { Bottom };

export default Bottom;
