"use client";

import { motion } from "framer-motion";

const eventDetails = [
    {
        label: "セミナータイトル",
        value: "生成AI時代のキャリア設計論",
    },
    {
        label: "日時",
        value: "1月18日(日) 20:00〜21:00",
    },
    {
        label: "参加費",
        value: "無料",
        highlight: true,
    },
    {
        label: "開催方法",
        value: "オンライン（Zoom）",
    },
];

const RegisterSection = () => {
    return (
        <section id="register" className="py-20 md:py-28 bg-gradient-to-br from-[#0a0f1a] via-purple-900/10 to-[#0a0f1a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
            </div>

            {/* Animated Border Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 rounded-full blur-2xl" />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-purple-400 font-bold text-sm tracking-wider mb-4">
                        REGISTER
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                        開催概要・お申し込み
                    </h2>
                    <p className="text-slate-400">
                        お申し込みいただいた方に視聴URLをお送りします
                    </p>
                </motion.div>

                {/* Event Details Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 mb-8"
                >
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {eventDetails.map((detail, index) => (
                            <div
                                key={index}
                                className={`p-5 rounded-2xl ${detail.highlight
                                    ? "bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30"
                                    : "bg-white/5 border border-white/10"
                                    }`}
                            >
                                <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">
                                    {detail.label}
                                </p>
                                <p className={`text-lg font-bold ${detail.highlight ? "text-orange-300" : "text-white"}`}>
                                    {detail.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Archive Notice */}
                    <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-8">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="text-blue-300 font-bold mb-1">アーカイブ配信について</p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    当日ご都合が合わない方には、アンケート回答を条件に後日アーカイブ動画を配布可能です。
                                    フォームより「アーカイブ希望」を選択してください。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <motion.a
                            href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-3 px-12 py-5 text-xl font-black text-white bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 hover:from-purple-500 hover:via-purple-400 hover:to-blue-500 rounded-full transition-all duration-300 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50"
                        >
                            <span>無料でセミナーに参加する</span>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.a>
                        <p className="text-slate-500 text-sm mt-4">
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
                    <p className="text-slate-500 text-sm">
                        ※無理な勧誘は一切ございません。安心してお申し込みください。
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default RegisterSection;
