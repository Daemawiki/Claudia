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

export interface WikiDocumentSection {
  num: string;
  title: string;
  details: string;
}

export interface WikiDocumentInfoItem {
  title: string;
  text: string;
}

export interface WikiDocumentDetail {
  id: string;
  title: string;
  category: WikiCategory;
  views: number;
  badgeText: string;
  description: string;
  profileInfo: WikiDocumentInfoItem[];
  sections: WikiDocumentSection[];
  relatedDocuments: string[];
  lastUpdated: string;
}
