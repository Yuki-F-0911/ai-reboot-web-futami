"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const SubsidyBanner = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section 
            className="py-12 border-y border-slate-200"
            style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Content - System Summary */}
                    <div className="flex-1 space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                            <div className="bg-white border border-slate-200 rounded-sm px-4 py-2 inline-block shadow-sm">
                                <Image
                                    src="/images/keisan-reskiling-logo.webp"
                                    alt="経済産業省リスキリング補助金"
                                    width={160}
                                    height={50}
                                    className="h-8 md:h-10 w-auto object-contain grayscale brightness-90"
                                />
                            </div>
                            <span 
                                className="text-[10px] font-bold text-slate-400 tracking-widest uppercase"
                                style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                            >
                                Official Subsidy Program
                            </span>
                        </div>
                        
                        <h2 
                            className="text-2xl lg:text-4xl font-bold text-slate-900 leading-tight"
                            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
                        >
                            リスキリング補助金対象講座
                        </h2>
                        
                        <p className="text-slate-600 leading-relaxed max-w-2xl">
                            本講座は経済産業省「リスキリングを通じたキャリアアップ支援事業」に採択されています。<br className="hidden lg:block" />
                            一定の要件を満たすことで、受講費用の最大70%（21万円）が国から補助されます。
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-2">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 border-b border-orange-600 pb-1 transition-opacity hover:opacity-70"
                            >
                                制度の詳細と支給要件を確認
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <a
                                href="https://careerup.reskilling.go.jp/worker/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 text-xs flex items-center gap-1 hover:text-slate-600 transition-colors"
                            >
                                事務局公式サイト
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Price Highlight */}
                    <div className="w-full lg:w-80 bg-slate-50 border border-slate-200 rounded-sm p-8 lg:p-10">
                        <div className="flex flex-col items-center text-center">
                            <span 
                                className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-6"
                                style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                            >
                                Estimated Cost
                            </span>
                            
                            <div className="mb-6">
                                <p className="text-xs text-slate-400 line-through mb-1">通常価格 330,000円</p>
                                <p className="text-sm font-medium text-slate-600">実質負担額</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span
                                        className="text-4xl lg:text-5xl font-bold text-slate-900"
                                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                                    >
                                        120,000
                                    </span>
                                    <span className="text-sm font-bold text-slate-900">円〜</span>
                                </div>
                            </div>

                            <div className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4">
                                Max 70% Subsidized
                            </div>
                            
                            <p className="text-[10px] text-slate-400 leading-relaxed italic">
                                ※転職および1年間の継続就業が条件となります。<br />
                                詳細は個別面談にてご説明いたします。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expandable Detail Section */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="bg-[#fafafa] border-t border-slate-100">
                    <div className="container mx-auto px-6 lg:px-12 max-w-5xl py-16">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                            {/* Left Col: System Intro */}
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-6 flex items-center gap-3">
                                        <span className="w-1 h-4 bg-orange-500" />
                                        制度の概要
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                        「リスキリングを通じたキャリアアップ支援事業」は、経済産業省が実施する在職者のためのキャリア支援制度です。
                                        専門家によるキャリア相談、スキルの習得、そして転職支援までを一気通貫で受けることができます。
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { step: "01", title: "キャリア相談", body: "専門家とキャリアの棚卸し・目標設定" },
                                            { step: "02", title: "リスキリング", body: "AIリブートアカデミーでの実践的学習" },
                                            { step: "03", title: "転職支援・継続", body: "転職成功と1年間の継続就業" }
                                        ].map(item => (
                                            <div key={item.step} className="flex gap-4">
                                                <span className="text-[10px] font-bold text-slate-300 pt-1" style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}>{item.step}</span>
                                                <div>
                                                    <h5 className="text-sm font-bold text-slate-800">{item.title}</h5>
                                                    <p className="text-xs text-slate-500">{item.body}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-6 flex items-center gap-3">
                                        <span className="w-1 h-4 bg-orange-500" />
                                        こんな方におすすめ
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "AIを武器に、今の市場価値を劇的に高めたい方",
                                            "将来のキャリアに漠然とした不安がある方",
                                            "スキルアップと転職を同時に実現したい方"
                                        ].map(text => (
                                            <li key={text} className="flex gap-3 text-sm text-slate-600">
                                                <span className="text-orange-500 font-bold">・</span>
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Col: Calculation Table */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-6 flex items-center gap-3">
                                    <span className="w-1 h-4 bg-orange-500" />
                                    補助金の内訳
                                </h4>
                                <div className="border border-slate-200 bg-white overflow-hidden">
                                    <div className="grid grid-cols-12 border-b border-slate-100">
                                        <div className="col-span-4 bg-slate-50 p-4 flex items-center">
                                            <span className="text-xs font-bold text-slate-600">受講修了時</span>
                                        </div>
                                        <div className="col-span-8 p-4">
                                            <p className="text-sm font-bold text-slate-800">受講費用の <span className="text-orange-500 text-xl">1/2</span>（上限40万円）</p>
                                            <p className="text-[10px] text-slate-400">リスキリング講座の受講を終了した場合</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 border-b border-slate-100">
                                        <div className="col-span-4 bg-slate-50 p-4 flex items-center">
                                            <span className="text-xs font-bold text-slate-600">転職後1年継続</span>
                                        </div>
                                        <div className="col-span-8 p-4">
                                            <p className="text-sm font-bold text-slate-800">追加で <span className="text-amber-500 text-xl">1/5</span>（上限16万円）</p>
                                            <p className="text-[10px] text-slate-400">転職して1年間継続就業した場合</p>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-slate-50 text-center border-t border-slate-200">
                                        <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Total Support</p>
                                        <p className="text-xl font-bold text-orange-600">
                                            受講費用の最大<span className="text-3xl">70</span>%が補助！
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            ※当講座の場合：330,000円 → 実質約120,000円〜
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <Link
                                        href="/academy/subsidy-guide"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-900 pb-1 hover:opacity-70 transition-opacity"
                                    >
                                        補助金ガイドを詳しく見る
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubsidyBanner;
