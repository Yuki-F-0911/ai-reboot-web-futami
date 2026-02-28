import type { Metadata } from "next";
import AiPcCopilotPlusGuidePage from "@/components/academyLanding/blog/ai-pc-copilot-plus-guide/AiPcCopilotPlusGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Copilot+ PC活用ガイド｜NPU 40TOPS基準と購入前チェック5点【2026年版】 | AIリブート";
const pageDescription =
  "Copilot+ PC活用を2026年2月時点で解説。NPU 40TOPS以上の定義、Recall・Live Captions・AI画像生成の実用性、Surface Pro 11やThinkPad X1 Carbonなど搭載機種比較、購入前チェック5点、在宅ワークでの活用シーンを整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-pc-copilot-plus-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T13:00:00+09:00";
const modifiedTime = "2026-02-20T19:20:00+09:00";

const faqItems = [
  {
    question: "Copilot+ PCの定義は何ですか？",
    answer:
      "一般に、NPU性能が40TOPS以上で、WindowsのAI機能をローカルで実行しやすい設計を持つPC群をCopilot+ PCと呼びます。販売時の表記は機種ごとに確認が必要です。",
  },
  {
    question: "NPUが高いと何が変わりますか？",
    answer:
      "ローカル推論処理をCPU/GPUだけに頼らず実行できるため、バッテリー効率や応答速度が改善しやすくなります。特に字幕生成や画像処理など連続タスクで差が出ます。",
  },
  {
    question: "Recallは業務で使えますか？",
    answer:
      "検索性の向上に有効ですが、保存対象データと組織の情報管理ポリシーを先に確認する必要があります。機密業務では有効化範囲を限定する運用が前提です。",
  },
  {
    question: "Surface Pro 11とThinkPad X1 Carbonはどちらが良いですか？",
    answer:
      "一般論では、モバイル性とタッチ運用を重視するならSurface系、キーボード作業と企業導入を重視するならThinkPad系が選ばれやすい傾向です。Copilot+対応やNPU性能は世代・SKUで異なるため、最新ラインナップは公式情報で確認してください。詳細は公式サイトをご確認ください（確認日: 2026-02-21）。",
  },
  {
    question: "既存PCからの買い替え判断基準は？",
    answer:
      "業務でAI機能を週何回使うか、バッテリー運用時間、メモリ容量、管理要件、予算回収期間をセットで判断してください。単純なスペック比較だけでは決めにくい領域です。",
  },
  {
    question: "在宅ワークでも効果は出ますか？",
    answer:
      "会議字幕、資料要約、画像生成、検索効率化など、日次業務に組み込むと効果が出やすいです。利用頻度が低い場合は、買い替えより既存端末最適化を優先する選択も合理的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Copilot+ PC 活用",
    "AI PC おすすめ",
    "NPU 40TOPS",
    "Windows AI機能",
    "Recall 使い方",
    "Surface Pro 11 ThinkPad X1 Carbon",
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

export default function AiPcCopilotPlusGuideRoute() {
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
          { name: "Copilot+ PC活用ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiPcCopilotPlusGuidePage faqItems={[...faqItems]} />
    </>
  );
}
