import type { Metadata } from "next";
import WhatIsAiAgentPage from "@/components/academyLanding/blog/what-is-ai-agent/WhatIsAiAgentPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIエージェントとは？定義・種類・作り方を初心者向けに解説【2026年版】 | AIリブート";
const pageDescription =
  "AIエージェントの定義とチャットボットとの違い、種類、活用例、作り方の基本、導入時の注意点を初心者向けに整理。まず何を自動化すべきかと、安全に始めるポイントがわかります。";
const pageUrl = "https://ai-reboot.io/academy/blog/what-is-ai-agent";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";

const faqItems = [
  {
    question: "AIエージェントとチャットボットの違いは何ですか？",
    answer:
      "チャットボットは会話応答が中心ですが、AIエージェントは目標達成のために情報収集、判断、実行までを連続して行える点が違いです。",
  },
  {
    question: "AIエージェントは中小企業でも導入できますか？",
    answer:
      "できます。最初は1業務1ユースケースに絞り、既存ツール連携で小さく始めると、初期コストと運用負荷を抑えながら進められます。",
  },
  {
    question: "AIエージェントの作り方で最初に決めるべきことは？",
    answer:
      "最初に決めるべきは「対象業務」「成功条件」「人の確認ポイント」の3点です。ここが曖昧だと、導入後に品質や責任範囲が不明確になります。",
  },
  {
    question: "導入時のセキュリティで気をつける点はありますか？",
    answer:
      "機密情報の入力制御、操作ログの保存、権限分離、外部連携先のアクセス制御を最低限のルールとして先に整えることが重要です。",
  },
  {
    question: "AIエージェント導入の費用はどう考えればよいですか？",
    answer:
      "モデル利用料だけでなく、運用設計、監視、改善工数まで含めて見積もる必要があります。PoC段階では上限予算を決めて検証するのが安全です。",
  },
  {
    question: "どの部門から始めると成果が出やすいですか？",
    answer:
      "定型処理が多い部門から始めると成果を可視化しやすくなります。例えば問い合わせ一次対応、定例レポート作成、コードレビュー補助などです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AIエージェント とは",
    "AIエージェント 作り方",
    "AIエージェント 導入",
    "AIエージェント 活用例",
    "AIエージェント 業務自動化",
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

export default function WhatIsAiAgentRoute() {
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
          { name: "AIエージェントとは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <WhatIsAiAgentPage faqItems={[...faqItems]} />
    </>
  );
}
