import {
  WikiCategory,
  WikiDivisionCategory,
  WikiDocumentSummary,
  WikiRecentChange,
} from "@/interfaces/wiki";

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

const recentChanges: WikiRecentChange[] = [
  {
    id: "recent-1",
    title: "이태영",
    category: "student",
    editor: "김승원",
    updatedAt: "2026-02-14 08:37",
  },
  {
    id: "recent-2",
    title: "최선생",
    category: "teacher",
    editor: "박지민",
    updatedAt: "2026-02-14 08:12",
  },
  {
    id: "recent-3",
    title: "2025 해커톤 빌드 실패",
    category: "accident",
    editor: "김어진",
    updatedAt: "2026-02-14 07:58",
  },
  {
    id: "recent-4",
    title: "AI 동아리",
    category: "club",
    editor: "이태영",
    updatedAt: "2026-02-14 07:45",
  },
  {
    id: "recent-5",
    title: "김어진",
    category: "student",
    editor: "유지우",
    updatedAt: "2026-02-14 07:20",
  },
  {
    id: "recent-6",
    title: "박지민",
    category: "student",
    editor: "김승원",
    updatedAt: "2026-02-14 06:58",
  },
  {
    id: "recent-7",
    title: "야간자습 운영 규정",
    category: "teacher",
    editor: "Daybreak",
    updatedAt: "2026-02-14 06:30",
  },
  {
    id: "recent-8",
    title: "동아리실 배정 변경",
    category: "club",
    editor: "김어진",
    updatedAt: "2026-02-14 06:15",
  },
];

const divisionCategories: WikiDivisionCategory[] = [
  {
    id: "student",
    featured: true,
    route: "/division/student",
  },
  {
    id: "teacher",
  },
  {
    id: "accident",
  },
  {
    id: "club",
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

export const fetchRecentChanges = async (): Promise<WikiRecentChange[]> =>
  wait(recentChanges);

export const fetchRecentChangesByCategory = async (
  category: WikiCategory,
): Promise<WikiRecentChange[]> =>
  wait(recentChanges.filter(change => change.category === category));

export const fetchDivisionCategories = async (): Promise<
  WikiDivisionCategory[]
> => wait(divisionCategories);
