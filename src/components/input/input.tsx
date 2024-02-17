"use client";
import { useInput } from "@/hooks/useInput";
import Image from "next/image";
import { useState } from "react";

interface InputProps {
  title: string;
  width: number | "full";
  height?: number | "full";
  buttonText?: string;
  isPassword?: true;
  isEmail?: true;
  placeholder?: string;
}

const Input = ({
  title,
  width,
  height,
  buttonText,
  isPassword,
  placeholder,
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
          className={`border-black border-[1px] outline-none w-${width} h-${height} rounded-2xl p-[10px]`}
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
      </div>

      {buttonText && <button>{buttonText}</button>}
    </div>
  );
};

export default Input;
