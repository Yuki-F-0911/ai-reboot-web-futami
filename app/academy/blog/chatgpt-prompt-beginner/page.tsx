import type { Metadata } from "next";
import ChatgptPromptBeginnerPage from "@/components/academyLanding/blog/chatgpt-prompt-beginner/ChatgptPromptBeginnerPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例 | AIリブート";
const pageDescription =
  "ChatGPT初心者向けに、思い通りの答えが返らない原因と改善手順を整理。役割指定・ステップ分解・出力形式指定など15のプロンプト型、実務/学習/副業のNGとOK対比、追質問を使った会話設計、APIでのsystemとuserの分け方まで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-prompt-beginner";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "ChatGPTのプロンプトは長く書いた方が精度は上がりますか？",
    answer:
      "長さより構造が重要です。目的、前提、制約、出力形式を短く明確に書く方が安定します。最初は短い型で試し、足りない条件だけ追加する運用が初心者向きです。",
  },
  {
    question: "初心者は15の型のうち、どこから使い始めるのが効果的ですか？",
    answer:
      "まずは「役割指定」「出力形式指定」「ステップ分解」の3つから始めると効果が出やすいです。この3つで回答の粒度と再現性が大きく改善します。",
  },
  {
    question: "回答がズレたとき、最初に修正すべき項目は何ですか？",
    answer:
      "最初に修正するのは目的と前提です。次に文字数や箇条書きなどの出力形式を追加してください。いきなり全文を書き直すより、1要素ずつ調整した方が早く改善できます。",
  },
  {
    question: "追質問をさせる設計と、させない設計はどう使い分けますか？",
    answer:
      "精度優先なら追質問を許可し、速度優先なら仮定を置いて先に初稿を出させる設計が有効です。どちらを採るかを最初に明示すると、やり取りの無駄を減らせます。",
  },
  {
    question: "APIでsystem/developer promptとuser promptはどう分けるべきですか？",
    answer:
      "system/developer側には役割、禁止事項、語調、優先ルールなど固定事項を置き、user側には案件ごとの入力データと依頼内容を置くのが基本です。固定と可変を分けると運用しやすくなります。",
  },
  {
    question: "毎日使うなら、どこまでテンプレ化すると効果がありますか？",
    answer:
      "よく使う業務を3〜5本選び、目的、入力項目、出力形式、確認観点までテンプレ化すると効果が安定します。テンプレを週1回見直して更新すると品質が落ちにくくなります。",
  },
  {
    question: "日本語と英語のどちらでプロンプトを書くと精度が上がりますか？",
    answer:
      "初心者はまず日本語で問題ありません。重要なのは言語より構造です。目的と条件を明確に書ければ十分品質は上がります。専門用語が多い分野では、必要箇所だけ英語キーワードを併記すると安定しやすくなります。",
  },
  {
    question: "テンプレを使っても回答が毎回ぶれるのはなぜですか？",
    answer:
      "入力データの粒度が揃っていないことが主因です。テンプレ側だけでなく、渡す材料の形式と量を標準化してください。さらに評価基準を3点程度明示すると、出力の揺れを実務レベルまで抑えやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT プロンプト 書き方 入門",
    "ChatGPT 使いこなし方 初心者",
    "プロンプト 例文",
    "ChatGPT 指示 コツ",
    "ChatGPT NG OK 例",
    "ChatGPT 会話設計",
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

export default function ChatgptPromptBeginnerRoute() {
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
          { name: "ChatGPTプロンプトの書き方入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptPromptBeginnerPage faqItems={[...faqItems]} />
    </>
  );
}
