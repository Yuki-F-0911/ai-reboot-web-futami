import type { Metadata } from "next";
import ChatgptCustomInstructionsGuidePage from "@/components/academyLanding/blog/chatgpt-custom-instructions-guide/ChatgptCustomInstructionsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "ChatGPTのカスタム指示（Custom Instructions）完全ガイド｜設定するだけで毎回の回答が劇的に変わる方法 | AIリブート";
const pageDescription =
  "ChatGPTのCustom Instructions（カスタム指示）の設定方法をPC・スマホ別に解説。「自分について」「回答の仕方」2つの項目の書き方と、職業別・用途別15のテンプレートを収録。設定前後の比較・メモリ機能との違いも丁寧に説明します。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-custom-instructions-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T11:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "Custom Instructionsは無料プランでも使えますか？",
    answer:
      "はい。ChatGPTの無料プラン（Free）でもCustom Instructionsは利用できます。一度設定すれば、無料プランの会話すべてに反映されます。",
  },
  {
    question: "Custom Instructionsは何文字まで書けますか？",
    answer:
      "「自分について」欄と「回答の仕方」欄それぞれ1,500文字まで入力できます（2026年2月時点）。すべてを埋める必要はなく、最初は100〜200文字程度から始めるのがおすすめです。",
  },
  {
    question: "Custom Instructionsを設定すると、すべての会話に適用されますか？",
    answer:
      "設定が有効な状態であれば、新しく始めたすべての会話に自動的に適用されます。特定の会話だけCustom Instructionsを適用したくない場合は、設定画面からオフにするか、「この会話ではカスタム指示を無視して」と伝えることができます。",
  },
  {
    question: "Custom InstructionsとGPTsの違いは何ですか？",
    answer:
      "Custom Instructionsは通常のChatGPTに対して「自分向けの設定」を保存する機能です。GPTsは特定の目的に特化したカスタムAIを作成・公開できる機能で、他者に共有することもできます。個人的な利用スタイルの調整にはCustom Instructions、特定タスク専用のAIを作るにはGPTsが向いています。",
  },
  {
    question: "Custom Instructionsに書いた内容はOpenAIに見られますか？",
    answer:
      "Custom Instructionsの内容はChatGPTの設定として保存され、OpenAIのプライバシーポリシーに従って管理されます。モデル学習への利用をオフにする場合は、設定 → Data Controls → 「Improve the model for everyone」をオフにしてください。氏名・住所・クレジットカード番号などの個人情報は書かないことをおすすめします。",
  },
  {
    question: "Custom Instructionsを複数パターン使い分けることはできますか？",
    answer:
      "通常のCustom Instructionsは1セットのみ保存できます。複数パターンを使い分けたい場合は、GPTsで「仕事用」「趣味用」など目的別のカスタムAIを作成するのがおすすめです。または、会話の冒頭に「今日は〇〇モードで答えて」と一時的な指示を入れる方法もあります。",
  },
  {
    question: "Custom Instructionsを設定しても思った通りの回答にならない場合はどうすれば？",
    answer:
      "まず設定が有効になっているかを確認（右上のアカウントメニュー → Custom Instructionsがオンになっているか）。次に、より具体的な言葉に書き直しましょう。「丁寧に」より「箇条書きを使い、見出しをつけ、400字以内で答えて」のように数値・形式を指定すると精度が上がります。",
  },
  {
    question: "スマホのChatGPTアプリでもCustom Instructionsを設定できますか？",
    answer:
      "はい。iOS・Androidアプリどちらでも設定できます。アプリの左上メニュー（ハンバーガーメニュー）→ アカウント名 → Custom Instructionsから設定画面に進めます。PC版で設定した内容はアプリでも同期されます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT カスタム指示",
    "Custom Instructions",
    "ChatGPT パーソナライズ",
    "ChatGPT 設定",
    "ChatGPT 使い方",
    "カスタム指示 テンプレート",
    "ChatGPT 初心者",
    "ChatGPT 自分専用",
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

export default function ChatgptCustomInstructionsGuideRoute() {
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
          { name: "ChatGPTカスタム指示完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptCustomInstructionsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
