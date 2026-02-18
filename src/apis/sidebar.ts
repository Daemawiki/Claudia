export interface SidebarDocumentItem {
  id: string;
  title: string;
  minutesAgo: number;
  views: number;
}

const sidebarDocuments: SidebarDocumentItem[] = [
  { id: "1", title: "이태영", minutesAgo: 8, views: 7942 },
  { id: "2", title: "김승원", minutesAgo: 12, views: 6974 },
  { id: "3", title: "김어진", minutesAgo: 18, views: 5948 },
  { id: "4", title: "박지민", minutesAgo: 24, views: 5877 },
  { id: "5", title: "팀 DM", minutesAgo: 39, views: 4485 },
  { id: "6", title: "최선생", minutesAgo: 47, views: 1592 },
  { id: "7", title: "해커톤 빌드 실패", minutesAgo: 65, views: 1004 },
  { id: "8", title: "대마위키", minutesAgo: 78, views: 54 },
  { id: "9", title: "랜덤 문서 예시", minutesAgo: 92, views: 32 },
  { id: "10", title: "문서 편집 가이드", minutesAgo: 120, views: 3 },
];

const wait = <T>(value: T) =>
  new Promise<T>(resolve => {
    setTimeout(() => resolve(value), 140);
  });

export const fetchSidebarRecentDocuments = async () =>
  wait([...sidebarDocuments].sort((a, b) => a.minutesAgo - b.minutesAgo));

export const fetchSidebarPopularDocuments = async () =>
  wait([...sidebarDocuments].sort((a, b) => b.views - a.views));
