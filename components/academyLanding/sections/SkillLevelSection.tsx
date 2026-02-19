import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const SkillLevelSection = () => {
    const levels = [
        {
            id: "01",
            level: "LEVEL 01",
            title: "AI基礎力・マインドセット",
            subtitle: "AIを自分事と捉え、変化を味方にする",
            definition: "生成AIの基礎知識を習得し、AIを「恐れる対象」から「活用する相棒」へと認識をアップデートします。100日間の挑戦に向けた土台を築きます。",
            program: {
                title: "AI時代のマインドセット形成",
                action: "主要AIツールの特性理解と、継続的な学習習慣の確立"
            }
        },
        {
            id: "02",
            level: "LEVEL 02",
            title: "AI実務活用・共創力",
            subtitle: "AIを実務に実装し、劇的な価値を創出する",
            definition: "複数の生成AIを使いこなし、日常業務やマーケティング施策にAIを統合。生産性を向上させるだけでなく、AIならではの新しい発想を生み出します。",
            program: {
                title: "実践的なAI共創スキル",
                action: "プロンプトエンジニアリングの深化と業務フローの再設計"
            }
        },
        {
            id: "03",
            level: "LEVEL 03",
            title: "AI時代のキャリアデザイン",
            subtitle: "AIと共に、自分らしい未来を切り拓く",
            definition: "AIに代替されない「人間ならではの強み」を武器に、自走できる人材へ。プログラム修了後も変化し続け、コミュニティと共に成長を続けます。",
            program: {
                title: "Will実現のための人生設計",
                action: "自己理解の深化と、AI時代における独自の提供価値確立"
            }
        }
    ];

    return (
        <section 
            className="py-24 lg:py-32"
            style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                {/* Section Header */}
                <div className="mb-20 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div>
                        <span
                            className="inline-block text-[10px] tracking-[0.2em] font-bold text-orange-500 uppercase mb-4"
                            style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                        >
                            Growth Steps
                        </span>
                        <h2
                            className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6"
                            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
                        >
                            AIスキルの成長段階
                        </h2>
                        <p className="text-slate-600 max-w-2xl leading-relaxed">
                            100日間のプログラムを通じて、段階的にスキルを積み上げます。<br className="hidden lg:block" />
                            単なる操作方法の習得ではなく、AI時代を生き抜く「視点」と「能力」を獲得します。
                        </p>
                    </div>
                    <div className="hidden lg:block flex-shrink-0">
                        <Image
                            src="/images/skill-pyramid-illustration.png"
                            alt="スキル成長ピラミッド"
                            width={180}
                            height={180}
                            className="object-contain opacity-85"
                        />
                    </div>
                </div>

                {/* Competency Definition Sheet Layout */}
                <div className="border-t border-slate-900/10">
                    {levels.map((item) => (
                        <div
                            key={item.id}
                            className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 lg:py-16 border-b border-slate-900/10"
                        >
                            {/* Left: Level Definition */}
                            <div className="lg:col-span-5">
                                <span 
                                    className="text-xs font-bold text-orange-700 tracking-widest mb-4 inline-block"
                                    style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                                >
                                    {item.level}
                                </span>
                                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-medium text-slate-500 mb-6 italic">
                                    {item.subtitle}
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.definition}
                                </p>
                            </div>

                            {/* Right: Program & Action */}
                            <div className="lg:col-span-7 bg-white p-8 lg:p-10 border border-slate-200 rounded-sm">
                                <div className="mb-8">
                                    <h4 className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-3">
                                        Program
                                    </h4>
                                    <p className="text-lg font-bold text-slate-800">
                                        {item.program.title}
                                    </p>
                                </div>
                                <div className="pt-8 border-t border-slate-100">
                                    <h4 className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-3">
                                        Action / Goal
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.program.action}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillLevelSection;
