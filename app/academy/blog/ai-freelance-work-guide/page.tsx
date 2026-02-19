import type { Metadata } from "next";
import AiFreelanceWorkGuidePage from "@/components/academyLanding/blog/ai-freelance-work-guide/AiFreelanceWorkGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "フリーランス・副業のAI活用術｜提案・作業・請求まで効率化する実践ガイド | AIリブート";
const pageDescription =
  "フリーランス・副業でAIを使う実践ガイド。案件獲得の提案書/見積書、実作業のリサーチ・文章生成・レビュー、請求・管理までを一連のワークフローで解説。コピペで使える提案プロンプト付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-freelance-work-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T12:00:00+09:00";
const modifiedTime = "2026-02-19T12:00:00+09:00";

const faqItems = [
  {
    question: "フリーランスでAIを使うと、どの業務から効果が出やすいですか？",
    answer:
      "最初に効果が出やすいのは、提案書の下書き、リサーチ要約、納品前チェックです。どれも定型化しやすく、作業時間の短縮と品質の均一化を同時に狙えます。",
  },
  {
    question: "提案書をAIで作るとき、クライアントごとの差別化はどう作りますか？",
    answer:
      "汎用テンプレのまま出すのではなく、相手業界の課題、成果指標、実行スコープを必ず上書きします。AIは構成と初稿に使い、差別化は人間の解釈で作る運用が有効です。",
  },
  {
    question: "見積書の作成にAIを使っても、金額の妥当性は担保できますか？",
    answer:
      "工数分解と論点整理には有効ですが、単価と責任範囲の最終判断は人間が行う必要があります。前提条件と除外範囲を明記すると、後工程の認識ずれを減らせます。",
  },
  {
    question: "実作業でAIを使うとき、納品品質を落とさないコツは何ですか？",
    answer:
      "「下書き生成」と「品質判定」を分離することが重要です。出力後に根拠確認、数値確認、表現トーン確認のチェックリストを通すと品質が安定します。",
  },
  {
    question: "請求・記帳まわりでAIを使うときの注意点はありますか？",
    answer:
      "請求書の文面作成や督促文の下書きは効率化できますが、帳簿・証憑の保存要件は制度準拠で管理する必要があります。最終提出前の確認手順は固定してください。",
  },
  {
    question: "副業会社員が最初に決めるべきAI運用ルールは何ですか？",
    answer:
      "就業規則の確認、機密情報の入力禁止、納品前レビュー責任者の明確化の3点を最初に決めると運用が安定します。業務ごとにAI使用範囲を言語化するのが有効です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "フリーランス AI 活用",
    "副業 AI 効率化",
    "ソロワーカー 生成AI",
    "個人事業主 AI ツール",
    "副業 ChatGPT 使い方",
    "提案書 見積書 AI",
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

export default function AiFreelanceWorkGuideRoute() {
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
          { name: "フリーランス・副業のAI活用術", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiFreelanceWorkGuidePage faqItems={[...faqItems]} />
    </>
  );
}
