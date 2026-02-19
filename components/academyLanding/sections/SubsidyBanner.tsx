"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const SubsidyBanner = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section 
            className="py-12 border-y border-stone-200"
            style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Content - System Summary */}
                    <div className="flex-1 space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                            <div 
                                className="border rounded-sm px-4 py-2 inline-block shadow-sm"
                                style={{ 
                                    backgroundColor: ACADEMY_COLORS.bgPanel,
                                    borderColor: ACADEMY_COLORS.lineSoft 
                                }}
                            >
                                <Image
                                    src="/images/keisan-reskiling-logo.webp"
                                    alt="経済産業省リスキリング補助金"
                                    width={160}
                                    height={50}
                                    className="h-8 md:h-10 w-auto object-contain grayscale brightness-90"
                                />
                            </div>
                            <span 
                                className="text-[10px] font-bold tracking-widest uppercase"
                                style={{ 
                                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                    color: ACADEMY_COLORS.textMuted
                                }}
                            >
                                Official Subsidy Program
                            </span>
                        </div>
                        
                        <h2 
                            className="text-2xl lg:text-4xl font-bold leading-tight"
                            style={{ 
                                fontFamily: ACADEMY_TYPOGRAPHY.serif,
                                color: ACADEMY_COLORS.textStrong
                            }}
                        >
                            リスキリング補助金対象講座
                        </h2>
                        
                        <p 
                            className="leading-loose max-w-2xl"
                            style={{ color: ACADEMY_COLORS.textBody }}
                        >
                            本講座は経済産業省「リスキリングを通じたキャリアアップ支援事業」に採択されています。<br className="hidden lg:block" />
                            一定の要件を満たすことで、受講費用の最大70%（21万円）が国から補助されます。
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-2">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="inline-flex items-center gap-2 text-sm font-bold border-b pb-1 transition-opacity hover:opacity-70"
                                style={{ 
                                    color: ACADEMY_COLORS.accentMain,
                                    borderColor: ACADEMY_COLORS.accentMain 
                                }}
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
                                className="text-xs flex items-center gap-1 transition-colors"
                                style={{ color: ACADEMY_COLORS.textMuted }}
                            >
                                事務局公式サイト
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Price Highlight */}
                    <div 
                        className="w-full lg:w-80 border rounded-sm p-8 lg:p-10 shadow-sm"
                        style={{ 
                            backgroundColor: ACADEMY_COLORS.bgSection,
                            borderColor: ACADEMY_COLORS.lineSoft 
                        }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <span 
                                className="text-[10px] font-bold tracking-widest uppercase mb-6"
                                style={{ 
                                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                    color: ACADEMY_COLORS.textMuted
                                }}
                            >
                                Estimated Cost
                            </span>
                            
                            <div className="mb-6">
                                <p 
                                    className="text-xs line-through mb-1"
                                    style={{ color: ACADEMY_COLORS.textMuted }}
                                >
                                    通常価格 330,000円
                                </p>
                                <p 
                                    className="text-sm font-medium"
                                    style={{ color: ACADEMY_COLORS.textBody }}
                                >
                                    実質負担額
                                </p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span
                                        className="text-4xl lg:text-5xl font-bold"
                                        style={{ 
                                            fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                            color: ACADEMY_COLORS.textStrong
                                        }}
                                    >
                                        120,000
                                    </span>
                                    <span 
                                        className="text-sm font-bold"
                                        style={{ color: ACADEMY_COLORS.textStrong }}
                                    >
                                        円〜
                                    </span>
                                </div>
                            </div>

                            <div 
                                className="text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4"
                                style={{ 
                                    backgroundColor: ACADEMY_COLORS.accentSoft,
                                    color: ACADEMY_COLORS.accentMain
                                }}
                            >
                                Max 70% Subsidized
                            </div>
                            
                            <p 
                                className="text-[10px] leading-relaxed italic"
                                style={{ color: ACADEMY_COLORS.textMuted }}
                            >
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
                <div 
                    className="border-t"
                    style={{ 
                        backgroundColor: ACADEMY_COLORS.bgCanvas,
                        borderColor: ACADEMY_COLORS.lineSoft
                    }}
                >
                    <div className="container mx-auto px-6 lg:px-12 max-w-5xl py-16">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                            {/* Left Col: System Intro */}
                            <div className="space-y-12">
                                <div>
                                    <h4 
                                        className="text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-3"
                                        style={{ color: ACADEMY_COLORS.textStrong }}
                                    >
                                        <span 
                                            className="w-1 h-4" 
                                            style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                                        />
                                        制度の概要
                                    </h4>
                                    <p 
                                        className="text-sm leading-loose mb-6"
                                        style={{ color: ACADEMY_COLORS.textBody }}
                                    >
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
                                                <span 
                                                    className="text-[10px] font-bold pt-1" 
                                                    style={{ 
                                                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                                        color: ACADEMY_COLORS.textMuted
                                                    }}
                                                >
                                                    {item.step}
                                                </span>
                                                <div>
                                                    <h5 
                                                        className="text-sm font-bold"
                                                        style={{ color: ACADEMY_COLORS.textStrong }}
                                                    >
                                                        {item.title}
                                                    </h5>
                                                    <p 
                                                        className="text-xs leading-loose"
                                                        style={{ color: ACADEMY_COLORS.textMuted }}
                                                    >
                                                        {item.body}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 
                                        className="text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-3"
                                        style={{ color: ACADEMY_COLORS.textStrong }}
                                    >
                                        <span 
                                            className="w-1 h-4" 
                                            style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                                        />
                                        こんな方におすすめ
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "AIを武器に、今の市場価値を劇的に高めたい方",
                                            "将来のキャリアに漠然とした不安がある方",
                                            "スキルアップと転職を同時に実現したい方"
                                        ].map(text => (
                                            <li key={text} className="flex gap-3 text-sm">
                                                <span 
                                                    className="font-bold"
                                                    style={{ color: ACADEMY_COLORS.accentMain }}
                                                >
                                                    ・
                                                </span>
                                                <span style={{ color: ACADEMY_COLORS.textBody }} className="leading-loose">{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Col: Calculation Table */}
                            <div>
                                <h4 
                                    className="text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-3"
                                    style={{ color: ACADEMY_COLORS.textStrong }}
                                >
                                    <span 
                                        className="w-1 h-4" 
                                        style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                                    />
                                    補助金の内訳
                                </h4>
                                <div 
                                    className="border overflow-hidden"
                                    style={{ 
                                        backgroundColor: ACADEMY_COLORS.bgPanel,
                                        borderColor: ACADEMY_COLORS.lineSoft 
                                    }}
                                >
                                    <div 
                                        className="grid grid-cols-12 border-b border-stone-100"
                                        style={{ borderColor: ACADEMY_COLORS.bgSection }}
                                    >
                                        <div 
                                            className="col-span-4 p-4 flex items-center bg-stone-50"
                                            style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
                                        >
                                            <span 
                                                className="text-xs font-bold"
                                                style={{ color: ACADEMY_COLORS.textBody }}
                                            >
                                                受講修了時
                                            </span>
                                        </div>
                                        <div className="col-span-8 p-4">
                                            <p 
                                                className="text-sm font-bold"
                                                style={{ color: ACADEMY_COLORS.textStrong }}
                                            >
                                                受講費用の <span 
                                                    className="text-xl"
                                                    style={{ color: ACADEMY_COLORS.accentMain }}
                                                >
                                                    1/2
                                                </span>（上限40万円）
                                            </p>
                                            <p 
                                                className="text-[10px] leading-loose"
                                                style={{ color: ACADEMY_COLORS.textMuted }}
                                            >
                                                リスキリング講座の受講を終了した場合
                                            </p>
                                        </div>
                                    </div>
                                    <div 
                                        className="grid grid-cols-12 border-b border-stone-100"
                                        style={{ borderColor: ACADEMY_COLORS.bgSection }}
                                    >
                                        <div 
                                            className="col-span-4 p-4 flex items-center bg-stone-50"
                                            style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
                                        >
                                            <span 
                                                className="text-xs font-bold"
                                                style={{ color: ACADEMY_COLORS.textBody }}
                                            >
                                                転職後1年継続
                                            </span>
                                        </div>
                                        <div className="col-span-8 p-4">
                                            <p 
                                                className="text-sm font-bold"
                                                style={{ color: ACADEMY_COLORS.textStrong }}
                                            >
                                                追加で <span 
                                                    className="text-xl"
                                                    style={{ color: ACADEMY_COLORS.accentDeep }}
                                                >
                                                    1/5
                                                </span>（上限16万円）
                                            </p>
                                            <p 
                                                className="text-[10px] leading-loose"
                                                style={{ color: ACADEMY_COLORS.textMuted }}
                                            >
                                                転職して1年間継続就業した場合
                                            </p>
                                        </div>
                                    </div>
                                    <div 
                                        className="p-6 text-center border-t border-stone-200"
                                        style={{ 
                                            backgroundColor: ACADEMY_COLORS.bgSection,
                                            borderColor: ACADEMY_COLORS.lineSoft 
                                        }}
                                    >
                                        <p 
                                            className="text-xs uppercase tracking-widest mb-1"
                                            style={{ color: ACADEMY_COLORS.textMuted }}
                                        >
                                            Total Support
                                        </p>
                                        <p 
                                            className="text-xl font-bold"
                                            style={{ color: ACADEMY_COLORS.accentMain }}
                                        >
                                            受講費用の最大<span className="text-3xl">70</span>%が補助！
                                        </p>
                                        <p 
                                            className="text-xs mt-1 leading-loose"
                                            style={{ color: ACADEMY_COLORS.textBody }}
                                        >
                                            ※当講座の場合：330,000円 → 実質約120,000円〜
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <Link
                                        href="/academy/subsidy-guide"
                                        className="inline-flex items-center gap-2 text-sm font-bold border-b pb-1 hover:opacity-70 transition-opacity"
                                        style={{ 
                                            color: ACADEMY_COLORS.textStrong,
                                            borderColor: ACADEMY_COLORS.textStrong
                                        }}
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
