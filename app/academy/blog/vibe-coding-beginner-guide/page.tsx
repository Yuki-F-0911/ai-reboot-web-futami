import type { Metadata } from "next";
import VibeCodingBeginnerGuidePage from "@/components/academyLanding/blog/vibe-coding-beginner-guide/VibeCodingBeginnerGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Vibe Coding入門｜非エンジニアがAIでWebアプリを作る手順とツール比較【2026年版】 | AIリブート";
const pageDescription =
  "Vibe Coding入門として、語源・従来開発/ノーコードとの違い、Cursor・Claude Code・v0・Replit・Bolt.newの使い分け、非エンジニア向けWebアプリ作成手順、限界とセキュリティ注意点を2026年2月時点で整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/vibe-coding-beginner-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T21:30:00+09:00";

const faqItems = [
  {
    question: "Vibe Codingは本当にコード未経験でもできますか？",
    answer:
      "はい。未経験でも、自然言語で要件を伝えて画面や処理を作る入口には立てます。ただし公開前には、動作確認・権限設定・データ保護などの検証を人が行う前提で進める必要があります。",
  },
  {
    question: "CursorとClaude Codeはどちらから始めるべきですか？",
    answer:
      "エディタ上で視覚的に修正しながら進めたい場合はCursor、CLI中心で実装と修正を高速に回したい場合はClaude Codeが向いています。非エンジニアは、まずUIが見える環境から始めるほうが進捗を作りやすい傾向です。",
  },
  {
    question: "v0・Replit・Bolt.newの違いは何ですか？",
    answer:
      "v0はUI構築の初速、Replitは実行環境込みの反復開発、Bolt.newはブラウザ完結でのフルスタック試作に強みがあります。どれも有効ですが、目的と公開範囲で選ぶと失敗しにくくなります。",
  },
  {
    question: "AIが作ったコードはそのまま公開して問題ありませんか？",
    answer:
      "そのまま公開するのは推奨されません。依存ライブラリ、認証、入力検証、ログ設計、機密情報の扱いを確認し、脆弱性診断やレビュー工程を通してから公開判断を行ってください。",
  },
  {
    question: "非エンジニアが作れる範囲はどこまでですか？",
    answer:
      "社内向けの小規模ツール、問い合わせ整理、簡易ダッシュボードなどの範囲は実現しやすいです。一方、決済・個人情報大量処理・複雑な権限管理が必要な本番システムは、専門家との協業が前提になります。",
  },
  {
    question: "2026年はVibe Codingを学ぶ価値がありますか？",
    answer:
      "あります。価値の中心は「実装速度」だけでなく、要件を言語化して検証する力にあります。AIに任せる範囲と人が責任を持つ範囲を分けて運用できれば、実務での再現性が高まります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Vibe Coding 入門",
    "バイブコーディング 使い方",
    "AIコーディング 非エンジニア",
    "Cursor Claude Code 初心者",
    "v0 Replit Bolt.new 比較",
    "AI Webアプリ 作り方",
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

export default function VibeCodingBeginnerGuideRoute() {
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
          { name: "Vibe Coding入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <VibeCodingBeginnerGuidePage faqItems={[...faqItems]} />
    </>
  );
}
