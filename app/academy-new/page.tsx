import { Metadata } from "next";
import { AcademyHero } from "./components/AcademyHero";
import { ChapterSection } from "./components/ChapterSection";
import { Prologue } from "./components/chapters/Prologue";
import { Chapter1 } from "./components/chapters/Chapter1";
import { Chapter2 } from "./components/chapters/Chapter2";
import { Chapter3 } from "./components/chapters/Chapter3";
import { Chapter4 } from "./components/chapters/Chapter4";
import { Finale } from "./components/chapters/Finale";
import { ProgressBar } from "./components/ui/ProgressBar";

export const metadata: Metadata = {
  title: "AI REBOOT Academy - あなたの物語が、ここから始まる",
  description: "AIという時代の大きな変化が、あなたの内なる「Will」を浮き彫りにする。静かな革命は、いつも夜明け前に始まる。",
};

export default function AcademyNewPage() {
  return (
    <main className="relative bg-white">
      <ProgressBar />
      
      {/* ファーストビュー */}
      <AcademyHero />
      
      {/* 6章構成 */}
      <div className="relative">
        {/* 序章：これは、あなたの物語だ */}
        <ChapterSection id="prologue" emotionalTrigger="empathy">
          <Prologue />
        </ChapterSection>
        
        {/* 第一章：あなたの「なぜ」を、見せてください */}
        <ChapterSection id="chapter1" emotionalTrigger="curiosity">
          <Chapter1 />
        </ChapterSection>
        
        {/* 第二章：どんな新しいAIが現れても、使いこなせる自分になる */}
        <ChapterSection id="chapter2" emotionalTrigger="possibility">
          <Chapter2 />
        </ChapterSection>
        
        {/* 第三章：我々は「共犯者」です */}
        <ChapterSection id="chapter3" emotionalTrigger="trust">
          <Chapter3 />
        </ChapterSection>
        
        {/* 第四章：小さな変化が、大きな違いを生む */}
        <ChapterSection id="chapter4" emotionalTrigger="excitement">
          <Chapter4 />
        </ChapterSection>
        
        {/* 最終章：で、どうする？ */}
        <ChapterSection id="finale" emotionalTrigger="determination">
          <Finale />
        </ChapterSection>
      </div>
    </main>
  );
}