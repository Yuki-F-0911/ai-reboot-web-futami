import type { Metadata } from "next";
import ClaudeOpus46GuidePage from "@/components/academyLanding/blog/claude-opus-4-6-guide/ClaudeOpus46GuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Claude Opus 4.6使い方ガイド｜1Mトークン・料金・実務活用【2026年2月】 | AIリブート";
const pageDescription =
  "Claude Opus 4.6の使い方を2026年2月20日時点で解説。1Mトークンコンテキスト、Adaptive Thinking、effort controlsの仕様、ベンチ比較、API/Claude.ai料金、OpenAI・Gemini比較、実務導入手順まで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/claude-opus-4-6-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T20:45:00+09:00";

const faqItems = [
  {
    question: "Claude Opus 4.6は無料プランで使えますか？",
    answer:
      "2026年2月20日時点では、Opus 4.6はClaude.aiのPro/Max/Team/Enterprise向けに案内され、無料ユーザーは主にSonnet系が中心です。最新の提供範囲はプラン更新で変わるため、利用前に公式案内を確認してください。",
  },
  {
    question: "1Mトークンコンテキストは自動で使えますか？",
    answer:
      "Opus 4.6の1Mトークンはbeta機能で、APIではアクセス申請が必要です。通常の200Kコンテキストから拡張する運用のため、全環境で自動有効とは限りません。",
  },
  {
    question: "effortパラメーターは正式リリース済みですか？",
    answer:
      "2026年2月20日時点では公式ドキュメント上でalpha表記です。安定運用前提の本番ワークフローでは、フォールバック設定とA/B検証をセットで行うのが安全です。",
  },
  {
    question: "Claude Opus 4.6とClaude 3.5 Sonnetの比較はできますか？",
    answer:
      "比較は可能ですが、公開ベンチの指標体系が異なるため単純な点数比較は危険です。4.6は4.1比の指標が多く、3.5比較は3.7発表時の別指標が中心なので、実案件データで再検証してください。",
  },
  {
    question: "Claude.ai ProとAPI課金はどう使い分けるべきですか？",
    answer:
      "個人の試行錯誤や日次利用はClaude.ai Pro、プロダクト連携や自動化はAPI課金が向いています。多くのチームはProで評価設計し、効果が確認できた処理のみAPIに移す形でコストを抑えています。",
  },
  {
    question: "Opus 4.6を導入する最初の評価手順は？",
    answer:
      "対象業務を1つに絞り、同じ入力をSonnet系とOpus 4.6で比較し、品質・処理時間・コストをログ化する方法が実務的です。評価期間を短く区切ると意思決定しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude Opus 4.6 使い方",
    "Claude 4.6 新機能",
    "Anthropic 最新モデル",
    "1Mトークン Claude",
    "Claude Opus 4.6 料金",
    "Adaptive Thinking effort",
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

export default function ClaudeOpus46GuideRoute() {
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
          { name: "Claude Opus 4.6使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ClaudeOpus46GuidePage faqItems={[...faqItems]} />
    </>
  );
}
