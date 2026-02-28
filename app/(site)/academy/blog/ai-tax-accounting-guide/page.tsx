import type { Metadata } from "next";
import AiTaxAccountingGuidePage from "@/components/academyLanding/blog/ai-tax-accounting-guide/AiTaxAccountingGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "税務・会計業務のAI活用ガイド2026｜申告前レビューと説明文作成を効率化 | AIリブート";
const pageDescription =
  "税務・会計で生成AIを使うときは、申告判断の代替ではなく、説明文作成・差異コメント整理・レビュー準備に適用するのが安全です。顧客データ管理、入力ルール、レビュー手順を含む実務導入フローを、税理士・経理担当者向けに整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-tax-accounting-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T12:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "税務・会計業務でAIを最初に使うなら、どこから始めるべきですか？",
    answer:
      "顧客向け説明文、月次差異コメント、社内チェックリスト作成などの定型文章業務から始めるのが安全です。申告内容の最終判断をAIに任せず、レビュー準備に使う運用が現実的です。",
  },
  {
    question: "申告書の数値や顧客名をそのまま生成AIに入力しても大丈夫ですか？",
    answer:
      "そのまま入力する前に、利用サービスのデータポリシーと社内ルールを確認してください。顧客名・個人情報・未公開数値はマスキングし、必要最小限の情報だけ入力するのが基本です。",
  },
  {
    question: "税理士事務所でAIを使う場合、どの工程で効果が出やすいですか？",
    answer:
      "論点整理、顧客説明文の下書き、面談メモ要約、チェック観点の列挙で効果が出やすい傾向があります。最終レビューを担当者が行う前提で使うと品質を維持しやすくなります。",
  },
  {
    question: "AI出力の誤りを防ぐには、どんなレビュー手順が必要ですか？",
    answer:
      "数値整合、制度要件、根拠資料、顧客固有条件の4点をチェックリスト化し、出力ごとに確認する方法が有効です。とくに税区分や期限などの要件は必ず一次情報で再確認します。",
  },
  {
    question: "会計ソフトの機能があっても、生成AIを併用する意味はありますか？",
    answer:
      "あります。会計ソフトは記帳や集計の基盤、生成AIは説明文作成や観点整理の補助として役割が異なります。二重入力を避け、使い分け基準を決めることが重要です。",
  },
  {
    question: "税務・会計チームでAIルールを作るときの最小要件は何ですか？",
    answer:
      "入力禁止情報、利用可能ツールとプラン、出力レビュー責任者の3点を先に決めるのが最小要件です。加えて、確認日付きでルールを更新する運用を組み込みます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "税務 AI 活用",
    "会計 生成AI 業務効率化",
    "税理士 ChatGPT 使い方",
    "申告前レビュー AI",
    "経理 税務 AI ガイド",
    "税務会計 DX",
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

export default function AiTaxAccountingGuideRoute() {
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
          { name: "税務・会計業務のAI活用ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiTaxAccountingGuidePage faqItems={[...faqItems]} />
    </>
  );
}
