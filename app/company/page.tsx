'use client';

import { motion } from 'framer-motion';

export default function CompanyPage() {
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
                        運営会社
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        AIリブート事業を運営する会社情報
                    </motion.p>
                </div>
            </section>

            {/* Company Info Section */}
            <section className="pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">会社概要</h2>

                        <dl className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                                <dt className="font-semibold text-gray-700">会社名</dt>
                                <dd className="md:col-span-2 text-gray-600">株式会社ウィルフォワード</dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                                <dt className="font-semibold text-gray-700">英文表記</dt>
                                <dd className="md:col-span-2 text-gray-600">Willforward, Inc.</dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                                <dt className="font-semibold text-gray-700">所在地</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    〒248-0016<br />
                                    神奈川県鎌倉市長谷2-2-10
                                </dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                                <dt className="font-semibold text-gray-700">設立</dt>
                                <dd className="md:col-span-2 text-gray-600">2011年8月8日</dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                                <dt className="font-semibold text-gray-700">代表者</dt>
                                <dd className="md:col-span-2 text-gray-600">代表取締役 成瀬 拓也</dd>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                                <dt className="font-semibold text-gray-700">事業内容</dt>
                                <dd className="md:col-span-2 text-gray-600">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>AIリブートアカデミー（リスキリング講座）の運営</li>
                                        <li>法人向け生成AI研修「AIリブート」の提供</li>
                                        <li>組織開発・人材育成コンサルティング</li>
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
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
