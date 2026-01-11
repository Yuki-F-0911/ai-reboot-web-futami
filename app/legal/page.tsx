'use client';

import { motion } from 'framer-motion';

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        特定商取引法に基づく表記
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        特定商取引に関する法律に基づく表示
                    </motion.p>
                </div>
            </section>

            {/* Legal Content */}
            <section className="pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                    >
                        <dl className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">販売業者</dt>
                                <dd className="md:col-span-2 text-gray-600">株式会社ウィルフォワード</dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">代表責任者</dt>
                                <dd className="md:col-span-2 text-gray-600">成瀬 拓也</dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">所在地</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    〒150-0001<br />
                                    東京都渋谷区神宮前6-23-4 桑野ビル2階
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">電話番号</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    お問い合わせフォームよりご連絡ください
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">メールアドレス</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    お問い合わせフォームよりご連絡ください
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">販売価格</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    各サービスページに記載の価格に準じます。<br />
                                    価格は税込表示です。
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">商品代金以外の必要料金</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    消費税（価格に含まれています）
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">お支払い方法</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>銀行振込</li>
                                        <li>クレジットカード決済</li>
                                    </ul>
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">お支払い時期</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    お申し込み後、当社が指定する期日までにお支払いください。
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">サービス提供時期</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    お申し込みおよびお支払い確認後、各サービスの開始日に準じてサービスを提供いたします。
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pb-4 border-b border-gray-100">
                                <dt className="font-semibold text-gray-700">キャンセル・返金について</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    <p className="mb-2">サービスの性質上、お申し込み後のキャンセル・返金は原則としてお受けしておりません。</p>
                                    <p>ただし、以下の場合は個別にご相談ください：</p>
                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                        <li>サービス開始前のキャンセル</li>
                                        <li>やむを得ない事情がある場合</li>
                                    </ul>
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                                <dt className="font-semibold text-gray-700">お問い合わせ</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                                        お問い合わせフォームはこちら
                                    </a>
                                </dd>
                            </div>
                        </dl>

                        <p className="text-gray-500 text-sm mt-8 pt-6 border-t">
                            最終更新日：2026年1月10日
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
