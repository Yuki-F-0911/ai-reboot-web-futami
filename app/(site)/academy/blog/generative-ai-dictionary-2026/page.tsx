import type { Metadata } from "next";
import GenerativeAiDictionary2026Page from "@/components/academyLanding/blog/generative-ai-dictionary-2026/GenerativeAiDictionary2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AI用語辞典2026：初心者が今日から使えるAI用語100語をわかりやすく解説 | AIリブート";
const pageDescription =
  "プロンプト、LLM、ハルシネーション、RAG、MCP...AIの用語が多すぎてわからない方へ。2026年版の生成AI重要用語100語を初心者向けにわかりやすく解説した完全辞典。よく出てくるAI用語をまとめて理解できます。";
const pageUrl = "https://ai-reboot.io/academy/blog/generative-ai-dictionary-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T16:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "プロンプトとは何ですか？簡単に教えてください",
    answer:
      "プロンプトは、AIにしてほしいことを伝える指示文です。つまり「AIへのお願いメモ」のことです。長文でなくても、目的がはっきりしていれば十分使えます。",
  },
  {
    question: "ハルシネーションとはどういう意味ですか？",
    answer:
      "ハルシネーションは、AIがもっともらしい間違いを出す現象です。つまり「自信ありげに間違えること」です。重要な内容は公式情報で確認する前提で使うと安全です。",
  },
  {
    question: "LLMとAIの違いは何ですか？",
    answer:
      "AIは広い概念で、LLMはその中の一種です。つまりAIが大きな箱で、LLMは文章理解や生成が得意なモデルです。ChatGPTなどはLLMを活用したサービスです。",
  },
  {
    question: "AGIはいつ実現しますか？",
    answer:
      "AGIの実現時期はまだ定まっていません。つまり「専門家の間でも意見が分かれている段階」です。今は、まず現実に使える生成AIの活用力を高めるのが実務的です。",
  },
  {
    question: "ChatGPTとGPTは同じですか？",
    answer:
      "同じではありません。GPTはモデル名で、ChatGPTはそのモデルを使えるサービス名です。つまり「エンジン」と「完成したアプリ」の違いです。",
  },
  {
    question: "RAGとは何ですか？",
    answer:
      "RAGは、外部資料を参照してから答える仕組みです。つまり「手元の資料を見ながら回答する方法」のことです。社内資料に基づく回答でよく使われます。",
  },
  {
    question: "AIエージェントとは何ですか？",
    answer:
      "AIエージェントは、目標に向けて作業を進める自動実行型のAIです。つまり「指示を受けて段取りまで進めるAI」です。調査や入力作業などを連続して実行できます。",
  },
  {
    question: "コンテキストとは何ですか？",
    answer:
      "コンテキストは、AIが回答時に参照している文脈情報です。つまり「会話の前提や背景メモ」です。前提を明確に渡すほど回答が安定します。",
  },
  {
    question: "プロンプトエンジニアリングは誰でも学べますか？",
    answer:
      "はい、誰でも学べます。つまり「特別な資格より、実際に試して改善する習慣」が大切です。仕事や生活のテーマで毎日1つ試すと早く身につきます。",
  },
  {
    question: "生成AIを使うのに技術知識は必要ですか？",
    answer:
      "最初は不要です。つまり、まずは日本語で相談するだけで始められます。必要に応じて少しずつ用語を覚える進め方で十分です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 用語",
    "AI 用語集",
    "プロンプト 意味",
    "LLM とは",
    "ChatGPT 用語",
    "AI 初心者 用語",
    "生成AI 辞典 2026",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: pageOgImageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageOgImageUrl],
  },
};

export default function GenerativeAiDictionary2026Route() {
  return (
    <>
      <ArticleStructuredData
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        imageUrl={pageOgImageUrl}
        articleType="BlogPosting"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://ai-reboot.io" },
          { name: "アカデミー", url: "https://ai-reboot.io/academy" },
          { name: "ブログ", url: "https://ai-reboot.io/academy/blog" },
          { name: "生成AI用語辞典2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GenerativeAiDictionary2026Page faqItems={[...faqItems]} />
    </>
  );
}
