"use client";

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
        <section className="py-12 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-orange-500 font-bold text-sm tracking-wider mb-2">
                        TARGET
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                        <span className="hidden sm:inline">特にオススメしている対象者</span>
                        <span className="sm:hidden">特にオススメの<br />対象者</span>
                    </h2>
                    <p className="mt-4 text-lg sm:text-lg text-slate-600">
                        こんな想いを持つ方に、<br className="sm:hidden" />最適なプログラムです
                    </p>
                </div>

                {/* Target Audience Items - カードなし、罫線区切り */}
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-0">
                        {targetAudience.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-4 md:gap-6 py-5 transition-all duration-300 ${index < targetAudience.length - 1 && !item.isImportant ? "border-b border-slate-200" : ""
                                    } ${item.isImportant
                                        ? "bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl -mx-4 px-4 mt-4 border border-orange-200"
                                        : ""
                                    }`}
                            >
                                {/* Checkmark Icon */}
                                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${item.isImportant
                                    ? "bg-gradient-to-br from-orange-500 to-amber-500 shadow-orange-300/50"
                                    : "bg-gradient-to-br from-orange-400 to-orange-500 shadow-orange-200/50"
                                    }`}>
                                    <svg
                                        className="w-5 h-5 md:w-6 md:h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>

                                {/* Text */}
                                <p className={`text-base sm:text-base md:text-lg lg:text-xl leading-relaxed ${item.isImportant
                                    ? "text-slate-800 font-bold"
                                    : "text-slate-700 font-medium"
                                    }`}>
                                    {item.text}
                                    {item.isImportant && (
                                        <span className="inline-flex items-center ml-2 sm:ml-3 px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs sm:text-sm font-bold rounded-full shadow-md">
                                            特に重要
                                        </span>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA hint */}
                <div className="mt-10 text-center">
                    <p className="text-slate-500 text-sm md:text-base">
                        当てはまる方は、ぜひ
                        <span className="text-orange-500 font-bold">無料説明会</span>
                        へお越しください
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TargetAudienceSection;
