"use client";

import { motion } from "framer-motion";

const features = [
    {
        num: "01",
        title: "GeminiとNotebookLMの使い分けがわかる",
        description:
            "Geminiは何でも聞ける万能アシスタント、NotebookLMは自分の資料に特化した専門家。この違いを理解するだけで、AIの活用効率が変わります。",
    },
    {
        num: "02",
        title: "自分専用の「相談AI」を作れるようになる",
        description:
            "NotebookLMに資料やWebサイトを読み込ませるだけで、その情報をもとに回答してくれるAIが完成。企業研究や知識整理にすぐ使えます。",
    },
    {
        num: "03",
        title: "明日の仕事にそのまま持ち帰れる",
        description:
            "見て終わりではなく、講師と一緒に手を動かすシャドーイング形式。会議メモ、調査、資料作成など、自分の仕事に引き寄せて持ち帰れます。",
    },
];

const agenda = [
    {
        step: "1",
        title: "全体像をつかむ",
        time: "20分",
        description: "GeminiとNotebookLMの違い・向いている場面を整理",
    },
    {
        step: "2",
        title: "一緒に手を動かす",
        time: "30分",
        description: "講師と同じ画面で実際に操作するシャドーイング形式",
    },
    {
        step: "3",
        title: "使い道を決める",
        time: "10分",
        description: "自分の仕事にどう活かすかまで落とし込んで終了",
    },
];

const targets = [
    "AIが気になるけれど、何から始めればいいか分からない",
    "ChatGPTは触ったことがあるが、GeminiやNotebookLMは未経験",
    "仕事で使えるところまで、短時間で一気に理解したい",
];

const FeatureSection = () => (
    <>
        {/* Features */}
        <section className="py-12 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-orange-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-100/30 rounded-full blur-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
                >
                    <p className="text-orange-500 font-bold text-base tracking-wider mb-3 sm:mb-4">
                        FEATURES
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
                        このセミナーで得られること
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        「見て終わり」ではなく、手を動かす60分
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.05 * i }}
                            className="group p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-orange-200 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50"
                        >
                            <div className="text-orange-500/60 text-sm font-bold tracking-wider mb-3">
                                {f.num}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                                {f.title}
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                {f.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Agenda */}
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <p className="text-orange-500 font-bold text-base tracking-wider mb-3 sm:mb-4">
                        AGENDA
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        セミナーの流れ
                    </h2>
                </motion.div>

                <div className="space-y-3 sm:space-y-4">
                    {agenda.map((a, i) => (
                        <motion.div
                            key={a.step}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:border-orange-200 transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-200">
                                <span className="text-white text-sm sm:text-base font-bold">
                                    {a.step}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                                        {a.title}
                                    </h3>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-600 text-xs sm:text-sm font-medium">
                                        {a.time}
                                    </span>
                                </div>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    {a.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Target */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-orange-50 via-white to-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
                                         radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
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
                        こんな方におすすめ
                    </h2>
                </motion.div>

                <div className="space-y-2 sm:space-y-3">
                    {targets.map((target, i) => (
                        <motion.div
                            key={target}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:border-orange-200 transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-200">
                                <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed">
                                {target}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-8 sm:mt-12"
                >
                    <p className="text-slate-600 text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                        一つでも当てはまる方は、ぜひご参加ください。
                    </p>
                    <a
                        href="#register"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl"
                    >
                        申し込む
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    </>
);

export default FeatureSection;
