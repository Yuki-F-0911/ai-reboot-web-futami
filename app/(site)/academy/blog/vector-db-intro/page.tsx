import type { Metadata } from "next";
import VectorDbIntroPage from "@/components/academyLanding/blog/vector-db-intro/VectorDbIntroPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ベクターデータベース入門｜Pinecone・Weaviate・ChromaDBの比較と選び方 | AIリブート";
const pageDescription =
  "ベクターデータベースとは何かを、埋め込みと類似度検索の仕組みから解説。Pinecone・Weaviate・ChromaDBを運用形態・コスト・スケールで比較し、RAG実装での選定フローまで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/vector-db-intro";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "ベクターデータベースとは何ですか？",
    answer:
      "ベクターデータベースは、文章や画像を埋め込みベクトルに変換して保存し、距離計算で意味的に近いデータを高速に検索するためのデータベースです。RAGでは、質問に近い文書を取得する役割を担います。",
  },
  {
    question: "RAG実装でベクターDBが必要になるのはどの部分ですか？",
    answer:
      "主に検索フェーズです。ユーザー質問を埋め込み化し、既存文書ベクトルと比較して関連文書を取り出し、その結果をLLMへ渡して回答を生成します。",
  },
  {
    question: "Pinecone・Weaviate・ChromaDBは最初に何で選べばよいですか？",
    answer:
      "まず用途（個人検証/チームPoC/本番運用）を決め、次に運用負荷とコスト構造、最後にスケール要件で比較するのが実務的です。最初から機能数だけで選ぶと運用段階でミスマッチが起きやすくなります。",
  },
  {
    question: "ChromaDBを本番運用に使うときの注意点は何ですか？",
    answer:
      "ローカル検証は始めやすい一方で、本番では永続化、バックアップ、監視、バージョンアップ時の挙動確認を先に設計する必要があります。in-memory構成のまま運用しないことが重要です。",
  },
  {
    question: "Weaviateを選ぶべきチームの特徴はありますか？",
    answer:
      "検索ロジックを細かく調整したい、オープンソース基盤を活かしたい、将来的にセルフホストとマネージドの選択肢を持ちたいチームと相性が良いです。",
  },
  {
    question: "選定後にやるべき評価項目は何ですか？",
    answer:
      "検索精度（関連度）、応答速度（P95/P99）、コスト（保存量・検索量）、運用性（障害対応・権限・監視）の4軸を最低限追跡してください。PoC段階で評価指標を決めると移行判断が速くなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ベクターデータベース とは",
    "ベクトルDB 比較",
    "Pinecone 使い方",
    "ChromaDB 入門",
    "Weaviate とは",
    "RAG 実装",
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

export default function VectorDbIntroRoute() {
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
          { name: "ベクターデータベース入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <VectorDbIntroPage faqItems={[...faqItems]} />
    </>
  );
}
