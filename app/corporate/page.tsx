import { Metadata } from "next";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { CorporateProblem } from "@/components/corporate/CorporateProblem";
import { CorporateFeatures } from "@/components/corporate/CorporateFeatures";
import { CorporateProgram } from "@/components/corporate/CorporateProgram";
import { CorporateCase } from "@/components/corporate/CorporateCase";
import { CorporatePricing } from "@/components/corporate/CorporatePricing";
import { CorporateInstructors } from "@/components/corporate/CorporateInstructors";
import { CorporateReasons } from "@/components/corporate/CorporateReasons";
import { CorporateCTA } from "@/components/corporate/CorporateCTA";

export const metadata: Metadata = {
  title: "AIリブート研修（法人向け） | AI REBOOT - ウィルフォワード",
  description: "組織のOSを再起動する、AIリブート研修。「自ら学び、自ら突破する生成AI活用力」を身につけ、組織全体がAI時代を生き抜く力を獲得する実践型プログラム。",
};

export default function CorporatePage() {
  return (
    <div className="bg-white">
      <ScrollProgressIndicator />
      <CorporateHero />
      <CorporateProblem />
      <CorporateFeatures />
      <CorporateProgram />
      <CorporateCase />
      <CorporatePricing />
      <CorporateInstructors />
      <CorporateReasons />
      <CorporateCTA />
    </div>
  );
}