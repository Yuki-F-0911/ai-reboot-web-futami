import type { Metadata } from "next";
import KlingAiGuidePage from "@/components/academyLanding/blog/kling-ai-guide/KlingAiGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Kling AI 料金・使い方ガイド【2026年最新】無料枠から有料プランを比較 | AIリブート";
const pageDescription =
  "Kling AIの料金プランを徹底比較。無料クレジット枠から有料プランの価格まで2026年最新情報で解説。登録手順・Text to Video・Image to Videoの使い方、Runway Gen-3・Sora比較、商用利用の注意点も網羅。";
const pageUrl = "https://ai-reboot.io/academy/blog/kling-ai-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "Kling AIは無料でどこまで使えますか？",
    answer:
      "Kuaishou公式IRでは、中国本土向けとしてFreeユーザーに66クレジット/日の付与、5秒1080p生成で10クレジット消費が案内されています。グローバル版の最新無料枠は画面表示で再確認してください。",
  },
  {
    question: "Kling AIのテキスト→動画は日本語でも使えますか？",
    answer:
      "日本語入力でも試せますが、再現性を高めるにはシーン、被写体、カメラ動作、尺、比率を短文で分けて指定する方法が安定します。",
  },
  {
    question: "Kling AIの画像→動画で失敗しにくいコツはありますか？",
    answer:
      "最初の画像で主被写体を1つに絞り、動きの方向とカメラ指示を1つずつ追加してください。短尺で検証してから長尺化すると破綻を減らせます。",
  },
  {
    question: "Runway Gen-3とKling AIはどちらを選ぶべきですか？",
    answer:
      "案件で商用条件の明確さを重視するならRunway有料プランが選びやすく、動きの表現や短尺素材を多く試したいならKlingが候補になります。用途と運用体制で判断するのが安全です。",
  },
  {
    question: "SoraとKling AIは料金と上限がどう違いますか？",
    answer:
      "SoraはOpenAI公式でPlus/月20ドル、Pro/月200ドルが公開され、プランで解像度や尺が異なります。Klingはクレジット消費型で、公式IRの数値は中国本土向け案内のため、グローバル条件は再確認が必要です。",
  },
  {
    question: "Kling AIは商用利用できますか？",
    answer:
      "商用利用可否は契約プランと利用規約の条件次第です。案件利用前に最新Terms、第三者権利、社内承認ルールをセットで確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Kling AI 料金",
    "Kling AI 使い方",
    "Kling AI 無料プラン",
    "Kling AI 動画生成",
    "テキスト to 動画 2026",
    "Runway Gen-3 比較",
    "Sora 比較",
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

export default function KlingAiGuideRoute() {
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
          { name: "Kling AI使い方ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <KlingAiGuidePage faqItems={[...faqItems]} />
    </>
  );
}
