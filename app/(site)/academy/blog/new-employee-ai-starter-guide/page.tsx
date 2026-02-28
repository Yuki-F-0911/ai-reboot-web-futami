import type { Metadata } from "next";
import NewEmployeeAiStarterGuidePage from "@/components/academyLanding/blog/new-employee-ai-starter-guide/NewEmployeeAiStarterGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "新入社員のAI活用スタートガイド2026｜最初の1ヶ月でやること完全版 | AIリブート";
const pageDescription =
  "2026年入社の新入社員向け。職場でのAI活用マナー・情報管理ルール・週別スケジュールを完全解説。機密情報の扱い方からプロンプト習慣化まで、最初の1ヶ月でやることをステップ別にまとめました。";
const pageUrl = "https://ai-reboot.io/academy/blog/new-employee-ai-starter-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-04-01T09:00:00+09:00";
const modifiedTime = "2026-04-01T09:00:00+09:00";

const faqItems = [
  {
    question: "新入社員がAIを使う場合、まず何から始めればいいですか？",
    answer:
      "最初にやることは「ツールを入れる」より「職場のAIルールを確認する」ことです。会社でどのAIツールが承認されているか、どんな情報を入力してはいけないかを把握してから使い始めると、意図せぬトラブルを防げます。",
  },
  {
    question: "会社のPCでChatGPTを使っていいですか？",
    answer:
      "会社のポリシーによります。利用を許可している会社もあれば、情報セキュリティの観点から制限している会社もあります。まずは上司や情報システム部門に確認するのが基本です。社内承認済みのツールが別にある場合はそちらを優先してください。",
  },
  {
    question: "AIに社内の情報を入力してもいいですか？",
    answer:
      "顧客名・案件名・個人情報・未発表情報は入力しないのが原則です。固有名詞を「A社」「プロジェクトX」など仮名に置き換えてから入力すれば、同様の補助を受けながらリスクを下げられます。不明な場合はガイドラインを確認してください。",
  },
  {
    question: "AIが作った文章をそのまま提出してもいいですか？",
    answer:
      "AIの出力はあくまで「下書き」です。事実確認・文体の調整・自分の判断の付加を行ってから使うのが基本です。特にメールや報告書など相手に渡る文書は、必ず自分で読み直してから送信してください。",
  },
  {
    question: "AIを使ったことは上司に伝えるべきですか？",
    answer:
      "会社の方針や業務の性質によります。ただし、AI利用を積極的に開示することで信頼を築きやすい職場環境も増えています。特にAI活用が推奨されている職場では、どのようにAIを活用したかを共有することが評価されるケースもあります。",
  },
  {
    question: "AIを使いすぎると自分のスキルが落ちますか？",
    answer:
      "AIは「考える補助」であり、「考える代替」ではありません。最終的な判断・確認・改善は自分が行う運用を維持すれば、スキル低下は起きにくいです。むしろAIで作業時間を短縮し、上位の思考・判断に使う時間を増やす活用法が理想的です。",
  },
  {
    question: "新入社員が最初に使うべきAIツールはどれですか？",
    answer:
      "職場で承認されているツールが最優先です。特定のツールが承認されていない場合は、ChatGPT（無料プラン）から始めるのが一般的です。1つのツールを1ヶ月使い込んでから別のツールと比較する順序で進めると、使い方が定着しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "新入社員 AI 活用",
    "新社会人 生成AI 始め方",
    "社会人 AI 最初",
    "新卒 ChatGPT 使い方",
    "ビジネスマナー AI",
    "職場 AI 情報漏えい",
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

export default function NewEmployeeAiStarterGuideRoute() {
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
          { name: "新入社員のAI活用スタートガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <NewEmployeeAiStarterGuidePage faqItems={[...faqItems]} />
    </>
  );
}
