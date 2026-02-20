import type { Metadata } from "next";
import N8nBeginnerGuidePage from "@/components/academyLanding/blog/n8n-beginner-guide/N8nBeginnerGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "n8n入門ガイド｜初心者が業務自動化を最初の1本から実装する手順【2026年版】 | AIリブート";
const pageDescription =
  "n8nとは何か、初心者が最初に押さえるべき概念、最初のワークフロー構築3ステップ、つまずきやすい運用設計、継続改善のチェック項目までを実務目線で整理した入門ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/n8n-beginner-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "n8nはプログラミング未経験でも使えますか？",
    answer:
      "基本的なフローはノードをつないで構築できるため、未経験でも開始できます。まずはテンプレートを複製して、トリガーと通知先を置き換えるところから始めると定着しやすいです。",
  },
  {
    question: "n8n Cloudとセルフホストはどう使い分ければいいですか？",
    answer:
      "検証の初速を優先するならn8n Cloud、運用ポリシーやコスト最適化を重視するならセルフホストが候補です。実際はCloudで検証し、運用要件が固まった段階で移行判断する進め方が現実的です。",
  },
  {
    question: "最初のワークフローは何を作ると効果が出やすいですか？",
    answer:
      "問い合わせ通知、日次レポート送信、フォーム入力の自動転記など、手作業が多く判断ロジックが単純な業務から始めると効果が早く出ます。",
  },
  {
    question: "n8n運用で最初に設計すべきことは何ですか？",
    answer:
      "認証情報の管理、エラー通知、再実行ルールの3点です。ここを後回しにすると、動いていたフローが止まった際に復旧まで時間がかかります。",
  },
  {
    question: "MakeやZapierとの違いはどこですか？",
    answer:
      "n8nは自由度が高く、ノード構成やCodeノードで柔軟に拡張しやすい点が特徴です。一方で設計責任も増えるため、初学者は比較記事で判断軸を先に決めておくと失敗を減らせます。",
  },
  {
    question: "記事内の料金情報はそのまま使ってよいですか？",
    answer:
      "料金やプランは更新されるため、導入前に必ず公式ページで最新情報を確認してください。本記事は金額の断定ではなく、比較と判断に必要な観点を中心に整理しています。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "n8n 使い方",
    "n8n 初心者",
    "n8n 自動化",
    "n8n セルフホスト",
    "ワークフロー自動化",
    "業務効率化",
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

export default function N8nBeginnerGuideRoute() {
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
          { name: "n8n入門ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <N8nBeginnerGuidePage faqItems={[...faqItems]} />
    </>
  );
}
