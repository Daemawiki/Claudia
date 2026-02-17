"use client";
import { Arrow, Hide, Show } from "@/assets";
import React, { useState, useEffect, useRef, useId } from "react";

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
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [announcement, setAnnouncement] = useState<string>("");
  const inputRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const controlId = useId();

  const labelId = `register-input-label-${controlId}`;
  const listboxId = `register-input-listbox-${controlId}`;

  const dropdownItems = dropdownValue ?? [];
  const selectedIndex = dropdownItems.findIndex(
    item => String(item) === String(value),
  );

  const focusOption = (index: number) => {
    const boundedIndex = Math.max(0, Math.min(index, dropdownItems.length - 1));
    optionRefs.current[boundedIndex]?.focus();
    setActiveIndex(boundedIndex);
  };

  const openDropdown = (initialIndex?: number) => {
    if (!dropdownItems.length) {
      return;
    }

    const nextIndex =
      typeof initialIndex === "number"
        ? initialIndex
        : selectedIndex >= 0
          ? selectedIndex
          : 0;

    setDropdownOpen(true);
    setActiveIndex(nextIndex);
    setAnnouncement("옵션 목록이 열렸습니다.");
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    setActiveIndex(-1);
    setAnnouncement("옵션 목록이 닫혔습니다.");
  };

  // 드롭다운에서 선택한 값을 업데이트하는 함수
  const handleDropdownChange = (item: string | number) => {
    if (onChange) {
      onChange(item); // 선택된 값을 직접 전달
    }
    setAnnouncement(`${item}이(가) 선택되었습니다.`);
    closeDropdown();
    triggerRef.current?.focus();
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!dropdownItems.length) {
      return;
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (dropdownOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!dropdownOpen) {
        openDropdown(selectedIndex >= 0 ? selectedIndex : 0);
        return;
      }
      focusOption(activeIndex + 1);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!dropdownOpen) {
        openDropdown(
          selectedIndex >= 0 ? selectedIndex : dropdownItems.length - 1,
        );
        return;
      }
      focusOption(activeIndex - 1);
      return;
    }

    if (e.key === "Escape" && dropdownOpen) {
      e.preventDefault();
      closeDropdown();
    }
  };

  const handleOptionKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
    item: string | number,
  ) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusOption(index + 1);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      focusOption(index - 1);
      return;
    }

    if (e.key === "Home") {
      e.preventDefault();
      focusOption(0);
      return;
    }

    if (e.key === "End") {
      e.preventDefault();
      focusOption(dropdownItems.length - 1);
      return;
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDropdownChange(item);
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeDropdown();
      triggerRef.current?.focus();
    }
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!dropdownOpen) {
      return;
    }

    const nextIndex = selectedIndex >= 0 ? selectedIndex : 0;
    setActiveIndex(nextIndex);
    optionRefs.current[nextIndex]?.focus();
  }, [dropdownOpen, selectedIndex]);

  const inputType = {
    email: (
      <div className="flex px-3">
        {/* <div className="flex rounded-lg border border-gray100 bg-gray50 px-2.5 py-1.5 text-gray600 text-medium18">
          @dsm.hs.kr
        </div> */}
      </div>
    ),
    password: (
      <button
        type="button"
        aria-label="비밀번호 표시 전환"
        aria-pressed={!hidePassword}
        onClick={() => setHidePassword(!hidePassword)}
        className="flex p-3 cursor-pointer text-gray500"
      >
        {hidePassword ? <Hide /> : <Show />}
      </button>
    ),
    text: <></>,
    dropdown: (
      <div className="p-3 flex">
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
          <span id={labelId}>{title}</span>
        </div>
        {type === "dropdown" ? (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => {
              if (dropdownOpen) {
                closeDropdown();
              } else {
                openDropdown();
              }
            }}
            onKeyDown={handleTriggerKeyDown}
            role="combobox"
            aria-labelledby={labelId}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
            aria-controls={listboxId}
            aria-activedescendant={
              dropdownOpen && activeIndex >= 0
                ? `${listboxId}-option-${activeIndex}`
                : undefined
            }
            className="gap-2 flex w-full items-center"
          >
            <span className="w-full flex p-3 text-medium20 text-gray800 text-left">
              {value || placeholder}
            </span>
            {inputType[type]}
          </button>
        ) : (
          <div className="gap-2 flex w-full items-center">
            <input
              autoFocus={autoFocus}
              value={value}
              onChange={e => onChange?.(e.target.value)}
              type={hidePassword && type === "password" ? "password" : "text"}
              placeholder={placeholder}
              className="w-full p-3 placeholder:text-gray300 text-medium20"
            />
            {inputType[type]}
          </div>
        )}
      </div>

      <div className="text-medium14 text-red500 relative">
        {error}
        {type === "dropdown" && dropdownOpen && (
          <div
            id={listboxId}
            role="listbox"
            aria-labelledby={labelId}
            className="top-0 z-10 rounded-lg bg-white border border-gray200 shadow-lg overflow-y-scroll absolute w-[432px] h-36 flex flex-col"
          >
            {dropdownItems.map((item, index) => (
              <button
                type="button"
                ref={element => {
                  optionRefs.current[index] = element;
                }}
                key={index}
                onClick={() => handleDropdownChange(item)}
                onKeyDown={e => handleOptionKeyDown(e, index, item)}
                onFocus={() => setActiveIndex(index)}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={String(value) === String(item)}
                className="w-full py-3 px-4 border-b border-b-gray100 text-black text-medium18 hover:bg-gray50 text-left"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>
    </div>
  );
};
