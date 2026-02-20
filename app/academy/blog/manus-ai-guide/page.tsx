import type { Metadata } from "next";
import ManusAiGuidePage from "@/components/academyLanding/blog/manus-ai-guide/ManusAiGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Manus AIとは？使い方と活用シーン解説｜AIエージェントで仕事を自動化する | AIリブート";
const pageDescription =
  "Manus AIを業務で使う前提で、ChatGPTとの違い、AIエージェントの基本、初期設定から自動化の進め方、無料枠の見方、日本語運用時の注意、セキュリティ確認項目と導入前チェックリスト、実務定着の観点を2026年2月時点の公開情報ベースで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/manus-ai-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "Manus AIは無料で使えますか？",
    answer:
      "無料プランは案内されていますが、クレジット上限や実行できるタスク量には制限があります。継続利用時は有料プラン条件を含めて比較し、最新情報を確認して判断するのが安全です（確認日: 2026年2月20日）。",
  },
  {
    question: "Manus AIは日本語に対応していますか？",
    answer:
      "日本語での指示と出力は可能です。UI言語や利用可能機能はプラン・アカウント条件・時期で変わる場合があるため、設定画面と公式ヘルプを確認し、業務用途では固有名詞や専門語の出力を都度レビューしてください（確認日: 2026年2月20日）。",
  },
  {
    question: "Manus AIのセキュリティは大丈夫ですか？",
    answer:
      "公式ヘルプでセキュリティとプライバシー方針が公開されています。クラウドブラウザのログイン管理やデータ取り扱いの説明はありますが、実務利用では権限分離、入力データ制限、ログ監査をセットで設計する必要があります。",
  },
  {
    question: "ManusとChatGPTの違いは何ですか？",
    answer:
      "ChatGPTは対話を軸に文章生成や整理を進める使い方が中心で、Manusはタスクの実行フローまでまとめて任せる設計が特徴です。実務では、Manusで実行し、ChatGPTで仕上げる分業が有効です。",
  },
  {
    question: "Manus AIはどんな業務自動化に向いていますか？",
    answer:
      "リサーチ要約、下書き文書作成、データ収集と整形のように「手順があり、確認ポイントを定義できる業務」と相性が良いです。逆に高リスク判断の完全自動化は慎重に進めるべきです。",
  },
  {
    question: "法人導入前に最低限確認すべき項目は何ですか？",
    answer:
      "料金上限、データ取り扱い、利用権限、承認フロー、監査ログの5点です。導入効果だけでなく、失敗時に止められる運用設計まで事前に整えることが重要です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Manus AI 使い方",
    "Manus とは",
    "Manus AI 日本語",
    "AIエージェント サービス 比較",
    "Manus vs ChatGPT",
    "AI業務自動化",
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

export default function ManusAiGuideRoute() {
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
          { name: "Manus AIとは？使い方と活用シーン解説", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ManusAiGuidePage faqItems={[...faqItems]} />
    </>
  );
}
