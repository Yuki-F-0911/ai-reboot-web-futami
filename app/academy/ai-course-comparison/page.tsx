import type { Metadata } from "next";
import AiCourseComparisonPage from "@/components/academyLanding/ai-course-comparison/AiCourseComparisonPage";
import { CourseStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const aiCourseComparisonTitle = "AI講座比較｜失敗しない選び方とおすすめ判断軸を解説";
const aiCourseComparisonDescription =
  "AI講座比較で迷う方向けに、価格・期間・伴走・実践性・補助金対応の5軸で選び方を整理。匿名比較表とチェックポイントを確認し、無料説明会で最適な講座を相談できます。";
const aiCourseComparisonUrl = "https://ai-reboot.io/academy/ai-course-comparison";
const aiCourseComparisonOgImagePath = "/academy/ai-course-comparison/opengraph-image";

const aiCourseComparisonFaqItems = [
  {
    question: "どの講座が自分に合っているか、最初に何を確認すべきですか？",
    answer:
      "まずは受講目的を一つに絞ることが重要です。転職、副業、現職での業務改善では必要なカリキュラムが異なるため、目的に合う実践課題と伴走体制がある講座を優先して比較してください。",
  },
  {
    question: "価格が安い講座でも問題ありませんか？",
    answer:
      "安さだけで判断すると、質問対応や実践課題が不足して学習が止まるケースがあります。総額に対して、伴走の深さと実務への接続支援が含まれるかを合わせて確認するのが安全です。",
  },
  {
    question: "比較表で最も重視すべき軸は何ですか？",
    answer:
      "目的との一致度、伴走体制、実践課題の3つを優先すると判断しやすくなります。価格と期間はこの3要素を満たした候補同士で比較するのがおすすめです。",
  },
  {
    question: "未経験でもAI講座に参加できますか？",
    answer:
      "未経験者向けの講座は多くあります。特に、課題レビューや質問サポートが明確な講座を選ぶと学習の中断を防ぎやすくなります。",
  },
  {
    question: "補助金対応の講座かどうかはどこで確認できますか？",
    answer:
      "講座提供元の案内に加えて、制度の公式情報を必ず確認してください。最終的な適用可否は個別条件で変わるため、申し込み前の再確認が必要です。",
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
