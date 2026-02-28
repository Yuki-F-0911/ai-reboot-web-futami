import type { Metadata } from "next";
import AiAgentLandscape2026Page from "@/components/academyLanding/blog/ai-agent-landscape-2026/AiAgentLandscape2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIエージェント比較2026｜主要プレイヤーの勢力図・料金・日本対応を整理 | AIリブート";
const pageDescription =
  "2026年2月時点のAIエージェント勢力図を、Big Tech系・独立系・開発者向けの3カテゴリで比較。Operator/Atlas/Mariner/Computer Use/Manus/Genspark/Claude Code/Copilot/Cursorの違い、料金、日本対応、自律度、導入リスクまで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-agent-landscape-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T20:30:00+09:00";
const modifiedTime = "2026-02-20T20:30:00+09:00";

const faqItems = [
  {
    question: "2026年はどのAIエージェントを最初に導入すべきですか？",
    answer:
      "最初の1本は用途で決めるのが安全です。ブラウザ操作ならAtlas系、深掘り調査ならDeep Research系、開発タスクならCopilot AgentやCursor Agentのように、対象業務を固定して比較すると失敗を減らせます。",
  },
  {
    question: "OperatorとAtlasとComputer Useは何が違いますか？",
    answer:
      "OperatorはOpenAIの自律実行系の流れを作った機能群、Atlasはブラウザ体験にAIを統合する製品、Computer UseはAnthropic API経由で画面操作を自動化する開発者向け機能です。UI一体型かAPI実装型かが主要な違いです。",
  },
  {
    question: "Manus AIとGensparkは日本で業務利用できますか？",
    answer:
      "日本語運用の導線は両サービスで確認できますが、法人向け契約条件や提供範囲は更新されるため、契約前に最新の利用規約・SLA・請求条件を必ず確認してください（確認日: 2026年2月20日）。",
  },
  {
    question: "開発チームではClaude Code・Copilot Agent・Cursor Agentのどれが向いていますか？",
    answer:
      "既存のGitHub運用を中心にするならCopilot Agent、ローカルIDEで高速反復するならCursor Agent、CLI中心で設計から実装まで深く任せたいならClaude Codeが検証しやすいです。",
  },
  {
    question: "エージェント導入で先に決めるべきセキュリティ項目は何ですか？",
    answer:
      "最低限、権限分離、承認フロー、監査ログ、入力データ制限、コスト上限の5点は導入前に定義してください。特に外部送信や決裁処理は人の最終確認を残す設計が必須です。",
  },
  {
    question: "2026年後半に評価軸はどう変わりますか？",
    answer:
      "単体機能比較から、運用設計と監査可能性の比較へ重点が移ります。どのモデルを使うかより、社内ルールに沿って再現運用できるかが導入継続率を左右します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AIエージェント 比較 2026",
    "ChatGPT Operator",
    "Manus AI",
    "Claude エージェント",
    "Google Mariner",
    "AIエージェント 勢力図",
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

export default function AiAgentLandscape2026Route() {
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
          { name: "AIエージェント比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiAgentLandscape2026Page faqItems={[...faqItems]} />
    </>
  );
}
