"use client";

import { useState } from "react";
import Image from "next/image";

const SubsidyBanner = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="bg-gradient-to-r from-orange-500 to-amber-500 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }} />
            </div>

            {/* Main Banner Content */}
            <div className="py-10 md:py-16 relative z-10">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Left Content */}
                        <div className="space-y-4 text-center lg:text-left">
                            {/* ロゴに白背景を追加 */}
                            <div className="mb-3 md:mb-4">
                                <div className="bg-white rounded-lg px-3 py-1.5 md:px-4 md:py-2 inline-block">
                                    <Image
                                        src="/images/keisan-reskiling-logo.webp"
                                        alt="経済産業省リスキリング補助金"
                                        width={200}
                                        height={70}
                                        className="h-10 md:h-14 w-auto object-contain"
                                    />
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
                                リスキリング補助金<br className="sm:hidden" />対象講座
                            </h2>
                            <p className="text-orange-100 font-medium text-base sm:text-base md:text-lg">
                                <span className="hidden sm:inline">経済産業省「リスキリングを通じたキャリアアップ支援事業」対象</span>
                                <span className="sm:hidden">経済産業省<br />「リスキリングを通じた<br />キャリアアップ支援事業」対象</span>
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    補助金の詳細を見る
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {/* ボタンからテキストリンクに変更 */}
                                <a
                                    href="https://careerup.reskilling.go.jp/worker/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 text-sm underline underline-offset-4 hover:text-white transition-colors flex items-center gap-1"
                                >
                                    公式サイトはこちら
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Right Content - Price Box */}
                        <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl w-full sm:min-w-[280px] sm:w-auto">
                            <div className="flex flex-col items-center gap-4">
                                {/* Original Price */}
                                <div className="text-center">
                                    <p className="text-sm text-slate-400 line-through">
                                        通常価格 330,000円
                                    </p>
                                </div>

                                {/* Discounted Price */}
                                <div className="text-center">
                                    <p className="text-sm text-slate-600 mb-1">実質</p>
                                    <p className="text-4xl sm:text-4xl font-bold text-orange-500">
                                        120,000<span className="text-lg sm:text-lg font-bold">円〜</span>
                                    </p>
                                </div>

                                {/* Discount Badge */}
                                <div className="bg-orange-50 border-2 border-orange-200 rounded-full px-6 py-2">
                                    <p className="text-orange-600 font-bold text-lg">
                                        最大70%OFF
                                    </p>
                                </div>

                                <p className="text-xs text-slate-400">
                                    ※支給要件あり（転職・継続就業が条件）
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expandable Detail Section */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-white text-slate-900 relative z-10">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl py-12">
                        <div className="space-y-8">
                            {/* What is this program */}
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    <span className="hidden sm:inline">リスキリングを通じたキャリアアップ支援事業とは？</span><span className="sm:hidden">リスキリング支援事業とは？</span>
                                </h4>
                                <p className="text-slate-600 leading-relaxed">
                                    経済産業省が実施する、在職者向けのキャリアアップ支援制度です。
                                    「キャリア相談」「リスキリング講座」「転職支援」を一体的に受けられます。
                                </p>
                            </div>

                            {/* 3 Support Steps - オレンジ系に統一 */}
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 mb-4">3つのサポート</h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border border-orange-200">
                                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-3">1</div>
                                        <h5 className="font-bold text-orange-800 mb-2">キャリア相談</h5>
                                        <p className="text-sm text-orange-700/80">専門家とキャリアの棚卸し・ゴール設定</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border border-orange-200">
                                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mb-3">2</div>
                                        <h5 className="font-bold text-orange-800 mb-2">リスキリング</h5>
                                        <p className="text-sm text-orange-700/80">AI活用スキルなど新しいスキルを習得</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
                                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-3">3</div>
                                        <h5 className="font-bold text-amber-800 mb-2">転職支援</h5>
                                        <p className="text-sm text-amber-700/80">転職に向けた伴走支援・転職先紹介</p>
                                    </div>
                                </div>
                            </div>

                            {/* Subsidy Breakdown */}
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 mb-4">補助金の内訳</h4>
                                <div className="bg-slate-50 rounded-xl p-5 space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded shrink-0">受講終了時</div>
                                        <div>
                                            <p className="font-bold text-slate-800">受講費用の <span className="text-orange-500 text-xl">1/2</span>（上限40万円）</p>
                                            <p className="text-sm text-slate-500">リスキリング講座の受講を終了した場合</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-slate-200 my-2"></div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded shrink-0">転職後1年継続</div>
                                        <div>
                                            <p className="font-bold text-slate-800">追加で <span className="text-amber-500 text-xl">1/5</span>（上限16万円）</p>
                                            <p className="text-sm text-slate-500">転職して1年間継続就業した場合</p>
                                        </div>
                                    </div>
                                    <div className="border-t-2 border-orange-300 my-2"></div>
                                    <div className="text-center">
                                        <p className="text-xl sm:text-2xl font-bold text-orange-600">
                                            受講費用の最大<span className="text-3xl sm:text-4xl">70</span>%が補助！
                                        </p>
                                        <p className="text-sm text-slate-500 mt-1">
                                            ※当講座の場合：330,000円 → 実質約120,000円〜
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Who is this for */}
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 mb-3">こんな方におすすめ</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-500 mt-1">✓</span>
                                        <span className="text-slate-600">転職したいけど、今の経験やスキルで足りるか不安な方</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-500 mt-1">✓</span>
                                        <span className="text-slate-600">足りないスキルが何か、どこで学べるかわからない方</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-500 mt-1">✓</span>
                                        <span className="text-slate-600">経験やスキルを企業にどう伝えればいいかわからない方</span>
                                    </li>
                                </ul>
                            </div>

                            {/* CTA - テキストリンクと閉じるボタン */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                                <a
                                    href="https://careerup.reskilling.go.jp/worker/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-600 font-medium underline underline-offset-4 hover:text-orange-700 transition-colors flex items-center gap-1"
                                >
                                    経産省公式サイトで詳細を確認
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="text-slate-500 hover:text-slate-700 text-sm transition-colors"
                                >
                                    閉じる
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubsidyBanner;
