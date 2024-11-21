"use client";
import {
  Arrow,
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
import { ChangeEvent, useState, Fragment } from "react";

interface Button {
  name: string;
  svg: JSX.Element;
}

interface SubSubSection {
  id: string;
  content: React.ReactNode[];
  numberPart: string;
  textPart: string;
}

interface SubSection {
  id: string;
  content: React.ReactNode[];
  subsubsections: SubSubSection[];
  numberPart: string;
  textPart: string;
}

interface MainSection {
  id: string;
  content: React.ReactNode[];
  subsections: SubSection[];
  numberPart: string;
  textPart: string;
}

interface TextFormatterProps {
  text: string;
  numberColor?: string;
}

interface CollapsedSections {
  [key: string]: boolean;
}

const TextFormatter: React.FC<TextFormatterProps> = ({ text }) => {
  const [collapsedSections, setCollapsedSections] = useState<CollapsedSections>(
    {},
  );

  const toggleSection = (sectionId: string): void => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const processFormatting = (str: string): (string | JSX.Element)[] => {
    if (!str) return [];

    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let counter = 0;

    const pattern =
      /(\*\*[^*]+\*\*|~~[^~]+~~|--[^-]+--|(?:\[([^\]]+)\]\(([^)]+)\)))/g;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(str.slice(lastIndex, match.index));
      }

      const [fullMatch] = match;
      if (fullMatch.startsWith("[") && fullMatch.includes("](")) {
        const linkMatch = /\[([^\]]+)\]\(([^)]+)\)/.exec(fullMatch);
        if (linkMatch) {
          const [, text, url] = linkMatch;
          parts.push(
            <a
              key={`link-${counter}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {text}
            </a>,
          );
        }
      } else if (fullMatch.startsWith("**") && fullMatch.endsWith("**")) {
        parts.push(<u key={`u-${counter}`}>{fullMatch.slice(2, -2)}</u>);
      } else if (fullMatch.startsWith("~~") && fullMatch.endsWith("~~")) {
        parts.push(<i key={`i-${counter}`}>{fullMatch.slice(2, -2)}</i>);
      } else if (fullMatch.startsWith("--") && fullMatch.endsWith("--")) {
        parts.push(<del key={`del-${counter}`}>{fullMatch.slice(2, -2)}</del>);
      }

      lastIndex = pattern.lastIndex;
      counter++;
    }

    if (lastIndex < str.length) {
      parts.push(str.slice(lastIndex));
    }

    return parts;
  };

  const formatText = (input: string): JSX.Element[] | string => {
    if (!input) return "";

    const parseDocument = (lines: string[]): MainSection[] => {
      const sections: MainSection[] = [];
      let currentMainSection: MainSection | null = null;
      let currentSubSection: SubSection | null = null;
      let currentSubSubSection: SubSubSection | null = null;

      let level1Counter = 0;
      let level2Counter = 0;
      let level3Counter = 0;

      lines.forEach((line, index) => {
        const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);

        if (headingMatch) {
          const level = headingMatch[1].length;
          const text = headingMatch[2];

          if (level === 1) {
            if (currentMainSection) {
              sections.push(currentMainSection);
            }

            level1Counter++;
            level2Counter = 0;
            level3Counter = 0;

            currentMainSection = {
              id: `section-${level1Counter}`,
              numberPart: `${level1Counter}. `,
              textPart: text,
              subsections: [],
              content: [],
            };
            currentSubSection = null;
            currentSubSubSection = null;
          } else if (level === 2) {
            level2Counter++;
            level3Counter = 0;

            currentSubSection = {
              id: `section-${level1Counter}-${level2Counter}`,
              numberPart: `${level1Counter}.${level2Counter}. `,
              textPart: text,
              subsubsections: [],
              content: [],
            };
            if (currentMainSection) {
              currentMainSection.subsections.push(currentSubSection);
            }
            currentSubSubSection = null;
          } else if (level === 3) {
            level3Counter++;

            currentSubSubSection = {
              id: `section-${level1Counter}-${level2Counter}-${level3Counter}`,
              numberPart: `${level1Counter}.${level2Counter}.${level3Counter}.`,
              textPart: text,
              content: [],
            };
            if (currentSubSection) {
              currentSubSection.subsubsections.push(currentSubSubSection);
            }
          }
        } else if (line.trim() !== "") {
          const content = (
            <div key={`text-${index}`} className="mx-5 mt-3">
              {processFormatting(line)}
            </div>
          );
          if (currentSubSubSection) {
            currentSubSubSection.content.push(content);
          } else if (currentSubSection) {
            currentSubSection.content.push(content);
          } else if (currentMainSection) {
            currentMainSection.content.push(content);
          }
        }
      });

      if (currentMainSection) {
        sections.push(currentMainSection);
      }

      return sections;
    };

    const sections = parseDocument(input.split("\n"));

    return sections.map(section => (
      <div key={section.id} className="mb-4">
        <div
          className="flex items-center cursor-pointer text-medium36 font-bold"
          onClick={() => toggleSection(section.id)}
        >
          {collapsedSections[section.id] ? (
            <Arrow size={30} direction="right" />
          ) : (
            <Arrow size={30} direction="down" />
          )}
          <span>
            {section.numberPart && (
              <span className={`text-lime500 mr-1`}>{section.numberPart}</span>
            )}
            {processFormatting(section.textPart)}
          </span>
        </div>
        <hr />
        <div
          className={`${collapsedSections[section.id] ? "hidden" : "block"}`}
        >
          {section.content}
          {section.subsections.map(subsection => (
            <div key={subsection.id}>
              <div
                className="flex items-center cursor-pointer text-medium36 font-bold mt-2"
                onClick={e => {
                  e.stopPropagation();
                  toggleSection(subsection.id);
                }}
              >
                {collapsedSections[subsection.id] ? (
                  <Arrow size={30} direction="right" />
                ) : (
                  <Arrow size={30} direction="down" />
                )}
                <span>
                  {subsection.numberPart && (
                    <span className={`text-lime500 mr-1`}>
                      {subsection.numberPart}
                    </span>
                  )}
                  {processFormatting(subsection.textPart)}
                </span>
              </div>
              <hr />
              <div
                className={`${collapsedSections[subsection.id] ? "hidden" : "block"}`}
              >
                {subsection.content}
                {subsection.subsubsections.map(subsubsection => (
                  <div key={subsubsection.id}>
                    <div
                      className="flex items-center cursor-pointer text-medium36 font-bold mt-2"
                      onClick={e => {
                        e.stopPropagation();
                        toggleSection(subsubsection.id);
                      }}
                    >
                      {collapsedSections[subsubsection.id] ? (
                        <Arrow size={30} direction="right" />
                      ) : (
                        <Arrow size={30} direction="down" />
                      )}
                      <span>
                        {subsubsection.numberPart && (
                          <span className={`text-lime500 mr-1`}>
                            {subsubsection.numberPart}
                          </span>
                        )}
                        {processFormatting(subsubsection.textPart)}
                      </span>
                    </div>
                    <hr />
                    <div
                      className={`ml-8 ${collapsedSections[subsubsection.id] ? "hidden" : "block"}`}
                    >
                      {subsubsection.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return <div className="space-y-1">{formatText(text)}</div>;
};

const Editor = () => {
  const [rawText, setRawText] = useState("");

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
