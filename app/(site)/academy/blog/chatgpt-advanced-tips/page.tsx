import type { Metadata } from "next";
import ChatgptAdvancedTipsPage from "@/components/academyLanding/blog/chatgpt-advanced-tips/ChatgptAdvancedTipsPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips | AIリブート";
const pageDescription =
  "仕事でChatGPTを再現性高く使うために、文章作成・調査・分析・プレゼン・日常業務の50Tipsを収録。すぐ使えるプロンプト例、ChatGPTアプリ利用とAPI利用の違い、レビュー運用の作り方、誤回答を減らす確認手順まで2026年2月時点で整理しました。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-advanced-tips";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "ChatGPTを仕事で使うとき、最初に固定すべき運用ルールは何ですか？",
    answer:
      "最初は「目的」「前提」「制約」「出力形式」の4点を固定し、案件情報だけ差し替える運用にすると再現性が上がります。加えて、事実確認と最終判断の責任者を先に決めておくと安全です。",
  },
  {
    question: "プロンプトは長く書いた方が精度は上がりますか？",
    answer:
      "長さより構造が重要です。必要な条件を短く明確に書き、出力形式を指定した方が品質が安定します。まず短い型で試し、不足条件を追記する反復運用が実務では有効です。",
  },
  {
    question: "GPT-4oとChatGPTはどう使い分けるべきですか？",
    answer:
      "ChatGPTは日常業務の下書きや壁打ちに向き、GPT-4oはAPI実装を含むシステム連携で使い分けるのが実務的です。提供状況は更新されるため、運用時は確認日付きで判断してください。",
  },
  {
    question: "ChatGPT利用とAPI利用は何が違いますか？",
    answer:
      "ChatGPTはアプリ上での対話利用、APIは自社ツールや業務フローへ組み込む開発利用です。課金体系・運用責任・監視設計が異なるため、目的に応じて選ぶ必要があります。",
  },
  {
    question: "出力の誤りを減らすにはどこをチェックすればよいですか？",
    answer:
      "固有名詞、数値、日付、引用元の4点を優先して確認してください。レビュー観点をテンプレ化し、毎回同じ項目で検証すると精度管理しやすくなります。",
  },
  {
    question: "1人で導入する場合、最初に着手すべき業務はどれですか？",
    answer:
      "毎週発生する定型文章業務から始めると効果が見えやすいです。たとえばメール下書き、議事メモ整理、週報作成などをテンプレ化し、次に調査や分析に広げると定着しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 使いこなし",
    "ChatGPT 仕事 活用",
    "GPT-4o 活用法",
    "ChatGPT 業務効率化",
    "プロンプト コツ",
    "仕事用 ChatGPT テンプレート",
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

export default function ChatgptAdvancedTipsRoute() {
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
          { name: "ChatGPT実践テクニック集", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptAdvancedTipsPage faqItems={[...faqItems]} />
    </>
  );
}
