import type { Metadata } from "next";
import AiSideJobGuidePage from "@/components/academyLanding/blog/ai-side-job-guide/AiSideJobGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIで副業を始める：現実的な可能性と3つの注意点【2026年版】 | AIリブート";
const pageDescription =
  "「AIを使って副業できないか？」という疑問に正直に答えます。2026年現在、AIで実際に稼げる副業の種類と、失敗しないための注意点を初心者向けに解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-side-job-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-24T18:00:00+09:00";
const modifiedTime = "2026-02-24T18:00:00+09:00";

const faqItems = [
  {
    question: "AIを使った副業で確定申告は必要ですか？",
    answer:
      "給与所得者が副業で得た所得が年間20万円を超える場合、所得税の確定申告が必要です。20万円以下でも住民税の申告が必要な場合があります。AIを使った副業かどうかにかかわらず、所得が発生した時点で税務上の扱いは同じです。詳細は国税庁の案内か税理士にご確認ください。",
  },
  {
    question: "副業でAIを使うことを会社に報告する義務はありますか？",
    answer:
      "義務があるかどうかは、勤め先の就業規則によります。「副業禁止」や「事前申請が必要」と定めている会社も多くあります。AIを使うかどうかに関係なく、副業を始める前に就業規則を確認し、必要であれば会社への申請・申告を行ってください。",
  },
  {
    question: "初心者がAI副業を始めるのに必要な初期費用はいくらですか？",
    answer:
      "ChatGPTの無料プランやClaudeの無料枠から始めれば、初期費用ゼロで試すことができます。本格的に取り組む場合、有料プラン（月額2,000〜3,000円程度）があれば十分なケースが多いです。高額な「AI副業塾」や「専用ツール」への大きな初期投資は、実績を作る前には不要です。",
  },
  {
    question: "AI副業で稼ぐには、どの程度AIを使いこなせる必要がありますか？",
    answer:
      "「使いこなせる」の定義は副業の種類によって異なります。文章系なら「AIに適切な指示を出して質の高いアウトプットを得る」「AIの出力を編集・品質チェックできる」レベルが最低限です。コンサルティング系なら、さらに深い理解が必要です。まず自分の仕事でAIを3ヶ月以上使い込んでから副業を考えるのが現実的なラインです。",
  },
  {
    question: "AI副業を始める前に取得すべき資格はありますか？",
    answer:
      "必須の資格はありません。ただし「生成AIパスポート」などのAI関連資格は、知識の体系化と信頼性のアピールに役立ちます。資格よりも「実際の成果物・実績」の方が副業では重視されます。資格取得に時間を使うより、まず小さな案件で実績を作ることを優先することをおすすめします。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 副業 始め方",
    "ChatGPT 副業 2026",
    "AI 副業 現実",
    "生成AI 副業 稼げる",
    "AI 副業 注意点",
    "ChatGPT 副業 初心者",
    "AI 副業 種類",
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

export default function AiSideJobGuideRoute() {
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
          { name: "AIで副業を始める：現実的な可能性と注意点", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiSideJobGuidePage faqItems={[...faqItems]} />
    </>
  );
}
