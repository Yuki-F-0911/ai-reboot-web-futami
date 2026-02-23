import type { Metadata } from "next";
import AiBeginnersFaq30Page from "@/components/academyLanding/blog/ai-beginners-faq-30/AiBeginnersFaq30Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIを始める前に知っておきたい30の疑問に、全部正直に答えます【2026年最新版】 | AIリブート";
const pageDescription =
  "「AIって安全なの？」「無料で使える？」「英語が苦手でも大丈夫？」「仕事を奪われる？」AI初心者が抱くリアルな30の疑問に、マーケティングトークなしで正直に答えます。都合の悪い事実も隠さず、不安を和らげながら正直に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-beginners-faq-30";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T17:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "AIって何ですか？難しいですか？",
    answer:
      "AIとは人間の言葉を理解して文章・翻訳・要約・アイデア出しなどをこなすソフトウェアです。ChatGPTやGemini、Claudeが代表例。LINEでメッセージを送れる方なら今日から使えます。ただし万能ではなく、重要な情報は必ず確認する習慣が必要です。",
  },
  {
    question: "入力した情報は外部に漏れますか？",
    answer:
      "ChatGPTはデフォルトで会話内容をAIの学習に利用する設定です（設定からオフにできます）。ClaudeとGeminiも同様の設定があります。個人情報・機密情報を入力しない＋学習設定をオフにする、この2つで大幅にリスクを下げられます。",
  },
  {
    question: "AIは嘘をつきますか？",
    answer:
      "はい、つきます。「ハルシネーション」と呼ばれる現象で、AIが事実と異なる情報を自信ありげに出力することがあります。最新モデルでは改善されていますが、重要な数字・日付・固有名詞は必ず一次ソースで確認してください。",
  },
  {
    question: "スマホだけでも使えますか？",
    answer:
      "はい使えます。ChatGPT・Claude・Geminiはすべてスマホアプリがあり（iOS/Android対応）、ブラウザ版でも利用可能です。音声入力もできるので、文字を打つのが苦手な方にも便利です。",
  },
  {
    question: "英語が苦手でも使えますか？",
    answer:
      "問題ありません。日本語で質問すれば日本語で返ってきます。英語で質問した方が精度がやや高いケースもありますが、日本語で十分に使えるので、まずは日本語でOKです。",
  },
  {
    question: "AIで副業はできますか？",
    answer:
      "できます。ライティング補助・デザイン補助・プログラミング補助・動画編集の自動化など、AIを使った副業は増えています。ただしAIだけで副業が成立するわけではなく、人間のディレクション力や専門知識との組み合わせが必要です。",
  },
  {
    question: "AIを使うと思考力が落ちますか？",
    answer:
      "使い方次第です。AIに答えを出してもらうだけでは思考力は鍛えられませんが、AIに仮説を出してもらい自分で検証・批判する使い方をすれば思考の幅が広がります。電卓を使っても計算能力が完全に失われないのと同じです。",
  },
  {
    question: "AIリブートアカデミーはどんな人向けですか？",
    answer:
      "AIを仕事に活かしたいすべての社会人の方が対象です。特に「独学では続かない」「体系的に学びたい」「周囲にAIを教えてもらえる人がいない」という方に合っています。経産省リスキリング補助金の対象プログラムで、100日間のカリキュラムで実務活用レベルを目指します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 初心者 よくある質問",
    "AI 始め方 2026",
    "ChatGPT 安全性",
    "生成AI 疑問",
    "AI 無料 使える",
    "AI 仕事 奪われる",
    "AI 英語 苦手",
    "AI セキュリティ",
    "ChatGPT 個人情報",
    "AI 入門",
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

export default function AiBeginnersFaq30Route() {
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
          { name: "AIを始める前に知っておきたい30の疑問", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiBeginnersFaq30Page />
    </>
  );
}
