"use client";
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
  value: {
    title: string;
    content: string;
  };
}

export default function EditItem({
  defaultValue,
  title,
  value,
}: EditItemProps) {
  const [content, setContent] = useState<string>();
  useEffect(() => {
    console.log(content);
  }, [content]);
  const lines = defaultValue.split("\n");
  const formattedText = lines.map(item => `${item}<br />`);
  return (
    <div className="flex flex-col min-w-[150px] min-h-[100px] gap-2">
      <input
        className="h-[35px] outline-none border-[1px] border-black rounded-lg px-[10px] text-[#93df3f]"
        defaultValue={title}
        size={8}
      />
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        onChange={content => {
          setContent(content);
        }}
        theme="bubble"
        defaultValue={formattedText.join("")}
        className="border-black border-[1px] rounded-lg grow"
      />
    </div>
  );
}
