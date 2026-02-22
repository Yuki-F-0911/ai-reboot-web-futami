import type { Metadata } from "next";
import AiAnxietyOvercomeGuidePage from "@/components/academyLanding/blog/ai-anxiety-overcome-guide/AiAnxietyOvercomeGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "「AIが怖い・難しい」を乗り越える安心スタートガイド2026｜5つの不安と正直な答え | AIリブート";
const pageDescription =
  "AIが怖い・難しいと感じる人向けに、よくある不安5つへデータと公式情報で回答。個人情報、仕事への影響、使いこなしの壁をやさしく整理し、最初の3日でやることを提示します。まずは小さな1歩から、家族や職場と安心して始めましょう。不安を言語化する質問例も使えます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-anxiety-overcome-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-21T18:00:00+09:00";
const modifiedTime = "2026-02-21";

const faqItems = [
  {
    question: "AIを使ったら個人情報が全部抜かれますか？",
    answer:
      "主要ツール（ChatGPT・Claude・Gemini）はいずれもプライバシー設定から学習データへの利用をオフにできます。名前・住所・クレジットカード番号など個人を特定する情報は入力しない、という基本ルールを守れば安全に使えます。",
  },
  {
    question: "AIに話しかけて変な回答が返ってきたらどうすれば？",
    answer:
      "AIが間違った情報を返すこと（ハルシネーション）は起こり得ます。重要な情報は公式サイトや一次ソースで裏取りする習慣をつければ問題ありません。「要約して」「箇条書きにして」のような整理系のタスクは精度が高く、最初の練習に向いています。",
  },
  {
    question: "英語ができないとAIは使えませんか？",
    answer:
      "ChatGPT・Claude・Geminiはいずれも日本語に対応しています。日本語で質問すれば日本語で答えが返ります。専門用語の翻訳や言い換えもAIが得意とする分野です。",
  },
  {
    question: "AIを使うのに特別なパソコンやスマホが必要ですか？",
    answer:
      "ブラウザが動くパソコンやスマートフォンがあれば十分です。ChatGPT・Claude・Geminiはすべてブラウザ上で動作し、専用アプリも無料でインストールできます。",
  },
  {
    question: "AIが出した文章をそのまま仕事で使っていいですか？",
    answer:
      "下書きとして活用し、最終確認・編集は必ず人が行うのが基本です。社内ルールがある場合はそちらに従ってください。AIの出力をそのまま公開・提出するのではなく、自分のフィルターを通すことで品質と信頼性が保てます。",
  },
  {
    question: "無料プランだけで本当に役に立ちますか？",
    answer:
      "はい。ChatGPTの無料プランではGPT-4oモデルが利用でき、文章作成・要約・翻訳・アイデア出しなど基本的な用途は十分カバーできます。まずは無料で試し、使う頻度が増えてから有料プランを検討するのが堅実です。",
  },
  {
    question: "AIを勉強する時間がありません。最低限なにをすれば？",
    answer:
      "ChatGPTに「今日の仕事で困っていること」を1つ相談するだけで十分です。勉強と考えず、ちょっと詳しい同僚に聞く感覚で使い始めると、自然と活用の幅が広がります。",
  },
  {
    question: "AIを使うと頭が悪くなりませんか？",
    answer:
      "AIは考えを代わりにまとめてくれるツールです。電卓を使っても計算力が完全に失われないのと同じで、AIを使っても思考力が失われるわけではありません。むしろ、AIの回答を吟味する過程で情報リテラシーが鍛えられます。",
  },
  {
    question: "周りがまだ使っていないのに自分だけ使って浮きませんか？",
    answer:
      "日本では月1回以上AIを使う人は成人の約28%（2025年Cross Marketing調査）。まだ少数派ですが、PwCの調査では「今後1年で使い始めたい」と答えた人が急増しています。早く始めた人ほど職場で頼られる存在になりやすいです。",
  },
  {
    question: "50代・60代でも今から始められますか？",
    answer:
      "もちろんです。AIは年齢を問いません。LINEでメッセージを送れる方なら、ChatGPTも同じ感覚で使えます。詳しくは「40代・50代からのAIリスキリング完全ガイド」もご覧ください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 怖い",
    "生成AI 不安",
    "AI 難しい",
    "AI 始め方 不安",
    "AI 初心者 怖い",
    "AI 使えない",
    "ChatGPT 怖い",
    "AI リスキリング 不安",
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

export default function AiAnxietyOvercomeGuideRoute() {
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
          { name: "「AIが怖い・難しい」を乗り越える安心スタートガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiAnxietyOvercomeGuidePage faqItems={[...faqItems]} />
    </>
  );
}
