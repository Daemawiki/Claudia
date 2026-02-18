const formatText = (text: string) => {
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

  const isStyleTag = (tag: string): tag is keyof StylesType =>
    tag === "strong" || tag === "i" || tag === "u" || tag === "s";

  const formattedText = text.replaceAll(
    /<(\/?)(strong|i|u|s|p)>(.*?)<\/\2>/g,
    (match: string, p1: string, p2: string, p3: string) => {
      if (p1 === "" && p2 === "p") {
        return `${p3}<br /></${p2}>`;
      }

      if (p1 === "") {
        if (isStyleTag(p2)) {
          return `<span style="${styles[p2]}">${p3}</span>`;
        }

        return match;
      }

      if (p2 === "p") return "";
      return "</span>";
    },
  );

  return formattedText;
};

export default formatText;
