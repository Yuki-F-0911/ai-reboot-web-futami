import Link from "next/link";
import Image from "next/image";

const ConceptSection = () => {
    const pillars = [
        {
            id: "01",
            title: "生成AI活用",
            description: "AI時代に仕事のやり方をアップデートするスキル",
            icon: "🤖",
            illustration: "/images/mindset-illustration.png"
        },
        {
            id: "02",
            title: "マーケティング",
            description: "価値を届け、人を動かすための戦略的思考力",
            icon: "📈",
            illustration: "/images/skills-illustration.png"
        },
        {
            id: "03",
            title: "コミュニケーション",
            description: "AIでは代替できない、人を巻き込み動かす力",
            icon: "💬",
            illustration: "/images/community-illustration.png"
        },
        {
            id: "04",
            title: "キャリアデザイン",
            description: "自分の未来を描き直し、新しいステージへ踏み出す設計力",
            icon: "🎯",
            illustration: "/images/career-design-illustration.png"
        }
    ];

    return (
        <section className="py-12 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
                    <p className="text-orange-500 font-bold text-sm tracking-wider">
                        CONCEPT
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                        生成AIを学ぶ場所ではない。
                        <br />
                        人生をリブートする場所。
                    </h2>
                    <p className="text-base sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        AIリブートアカデミーは、生成AIで激変する時代に適応し、<br />
                        飛躍する自分になるために、人生をリブートする場所です。
                    </p>
                    <Link
                        href="/academy/message"
                        className="inline-flex items-center gap-2 mt-6 text-orange-500 hover:text-orange-600 font-semibold transition-colors group"
                    >
                        <span>私たちのメッセージを読む</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Four Pillars */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Background Decoration */}
                            <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-orange-100 to-transparent rounded-full opacity-60" />
                            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-gradient-to-tr from-orange-50 to-transparent rounded-full opacity-40" />

                            <div className="relative z-10">
                                {/* Illustration */}
                                <div className="w-full h-20 md:h-36 mb-3 md:mb-6 flex items-center justify-center">
                                    <Image
                                        src={pillar.illustration}
                                        alt={pillar.title}
                                        width={160}
                                        height={140}
                                        className="object-contain group-hover:scale-110 transition-transform duration-300 mix-blend-multiply w-16 h-16 md:w-auto md:h-auto"
                                    />
                                </div>

                                {/* Number Badge */}
                                <div className="inline-flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold text-xs md:text-sm mb-2 md:mb-4 shadow-lg shadow-orange-200">
                                    {pillar.id}
                                </div>

                                <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-slate-900 mb-1 md:mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-xs md:text-base text-slate-600 leading-relaxed hidden md:block">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Section - Hidden temporarily
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        AIを学ぶだけでは変わらない。人生をリブートする。
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="bg-white rounded-2xl p-6 border border-slate-100">
                            <h4 className="font-bold text-red-500 mb-6 flex items-center gap-2 text-lg">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                これまでの講座
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="text-red-400 mt-0.5 font-bold">✕</span>
                                    <span>AIツールの使い方を学んでも、結局使いこなせない</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="text-red-400 mt-0.5 font-bold">✕</span>
                                    <span>AIビジネスで稼げるようになるわけではない</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="text-red-400 mt-0.5 font-bold">✕</span>
                                    <span>AIを学べば下剋上できると思っていたが…</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border-2 border-orange-200">
                            <h4 className="font-bold text-orange-500 mb-6 flex items-center gap-2 text-lg">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                AIリブートアカデミー
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-700 font-medium">
                                    <span className="text-orange-500 mt-0.5 font-bold">✓</span>
                                    <span>生成AI活用力で、既存の事業や仕事を<strong>劇的に変える</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700 font-medium">
                                    <span className="text-orange-500 mt-0.5 font-bold">✓</span>
                                    <span>AI時代に変化・活躍する人材に<strong>いち早くなる</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700 font-medium">
                                    <span className="text-orange-500 mt-0.5 font-bold">✓</span>
                                    <span>日本の根幹を支える産業で<strong>キーパーソン</strong>になる</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </section>
    );
};

export default ConceptSection;
