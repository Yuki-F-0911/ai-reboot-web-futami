import type { Metadata } from "next";
import ClaudeProjectsGuidePage from "@/components/academyLanding/blog/claude-projects-guide/ClaudeProjectsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "Claude Projectsとは？使い方から活用術まで完全ガイド｜長い資料や仕事を一元管理する新習慣 | AIリブート";
const pageDescription =
  "Claude Projectsの始め方・使い方を初心者向けにわかりやすく解説。通常の会話との違い、Pro限定機能の全貌、書籍執筆・法務レビュー・研究など8つの活用シーン、GPTsとの比較、ベストプラクティス5つを網羅。コンテキストを保ちながらAIと継続的に仕事を進める新習慣を身につけましょう。";
const pageUrl = "https://ai-reboot.io/academy/blog/claude-projects-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T10:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "Claude Projectsは無料プランで使えますか？",
    answer:
      "2026年2月時点、Projects機能はClaude Pro・Max・Teamプランでのみ利用できます。月額約20ドル（約3,000円）のProプランが最も手軽なスタートです。無料プランでは通常の会話のみ利用可能です。",
  },
  {
    question: "1つのProjectにアップロードできるファイル容量は？",
    answer:
      "Projectのナレッジには合計で最大200,000トークン（約15万文字相当）まで保存できます。PDFや各種テキストファイルに対応しています。大量の資料を扱う場合は、重要度の高いものから優先してアップロードするのがコツです。",
  },
  {
    question: "ProjectsのデータはClaudeの学習に使われますか？",
    answer:
      "デフォルトでは学習に利用される設定になっています。設定メニューの「Privacy」から学習利用をオフにすることができます。機密情報や顧客情報を扱うプロジェクトでは必ず確認してください。",
  },
  {
    question: "GPTsとProjectsはどちらが機能として優れていますか？",
    answer:
      "用途によって異なります。カスタム指示と外部APIアクション連携が必要ならGPTs。自分の資料や社内文書をコンテキストとして保持しながら継続的に仕事を進めたいならProjectsが適しています。どちらが「上位」ではなく、目的別に使い分けるのがベストです。",
  },
  {
    question: "Projectsは何個まで作れますか？",
    answer:
      "2026年2月時点、Proプランでのプロジェクト数に公式の上限は設けられていません。用途ごとに複数作成して管理することが推奨されています。",
  },
  {
    question: "チームで1つのProjectを共有できますか？",
    answer:
      "Team・Enterpriseプランでは複数メンバーとのProject共有が可能です。Proプランは基本的に個人利用向けで、共有機能は含まれません。チームでの活用を検討する場合はTeamプランをご確認ください。",
  },
  {
    question: "モバイルアプリでもProjectsを使えますか？",
    answer:
      "iOS・Androidの公式Claudeアプリでもプロジェクトの参照と会話が可能です。ただしナレッジのアップロードや詳細設定はブラウザ版から行うことをおすすめします。",
  },
  {
    question: "Projectを削除するとデータも消えますか？",
    answer:
      "プロジェクトを削除すると、そのプロジェクト内のすべての会話とアップロードされたファイルも削除されます。削除前に必要な情報をエクスポートするか、別の場所にバックアップを取っておきましょう。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude Projects",
    "Claude プロジェクト",
    "Claude Pro 使い方",
    "Claude 資料管理",
    "Claude コンテキスト",
    "GPTs 比較",
    "AI プロジェクト管理",
    "Claude 活用法",
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

export default function ClaudeProjectsGuideRoute() {
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
          { name: "Claude Projectsとは？完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ClaudeProjectsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
