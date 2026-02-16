export type WikiCategory = "student" | "teacher" | "accident" | "club";

export interface WikiDocumentSummary {
  id: string;
  title: string;
  category: WikiCategory;
  editor: string;
  updatedAt: string;
  views: number;
}

export interface WikiRecentChange {
  id: string;
  title: string;
  category: WikiCategory;
  editor: string;
  updatedAt: string;
}

export interface WikiDivisionCategory {
  id: WikiCategory;
  featured?: boolean;
  route?: string;
}
