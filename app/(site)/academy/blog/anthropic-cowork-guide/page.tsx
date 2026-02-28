import type { Metadata } from "next";
import AnthropicCoworkGuidePage from "@/components/academyLanding/blog/anthropic-cowork-guide/AnthropicCoworkGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AnthropicのCoworkとは？使い方と活用シーン完全ガイド | AIリブート";
const pageDescription =
  "AnthropicのCoworkを2026年2月時点の公式情報で確認し、個人利用の始め方と注意点を解説。対応環境、料金プラン、ChatGPT/Geminiとの役割分担、監査ログ制約を踏まえた導入判断と初週の進め方、失敗回避の基準まで実務目線で整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/anthropic-cowork-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "AnthropicのCoworkは無料で使えますか？",
    answer:
      "いいえ。Coworkは研究プレビューで、Pro・Max・Team・Enterpriseの有料プラン向け機能です。無料プランは対象外です（確認日: 2026年2月20日）。",
  },
  {
    question: "Coworkは日本語で使えますか？",
    answer:
      "使えます。Claudeの言語設定で日本語を選択でき、入力言語に合わせて対話できます。Coworkで生成した成果物も日本語で作成可能です（確認日: 2026年2月20日）。",
  },
  {
    question: "CoworkとClaude Codeの違いは何ですか？",
    answer:
      "どちらも同じエージェント系アーキテクチャを基盤にしていますが、Claude Codeはターミナル中心、CoworkはClaude Desktop上で知的業務を進める前提です。非エンジニアがファイル作業や調査を任せる導線はCoworkの方が分かりやすく設計されています。",
  },
  {
    question: "ChatGPT Team（現Business）との違いは何ですか？",
    answer:
      "名称面では、ChatGPT Teamは現在ChatGPT Businessとして案内されています。Coworkはローカルファイルに直接アクセスして複数ステップ実行するデスクトップ実行型、ChatGPT Businessは共有ワークスペースやGPTs・Projectsを使った組織運用型という差があります。",
  },
  {
    question: "Coworkはどの環境で使えますか？",
    answer:
      "Claude DesktopのmacOS版とWindows x64版で利用できます。Web版・モバイル版では使えません。Windows arm64は非対応です（確認日: 2026年2月20日）。",
  },
  {
    question: "Coworkを業務で使うときの注意点は？",
    answer:
      "研究プレビューのため、Team/Enterpriseでは監査ログ・Compliance API・Data ExportsにCowork活動が記録されない点が重要です。規制対応が必要な業務は避け、アクセス範囲とレビュー手順を先に決めて運用してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Anthropic Cowork 使い方",
    "Cowork AI とは",
    "Claude Team 活用",
    "Anthropic チーム向け AI",
    "Claude 仕事 活用",
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

export default function AnthropicCoworkGuideRoute() {
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
          { name: "AnthropicのCoworkとは？使い方と活用シーン完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AnthropicCoworkGuidePage faqItems={[...faqItems]} />
    </>
  );
}
