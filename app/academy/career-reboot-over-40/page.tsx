import type { Metadata } from "next";
import CareerRebootOver40Page from "@/components/academyLanding/career-reboot-over-40/CareerRebootOver40Page";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const careerRebootOver40Title = "40代からのAIキャリアリブート｜不安を整理して、次の選択肢を増やす";
const careerRebootOver40Description =
  "40代のAI学習は、技術の暗記ではなく「経験×AI」を現場で使える形にすることから。生成AI活用力・自己理解とキャリアデザイン・仲間と共に学ぶ環境の3本柱で、仕事と家庭がある中でも一歩を積み上げられます。";
const careerRebootOver40Url = "https://ai-reboot.io/academy/career-reboot-over-40";
const careerRebootOver40OgImagePath = "/academy/opengraph-image";

const careerRebootOver40FaqItems = [
  {
    question: "40代で、AI学習は遅くないですか？",
    answer:
      "遅いかどうかよりも「どう学ぶか」が大切です。40代は現場の文脈や顧客理解などの経験があるため、AIの出力を実務に落とし込む力が強みになります。まずは業務の中の繰り返し作業を一つ選び、使いながら進めるのがおすすめです。",
  },
  {
    question: "忙しくて、まとまった学習時間が取れません。",
    answer:
      "まとまった時間がない前提で、短い単位で試して積み上げる設計が重要です。学びを「情報収集」で止めず、業務で使う→振り返る→改善するを回すと、少ない時間でも前に進みやすくなります。",
  },
  {
    question: "何から始めればいいか分かりません。",
    answer:
      "最初は「仕事の負担が重い作業を一つ選ぶ」からで大丈夫です。提案書のたたき台、会議メモの要点整理、顧客理解の補助など、日常の仕事の中に出発点があります。",
  },
  {
    question: "AIを学ぶ目的は、転職だけですか？",
    answer:
      "転職だけが目的ではありません。現職での役割拡張、社内での推進役、提案力の強化など、経験を活かして選択肢を増やす目的でも学べます。自分の優先順位を整理したうえで、進む方向を決めるのが大切です。",
  },
  {
    question: "補助金は使えますか？",
    answer:
      "制度の対象条件や募集状況は変動するため、まずは公式情報と確認手順を押さえるのが安全です。制度概要と確認ポイントは「補助金ガイド」で整理しています。",
  },
  {
    question: "受講生の声はどこで確認できますか？",
    answer:
      "評判・口コミは「受講生の評判・口コミ」ページで確認できます。セミナーやLINE相談では、あなたの状況に合わせた進め方の整理も可能です。",
  },
] as const;

export const metadata: Metadata = {
  title: careerRebootOver40Title,
  description: careerRebootOver40Description,
  keywords: [
    "40代 リスキリング",
    "AI学習 40代",
    "キャリアチェンジ AI",
    "AI リスキリング",
    "AI キャリア",
  ],
  alternates: {
    canonical: careerRebootOver40Url,
  },
  openGraph: {
    title: careerRebootOver40Title,
    description: careerRebootOver40Description,
    url: careerRebootOver40Url,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: careerRebootOver40OgImagePath,
        width: 1200,
        height: 630,
        alt: "40代からのAIキャリアリブート",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: careerRebootOver40Title,
    description: careerRebootOver40Description,
    images: [careerRebootOver40OgImagePath],
  },
};

export default function CareerRebootOver40Route() {
  return (
    <>
      <FAQStructuredData items={[...careerRebootOver40FaqItems]} />
      <CareerRebootOver40Page faqItems={[...careerRebootOver40FaqItems]} />
    </>
  );
}

