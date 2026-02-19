import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const targetAudience = [
    {
        text: "生成AI活用スキルを活かして、キャリアアップをしたい人",
        isImportant: false,
    },
    {
        text: "生成AIによる社会の変化の中で、自分も何かをしなくてはいけないと感じている人",
        isImportant: false,
    },
    {
        text: "今の自分の現状に不満やモヤモヤを感じている人",
        isImportant: false,
    },
    {
        text: "これからの働き方・キャリアを\"AI時代の前提\"で考えたい人",
        isImportant: false,
    },
    {
        text: "AIスキルを身に付けたいし、それ以上に自分の価値を高めたい人",
        isImportant: true,
    },
];

const TargetAudienceSection = () => {
    return (
        <section 
            className="py-24 lg:py-32"
            style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                {/* Section Header */}
                <div className="mb-16 lg:mb-20">
                    <span 
                        className="inline-block text-[10px] tracking-[0.2em] font-bold uppercase mb-4"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                            color: ACADEMY_COLORS.accentMain
                        }}
                    >
                        Target
                    </span>
                    <h2
                        className="text-3xl lg:text-4xl font-bold leading-tight mb-6"
                        style={{
                            fontFamily: ACADEMY_TYPOGRAPHY.serif,
                            color: ACADEMY_COLORS.textStrong
                        }}
                    >
                        <span className="hidden lg:inline">特にオススメしている対象者</span>
                        <span className="lg:hidden">特にオススメの対象者</span>
                    </h2>
                    <p
                        className="max-w-xl leading-loose"
                        style={{ color: ACADEMY_COLORS.textBody }}
                    >
                        こんな想いを持つ方に、最適なプログラムです
                    </p>
                </div>

                {/* Target Audience List */}
                <div 
                    className="max-w-4xl border-t"
                    style={{ borderColor: ACADEMY_COLORS.lineStrong }}
                >
                    {targetAudience.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-b transition-colors hover:bg-stone-200/30"
                            style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                        >
                            <div className="flex-shrink-0 flex items-center">
                                <span 
                                    className="text-sm font-bold tracking-widest"
                                    style={{ 
                                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                        color: ACADEMY_COLORS.accentMain
                                    }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <p 
                                    className={`text-base lg:text-lg leading-loose ${item.isImportant ? "font-bold" : "font-medium"}`}
                                    style={{ color: item.isImportant ? ACADEMY_COLORS.textStrong : ACADEMY_COLORS.textBody }}
                                >
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA hint */}
                <div className="mt-16 flex flex-col items-start gap-4">
                    <p
                        className="text-sm font-medium leading-loose"
                        style={{ color: ACADEMY_COLORS.textMuted }}
                    >
                        当てはまる方は、ぜひ無料説明会へお越しください
                    </p>
                    <div 
                        className="h-[1px] w-24" 
                        style={{ backgroundColor: ACADEMY_COLORS.lineSoft }}
                    />
                </div>
            </div>
        </section>
    );
};

export default TargetAudienceSection;
