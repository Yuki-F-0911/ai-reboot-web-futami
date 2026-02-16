import type { Metadata } from "next";
import ReviewsPage from "@/components/academyLanding/reviews/ReviewsPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const academyReviewsTitle = "AIリブートアカデミーの評判・口コミ・受講後の変化 | AIリブートアカデミー";
const academyReviewsDescription =
  "AIリブートアカデミーの受講生による評判・口コミをご紹介。受講前後の変化、講座の満足度、おすすめポイントをリアルな声でお届けします。";
const academyReviewsUrl = "https://ai-reboot.io/academy/reviews";

const academyReviewsFaqItems = [
  {
    question: "AIリブートアカデミーの受講生の満足度は？",
    answer:
      "現在受講生の声を収集中です。詳細が決まり次第こちらのページで公開いたします。",
  },
  {
    question: "未経験でも受講できますか？",
    answer: "はい。受講生の多くがAI未経験からスタートしています。",
  },
  {
    question: "受講後のキャリアサポートはありますか？",
    answer:
      "キャリアコンサルティングを3回実施し、転職支援まで一体でサポートします。",
  },
  {
    question: "口コミや評判は今後更新されますか？",
    answer:
      "はい。受講生インタビューや学習成果の情報がまとまり次第、順次このページで更新していきます。",
  },
] as const;

export const metadata: Metadata = {
  title: academyReviewsTitle,
  description: academyReviewsDescription,
  keywords: [
    "AIリブートアカデミー 評判",
    "AIリブートアカデミー 口コミ",
    "AI講座 口コミ",
    "リスキリング講座 評判",
  ],
  alternates: {
    canonical: academyReviewsUrl,
  },
  openGraph: {
    title: academyReviewsTitle,
    description: academyReviewsDescription,
    url: academyReviewsUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: academyReviewsTitle,
    description: academyReviewsDescription,
  },
};

export default function AcademyReviewsRoute() {
  return (
    <>
      <FAQStructuredData items={[...academyReviewsFaqItems]} />
      <ReviewsPage faqItems={[...academyReviewsFaqItems]} />
    </>
  );
}
