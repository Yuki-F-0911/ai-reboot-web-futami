"use client";

import { motion } from "framer-motion";

const eventDetails = [
    { label: "セミナータイトル", value: "生成AI時代のキャリア設計論" },
    { label: "日時", value: "1月18日(日) 20:00〜21:00" },
    { label: "参加費", value: "無料" },
    { label: "開催方法", value: "オンライン（Zoom）" },
];

const RegisterSection = () => {
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

                    {/* Archive Notice - Simple note style */}
                    <p className="text-slate-400 text-sm sm:text-base text-center mb-6 sm:mb-8">
                        ※当日ご都合が合わない方には、アーカイブ配信をご用意しています
                    </p>

                    {/* CTA Button */}
                    <div className="text-center">
                        <motion.a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf8nTvEXBRIJSzcb_4SbMrwPi5NKx9_ihR6kzjYeCu1ngKrdA/viewform?usp=dialog"
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
