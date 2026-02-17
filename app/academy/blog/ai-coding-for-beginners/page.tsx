import type { Metadata } from "next";
import AiCodingForBeginnersPage from "@/components/academyLanding/blog/ai-coding-for-beginners/AiCodingForBeginnersPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方 | AIリブート";
const pageDescription =
  "「AI コーディング 初心者」「AI プログラミング 始め方」「コード生成AI」で調べる方向けに、AIコーディングの基本、代表ツール、非エンジニアができること、始め方5ステップ、すぐ試せるプロンプト例、注意点までを整理した入門ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-coding-for-beginners";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";
const faqItems = [
  {
    question: "AIコーディングはプログラミング未経験でも始められますか？",
    answer:
      "はい。まずは環境構築なしで使えるチャット型AI（ChatGPT/Claudeなど）で、短いスクリプトやHTMLの生成から試すのが始めやすいです。最初は「小さな自動化」を作り、動作確認と改善を繰り返すと習得が早くなります。",
  },
  {
    question: "ChatGPTとGitHub Copilot（Cursor/Windsurf等）の違いは何ですか？",
    answer:
      "ChatGPT/Claudeは「目的や仕様を文章で相談しながら」コードや手順を作りやすい一方、CopilotやCursor/Windsurfは「エディタ上で書きながら」補完・修正を高速化するのが得意です。初心者はまずチャットで理解を固め、慣れたらエディタ統合へ移行すると迷いにくくなります。",
  },
  {
    question: "どの言語から始めるのがよいですか？",
    answer:
      "目的次第ですが、業務自動化ならPython、社内の表計算中心ならGAS（Google Apps Script）やExcel VBA、Webサイト作成ならHTML/CSSから始めると成果が出やすいです。最初は「必要なこと」を先に決め、言語は後から選ぶほうが失敗しづらいです。",
  },
  {
    question: "生成されたコードはそのまま使っても大丈夫ですか？",
    answer:
      "そのまま利用せず、必ず動作確認とレビューを行うのが基本です。特に個人情報・顧客データ・社内機密に触れる処理や、外部公開するWebページは、安全性と権利面の確認を含めて人が最終判断してください。",
  },
  {
    question: "エラーが出たときはAIにどう聞けばよいですか？",
    answer:
      "エラーメッセージ全文、実行環境（OS/言語バージョン）、入力データ例、期待する結果をセットで伝えると解決が早くなります。また、すぐに丸投げせず「原因候補を3つ挙げて」「最小再現コードを作って」など、切り分けを依頼すると再発防止につながります。",
  },
  {
    question: "社内で使う場合の注意点はありますか？",
    answer:
      "社内のAI利用ルール（入力禁止情報、ログ保存、利用ツールの許可範囲）を先に確認してください。プロンプトに顧客情報や機密情報を含めない設計にし、必要なら匿名化・ダミーデータで検証してから実データに適用するのが安全です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["AI コーディング 初心者", "AI プログラミング 始め方", "コード生成AI", "AI開発", "AI自動化", "ChatGPT", "Claude", "GitHub Copilot", "Cursor", "Windsurf"],
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

export default function AiCodingForBeginnersRoute() {
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
          { name: "AIコーディング入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiCodingForBeginnersPage faqItems={[...faqItems]} />
    </>
  );
}
