export type WikiCategory = "student" | "teacher" | "accident" | "club";

export interface WikiDocumentSummary {
  id: string;
  title: string;
  category: WikiCategory;
  editor: string;
  updatedAt: string;
  views: number;
}
