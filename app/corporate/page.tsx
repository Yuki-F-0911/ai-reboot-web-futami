import { Metadata } from "next";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { CorporateProblem } from "@/components/corporate/CorporateProblem";
import { CorporateAbout } from "@/components/corporate/CorporateAbout";
import { CorporateFollowUp } from "@/components/corporate/CorporateFollowUp";
import { CorporateOtherPrograms } from "@/components/corporate/CorporateOtherPrograms";
import { CorporateCase } from "@/components/corporate/CorporateCase";
import { CorporatePricing } from "@/components/corporate/CorporatePricing";
import { CorporateSimulator } from "@/components/corporate/CorporateSimulator";
import { CorporateInstructors } from "@/components/corporate/CorporateInstructors";
import { CorporateReasons } from "@/components/corporate/CorporateReasons";
import { CorporateCTA } from "@/components/corporate/CorporateCTA";
import { CorporateContactSection } from "@/components/corporate/CorporateContactSection";

export const metadata: Metadata = {
  title: "企業向けAI研修「AIリブート」| DX人材育成・生成AI実践研修",
  description:
    "企業向けAI研修「AIリブート」は、生成AIの実務活用を軸にDX人材を育成。現場定着まで伴走する研修設計で、組織の生産性向上と変革推進を支援します。",
  keywords: [
    "企業向けAI研修",
    "AI研修",
    "生成AI研修",
    "DX人材育成",
    "AI活用研修",
    "AIリブート",
  ],
  alternates: {
    canonical: "https://ai-reboot.io/corporate",
  },
  openGraph: {
    title: "企業向けAI研修「AIリブート」| DX人材育成・生成AI実践研修",
    description:
      "企業向けAI研修「AIリブート」は、生成AIの実務活用を軸にDX人材を育成。現場定着まで伴走する研修設計で、組織の生産性向上と変革推進を支援します。",
    url: "https://ai-reboot.io/corporate",
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "企業向けAI研修 AIリブート",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "企業向けAI研修「AIリブート」| DX人材育成・生成AI実践研修",
    description:
      "企業向けAI研修「AIリブート」は、生成AIの実務活用を軸にDX人材を育成。現場定着まで伴走する研修設計で、組織の生産性向上と変革推進を支援します。",
    images: ["/opengraph-image"],
  },
};

export default function CorporatePage() {
  return (
    <div className="bg-white">
      <ScrollProgressIndicator />
      <CorporateHero />
      <CorporateProblem />
      <CorporateAbout />
      <CorporatePricing />
      <CorporateSimulator />
      <CorporateFollowUp />
      <CorporateOtherPrograms />
      <CorporateCase />
      <CorporateInstructors />
      <CorporateReasons />
      <CorporateCTA />
      <CorporateContactSection />
    </div>
  );
}
