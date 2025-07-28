import { Metadata } from "next";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyOverview } from "@/components/academy/AcademyOverview";
import { AcademyPurpose } from "@/components/academy/AcademyPurpose";
import { AcademyProgram } from "@/components/academy/AcademyProgram";
import { AcademyFeatures } from "@/components/academy/AcademyFeatures";
import { AcademyTarget } from "@/components/academy/AcademyTarget";
import { AcademyInstructors } from "@/components/academy/AcademyInstructors";
import { AcademyPricing } from "@/components/academy/AcademyPricing";
import { AcademyStory } from "@/components/academy/AcademyStory";
import { AcademyCTA } from "@/components/academy/AcademyCTA";

export const metadata: Metadata = {
  title: "AIリブートアカデミー | AI REBOOT - ウィルフォワード",
  description: "生成AIツールを使いこなすためのマインドセットとスキルを身につけ、生成AI時代を生き抜く思考OSをインストールする100日間の実践プログラム。経済産業省リスキリング補助金対象講座。",
};

export default function AcademyPage() {
  return (
    <div className="bg-white">
      <AcademyHero />
      <AcademyOverview />
      <AcademyPurpose />
      <AcademyProgram />
      <AcademyFeatures />
      <AcademyTarget />
      <AcademyInstructors />
      <AcademyPricing />
      <AcademyStory />
      <AcademyCTA />
    </div>
  );
}