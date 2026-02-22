import type { Metadata } from "next";
import AiBusinessDocumentTemplates2026Page from "@/components/academyLanding/blog/ai-business-document-templates-2026/AiBusinessDocumentTemplates2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIビジネス文書テンプレート完全版2026：議事録・報告書・メール・企画書をAIで10分で完成させる";
const pageDescription =
  "議事録、報告書、ビジネスメール、企画書...AIを使えば10分で完成。コピペで使えるプロンプトテンプレート50選を2026年版として公開。ChatGPT・Claude対応。会議後すぐ使える実践的なテンプレート集です。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-business-document-templates-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T18:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "ChatGPTに社外秘の情報を入力しても大丈夫ですか？",
    answer:
      "社外秘・個人情報・顧客情報は入力しない運用が基本です。実務では[会社名]や[顧客名]のように匿名化してから使ってください。機密性が高い文書は社内ポリシーと利用規約を確認し、必要なら社内環境のAIツールを利用しましょう。",
  },
  {
    question: "テンプレートはどのAIでも使えますか？",
    answer:
      "はい。ChatGPT・Claude・Geminiなど主要な生成AIでそのまま使えます。モデル差で語調や情報量は変わるため、最後に「トーンを丁寧に」「200文字以内」など追加指示を入れると安定します。",
  },
  {
    question: "文書の品質を上げるコツはありますか？",
    answer:
      "前提情報を具体化するのが最重要です。目的、対象読者、締切、文体、含めるべき項目を明示すると品質が上がります。初稿生成後に「不足点だけ列挙して改善版を作成」と2段階で回すとさらに精度が上がります。",
  },
  {
    question: "プロンプトが長すぎると問題がありますか？",
    answer:
      "長すぎること自体より、情報が重複していることが問題です。役割、入力、出力形式、制約の4要素に整理すれば、短くても高品質な出力になります。長文より構造化を優先してください。",
  },
  {
    question: "作成した文書はそのまま使っていいですか？",
    answer:
      "そのまま提出は避け、必ず人が最終確認してください。固有名詞、金額、日付、法的表現、対外文面の敬語は重点チェックが必要です。AIは下書きの高速化ツールとして使うのが安全です。",
  },
  {
    question: "英語の文書も作れますか？",
    answer:
      "可能です。テンプレートの末尾に「英語で出力」「トーンはフォーマル」「CEFR B2レベル」など条件を追加してください。日英併記が必要な場合は「日本語版と英語版を並列表記」と指定すると運用しやすくなります。",
  },
  {
    question: "社内システムとの連携はできますか？",
    answer:
      "多くの企業では、API連携やRPA、Zapier/Make、Microsoft Power Automate等で連携しています。まずは手作業でテンプレート運用し、効果が確認できた業務から段階的に自動化するのが失敗しにくい進め方です。",
  },
  {
    question: "無料版のChatGPTでも使えますか？",
    answer:
      "使えます。今回のテンプレートは無料版でも実行可能です。長文処理や大量生成で制限に当たる場合は、分割して実行するか有料プランを検討してください。",
  },
  {
    question: "文書作成にはどのAIが一番おすすめですか？",
    answer:
      "日本語の自然さ、安定性、連携環境で選ぶのが実務的です。まずはChatGPTかClaudeのどちらか1つに絞って運用し、テンプレート資産を蓄積してから比較すると判断しやすくなります。",
  },
  {
    question: "毎回プロンプトを書くのが面倒です。解決策はありますか？",
    answer:
      "用途別テンプレートを「社内共通ひな形」として保存し、可変部分だけ差し替える運用にしてください。よく使うものはスニペット化し、Notionやテキストエキスパンダに登録すると、作成時間をさらに短縮できます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 議事録 テンプレート",
    "ChatGPT ビジネスメール",
    "AI 報告書 作成",
    "生成AI 文書 テンプレート",
    "AI 企画書 プロンプト",
    "ChatGPT 仕事 テンプレート",
    "AI ビジネス文書 2026",
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

export default function AiBusinessDocumentTemplates2026Route() {
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
          { name: "AIビジネス文書テンプレート完全版2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiBusinessDocumentTemplates2026Page faqItems={[...faqItems]} />
    </>
  );
}
