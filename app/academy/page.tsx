import type { Metadata } from "next";
import HeroSection from "@/components/academyLanding/sections/HeroSection";
import ConceptSection from "@/components/academyLanding/sections/ConceptSection";
import SubsidyBanner from "@/components/academyLanding/sections/SubsidyBanner";
import InstructorsSection from "@/components/academyLanding/sections/InstructorsSection";
import SkillLevelSection from "@/components/academyLanding/sections/SkillLevelSection";
import PricingSection from "@/components/academyLanding/sections/PricingSection";
import TargetAudienceSection from "@/components/academyLanding/sections/TargetAudienceSection";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AIリブートアカデミー | AI REBOOT - ウィルフォワード",
  description:
    "生成AIツールを使いこなすためのマインドセットとスキルを身につけ、生成AI時代を生き抜く思考OSをインストールする100日間の実践プログラム。経済産業省リスキリング補助金対象講座。",
};

export default function AcademyPage() {
  const steps = [
    {
      id: "01",
      title: "AIリブートキャンプ",
      subtitle: "2日間の宿泊型集合研修",
      description: "仲間と共に集中的に学ぶ2日間。生成AIの本質を理解し、100日間の挑戦が始まります。",
      illustration: "/images/bootcamp-illustration.png"
    },
    {
      id: "02",
      title: "AIリブート100",
      subtitle: "100日間の継続的な実践プログラム",
      description: "最新のAI活用事例と実践的なワークショップ。一人ひとりの課題に寄り添うフィードバック。",
      illustration: "/images/online-learning-illustration.png"
    },
    {
      id: "03",
      title: "成果発表会",
      subtitle: "100日間の集大成",
      description: "100日間の成長と成果を披露する晴れ舞台です。修了証も授与されます。",
      illustration: "/images/presentation-illustration.png"
    }
  ];

  return (
    <>
      <HeroSection />
      <ConceptSection />
      <SubsidyBanner />

      {/* Program Flow Section */}
      <section id="flow" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold text-sm tracking-wider mb-2">
              FLOW
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              プログラムの流れ
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              2日間の集中研修から始まる100日間の旅
            </p>
          </div>

          {/* Flow Diagram with Arrows */}
          <div className="relative">
            {/* Steps Grid - Desktop: cards with arrows between them */}
            <div className="hidden md:flex items-stretch justify-center gap-0">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-stretch">
                  {/* Step Card */}
                  <div className="w-[300px] lg:w-[340px]">
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group h-full">
                      {/* Background Decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full opacity-50" />

                      {/* Illustration */}
                      <div className="relative w-full h-40 mb-6 flex items-center justify-center">
                        <Image
                          src={step.illustration}
                          alt={step.title}
                          width={200}
                          height={160}
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Number Badge */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold text-xl mb-4 shadow-lg shadow-orange-200">
                        {step.id}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-orange-500 font-bold text-sm mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow between cards (only between cards, not after last) */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center justify-center px-4 lg:px-6">
                      <div className="flex items-center gap-1">
                        <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
                        <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Steps Grid */}
            <div className="md:hidden grid grid-cols-1 gap-12">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Mobile Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="flex flex-col items-center py-4">
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                        <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full" />
                        <svg className="w-6 h-6 text-orange-500 -mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group h-full">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full opacity-50" />

                    {/* Illustration */}
                    <div className="relative w-full h-40 mb-6 flex items-center justify-center">
                      <Image
                        src={step.illustration}
                        alt={step.title}
                        width={200}
                        height={160}
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold text-xl mb-4 shadow-lg shadow-orange-200">
                      {step.id}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-orange-500 font-bold text-sm mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SkillLevelSection />

      <TargetAudienceSection />

      <InstructorsSection />

      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white text-center relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            人生を、リブートする。
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            <span className="whitespace-nowrap">生成AI活用 × マーケティング × コミュニケーション × キャリアデザイン</span>
            <br />
            100日間で、AI時代に活躍する人材へ。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-[#06C755] hover:bg-[#05b54d] rounded-full transition-all duration-300 shadow-lg shadow-green-500/30"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              まずはLINEで相談
            </a>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-orange-500 bg-transparent border-2 border-orange-500/50 hover:border-orange-400 hover:bg-orange-500/10 rounded-full transition-all duration-300"
            >
              またはオンライン説明会に参加
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-8">
            ※ 無理な勧誘は一切ございません。安心してお申し込みください。
          </p>
        </div>
      </section>
    </>
  );
}
