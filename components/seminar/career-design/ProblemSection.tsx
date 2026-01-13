"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
    "今の仕事や働き方にモヤモヤを感じている",
    "自分には特別な強みがない気がする",
    "生成AIを学んでも、どう活かせばいいかわからない",
    "このままでいいのか、将来が不安",
];

const ProblemSection = () => {
    return (
        <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            <Image
                                src="/images/seminar/career-breakthrough.png"
                                alt="キャリアの閉塞感からの脱出"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-orange-400 font-bold text-sm tracking-wider mb-4">
                                PROBLEM
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                                AIを学んで終わり、
                                <br />
                                にしていませんか？
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-4 mb-8"
                        >
                            {problems.map((problem, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                                >
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </span>
                                    <p className="text-slate-300 text-base md:text-lg">
                                        {problem}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20"
                        >
                            <p className="text-white font-bold text-lg mb-2">
                                不都合な真実
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                生成AIの使い方はすぐに古くなります。
                                <br />
                                <span className="text-orange-300 font-bold">
                                    ただツールを使えるだけでは、これからの時代、武器にはなりません。
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
