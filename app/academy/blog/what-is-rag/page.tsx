import type { Metadata } from "next";
import WhatIsRagPage from "@/components/academyLanding/blog/what-is-rag/WhatIsRagPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "RAG（検索拡張生成）とは？仕組み・メリット・活用事例をわかりやすく解説 | AIリブート";
const pageDescription =
  "「RAG とは」「検索拡張生成」を知りたい方向けに、RAG（Retrieval-Augmented Generation）の定義、仕組み（検索→コンテキスト付与→生成）、メリットと限界、活用事例、始め方、ファインチューニングとの違いを事実ベースで整理しました。";
const pageUrl = "https://ai-reboot.io/academy/blog/what-is-rag";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-17T09:00:00+09:00";

const faqItems = [
  {
    question: "RAG（検索拡張生成）とは何ですか？",
    answer:
      "RAG（Retrieval-Augmented Generation）は、ユーザーの質問に関連する情報を検索で取り出し、その情報（コンテキスト）を参照しながらLLMが回答を生成する仕組みです。",
  },
  {
    question: "RAGはハルシネーション（もっともらしい誤り）対策になりますか？",
    answer:
      "なります。ただし「検索で適切な根拠が取れる」ことが前提です。根拠が取得できない設計やデータ不足の状態では、誤りが減らない場合もあります。",
  },
  {
    question: "RAGにはベクトル検索が必須ですか？",
    answer:
      "必須ではありません。キーワード検索などでもRAGは成立しますが、文章の意味に近い情報を取り出したい場合にベクトル検索（埋め込みによる類似検索）がよく使われます。",
  },
  {
    question: "RAGとファインチューニングは何が違いますか？",
    answer:
      "RAGは外部データを「検索して参照」し、ファインチューニングはモデルの重みを学習で更新します。頻繁に更新される知識はRAG、文章トーンや手順の型はファインチューニングが向くことが多いです。",
  },
  {
    question: "社内データでRAGを作るときの注意点は？",
    answer:
      "権限管理（誰が何を参照できるか）、更新・削除の反映、ログ（検索クエリと参照文書）、個人情報/機密情報の取り扱いルールを先に決めることが重要です。",
  },
  {
    question: "RAGはどんな業務で効果が出やすいですか？",
    answer:
      "社内規程や手順書、FAQ、製品ナレッジなど「参照すべき資料がある」業務で効果が出やすいです。問い合わせ一次対応やドキュメント検索のような反復業務と相性が良いです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "RAG とは",
    "RAG わかりやすく",
    "検索拡張生成",
    "Retrieval-Augmented Generation",
    "RAG 仕組み",
    "RAG 活用事例",
    "RAG ファインチューニング 違い",
    "社内データ RAG",
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

export default function WhatIsRagRoute() {
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
          { name: "RAG（検索拡張生成）とは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <WhatIsRagPage faqItems={[...faqItems]} />
    </>
  );
}

