import { Metadata } from "next";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { CorporateProblem } from "@/components/corporate/CorporateProblem";
import { CorporateProgram } from "@/components/corporate/CorporateProgram";
import { CorporatePricing } from "@/components/corporate/CorporatePricing";
import { CorporateInstructors } from "@/components/corporate/CorporateInstructors";
import { CorporateCTA } from "@/components/corporate/CorporateCTA";

export const metadata: Metadata = {
  title: "AIリブート研修（法人向け） | AI REBOOT - ウィルフォワード",
  description: "座学＋実践＋伴走型OJTの三段構成。生成AIの活用環境を整え、個人・チームレベルで業務に組み込み、メンターが開発・実装まで徹底伴走します。",
};

export default function CorporatePage() {
  return (
    <div className="bg-white">
      <CorporateHero />
      <CorporateProblem />
      <CorporateProgram />
      <CorporatePricing />
      <CorporateInstructors />
      <CorporateCTA />
    </div>
  );
}