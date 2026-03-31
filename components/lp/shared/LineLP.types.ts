export interface PainPoint {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface SolutionItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface StepItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface GiftItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface FeedItem {
  icon: React.ReactNode;
  label: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface QuestionPreview {
  num: string;
  label: string;
  title: string;
  options: string[];
}
