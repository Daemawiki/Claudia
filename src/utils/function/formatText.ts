const formatText = (text: string) => {
  // 각 HTML 태그에 대응하는 스타일을 정의합니다.

  interface StylesType {
    strong: string;
    i: string;
    u: string;
    s: string;
  }

  const styles: StylesType = {
    strong: "font-weight: bold;",
    i: "font-style: italic;",
    u: "text-decoration: underline;",
    s: "text-decoration: line-through;",
  };

  const formattedText = text.replaceAll(
    /<(\/?)(strong|i|u|s|p)>(.*?)<\/\2>/g,
    (match, p1, p2, p3) => {
      // p1은 시작 태그(`<`)의 슬래시를 나타내며, p2는 실제 태그 이름을 나타냅니다.
      // 시작 태그인 경우 스타일을 적용합니다.
      if (p1 === "") {
        if (p2 === "p") {
          return `${p3}<br /></${p2}>`;
        } else {
          return `<span style="${(styles as any)[p2]}">${p3}</span>`;
        }
      }
      // 종료 태그인 경우 스타일을 초기화합니다.
      else {
        if (p2 === "p") {
          return "";
        } else {
          return "</span>";
        }
      }
    },
  );

  return formattedText;
};

export default formatText;
