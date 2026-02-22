import type { Metadata } from "next";
import ChatgptFreeGuide2026Page from "@/components/academyLanding/blog/chatgpt-free-guide-2026/ChatgptFreeGuide2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPT無料版でここまでできる！2026年最新｜有料版との違いと賢い使い方 | AIリブート";
const pageDescription =
  "2026年2月最新のChatGPT無料版でできることを徹底解説。GPT-5.2・画像生成・音声会話・Web検索まで無料で使える時代に。有料版（Plus/Pro）との違い、Claude・Geminiとの比較、無料で最大限活用する5つのコツをプロンプト例つきで紹介。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-free-guide-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T20:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPTの無料版はいつまで使えますか？",
    answer:
      "OpenAIは無料プランの終了時期を発表しておらず、2026年2月時点でも継続して提供されています。サム・アルトマンCEOは過去に「基本的な機能は無料で提供し続ける」と発言しています。ただしOpenAIの方針変更の可能性はあるため、公式サイトの最新情報を定期的に確認することをおすすめします。",
  },
  {
    question: "無料版でGPT-4oは使えますか？",
    answer:
      "はい、使えます。2026年2月現在、ChatGPT無料版はGPT-5.2を搭載しています（2024年5月にGPT-4o、2026年2月にGPT-5.2へアップグレード済み）。利用回数に制限があり、上限に達すると軽量モデルに自動で切り替わります。日常的な質問には十分対応できますが、ヘビーユースには有料プランが快適です。",
  },
  {
    question: "画像生成は無料でできますか？",
    answer:
      "はい、DALL-E 3による画像生成が無料プランでも利用できます。「猫がパソコンで仕事をしているイラスト」のように日本語で指示するだけで画像が作れます。ただし1日あたりの生成回数に制限があり、大量生成が必要な場合は有料プランの検討をおすすめします。",
  },
  {
    question: "無料版に回数制限はありますか？",
    answer:
      "はい、あります。GPT-5.2の利用、画像生成、Web検索、音声会話などにそれぞれ回数・時間の制限があります。具体的な上限数はOpenAI公式には非公開で、時期やサーバー混雑状況によって変動します。体感としては、1日10〜20回程度の利用であれば制限に引っかかることはほとんどありません。",
  },
  {
    question: "Plusプランは月いくらですか？",
    answer:
      "2026年2月時点で月額$20（日本円で約3,000円）です。iOSアプリ経由で契約すると、Apple手数料分が上乗せされる場合があります。最安で契約するにはOpenAI公式サイト（chatgpt.com）からのWeb契約がおすすめです。",
  },
  {
    question: "無料版のデータはOpenAIに学習されますか？",
    answer:
      "デフォルト設定では、無料版での会話内容はOpenAIのモデル改善に使用される可能性があります。ただし、設定画面から「Chat history & training」をオフにすることで、会話データをモデル学習に使わせないよう設定できます。機密情報や個人情報は入力しないのが基本ルールです。",
  },
  {
    question: "Claude・Geminiの無料版とどう違いますか？",
    answer:
      "ChatGPTは画像生成・音声会話・Web検索など機能の幅が最も広い「万能型」です。Claudeは長文の文章品質が高く、企画書やレポートなど「書く仕事」に強み。Geminiは Google連携と最新情報の検索が得意です。3つとも無料で使えるので、用途によって使い分けるのがベストです。詳しくはChatGPT・Claude・Gemini無料プラン比較記事をご覧ください。",
  },
  {
    question: "無料版から有料版に切り替えるベストタイミングは？",
    answer:
      "「毎日の業務でChatGPTを使っていて、GPT-5.2の回数制限に週3回以上引っかかる」ようになったら検討のタイミングです。逆に、週に数回の利用であれば無料版で十分です。まずは2〜4週間無料で使ってみて、自分の利用頻度を把握してから判断しましょう。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 無料 できること",
    "ChatGPT 無料版 使い方",
    "ChatGPT 無料 有料 違い",
    "ChatGPT Free 制限",
    "ChatGPT Plus 必要",
    "ChatGPT 無料 2026",
    "ChatGPT 無料プラン GPT-5.2",
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

export default function ChatgptFreeGuide2026Route() {
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
          { name: "ChatGPT無料版でここまでできる！2026年最新", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptFreeGuide2026Page faqItems={[...faqItems]} />
    </>
  );
}
