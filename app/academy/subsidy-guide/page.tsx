import type { Metadata } from "next";
import SubsidyGuidePage from "@/components/academyLanding/subsidy-guide/SubsidyGuidePage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const subsidyGuideTitle = "リスキリング補助金で最大70%OFF | AIリブートアカデミー";
const subsidyGuideDescription =
  "経済産業省の補助金で受講費用の最大70%をカバー。対象者条件、補助金額の計算例、利用の流れをわかりやすく解説。AIリブートアカデミーなら実質120,000円から受講可能。";
const subsidyGuideUrl = "https://ai-reboot.io/academy/subsidy-guide";

const subsidyGuideFaqItems = [
  {
    question: "リスキリング補助金とは何ですか？",
    answer:
      "経済産業省が実施する『リスキリングを通じたキャリアアップ支援事業』の一環で、在職者が転職を目指してスキルを習得する際に、受講費用の最大70%（上限56万円）が補助される制度です。",
  },
  {
    question: "誰でも利用できますか？",
    answer:
      "企業等と雇用契約がある在職者で、転職を目指している方が対象です。正社員だけでなく、契約社員・パート・アルバイト・派遣社員の方も利用できます。フリーランスや経営者は対象外です。",
  },
  {
    question: "補助金はいくらもらえますか？",
    answer:
      "受講修了で受講費用（税抜）の50%（上限40万円）、さらに転職後1年間継続就業すると追加で20%（上限16万円）が補助されます。AIリブートアカデミーの場合、通常330,000円（税込）が実質120,000円からご受講いただけます。",
  },
  {
    question: "補助金はどうやって受け取りますか？",
    answer:
      "補助金は受講者への直接給付ではなく、補助事業者（AIリブートアカデミー）を通じて処理されます。詳しい手続きは無料説明会でご案内しています。",
  },
  {
    question: "複数の講座を同時に受講できますか？",
    answer:
      "同一事業者の複数講座を同時に補助対象とすることや、複数の事業者に同時登録することはできません。",
  },
  {
    question: "いつまでに申し込めばいいですか？",
    answer:
      "受講開始は2027年3月31日以前、転職は2028年3月31日以前が条件です。定員に限りがありますので、お早めにお申し込みください。",
  },
  {
    question: "スキルアップだけが目的でも使えますか？",
    answer:
      "本制度は転職を目指す方を対象としています。転職を前提としない純粋なスキルアップ目的のみの場合は対象外となります。",
  },
] as const;

export const metadata: Metadata = {
  title: subsidyGuideTitle,
  description: subsidyGuideDescription,
  keywords: ["リスキリング補助金 個人", "リスキリング補助金", "AIリブートアカデミー"],
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
  },
  twitter: {
    card: "summary_large_image",
    title: subsidyGuideTitle,
    description: subsidyGuideDescription,
  },
};

export default function AcademySubsidyGuidePage() {
  return (
    <>
      <FAQStructuredData items={[...subsidyGuideFaqItems]} />
      <SubsidyGuidePage faqItems={[...subsidyGuideFaqItems]} />
    </>
  );
}
