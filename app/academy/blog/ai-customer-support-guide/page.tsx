import type { Metadata } from "next";
import AiCustomerSupportGuidePage from "@/components/academyLanding/blog/ai-customer-support-guide/AiCustomerSupportGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "カスタマーサポートのAI活用｜一次対応・ナレッジ管理・品質管理の実装ガイド | AIリブート";
const pageDescription =
  "生成AIを使ったカスタマーサポート実装の要点を、一次対応自動化・RAG前提ナレッジ管理・品質管理の順で整理。FAQ Bot運用で工数を減らしつつ回答品質を保つための設計手順、役割分担、エスカレーション設計、改善サイクルを解説し、導入時の失敗回避策も示します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-customer-support-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "生成AIでカスタマーサポートのどの業務から始めるべきですか？",
    answer:
      "最初は問い合わせ件数が多く、回答パターンが安定している一次対応（配送状況、返品可否、営業時間など）から始めるのが実務的です。まずFAQボットで自動化し、例外ケースだけ有人対応に寄せると立ち上がりが安定します。",
  },
  {
    question: "ChatGPTをそのまま使うだけではだめですか？",
    answer:
      "汎用チャットをそのまま使うと、社内の最新手順や製品仕様を参照できず、回答の一貫性が崩れやすくなります。実務ではRAGで社内FAQと手順書を参照させ、回答ルールをシステムプロンプトで固定する設計が必要です。",
  },
  {
    question: "RAGを使うと回答品質はどのように変わりますか？",
    answer:
      "質問ごとに関連文書を検索して根拠付きで回答できるため、誤回答率の低減と回答の説明可能性が改善しやすくなります。特に製品仕様や契約条件のような更新頻度が高い情報で効果が出やすいです。",
  },
  {
    question: "顧客情報をAIに入れても大丈夫ですか？",
    answer:
      "入力してよい情報を分類し、個人情報や機密情報はマスキング・最小化する運用が前提です。アクセス権限、ログ監査、保存期間、外部モデルへの送信可否をガイドラインで定義し、運用前に法務・情報システムと合意してください。",
  },
  {
    question: "クレーム対応までAI化しても問題ありませんか？",
    answer:
      "一次仕分けや事実整理はAI化できますが、補償判断や謝罪表現の最終決定は有人で行う設計が安全です。感情が高ぶったケースは早期エスカレーションし、AIは下書きと履歴要約に限定する運用が現実的です。",
  },
  {
    question: "導入効果はどの指標で評価すればよいですか？",
    answer:
      "一次解決率、有人転送率、平均応答時間、再問い合わせ率、CSAT（顧客満足度）を最低限追跡してください。運用開始後は週次で失敗ログをレビューし、プロンプトとナレッジ更新をセットで回すのが基本です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI カスタマーサポート",
    "AI FAQ ボット",
    "CS AI 導入",
    "チャットボット 生成AI 比較",
    "問い合わせ対応 AI 自動化",
    "RAG カスタマーサポート",
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

export default function AiCustomerSupportGuideRoute() {
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
          { name: "カスタマーサポートのAI活用", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiCustomerSupportGuidePage faqItems={[...faqItems]} />
    </>
  );
}
