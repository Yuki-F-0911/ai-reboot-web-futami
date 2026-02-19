import type { Metadata } from "next";
import HeroSection from "@/components/academyLanding/sections/HeroSection";
import ConceptSection from "@/components/academyLanding/sections/ConceptSection";
import ProgramFlowSection from "@/components/academyLanding/sections/ProgramFlowSection";
import SkillLevelSection from "@/components/academyLanding/sections/SkillLevelSection";
import MidCtaSection from "@/components/academyLanding/sections/MidCtaSection";
import TargetAudienceSection from "@/components/academyLanding/sections/TargetAudienceSection";
import InstructorsSection from "@/components/academyLanding/sections/InstructorsSection";
import VoicesSection from "@/components/academyLanding/sections/VoicesSection";
import SubsidyBanner from "@/components/academyLanding/sections/SubsidyBanner";
import PricingSection from "@/components/academyLanding/sections/PricingSection";
import PreFooterCtaSection from "@/components/academyLanding/sections/PreFooterCtaSection";
import FinalCtaSection from "@/components/academyLanding/sections/FinalCtaSection";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import {
  CourseStructuredData,
  FAQStructuredData,
} from "@/components/seo/StructuredData";

const academyTitle = "AIリブートアカデミー | AI REBOOT - ウィルフォワード";
const academyDescription =
  "生成AIツールを使いこなすためのマインドセットとスキルを身につけ、生成AI時代を生き抜く思考OSをインストールする100日間の実践プログラム。経済産業省リスキリング補助金対象講座。";
const academyUrl = "https://ai-reboot.io/academy";
const academyOgImagePath = "/academy/opengraph-image";
const academyCourseStructuredDataDescription =
  "生成AI活用 × マーケティング × コミュニケーション × キャリアデザインを100日間で学ぶリスキリング講座";

const academyFaqItems = [
  {
    question: "リスキリングを通じたキャリアアップ支援事業とは？",
    answer:
      "経済産業省が実施する在職者向けのキャリアアップ支援制度です。キャリア相談・リスキリング講座・転職支援を一体的に受けられます。",
  },
  {
    question: "受講料はいくらですか？",
    answer:
      "一般受講料は330,000円（税込）です。経済産業省リスキリング補助金を活用した場合は180,000円〜で、転職して1年間継続就業した場合は実質120,000円〜になります。",
  },
  {
    question: "補助金はどのように適用されますか？",
    answer:
      "受講終了時に受講費用の1/2（上限40万円）、転職後1年継続就業で追加1/5（上限16万円）が補助され、受講費用の最大70%が補助されます。",
  },
  {
    question: "プログラム期間はどれくらいですか？",
    answer:
      "2日間の宿泊型集合研修「AIリブートキャンプ」から始まり、100日間の継続的な実践プログラム「AIリブート100」を実施します。",
  },
];

export const metadata: Metadata = {
  title: academyTitle,
  description: academyDescription,
  keywords: [
    "AIリブートアカデミー",
    "経産省認定 リスキリング講座",
    "生成AI 講座",
    "AI リスキリング",
    "AI キャリアアップ",
  ],
  alternates: {
    canonical: academyUrl,
  },
  openGraph: {
    title: academyTitle,
    description: academyDescription,
    url: academyUrl,
    siteName: "AIリブートアカデミー",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: academyOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブートアカデミー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: academyTitle,
    description: academyDescription,
    images: [academyOgImagePath],
  },
};

export default function AcademyPage() {
  return (
    <>
      <CourseStructuredData
        name="AIリブートアカデミー"
        description={academyCourseStructuredDataDescription}
        provider={{
          name: "株式会社ウィルフォワード",
          url: "https://ai-reboot.io",
          type: "EducationalOrganization",
        }}
        url={academyUrl}
        duration="P100D"
        courseMode="blended"
        price={330000}
        priceCurrency="JPY"
      />
      <FAQStructuredData items={academyFaqItems} />

      <HeroSection />
      
      <section className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        <YouTubeEmbed
          videoId="aNmhgX1WomI"
          title="AIリブートアカデミー紹介動画"
          label="VIDEO BRIEF"
          description="AIリブートアカデミーが目指す世界観と、100日間の旅の断片をご覧ください。"
        />
      </section>

      <ConceptSection />
      <ProgramFlowSection />
      <SkillLevelSection />
      <MidCtaSection />
      <TargetAudienceSection />
      <InstructorsSection />
      <VoicesSection />
      <SubsidyBanner />
      <PricingSection />
      <PreFooterCtaSection />
      <FinalCtaSection />
    </>
  );
}
