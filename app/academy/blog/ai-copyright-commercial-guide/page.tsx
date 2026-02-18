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
      "日本の著作権法では「思想又は感情を創作的に表現したもの」が著作物です。AIが自動生成しただけで人間の創作的表現が認められない場合、著作物に当たらず著作権の保護対象にならない可能性が高い一方、プロンプトの工夫や選択・編集・構成など人間の創作的関与がある部分は著作物になり得ます。",
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
      "日本では著作権法30条の4（情報解析）により、一定の要件のもとで情報解析目的の利用が権利制限される整理があります。ただし個別判断であり、生成物が特定の著作物に類似する場合は侵害リスクが残ります。",
  },
  {
    question: "社内でAI生成画像を使う場合もチェックが必要ですか？",
    answer:
      "社外公開しなくても、社内資料に他者の著作物に類似した画像を使用するとリスクがあります。用途に応じたチェック基準を設けることを推奨します。",
  },
  {
    question: "動画生成AIの出力物の権利はどうなりますか？",
    answer:
      "画像と同様に、AI生成部分でも人間の創作的表現が認められない場合は著作物に当たらない可能性が高い一方、人間が編集・演出を加えた部分は著作物になりえます。音楽・声優の権利にも注意が必要です。",
  },
  {
    question: "海外でAI生成物を使う場合、日本と法律が違いますか？",
    answer:
      "はい。米国、EU、中国など各国で対応が異なります。EUではAI Actで透明性義務（ディープフェイク等の表示など）が段階適用され、透明性義務は2026年8月から適用されます。米国では米国著作権局が「人間の創作性」を重視しており、登録手続でAI生成部分の開示・除外が求められる場合があります。",
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
