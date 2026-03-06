"use client";

import { motion } from "framer-motion";

type RegisterSectionProps = {
    title: string;
    dateShort: string;
    time: string;
    place: string;
    googleFormUrl: string;
};

const RegisterSection = ({ title, dateShort, time, place, googleFormUrl }: RegisterSectionProps) => {
    const eventDetails = [
        { label: "セミナータイトル", value: title },
        { label: "日時", value: `${dateShort} ${time}` },
        { label: "参加費", value: "無料" },
        { label: "開催方法", value: place },
    ];

    return (
        <section id="register" className="py-12 md:py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-400 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <p className="text-orange-400 font-bold text-base tracking-wider mb-3 sm:mb-4">
                        REGISTER
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
                        開催概要・お申し込み
                    </h2>
                    <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                        お申し込みいただいた方に視聴URLをお送りします
                    </p>
                </motion.div>

                {/* Event Details Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8"
                >
                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {eventDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-2 sm:py-3 border-b border-white/10 last:border-b-0"
                            >
                                <span className="text-slate-400 text-sm sm:text-base">
                                    {detail.label}
                                </span>
                                <span className="text-white text-base sm:text-lg font-medium">
                                    {detail.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <motion.a
                            href={googleFormUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-full transition-all duration-300 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50"
                        >
                            <span>無料でセミナーに参加する</span>
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.a>
                        <p className="text-slate-500 text-sm sm:text-base mt-3 sm:mt-4">
                            ※お申し込み後、視聴URLをメールでお送りします
                        </p>

                        {/* Archive Notice with LINE - Subtle */}
                        <div className="mt-6 sm:mt-8">
                            <p className="text-slate-400 text-sm sm:text-base mb-3">
                                ご都合が合わない方へ — LINEで30秒AI診断＋アーカイブをお届けします
                            </p>
                            <a
                                href="https://bexn9pao.autosns.app/line"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium text-[#06C755] border border-[#06C755] bg-transparent hover:bg-[#06C755]/10 rounded-full transition-all duration-300"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                LINEでAI診断＆アーカイブを受け取る
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-slate-500 text-sm sm:text-base">
                        ※無理な勧誘は一切ございません。安心してお申し込みください。
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default RegisterSection;
