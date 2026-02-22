import type { Metadata } from "next";
import AppleIntelligenceGuidePage from "@/components/academyLanding/blog/apple-intelligence-guide/AppleIntelligenceGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Apple Intelligence完全ガイド2026：iPhoneのAI機能を初心者向けに徹底解説 | AIリブート";
const pageDescription =
  "iPhone・Macに搭載されたApple Intelligenceの全機能を初心者向けに解説。文章の書き直し・画像生成・Siriの進化・通知要約など、日本語対応状況や使い方をわかりやすく紹介。";
const pageUrl = "https://ai-reboot.io/academy/blog/apple-intelligence-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T09:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "Apple Intelligenceは無料で使えますか？",
    answer:
      "対応機種と対応OSであれば、Apple Intelligenceの基本機能は追加課金なしで使えます。個別の外部サービスを連携する場合は、そのサービス側の料金体系が適用されることがあります。",
  },
  {
    question: "iPhone 15（無印）でも使えますか？",
    answer:
      "Apple IntelligenceはiPhone 15 Pro / iPhone 15 Pro Max以降が対象で、iPhone 15（無印）とiPhone 15 Plusは対象外です。購入前に対象機種を確認してください。",
  },
  {
    question: "日本語には対応していますか？",
    answer:
      "2026年時点で日本語対応は順次拡大しており、多くの基本機能は日本語で使えます。機能や地域設定によっては段階対応中の項目もあるため、最新のApple公式案内で確認するのが確実です。",
  },
  {
    question: "プライバシーは大丈夫ですか？",
    answer:
      "Apple Intelligenceはオンデバイス処理を中心に設計され、必要な処理だけをPrivate Cloud Computeに送る仕組みです。すべての機能で完全に端末内完結ではありませんが、データ最小化を前提に設計されています。",
  },
  {
    question: "ChatGPTとApple Intelligenceの違いは？",
    answer:
      "Apple IntelligenceはiPhone・iPad・Macに統合された日常操作向けAI、ChatGPTは幅広い対話や発想支援に強い汎用AIです。日常の端末操作はApple Intelligence、深い壁打ちはChatGPTという使い分けが実用的です。",
  },
  {
    question: "Siriが賢くなったというのは本当ですか？",
    answer:
      "はい。文脈を引き継ぐ対話、画面の内容を踏まえた補助、必要に応じたChatGPT連携など、以前より実務で使える場面が増えています。短い指示でも意図が伝わりやすくなっています。",
  },
  {
    question: "Apple Intelligence対応機種はどれですか？",
    answer:
      "iPhoneは15 Pro系以降、iPadとMacはApple Silicon搭載モデルが中心です。OS要件もあるため、機種だけでなくiOS / iPadOS / macOSのバージョンも確認してください。",
  },
  {
    question: "オンにするとバッテリーが減りますか？",
    answer:
      "AI処理の内容によって消費電力は増減します。常に大きく減るわけではありませんが、画像生成や長文処理を多用すると体感差が出ることがあります。まずは必要機能から試すのがおすすめです。",
  },
  {
    question: "Androidでも使えますか？",
    answer:
      "Apple IntelligenceはAppleデバイス向け機能のため、Androidでは利用できません。AndroidではGeminiなど、各プラットフォーム向けのAI機能を利用する形になります。",
  },
  {
    question: "MacやiPadでも使えますか？",
    answer:
      "はい。対応するiPadとMacでも利用できます。文章の書き直し、通知要約、Siri補助など、端末ごとに使える機能が連携するため、複数デバイスを使う人ほど恩恵が大きくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Apple Intelligence",
    "Apple Intelligence 日本語",
    "Apple Intelligence iPhone 使い方",
    "iPhone AI機能",
    "Apple Intelligence 対応機種",
    "Siri AI 進化",
    "iOS AI 初心者",
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

export default function AppleIntelligenceGuideRoute() {
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
          { name: "Apple Intelligence完全ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AppleIntelligenceGuidePage faqItems={[...faqItems]} />
    </>
  );
}
