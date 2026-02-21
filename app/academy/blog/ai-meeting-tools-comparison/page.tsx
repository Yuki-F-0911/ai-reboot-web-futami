import type { Metadata } from "next";
import AiMeetingToolsComparisonPage from "@/components/academyLanding/blog/ai-meeting-tools-comparison/AiMeetingToolsComparisonPage";
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
} from "@/components/seo/StructuredData";

const pageTitle =
  "AI議事録ツール比較2026｜Fireflies・Otter・Notion AIの選び方と会議効率化 | AIリブート";
const pageDescription =
  "Fireflies.ai・Otter.ai・Notion AI・tl;dv・Nottaを日本語精度・Zoom/Teams/Meet対応・料金・要約品質の4軸で比較。シーン別おすすめと導入後のワークフロー設計を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-meeting-tools-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "AI議事録ツールは日本語に対応していますか？",
    answer:
      "ツールによって大きく異なります。Nottaは日本語文字起こし精度が最も高く、社内会議・商談での実用実績が多いです。Fireflies.aiは英語が主体で日本語は70〜80%程度の精度。Otter.aiは日本語にほぼ対応していません。日本語メインで使うならNottaを最初の選択肢とするのが現実的です。",
  },
  {
    question: "ZoomとTeamsとGoogle Meet、どれでも使えるツールはありますか？",
    answer:
      "Fireflies.ai・tl;dv・Nottaの3つがZoom・Microsoft Teams・Google Meet全対応です。Otter.aiはZoomとMeetに対応していますがTeamsの連携が限定的です。Notion AI単体は会議ツールとの音声連携機能を持っていません。",
  },
  {
    question: "AI議事録ツールは無料で使えますか？",
    answer:
      "全5ツールに無料プランがありますが、制限内容が異なります。tl;dvは録画・文字起こしが無制限で最も使いやすい無料プランです。Nottaは月120分、Otter.aiは月300分、Fireflies.aiは月800分の制限があります。Notion AIはNotionのプランが別途必要です。まず試すならtl;dvの無料プランがリスクが低いです。",
  },
  {
    question: "AI議事録ツールのセキュリティ・録音同意はどう対処しますか？",
    answer:
      "会議録音には参加者全員の同意が原則です。社内会議でも「本会議はAIツールで録音・文字起こしを行います」と開始時に告知する習慣をつけてください。外部の顧客やパートナーとの会議では、招待メールや会議冒頭に文面で明示することを推奨します。録音データはクラウドに保存されるため、各ツールのプライバシーポリシーとデータ保管地域を事前に確認してください。",
  },
  {
    question: "AI議事録の文字起こし精度はどれくらいですか？人間の確認は必要ですか？",
    answer:
      "英語の一般的な会話であれば95%前後の精度を出すツールもありますが、日本語では固有名詞・社名・専門用語の誤認識が発生します。「田中」が「谷中」に、「プロポーザル」が「プロポーザ」になるといったケースは珍しくありません。AIの文字起こしは「ドラフト」として扱い、固有名詞・数値・アクションアイテムを中心に人間が確認するステップを省略しないことを推奨します。",
  },
  {
    question: "Notion AIだけでAI議事録は作れますか？",
    answer:
      "Notion AI単体では音声録音・文字起こしの機能がないため、会議のリアルタイム記録はできません。実際の運用では、ZoomやGoogle Meetの録音機能で音声ファイルを作成し、NottaやFirefliesで文字起こしを行ったテキストをNotionに貼り付けたうえでNotion AIで要約・構造化する、という組み合わせが多いです。Notionを情報の集約先として使い、入力のための文字起こしは別ツールに任せる使い方が現実的です。",
  },
  {
    question: "有料プランは月払いと年払いどちらが得ですか？",
    answer:
      "多くのツールで年払いにすると月換算で15〜20%程度安くなります。ただし、導入直後はツールが業務にフィットするか確認段階のため、まず月払いで1〜3ヶ月試してから年払いに切り替える進め方を推奨します。特にチームで複数ライセンス購入する場合は、年払い前にパイロット利用で精度・定着率を確認することが重要です。",
  },
  {
    question: "導入時に最初に決めるべき運用ルールは何ですか？",
    answer:
      "まず「録音対象にする会議の基準」と「参加者への録音告知文面」を統一してください。加えて、議事録の最終確認担当（固有名詞・数値チェック）を決めると、誤変換のまま共有される事故を防げます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 議事録 ツール 比較",
    "AI 文字起こし おすすめ",
    "Fireflies 使い方",
    "Otter AI 日本語",
    "Notion AI 議事録",
    "AI 会議 効率化",
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

export default function AiMeetingToolsComparisonRoute() {
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
          { name: "AI議事録ツール比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiMeetingToolsComparisonPage faqItems={[...faqItems]} />
    </>
  );
}
