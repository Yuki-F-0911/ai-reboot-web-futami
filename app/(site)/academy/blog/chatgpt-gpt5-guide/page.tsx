import type { Metadata } from "next";
import ChatgptGpt5GuidePage from "@/components/academyLanding/blog/chatgpt-gpt5-guide/ChatgptGpt5GuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPTとGPT-5の違いを整理｜2026年版モデル選びと使い分けガイド | AIリブート";
const pageDescription =
  "ChatGPTのGPT-5系モデル運用を2026年2月時点で整理。GPT-5とGPT-5.2の違い、Auto/Thinkingの選び方、ChatGPT利用とAPI利用の課金・運用責任の差を、実務で判断できる形で解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-gpt5-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "GPT-5とGPT-5.2は何が違いますか？",
    answer:
      "2026年2月時点では、ChatGPT側はGPT-5.2中心の提供へ更新されています。旧GPT-5（Instant/Thinking）はChatGPTで退役済みとされ、API側ではモデル名と提供範囲を都度確認する運用が必要です。",
  },
  {
    question: "ChatGPTでAutoとThinkingはどう使い分ければよいですか？",
    answer:
      "短い下書きや日常の壁打ちはAuto/Instant、要件整理や比較検討など複数条件を扱う作業はThinkingが向きます。まずAutoで初稿を作り、精度が必要な箇所だけThinkingへ切り替えると効率的です。",
  },
  {
    question: "ChatGPTの有料プランに入ればAPIも無料で使えますか？",
    answer:
      "無料にはなりません。ChatGPT契約とOpenAI APIは請求体系が分かれており、API利用は別途従量課金で管理されます。予算設計時は2つを分けて見積もる必要があります。",
  },
  {
    question: "仕事で誤回答リスクを下げるには、どの運用ルールを先に決めるべきですか？",
    answer:
      "最初に「目的・前提・制約・出力形式」をテンプレ化し、次に固有名詞・数値・日付・引用元を確認するレビュー項目を固定すると、品質のブレを抑えやすくなります。",
  },
  {
    question: "GPT-5系を使うとき、プロンプトは長いほど有利ですか？",
    answer:
      "長さより構造が重要です。必要条件を短く明確に記述し、出力形式を指定した方が安定します。まず短い型で試し、必要な条件だけ追記する反復運用が実務向きです。",
  },
  {
    question: "チーム導入時に最初に決めるべきガイドライン項目は何ですか？",
    answer:
      "入力禁止情報、外部公開前レビュー、承認済み利用ツール、ログ保存方針の4点を先に固定するのが基本です。責任者と例外申請フローまで定義すると運用で崩れにくくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT GPT-5 違い",
    "GPT-5 使い方",
    "ChatGPT モデル 選び方",
    "GPT-5.2 Thinking",
    "ChatGPT API 違い",
    "ChatGPT 運用ルール",
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

export default function ChatgptGpt5GuideRoute() {
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
          { name: "ChatGPTとGPT-5の違いを整理", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptGpt5GuidePage faqItems={[...faqItems]} />
    </>
  );
}
