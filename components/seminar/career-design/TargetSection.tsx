"use client";

import { motion } from "framer-motion";

const targets = [
    "今の仕事や働き方にモヤモヤを感じている方",
    "これまでのキャリアにコンプレックスを感じている方",
    "生成AIをキャリアの武器に変えたい方",
    "転職・キャリアアップを本気で考え始めている方",
    "「自分には特別な強みがない」と思っている方",
];

const TargetSection = () => {
    return (
        <section className="py-12 md:py-24 bg-gradient-to-br from-orange-50 via-white to-slate-50 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
                                         radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
                    }}
                />
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
                    <p className="text-orange-500 font-bold text-base tracking-wider mb-3 sm:mb-4">
                        TARGET
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        こういう悩みがある方に向いています
                    </h2>
                </motion.div>

                <div className="space-y-2 sm:space-y-3">
                    {targets.map((target, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:border-orange-200 transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-200">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed">
                                {target}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-8 sm:mt-12"
                >
                    <p className="text-slate-600 text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                        一つでも当てはまる方は、この60分で次の一歩を整理できます。
                    </p>
                    <a
                        href="#register"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl"
                    >
                        申し込む
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TargetSection;
