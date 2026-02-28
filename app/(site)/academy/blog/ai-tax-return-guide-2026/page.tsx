import type { Metadata } from "next";
import AiTaxReturnGuide2026Page from "@/components/academyLanding/blog/ai-tax-return-guide-2026/AiTaxReturnGuide2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "2026年確定申告をAIで乗り越える：書類整理から申告まで、初心者でもできる完全ガイド | AIリブート";
const pageDescription =
  "「確定申告、今年こそAIに手伝ってもらいたい...」そんなあなたへ。ChatGPTやClaudeを使って確定申告の準備を楽にする具体的な方法を、AI初心者でも実践できるように丁寧に解説します。必要書類のリストアップ、経費相談、チェックリスト作成など、5つのSTEPで今すぐ実践できます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-tax-return-guide-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T19:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "確定申告の内容をAIに話すのは個人情報的に大丈夫ですか？",
    answer:
      "正直にお答えします。マイナンバー・氏名・住所・口座番号など個人を特定する具体的な情報はAIに入力しないことをおすすめします。「副業収入が年60万円程度」「医療費が15万円かかった」のように概数や状況説明にとどめれば、必要な回答は十分得られます。ChatGPT・Claudeともにプライバシー設定で学習への利用をオフにする設定も用意されています。",
  },
  {
    question: "AIが間違えた情報を教えてくれたらどうなりますか？",
    answer:
      "AIが誤った税務情報を提供する可能性は実際にあります（ハルシネーション）。特に税制は毎年改正されるため、AIの回答を鵜呑みにせず、重要な判断は必ず国税庁の公式サイト（nta.go.jp）や税理士に確認してください。AIはあくまで「理解を助けるサポート役」として活用し、最終判断は公的機関に委ねる姿勢が安全です。",
  },
  {
    question: "e-TaxとAIを連携させることはできますか？",
    answer:
      "2026年2月時点では、ChatGPTやClaudeが直接e-Taxにアクセスしたり、マイナポータルと連携したりする機能はありません。AIは「入力前の準備・理解」のサポート役として使い、実際のe-Tax操作は国税庁のシステムで行う二段構えが現実的です。将来的には公式連携が実現する可能性もありますが、現状では分けて使うのが安全です。",
  },
  {
    question: "確定申告に詳しい税理士とAI、どちらに聞くべきですか？",
    answer:
      "ケースによります。「所得控除って何？」「この用語の意味は？」という理解のための質問はAIが得意です。一方、「私の場合の税額はいくら？」「この経費は認められる？」という個別・具体的な判断は税理士が適切です。AIで基礎知識を固めてから税理士に相談すると、相談時間を節約でき、コスト効率も上がります。",
  },
  {
    question: "スマホのAIアプリでも同じことができますか？",
    answer:
      "はい、できます。ChatGPTアプリ（iOS・Android対応）やClaudeアプリでも、この記事で紹介したプロンプトをそのまま使えます。外出先や通勤中に「この領収書は経費になる？」とさっと相談できるのがスマホアプリの利点です。ただしスマホで領収書の写真を撮って内容を読み取らせる場合は、個人情報の扱いに注意してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "確定申告 AI",
    "ChatGPT 確定申告",
    "確定申告 2026 AI活用",
    "AI 税務 初心者",
    "確定申告 書類整理 AI",
    "ChatGPT 経費 相談",
    "確定申告 わからない AI",
    "AI 確定申告 使い方",
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

export default function AiTaxReturnGuide2026Route() {
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
          { name: "2026年確定申告をAIで乗り越える完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiTaxReturnGuide2026Page faqItems={[...faqItems]} />
    </>
  );
}
