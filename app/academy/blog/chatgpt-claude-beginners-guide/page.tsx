import type { Metadata } from "next";
import ChatgptClaudeBeginnersGuidePage from "@/components/academyLanding/blog/chatgpt-claude-beginners-guide/ChatgptClaudeBeginnersGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPT・Claude初心者ガイド｜最初の1週間でできること | AIリブート";
const pageDescription =
  "「ChatGPT 使い方 初心者」「Claude 使い方 初心者」を調べる方向けに、アカウント作成から最初の活用までを整理。無料/有料の違い、1週間で試す使い方、失敗対策を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-claude-beginners-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-17T12:00:00+09:00";

const faqItems = [
  {
    question: "ChatGPTとClaudeはどちらから始めればよいですか？",
    answer:
      "最初はどちらか一方で基本操作を覚え、その後にもう一方で同じ質問を試して比較する方法が進めやすいです。使い分けは目的と出力の相性で決めるのが一般的です。",
  },
  {
    question: "無料プランだけでも実用レベルで使えますか？",
    answer:
      "はい。要約、文章下書き、アイデア整理などの基本用途は無料プランでも十分試せます。利用頻度や機能要件が増えた段階で有料プランを検討すると無理がありません。",
  },
  {
    question: "最初の質問でうまく答えが出ないときはどうすればよいですか？",
    answer:
      "目的、前提、出力形式を分けて伝えると精度が上がりやすくなります。質問を1回で完成させるより、追質問で調整する前提で使うのが効果的です。",
  },
  {
    question: "AIの回答はそのまま使っても問題ないですか？",
    answer:
      "そのまま利用せず、事実確認と文脈確認を行うのが基本です。特に社外共有資料や顧客向け文面は、人の最終確認を必ず入れる運用が安全です。",
  },
  {
    question: "仕事で使うときの最初のテーマは何がよいですか？",
    answer:
      "影響範囲が小さい定型業務から始めるのが一般的です。たとえば議事録要約、メール下書き、情報整理などから始めると導入しやすくなります。",
  },
  {
    question: "有料プランへ切り替える判断基準はありますか？",
    answer:
      "日常業務で継続利用し、応答品質や利用上限、追加機能の必要性が明確になった時点が判断しやすいです。まずは無料プランで利用パターンを固めると選択ミスを減らせます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 使い方 初心者",
    "Claude 使い方 初心者",
    "生成AI 初心者ガイド",
    "AI基礎知識",
    "ChatGPT Claude 比較",
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

export default function ChatgptClaudeBeginnersGuideRoute() {
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
          { name: "ChatGPT・Claude初心者ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptClaudeBeginnersGuidePage faqItems={[...faqItems]} />
    </>
  );
}
