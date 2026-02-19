import Link from "next/link";
import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const ConceptSection = () => {
    const pillars = [
        {
            id: "01",
            label: "PILLAR 01",
            title: "生成AI活用",
            description: "AI時代に仕事のやり方をアップデートするスキル",
            elements: ["プロンプトエンジニアリング", "AIマーケティング", "実務自動化"],
            illustration: "/images/mindset-illustration.png"
        },
        {
            id: "02",
            label: "PILLAR 02",
            title: "マーケティング",
            description: "価値を届け、人を動かすための戦略的思考力",
            elements: ["マーケティング戦略", "コピーライティング", "データ分析"],
            illustration: "/images/skills-illustration.png"
        },
        {
            id: "03",
            label: "PILLAR 03",
            title: "コミュニケーション",
            description: "AIでは代替できない、人を巻き込み動かす力",
            elements: ["プレゼンテーション", "チームビルディング", "対話力"],
            illustration: "/images/community-illustration.png"
        },
        {
            id: "04",
            label: "PILLAR 04",
            title: "キャリアデザイン",
            description: "自分の未来を描き直し、新しいステージへ踏み出す設計力",
            elements: ["強みの言語化", "価値観の再構築", "ビジョン設計"],
            illustration: "/images/career-design-illustration.png"
        }
    ];

    return (
        <section
            className="py-24 lg:py-32"
            style={{ backgroundColor: '#ffffff' }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                {/* Section Header */}
                <div className="max-w-4xl mb-20 lg:mb-24">
                    <span
                        className="inline-block text-[10px] tracking-[0.2em] font-bold uppercase mb-4"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                            color: ACADEMY_COLORS.accentMain
                        }}
                    >
                        Concept
                    </span>
                    <h2
                        className="text-3xl lg:text-5xl font-bold leading-tight mb-8"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.serif,
                            color: ACADEMY_COLORS.textStrong
                        }}
                    >
                        生成AIを学ぶ場所ではない。<br />
                        人生をリブートする場所。
                    </h2>
                    <div className="flex flex-col gap-5 items-start">
                        <p
                            className="text-lg leading-relaxed max-w-2xl"
                            style={{ color: ACADEMY_COLORS.textBody }}
                        >
                            AIリブートアカデミーは、生成AIで激変する時代に適応し、<br />
                            飛躍する自分になるために、人生をリブートする場所です。
                        </p>
                        <Link
                            href="/academy/message"
                            className="inline-flex items-center gap-2 text-sm font-bold border-b pb-1 transition-opacity hover:opacity-70 group"
                            style={{
                                color: ACADEMY_COLORS.textStrong,
                                borderColor: ACADEMY_COLORS.textStrong
                            }}
                        >
                            <span>私たちのメッセージを読む</span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Pillars with 2-column Layout */}
                <ol
                    className="space-y-0 border-t"
                    style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                    {pillars.map((pillar) => (
                        <li
                            key={pillar.id}
                            className="group grid lg:grid-cols-2 gap-6 lg:gap-12 py-12 border-b border-l-4 pl-4 lg:pl-6 hover:bg-stone-50/50 transition-colors"
                            style={{
                                borderColor: ACADEMY_COLORS.lineSoft,
                                borderLeftColor: ACADEMY_COLORS.accentMain
                            }}
                        >
                            {/* Left: Illustration */}
                            <div className="flex justify-center lg:justify-start items-center">
                                <Image
                                    src={pillar.illustration}
                                    alt={pillar.title}
                                    width={220}
                                    height={220}
                                    className="object-contain"
                                />
                            </div>

                            {/* Right: Content */}
                            <div className="flex flex-col justify-center gap-3">
                                {/* PILLAR label — badge style */}
                                <span
                                    className="inline-flex items-center self-start text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm"
                                    style={{
                                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                        backgroundColor: ACADEMY_COLORS.accentSoft,
                                        color: ACADEMY_COLORS.accentDeep
                                    }}
                                >
                                    {pillar.label}
                                </span>
                                <h3
                                    className="text-xl lg:text-2xl font-bold"
                                    style={{ color: ACADEMY_COLORS.textStrong }}
                                >
                                    {pillar.title}
                                </h3>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: ACADEMY_COLORS.textBody }}
                                >
                                    {pillar.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {pillar.elements.map(el => (
                                        <span
                                            key={el}
                                            className="text-[10px] px-2 py-0.5 border rounded-sm"
                                            style={{
                                                backgroundColor: ACADEMY_COLORS.bgPanel,
                                                borderColor: ACADEMY_COLORS.lineSoft,
                                                color: ACADEMY_COLORS.textMuted
                                            }}
                                        >
                                            {el}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default ConceptSection;
