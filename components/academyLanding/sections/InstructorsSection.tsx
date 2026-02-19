"use client";

import Image from "next/image";

const instructors = [
    {
        name: "成瀬 拓也",
        nameEn: "Takuya Naruse",
        role: "AIリブートアカデミー主宰 / ビジネスプロデューサー",
        company: "株式会社ウィルフォワード 代表取締役",
        profile: "経営者として複数の事業を創出しながら、経済産業省認定リスキリング講座「AIリブートアカデミー」を主宰。ホラクラシー経営やティール組織など次世代の組織開発を実践し、社会全体のウェルビーイングを高めるキャリア支援を牽引。",
        image: "/images/naruse.jpg",
    },
    {
        name: "坂本 拓磨",
        nameEn: "Takuma Sakamoto",
        role: "AIプロダクト/クリエイティブリード / AIスペシャリスト",
        company: "株式会社ウィルフォワード",
        profile: "AIアーキテクトとしてRAGやエージェント設計を実務導入し、UI/UXからブランド開発まで統合的に手がける生成AIのプロフェッショナル。受講生のプロジェクトに深く伴走し、本質的なAI活用力を育てる。",
        image: "/images/sakamoto.jpg",
    },
    {
        name: "青木 玲仁",
        nameEn: "Ryoto Aoki",
        role: "キャリア支援ディレクター / AIキャリアデザイナー",
        company: "株式会社ウィルフォワード",
        profile: "10年以上にわたり採用・教育・人材育成を実務で担い、幅広い組織のキャリア開発と育成設計を支援してきたキャリア支援の専門家。受講者が内発的動機を起点にキャリアを再構築できるよう支援。",
        image: "/images/aoki.jpg",
    },
    {
        name: "久米田 克",
        nameEn: "Masaru Kumeta",
        role: "キャリアリブート伴走コーチ / 事業責任者",
        company: "AIリブートアカデミー",
        profile: "大手企業での経験を経て、自らもキャリアの再構築に挑む実践者。国家資格キャリアコンサルタントとしての対話力とAI運営の知見を活かし、自己理解と行動変容を促進。受講生の挑戦を支える伴走者。",
        image: "/images/kumeda.jpg",
    },
];

const InstructorsSection = () => {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <p className="text-orange-500 font-bold text-sm tracking-wider mb-2">
                        MENTORS
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                        講師・メンター
                    </h2>
                    <p className="mt-4 text-lg sm:text-lg text-slate-600">
                        現役の実践者集団が<br className="sm:hidden" />あなたの成長を全力でサポート
                    </p>
                </div>

                {/* Instructors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {instructors.map((instructor, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row group hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Column */}
                            <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto shrink-0">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Mobile Name Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent md:hidden" />
                                <div className="absolute bottom-4 left-4 text-white md:hidden">
                                    <p className="font-bold text-lg">{instructor.name}</p>
                                    <p className="text-xs opacity-80">{instructor.nameEn}</p>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="p-4 md:p-8 flex flex-col justify-center">
                                {/* Desktop Name */}
                                <div className="hidden md:block mb-4">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {instructor.name}
                                    </h3>
                                    <p className="text-sm font-bold text-orange-500 tracking-wide">
                                        {instructor.nameEn}
                                    </p>
                                </div>

                                {/* Role & Company */}
                                <div className="mb-4">
                                    <p className="text-xs font-bold text-slate-500 bg-white inline-block px-3 py-1 rounded-full border border-slate-200 mb-2">
                                        {instructor.company}
                                    </p>
                                    <p className="text-sm font-bold text-slate-700 leading-snug">
                                        {instructor.role}
                                    </p>
                                </div>

                                {/* Profile */}
                                <p className="text-sm sm:text-sm text-slate-600 leading-relaxed">
                                    {instructor.profile}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstructorsSection;
