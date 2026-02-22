import type { Metadata } from "next";
import AiCookingRecipeGuidePage from "@/components/academyLanding/blog/ai-cooking-recipe-guide/AiCookingRecipeGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIで料理が楽しくなる！ChatGPT・Geminiを使ったレシピ&料理活用術入門 | AIリブート";
const pageDescription =
  "ChatGPT・GeminiなどのAIを料理に活用する方法を初心者向けに解説。冷蔵庫の食材からレシピ提案・1週間献立の自動生成・アレルギー対応・カロリー計算・料理の失敗リカバリー・世界料理の家庭再現まで、すぐ使えるプロンプト例を多数掲載。毎日の献立の悩みが消えます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-cooking-recipe-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T15:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "料理のレシピ提案はChatGPTとGemini、どちらが優れていますか？",
    answer:
      "どちらも料理の相談に非常に対応しています。ChatGPTは日本語の対話の自然さとレシピの詳細さが評判です。GeminiはGoogleが運営しており、最新のウェブ情報との連携が強みです。どちらも無料で使えるので、両方試して使いやすい方を選ぶのがおすすめです。",
  },
  {
    question: "AIが提案するカロリー計算は正確ですか？",
    answer:
      "AIのカロリー計算はあくまでも目安です。使用する食材の種類・産地・調理法によって実際のカロリーは異なります。ダイエットや医療目的での厳密なカロリー管理には、専門の栄養士や管理アプリと組み合わせてご利用ください。日常の参考値として活用するには十分実用的です。",
  },
  {
    question: "アレルギー対応レシピをAIに頼んでも安全ですか？",
    answer:
      "AIはアレルギー対応レシピの提案に対応していますが、食材・調味料には微量のアレルゲンが含まれることがあります。重篤なアレルギーをお持ちの方は、AIの提案をそのまま信頼せず、購入する食品のラベルを必ず自分で確認してください。参考情報として活用する姿勢が大切です。",
  },
  {
    question: "スマホのChatGPTアプリでも料理相談できますか？",
    answer:
      "はい、スマホのChatGPTアプリでも料理相談は問題なくできます。さらに、スマホのカメラで冷蔵庫の中身を撮影してChatGPTに送ると「この食材でレシピを考えて」という使い方もできます（GPT-4o以上が必要）。キッチンにスマホを持ち込んで、気軽に相談してみましょう。",
  },
  {
    question: "料理の失敗をAIに相談するとき、何を伝えればいいですか？",
    answer:
      "「何を作ったか（料理名）」「何が失敗したか（しょっぱい・固い・液体のままなど）」「使った主な食材」この3点を伝えれば十分です。「カレーを作ったら塩辛すぎました。今からできる対処法は？」のように、シンプルな一文で大丈夫です。",
  },
  {
    question: "AIに聞いたレシピで作ったら、想像と違う料理ができました。どうすればいい？",
    answer:
      "「違う点」を具体的に伝えて追加で聞いてみましょう。「もっと辛くしたい」「もう少しボリュームを出したい」「甘みを抑えたい」などと一言加えると、AIがその条件に合わせたアレンジを提案してくれます。一度の提案で完璧を求めるより、AIと対話しながら調整するのがコツです。",
  },
  {
    question: "献立の写真をAIに見せて、栄養バランスを分析してもらえますか？",
    answer:
      "ChatGPTのGPT-4o（有料プラン）やGemini Advancedでは、料理の写真を送って「この食事の栄養バランスを教えて」と頼むことができます。無料プランでも、献立のテキスト情報（朝：〇〇・昼：〇〇・夜：〇〇）を伝えるだけで栄養バランスの分析をしてもらえます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 料理 レシピ",
    "ChatGPT 献立",
    "冷蔵庫 食材 レシピ AI",
    "AI 料理 初心者",
    "Gemini 料理",
    "AI カロリー計算",
    "ChatGPT 献立 作成",
    "AI 料理 活用術",
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

export default function AiCookingRecipeGuideRoute() {
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
          { name: "AI×料理レシピ活用術入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiCookingRecipeGuidePage faqItems={[...faqItems]} />
    </>
  );
}
