import type { Metadata } from "next";
import AiVideoEditingGuidePage from "@/components/academyLanding/blog/ai-video-editing-guide/AiVideoEditingGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI動画編集の始め方｜初心者向けツール比較とCapCut無料実践【2026】 | AIリブート";
const pageDescription =
  "AI動画編集初心者向けに、CapCut・Descript・VEED・Premiere Pro AIを比較。自動字幕・カット・BGM・翻訳・ノイズ除去の使いどころ、CapCut無料実践、Shorts/TikTok/Reels最適化、課金判断と商用利用の注意点を整理。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-video-editing-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "AI動画編集初心者はどのツールから始めるべきですか？",
    answer:
      "まずはCapCut無料版などで、9:16の短尺動画を1本完走するのが実用的です。自動字幕・自動カット・BGM調整までを体験し、作業時間が足りない部分だけを有料機能で補う順番が失敗しにくいです。",
  },
  {
    question: "CapCut無料版でどこまで編集できますか？",
    answer:
      "基本的なカット、字幕、BGM、1080p出力などは無料で試せます。ただし、素材やテンプレートによっては透かしやPro制限が発生するため、書き出し前に適用素材の条件を確認してください。",
  },
  {
    question: "CapCut Proは2026年時点でいくらですか？",
    answer:
      "公式ページでも価格表記が複数あり、通貨・地域・課金導線で差があります。記事内の確認日（2026-02-20）時点では円建てとドル建ての両方の表記が確認できるため、最終的には購入画面での表示価格を基準にしてください。",
  },
  {
    question: "Descriptは日本語に対応していますか？",
    answer:
      "公式ヘルプでは、文字起こし言語としての日本語は未対応と記載があります。一方で、翻訳字幕やAI吹替では日本語が対応言語に含まれるため、機能別に可否を確認して使い分ける必要があります。",
  },
  {
    question: "商用利用で注意すべきポイントは何ですか？",
    answer:
      "ツール本体の利用可否だけでなく、素材（音源・テンプレート・画像・フォント）のライセンス条件を分けて確認することが重要です。特にCapCutは素材ごとに商用可否が分かれるため、最終書き出し前の権利チェックが必要です。",
  },
  {
    question: "無料から有料に切り替える目安はありますか？",
    answer:
      "月間投稿本数が増え、1本あたりの編集時間が目標より長くなるなら有料化を検討してください。目安としては、時短できる時間価値が月額課金を上回るか、案件単価が維持できるかで判断すると合理的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 動画編集 初心者",
    "CapCut AI 使い方",
    "Descript AI",
    "動画編集 AI ツール 2026",
    "自動字幕 AI",
    "YouTube Shorts 動画編集",
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

export default function AiVideoEditingGuideRoute() {
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
          { name: "AI動画編集初心者ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiVideoEditingGuidePage faqItems={[...faqItems]} />
    </>
  );
}
