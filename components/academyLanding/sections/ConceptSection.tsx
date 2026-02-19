import Link from "next/link";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const ConceptSection = () => {
    const pillars = [
        {
            id: "01",
            label: "PILLAR 01",
            title: "生成AI活用力",
            description: "生成AIを単なる道具としてではなく、思考のパートナーとして使いこなす。マーケティング視点を掛け合わせ、実務を劇的に効率化・高度化する術を学びます。",
            elements: ["プロンプトエンジニアリング", "AIマーケティング", "実務自動化"]
        },
        {
            id: "02",
            label: "PILLAR 02",
            title: "自己理解・キャリアデザイン",
            description: "AIに代替されない「あなただけの価値」を再定義。自分の強みと情熱を言語化し、変化の激しい時代でも揺るがないキャリアの羅針盤を創り上げます。",
            elements: ["強みの言語化", "価値観の再構築", "ビジョン設計"]
        },
        {
            id: "03",
            label: "PILLAR 03",
            title: "共創コミュニティ",
            description: "一人の学びは限界がある。同じ志を持つ仲間と対話し、フィードバックし合う環境。多様な視点が混ざり合うことで、一人では到達できない解へと辿り着きます。",
            elements: ["ピアラーニング", "プロフェッショナルとの対話", "共創ネットワーク"]
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
                        className="inline-block text-[10px] tracking-[0.2em] font-bold text-orange-500 uppercase mb-4"
                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                    >
                        Concept
                    </span>
                    <h2 
                        className="text-3xl lg:text-5xl font-bold leading-tight text-slate-900 mb-8"
                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
                    >
                        生成AIを学ぶ場所ではない。<br />
                        人生をリブートする場所。
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-end">
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                            AIリブートアカデミーは、技術の習得以上に「自分自身のOS」を書き換えることを重視します。<br className="hidden lg:block" />
                            道具に使われるのではなく、道具を使いこなし、新しい価値を創造する人へ。
                        </p>
                        <Link
                            href="/academy/message"
                            className="inline-flex items-center gap-2 text-sm text-slate-900 font-bold border-b border-slate-900 pb-1 transition-opacity hover:opacity-70 group"
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
                <div className="space-y-0 border-t border-slate-200">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className="group grid lg:grid-cols-12 gap-8 py-12 border-b border-slate-200 hover:bg-slate-50/50 transition-colors"
                        >
                            <div className="lg:col-span-3">
                                <span 
                                    className="text-xs font-bold text-slate-400 tracking-widest"
                                    style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                                >
                                    {pillar.label}
                                </span>
                            </div>
                            <div className="lg:col-span-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
                                    {pillar.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {pillar.elements.map(el => (
                                        <span key={el} className="text-[10px] px-2 py-0.5 bg-white border border-slate-200 text-slate-500 rounded-sm">
                                            {el}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <p className="text-slate-600 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConceptSection;
