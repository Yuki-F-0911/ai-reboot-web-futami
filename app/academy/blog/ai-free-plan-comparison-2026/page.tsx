import type { Metadata } from "next";
import AiFreePlanComparison2026Page from "@/components/academyLanding/blog/ai-free-plan-comparison-2026/AiFreePlanComparison2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較 | AIリブート";
const pageDescription =
  "ChatGPT・Claude・Geminiの無料プランを2026年2月時点で徹底比較。利用モデル・上限回数・ファイル添付・画像生成・外部連携の違い、実務シーン別おすすめ、課金タイミングの判断基準、30分で全ツールを試せるステップガイドまで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-free-plan-comparison-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-21T20:00:00+09:00";
const modifiedTime = "2026-02-21";

const faqItems = [
  {
    question: "無料プランだけで仕事に使えますか？",
    answer:
      "はい。メールの下書き、議事録の要約、アイデア出し、翻訳、リサーチなど基本的なビジネスタスクは無料プランで十分カバーできます。1日に数回使う程度であれば上限に引っかかることもほとんどありません。",
  },
  {
    question: "3つのうちどれか1つだけ選ぶならどれがおすすめですか？",
    answer:
      "汎用性で選ぶならChatGPT、文書作成の品質で選ぶならClaude、情報収集とGoogle連携で選ぶならGeminiです。ただし3つとも無料なので、まず全部試して自分の用途に合うものを見つけるのが最も確実です。",
  },
  {
    question: "無料プランでもAIに個人情報を入力して大丈夫ですか？",
    answer:
      "名前・住所・電話番号・クレジットカード番号など個人を特定する情報は入力しないのが基本ルールです。3ツールとも設定でデータの学習利用をオフにできますが、機密情報の取り扱いには有料プランの方が安心です。",
  },
  {
    question: "ChatGPTの無料プランでGPT-4oは使えなくなったのですか？",
    answer:
      "はい。2026年2月13日にGPT-4oは無料枠から引退し、GPT-4o miniに一本化されました。GPT-4o miniでも文章作成・要約・翻訳・アイデア出しなど基本タスクには十分な性能です。上位モデルを使いたい場合はChatGPT Plus以上のプランが必要です。",
  },
  {
    question: "Claudeの無料プランの上限に達したらどうなりますか？",
    answer:
      "「上限に達しました」と表示され、4〜8時間後にリセットされます。ピークタイム（米国東部時間の平日9〜17時）は上限が30〜40%減ることがあります。緊急時はChatGPTやGeminiに切り替えることで作業を継続できます。",
  },
  {
    question: "Geminiの無料プランでGoogleドキュメントやスプレッドシートは使えますか？",
    answer:
      "Google Workspace内のGemini機能（ドキュメント・スプレッドシート・スライドでのAI支援）は有料のGoogle AI Proプラン以上が必要です。ただしGeminiのチャット画面からテキストを生成してコピペすることは無料で可能です。",
  },
  {
    question: "スマートフォンでも使えますか？",
    answer:
      "3つとも公式スマホアプリ（iOS/Android）を提供しています。ブラウザからも利用可能です。通勤中や外出先でもAIを活用できます。",
  },
  {
    question: "無料プランで使えるモデルと有料プランのモデルはどれくらい差がありますか？",
    answer:
      "有料プランではGPT-5（ChatGPT）、Claude Opus 4.6（Claude）、Gemini Ultra（Gemini）など上位モデルが使えます。複雑な分析やコード生成では差が出ますが、日常的な文章作成・要約・翻訳では無料モデルでも実用十分な品質です。",
  },
  {
    question: "AIの回答が間違っていることはありますか？",
    answer:
      "はい。AIが事実と異なる情報を生成する「ハルシネーション」は起こり得ます。重要な数字・日付・固有名詞は必ず公式サイトや一次ソースで確認する習慣をつけてください。「要約して」「整理して」のようなタスクは比較的正確です。",
  },
  {
    question: "会社のセキュリティポリシーが厳しくても使えますか？",
    answer:
      "無料プランは個人利用を前提としているため、社内の機密情報を扱う場合は有料のビジネス/エンタープライズプランを検討してください。まずは自分のプライベートな用途で試し、業務への導入は社内のIT部門に相談するのが安全です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 無料 できること",
    "Claude 無料プラン 2026",
    "Gemini 無料 比較",
    "AI 無料 おすすめ",
    "ChatGPT Claude Gemini 違い",
    "AI 無料プラン 比較 2026",
    "生成AI 無料 始め方",
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

export default function AiFreePlanComparison2026Route() {
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
          { name: "ChatGPT・Claude・Gemini 無料プラン比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiFreePlanComparison2026Page faqItems={[...faqItems]} />
    </>
  );
}
