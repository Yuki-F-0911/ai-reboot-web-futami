import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const PricingSection = () => {
    return (
        <section 
            id="pricing" 
            className="py-24 lg:py-32 border-y border-stone-200"
            style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                {/* Section Header */}
                <div className="mb-16 lg:mb-20">
                    <span 
                        className="inline-block text-[10px] tracking-[0.2em] font-bold uppercase mb-4"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                            color: ACADEMY_COLORS.accentMain 
                        }}
                    >
                        Pricing
                    </span>
                    <h2 
                        className="text-3xl lg:text-4xl font-bold leading-tight mb-6"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.serif,
                            color: ACADEMY_COLORS.textStrong
                        }}
                    >
                        プログラム受講費用
                    </h2>
                    <p 
                        className="max-w-xl leading-loose"
                        style={{ color: ACADEMY_COLORS.textBody }}
                    >
                        経済産業省のリスキリング補助金を活用することで、<br className="hidden lg:block" />
                        受講費用の最大70%が国から支給されます。
                    </p>
                </div>

                {/* Pricing Table-like Layout */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-px border rounded-sm overflow-hidden"
                    style={{ 
                        backgroundColor: ACADEMY_COLORS.lineSoft,
                        borderColor: ACADEMY_COLORS.lineSoft
                    }}
                >
                    {/* General Plan */}
                    <div 
                        className="p-10 lg:p-12"
                        style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}
                    >
                        <div className="mb-12">
                            <h3 
                                className="text-xl lg:text-2xl font-bold mb-2"
                                style={{ 
                                    fontFamily: ACADEMY_TYPOGRAPHY.serif,
                                    color: ACADEMY_COLORS.textStrong
                                }}
                            >
                                一般受講料
                            </h3>
                            <p 
                                className="text-xs font-bold tracking-widest uppercase"
                                style={{ color: ACADEMY_COLORS.textMuted }}
                            >
                                Standard Plan
                            </p>
                        </div>

                        <div className="mb-12">
                            <div className="flex items-baseline gap-1">
                                <span 
                                    className="text-4xl lg:text-5xl font-bold"
                                    style={{ 
                                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                        color: ACADEMY_COLORS.textStrong
                                    }}
                                >
                                    330,000
                                </span>
                                <span 
                                    className="text-sm font-bold"
                                    style={{ color: ACADEMY_COLORS.textStrong }}
                                >
                                    円
                                </span>
                                <span 
                                    className="text-[10px] ml-2"
                                    style={{ color: ACADEMY_COLORS.textMuted }}
                                >
                                    (税込)
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "100日間の実践型オンラインプログラム",
                                "2日間のキックオフ・キャンプ（宿泊研修）",
                                "専属メンターによる学習伴走サポート",
                                "キャリアコンサルティング（計3回）",
                                "限定コミュニティへの参加権"
                            ].map(feature => (
                                <li key={feature} className="flex gap-4">
                                    <span 
                                        className="font-bold"
                                        style={{ color: ACADEMY_COLORS.lineSoft }}
                                    >
                                        ―
                                    </span>
                                    <span 
                                        className="text-sm leading-loose"
                                        style={{ color: ACADEMY_COLORS.textBody }}
                                    >
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subsidy Plan */}
                    <div 
                        className="p-10 lg:p-12 relative"
                        style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
                    >
                        <div className="mb-12">
                            <h3 
                                className="text-xl lg:text-2xl font-bold mb-2"
                                style={{ 
                                    fontFamily: ACADEMY_TYPOGRAPHY.serif,
                                    color: ACADEMY_COLORS.textStrong
                                }}
                            >
                                補助金活用時
                            </h3>
                            <p 
                                className="text-xs font-bold tracking-widest uppercase"
                                style={{ color: ACADEMY_COLORS.accentDeep }}
                            >
                                Max 70% Subsidized
                            </p>
                        </div>

                        <div className="mb-12">
                            <div className="flex items-baseline gap-1">
                                <span 
                                    className="text-4xl lg:text-5xl font-bold"
                                    style={{ 
                                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                        color: ACADEMY_COLORS.accentMain
                                    }}
                                >
                                    120,000
                                </span>
                                <span 
                                    className="text-sm font-bold"
                                    style={{ color: ACADEMY_COLORS.accentMain }}
                                >
                                    円〜
                                </span>
                                <span 
                                    className="text-[10px] ml-2"
                                    style={{ color: ACADEMY_COLORS.textMuted }}
                                >
                                    (実質負担額)
                                </span>
                            </div>
                            <p 
                                className="mt-4 text-[10px] font-medium leading-loose"
                                style={{ color: ACADEMY_COLORS.textMuted }}
                            >
                                ※受講修了時に50%（15万円）、<br className="hidden lg:block" />
                                転職成功後に20%（6万円）が給給されます。
                            </p>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "経済産業省リスキリング支援事業対象",
                                "全てのプログラム内容を同一に受講可能",
                                "キャリア形成と転職活動を同時に支援",
                                "転職成功でさらに給付額がアップ",
                                "雇用形態等の条件により適用外となる場合があります"
                            ].map(feature => (
                                <li key={feature} className="flex gap-4">
                                    <span 
                                        className="font-bold"
                                        style={{ color: ACADEMY_COLORS.accentSoft }}
                                    >
                                        ―
                                    </span>
                                    <span 
                                        className="text-sm font-medium leading-loose"
                                        style={{ color: ACADEMY_COLORS.textBody }}
                                    >
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Additional Notes */}
                <div className="mt-12 flex flex-col items-center">
                    <p 
                        className="text-[10px] leading-loose text-center max-w-2xl"
                        style={{ color: ACADEMY_COLORS.textMuted }}
                    >
                        ※ 表示価格は消費税10%を含みます。補助金制度の詳細は、お住まいの地域や現在の雇用形態により異なる場合があります。<br />
                        ご自身が対象になるかどうかは、個別オンライン説明会にて詳しくお伝えいたします。
                    </p>
                    <div 
                        className="mt-8 h-[1px] w-24" 
                        style={{ backgroundColor: ACADEMY_COLORS.lineSoft }}
                    />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
