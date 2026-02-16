import type { Metadata } from "next";
import SubsidyEligibleCoursesPage from "@/components/academyLanding/subsidy-eligible-courses/SubsidyEligibleCoursesPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const subsidyEligibleCoursesTitle =
  "リスキリング補助金の対象講座とは？見分け方チェックリスト | AIリブートアカデミー";
const subsidyEligibleCoursesDescription =
  "「リスキリングを通じたキャリアアップ支援事業」の対象講座を見分けるチェックリストを解説。経産省認定、キャリア相談、転職支援、申請サポートの確認ポイントを整理しました。";
const subsidyEligibleCoursesUrl = "https://ai-reboot.io/academy/subsidy-eligible-courses";

const subsidyEligibleCoursesFaqItems = [
  {
    question: "対象講座かどうかは、何を最初に確認すればよいですか？",
    answer:
      "まず講座提供事業者が「リスキリングを通じたキャリアアップ支援事業」の対象として案内しているかを確認し、あわせて公式サイト（careerup.reskilling.go.jp）で最新情報を確認してください。",
  },
  {
    question: "教育訓練給付金と同じ制度ですか？",
    answer:
      "別制度です。教育訓練給付金は厚生労働省の制度、リスキリングを通じたキャリアアップ支援事業は経済産業省の制度で、対象者や要件、手続きが異なります。",
  },
  {
    question: "在職中でないと利用できませんか？",
    answer:
      "本制度は企業等と雇用契約がある在職者が対象です。詳細な対象条件は公式サイトの最新要件を確認してください。",
  },
  {
    question: "補助金はどのくらいですか？",
    answer:
      "本制度では、要件を満たすと受講費用の最大70%（上限56万円）が補助されます。内訳や適用条件は講座ごとに確認が必要です。",
  },
  {
    question: "受講後に転職しなかった場合はどうなりますか？",
    answer:
      "補助率は条件達成状況により変わります。受講修了や転職後の継続就業など、段階ごとの要件があるため、申込前に事業者へ確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: subsidyEligibleCoursesTitle,
  description: subsidyEligibleCoursesDescription,
  keywords: [
    "リスキリング補助金 対象講座",
    "リスキリングを通じたキャリアアップ支援事業",
    "経産省認定 リスキリング講座",
  ],
  alternates: {
    canonical: subsidyEligibleCoursesUrl,
  },
  openGraph: {
    title: subsidyEligibleCoursesTitle,
    description: subsidyEligibleCoursesDescription,
    url: subsidyEligibleCoursesUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: subsidyEligibleCoursesTitle,
    description: subsidyEligibleCoursesDescription,
  },
};

export default function AcademySubsidyEligibleCoursesPage() {
  return (
    <>
      <FAQStructuredData items={[...subsidyEligibleCoursesFaqItems]} />
      <SubsidyEligibleCoursesPage faqItems={[...subsidyEligibleCoursesFaqItems]} />
    </>
  );
}
