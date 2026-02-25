export type GlossarySource = {
  title: string;
  url: string;
  publisher: string;
  accessedAt: string; // YYYY-MM-DD
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  reading: string;
  category: "基礎概念" | "モデル" | "実装" | "評価" | "法務・倫理";
  summary: string; // 140文字以内
  description: string;
  relatedSlugs: string[];
  sources: GlossarySource[];
  updatedAt: string; // YYYY-MM-DD
};
