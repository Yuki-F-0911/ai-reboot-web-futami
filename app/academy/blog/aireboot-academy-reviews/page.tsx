import type { Metadata } from "next";
import AirebootAcademyReviewsPage from "@/components/academyLanding/blog/aireboot-academy-reviews/AirebootAcademyReviewsPage";
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
} from "@/components/seo/StructuredData";

const pageTitle =
  "AIリブートアカデミーの評判・口コミは実際どう？受講前に確認すべきポイントを正直解説 | AIリブート";
const pageDescription =
  "AIリブートアカデミーの評判・口コミを、公式公開の第一期コメントと講座情報をもとに検証。向いている人・向いていない人、受講後の変化、よくある不安への回答まで整理しました。";
const pageUrl = "https://ai-reboot.io/academy/blog/aireboot-academy-reviews";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T18:00:00+09:00";

const faqItems = [
  {
    question: "AIリブートアカデミーの評判は良いですか？",
    answer:
      "公開されている第一期受講生コメントでは、実務接続のしやすさや仲間との学習環境を評価する声が見られます。一方で、費用や時間確保のハードルを事前に確認することが重要です。",
  },
  {
    question: "AIリブートアカデミーの口コミはどこまで信頼できますか？",
    answer:
      "公式掲載コメントは参考になりますが、掲載媒体の特性上ポジティブ寄りになる可能性はあります。最終判断では、期間・サポート内容・自分の目的との一致を合わせて確認するのが現実的です。",
  },
  {
    question: "未経験でも受講についていけますか？",
    answer:
      "公式FAQでは、AI活用が初めてでも段階的に学べる設計とされています。実際には、受講前に確保できる学習時間と、相談できる環境を確認しておくとミスマッチを減らせます。",
  },
  {
    question: "仕事が忙しくても100日間継続できますか？",
    answer:
      "継続の可否は、忙しさそのものよりも「毎週どれだけ学習時間を確保できるか」で決まります。受講前に、週単位で学習枠を固定できるかを確認しておくのがおすすめです。",
  },
  {
    question: "受講料に見合う価値があるかはどう判断すべきですか？",
    answer:
      "価格の高低だけでなく、受講目的、業務への適用可能性、受講後に続けられる学習環境の3点で判断すると納得しやすくなります。補助金条件は公式ページで最新情報を確認してください。",
  },
  {
    question: "最終判断の前に何を確認すれば後悔しにくいですか？",
    answer:
      "「受講目的」「100日間の時間確保」「向いていない条件に当てはまらないか」の3点を確認するのが有効です。迷う場合はLINEで個別相談し、具体的な学習計画をすり合わせてから決めると安心です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AIリブートアカデミー 評判",
    "AIリブートアカデミー 口コミ",
    "AIリブートアカデミー 受講 感想",
    "AIリブート 評判",
    "AIスクール 受講前チェック",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: pageOgImageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageOgImageUrl],
  },
};

export default function AirebootAcademyReviewsRoute() {
  return (
    <>
      <ArticleStructuredData
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        imageUrl={pageOgImageUrl}
        articleType="BlogPosting"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://ai-reboot.io" },
          { name: "アカデミー", url: "https://ai-reboot.io/academy" },
          { name: "ブログ", url: "https://ai-reboot.io/academy/blog" },
          { name: "AIリブートアカデミーの評判・口コミ", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AirebootAcademyReviewsPage faqItems={[...faqItems]} />
    </>
  );
}
