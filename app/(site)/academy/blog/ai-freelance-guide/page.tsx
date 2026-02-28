import type { Metadata } from "next";
import AiFreelanceGuidePage from "@/components/academyLanding/blog/ai-freelance-guide/AiFreelanceGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "フリーランスがAIを使うと収入・時間はどう変わる？実践ガイド【2026年版】 | AIリブート";
const pageDescription =
  "フリーランサーがAIを活用して生産性を高め、収入アップする方法を解説。提案書作成・見積り・納品物品質向上から、営業・クライアント対応まで実践的に紹介します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-freelance-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-26T09:00:00+09:00";
const modifiedTime = "2026-02-26T09:00:00+09:00";

const faqItems = [
  {
    question: "フリーランスがAIを使うことをクライアントに伝える必要がありますか？",
    answer:
      "義務はありませんが、NDAや契約書にAI利用の制限が含まれる場合は事前確認が必要です。また、クライアントから「AIを使っているか」と聞かれた場合は正直に答えるほうが信頼関係の観点で安全です。AIをあくまで補助ツールとして使い、最終的な判断・品質担保は自分で行う姿勢を持つことが重要です。",
  },
  {
    question: "どのAIツールがフリーランスに一番向いていますか？",
    answer:
      "1ツールに絞る必要はありません。長文の推敲や文脈調整はClaude、構造化出力や反復作業はChatGPT、リサーチはPerplexityというように、用途に応じて使い分けるのが現実的です。まずは無料プランで使い比べ、自分の仕事に合うものを見つけるのが最初のステップです。",
  },
  {
    question: "AIを使うことで、クライアントから単価を下げろと言われませんか？",
    answer:
      "「AIで早くなったんだから安くして」という要求を受けるケースはあります。対策は、単価の根拠を「時間」ではなく「成果・品質・専門性」に置くことです。AIによる効率化はあなたの生産性向上であり、クライアントが受け取る成果物の品質が変わらない限り、単価交渉の材料にはなりません。",
  },
  {
    question: "ChatGPTの有料プランは必要ですか？",
    answer:
      "フリーランスとして本格活用するなら有料プラン（ChatGPT Plus、月額約3,000円）の検討を推奨します。GPT-4の利用、高度な推論、ファイルアップロード機能が使えるようになり、提案書作成や成果物レビューの精度が上がります。Claudeのフリープランも一定量使えるので、両方試してから判断するのが賢明です。",
  },
  {
    question: "AIを使いすぎると自分のスキルが落ちますか？",
    answer:
      "「考える過程をAIに丸投げする」使い方を続けると、判断力や専門性が磨かれないリスクはあります。AIを「答えを出す機械」としてではなく「思考を広げるパートナー」として使うことが重要です。AIの出力を批判的に評価し、自分の判断を加える習慣を持つことで、スキルと効率化を両立できます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "フリーランス AI 活用",
    "フリーランス ChatGPT",
    "フリーランス AI 効率化",
    "フリーランス 生成AI",
    "フリーランス 副業 AI",
    "フリーランス 時短 AI",
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

export default function AiFreelanceGuideRoute() {
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
          { name: "フリーランスがAIを使うと収入・時間はどう変わる？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiFreelanceGuidePage faqItems={[...faqItems]} />
    </>
  );
}
