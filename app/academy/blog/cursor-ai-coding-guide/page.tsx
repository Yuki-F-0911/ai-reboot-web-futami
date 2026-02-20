import type { Metadata } from "next";
import CursorAiCodingGuidePage from "@/components/academyLanding/blog/cursor-ai-coding-guide/CursorAiCodingGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Cursor × AIコーディング入門｜非エンジニアでも使える実践ガイド | AIリブート";
const pageDescription =
  "Cursorを非エンジニアが実務で使うために、初回セットアップ、AI対話でLPを作る進め方、GitHub Copilotとの使い分け、失敗しやすいポイントと回避策、公開前レビュー観点、7日運用プランと実務チェック表まで具体例つきで解説する実践ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/cursor-ai-coding-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "プログラミング知識がゼロでもCursorは使えますか？",
    answer:
      "使えます。ただし、最初から複雑なアプリを作るのではなく、1ページLPや簡単なフォームなど範囲を絞って始めるのが前提です。Cursorは日本語で依頼できるため着手しやすい一方、生成されたコードの動作確認と修正判断は必要です。",
  },
  {
    question: "CursorとGitHub Copilotはどちらから始めるべきですか？",
    answer:
      "最初に成果物を1本作りたいならCursor、既存開発の補完速度を上げたいならGitHub Copilotが向いています。非エンジニアが最初の成功体験を作る段階では、対話しながら修正を進めやすいCursorの方が進行管理しやすいケースが多いです。",
  },
  {
    question: "Cursorのインストール後に最初にやるべきことは何ですか？",
    answer:
      "設定を細かく触る前に、検証用フォルダを1つ作って小さなHTMLファイルを生成するところまで進めてください。最初の目標を「画面に表示される状態を作る」に置くと、学習と実装を同時に進めても迷いにくくなります。",
  },
  {
    question: "AIが出したコードはそのまま公開しても問題ありませんか？",
    answer:
      "そのまま公開は推奨できません。リンク切れ、フォーム動作、スマホ表示、文言の正確性は必ず人が確認してください。特に個人情報を扱うフォームや決済導線を含むページは、実装内容をレビューしてから公開する必要があります。",
  },
  {
    question: "非エンジニアが1日でLPを作るときに失敗しやすい点は何ですか？",
    answer:
      "失敗しやすいのは、見た目調整と機能追加を同時に進めること、完成条件を決めないこと、修正依頼が大きすぎることです。作業を小分けにし、1回の依頼で1つの目的に絞ると品質が安定します。",
  },
  {
    question: "Cursorを仕事で使うときの最低限の運用ルールはありますか？",
    answer:
      "機密情報を入力しない、変更前後の差分を確認する、公開前に第三者チェックを入れる、の3点は最低限必要です。AIは実装速度を上げますが、品質担保と最終判断は人が持つ前提で運用するとトラブルを防げます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["Cursor 使い方", "AI コーディング 入門", "Cursor とは 非エンジニア", "Cursor vs GitHub Copilot", "AI IDE 比較"],
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

export default function CursorAiCodingGuideRoute() {
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
          { name: "Cursor × AIコーディング入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <CursorAiCodingGuidePage faqItems={[...faqItems]} />
    </>
  );
}
