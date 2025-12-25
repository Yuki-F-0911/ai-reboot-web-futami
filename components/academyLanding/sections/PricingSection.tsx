"use client";

const PricingSection = () => {
    return (
        <section id="pricing" className="py-12 md:py-28 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <p className="text-orange-500 font-bold text-sm tracking-wider mb-2">
                        PRICING
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                        費用詳細
                    </h2>
                    <p className="mt-4 text-lg sm:text-lg text-slate-600">
                        経済産業省リスキリング補助金で<br className="sm:hidden" />最大70%OFF
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Regular Price Card */}
                    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                一般受講料
                            </h3>
                            <p className="text-slate-500 text-sm">通常価格</p>
                        </div>

                        {/* Price */}
                        <div className="text-center mb-8">
                            <div className="flex items-end justify-center gap-1">
                                <span className="text-4xl sm:text-4xl md:text-5xl font-bold text-orange-500">
                                    330,000
                                </span>
                                <span className="text-xl sm:text-xl font-bold text-slate-700 mb-2">円</span>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">100日間の実践プログラム</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">2日間の宿泊型集合研修</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">メンター伴走サポート</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">キャリアコンサルティング3回</span>
                            </li>
                        </ul>
                    </div>

                    {/* Subsidy Price Card */}
                    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-orange-400 shadow-lg hover:shadow-2xl transition-all duration-300 relative">
                        {/* Recommended Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                                おすすめ
                            </span>
                        </div>

                        <div className="text-center mb-8 pt-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                補助金活用時
                            </h3>
                            <p className="text-slate-500 text-sm">最大70%補助</p>
                        </div>

                        {/* Price */}
                        <div className="text-center mb-8">
                            <p className="text-slate-400 line-through text-lg mb-1">330,000円</p>
                            <div className="flex items-end justify-center gap-1">
                                <span className="text-4xl sm:text-4xl md:text-5xl font-bold text-orange-500">
                                    180,000
                                </span>
                                <span className="text-xl sm:text-xl font-bold text-slate-700 mb-2">円〜</span>
                            </div>
                            <p className="text-orange-500 font-bold text-lg mt-2">
                                150,000円OFF
                            </p>
                            <p className="text-slate-500 text-sm sm:text-sm mt-3 bg-slate-50 inline-block px-4 sm:px-4 py-2 rounded-full">
                                転職成功でさらに<br className="sm:hidden" /><span className="font-bold text-orange-500">実質120,000円</span>に
                            </p>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">経済産業省リスキリング補助金対象</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">税抜価格の50%補助</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">全てのプログラム内容を含む</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">転職成功でさらに20%補助</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Additional Notes */}
                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm">
                        ※ 料金は税込価格です。補助金の適用には条件がございます。詳しくは無料説明会にてご案内いたします。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

