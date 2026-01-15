"use client";

import { motion } from "framer-motion";

const problems = [
    "AIツールの「使い方」を覚えることに時間を費やしている",
    "便利なツールを使いこなせば、キャリアが安泰だと思っている",
    "最新のAIスキルを追いかけ続けることに疲れを感じている",
    "自分の強みが「AIを使えること」だけになりつつある",
];

const ProblemSection = () => {
    return (
        <section className="py-12 md:py-24 bg-slate-900 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-800/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left: Warning Icon Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1 flex items-center justify-center"
                    >
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                            {/* Warning Triangle */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <svg
                                        className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 text-red-600/80"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2L1 21h22L12 2zm0 3.83L19.53 19H4.47L12 5.83zM11 16h2v2h-2zm0-6h2v4h-2z" />
                                    </svg>
                                </div>
                            </div>
                            {/* Pulsing rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border border-red-500/20 animate-pulse" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border border-red-500/10 animate-pulse" style={{ animationDelay: "0.5s" }} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-red-500 font-bold text-base tracking-wider mb-3 sm:mb-4">
                                WARNING
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                                便利なツールに、<br />
                                <span className="text-red-500">自分の価値</span>を<br className="sm:hidden" />明け渡すな。
                            </h2>
                        </motion.div>

                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-2 sm:space-y-3 mb-6 sm:mb-8"
                        >
                            {problems.map((problem, index) => (
                                <li key={index} className="flex items-start gap-2 sm:gap-3 text-slate-300 text-base sm:text-lg leading-relaxed">
                                    <span className="text-red-500 mt-0.5">×</span>
                                    {problem}
                                </li>
                            ))}
                        </motion.ul>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-400 leading-relaxed"
                        >
                            生成AIの使い方はすぐに古くなります。
                            <span className="text-red-400 font-bold block mt-2">
                                ツールを覚えることに価値を置いていると、技術の波に呑まれる。
                            </span>
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
