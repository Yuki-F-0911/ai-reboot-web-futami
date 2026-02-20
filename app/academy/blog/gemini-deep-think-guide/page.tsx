import type { Metadata } from "next";
import GeminiDeepThinkGuidePage from "@/components/academyLanding/blog/gemini-deep-think-guide/GeminiDeepThinkGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Gemini Deep Think使い方ガイド｜ARC-AGI-2・Codeforces・AI Ultra料金・推論AI比較 | AIリブート";
const pageDescription =
  "Gemini Deep Thinkの使い方を2026年2月時点で解説。公開日、AI Ultra限定提供、ARC-AGI-2/Codeforcesなどの主要ベンチマーク、Gemini 1.5/2.0との使い分け、数学・科学・コード問題での実践手順、Claude Opus 4.6・GPT-5.2比較まで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/gemini-deep-think-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T20:00:00+09:00";
const modifiedTime = "2026-02-20T20:00:00+09:00";

const faqItems = [
  {
    question: "Gemini Deep Thinkは誰でも使えますか？",
    answer:
      "2026年2月20日時点では、GeminiアプリでGoogle AI Ultraサブスクライバー向けに提供されています。APIは信頼できるテスター向けの先行提供案内があり、一般公開範囲は今後変わる可能性があります。",
  },
  {
    question: "ARC-AGI-2の84.6という数値は、実務で何を意味しますか？",
    answer:
      "抽象推論や新規問題への適応力が高いことを示す指標として有効ですが、業務ではデータ制約、レビュー体制、ドメイン知識の影響を受けます。評価条件をそろえた社内検証で再確認することが重要です。",
  },
  {
    question: "Codeforcesスコアが高ければ、業務コード品質も自動で上がりますか？",
    answer:
      "自動では上がりません。Codeforcesは競技プログラミング寄りの評価なので、業務コードでは要件解釈、可読性、テスト設計、保守性まで含めて評価する必要があります。",
  },
  {
    question: "Gemini 1.5/2.0を使っている場合、どこから移行すべきですか？",
    answer:
      "まず現行タスクを「高速応答」「複雑推論」に分け、前者は現行Flash系、後者は3系ThinkingでA/B検証します。1.5系は提供終了済み機能が多いため、新規運用は3系へ寄せるのが安全です。",
  },
  {
    question: "Google AI Ultraの料金は固定ですか？",
    answer:
      "Google公式の米国公表価格は月額249.99ドルですが、地域、税、キャンペーンで変わる可能性があります。契約直前に購入画面で最新価格を確認してください。",
  },
  {
    question: "Claude Opus 4.6・GPT-5.2との違いはどう判断すればよいですか？",
    answer:
      "同一ベンチマークでも得意領域が分かれるため、数値だけで固定せずタスク別に比較するのが実務的です。数学・科学・コードそれぞれで、正答率と再現性、レビュー工数を併せて判断してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Gemini Deep Think 使い方",
    "Gemini 3 Deep Think",
    "Google AI Ultra 料金",
    "推論AI 2026",
    "ARC-AGI-2",
    "Gemini GPT-5.2 比較",
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

export default function GeminiDeepThinkGuideRoute() {
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
          { name: "Gemini Deep Think使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GeminiDeepThinkGuidePage faqItems={[...faqItems]} />
    </>
  );
}

