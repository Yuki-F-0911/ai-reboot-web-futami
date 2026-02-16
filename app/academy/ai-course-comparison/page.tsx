import type { Metadata } from "next";
import AiCourseComparisonPage from "@/components/academyLanding/ai-course-comparison/AiCourseComparisonPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const aiCourseComparisonTitle = "失敗しないAI講座の選び方 7つの比較ポイント | AIリブートアカデミー";
const aiCourseComparisonDescription =
  "AI講座・リスキリング講座の選び方を7つの比較ポイントで解説。価格、期間、サポート体制、実践性、補助金対応など、後悔しない講座選びのためのガイドです。";
const aiCourseComparisonUrl = "https://ai-reboot.io/academy/ai-course-comparison";

const aiCourseComparisonFaqItems = [
  {
    question: "AI講座を選ぶ際に最も重要なポイントは何ですか？",
    answer:
      "まず受講目的を明確にすることです。ビジネス活用、エンジニア転向、教養のどれを目指すかによって最適な講座は異なります。次に、補助金適用後の実質負担額と、サポート体制を確認しましょう。",
  },
  {
    question: "AI講座の費用相場はどのくらいですか？",
    answer:
      "一般的に10万〜60万円程度です。ただし、リスキリング補助金（最大70%補助）や教育訓練給付金（最大80%補助）を活用できる講座もあり、実質負担は大幅に軽減できます。",
  },
  {
    question: "オンラインと対面、どちらがいいですか？",
    answer:
      "一概にどちらが良いとは言えません。オンラインは場所を選ばず学べる柔軟性があり、対面は集中力と仲間との交流がメリットです。ハイブリッド型（オンライン+短期集中の対面研修）も選択肢の一つです。",
  },
  {
    question: "未経験でもAI講座についていけますか？",
    answer:
      "多くの講座が未経験者向けのカリキュラムを用意しています。プログラミング不要のビジネス活用型講座もあります。不安な場合は、無料説明会やカウンセリングで事前に相談するのがおすすめです。",
  },
  {
    question: "補助金が使えるかどうかはどうやって確認すればいいですか？",
    answer:
      "講座の運営元に直接確認するのが最も確実です。リスキリング補助金の対象講座は経済産業省の公式サイト（careerup.reskilling.go.jp）でも検索できます。",
  },
] as const;

export const metadata: Metadata = {
  title: aiCourseComparisonTitle,
  description: aiCourseComparisonDescription,
  keywords: [
    "AI講座 比較",
    "AI研修 個人向け おすすめ",
    "リスキリング講座 おすすめ",
    "生成AI スクール 選び方",
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
  },
  twitter: {
    card: "summary_large_image",
    title: aiCourseComparisonTitle,
    description: aiCourseComparisonDescription,
  },
};

export default function AcademyAiCourseComparisonPage() {
  return (
    <>
      <FAQStructuredData items={[...aiCourseComparisonFaqItems]} />
      <AiCourseComparisonPage faqItems={[...aiCourseComparisonFaqItems]} />
    </>
  );
}
