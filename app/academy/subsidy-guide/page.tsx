import type { Metadata } from "next";
import SubsidyGuidePage from "@/components/academyLanding/subsidy-guide/SubsidyGuidePage";
import { CourseStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const subsidyGuideTitle = "リスキリング補助金ガイド2026｜個人向けAI研修の対象条件と申請手順";
const subsidyGuideDescription =
  "リスキリング補助金を個人で活用するための対象条件、申請手順、AI研修での使い方を解説。受講料330,000円の計算例（条件で変動）と最大70%相当の負担軽減ポイントを確認し、まずは無料説明会へ。";
const subsidyGuideUrl = "https://ai-reboot.io/academy/subsidy-guide";
const subsidyGuideOgImagePath = "/academy/subsidy-guide/opengraph-image";

const subsidyGuideFaqItems = [
  {
    question: "リスキリング補助金とは何ですか？",
    answer:
      "経済産業省『リスキリングを通じたキャリアアップ支援事業』で、在職者が転職（転職先での就業）を目指して学ぶ際の受講費用を支援する制度です。補助は補助事業者へ交付され、受講者は受講費用の軽減として受ける形が一般的です。受講修了で受講費用の1/2（上限40万円）、転職先で1年継続就業で追加1/5（上限16万円）など段階要件があります（2026年2月時点）。",
  },
  {
    question: "パート・アルバイトでも対象ですか？",
    answer:
      "雇用契約のある在職者で、転職意向がある方は対象になり得ます。正社員だけでなく契約社員・パート・アルバイト・派遣社員も対象範囲に含まれる案内があります。最終判定は募集要項・事務局審査をご確認ください。",
  },
  {
    question: "すでに退職していても使えますか？",
    answer:
      "登録時点および初回面談時点で在職中であることが要件として示されています。すでに退職済みの場合は原則対象外となる可能性が高いため、個別に事務局へ確認が必要です。",
  },
  {
    question: "他の補助金と併用できますか？",
    answer:
      "併用可否は制度ごとに要件が異なります。利用前に講座提供事業者と事務局へ確認してください。",
  },
  {
    question: "申請は難しいですか？",
    answer:
      "必要書類と期日を押さえれば進められます。AIリブートアカデミーでは無料説明会と個別相談で、AI研修 補助金 申し込みの流れをステップごとに案内しています。",
  },
  {
    question: "いつまでに申し込めばいいですか？",
    answer:
      "募集枠や締切は回ごとに変動します。まず説明会で直近スケジュールを確認し、書類準備に必要な期間を逆算して早めに申し込むのがおすすめです。",
  },
  {
    question: "補助金はいくら受けられますか？",
    answer:
      "公式情報では、受講修了で受講費用の1/2（上限40万円）、転職先で1年継続就業で追加1/5（上限16万円）など、段階要件があります（合計最大70%相当、上限56万円）。AIリブートアカデミー受講料¥330,000（税込、税抜¥300,000）の場合、税抜基準の計算例では最終的な実質負担は¥120,000が目安です（支払い方法や適用タイミングは事業者により異なる場合があります）。",
  },
  {
    question: "リスキリング補助金 対象講座はどう見分けますか？",
    answer:
      "講座提供事業者が本制度の対象として明示しているかを確認し、あわせて公式サイト（careerup.reskilling.go.jp）の最新情報を確認してください。キャリア相談・リスキリング・転職支援が一体提供される設計かも確認ポイントです。",
  },
  {
    question: "AI研修 補助金 申し込みで最初に何をすべきですか？",
    answer:
      "最初は無料説明会で対象条件と必要書類を確認することです。対象判定後に申し込み・面談・受講の順で進めると、書類不足や期限超過を防ぎやすくなります。",
  },
  {
    question: "AIリブートアカデミーの受講料と補助後負担はいくらですか？",
    answer:
      "受講料は¥330,000（税込）です。税抜¥300,000を基準にした公式要件の計算例では、受講修了時点の実質負担は¥180,000、追加補助まで達成した場合は¥120,000が目安です（条件達成状況により変動します）。",
  },
] as const;

const subsidyGuideHowToSteps = [
  {
    name: "無料説明会に参加する",
    text: "制度概要、対象条件、必要書類、申請期限を確認します。",
  },
  {
    name: "個別相談で対象判定を受ける",
    text: "在職状況や転職意向をもとに、申し込み可否を確認します。",
  },
  {
    name: "対象講座へ正式申し込み",
    text: "AIリブートアカデミーの受講手続きを行い、受講開始準備を進めます。",
  },
  {
    name: "受講修了で一次補助を適用",
    text: "受講費用の1/2（上限40万円）相当を補助対象として処理します。",
  },
  {
    name: "転職後1年継続就業で追加補助",
    text: "追加1/5（上限16万円）相当の補助適用条件を満たすと、合計で最大70%相当まで負担が軽減されます。",
  },
] as const;

export const metadata: Metadata = {
  title: subsidyGuideTitle,
  description: subsidyGuideDescription,
  keywords: [
    "リスキリング補助金 個人",
    "リスキリング補助金 対象講座",
    "AI研修 補助金 申し込み",
    "AIリブートアカデミー",
  ],
  alternates: {
    canonical: subsidyGuideUrl,
  },
  openGraph: {
    title: subsidyGuideTitle,
    description: subsidyGuideDescription,
    url: subsidyGuideUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: subsidyGuideOgImagePath,
        width: 1200,
        height: 630,
        alt: "リスキリング補助金ガイド",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: subsidyGuideTitle,
    description: subsidyGuideDescription,
    images: [subsidyGuideOgImagePath],
  },
};

export default function AcademySubsidyGuidePage() {
  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "AI研修 補助金 申し込みの流れ",
    description:
      "リスキリングを通じたキャリアアップ支援事業を個人で活用し、AIリブートアカデミーへ申し込む手順。",
    totalTime: "P100D",
    step: subsidyGuideHowToSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: subsidyGuideUrl,
    })),
  };

  return (
    <>
      {/* TODO: 要ファクト確認 - 「雇用保険被保険者等」の厳密要件は募集回の最新公募要領で最終確認 */}
      <CourseStructuredData
        name="AIリブートアカデミー（補助金対象講座）"
        description="生成AI活用を100日間で実践し、経済産業省のリスキリング補助金対象で受講できるAI講座。"
        provider={{
          name: "株式会社ウィルフォワード",
          url: "https://ai-reboot.io",
          type: "EducationalOrganization",
        }}
        url={subsidyGuideUrl}
        duration="P100D"
        courseMode="blended"
        price={330000}
        priceCurrency="JPY"
      />
      <FAQStructuredData items={[...subsidyGuideFaqItems]} />
      <script
        id="subsidy-guide-howto-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />
      <SubsidyGuidePage faqItems={[...subsidyGuideFaqItems]} />
    </>
  );
}
