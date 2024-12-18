"use client";
import { Arrow, Hide, Show } from "@/assets";
import React, { useState, useEffect, useRef } from "react";

interface InputProps {
  title?: string;
  placeholder?: string;
  error?: string;
  value?: string | number;
  type?: "email" | "password" | "text" | "dropdown";
  dropdownValue?: string[] | number[];
  onChange?: (...e: any[]) => void;
  autoFocus?: boolean;
}

export const RegisterInput = ({
  title,
  placeholder,
  type = "text",
  error,
  value,
  onChange,
  dropdownValue,
  autoFocus,
}: InputProps) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true); // 비밀번호 숨기기
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // 드롭다운 열기
  const inputRef = useRef<HTMLDivElement>(null);

  // 드롭다운에서 선택한 값을 업데이트하는 함수
  const handleDropdownChange = (item: string | number) => {
    if (onChange) {
      onChange(item); // 선택된 값을 직접 전달
    }
    setDropdownOpen(false); // 드롭다운 닫기
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const inputType = {
    email: (
      <div className="flex px-3">
        {/* <div className="flex rounded-lg border border-gray100 bg-gray50 px-2.5 py-1.5 text-gray600 text-medium18">
          @dsm.hs.kr
        </div> */}
      </div>
    ),
    password: (
      <div
        onClick={() => setHidePassword(!hidePassword)}
        className="flex p-3 cursor-pointer text-gray500"
      >
        {hidePassword ? <Hide /> : <Show />}
      </div>
    ),
    text: <></>,
    dropdown: (
      <div className="p-3 flex cursor-pointer">
        <Arrow
          className="text-gray600 transition-all"
          direction={dropdownOpen ? "up" : "down"}
        />
      </div>
    ),
  };

  return (
    <div className="flex flex-col w-full gap-2" ref={inputRef}>
      <div className="rounded-lg focus-within:border-lime500 overflow-hidden flex flex-col w-full border border-gray200">
        <div className="w-full px-3 pt-3 flex text-gray600 text-semibold16">
          {title}
        </div>
        <div
          onClick={() => type === "dropdown" && setDropdownOpen(!dropdownOpen)}
          className="gap-2 flex w-full items-center"
        >
          {type === "dropdown" ? (
            <div className="w-full cursor-pointer flex p-3 text-medium20 text-gray800">
              {value || placeholder}
            </div>
          ) : (
            <input
              autoFocus={autoFocus}
              value={value}
              onChange={e => onChange?.(e.target.value)}
              type={hidePassword && type === "password" ? "password" : "text"}
              placeholder={placeholder}
              className="w-full p-3 placeholder:text-gray300 text-medium20"
            />
          )}
          {inputType[type]}
        </div>
      </div>

      <p className="text-medium14 text-red500 relative">
        {error}
        {type === "dropdown" && dropdownOpen && (
          <div className="top-0 z-10 rounded-lg bg-white border border-gray200 shadow-lg overflow-y-scroll absolute w-[432px] h-36 flex flex-col">
            {dropdownValue?.map((item, index) => (
              <div
                key={index}
                onClick={() => handleDropdownChange(item)}
                className="w-full py-3 px-4 border-b border-b-gray100 text-black text-medium18 hover:bg-gray50"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </p>
    </div>
  );
};
