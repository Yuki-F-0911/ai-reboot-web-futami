"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/seminar/career-hero-bg.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-orange-50/80" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Sub Badge */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-orange-500 font-bold text-sm tracking-wider mb-6"
                    >
                        ONLINE SEMINAR
                    </motion.p>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-4 sm:mb-6 leading-[1.1]"
                    >
                        生成AI時代のキャリア設計論
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-orange-500 mb-4 font-bold"
                    >
                        ツールに依存しない「本質的な強み」の作り方
                    </motion.p>

                    {/* Sub Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8"
                    >
                        人事・採用のプロ×AI実践者が教える「キャリア下剋上」のロードマップ
                    </motion.p>

                    {/* Event Info - Simple Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-slate-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10"
                    >
                        <span className="text-slate-900 font-bold">1月18日(日) 20:00〜21:00</span>
                        <span className="hidden sm:inline text-slate-300">|</span>
                        <span>オンライン（Zoom）</span>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <a
                            href="#register"
                            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1"
                        >
                            <span>今すぐ無料で申し込む</span>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <p className="text-sm text-slate-500">
                            ※日程が合わない方はアーカイブ配信をお申し込みください
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-slate-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
