const formatText = (text: string) => {
  // 각 HTML 태그에 대응하는 스타일을 정의합니다.

  interface StylesType {
    b: string;
    i: string;
    u: string;
    s: string;
  }

  const styles: StylesType = {
    b: "font-weight: bold;",
    i: "font-style: italic;",
    u: "text-decoration: underline;",
    s: "text-decoration: line-through;",
  };

  // HTML 태그를 정규식을 사용하여 찾아냅니다.
  const formattedText = text.replace(/<(\/?)(b|i|u|s)>/g, (match, p1, p2) => {
    // p1은 시작 태그(`<`)의 슬래시를 나타내며, p2는 실제 태그 이름을 나타냅니다.
    // 시작 태그인 경우 스타일을 적용합니다.
    if (p1 === "") {
      return `<span style="${(styles as any)[p2]}">`;
    }
    // 종료 태그인 경우 스타일을 초기화합니다.
    else {
      return "</span>";
    }
  });

  return formattedText;
};

export default formatText;
