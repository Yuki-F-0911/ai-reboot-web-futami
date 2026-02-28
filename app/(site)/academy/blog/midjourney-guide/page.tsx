import type { Metadata } from "next";
import MidjourneyGuidePage from "@/components/academyLanding/blog/midjourney-guide/MidjourneyGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Midjourney v7使い方完全ガイド｜Discord・Web・料金・商用利用【2026年版】 | AIリブート";
const pageDescription =
  "Midjourney v7の始め方を2026年版で解説。Discord経由とWebアプリの使い分け、日本語プロンプトの実態、料金プラン（Basic/Standard/Pro/Mega）、DALL·E 3・Stable Diffusion・Canva AI比較、商用利用と著作権の注意点を整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/midjourney-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T20:00:00+09:00";
const modifiedTime = "2026-02-20T20:00:00+09:00";

const faqItems = [
  {
    question: "Midjourney v7は無料で使えますか？",
    answer:
      "2026年2月20日時点では、Midjourneyは有料プラン（Basic/Standard/Pro/Mega）前提での利用が基本です。提供条件は更新されるため、契約前に公式プランページを確認してください。",
  },
  {
    question: "Midjourney v7はDiscordなしでも使えますか？",
    answer:
      "使えます。midjourney.comのWebアプリで生成可能です。Discordはコマンド中心の運用や既存コミュニティと併用したい場合に有効です。",
  },
  {
    question: "Midjourneyは日本語プロンプトだけでも実用になりますか？",
    answer:
      "日本語入力でも生成できますが、再現性を高める場面では英語キーワードを併用したほうが安定するという実利用報告が多いです。公式の言語別ベンチは公開が限定的なので、実務では自分の用途で比較検証するのが確実です。",
  },
  {
    question: "DALL·E 3とMidjourneyはどちらが初心者向けですか？",
    answer:
      "文章対話の延長で画像を作りたいならDALL·E系、表現の作り込みを重視するならMidjourneyが選ばれやすい傾向です。2026年時点でDALL·E 3は移行期のため、最新提供状況も確認してください。",
  },
  {
    question: "Stable DiffusionやCanva AIと比べたMidjourneyの違いは何ですか？",
    answer:
      "Midjourneyは生成品質とスタイル表現の強さ、Stable Diffusionは自由度と拡張性、Canva AIはデザイン制作フローへの統合のしやすさが主な違いです。用途を先に決めると選定が早くなります。",
  },
  {
    question: "Midjourneyの商用利用で最初に確認すべき点は何ですか？",
    answer:
      "利用規約、会社規模条件（年商100万USD超はPro/Mega要件）、著作権・商標・肖像権の3点です。案件利用では契約書側の権利帰属と再利用条件も先に確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Midjourney v7 使い方",
    "Midjourney 日本語",
    "Midjourney 始め方",
    "AI 画像生成 比較 2026",
    "Midjourney 料金",
    "Midjourney 商用利用",
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

export default function MidjourneyGuideRoute() {
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
          { name: "Midjourney v7使い方完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <MidjourneyGuidePage faqItems={[...faqItems]} />
    </>
  );
}
