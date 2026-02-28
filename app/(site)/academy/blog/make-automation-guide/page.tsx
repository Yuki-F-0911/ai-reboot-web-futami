import type { Metadata } from "next";
import MakeAutomationGuidePage from "@/components/academyLanding/blog/make-automation-guide/MakeAutomationGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Make.com×生成AI自動化ガイド｜最初の1本を実装する手順【2026年版】 | AIリブート";
const pageDescription =
  "Make.comの使い方を、比較ではなく実装手順に絞って解説。シナリオ設計、Webhook受信、生成AI処理、通知まで、最初の1本を動かす流れを2026年2月時点で整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/make-automation-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T21:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "Make.comはノーコード初心者でも使えますか？",
    answer:
      "使えます。最初は2〜3モジュールの短いシナリオから始めると、処理の流れを理解しやすくなります。いきなり分岐を増やさず、入力→AI処理→通知の1本を先に完成させる進め方が安全です。",
  },
  {
    question: "Zapierやn8nと比べたときのMake.comの強みは何ですか？",
    answer:
      "Make.comはシナリオ全体の可視性と分岐設計のしやすさが強みです。比較記事で全体像を把握した後、実装段階では1画面で処理順を確認できる点が運用に効きます。",
  },
  {
    question: "生成AIを組み込むときに最初に決めるべきことは何ですか？",
    answer:
      "入力データの範囲、出力形式、失敗時の再実行ルールの3点です。ここを決めずに実装すると、途中で品質がぶれて運用コストが上がりやすくなります。",
  },
  {
    question: "Make.comの実行コストはどう管理すればよいですか？",
    answer:
      "シナリオごとに実行回数と処理量を分けて管理します。1本目では機能追加より先に、不要実行を抑えるトリガー条件とエラーハンドリングを整えることが重要です。",
  },
  {
    question: "実装後に止まりにくくするには何を監視すべきですか？",
    answer:
      "失敗率、再試行回数、外部APIの応答時間を最低限監視してください。あわせて通知先を1つ固定し、失敗時に担当者へ即時連絡できる状態を作ると運用が安定します。",
  },
  {
    question: "社内導入時にセキュリティ面で注意すべきことはありますか？",
    answer:
      "APIキー管理、個人情報の取り扱い、権限分離の3点が基本です。特に生成AIへ渡すデータは最小化し、機密情報を直接送らない設計にしてから本番投入してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Make.com 使い方",
    "Make.com 生成AI 自動化",
    "Make 自動化 入門",
    "ノーコード AI ワークフロー",
    "Make シナリオ 作成",
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

export default function MakeAutomationGuideRoute() {
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
          { name: "Make.com×生成AI自動化ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <MakeAutomationGuidePage faqItems={[...faqItems]} />
    </>
  );
}

