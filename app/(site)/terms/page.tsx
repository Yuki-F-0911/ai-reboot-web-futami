'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
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
                        利用規約
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        AIリブート事業のサービス利用に関する規約
                    </motion.p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                    >
                        <div className="prose prose-gray max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">第1条（適用）</h2>
                            <p className="text-gray-600 mb-6">
                                本規約は、株式会社ウィルフォワード（以下「当社」といいます）が提供するAIリブート事業に関連するすべてのサービス（以下「本サービス」といいます）の利用に関する条件を定めるものです。ユーザーの皆様には、本規約に同意いただいた上で、本サービスをご利用いただきます。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">第2条（利用登録）</h2>
                            <p className="text-gray-600 mb-6">
                                本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">第3条（禁止事項）</h2>
                            <p className="text-gray-600 mb-2">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                                <li>法令または公序良俗に違反する行為</li>
                                <li>犯罪行為に関連する行為</li>
                                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                                <li>他のユーザーに成りすます行為</li>
                                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                                <li>その他、当社が不適切と判断する行為</li>
                            </ul>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">第4条（本サービスの提供の停止等）</h2>
                            <p className="text-gray-600 mb-2">
                                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                            </ul>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">第5条（著作権）</h2>
                            <p className="text-gray-600 mb-6">
                                本サービスにおいて当社が提供する教材、動画、資料等のコンテンツの著作権は、当社または正当な権利を有する第三者に帰属します。ユーザーは、当社の許可なくこれらを複製、転載、改変、販売等することはできません。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">第6条（免責事項）</h2>
                            <p className="text-gray-600 mb-6">
                                当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">第7条（サービス内容の変更等）</h2>
                            <p className="text-gray-600 mb-6">
                                当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">第8条（利用規約の変更）</h2>
                            <p className="text-gray-600 mb-6">
                                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は、当社ウェブサイトに掲載したときから効力を生じるものとします。
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mb-4">第9条（準拠法・裁判管轄）</h2>
                            <p className="text-gray-600 mb-6">
                                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                            </p>

                            <p className="text-gray-500 text-sm mt-8 pt-6 border-t">
                                制定日：2026年1月10日<br />
                                最終改定日：2026年1月10日
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
