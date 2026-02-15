import { WikiCategory, WikiDocumentSummary } from "@/interfaces/wiki";

const categoryLabelMap: Record<WikiCategory, string> = {
  student: "학생",
  teacher: "선생님",
  accident: "사건/사고",
  club: "동아리",
};

const popularDocuments: WikiDocumentSummary[] = [
  {
    id: "lee-taeyoung",
    title: "이태영",
    category: "student",
    editor: "Daybreak",
    updatedAt: "2024.08.01 07:50",
    views: 210,
  },
  {
    id: "kim-seungwon",
    title: "김승원",
    category: "student",
    editor: "박지민",
    updatedAt: "2026-02-07 09:30",
    views: 184,
  },
  {
    id: "kim-eojin",
    title: "김어진",
    category: "student",
    editor: "김승원",
    updatedAt: "2026-02-05 18:15",
    views: 150,
  },
  {
    id: "teacher-choi",
    title: "최선생",
    category: "teacher",
    editor: "김어진",
    updatedAt: "2026-02-04 11:40",
    views: 132,
  },
  {
    id: "accident-2025-hackathon",
    title: "2025 해커톤 빌드 실패",
    category: "accident",
    editor: "박지민",
    updatedAt: "2026-02-03 20:00",
    views: 128,
  },
];

const wait = <T>(value: T) =>
  new Promise<T>(resolve => {
    setTimeout(() => resolve(value), 120);
  });

export const wikiCategoryLabel = (category: WikiCategory) =>
  categoryLabelMap[category];

export const fetchPopularDocuments = async (): Promise<WikiDocumentSummary[]> =>
  wait(popularDocuments);
