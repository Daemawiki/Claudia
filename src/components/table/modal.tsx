"use client";
import { useState, useRef, useEffect } from "react";

interface TableModalProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  close: () => void;
}

const TableModal = ({ state, setState, close }: TableModalProps) => {
  const moreRef = useRef<HTMLDivElement>(null);
  const outsideClickHandler = (e: MouseEvent) => {
    if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, []);
  return (
    <div className="flex flex-col border-[1px]" ref={moreRef}>
      <div className="px-2" onClick={() => setState("add")}>
        <span>추가</span>
      </div>
      <div className="border-t-[1px] px-2" onClick={() => setState("edit")}>
        <span>수정</span>
      </div>
      <div className="border-t-[1px] px-2" onClick={() => setState("del")}>
        <span className="text-[#ff0000]">삭제</span>
      </div>
    </div>
  );
};

export default TableModal;
