import type { Metadata } from "next";
import ElevenlabsGuidePage from "@/components/academyLanding/blog/elevenlabs-guide/ElevenlabsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ElevenLabs使い方ガイド2026｜料金・音声クローン・日本語対応を解説 | AIリブート";
const pageDescription =
  "ElevenLabsの始め方を初心者〜中級者向けに解説。アカウント作成から初回音声生成、音声クローン機能、YouTube/ポッドキャスト活用、日本語発音の実態、Free/Starter/Creator/Pro料金比較、VOICEVOX/NijiVoice/CoeFontとの違い、商用利用の注意点まで2026年2月時点で整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/elevenlabs-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T20:00:00+09:00";
const modifiedTime = "2026-02-20T20:00:00+09:00";

const faqItems = [
  {
    question: "ElevenLabs無料プランだけでYouTubeナレーション運用はできますか？",
    answer:
      "検証用途には使えますが、2026年2月20日時点のTermsではFreeプランは非商用です。収益化動画や案件利用はPaidプランでの生成を前提にしてください。",
  },
  {
    question: "ElevenLabsの日本語読み上げ精度は実務で使える水準ですか？",
    answer:
      "公式で日本語は対応言語に含まれます。実務では固有名詞や漢字読みで補正が必要な場面があるため、読みを明示した原稿に整える運用を入れると安定しやすくなります。",
  },
  {
    question: "音声クローンは誰の声でも作れますか？",
    answer:
      "できません。公式ヘルプでは本人の声、または明示許諾を得た声に限定されています。18歳以上や検証フローなどの安全要件もあるため、同意記録を残して運用する必要があります。",
  },
  {
    question: "ElevenLabsのFree/Starter/Creator/Proはどう選べばいいですか？",
    answer:
      "最初はFreeで品質検証し、商用公開を始める段階でStarter以上へ切り替えるのが基本です。長尺運用や複数案件を回すならCreator、チームで大量生成するならProが選びやすくなります。",
  },
  {
    question: "VOICEVOX・NijiVoice・CoeFontと比べたときの違いは何ですか？",
    answer:
      "ElevenLabsは多言語と自然な抑揚に強く、VOICEVOXは日本語TTSを無料導入しやすい点が強みです。CoeFontは商用条件をプラン別に設計しやすく、NijiVoiceは日本語音声の運用しやすさが評価されています。料金は更新があるため公式確認が必要です。",
  },
  {
    question: "商用利用で最初に確認すべきライセンス項目は何ですか？",
    answer:
      "最低限、生成時プラン、利用先（YouTube/広告/社内配信）、クレジット表記要否、音声クローン対象の同意有無を確認してください。無料生成音声の商用転用は避け、作成ログを残す運用が安全です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ElevenLabs 使い方",
    "AI音声合成 ツール",
    "テキスト読み上げ AI",
    "ナレーション 自動化 2026",
    "ElevenLabs 音声クローン",
    "ElevenLabs 料金",
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

export default function ElevenlabsGuideRoute() {
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
          { name: "ElevenLabs使い方ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ElevenlabsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
