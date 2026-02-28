import type { Metadata } from "next";
import DeepseekGuidePage from "@/components/academyLanding/blog/deepseek-guide/DeepseekGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "DeepSeekとは？使い方と実務活用の始め方｜ChatGPTとの違いも解説 | AIリブート";
const pageDescription =
  "DeepSeekの基本、R1/V3の使い分け、ChatとAPIの違い、ChatGPTとの分業、業務利用時の情報管理と根拠確認ルールまでを2026年2月時点で整理した実務ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/deepseek-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T12:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "DeepSeekとは何ですか？",
    answer:
      "DeepSeekは、WebチャットとAPIの両方で利用できる生成AIサービスです。調査、要約、下書き作成、実装補助などの業務で使われています。",
  },
  {
    question: "DeepSeekとChatGPTの違いは何ですか？",
    answer:
      "どちらも生成AIですが、運用しやすい場面や使い方の慣れが異なります。実務では、1つに固定せず、調査・下書き・最終整形で役割分担するほうが再現性を作りやすくなります。",
  },
  {
    question: "DeepSeekは無料で使えますか？",
    answer:
      "利用開始しやすい導線はありますが、利用条件や提供範囲は更新される可能性があります。最新条件は公式ページで確認してください（確認日: 2026-02-20）。",
  },
  {
    question: "DeepSeekのAPIは初心者でも使えますか？",
    answer:
      "API自体はシンプルな構成で始められますが、APIキー管理、ログ設計、エラー処理などの運用要件を先に決めることが重要です。まずはChat利用で業務要件を固める方法が安全です。",
  },
  {
    question: "業務で使うときの注意点は何ですか？",
    answer:
      "機密情報を入力しないルール、出力の根拠確認、最終判断を人が行う運用を必ずセットにしてください。特に数値や制度情報は原典確認が必須です。",
  },
  {
    question: "生成AIの学習を継続するには何が必要ですか？",
    answer:
      "ツール名を追い続けるより、業務課題に合わせた判断軸を持つことが重要です。週次で試行と振り返りを回し、再利用できるプロンプトやチェックリストを残すと定着しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "DeepSeek 使い方",
    "DeepSeek とは",
    "DeepSeek ChatGPT 違い",
    "DeepSeek API",
    "DeepSeek R1",
    "生成AI 実務活用",
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

export default function DeepseekGuideRoute() {
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
          { name: "DeepSeekとは？使い方と実務活用の始め方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <DeepseekGuidePage faqItems={[...faqItems]} />
    </>
  );
}
