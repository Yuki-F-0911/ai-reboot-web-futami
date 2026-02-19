import type { Metadata } from "next";
import ManusAiGuidePage from "@/components/academyLanding/blog/manus-ai-guide/ManusAiGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Manus AIとは？使い方と活用シーン解説｜AIエージェントで仕事を自動化する | AIリブート";
const pageDescription =
  "Manus AIとは何かを、ChatGPTとの違いから初心者向けに解説。AIエージェントの基本、使い方、リサーチ・文書作成・データ収集の自動化シーン、無料可否・日本語対応・セキュリティまで確認日付きで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/manus-ai-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "Manus AIは無料で使えますか？",
    answer:
      "無料プランが用意されています。ただし、クレジット上限や実行できるタスク量には制限があるため、継続利用する場合は有料プランを比較して判断するのが現実的です（確認日: 2026年2月19日）。",
  },
  {
    question: "Manus AIは日本語に対応していますか？",
    answer:
      "日本語UIに切り替えて利用できます。設定画面のLanguage項目で変更可能です。日本語での指示自体は可能ですが、業務用途では固有名詞や専門語の出力を都度確認する運用が重要です（確認日: 2026年2月19日）。",
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
