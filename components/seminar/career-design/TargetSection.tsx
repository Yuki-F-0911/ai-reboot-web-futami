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
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
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
                    <p className="text-green-400 font-bold text-sm tracking-wider mb-4">
                        TARGET
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                        こんな方におすすめ
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {targets.map((target, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-white text-base md:text-lg font-medium">
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
                    className="text-center mt-12"
                >
                    <p className="text-slate-400 text-lg mb-6">
                        一つでも当てはまる方は、ぜひご参加ください。
                    </p>
                    <a
                        href="#register"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-full transition-all duration-300 shadow-lg shadow-green-500/20"
                    >
                        無料で申し込む
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
