"use client";
import { useInput } from "@/hooks/useInput";
import Image from "next/image";
import { useState } from "react";
import Button from "../button";

interface InputProps {
  title: string;
  width: number | "full";
  height?: number | "full";
  buttonText?: string;
  isPassword?: boolean;
  isEmail?: true;
  placeholder?: string;
  buttonFontSize?: number;
  buttonWidth?: number;
  buttonHeight?: number;
  buttonRounded?: number;
  buttonStyle?: React.CSSProperties;
  onButtonClick?: () => void;
}

const Input = ({
  title,
  width,
  height,
  buttonText,
  isPassword,
  placeholder,
  buttonFontSize = 16,
  buttonWidth = 91,
  buttonHeight = 32,
  buttonRounded = 16,
  buttonStyle = {},
  onButtonClick,
}: InputProps) => {
  const [visible, setVisible] = useState<boolean>(
    isPassword ? !isPassword : true,
  );

  const { form, setForm, onChange } = useInput("");

  const toggleVisibility = () => {
    setVisible(prevVisible => !prevVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isPassword) {
      setForm(value.replace(/[^a-zA-Z0-9!@#$%]/g, ""));
    }
    onChange(e);
  };

  return (
    <div className="flex gap-[10px] flex-col">
      <span className="font-bold">{title}</span>
      <div className="relative flex items-center">
        <input
          type={visible ? "text" : "password"}
          value={form}
          onChange={handleChange}
          placeholder={placeholder}
          style={{
            width: width === "full" ? "100%" : `${width}px`,
            height: height === "full" ? "100%" : `${height}px`,
          }}
          className={`border-black border-[1px] outline-none rounded-2xl p-[10px]`}
        />
        {isPassword && (
          <button className="absolute right-[10px]" onClick={toggleVisibility}>
            <Image
              src={`/images/${visible ? "show" : "hide"}.svg`}
              alt=""
              width={24}
              height={24}
            />
          </button>
        )}
        {buttonText && (
          <Button
            text={buttonText}
            fontSize={buttonFontSize}
            width={buttonWidth}
            height={buttonHeight}
            rounded={buttonRounded}
            style={buttonStyle}
            onClick={onButtonClick}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
