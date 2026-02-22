import type { Metadata } from "next";
import AiParentingGuidePage from "@/components/academyLanding/blog/ai-parenting-guide/AiParentingGuidePage";
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
} from "@/components/seo/StructuredData";

const pageTitle =
  "AI×子育て・育児活用ガイド｜忙しいパパ・ママのためのChatGPT実践術20選【2026年版】 | AIリブート";
const pageDescription =
  "献立の自動提案、宿題サポート、PTA文書作成、育児の悩み相談まで。忙しい子育て世代がAIを味方にする20の実践術を、そのまま使えるプロンプト例つきで紹介。ChatGPT・Claude・Geminiの無料プランで今日から始められます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-parenting-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T22:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "子どもにAIを使わせても大丈夫ですか？",
    answer:
      "ChatGPTは13歳以上、保護者の同意があれば利用可能です（OpenAIの利用規約）。小学生以下のお子さんが使う場合は、必ず保護者と一緒に使いましょう。「答えを教えて」ではなく「ヒントを出して」という使い方を教えると、考える力も育ちます。",
  },
  {
    question: "子どもの名前や学校名をAIに入力しても大丈夫？",
    answer:
      "個人情報（名前・学校名・住所など）は入力しないことをおすすめします。「小学3年生の子ども」「都内の公立小学校」のように、個人を特定できない範囲で十分です。ChatGPT・Claude・Geminiはいずれも無料プランでの入力データを学習に使わないオプトアウト設定が可能です。",
  },
  {
    question: "AIの回答をそのまま宿題に使っても問題ない？",
    answer:
      "AIの回答をそのまま提出するのは避けましょう。学校の宿題は「考える力」を育てるためのもの。AIには「答えではなくヒントだけ教えて」とお願いし、最終的にはお子さん自身の言葉でまとめることが大切です。",
  },
  {
    question: "スマホだけでも使えますか？",
    answer:
      "はい、スマホだけで十分使えます。ChatGPT・Claude・GeminiはすべてiOS/Android対応のアプリがあり、ブラウザからも利用可能です。料理中や子どもの世話中は音声入力で話しかけることもできます。",
  },
  {
    question: "AIに育児の悩みを相談して意味はありますか？",
    answer:
      "AIは「否定しないで聞いてくれる相手」として優秀です。夜中の授乳中や、子どもが寝たあとに一人で抱え込みがちな悩みを言語化するだけでも気持ちが整理されます。ただし、深刻な育児ノイローゼや産後うつの兆候がある場合は、自治体の子育て相談窓口や医療機関への相談を最優先にしてください。",
  },
  {
    question: "無料でどこまで使えますか？",
    answer:
      "2026年2月時点で、ChatGPTはGPT-5.2が5時間あたり10回（制限後はGPT-5 miniで継続利用可能）、ClaudeはSonnet 4.6が無料、GeminiはGemini 3 Flashが回数無制限で使えます。この記事で紹介した20の実践術はすべて無料プランで実行できます。",
  },
  {
    question: "AIに頼りすぎて、子どもの考える力が育たなくなりませんか？",
    answer:
      "使い方次第です。「答えを教えて」ではなく「ヒントを出して」「考え方を教えて」とお願いすれば、AIはむしろ考える力を引き出すサポーターになります。親自身がAIとやり取りする姿を見せることで、子どもに「情報を吟味する力」を自然に教えることもできます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 子育て 活用",
    "ChatGPT 育児",
    "AI 子育て 便利",
    "生成AI ママ パパ 使い方",
    "ChatGPT 子供 教育",
    "AI 献立 子育て",
    "ChatGPT 宿題 サポート",
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

export default function AiParentingGuideRoute() {
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
          {
            name: "AI×子育て・育児活用ガイド｜ChatGPT実践術20選",
            url: pageUrl,
          },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiParentingGuidePage faqItems={[...faqItems]} />
    </>
  );
}
