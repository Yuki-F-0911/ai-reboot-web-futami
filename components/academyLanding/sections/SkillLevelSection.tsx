"use client";

import Image from "next/image";

const SkillLevelSection = () => {
    const levels = [
        {
            level: "STEP 1",
            title: "AI基礎力",
            subtitle: "AIを自分事と捉え、変革に向けて行動できるレベル",
            color: "from-orange-400 to-orange-500",
            program: {
                title: "AI時代のマインドセット形成",
                description: "生成AIの基礎知識を習得し、AIを恐れず活用する姿勢を身につけます。100日間の挑戦のスタートラインです。"
            }
        },
        {
            level: "STEP 2",
            title: "AI活用力",
            subtitle: "AIを活用して業務効率化・価値創出ができるレベル",
            color: "from-orange-400 to-orange-500",
            program: {
                title: "実践的なAI共創スキル",
                description: "ChatGPT、Claude、Geminiなど複数の生成AIを使いこなし、自分の仕事にAIを実装。生産性を飛躍的に向上させます。"
            }
        },
        {
            level: "STEP 3",
            title: "AI共創力",
            subtitle: "AIと共に新しい価値を創り出せるレベル",
            color: "from-orange-500 to-orange-600",
            program: {
                title: "Will実現のためのキャリアデザイン",
                description: "あなたの「やりたい」をAIと共に形にする力を養成。AI時代のリーダーとして活躍できる人材を目指します。"
            }
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-bold text-sm tracking-wider mb-2">
                        GROWTH STEPS
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                        AIスキルの<br className="sm:hidden" />成長ステップ
                    </h2>
                    <p className="mt-4 text-lg sm:text-lg text-slate-600 max-w-2xl mx-auto">
                        100日間のプログラムで、段階的にスキルアップ。<br className="sm:hidden" />
                        ゼロからAIと共創できる人材へと成長します。
                    </p>
                </div>

                {/* Pyramid Diagram */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Illustration */}
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="relative">
                            <Image
                                src="/images/skill-pyramid-illustration.png"
                                alt="スキルアップ"
                                width={280}
                                height={320}
                                className="object-contain"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -left-4 top-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                            <div className="absolute -right-2 top-1/2 w-2 h-2 bg-orange-300 rounded-full animate-pulse delay-300" />
                            <div className="absolute left-1/4 -bottom-2 w-4 h-4 bg-orange-200 rounded-full animate-pulse delay-500" />
                        </div>
                    </div>

                    {/* Right: Pyramid */}
                    <div className="lg:w-2/3 w-full">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 via-orange-500 to-orange-600 rounded-full" />

                            {/* Levels */}
                            <div className="space-y-6">
                                {levels.map((item, index) => (
                                    <div
                                        key={item.level}
                                        className={`relative pl-0 lg:pl-8 ${index === 0 ? 'sm:ml-10' : index === 1 ? 'sm:ml-5' : 'ml-0'}`}
                                    >
                                        {/* Connection Dot */}
                                        <div className={`hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg`} />

                                        <div className={`bg-gradient-to-r ${item.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                                            {/* Background Pattern */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16" />

                                            <div className="relative z-10">
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                    {/* Left: Level Info */}
                                                    <div className="md:w-1/3">
                                                        <span className="text-sm sm:text-sm font-bold">{item.level}</span>
                                                        <h3 className="text-xl sm:text-xl md:text-2xl font-bold mt-1">{item.title}</h3>
                                                        <p className="text-white/90 text-sm sm:text-sm mt-2">{item.subtitle}</p>
                                                    </div>

                                                    {/* Arrow */}
                                                    <div className="hidden md:flex items-center justify-center">
                                                        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </div>

                                                    {/* Right: Program Info - 入れ子解消、罫線スタイル */}
                                                    <div className="md:w-1/2 border-l-4 border-white/40 pl-4">
                                                        <h4 className="font-bold text-lg sm:text-lg">{item.program.title}</h4>
                                                        <p className="text-white/95 text-sm sm:text-sm mt-2 leading-relaxed">{item.program.description}</p>
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
