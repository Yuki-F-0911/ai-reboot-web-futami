"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const achievements = [
    "株式会社ウィルフォワード代表として、ホラクラシー経営・ティール組織による組織開発を実践",
    "起業家・ビジネスマン・アスリート・政治家など多様なキャリア支援を実施",
    "経済産業省認定リスキリング講座「AIリブートアカデミー」主宰",
    "筑波大学非常勤講師として、AI時代のキャリア戦略を教授",
    "マスターズアスリートとしてフルマラソン2時間34分の記録保持者、世界大会出場",
];

const InstructorSection = () => {
    return (
        <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-blue-400 font-bold text-sm tracking-wider mb-4">
                        INSTRUCTOR
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                        講師紹介
                    </h2>
                </motion.div>

                {/* Instructor Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden"
                >
                    <div className="grid lg:grid-cols-5 gap-0">
                        {/* Image */}
                        <div className="lg:col-span-2 relative">
                            <div className="aspect-[4/5] lg:aspect-auto lg:absolute lg:inset-0">
                                <Image
                                    src="/images/naruse.jpg"
                                    alt="成瀬 拓也"
                                    fill
                                    className="object-cover object-top"
                                />
                                {/* Gradient Overlay for mobile */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/50" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3 p-6 md:p-10 lg:p-12">
                            {/* Role Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                                <span className="text-blue-300 text-sm font-medium">代表講師・PM</span>
                            </div>

                            {/* Name */}
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                                成瀬 拓也
                            </h3>
                            <p className="text-blue-400 font-medium tracking-wide mb-6">
                                Takuya Naruse
                            </p>

                            {/* Titles */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
                                    株式会社ウィルフォワード 代表取締役
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
                                    株式会社Lively 共同創業者CSO
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
                                    筑波大学 非常勤講師
                                </span>
                            </div>

                            {/* Profile */}
                            <p className="text-slate-300 leading-relaxed mb-8">
                                経営者・教育者としての経験を活かし、AIを活用したキャリア支援の最前線で活動。
                                「働き方改革」の実践者として、ホラクラシー経営などを推進。
                                現在は経済産業省認定リスキリング講座「AIリブートアカデミー」を主宰し、
                                AI時代のキャリア戦略を発信中。
                            </p>

                            {/* Achievements */}
                            <div>
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    主な実績
                                </h4>
                                <ul className="space-y-3">
                                    {achievements.map((achievement, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-slate-400 text-sm leading-relaxed">
                                                {achievement}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InstructorSection;
