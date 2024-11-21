"use client";
import {
  Heading1,
  Heading2,
  Heading3,
  Help,
  Text,
  Text_Bold,
  Text_Italic,
  Text_Link,
  Text_Strikethrough,
  Text_Underline,
} from "@/app/assets";
import { ChangeEvent, useState, useEffect } from "react";
import TextFormatter from "@/components/TextFormatter";

interface Button {
  name: string;
  svg: JSX.Element;
}

interface PropsType {
  setIndex: (index: Array<Index>) => void;
}

interface Index {
  num: string;
  title: string;
}

const extractIndex = (input: string): Array<Index> => {
  const lines = input.split("\n");
  const indexList: Array<Index> = [];

  let level1Counter = 0;
  let level2Counter = 0;
  let level3Counter = 0;

  lines.forEach(line => {
    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);

    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];

      if (level === 1) {
        level1Counter++;
        level2Counter = 0;
        level3Counter = 0;

        indexList.push({
          num: `${level1Counter}`,
          title: text,
        });
      } else if (level === 2) {
        level2Counter++;
        level3Counter = 0;

        indexList.push({
          num: `${level1Counter}.${level2Counter}`,
          title: text,
        });
      } else if (level === 3) {
        level3Counter++;

        indexList.push({
          num: `${level1Counter}.${level2Counter}.${level3Counter}`,
          title: text,
        });
      }
    }
  });

  return indexList;
};

const Editor = ({ setIndex }: PropsType) => {
  const [rawText, setRawText] = useState("");

  useEffect(() => {
    const newIndex = extractIndex(rawText);
    setIndex(newIndex);
  }, [rawText]);

  const buttonList: Button[] = [
    {
      name: "h1",
      svg: <Heading1 size={28} />,
    },
    {
      name: "h2",
      svg: <Heading2 size={28} />,
    },
    {
      name: "h3",
      svg: <Heading3 size={28} />,
    },
    {
      name: "bold",
      svg: <Text_Bold size={28} className="text-gray500" />,
    },
    {
      name: "italic",
      svg: <Text_Italic size={28} className="text-lime500" />,
    },
    {
      name: "strikethrough",
      svg: <Text_Strikethrough size={28} className="text-gray500" />,
    },
    {
      name: "underLine",
      svg: <Text_Underline size={28} className="text-gray500" />,
    },
    {
      name: "href",
      svg: <Text_Link size={28} className="text-gray500" />,
    },
    {
      name: "common",
      svg: <Text size={28} className="text-gray500" />,
    },
  ];

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRawText(e.target.value);
  };

  return (
    <div className="flex flex-col flex-grow h-full relative">
      <div className="flex px-12 py-3 justify-between">
        <div className="flex gap-2">
          {buttonList.map(button => (
            <div className="flex p-[6px] cursor-pointer" key={button.name}>
              {button.svg}
            </div>
          ))}
        </div>
        <div className="p-2 bg-gray50 border rounded-full border-gray200">
          <Help className="text-gray400" size={24} />
        </div>
      </div>
      <div className="flex h-full px-12 py-6 relative">
        <textarea
          className="resize-none overflow-y-scroll h-full flex-grow w-1/2"
          value={rawText}
          onChange={handleOnChange}
        ></textarea>
        <div className="flex-grow sm:hidden w-1/2 flex flex-col">
          <TextFormatter text={rawText} />
        </div>
      </div>
    </div>
  );
};

export default Editor;
