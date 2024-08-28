import { Search } from "@/app/assets";
import React from "react";

interface InputProps {
  placeholder?: string;
}

export const SearchInput = ({ placeholder }: InputProps) => {
  return (
    <div className="flex focus-within:bg-white transition-all px-3 py-2 items-center justify-between w-full gap-2 overflow-hidden border rounded-md bg-gray50 border-gray200">
      <input
        placeholder={placeholder}
        className="text-black placeholder:text-gray400 bg-transparent text-medium16 w-full"
      />
      <Search size={20} className="text-gray400" />
    </div>
  );
};
