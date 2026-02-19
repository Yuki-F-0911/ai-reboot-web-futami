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
                        className="inline-block text-[10px] tracking-[0.2em] font-bold text-orange-500 uppercase mb-4"
                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                    >
                        Target
                    </span>
                    <h2 
                        className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6"
                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
                    >
                        こんな想いを持つ方に、<br />
                        最適なプログラムです
                    </h2>
                    <p className="text-slate-600 max-w-xl leading-relaxed">
                        技術的な習得だけでなく、自らのキャリアを主体的に切り拓きたい、<br className="hidden lg:block" />
                        そんな意志を持つ方々を募集しています。
                    </p>
                </div>

                {/* Target Audience List */}
                <div className="max-w-4xl border-t border-slate-300">
                    {targetAudience.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-b border-slate-300 transition-colors hover:bg-slate-200/50"
                        >
                            <div className="flex-shrink-0 flex items-center">
                                <span 
                                    className="text-sm font-bold text-slate-400 tracking-widest"
                                    style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <p className={`text-base lg:text-lg leading-relaxed ${item.isImportant ? "text-slate-900 font-bold" : "text-slate-700 font-medium"}`}>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA hint */}
                <div className="mt-16 flex flex-col items-start gap-4">
                    <p className="text-slate-500 text-sm font-medium">
                        ひとつでも当てはまる方は、まずはオンライン説明会へお越しください。
                    </p>
                    <div className="h-[1px] w-24 bg-slate-300" />
                </div>
            </div>
        </section>
    );
};

export default TargetAudienceSection;
