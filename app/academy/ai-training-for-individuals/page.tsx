import type { Metadata } from "next";
import AiTrainingForIndividualsPage from "@/components/academyLanding/ai-training-for-individuals/AiTrainingForIndividualsPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const aiTrainingForIndividualsTitle = "個人向けAI研修おすすめの選び方｜独学 vs スクール徹底比較";
const aiTrainingForIndividualsDescription =
  "「AI研修 個人向け おすすめ」で比較中の方向けに、独学とスクールのメリット・デメリット、向いている人のチェックリスト、目的別学習パスを整理しました。";
const aiTrainingForIndividualsUrl = "https://ai-reboot.io/academy/ai-training-for-individuals";

const aiTrainingForIndividualsFaqItems = [
  {
    question: "独学とスクール、どちらが向いているかはどう判断すればいいですか？",
    answer:
      "短期で実務活用したい場合や、質問・伴走が必要な場合はスクールが向いています。時間をかけて探索したい場合は独学でも進められます。",
  },
  {
    question: "個人向けAI研修を選ぶとき、最初に確認する項目は何ですか？",
    answer:
      "最初に確認したいのは受講目的です。業務効率化、キャリアチェンジ、基礎教養のどれを目指すかで、必要なカリキュラムやサポート内容が変わります。",
  },
  {
    question: "費用比較は受講料だけ見れば十分ですか？",
    answer:
      "受講料だけでは判断しにくいため、学習期間、質問サポート、実践課題の有無、補助制度の利用可否を合わせて実質的な負担と得られる成果を確認するのが安全です。",
  },
  {
    question: "スクールが向いている人の特徴はありますか？",
    answer:
      "学習計画を一人で管理しづらい人、実務課題に落とし込みたい人、質問環境が必要な人はスクール活用の効果が出やすい傾向があります。",
  },
  {
    question: "研修修了後に確認しておくべきことはありますか？",
    answer:
      "受講後の相談窓口、学習継続コミュニティ、実務での活用支援の有無を確認しておくと、学んだ内容を現場に定着させやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: aiTrainingForIndividualsTitle,
  description: aiTrainingForIndividualsDescription,
  keywords: [
    "AI研修 個人向け おすすめ",
    "個人向けAI研修",
    "独学 スクール 比較",
    "AI学習 独学",
  ],
  alternates: {
    canonical: aiTrainingForIndividualsUrl,
  },
  openGraph: {
    title: aiTrainingForIndividualsTitle,
    description: aiTrainingForIndividualsDescription,
    url: aiTrainingForIndividualsUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: aiTrainingForIndividualsTitle,
    description: aiTrainingForIndividualsDescription,
  },
};

export default function AcademyAiTrainingForIndividualsPage() {
  return (
    <>
      <FAQStructuredData items={[...aiTrainingForIndividualsFaqItems]} />
      <AiTrainingForIndividualsPage faqItems={[...aiTrainingForIndividualsFaqItems]} />
    </>
  );
}
