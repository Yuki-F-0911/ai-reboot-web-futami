import type { Metadata } from "next";
import SunoAiMusicGuidePage from "@/components/academyLanding/blog/suno-ai-music-guide/SunoAiMusicGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Sunoで音楽を作る方法入門｜プロンプトから楽曲生成・ビジネス活用まで | AIリブート";
const pageDescription =
  "Sunoの使い方を初心者向けに解説。無料プランの始め方、ジャンル・テンポ・ムード・楽器を指定するプロンプト設計、商用利用と著作権の注意点、YouTube・SNS・プレゼンでの活用方法まで確認日付きで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/suno-ai-music-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T23:10:00+09:00";
const modifiedTime = "2026-02-19T23:10:00+09:00";

const faqItems = [
  {
    question: "Sunoの無料プランでは何曲くらい作れますか？",
    answer:
      "Sunoヘルプ（確認日: 2026-02-19）では、無料（Basic）プランは1日50クレジットが補充され、目安として1日10曲を作れる案内です。クレジット仕様は更新されるため、利用前に最新情報を確認してください。",
  },
  {
    question: "Suno無料プランで作った曲をYouTubeで収益化できますか？",
    answer:
      "できません。Sunoヘルプでは、無料（Basic）プランで作成した曲は非商用利用のみとされています。YouTube収益化や配信収益を前提にする場合は、作成時点でProまたはPremierの契約が必要です（確認日: 2026-02-19）。",
  },
  {
    question: "Pro/Premierで作った曲は解約後も商用利用できますか？",
    answer:
      "Sunoヘルプの案内では、Pro/Premier加入中に作成した曲の商用利用権は、解約後も保持できると説明されています。どの曲が対象かを示せるよう、作成日時とプラン状態を記録しておく運用が安全です。",
  },
  {
    question: "Sunoで作った曲の著作権はどうなりますか？",
    answer:
      "Sunoヘルプでは、無料プラン作成曲はSunoが所有、Pro/Premier作成曲はユーザーが所有と案内されています。一方で、AI生成物は国・地域によっては著作権保護の対象外となる可能性がある旨も明記されているため、商用前提では配信先規約も併せて確認してください（確認日: 2026-02-19）。",
  },
  {
    question: "自分で書いた歌詞の権利はSuno利用時も自分に残りますか？",
    answer:
      "Sunoヘルプでは、自分が入力したオリジナル歌詞の権利は保持されると案内されています。第三者歌詞を使う場合は別途許諾が必要です。",
  },
  {
    question: "無料プランで作った曲は、後から有料にすると自動で商用化できますか？",
    answer:
      "原則できません。Sunoヘルプでは、無料プラン時に作った曲に対する商用利用権は基本的に遡及しないとされています。例外対応が案内される場合もありますが、個別審査前提のため、収益化予定曲は有料契約中に新規生成するのが安全です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Suno 使い方",
    "AI 音楽 生成 無料",
    "Suno プロンプト 書き方",
    "Suno 商用利用",
    "BGM AI 作成",
    "Suno 著作権",
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

export default function SunoAiMusicGuideRoute() {
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
          { name: "Sunoで音楽を作る方法入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <SunoAiMusicGuidePage faqItems={[...faqItems]} />
    </>
  );
}
