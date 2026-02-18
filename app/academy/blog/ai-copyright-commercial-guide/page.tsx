import type { Metadata } from "next";
import AiCopyrightCommercialGuidePage from "@/components/academyLanding/blog/ai-copyright-commercial-guide/AiCopyrightCommercialGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIの著作権・商用利用ガイド（画像/動画/文章）｜現場で迷う論点を整理【2026年版】";
const pageDescription =
  "生成AI（画像生成・動画生成・文章生成）の著作権と商用利用の論点を網羅的に整理。AI生成物の権利関係、学習データの著作権、商用利用の条件と注意点、社内チェックリスト付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-copyright-commercial-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "AI生成物に著作権はありますか？",
    answer:
      "日本の著作権法では「思想又は感情を創作的に表現したもの」が著作物です。AIが自律的に生成したものには原則著作権が発生しませんが、人間が創作的な指示・編集を加えた場合は著作物になる可能性があります。",
  },
  {
    question: "AI画像を商用利用しても問題ないですか？",
    answer:
      "生成AI利用規約、学習データの権利、生成物の類似性の3点をクリアすれば商用利用可能です。ただし、特定の著作物に酷似した出力は著作権侵害のリスクがあります。",
  },
  {
    question: "文章生成AIの出力をそのまま公開してよいですか？",
    answer:
      "原則として人間の確認・編集を経てから公開することを推奨します。誤情報、他者の著作物との類似、機密情報の混入をチェックする工程が必要です。",
  },
  {
    question: "学習データに著作物が含まれていた場合、生成物は違法ですか？",
    answer:
      "日本では著作権法30条の4により、情報解析目的の学習は原則適法です。ただし、生成物が特定の著作物に類似する場合は侵害リスクがあります。",
  },
  {
    question: "社内でAI生成画像を使う場合もチェックが必要ですか？",
    answer:
      "社外公開しなくても、社内資料に他者の著作物に類似した画像を使用するとリスクがあります。用途に応じたチェック基準を設けることを推奨します。",
  },
  {
    question: "動画生成AIの出力物の権利はどうなりますか？",
    answer:
      "画像と同様に、AIが自律生成した部分には原則著作権が発生しません。人間が編集・演出を加えた部分は著作物になりえます。音楽・声優の権利にも注意が必要です。",
  },
  {
    question: "海外でAI生成物を使う場合、日本と法律が違いますか？",
    answer:
      "はい。米国、EU、中国など各国で対応が異なります。特にEU AI Actでは生成物への表示義務があり、米国では著作権登録にAI利用の開示が求められるケースがあります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["生成AI 著作権", "AI画像生成 商用利用", "AI生成物 著作権", "生成AI 権利"],
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

export default function AiCopyrightCommercialGuideRoute() {
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
          { name: "生成AIの著作権・商用利用ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiCopyrightCommercialGuidePage faqItems={[...faqItems]} />
    </>
  );
}

