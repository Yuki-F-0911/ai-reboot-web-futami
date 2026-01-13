"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const curriculum = [
    "生成AIは単なる技術のイノベーションでは終わらない理由",
    "便利すぎる生成AI革命が引き起こす不都合な真実",
    "生成AIが「働く」をどう変えていくのか？",
    "知っている人だけがハックできるこれからくる波",
    "今なら（今だけ）学歴も社歴もリセットできる",
    "生成AIツールの使い方を学んでもダメな理由",
    "生成AIを使いこなすための「思考OS」",
    "100日でキャリア下剋上を起こす方法",
];

const SolutionSection = () => {
    return (
        <section className="py-20 md:py-28 bg-[#0d1117] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-purple-400 font-bold text-sm tracking-wider mb-4">
                            SOLUTION
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            必要なのは、AIを使いこなすための
                            <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                「思考OS」のアップデート
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="relative w-full max-w-xs aspect-square">
                            <Image
                                src="/images/seminar/thinking-os-visual.png"
                                alt="思考OSのアップデート"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        本セミナーではツールの操作説明はしません。
                        <br />
                        しかし、参加後にはAIを使いこなす土台が完成します。
                    </motion.p>
                </div>

                {/* Curriculum Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-xl font-bold text-white text-center mb-8">
                        <span className="text-purple-400">CURRICULUM</span>
                        {"　"}セミナー内容
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {curriculum.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                className="group p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                            >
                                <div className="text-purple-400/60 text-xs font-bold tracking-wider mb-3">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <p className="text-white font-medium text-sm leading-relaxed">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionSection;
