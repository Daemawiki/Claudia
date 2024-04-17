"use client";
import React, { useState } from "react";
import { Arrow_Down, Hide, Show } from "../assets";

interface PropsType {
  inputTitle: string;
  placeholder?: string;
  password?: boolean;
  emailform?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  array?: string[];
  defaultSelect?: string;
  onClick?: () => void;
  onSelectItem?: any;
  error?: string;
}

export function LoginInput({
  inputTitle = "",
  placeholder = "",
  password = false,
  emailform = false,
  value,
  maxLength,
  onChange,
  error,
  onClick,
}: PropsType) {
  const [visible, setVisible] = useState<boolean>(false);

  const visiblePassword = () => {
    setVisible(!visible);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div
        onClick={onClick}
        className={`${error ? "border-red-500" : "border-gray-200"} focus-within:border-lime-400 w-full rounded-lg border bg-white flex flex-col p-3`}
      >
        <p className="text-gray-600 font-semibold text-base">{inputTitle}</p>
        <div className="w-full h-9 items-end flex gap-4">
          <input
            maxLength={maxLength}
            value={value}
            type={password ? (visible ? "text" : "password") : "text"}
            onChange={onChange}
            className="w-full text-xl font-medium text-gray-800 placeholder:text-gray-300 placeholder:font-semibold placeholder:text-xl"
            placeholder={placeholder}
          />
          {password && (
            <div className="flex">
              {visible ? (
                <Show onClick={visiblePassword} className="text-gray-500" />
              ) : (
                <Hide onClick={visiblePassword} className="text-gray-500" />
              )}
            </div>
          )}
          {emailform && (
            <div className="rounded-lg text-gray-600 text-lg px-2.5 py-1 bg-gray-50 border border-gray-100 w-fit">
              @dsm.hs.kr
            </div>
          )}
        </div>
      </div>
      <p className="font-medium text-sm text-red-500">{error}</p>
    </div>
  );
}

export function LoginDropdown({
  inputTitle = "",
  defaultSelect,
  array,
  onSelectItem,
  error,
}: PropsType) {
  const [click, setClick] = useState<boolean>(false);

  const handleClickItem = (item: string) => {
    setClick(false);
    onSelectItem(item);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className={`${error ? "border-red-500" : "border-gray-200"} w-full rounded-lg group relative ro unded-lg border flex flex-col p-3`}
      >
        <p className="text-gray-600 font-semibold text-base">{inputTitle}</p>
        <div onClick={handleClick} className="w-full h-9 items-end flex gap-4">
          <p className="text-xl w-full font-medium">{defaultSelect}</p>
          <Arrow_Down
            size={28}
            className={`text-gray-500 ${click ? "rotate-180" : ""}`}
          />
        </div>
        {click && (
          <ul className="flex z-40 flex-col left-0 border border-gray-200 absolute mt-[80px] rounded-lg w-full h-[140px] shadow-lg bg-white overflow-y-auto">
            {array &&
              array.map((item, index) => (
                <li
                  onClick={() => handleClickItem(item)}
                  key={index}
                  className="py-2 border-b border-gray-100 px-4 hover:bg-gray-100 bg-white whitespace-nowrap"
                >
                  {item}
                </li>
              ))}
          </ul>
        )}
      </div>
      <p className="font-medium text-sm text-red-500">{error}</p>
    </div>
  );
}
