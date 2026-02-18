import { Search } from "@/assets";
import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
}

function SearchInput({ placeholder, value, onChange, onSubmit }: InputProps) {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex focus-within:bg-white min-h-9 transition-all px-3 py-2 items-center w-full gap-2 overflow-hidden border rounded-md bg-gray50 border-gray200"
    >
      <input
        value={value}
        onChange={event => onChange?.(event.target.value)}
        placeholder={placeholder}
        className="text-black placeholder:text-gray400 bg-transparent text-medium16 w-full"
      />
      <button type="submit" className="flex">
        <Search size={20} className="text-gray400" />
      </button>
    </form>
  );
}

SearchInput.defaultProps = {
  placeholder: "",
  value: "",
  onChange: undefined,
  onSubmit: undefined,
};

export { SearchInput };
export default SearchInput;
