export const mainPageIndex: IndexItem[] = [
  { index: "1", title: "소개말" },
  {
    index: "2",
    title: "사용법",
    children: [
      {
        index: "2.1",
        title: "추가 방법",
      },
      {
        index: "2.2",
        title: "수정 방법",
      },
      {
        index: "2.3",
        title: "검색 방법",
      },
    ],
  },
];

export interface IndexItem {
  index: string;
  title: string;
  children?: IndexItem[];
}
