import { Search } from "@/assets";
import React from "react";

interface InputProps {
  placeholder?: string;
}

export const SearchInput = ({ placeholder }: InputProps) => {
  return (
    <div className="flex min-h-10 w-full items-center gap-2 overflow-hidden rounded-md border border-gray200 bg-gray50 px-3 py-2 transition-all focus-within:bg-white">
      <input
        placeholder={placeholder}
        className="w-full bg-transparent text-medium16 text-black placeholder:text-gray400"
      />
      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-gray200 bg-white text-gray500">
        <Search size={18} />
      </div>
    </div>
  );
};
