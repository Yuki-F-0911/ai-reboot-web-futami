import type { Metadata } from "next";
import AiHrRecruitingPage from "@/components/academyLanding/blog/ai-hr-recruiting/AiHrRecruitingPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI × 人事・採用｜業務効率化から戦略的活用までの実践ガイド | AIリブート";
const pageDescription =
  "「AI 人事 採用」「AI 採用活動 活用」「生成AI 人事部門」をテーマに、求人票作成・スクリーニング・面接調整・候補者対応から、評価分析・離職予測・研修設計まで、人事/採用領域でのAI活用方法と導入ステップ、注意点、すぐ使えるプロンプト例をまとめます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-hr-recruiting";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-17T09:00:00+09:00";

const faqItems = [
  {
    question: "採用でAIを最初に使うなら、どの業務が始めやすいですか？",
    answer:
      "一般的には、求人票のたたき台作成、応募者への定型連絡文面、面接質問の案出しなど「型がある文章業務」から始めると検証しやすい傾向があります。まずは人が最終確認できる範囲で小さく始めるのが安全です。",
  },
  {
    question: "AIスクリーニングは公平性の観点で問題になりませんか？",
    answer:
      "なり得ます。AIの判断をそのまま採否に使うのではなく、評価軸の明確化、説明可能性の確保、属性に関する項目の扱いルール、定期的な偏りチェックを行い、人の判断プロセスに組み込む設計が重要です。",
  },
  {
    question: "候補者対応にAIを使うと、候補者体験が悪化しませんか？",
    answer:
      "悪化する可能性があります。一次回答や日程調整などに限定し、温度感のある文面テンプレートを用意し、重要な局面（辞退兆候・条件交渉など）は人が対応する運用が現実的です。",
  },
  {
    question: "人事データ（評価・勤怠など）を生成AIに入れても大丈夫ですか？",
    answer:
      "扱いには注意が必要です。社内規程や委託先の契約、個人情報保護の観点を踏まえ、入力可能な情報範囲を定義し、必要に応じて匿名化・マスキング・社内環境の利用を検討してください。",
  },
  {
    question: "AI導入の効果はどう測定すればよいですか？",
    answer:
      "採用であれば、工数（作成/連絡/調整時間）、応募対応スピード、面接設定までのリードタイム、評価コメントのレビュー工数など、業務に合う指標を少数に絞って導入前後で比較する方法が一般的です。",
  },
  {
    question: "専用ツールとChatGPT/Claudeはどう使い分ければよいですか？",
    answer:
      "一般的には、文章作成・要約・案出しは汎用生成AI、ワークフローやデータ連携が必要な業務（ATS/HRIS、日程調整、面接記録など）は専用ツールを検討すると運用しやすい傾向があります。まずは汎用生成AIで型を作り、必要に応じて仕組み化する流れが現実的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 人事 採用",
    "AI 採用活動 活用",
    "生成AI 人事部門",
    "AI スクリーニング",
    "AI 面接",
    "HR DX",
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

export default function AiHrRecruitingRoute() {
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
          { name: "AI × 人事・採用", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiHrRecruitingPage faqItems={[...faqItems]} />
    </>
  );
}

