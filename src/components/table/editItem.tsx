"use client";
import { Info } from "@/constant/documentType";
import formatText from "@/utils/function/formatText";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["link", "image"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "indent",
  "link",
  "image",
];

interface EditItemProps {
  defaultValue: string;
  title: string;
  index?: number;
  setValue: React.Dispatch<React.SetStateAction<Info[] | undefined>>;
}

export default function EditItem({
  defaultValue,
  title,
  index,
  setValue,
}: EditItemProps) {
  const [newTitle, setNewTitle] = useState<string>(title);
  const [content, setContent] = useState<string>(formatText(defaultValue));

  const setValue2 = () => {
    if (index !== undefined && index !== null) {
      setValue(prev => {
        if (prev) {
          prev[index] = {
            title: newTitle,
            content: content,
          };
        }
        return prev;
      });
    } else {
      setValue([{ title: newTitle, content: content }]);
    }
  };

  useEffect(() => {
    setValue2();
  }, [newTitle, content]);

  return (
    <div className="flex flex-col min-w-[150px] min-h-[100px] gap-2">
      <input
        className="h-[35px] outline-none border-[1px] border-black rounded-lg px-[10px] text-[#93df3f]"
        defaultValue={title}
        size={8}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewTitle(e.currentTarget.value);
        }}
      />
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        onChange={content => {
          setContent(content);
        }}
        theme="bubble"
        defaultValue={content}
        className="border-black border-[1px] rounded-lg grow"
      />
    </div>
  );
}
