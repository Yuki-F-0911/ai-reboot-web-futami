import type { Metadata } from "next";
import AiToolCostGuide2026Page from "@/components/academyLanding/blog/ai-tool-cost-guide-2026/AiToolCostGuide2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AI有料プランの費用対効果を正直比較2026｜ChatGPT・Claude・Gemini、月いくら払うべき？ | AIリブート";
const pageDescription =
  "ChatGPT Plus・Claude Pro・Gemini Advanced・Perplexity Proを価格・性能・コスパで正直比較。無料プランでできることとできないことを整理し、ユーザータイプ別のおすすめプランと有料化すべきタイミングの目安を解説。月10時間使う場合のコストシミュレーションも掲載。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-tool-cost-guide-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T10:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPT PlusとClaude Pro、どちらがコスパいいですか？",
    answer:
      "用途次第です。長文処理・複雑な分析・コード生成が多いならClaude Proが有利。画像生成（DALL-E）・音声入力・GPTsカスタマイズを活用したいならChatGPT Plusがおすすめです。どちらも同価格帯（約3,000円/月）なので、まず1週間無料トライアルで使い比べて決めましょう。",
  },
  {
    question: "複数のAIに課金するのは無駄ですか？",
    answer:
      "使い分けができているなら無駄ではありません。ただし最初は1つに絞り、週10時間以上使うようになってから2本目を検討するのが合理的です。初月は1つのAIを深く使い込む方が、費用対効果は高くなります。",
  },
  {
    question: "年払いと月払い、どちらがお得ですか？",
    answer:
      "2026年2月時点、ChatGPT・Claude・Geminiともに月払いのみで公式の年払い割引は設けられていません。Perplexity Proのみ年払いで約17%割引があります（月2,000円相当→年払いで1,680円/月換算）。",
  },
  {
    question: "無料プランから有料プランに移行すると何が変わりますか？",
    answer:
      "主な変化は4つです：①回答回数の制限解除（実質無制限）、②最新・最高性能モデルへのフルアクセス、③ファイルのアップロード容量増加、④優先アクセス（サーバー混雑時のレスポンス改善）。特に「制限に引っかかってイライラする」なら有料化する価値があります。",
  },
  {
    question: "AIの有料プランは経費計上できますか？",
    answer:
      "業務で使用する場合は経費として計上できます。法人なら「ソフトウェア費用」や「業務委託費」として処理するケースが多いです。ただし税務上の扱いは法人・個人事業主・サラリーマンによって異なるため、税理士に確認することをおすすめします。",
  },
  {
    question: "Gemini Advancedは他のGoogleサービスと連携できますか？",
    answer:
      "はい。Google One AI Premiumプラン（月2,900円）に含まれるGemini Advancedは、Gmail・Googleドキュメント・スプレッドシート・Meet・カレンダーと深く統合されています。Googleワークスペースをすでに業務で使っている方には特に費用対効果が高いです。",
  },
  {
    question: "Perplexity Proは何が違いますか？",
    answer:
      "Perplexityはリアルタイム検索特化のAIです。Proに課金するとGPT-4o・Claude・Geminiなど複数モデルの切り替えが可能になり、詳細回答の制限が大幅に緩和されます。「最新情報を調べながらAIに整理してもらいたい」という用途に最適です。",
  },
  {
    question: "学生割引などはありますか？",
    answer:
      "2026年2月時点、ChatGPT・Claude・Geminiに公式の学生割引はありません。Perplexity Proは大学のメールアドレス（.edu）を持つ学生向けに割引プログラムがあります。Claude Teamプランは一部の教育機関向け割引あり（Anthropic Educationプログラム）。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT Plus 費用対効果",
    "Claude Pro 料金比較",
    "Gemini Advanced 価格",
    "AI 有料プラン 比較 2026",
    "ChatGPT Plus Claude Pro どちら",
    "AI サブスクリプション おすすめ",
    "生成AI 月額料金",
    "AI 無料 有料 違い",
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

export default function AiToolCostGuide2026Route() {
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
          { name: "AI有料プランの費用対効果を正直比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiToolCostGuide2026Page faqItems={[...faqItems]} />
    </>
  );
}
