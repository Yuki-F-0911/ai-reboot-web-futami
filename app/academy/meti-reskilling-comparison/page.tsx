import type { Metadata } from "next";
import MetiReskillingComparisonPage from "@/components/academyLanding/meti-reskilling-comparison/MetiReskillingComparisonPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const metiReskillingComparisonTitle = "経産省認定リスキリング講座を比較する視点 | AIリブートアカデミー";
const metiReskillingComparisonDescription =
  "経産省認定リスキリング講座を比較するときに確認したい5つの視点を整理。認定制度の違い、実績、サポート体制、実践性、実質負担額まで客観的に解説します。";
const metiReskillingComparisonUrl = "https://ai-reboot.io/academy/meti-reskilling-comparison";

const metiReskillingComparisonFaqItems = [
  {
    question: "経産省認定の講座なら、どれを選んでも安心ですか？",
    answer:
      "認定は一定の要件を満たしていることを示す情報ですが、それだけで受講成果まで保証されるわけではありません。受講目的、学習支援、実践課題の有無まで合わせて確認することが重要です。",
  },
  {
    question: "リスキリング補助金と教育訓練給付金は同じ制度ですか？",
    answer:
      "同じではありません。制度の目的や対象者、申請条件が異なるため、講座ページだけで判断せず、必ず制度の公式情報と講座提供元の案内を併せて確認しましょう。",
  },
  {
    question: "実質負担額はどのように比較すればよいですか？",
    answer:
      "受講料の総額だけでなく、制度適用後の自己負担、学習期間中に必要な追加費用、サポートの範囲を同じ表に並べると比較しやすくなります。",
  },
  {
    question: "制度情報の確認先はどこですか？",
    answer:
      "経済産業省のリスキリング関連制度は careerup.reskilling.go.jp で確認できます。最終的な適用可否は、最新の公式案内と講座提供元への確認を行ってください。",
  },
] as const;

export const metadata: Metadata = {
  title: metiReskillingComparisonTitle,
  description: metiReskillingComparisonDescription,
  keywords: [
    "経産省認定 リスキリング講座",
    "リスキリング講座 比較",
    "リスキリング 補助金 講座",
    "教育訓練給付金 講座",
  ],
  alternates: {
    canonical: metiReskillingComparisonUrl,
  },
  openGraph: {
    title: metiReskillingComparisonTitle,
    description: metiReskillingComparisonDescription,
    url: metiReskillingComparisonUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metiReskillingComparisonTitle,
    description: metiReskillingComparisonDescription,
  },
};

export default function AcademyMetiReskillingComparisonPage() {
  return (
    <>
      <FAQStructuredData items={[...metiReskillingComparisonFaqItems]} />
      <MetiReskillingComparisonPage faqItems={[...metiReskillingComparisonFaqItems]} />
    </>
  );
}
