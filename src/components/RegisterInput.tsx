"use client";
import { Arrow, Hide, Show } from "@/assets";
import {
  formFieldContainerClass,
  formFieldDropdownTextClass,
  formFieldErrorClass,
  formFieldInputClass,
  formFieldInputRowClass,
  formFieldLabelClass,
  formFieldWrapperClass,
} from "@/constant/formStyle";
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
        className="flex items-center justify-center px-3 text-gray500 cursor-pointer"
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
    <div className={formFieldContainerClass} ref={inputRef}>
      <div className={formFieldWrapperClass}>
        <div className={formFieldLabelClass}>{title}</div>
        <div
          onClick={() => type === "dropdown" && setDropdownOpen(!dropdownOpen)}
          className={formFieldInputRowClass}
        >
          {type === "dropdown" ? (
            <div className={formFieldDropdownTextClass}>
              {value || placeholder}
            </div>
          ) : (
            <input
              autoFocus={autoFocus}
              value={value}
              onChange={e => onChange?.(e.target.value)}
              type={hidePassword && type === "password" ? "password" : "text"}
              placeholder={placeholder}
              className={formFieldInputClass}
            />
          )}
          {inputType[type]}
        </div>
        {type === "dropdown" && dropdownOpen && (
          <div className="absolute left-0 right-0 top-full z-20 mt-1 flex max-h-36 flex-col overflow-y-scroll rounded-lg border border-gray200 bg-white shadow-lg">
            {dropdownValue?.map(item => (
              <button
                key={String(item)}
                type="button"
                onClick={() => handleDropdownChange(item)}
                className="w-full border-b border-b-gray100 px-4 py-3 text-left text-black text-medium18 hover:bg-gray50"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className={formFieldErrorClass}>{error}</p>
    </div>
  );
};
