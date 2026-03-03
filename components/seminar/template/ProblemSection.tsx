"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const defaultProblems = [
    "今の仕事や働き方にモヤモヤを感じている",
    "自分には特別な強みがない気がする",
    "生成AIを学んでも、どう活かせばいいかわからない",
    "このままでいいのか、将来が不安",
];

const defaultHeadline = "AIを学んで終わり、にしていませんか？";
const defaultClosing =
    "生成AIの使い方はすぐに古くなります。ただツールを使えるだけでは、これからの時代、武器にはなりません。";

type ProblemSectionProps = {
    headline?: string;
    items?: string[];
    closing?: string;
};

const ProblemSection = ({ headline, items, closing }: ProblemSectionProps) => {
    const problems = items ?? defaultProblems;
    const headlineText = headline ?? defaultHeadline;
    const closingText = closing ?? defaultClosing;

    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                            <Image
                                src="/images/seminar/career-breakthrough.png"
                                alt="キャリアの閉塞感からの脱出"
                                fill
                                className="object-contain"
                            />
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
                            <p className="text-orange-500 font-bold text-base tracking-wider mb-3 sm:mb-4">
                                PROBLEM
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                                {headlineText}
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
                                <li key={index} className="flex items-start gap-2 sm:gap-3 text-slate-600 text-base sm:text-lg leading-relaxed">
                                    <span className="text-slate-400 mt-0.5">•</span>
                                    {problem}
                                </li>
                            ))}
                        </motion.ul>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-600 leading-relaxed"
                        >
                            {closingText.split("ただツールを使えるだけでは").length > 1 ? (
                                <>
                                    生成AIの使い方はすぐに古くなります。
                                    <span className="text-red-600 font-bold">
                                        ただツールを使えるだけでは、これからの時代、武器にはなりません。
                                    </span>
                                </>
                            ) : (
                                <span className="text-red-600 font-bold">{closingText}</span>
                            )}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
