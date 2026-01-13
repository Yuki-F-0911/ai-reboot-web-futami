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
        <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <p className="text-orange-500 font-bold text-sm tracking-wider mb-3 sm:mb-4">
                        INSTRUCTOR
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                        講師紹介
                    </h2>
                </motion.div>

                {/* Instructor Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm"
                >
                    <div className="grid md:grid-cols-5 gap-0">
                        {/* Image */}
                        <div className="md:col-span-2 relative">
                            <div className="aspect-[3/4] md:aspect-auto md:absolute md:inset-0">
                                <Image
                                    src="/images/naruse.jpg"
                                    alt="成瀬 拓也"
                                    fill
                                    className="object-cover object-top"
                                />
                                {/* Gradient Overlay for mobile */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-3 p-4 sm:p-6 md:p-8 lg:p-10">
                            {/* Role Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 mb-3 sm:mb-4">
                                <span className="text-orange-600 text-xs sm:text-sm font-medium">代表講師・PM</span>
                            </div>

                            {/* Name */}
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
                                成瀬 拓也
                            </h3>
                            <p className="text-orange-500 font-bold text-xs sm:text-sm tracking-wide mb-4 sm:mb-6">
                                Takuya Naruse
                            </p>

                            {/* Titles */}
                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                                <span className="px-2 sm:px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                                    株式会社ウィルフォワード 代表取締役
                                </span>
                                <span className="px-2 sm:px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                                    筑波大学 非常勤講師
                                </span>
                            </div>

                            {/* Profile */}
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                                経営者・教育者としての経験を活かし、AIを活用したキャリア支援の最前線で活動。経済産業省認定リスキリング講座「AIリブートアカデミー」を主宰。
                            </p>

                            {/* Achievements */}
                            <div>
                                <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-3 sm:mb-4 flex items-center gap-2">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    主な実績
                                </h4>
                                <ul className="space-y-2 sm:space-y-3">
                                    {achievements.slice(0, 4).map((achievement, index) => (
                                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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
