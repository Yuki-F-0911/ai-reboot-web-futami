export type SeminarData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  date: string;
  dateShort: string;
  eventDate: string; // ISO format YYYY-MM-DD (JST) — 自動終了判定に使用
  time: string;
  place: string;
  heroCopy: string;
  problemHeadline?: string;
  problemItems?: string[];
  problemClosing?: string;
  googleFormUrl: string;
  ended?: boolean; // 手動で終了にする場合 (true なら日付に関係なく終了扱い)
  hasLandingPage: boolean;
  metaTitle: string;
  metaDescription: string;
  ogImageAlt: string;
};
