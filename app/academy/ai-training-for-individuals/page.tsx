import type { Metadata } from "next";
import AiTrainingForIndividualsPage from "@/components/academyLanding/ai-training-for-individuals/AiTrainingForIndividualsPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const aiTrainingForIndividualsTitle = "個人向けAI研修おすすめの選び方 | AIリブートアカデミー";
const aiTrainingForIndividualsDescription =
  "個人でAI研修を選ぶときに押さえたい判断軸を整理。独学との違い、スクール活用のメリット、チェックリスト、向き不向き、FAQまで客観的に解説します。";
const aiTrainingForIndividualsUrl = "https://ai-reboot.io/academy/ai-training-for-individuals";

const aiTrainingForIndividualsFaqItems = [
  {
    question: "個人でAI研修を受けるべきか、独学を続けるべきか迷っています。",
    answer:
      "短期間で実務利用まで到達したい、質問相手が必要、学習計画を一人で管理しづらい場合は研修活用が向いています。時間をかけて自分のペースで進められる場合は独学も有効です。",
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
    question: "補助金や支援制度は個人でも使えますか？",
    answer:
      "制度ごとに対象条件が異なるため、公式情報と講座提供元の案内を両方確認するのが確実です。利用可否は雇用形態や受講目的で変わる場合があります。",
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
    "AIスクール 選び方",
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
