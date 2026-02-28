import type { Metadata } from "next";
import AiCourseComparisonPage from "@/components/academy/AiCourseComparisonPage";
import { CourseStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const aiCourseComparisonTitle = "AI講座比較｜どれを選ぶべきか基準から整理";
const aiCourseComparisonDescription =
  "「AI講座 比較」で迷う方へ。期間・費用・補助金対応・サポート内容・卒業後の変化・向いている人の6軸で比較し、自分に合う選び方を整理。最後はLINE無料相談で判断できます。";
const aiCourseComparisonUrl = "https://ai-reboot.io/academy/ai-course-comparison";
const aiCourseComparisonOgImagePath = "/academy/ai-course-comparison/opengraph-image";

const aiCourseComparisonFaqItems = [
  {
    question: "補助金は使えますか？",
    answer:
      "講座や個別条件によって適用可否が変わります。最終的には講座提供元の案内に加え、制度の公式情報を確認してください。",
  },
  {
    question: "未経験でも大丈夫ですか？",
    answer:
      "未経験者向けの講座は多くあります。質問対応、課題レビュー、学習継続の伴走体制がある講座を選ぶと挫折しにくくなります。",
  },
  {
    question: "比較表では何を重視すればいいですか？",
    answer:
      "目的との一致、サポート内容、卒業後の変化の3つを優先すると判断しやすくなります。費用と期間は、その後に比較するとミスマッチを減らせます。",
  },
  {
    question: "独学と講座受講はどちらが良いですか？",
    answer:
      "短期で実務活用まで到達したい場合は講座受講が有利になりやすいです。自走できる場合は独学も有効ですが、継続と実務適用の設計が必要です。",
  },
  {
    question: "仕事をしながらでも受講できますか？",
    answer:
      "多くの講座は社会人受講を前提に設計されています。週あたりの必要学習時間とサポート受付時間を先に確認して選ぶことが大切です。",
  },
] as const;

export const metadata: Metadata = {
  title: aiCourseComparisonTitle,
  description: aiCourseComparisonDescription,
  keywords: [
    "AI講座 比較",
    "AI講座 おすすめ",
    "AIスクール 比較",
    "AI講座 選び方",
  ],
  alternates: {
    canonical: aiCourseComparisonUrl,
  },
  openGraph: {
    title: aiCourseComparisonTitle,
    description: aiCourseComparisonDescription,
    url: aiCourseComparisonUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: aiCourseComparisonOgImagePath,
        width: 1200,
        height: 630,
        alt: "AI講座の比較ガイド",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aiCourseComparisonTitle,
    description: aiCourseComparisonDescription,
    images: [aiCourseComparisonOgImagePath],
  },
};

export default function AcademyAiCourseComparisonPage() {
  return (
    <>
      <CourseStructuredData
        name="AIリブートアカデミー"
        description="生成AI活用・キャリア設計・実践力を100日間で学ぶリスキリング講座。"
        provider={{
          name: "株式会社ウィルフォワード",
          url: "https://ai-reboot.io",
          type: "EducationalOrganization",
        }}
        url="https://ai-reboot.io/academy"
        duration="P100D"
        courseMode="blended"
        price={330000}
        priceCurrency="JPY"
      />
      <FAQStructuredData items={[...aiCourseComparisonFaqItems]} />
      <AiCourseComparisonPage faqItems={[...aiCourseComparisonFaqItems]} />
    </>
  );
}
