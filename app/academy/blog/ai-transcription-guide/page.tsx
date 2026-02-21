import type { Metadata } from "next";
import AiTranscriptionGuidePage from "@/components/academyLanding/blog/ai-transcription-guide/AiTranscriptionGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AI文字起こしアプリ比較｜Notta・AiNote・Whisperの選び方【2026年版】 | AIリブート";
const pageDescription =
  "AI文字起こしアプリを2026年基準で比較。Notta・LINE WORKS AiNote（旧Clova Note）・Whisper・Otter.ai・Google Recorderの料金、無料枠、日本語精度、Zoom/Meet/Teams連携を整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-transcription-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "AI文字起こしアプリは無料プランだけで実務運用できますか？",
    answer:
      "短時間の個人利用なら無料プランで試せますが、会議録やインタビューを継続運用する場合は分数上限に到達しやすくなります。Nottaは月120分、Otterは月300分かつ1会話30分、AiNoteは月300分の制限があるため、定常運用では有料プラン検討が現実的です。",
  },
  {
    question: "NottaとOtter.aiはどちらが日本語会議に向いていますか？",
    answer:
      "日本語会議が中心ならNottaの方が導入しやすい傾向です。Otterは英語中心で設計された機能が多く、公式ページ上でも言語対応の記載に差分があるため、日本語利用では事前検証を推奨します。",
  },
  {
    question: "Clova Noteは2026年時点でも使えますか？",
    answer:
      "Clova Noteは2025年7月31日でサービス終了済みです。法人利用を含む現行サービスとしては、LINE WORKS AiNoteへの移行が案内されています。比較時は「Clova Note後継=AiNote」と整理するのが正確です。",
  },
  {
    question: "Whisper文字起こしは法人導入に向いていますか？",
    answer:
      "WhisperはOSSまたはAPIとして利用でき、カスタマイズ性が高い一方で、会議ツール連携や運用画面は自前実装が前提です。既製SaaSのような即導入ではなく、開発体制がある組織向けです。",
  },
  {
    question: "Zoom・Google Meet・Microsoft Teams連携を重視するならどれを選べばいいですか？",
    answer:
      "標準機能として連携しやすいのはNotta、AiNote、Otterです。WhisperはAPI連携の実装が必要、Google RecorderはPixel端末上の録音アプリで会議bot連携機能はありません。連携要件がある場合はSaaS型から検証する方が早く進みます。",
  },
  {
    question: "文字起こし結果をChatGPTで議事録化する時の注意点は何ですか？",
    answer:
      "そのまま要約せず、固有名詞・数字・決定事項を先にチェックしてから要約に渡すことが重要です。入力時に「決定事項」「未決事項」「担当者と期限」を出力形式として固定すると、議事録品質が安定します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 文字起こし アプリ 比較",
    "Notta 使い方",
    "Clova Note",
    "Whisper 文字起こし",
    "録音 自動 テキスト化",
    "Otter ai 日本語",
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

export default function AiTranscriptionGuideRoute() {
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
          { name: "AI文字起こしアプリ比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiTranscriptionGuidePage faqItems={[...faqItems]} />
    </>
  );
}
