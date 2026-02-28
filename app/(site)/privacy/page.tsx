'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
                        プライバシーポリシー
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        個人情報の取り扱いについて
                    </motion.p>
                </div>
            </section>

            {/* Privacy Content */}
            <section className="pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                    >
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 mb-6">
                                株式会社ウィルフォワード（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに基づき、個人情報の適切な取り扱いと保護に努めます。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">1. 個人情報の定義</h2>
                            <p className="text-gray-600 mb-6">
                                本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できるもの、および個人識別符号が含まれるものをいいます。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">2. 個人情報の収集</h2>
                            <p className="text-gray-600 mb-2">当社は、以下の場合に個人情報を収集することがあります。</p>
                            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                                <li>サービスのお申し込み・お問い合わせ時</li>
                                <li>セミナー・イベントへのお申し込み時</li>
                                <li>資料請求時</li>
                                <li>メールマガジンの登録時</li>
                                <li>その他、当社サービスのご利用時</li>
                            </ul>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
                            <p className="text-gray-600 mb-2">当社は、収集した個人情報を以下の目的で利用します。</p>
                            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                                <li>サービスの提供・運営</li>
                                <li>お問い合わせへの対応</li>
                                <li>サービスに関するご案内・情報提供</li>
                                <li>サービスの改善・新サービスの開発</li>
                                <li>統計データの作成（個人を特定できない形式）</li>
                                <li>法令に基づく対応</li>
                            </ul>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. 個人情報の第三者提供</h2>
                            <p className="text-gray-600 mb-2">
                                当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                                <li>法令に基づく場合</li>
                                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                                <li>公衆衛生の向上または児童の健全な育成の推進のために必要がある場合</li>
                                <li>国の機関等への協力が必要な場合</li>
                            </ul>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. 個人情報の安全管理</h2>
                            <p className="text-gray-600 mb-6">
                                当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対して、適切な監督を行います。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">6. 個人情報の開示・訂正・削除</h2>
                            <p className="text-gray-600 mb-6">
                                お客様は、当社が保有するご自身の個人情報について、開示、訂正、削除を求めることができます。ご希望の場合は、お問い合わせフォームよりご連絡ください。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Cookieの使用について</h2>
                            <p className="text-gray-600 mb-6">
                                当社ウェブサイトでは、サービスの向上およびお客様の利便性向上のためにCookieを使用することがあります。Cookieの使用を望まない場合は、ブラウザの設定により無効化することができます。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">8. プライバシーポリシーの変更</h2>
                            <p className="text-gray-600 mb-6">
                                当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当社ウェブサイトにて公表します。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">9. お問い合わせ</h2>
                            <p className="text-gray-600 mb-6">
                                本プライバシーポリシーに関するお問い合わせは、
                                <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">お問い合わせフォーム</a>
                                よりご連絡ください。
                            </p>

                            <p className="text-gray-500 text-sm mt-8 pt-6 border-t">
                                制定日：2026年1月10日<br />
                                最終改定日：2026年1月10日<br />
                                株式会社ウィルフォワード
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
