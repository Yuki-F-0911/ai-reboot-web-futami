"use client";

import { motion } from "framer-motion";

type Props = {
    title: string;
    subtitle: string;
    heroCopy: string;
    dateShort: string;
    time: string;
    place: string;
    googleFormUrl: string;
};

const HeroSection = ({
    title,
    subtitle,
    heroCopy,
    dateShort,
    time,
    place,
    googleFormUrl,
}: Props) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-white">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-orange-500 font-bold text-base tracking-wider mb-6"
                    >
                        GEMINI × NOTEBOOKLM SEMINAR
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-[1.1]"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl text-orange-500 mb-4 font-bold"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8"
                    >
                        {heroCopy}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-slate-600 text-base sm:text-lg md:text-xl mb-8 sm:mb-10"
                    >
                        <span className="text-slate-900 font-bold">
                            {dateShort} {time}
                        </span>
                        <span className="hidden sm:inline text-slate-300">|</span>
                        <span>{place}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <a
                            href={googleFormUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1"
                        >
                            <span>今すぐ無料で申し込む</span>
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </a>
                        <p className="text-base text-slate-500">
                            ※アーカイブ視聴も可能です
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
