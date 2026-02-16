import type { Metadata } from "next";
import ReskillingCourseRecommendationPage from "@/components/academyLanding/reskilling-course-recommendation/ReskillingCourseRecommendationPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const reskillingCourseRecommendationTitle = "リスキリング講座おすすめの選び方 | 判断基準を6つで解説";
const reskillingCourseRecommendationDescription =
  "リスキリング講座おすすめを探す方に向けて、講座選びの判断基準を6つに整理。補助金対応、学習形式、サポート体制、実践度、受講後支援まで客観的に解説します。";
const reskillingCourseRecommendationUrl = "https://ai-reboot.io/academy/reskilling-course-recommendation";

const reskillingCourseRecommendationFaqItems = [
  {
    question: "リスキリング講座を選ぶとき、最初に決めるべきことは何ですか？",
    answer:
      "まず受講目的を決めることが重要です。キャリアチェンジ、業務でのスキルアップ、教養としての学習では、選ぶべき講座の内容やサポートが変わります。",
  },
  {
    question: "補助金対応の有無はどこを確認すればよいですか？",
    answer:
      "講座提供側の案内と、制度の公式情報の両方を確認してください。制度ごとに対象条件や申請手順が異なるため、最新情報を照らし合わせて判断するのが安全です。",
  },
  {
    question: "オンライン講座と対面講座はどちらが向いていますか？",
    answer:
      "学習時間の確保しやすさを重視するならオンライン、集中しやすさや対話の密度を重視するなら対面が向きます。両方を組み合わせたハイブリッド型も有力な選択肢です。",
  },
  {
    question: "未経験でもリスキリング講座を受講できますか？",
    answer:
      "未経験者向けの講座は多くあります。事前に前提知識、課題の難易度、質問できる体制を確認し、自分の現在地に合った講座を選ぶことが大切です。",
  },
  {
    question: "受講後の成果を高めるために確認すべき点は何ですか？",
    answer:
      "受講後の支援内容を確認してください。転職支援、ポートフォリオ支援、コミュニティ継続など、学びを次の行動につなげる仕組みがあるかで成果の出方が変わります。",
  },
] as const;

export const metadata: Metadata = {
  title: reskillingCourseRecommendationTitle,
  description: reskillingCourseRecommendationDescription,
  keywords: [
    "リスキリング講座 おすすめ",
    "リスキリング講座 選び方",
    "学び直し 講座 比較",
    "リスキリング 補助金 講座",
  ],
  alternates: {
    canonical: reskillingCourseRecommendationUrl,
  },
  openGraph: {
    title: reskillingCourseRecommendationTitle,
    description: reskillingCourseRecommendationDescription,
    url: reskillingCourseRecommendationUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: reskillingCourseRecommendationTitle,
    description: reskillingCourseRecommendationDescription,
  },
};

export default function AcademyReskillingCourseRecommendationPage() {
  return (
    <>
      <FAQStructuredData items={[...reskillingCourseRecommendationFaqItems]} />
      <ReskillingCourseRecommendationPage faqItems={[...reskillingCourseRecommendationFaqItems]} />
    </>
  );
}
