import type { Metadata } from "next";
import MidjourneyVideoGuidePage from "@/components/academyLanding/blog/midjourney-video-guide/MidjourneyVideoGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Midjourney V1 Video使い方ガイド｜静止画から動画生成・設定・商用利用【2026年版】 | AIリブート";
const pageDescription =
  "Midjourney V1 Videoの使い方を2026年2月時点で解説。正式公開日（2025-06-18）、Basic/Standard/Pro/Megaの対応差、Web/DiscordでのAnimate手順、最大秒数・解像度、ダウンロードと商用利用、Runway Gen-3・Kling AIとの使い分けを整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/midjourney-video-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T21:00:00+09:00";
const modifiedTime = "2026-02-20T21:00:00+09:00";

const faqItems = [
  {
    question: "Midjourney V1 Videoはいつ正式リリースされましたか？",
    answer:
      "Midjourney公式の発表では、V1 Videoの正式公開日は2025年6月18日です。2026年リリースではないため、記事や比較情報を見る際は日付を確認してください。",
  },
  {
    question: "Basicプランでも動画生成は使えますか？",
    answer:
      "使えます。2026年2月20日時点のMidjourney公式Plan Tiersでは、動画生成は全プランでFastモード利用が可能です。ただしHD（VideoUpscale）はStandard以上が対象です。",
  },
  {
    question: "Midjourney動画は最長何秒まで生成できますか？",
    answer:
      "初回生成は4秒で、Extendを重ねると最大21秒まで延長できます。延長は4秒単位で追加されます。",
  },
  {
    question: "出力解像度は何種類ありますか？",
    answer:
      "公式ドキュメントでは360p・480p・720pが案内されています。720pはHD（VideoUpscale）工程での出力となり、プラン条件の確認が必要です。",
  },
  {
    question: "WebとDiscordはどちらで操作するのがおすすめですか？",
    answer:
      "初心者はWebのAnimateボタン起点で流れを把握し、その後Discordで反復運用へ広げる方法が失敗しにくいです。両方使えるため、作業量に応じて併用してください。",
  },
  {
    question: "Midjourney動画は商用利用できますか？",
    answer:
      "Midjourney公式は画像・動画の商用利用を認めていますが、年商100万USD超の企業利用はPro/Mega要件があります。案件利用では著作権・商標・肖像権の確認も必要です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Midjourney 動画生成 使い方",
    "Midjourney V1 Video",
    "AI動画 静止画から動画",
    "Midjourney アニメーション",
    "Midjourney 動画 商用利用",
    "Midjourney 動画 解像度",
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

export default function MidjourneyVideoGuideRoute() {
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
          { name: "Midjourney V1 Video使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <MidjourneyVideoGuidePage faqItems={[...faqItems]} />
    </>
  );
}

