"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ConceptSection = () => {
    const pillars = [
        {
            id: "01",
            title: "生成AI活用",
            description: "AI時代に仕事のやり方をアップデートするスキル",
            icon: "🤖",
            illustration: "/images/mindset-illustration.png"
        },
        {
            id: "02",
            title: "マーケティング",
            description: "価値を届け、人を動かすための戦略的思考力",
            icon: "📈",
            illustration: "/images/skills-illustration.png"
        },
        {
            id: "03",
            title: "コミュニケーション",
            description: "AIでは代替できない、人を巻き込み動かす力",
            icon: "💬",
            illustration: "/images/community-illustration.png"
        },
        {
            id: "04",
            title: "キャリアデザイン",
            description: "自分の未来を描き直し、新しいステージへ踏み出す設計力",
            icon: "🎯",
            illustration: "/images/career-design-illustration.png"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16 md:mb-24 space-y-4 md:space-y-6"
                >
                    <p className="text-orange-500 font-bold text-sm tracking-widest uppercase">
                        CONCEPT
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                        生成AIを学ぶ場所ではない。<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                            人生をリブートする場所。
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium">
                        AIリブートアカデミーは、生成AIで激変する時代に適応し、<br className="hidden md:block" />
                        飛躍する自分になるために、人生をリブートする場所です。
                    </p>
                    <Link
                        href="/academy/message"
                        className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-orange-400 hover:text-orange-300 font-bold transition-all group"
                    >
                        <span>私たちのメッセージを読む</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </motion.div>

                {/* Four Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl hover:bg-slate-800 hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden group"
                        >
                            {/* Background Decoration */}
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 h-full flex flex-col">
                                {/* Illustration */}
                                <div className="w-full h-32 md:h-40 mb-6 flex items-center justify-center">
                                    <Image
                                        src={pillar.illustration}
                                        alt={pillar.title}
                                        width={160}
                                        height={140}
                                        className="object-contain group-hover:scale-110 transition-transform duration-500 brightness-110 w-24 h-24 md:w-auto md:h-auto"
                                    />
                                </div>

                                {/* Number Badge */}
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 font-black text-sm mb-6 border border-orange-500/20">
                                    {pillar.id}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-base text-slate-400 leading-relaxed font-medium">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConceptSection;
