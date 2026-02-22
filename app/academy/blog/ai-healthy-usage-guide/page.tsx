import type { Metadata } from "next";
import AiHealthyUsageGuidePage from "@/components/academyLanding/blog/ai-healthy-usage-guide/AiHealthyUsageGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIに頼りすぎていない？健全なAI活用のための7つのルール｜思考力・判断力を守りながら使う方法 | AIリブート";
const pageDescription =
  "「ChatGPTに何でも頼って自分で考えなくなってきた」と不安を感じている方へ。AI依存の正体・使うべき場面と自分でやるべき場面の見分け方・健全なAI活用の7つのルール・1週間改善プランをわかりやすく解説。思考力・判断力を守りながらAIを味方にする方法を紹介します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-healthy-usage-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T13:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "AIを使うと本当に思考力が落ちますか？",
    answer:
      "使い方次第です。AIに「考える作業」ごと丸投げすれば、思考する機会が減り、長期的には自分の思考力が鍛えられにくくなります。一方、「自分でまず考えてからAIで検証・補強する」使い方をすれば、むしろ思考の質が上がります。電卓が暗算力を完全に奪わないのと同じで、AIの活用方法が重要です。",
  },
  {
    question: "AIに頼りすぎているかどうか、どうすれば分かりますか？",
    answer:
      "以下の問いに2つ以上当てはまる場合は注意が必要です。①AIなしでは同じ仕事をこなせる自信がない、②AIの回答をほとんど確認せずに使っている、③自分の意見をまとめる前にすぐAIに質問している、④AIなしで書いた文章に自信が持てなくなった、⑤仕事中にAIを使わない時間がほとんどない。",
  },
  {
    question: "AIを使わないと仕事で遅れを取りませんか？",
    answer:
      "AIをまったく使わないのもリスクです。重要なのはバランスです。AIが得意な繰り返し作業・情報整理・下書き生成はAIに任せ、最終判断・顧客対応・創造的な意思決定は自分で行う、というすみ分けが理想です。AIを使わないことより、使い方を間違えるほうが長期的なリスクは大きいです。",
  },
  {
    question: "プライバシーの面でAIに何を入力すべきでないですか？",
    answer:
      "入力を避けるべき情報：①氏名・住所・電話番号・クレジットカード番号などの個人特定情報、②会社の機密情報・未公開の製品情報・顧客の個人情報、③医療・法律・金融に関する他者の具体的な情報。チャット履歴はプラットフォームに保存されるため、「これが漏れても困らない情報か」を基準に判断してください。",
  },
  {
    question: "子どもや学生がAIを使うことは問題ありませんか？",
    answer:
      "学習の目的によって異なります。調べもの・アイデア出し・翻訳の補助としての活用は問題ありません。ただし、レポートや作文の本文をそのままAIに書かせるのは、思考力・文章力を身につける機会を奪います。「AIを使ってアイデアを出し、文章は自分で書く」という使い方が学習段階には適切です。",
  },
  {
    question: "AIが間違えた情報を信じてしまったらどうすればいいですか？",
    answer:
      "重要な意思決定に関わる情報は必ず一次ソース（公式サイト・学術論文・政府発表など）で確認する習慣をつけてください。AIは「もっともらしい文章」を生成しますが、事実と異なる情報（ハルシネーション）が混入することがあります。「この情報の出典を教えて」とAIに聞くことも有効ですが、出典自体も存在しない場合があるため注意が必要です。",
  },
  {
    question: "AIを使わない時間を作るメリットは何ですか？",
    answer:
      "AI不使用の時間を意識的に作ることで、①自分の思考や判断の癖を把握できる、②AIがない状況でも対応できる基礎力が維持される、③AIの出力と自分の考えの差を客観的に評価できるようになる、という効果があります。1日30分でも「AIなしで考える時間」を設けるだけで、思考力の維持につながります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 頼りすぎ",
    "AI 依存",
    "健全なAI活用",
    "AI 思考力",
    "AI 使いすぎ",
    "AI 付き合い方",
    "ChatGPT 依存",
    "AI 判断力",
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

export default function AiHealthyUsageGuideRoute() {
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
          { name: "健全なAI活用の7つのルール", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiHealthyUsageGuidePage faqItems={[...faqItems]} />
    </>
  );
}
