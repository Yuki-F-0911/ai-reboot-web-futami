import type { Metadata } from "next";
import ReskillingCourseRecommendationPage from "@/components/academyLanding/reskilling-course-recommendation/ReskillingCourseRecommendationPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const reskillingCourseRecommendationTitle = "2026年おすすめリスキリング講座｜補助金対応・AI特化で選ぶ";
const reskillingCourseRecommendationDescription =
  "「リスキリング講座 おすすめ」を探す方に向けて、2026年時点で確認したい選定基準、目的別の選び方、補助金対応の見分け方、失敗しない3チェックを解説します。";
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
    question: "転職・副業・社内スキルアップで選ぶ基準は変わりますか？",
    answer:
      "目的によって優先すべき項目は変わります。転職は成果物とキャリア支援、副業は短期アウトプット、社内スキルアップは業務適用の再現性を重視すると判断しやすくなります。",
  },
  {
    question: "未経験でもリスキリング講座を受講できますか？",
    answer:
      "未経験者向けの講座は多くあります。事前に前提知識、課題の難易度、質問できる体制を確認し、自分の現在地に合った講座を選ぶことが大切です。",
  },
  {
    question: "失敗を避けるために最低限確認すべきことは何ですか？",
    answer:
      "目的との一致、伴走体制、補助金情報の最新性の3点を確認してください。価格だけで判断せず、実践課題と受講後支援まで比較するとミスマッチを減らせます。",
  },
] as const;

export const metadata: Metadata = {
  title: reskillingCourseRecommendationTitle,
  description: reskillingCourseRecommendationDescription,
  keywords: [
    "リスキリング講座 おすすめ",
    "リスキリング講座 比較",
    "補助金対応 講座",
    "AI特化 リスキリング",
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
