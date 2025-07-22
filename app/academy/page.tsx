import { Metadata } from "next";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyProblem } from "@/components/academy/AcademyProblem";
import { AcademyConcept } from "@/components/academy/AcademyConcept";
import { AcademyFeatures } from "@/components/academy/AcademyFeatures";
import { AcademyCurriculum } from "@/components/academy/AcademyCurriculum";
import { AcademyPricing } from "@/components/academy/AcademyPricing";
import { AcademyInstructors } from "@/components/academy/AcademyInstructors";
import { AcademyVoices } from "@/components/academy/AcademyVoices";
import { AcademyFAQ } from "@/components/academy/AcademyFAQ";
import { AcademyFlow } from "@/components/academy/AcademyFlow";
import { AcademySchedule } from "@/components/academy/AcademySchedule";
import { AcademyCTA } from "@/components/academy/AcademyCTA";

export const metadata: Metadata = {
  title: "AIリブートアカデミー | AI REBOOT - ウィルフォワード",
  description: "100日で、AIを味方につける。経済産業省リスキリング補助金対象講座。最大70%（21万円）の補助で、本格的なAI活用スキルを習得。",
};

export default function AcademyPage() {
  return (
    <div className="bg-white">
      <AcademyHero />
      <AcademyProblem />
      <AcademyConcept />
      <AcademyFeatures />
      <AcademyCurriculum />
      <AcademyPricing />
      <AcademyInstructors />
      <AcademyVoices />
      <AcademyFAQ />
      <AcademyFlow />
      <AcademySchedule />
      <AcademyCTA />
    </div>
  );
}