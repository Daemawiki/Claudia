"use client";
import { Arrow } from "@/assets";
import React, { useState } from "react";

interface ContentsProps {
  num: string;
  title: string;
  details?: string;
}

export const Toggle = ({ num, title, details }: ContentsProps) => {
  // 내용이 있으면 열림, 없으면 닫힘
  const [visible, setVisible] = useState<boolean>(!!details);
  const dotNum = num.split(".").length;

  // 폰트 크기 결정 - medium으로 변경
  const getFontSize = () => {
    if (dotNum === 1) return "text-medium36";
    if (dotNum === 2) return "text-medium28";
    return "text-medium24";
  };

  // 내용에서 키워드 하이라이트 처리
  const renderHighlightedContent = (content: string) => {
    // 숫자와 한글이 결합된 패턴 찾기 (예: "1학년 4반", "오타쿠")
    const parts = content.split(/(\d+학년\s*\d+반|오타쿠|씹덕|UGAM|언제나\s*타오르는\s*무언가)/g);

    return parts.map((part, index) => {
      const isKeyword = /\d+학년\s*\d+반|오타쿠|씹덕|UGAM|언제나\s*타오르는\s*무언가/.test(part);
      return isKeyword ? (
        <span key={index} className="text-lime500">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
  };

  return (
    <div className="w-full flex flex-col mb-6">
      <div
        onClick={() => setVisible(!visible)}
        className="flex items-center gap-3 py-3 cursor-pointer border-b border-gray200"
      >
        <Arrow
          direction={visible ? "down" : "right"}
          size={24}
          className="text-gray500 transition-all flex-shrink-0"
        />
        <h2 className={`${getFontSize()} text-black`}>
          <span className="text-lime500">{num}.</span> {title}
        </h2>
      </div>
      {visible && details && (
        <div className="flex w-full flex-col pt-6 pb-2">
          <p className="text-medium18 text-black leading-relaxed">
            {renderHighlightedContent(details)}
          </p>
        </div>
      )}
    </div>
  );
};
