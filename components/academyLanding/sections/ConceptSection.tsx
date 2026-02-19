import Link from "next/link";
import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const ConceptSection = () => {
    const pillars = [
        {
            id: "01",
            label: "PILLAR 01",
            title: "生成AI活用力",
            description: "生成AIを単なる道具としてではなく、思考のパートナーとして使いこなす。マーケティング視点を掛け合わせ、実務を劇的に効率化・高度化する術を学びます。",
            elements: ["プロンプトエンジニアリング", "AIマーケティング", "実務自動化"],
            illustration: "/images/mindset-illustration.png"
        },
        {
            id: "02",
            label: "PILLAR 02",
            title: "自己理解・キャリアデザイン",
            description: "AIに代替されない「あなただけの価値」を再定義。自分の強みと情熱を言語化し、変化の激しい時代でも揺るがないキャリアの羅針盤を創り上げます。",
            elements: ["強みの言語化", "価値観の再構築", "ビジョン設計"],
            illustration: "/images/career-design-illustration.png"
        },
        {
            id: "03",
            label: "PILLAR 03",
            title: "共創コミュニティ",
            description: "一人の学びは限界がある。同じ志を持つ仲間と対話し、フィードバックし合う環境。多様な視点が混ざり合うことで、一人では到達できない解へと辿り着きます。",
            elements: ["ピアラーニング", "プロフェッショナルとの対話", "共創ネットワーク"],
            illustration: "/images/community-illustration.png"
        }
    ];

    return (
        <section
            className="py-24 lg:py-32"
            style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
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
                    <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-end">
                        <p 
                            className="text-lg leading-relaxed max-w-2xl"
                            style={{ color: ACADEMY_COLORS.textBody }}
                        >
                            AIリブートアカデミーは、技術の習得以上に「自分自身のOS」を書き換えることを重視します。<br className="hidden lg:block" />
                            道具に使われるのではなく、道具を使いこなし、新しい価値を創造する人へ。
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

                {/* Pillars with List Structure */}
                <ol 
                    className="space-y-0 border-t"
                    style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                    {pillars.map((pillar) => (
                        <li
                            key={pillar.id}
                            className="group grid lg:grid-cols-12 gap-8 py-12 border-b hover:bg-stone-50/50 transition-colors"
                            style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                        >
                            <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start gap-4">
                                <div className="p-2 bg-white rounded-md shadow-sm flex-shrink-0">
                                    <Image
                                        src={pillar.illustration}
                                        alt={pillar.title}
                                        width={80}
                                        height={80}
                                        className="object-contain opacity-85"
                                    />
                                </div>
                                <span
                                    className="text-xs font-bold tracking-widest"
                                    style={{ 
                                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                        color: ACADEMY_COLORS.textMuted
                                    }}
                                >
                                    {pillar.label}
                                </span>
                            </div>
                            <div className="lg:col-span-4">
                                <h3 
                                    className="text-xl lg:text-2xl font-bold mb-4"
                                    style={{ color: ACADEMY_COLORS.textStrong }}
                                >
                                    {pillar.title}
                                </h3>
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
                            <div className="lg:col-span-5">
                                <p 
                                    className="leading-loose"
                                    style={{ color: ACADEMY_COLORS.textBody }}
                                >
                                    {pillar.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default ConceptSection;
