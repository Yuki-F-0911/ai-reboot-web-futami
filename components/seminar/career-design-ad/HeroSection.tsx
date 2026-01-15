"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image - 講師画像 */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/70" />
                <div className="absolute right-0 top-0 h-full w-full md:w-2/3 lg:w-1/2">
                    <Image
                        src="/images/naruse.jpg"
                        alt=""
                        fill
                        className="object-cover object-top opacity-40 md:opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-3xl" />
            </div>

            {/* Diagonal accent lines */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-red-500 via-red-500/50 to-transparent transform -skew-x-12" />
                <div className="absolute top-0 right-1/3 w-px h-2/3 bg-gradient-to-b from-red-600 via-red-600/30 to-transparent transform -skew-x-12" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Sub Badge */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-red-500 font-bold text-base tracking-wider mb-6"
                    >
                        ONLINE SEMINAR
                    </motion.p>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 sm:mb-6 leading-[1.1]"
                    >
                        生成AI時代の<br className="sm:hidden" />キャリア設計論
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl text-red-500 mb-4 font-bold"
                    >
                        ツールに依存しない<br className="sm:hidden" />「本質的な強み」の作り方
                    </motion.p>

                    {/* Sub Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8"
                    >
                        人事・採用のプロ×AI実践者が教える<br className="sm:hidden" />「キャリア下剋上」のロードマップ
                    </motion.p>

                    {/* Event Info - Simple Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-slate-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-10"
                    >
                        <span className="text-white font-bold">1月18日(日) 20:00〜21:00</span>
                        <span className="hidden sm:inline text-slate-600">|</span>
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
                            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1"
                        >
                            <span>今すぐ無料で申し込む</span>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <p className="text-base text-slate-500">
                            ※日程が合わない方はアーカイブ配信をお申し込みください
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
