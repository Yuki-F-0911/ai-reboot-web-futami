import { Metadata } from "next";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { CorporateTestimonialVideo } from "@/components/corporate/CorporateTestimonialVideo";
import { CorporateProblem } from "@/components/corporate/CorporateProblem";
import { CorporateAbout } from "@/components/corporate/CorporateAbout";
import { CorporateFollowUp } from "@/components/corporate/CorporateFollowUp";
import { CorporateOtherPrograms } from "@/components/corporate/CorporateOtherPrograms";
import { CorporateCase } from "@/components/corporate/CorporateCase";
import { CorporatePricing } from "@/components/corporate/CorporatePricing";
import { CorporateInstructors } from "@/components/corporate/CorporateInstructors";
import { CorporateReasons } from "@/components/corporate/CorporateReasons";
import { CorporateCTA } from "@/components/corporate/CorporateCTA";

export const metadata: Metadata = {
  title: "AIリブート研修（法人向け） | AI REBOOT - ウィルフォワード",
  description: "AIツールの使い方を教えないAI活用力強化プログラム。「自ら学び、自ら突破する生成AI活用力」を身につけ、組織全体がAI時代を生き抜く力を獲得する実践型プログラム。",
};

export default function CorporatePage() {
  return (
    <div className="bg-white">
      <ScrollProgressIndicator />
      <CorporateHero />
      <CorporateTestimonialVideo />
      <CorporateProblem />
      <CorporateAbout />
      <CorporateFollowUp />
      <CorporateOtherPrograms />
      <CorporateCase />
      <CorporatePricing />
      <CorporateInstructors />
      <CorporateReasons />
      <CorporateCTA />
    </div>
  );
}