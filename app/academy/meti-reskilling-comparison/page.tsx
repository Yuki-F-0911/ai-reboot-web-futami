import type { Metadata } from "next";
import MetiReskillingComparisonPage from "@/components/academyLanding/meti-reskilling-comparison/MetiReskillingComparisonPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const metiReskillingComparisonTitle = "経産省認定リスキリング講座を比較する視点｜選び方のポイント";
const metiReskillingComparisonDescription =
  "「経産省認定 リスキリング講座」を検討する方向けに、認定の意味、選定基準、チェックリスト、確認ポイントを整理。制度理解と講座選びを両立する比較ガイドです。";
const metiReskillingComparisonUrl = "https://ai-reboot.io/academy/meti-reskilling-comparison";

const metiReskillingComparisonFaqItems = [
  {
    question: "経産省認定の講座なら、どれを選んでも同じですか？",
    answer:
      "認定は一定要件を満たす目安ですが、成果までを保証するものではありません。実践課題、サポート体制、受講目的との一致をあわせて確認することが重要です。",
  },
  {
    question: "経産省認定かどうかはどこで確認できますか？",
    answer:
      "制度の公式情報と講座提供元の案内を両方確認してください。表記が最新でない場合もあるため、申し込み前に再確認するのが確実です。",
  },
  {
    question: "選定基準は何を重視すべきですか？",
    answer:
      "認定要件の確認に加えて、講座実績、実践課題の有無、サポート運用の具体性を重視してください。制度要件と実務成果の両方を見て判断できます。",
  },
  {
    question: "実質負担額はどう比較すればよいですか？",
    answer:
      "定価だけでなく、制度適用後の自己負担、追加費用、サポート範囲を同じ条件で並べると比較しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: metiReskillingComparisonTitle,
  description: metiReskillingComparisonDescription,
  keywords: [
    "経産省認定 リスキリング講座",
    "経産省認定 講座 比較",
    "リスキリング 認定講座",
    "補助金対応 講座",
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
