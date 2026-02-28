import type { Metadata } from "next";
import MicrosoftCopilotGuidePage from "@/components/academyLanding/blog/microsoft-copilot-guide/MicrosoftCopilotGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Microsoft Copilot使い方ガイド｜無料版・有料版・M365比較【2026】 | AIリブート";
const pageDescription =
  "Microsoft Copilotの使い方を2026年版で整理。Windows/Edgeの無料版でできること、Copilot Pro（月額3,200円）との差分、Microsoft 365 Copilotの法人条件、Word・Excel・PowerPoint・Outlook活用、ChatGPT・Geminiとの使い分けを解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/microsoft-copilot-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T17:30:00+09:00";
const modifiedTime = "2026-02-20T17:30:00+09:00";

const faqItems = [
  {
    question: "Windows Copilotは無料でどこまで使えますか？",
    answer:
      "2026年2月20日時点では、Windowsアプリ・Web・Edgeで無料利用を始められます。ただし無料版はAIクレジットの月次上限があるため、業務で毎日使う場合は利用量に応じて有料プラン検討が必要です。",
  },
  {
    question: "Copilot ProとMicrosoft 365 Copilotの違いは何ですか？",
    answer:
      "Copilot Proは主に個人向けの強化プランで、AIクレジット拡張やMicrosoft 365アプリでの機能強化が中心です。Microsoft 365 Copilotは法人向けで、組織アカウント・契約・管理統制を前提に導入します。",
  },
  {
    question: "Copilot Proは本当に月額3,200円ですか？",
    answer:
      "MicrosoftサポートにはCopilot Proを月額3,200円で案内する情報があります（2026年2月20日時点）。同時に個人向けではMicrosoft 365 Premiumが同価格帯で提示されるため、契約画面の表記を確認して選ぶのが確実です。",
  },
  {
    question: "無料版でGPT-5.2は使えますか？",
    answer:
      "Microsoft公式では無料ユーザー向けにGPT-5展開方針は確認できますが、GPT-5.2の版指定を無料枠で明示した一次情報は確認できませんでした。記事時点では[要確認]として扱うのが安全です。",
  },
  {
    question: "日本語の品質は業務利用に耐えますか？",
    answer:
      "日本語はサポート対象です。ただしアプリやタスクで品質差が出るため、メール下書き・資料要約・表計算支援の3タスクで1〜2週間のA/B評価を行って判断する運用が実務的です。",
  },
  {
    question: "企業導入で最初に決めるべきことは何ですか？",
    answer:
      "対象業務、入力してよいデータ範囲、レビュー責任者、効果測定KPIの4点を先に決めることです。これを決めずに全社展開すると、費用対効果が見えず定着率が下がりやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Microsoft Copilot 使い方 2026",
    "Windows Copilot",
    "Microsoft 365 Copilot",
    "Copilot 無料版 有料版",
    "Copilot Pro 3200円",
    "Copilot ChatGPT Gemini 比較",
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

export default function MicrosoftCopilotGuideRoute() {
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
          { name: "Microsoft Copilot使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <MicrosoftCopilotGuidePage faqItems={[...faqItems]} />
    </>
  );
}
