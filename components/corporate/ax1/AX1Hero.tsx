import { motion } from "framer-motion";

export function AX1Hero() {
    return (
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center overflow-hidden bg-white">
            {/* Background Image - Corporate & Authentic */}
            <div className="absolute inset-0 z-0">
                {/* Mobile: Portrait-first implementation */}
                <picture>
                    <source media="(max-width: 768px)" srcSet="/lp/seminar-ax1/ax-1-key-1.webp" />
                    <img
                        src="/lp/seminar-ax1/ax-1-key-1.webp"
                        alt="AX-1 Hero Background"
                        className="w-full h-full object-cover object-[65%_center] md:object-center opacity-100"
                        fetchPriority="high"
                    />
                </picture>

                {/* Light gradient overlay for text readability - Clean & Professional */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-60" />
            </div>

            <div className="container-section relative z-10 flex flex-col md:flex-row items-center h-full pt-20 md:pt-0">
                {/* Top Badge Group - Trust & Exclusivity */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="fixed top-6 left-6 md:top-8 md:left-12 z-50 flex flex-wrap items-center gap-4"
                >
                    <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm px-5 py-2 rounded-sm text-slate-800">
                        <span className="font-bold tracking-widest text-blue-700">AX-1</span>
                        <div className="h-4 w-[1px] bg-slate-300" />
                        <span className="text-xs md:text-sm font-medium tracking-wider">経営者・CXO限定</span>
                    </div>

                    {/* Title moved to Header */}
                    <div className="hidden md:block h-[1px] w-8 bg-slate-400/50" />
                    <span className="text-blue-900 font-bold tracking-widest text-sm md:text-base uppercase">
                        AI戦略ブリーフィング
                    </span>
                </motion.div>

                <div className="flex flex-col items-start max-w-5xl mt-32 md:mt-24">

                    {/* H1: Impactful Sans-Serif Typography - Deep Navy */}
                    <h1 className="font-black leading-[1.1] text-slate-900 tracking-tight">
                        <div className="overflow-hidden">
                            <motion.div
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                                className="flex items-baseline gap-2 md:gap-4 mb-2"
                            >
                                <span className="text-[clamp(5rem,14vw,8.5rem)] leading-none text-slate-900 font-sans tracking-tight">1</span>
                                <span className="text-[clamp(2.5rem,6vw,3.5rem)] font-bold tracking-widest text-slate-600">日で</span>
                            </motion.div>
                        </div>

                        <div className="overflow-hidden">
                            <motion.div
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="flex flex-wrap items-baseline"
                            >
                                <span className="text-[clamp(3.5rem,8vw,6rem)] text-blue-700 mr-3 md:mr-5 font-sans tracking-tight font-bold">
                                    AI
                                </span>
                                <span className="text-[clamp(2rem,6vw,4.5rem)] text-slate-900 leading-tight tracking-[0.05em]" style={{ fontFeatureSettings: '"palt"' }}>
                                    を武器にした組織へ<span className="text-blue-600">。</span>
                                </span>
                            </motion.div>
                        </div>
                    </h1>

                    {/* Meta Info & CTA - Clean & Solid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-12 md:mt-16 w-full md:w-auto"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">

                            {/* CTA: Conservative but Action-Oriented */}
                            <a
                                href="#cta"
                                className="group relative w-full md:w-auto bg-slate-900 text-white text-lg md:text-xl font-bold py-5 px-10 rounded-sm shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                            >
                                <span className="relative z-10 tracking-wide">審査制でエントリーする</span>
                                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </a>

                            {/* Info Badges: Clean Cards */}
                            <div className="flex flex-wrap gap-4">
                                <div className="px-5 py-3 bg-white border border-slate-200 shadow-sm rounded-sm text-sm text-slate-700 flex items-center gap-3">
                                    <span className="font-bold text-slate-400 text-xs uppercase tracking-wider">Date</span>
                                    <span className="font-bold text-slate-900 text-base">2026.02.18 (火) 東京</span>
                                </div>
                                <div className="px-5 py-3 bg-white border border-slate-200 shadow-sm rounded-sm text-sm text-slate-700 flex items-center gap-3">
                                    <span className="font-bold text-slate-400 text-xs uppercase tracking-wider">Limit</span>
                                    <span className="font-bold text-slate-900 text-base">限定20名</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>


        </section>);
}
