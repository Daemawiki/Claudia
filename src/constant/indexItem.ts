export const mainPageIndex: IndexItem[] = [
  {
    index: "1",
    title: "소개말",
    content:
      "본 위키는 대덕소프트웨어마이스터고등학교 학생들에 대한 정보를 기술한 위키입니다.\n \
      대마고 학생이라면 모두 수정할 수 있으며 문서 내부에 작성된 내용에 대한 저작권 및 모든 책임은 작성자에게 있습니다.\n \
      대마위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.",
  },
  {
    index: "2",
    title: "사용법",
    content: "대마위키 사용법",
  },
  {
    index: "2.1",
    title: "추가 방법",
    content: "이렇게 추가",
  },
  {
    index: "2.2",
    title: "수정 방법",
    content:
      "각 페이지의 문서는 모두 소제목의 오른쪽의 연필 버튼을 눌러 수정할 수 있습니다. \
      텍스트 에디터를 사용하여 글자를 <b>굵게</b> <i>rldnfdjwlrp</i> <u>밑줄이 쳐지게</u> <s>가로선이 그어지게</s> 할 수 있습니다. ",
  },
  {
    index: "2.3",
    title: "검색 방법",
    content: "이렇게 검색",
  },
];

export interface IndexItem {
  index: string;
  title: string;
  content: string;
}
