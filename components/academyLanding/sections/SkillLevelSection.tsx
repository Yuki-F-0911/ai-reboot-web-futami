"use client";

import Image from "next/image";

const SkillLevelSection = () => {
    const levels = [
        {
            level: "STEP 1",
            title: "AI基礎力",
            subtitle: "AIを自分事と捉え、変革に向けて行動できるレベル",
            program: {
                title: "AI時代のマインドセット形成",
                description: "生成AIの基礎知識を習得し、AIを恐れず活用する姿勢を身につけます。100日間の挑戦のスタートラインです。"
            }
        },
        {
            level: "STEP 2",
            title: "AI活用力",
            subtitle: "AIを活用して業務効率化・価値創出ができるレベル",
            program: {
                title: "実践的なAI共創スキル",
                description: "ChatGPT、Claude、Geminiなど複数の生成AIを使いこなし、自分の仕事にAIを実装。生産性を飛躍的に向上させます。"
            }
        },
        {
            level: "STEP 3",
            title: "AI共創力",
            subtitle: "AIと共に新しい価値を創り出せるレベル",
            program: {
                title: "Will実現のためのキャリアデザイン",
                description: "あなたの「やりたい」をAIと共に形にする力を養成。AI時代のリーダーとして活躍できる人材を目指します。"
            }
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <p className="text-orange-700 font-bold text-sm tracking-[0.2em] mb-2">
                        GROWTH STEPS
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                        AIスキルの<br className="sm:hidden" />成長ステップ
                    </h2>
                    <p className="mt-4 text-lg sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        100日間のプログラムで、段階的にスキルアップ。<br className="sm:hidden" />
                        ゼロからAIと共創できる人材へと成長します。
                    </p>
                </div>

                {/* Pyramid Diagram */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Illustration - Hidden on small mobile */}
                    <div className="hidden sm:flex lg:w-1/3 justify-center">
                        <div className="relative">
                            <Image
                                src="/images/skill-pyramid-illustration.png"
                                alt="スキルアップ"
                                width={280}
                                height={320}
                                className="object-contain opacity-90"
                            />
                        </div>
                    </div>

                    {/* Right: Steps */}
                    <div className="lg:w-2/3 w-full">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="hidden lg:block absolute left-0 top-4 bottom-4 w-[1px] bg-orange-700/30" />

                            {/* Levels */}
                            <div className="space-y-6 md:space-y-8">
                                {levels.map((item, index) => (
                                    <div
                                        key={item.level}
                                        className={`relative pl-0 lg:pl-10 ${index === 0 ? 'sm:ml-10' : index === 1 ? 'sm:ml-5' : 'ml-0'}`}
                                    >
                                        {/* Connection Dot */}
                                        <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-orange-700 shadow-sm z-10" />

                                        <div className="bg-white border-l-[6px] border-orange-700 rounded-lg md:rounded-xl p-5 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 relative overflow-hidden group">
                                            {/* Typographic step number */}
                                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[80px] md:text-[110px] font-serif font-extralight text-orange-200/30 leading-none select-none pointer-events-none tracking-[0.15em] transition-all duration-700 group-hover:text-orange-200/50">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>

                                            <div className="relative z-10">
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                                    {/* Left: Level Info */}
                                                    <div className="md:w-1/3">
                                                        <span className="text-orange-700 font-bold text-xs tracking-[0.2em]">{item.level}</span>
                                                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">{item.title}</h3>
                                                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">{item.subtitle}</p>
                                                    </div>

                                                    {/* Arrow */}
                                                    <div className="hidden md:flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-slate-200 group-hover:text-orange-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </div>

                                                    {/* Right: Program Info */}
                                                    <div className="md:w-1/2 border-l border-slate-100 pl-4 md:pl-6 mt-4 md:mt-0">
                                                        <h4 className="font-bold text-lg text-slate-800 tracking-tight">{item.program.title}</h4>
                                                        <p className="text-slate-600 text-sm mt-2 leading-relaxed">{item.program.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillLevelSection;
