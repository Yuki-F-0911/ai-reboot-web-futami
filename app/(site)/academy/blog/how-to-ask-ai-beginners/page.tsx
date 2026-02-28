import type { Metadata } from "next";
import HowToAskAiBeginnersPage from "@/components/academyLanding/blog/how-to-ask-ai-beginners/HowToAskAiBeginnersPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPTに何を聞けばいい？｜AIへの質問・相談の仕方がわかる完全入門ガイド | AIリブート";
const pageDescription =
  "ChatGPTに何を聞けばいいか迷う初心者向けに、AIへの質問5パターンと今日すぐ使える10例を解説。検索ではなく「相談」として使うコツがわかります。まずは1つ質問して、失敗しない聞き方で毎日の疑問解決を加速しましょう。記事内テンプレでそのまま実践できます。";
const pageUrl = "https://ai-reboot.io/academy/blog/how-to-ask-ai-beginners";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T19:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPTに変な質問をしたら怒られますか？",
    answer:
      "いいえ、怒られません。ChatGPTは感情を持っていないので、どんな質問をしても呆れたり怒ったりしません。「こんな簡単なこと聞いていいのかな」と遠慮する必要はまったくありません。むしろ、気になったことを何でも聞いてみることで、AIとの対話のコツが自然と身につきます。",
  },
  {
    question: "ChatGPTと検索エンジン（Google）はどう使い分ければいいですか？",
    answer:
      "「今すぐ1つの正解がほしい」なら検索、「自分の状況に合った回答がほしい」「考えを整理したい」「文章を作ってほしい」ならAIが向いています。たとえば「東京タワーの高さ」は検索、「東京タワー周辺で子連れランチにおすすめの店を予算別に教えて」はAIが得意です。",
  },
  {
    question: "ChatGPTの回答が的外れなときはどうすればいいですか？",
    answer:
      "「違うんだよね」「そうじゃなくて、○○が知りたい」と遠慮せず伝えてください。AIは最初の質問だけでは意図を100%理解できないことがあります。でも「もっと○○にして」「別の角度から」とフィードバックすれば、回答はどんどん的確になります。1回で完璧を求めず、会話を重ねるのがコツです。",
  },
  {
    question: "AIに個人情報を入力しても大丈夫ですか？",
    answer:
      "名前・住所・電話番号・マイナンバーなど特定個人を識別できる情報は入力しないのが基本ルールです。ChatGPTには「チャット履歴をモデル学習に使わない」設定があるので、気になる方はオンにしておきましょう。業務での利用は会社のガイドラインに従ってください。",
  },
  {
    question: "ChatGPTは日本語で聞いても大丈夫ですか？",
    answer:
      "はい、まったく問題ありません。ChatGPT・Claude・Geminiいずれも日本語に対応しており、自然な日本語で質問すれば日本語で回答してくれます。敬語でもタメ口でもOKです。",
  },
  {
    question: "無料でどれくらい使えますか？お金はかかりますか？",
    answer:
      "ChatGPTは無料プランで利用可能です（GPT-5.2が5時間あたり10回、その後はGPT-5 miniで継続利用可）。Claudeの無料プランではSonnet 4.6が使え、GeminiはGemini 3 Flashが回数無制限です。日常的な質問や文章作成なら無料プランで十分です。2026年2月時点の情報ですので、最新の料金は各公式サイトをご確認ください。",
  },
  {
    question: "スマホからでも使えますか？",
    answer:
      "はい、ChatGPT・Claude・GeminiいずれもiOS/Androidアプリがあり、スマホから利用できます。音声入力にも対応しているので、キーボードで打つのが苦手な方は話しかけるだけでもOKです。通勤中やちょっとした空き時間に気軽に使えます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 何を聞けばいい",
    "AI 質問の仕方",
    "ChatGPT 使い方 わからない",
    "生成AI 何ができる",
    "ChatGPT 聞き方 コツ",
    "AI 初心者 質問例",
    "ChatGPT 入門",
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

export default function HowToAskAiBeginnersRoute() {
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
          { name: "ChatGPTに何を聞けばいい？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <HowToAskAiBeginnersPage faqItems={[...faqItems]} />
    </>
  );
}
