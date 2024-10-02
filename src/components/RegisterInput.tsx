"use client";
import { Arrow, Hide, Show } from "@/app/assets";
import React, { useState, useEffect, useRef } from "react";

interface InputProps {
  title?: string;
  placeholder?: string;
  error?: string;
  type?: "email" | "password" | "text" | "dropdown";
  dropdownValue?: string[];
}

export const RegisterInput = ({
  title,
  placeholder,
  type = "text",
  error,
  dropdownValue,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [dropdownChoose, setDropdownChoose] = useState<string>(
    placeholder || "",
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  const inputType = {
    email: (
      <div className="flex px-3">
        <div className="flex rounded-lg border border-gray100 bg-gray50 px-2.5 py-1.5 text-gray600 text-medium18">
          @dsm.hs.kr
        </div>
      </div>
    ),
    password: (
      <div
        onClick={() => setShowPassword(!showPassword)}
        className="flex p-3 cursor-pointer text-gray500"
      >
        {showPassword ? <Hide /> : <Show />}
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

  const handleDropdownClick = (item: string) => {
    setDropdownChoose(item);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="flex flex-col w-full gap-2" ref={dropdownRef}>
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
              {dropdownChoose || placeholder}
            </div>
          ) : (
            <input
              type={showPassword && type === "password" ? "password" : "text"}
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
                onClick={() => handleDropdownClick(item)}
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