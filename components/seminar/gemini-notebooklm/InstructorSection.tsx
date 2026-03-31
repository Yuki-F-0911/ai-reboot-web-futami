"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const instructors = [
    {
        name: "岩本和也",
        nameEn: "Kazuya Iwamoto",
        role: "合同会社AIのある暮らし 代表",
        label: "メイン講師",
        description:
            "GeminiとNotebookLMを始めとするAIツールの実践活用を支援。「見て終わらない」伴走型の研修やセミナーを多数提供している。",
        image: "/images/iwamoto.jpg",
        achievements: [
            "Google系AIツールの実践セミナーを多数開催",
            "企業向けAI活用支援・伴走型研修の提供",
            "「見て終わらない」シャドーイング形式の研修手法を確立",
        ],
    },
    {
        name: "成瀬拓也",
        nameEn: "Takuya Naruse",
        role: "株式会社ウィルフォワード 代表 / AI REBOOT ACADEMY 主宰",
        label: "ゲスト講師",
        description:
            "20社以上の企業コンサルティングや筑波大学での非常勤講師を務める。AI時代を生き抜く「思考OS」のアップデートを提唱。",
        image: "/images/naruse.jpg",
        achievements: [
            "経済産業省認定リスキリング講座「AIリブートアカデミー」主宰",
            "筑波大学非常勤講師として、AI時代のキャリア戦略を教授",
            "起業家・ビジネスマン・アスリートなど多様なキャリア支援を実施",
        ],
    },
];

const InstructorSection = () => {
    return (
        <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <p className="text-orange-500 font-bold text-base tracking-wider mb-3 sm:mb-4">
                        INSTRUCTOR
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        講師紹介
                    </h2>
                </motion.div>

                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    {instructors.map((ins, i) => (
                        <motion.div
                            key={ins.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * i }}
                            className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={ins.image}
                                    alt={ins.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                            </div>

                            <div className="p-4 sm:p-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 mb-3">
                                    <span className="text-orange-600 text-sm font-medium">
                                        {ins.label}
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                                    {ins.name}
                                </h3>
                                <p className="text-orange-500 font-bold text-sm tracking-wide mb-3">
                                    {ins.nameEn}
                                </p>

                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                                    {ins.description}
                                </p>

                                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                                    <span className="px-2 sm:px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs sm:text-sm">
                                        {ins.role}
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {ins.achievements.map((a) => (
                                        <li
                                            key={a}
                                            className="flex items-start gap-2"
                                        >
                                            <svg
                                                className="w-3.5 h-3.5 text-orange-500 mt-1 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                                {a}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstructorSection;
