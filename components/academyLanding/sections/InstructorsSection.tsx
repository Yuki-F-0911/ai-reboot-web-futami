import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

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
        <section 
            className="py-24 lg:py-32"
            style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                {/* Section Header */}
                <div className="mb-16 lg:mb-24">
                    <span 
                        className="inline-block text-[10px] tracking-[0.2em] font-bold text-orange-500 uppercase mb-4"
                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                    >
                        Mentors
                    </span>
                    <h2 
                        className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6"
                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
                    >
                        講師・メンター
                    </h2>
                    <p className="text-slate-600 max-w-2xl leading-relaxed">
                        第一線でAIと向き合い、自らも変化し続ける実践者たちが、<br className="hidden lg:block" />
                        あなたの100日間に伴走し、本質的な成長を支援します。
                    </p>
                </div>

                {/* Instructors List Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {instructors.map((instructor, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row gap-6 lg:gap-8 group"
                        >
                            {/* Portrait */}
                            <div className="relative w-full sm:w-40 lg:w-48 aspect-[3/4] shrink-0 bg-slate-100 overflow-hidden rounded-sm">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    fill
                                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <h3 
                                        className="text-xl lg:text-2xl font-bold text-slate-900 mb-1"
                                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
                                    >
                                        {instructor.name}
                                    </h3>
                                    <p 
                                        className="text-[10px] font-bold text-orange-600 tracking-widest uppercase"
                                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                                    >
                                        {instructor.nameEn}
                                    </p>
                                </div>
                                
                                <div className="mb-4 pb-4 border-b border-slate-200">
                                    <p className="text-xs font-bold text-slate-500 mb-1">
                                        {instructor.company}
                                    </p>
                                    <p className="text-sm font-medium text-slate-700 leading-snug">
                                        {instructor.role}
                                    </p>
                                </div>

                                <p className="text-sm text-slate-600 leading-relaxed">
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
