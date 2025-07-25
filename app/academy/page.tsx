import { Metadata } from "next";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyProblem } from "@/components/academy/AcademyProblem";
import { AcademyConcept } from "@/components/academy/AcademyConcept";
import { AcademyFeatures } from "@/components/academy/AcademyFeatures";
import { AcademyPhilosophy } from "@/components/academy/AcademyPhilosophy";
import { AcademyGovernment } from "@/components/academy/AcademyGovernment";
import { AcademyCurriculum } from "@/components/academy/AcademyCurriculum";
import { AcademyInstructors } from "@/components/academy/AcademyInstructors";
import { AcademyFAQ } from "@/components/academy/AcademyFAQ";
import { AcademyCTA } from "@/components/academy/AcademyCTA";

export const metadata: Metadata = {
  title: "AIリブートアカデミー | AI REBOOT - ウィルフォワード",
  description: "AIを学ぶ。生き方を、変える。これは、AIスクールではありません。変化の時代を生きる、あなたのための人生の学校です。経済産業省リスキリング補助金対象講座。",
};

export default function AcademyPage() {
  return (
    <div className="bg-white">
      <AcademyHero />
      <AcademyProblem />
      <AcademyConcept />
      <AcademyFeatures />
      <AcademyPhilosophy />
      <AcademyGovernment />
      <AcademyCurriculum />
      <AcademyInstructors />
      <AcademyFAQ />
      <AcademyCTA />
    </div>
  );
}