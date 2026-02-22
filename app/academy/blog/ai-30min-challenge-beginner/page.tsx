import type { Metadata } from "next";
import Ai30MinChallengeBeginnerPage from "@/components/academyLanding/blog/ai-30min-challenge-beginner/Ai30MinChallengeBeginnerPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIを今日から実感！初心者でも30分で体験できる7つのチャレンジ | AIリブート";
const pageDescription =
  "「生成AIって何がいいの？」をすぐ自分で体験してほしい。コピペで試せる7つのプロンプトチャレンジで、AIの手触り感を30分以内に実感。難しい知識ゼロでOK、スマホだけで始められます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-30min-challenge-beginner";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T14:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPTのアカウントを持っていなくても試せますか？",
    answer:
      "ChatGPTはchatgpt.comにアクセスし、Googleアカウントまたはメールアドレスで無料登録できます。登録は2〜3分で完了します。Claudeはclaude.ai、GeminiはGoogleアカウントがあればすぐに使えます。すべて無料です。",
  },
  {
    question: "スマホだけで7つのチャレンジは全部できますか？",
    answer:
      "できます。ChatGPTの公式アプリ（iOS・Android）をインストールするか、スマホのブラウザからchatgpt.comにアクセスすればOKです。音声入力も使えるので、テキスト入力が面倒な方は話しかけるだけでも試せます。",
  },
  {
    question: "チャレンジに失敗したらどうすればいいですか？",
    answer:
      "AIは何度でも試せます。「もう少しシンプルに」「もっと具体的に」「別のアプローチで考えて」と追加指示を出せば、AIが調整してくれます。失敗はなく、すべてが学習です。",
  },
  {
    question: "30分で本当に終わりますか？",
    answer:
      "各チャレンジの所要時間を合計すると最大30分程度です。ただし、AIの回答が面白くてつい読み込んでしまうことも多く、実際には30分以上楽しめることが多いです。",
  },
  {
    question: "プロンプトをそのままコピペしていいですか？",
    answer:
      "はい、ぜひそのままコピペして試してください。ただし、「（あなたの仕事を入力）」のような括弧部分は自分の状況に合わせて書き換えてください。自分の状況を入れることで、回答の精度が大きく上がります。",
  },
  {
    question: "AIに個人情報を入力しても安全ですか？",
    answer:
      "名前・住所・電話番号・クレジットカード番号などの個人情報は入力しないのが基本ルールです。「30代会社員」「営業職」のように属性だけ伝える形で十分です。プライバシー設定でAIの学習利用をオフにもできます。",
  },
  {
    question: "7つのチャレンジを全部終えた後、次に何をすればいいですか？",
    answer:
      "自分の仕事や生活で「こんなことも頼めるかな？」と思ったことをAIに試してみましょう。AIリブートのLINEでは30日学習プランテンプレを無料配布しています。今日の体験をベースに、自分だけの学習計画を立てられます。",
  },
  {
    question: "ChatGPT以外のAIツールでもチャレンジできますか？",
    answer:
      "できます。Claude（claude.ai）やGemini（gemini.google.com）でも同じプロンプトが使えます。それぞれ回答のスタイルが少し異なるので、複数のツールで試し比べてみるのも面白い体験になります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 初心者 試し方",
    "ChatGPT 使い方 初めて",
    "AI すぐ試せる",
    "生成AI 体験 方法",
    "ChatGPT 始め方 簡単",
    "AI 30分 体験",
    "ChatGPT 初心者 チャレンジ",
    "生成AI 今日から始める",
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

export default function Ai30MinChallengeBeginnerRoute() {
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
          { name: "初心者でも30分で体験できる7つのチャレンジ", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <Ai30MinChallengeBeginnerPage faqItems={[...faqItems]} />
    </>
  );
}
