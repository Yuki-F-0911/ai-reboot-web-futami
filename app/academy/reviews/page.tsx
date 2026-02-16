import type { Metadata } from "next";
import ReviewsPage from "@/components/academyLanding/reviews/ReviewsPage";
import {
  CourseReviewStructuredData,
  FAQStructuredData,
} from "@/components/seo/StructuredData";

const academyReviewsTitle =
  "AIリブートアカデミー 評判・口コミ｜受講生の声と受講後の変化";
const academyReviewsDescription =
  "AIリブートアカデミーの評判・口コミを、受講生の属性別レビューとBefore/Afterで紹介。受講後の変化や補助金FAQを確認し、無料セミナーで疑問を解消できます。";
const academyReviewsUrl = "https://ai-reboot.io/academy/reviews";
const academyReviewsOgImagePath = "/academy/opengraph-image";

const academyReviewsFaqItems = [
  {
    question: "未経験でもついていけますか？",
    answer:
      "はい。AI活用が初めての方でも、2日間の集中研修と100日間の伴走サポートで段階的に学べる設計です。課題に応じたメンターフィードバックで、理解を積み上げられます。",
  },
  {
    question: "補助金は本当に使えますか？",
    answer:
      "一定の条件を満たす場合、経済産業省リスキリング補助金の対象になります。対象条件や申請フローは「補助金ガイド」で事前に確認できます。",
  },
  {
    question: "卒業後のサポートはありますか？",
    answer:
      "あります。修了後も学習を継続できるコミュニティと、キャリア相談・実務適用のフォローを用意しています。受講して終わりではなく、実装と定着まで支援します。",
  },
  {
    question: "他の講座との違いは？",
    answer:
      "知識インプット中心ではなく、2日間の集中研修から100日間の伴走で「実務で使える変化」を重視している点です。学習だけでなく、行動変容と継続実践まで一貫して設計されています。",
  },
] as const;

const academyReviewsStructuredDataItems: ReadonlyArray<{
  author: string;
  reviewBody: string;
  reviewRating: number;
  headline?: string;
}> = [
  {
    author: "30代・転職希望者",
    headline: "未経験から業務活用へ",
    reviewBody:
      "AI活用の経験がない状態からでも、2日間の集中研修と100日間の伴走で実務への適用イメージを持てました。",
    reviewRating: 5,
  },
  {
    author: "40代・管理職",
    headline: "現場導入を見据えた学び",
    reviewBody:
      "概念理解だけで終わらず、チーム運用に向けた活用方針を整理できました。現場での導入判断がしやすくなりました。",
    reviewRating: 4,
  },
  {
    author: "フリーランス",
    headline: "提案改善の手応え",
    reviewBody:
      "伴走を通じて提案プロセスを見直せたことで、案件ごとに生成AIをどう活かすかの応用イメージが明確になりました。",
    reviewRating: 5,
  },
];

const academyReviewsAggregateRating = {
  ratingValue:
    Math.round(
      (academyReviewsStructuredDataItems.reduce((total, item) => total + item.reviewRating, 0) /
        academyReviewsStructuredDataItems.length) *
        10
    ) / 10,
  reviewCount: academyReviewsStructuredDataItems.length,
};

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
    siteName: "AIリブートアカデミー",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: academyReviewsOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブートアカデミーの評判・口コミ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: academyReviewsTitle,
    description: academyReviewsDescription,
    images: [academyReviewsOgImagePath],
  },
};

export default function AcademyReviewsRoute() {
  return (
    <>
      <FAQStructuredData items={[...academyReviewsFaqItems]} />
      {academyReviewsStructuredDataItems.length > 0 ? (
        <CourseReviewStructuredData
          courseName="AIリブートアカデミー"
          courseUrl={academyReviewsUrl}
          description={academyReviewsDescription}
          providerName="株式会社ウィルフォワード"
          aggregateRating={{ ...academyReviewsAggregateRating }}
          reviews={[...academyReviewsStructuredDataItems]}
        />
      ) : null}
      <ReviewsPage faqItems={[...academyReviewsFaqItems]} />
    </>
  );
}
