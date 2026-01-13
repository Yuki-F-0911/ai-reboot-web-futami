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
        <section className="py-12 md:py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/seminar/thinking-os-visual.png"
                    alt=""
                    fill
                    className="object-cover opacity-5"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-100/50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-100/40 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-orange-500 font-bold text-sm tracking-wider mb-3 sm:mb-4">
                            SOLUTION
                        </p>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
                            必要なのは、AIを使いこなすための「思考OS」のアップデート
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex justify-center py-4 sm:py-6"
                    >
                        <div className="relative w-48 sm:w-64 md:w-80 aspect-square">
                            <Image
                                src="/images/seminar/thinking-os-visual.png"
                                alt="思考OSのアップデート"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
                    >
                        本セミナーではツールの操作説明はしません。しかし、参加後にはAIを使いこなす土台が完成します。
                    </motion.p>
                </div>

                {/* Curriculum Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 text-center mb-6 sm:mb-8">
                        <span className="text-orange-500">CURRICULUM</span>
                        {"　"}セミナー内容
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                        {curriculum.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.05 * index }}
                                className="group p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-orange-200 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50"
                            >
                                <div className="text-orange-500/60 text-xs font-bold tracking-wider mb-2 sm:mb-3">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
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
