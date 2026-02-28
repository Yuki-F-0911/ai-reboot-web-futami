import type { Metadata } from "next";
import AiSearchToolComparison2026Page from "@/components/academyLanding/blog/ai-search-tool-comparison-2026/AiSearchToolComparison2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "情報収集はどのAIが最強？2026年版：Perplexity・ChatGPT・Gemini・Copilotを実際に使って比べた | AIリブート";
const pageDescription =
  "調べものにはPerplexity？それともChatGPT？2026年の情報収集AI4強を初心者目線で徹底比較。速さ・正確さ・無料範囲・使い分けのコツを実例付きで解説。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-search-tool-comparison-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T12:00:00+09:00";
const modifiedTime = "2026-02-23T12:00:00+09:00";

const faqItems = [
  {
    question: "PerplexityとChatGPTどちらから始めればいいですか？",
    answer:
      "まずは「情報を素早く集める体験」を得たいならPerplexity、会話で深掘りしながら理解したいならChatGPTがおすすめです。初心者の最初の1本はこの2つのどちらかで十分です。",
  },
  {
    question: "Perplexityは無料で使えますか？",
    answer:
      "はい。Perplexityは無料プランで基本的な検索と要約が使えます。上位モデルの利用回数や高度機能に制限があるため、毎日ヘビーに使う段階で有料プランを検討するのが現実的です。",
  },
  {
    question: "ChatGPTのウェブ検索は無料版でも使えますか？",
    answer:
      "無料プランでもウェブ検索が使えるタイミングがありますが、利用可能回数や混雑状況で制限される場合があります。重要な調査は検索オン・オフを切り替えて結果を比較する運用が安全です。",
  },
  {
    question: "GeminiとGoogle検索の違いは？",
    answer:
      "Google検索は自分で複数ページを読んで判断する形式、Geminiは複数情報を要約・整理して会話しながら理解を進める形式です。検索結果の最終確認を人が行う点は共通です。",
  },
  {
    question: "Microsoft Copilotは無料ですか？",
    answer:
      "個人向けには無料で使える範囲があります。Microsoft 365やCopilot Proなどの有料プランでは、Office連携や業務向け機能が強化されます。用途に応じて段階的に選ぶのが無駄がありません。",
  },
  {
    question: "AIで調べた情報は信頼できますか？",
    answer:
      "一次情報へのリンクと更新日を確認できれば実務でも使えます。ただしAIは誤情報を混ぜる可能性があるため、数値・日付・制度名など重要部分は必ず公式ソースで再確認してください。",
  },
  {
    question: "引用元を表示してくれるAIはどれですか？",
    answer:
      "4ツールとも引用表示は可能ですが、初心者が最も直感的に確認しやすいのはPerplexityです。ChatGPT、Gemini、Copilotでもリンク提示はできますが、表示粒度は質問の仕方で差が出ます。",
  },
  {
    question: "最新のニュースを調べるなら何が一番いいですか？",
    answer:
      "速報性と引用確認を重視するならPerplexityが使いやすいです。背景説明や論点整理まで含めるならChatGPTやGeminiと併用すると理解が深まります。",
  },
  {
    question: "日本語での情報収集はどのAIが得意ですか？",
    answer:
      "4ツールとも日本語対応しています。自然な対話のしやすさはChatGPT、Googleサービスとの連携はGemini、引用付き探索はPerplexity、Office文脈はCopilotが強みです。",
  },
  {
    question: "情報収集AIを仕事に使うには何から始めればいいですか？",
    answer:
      "まずは毎日1テーマをAIで調べて、出典確認までをセットで行う習慣を作ることです。次に「要点3行＋比較表＋次アクション」を定型化すると、情報収集がそのまま業務成果に直結します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Perplexity 使い方",
    "AI 情報収集 比較",
    "Perplexity ChatGPT 比較",
    "生成AI 検索 2026",
    "Perplexity 日本語",
    "ChatGPT ウェブ検索",
    "AI 調べもの 初心者",
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

export default function AiSearchToolComparison2026Route() {
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
          { name: "情報収集AIツール比較 2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiSearchToolComparison2026Page faqItems={[...faqItems]} />
    </>
  );
}
