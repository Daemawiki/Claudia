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

interface Button {
  regex: RegExp;
  svg: React.ReactNode;
}

interface ButtonList {
  h1: Button;
  h2: Button;
  h3: Button;
  common: Button;
  bold: Button;
  italic: Button;
  strikethrough: Button;
  underLine: Button;
  href: Button;
}

const Editor = () => {
  const buttonList: ButtonList = {
    h1: {
      regex: /^# ([ㄱ-ㅎㅏ-ㅣ가-힣\w\s]*)/,
      svg: <Heading1 size={28} />,
    },
    h2: {
      regex: /^## ([ㄱ-ㅎㅏ-ㅣ가-힣\w\s]*)/,
      svg: <Heading2 size={28} />,
    },
    h3: {
      regex: /^### ([ㄱ-ㅎㅏ-ㅣ가-힣\w\s]*)/,
      svg: <Heading3 size={28} />,
    },
    common: {
      regex: /([\s\S])*/,
      svg: <Text size={28} className="text-gray500" />,
    },
    bold: {
      regex: /^\*\*([ㄱ-ㅎ가-힣\w\s]*)\*\*$/g,
      svg: <Text_Bold size={28} className="text-gray500" />,
    },
    italic: {
      regex: /^~~([ㄱ-ㅎ가-힣\w\s]*)~~$/g,
      svg: <Text_Italic size={28} className="text-lime500" />,
    },
    strikethrough: {
      regex: /^--([ㄱ-ㅎ가-힣\w\s]*)--$/g,
      svg: <Text_Strikethrough size={28} className="text-gray500" />,
    },
    underLine: {
      regex: /^__([ㄱ-ㅎ가-힣\w\s]*)__$/g,
      svg: <Text_Underline size={28} className="text-gray500" />,
    },
    href: {
      regex: /\[([ㄱ-ㅎ가-힣\w\W\s])*\]\(([ㄱ-ㅎ가-힣\w\W])*\)/g,
      svg: <Text_Link size={28} className="text-gray500" />,
    },
  };

  return (
    <div className="flex flex-col flex-grow h-full relative">
      <div className="flex px-12 py-3 justify-between">
        <div className="flex gap-2">
          {Object.keys(buttonList).map(key => (
            <div className="flex p-[6px] cursor-pointer">
              {buttonList[key as keyof ButtonList].svg}
            </div>
          ))}
        </div>
        <div className="p-2 bg-gray50 border rounded-full border-gray200">
          <Help className="text-gray400" size={24} />
        </div>
      </div>
      <div className="flex h-full px-12 py-6">
        <textarea className="resize-none overflow-y-scroll w-full h-full"></textarea>
      </div>
    </div>
  );
};

export default Editor;
