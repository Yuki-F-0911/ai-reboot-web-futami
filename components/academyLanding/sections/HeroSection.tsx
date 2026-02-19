"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/images/hero-slide-v2-1.jpg",
    "/images/hero-slide-v2-2.jpg",
    "/images/hero-slide-v2-3.jpg",
    "/images/hero-slide-v2-4.jpg",
];

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex flex-col w-full min-h-[85vh] lg:min-h-screen overflow-hidden bg-slate-950 text-white">
            {/* Background Images Overlay */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt={`AI Reboot Academy Scene ${currentImageIndex + 1}`}
                            fill
                            className="object-cover object-center filter grayscale-[30%] contrast-[110%]"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Vignette & Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-5 md:px-6 lg:px-8 flex flex-1 items-center justify-center text-center">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Main Tagline - 圧倒的なタイポグラフィ */}
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-[1.05] tracking-tighter">
                            <span className="sr-only">AIリブートアカデミー｜経産省認定リスキリング講座で生成AIスキルを習得</span>
                            <span aria-hidden="true" className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                                激変する時代に、<br />
                                自分を再起動する
                            </span>
                        </h1>

                        {/* Sub Tagline */}
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 mb-8 tracking-tight">
                            100日間で、変化を味方につける人材へ
                        </p>

                        {/* Description */}
                        <div className="text-base sm:text-lg text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                            <p className="hidden sm:block">
                                生成AI活用 × マーケティング × コミュニケーション × キャリアデザイン
                            </p>
                            <p className="sm:hidden">
                                生成AI活用 × マーケティング<br />× コミュニケーション × キャリアデザイン
                            </p>
                            <p className="mt-2 font-medium text-slate-300">
                                AI時代に活躍する人材に、いち早くなる。
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <a
                                href="https://bexn9pao.autosns.app/line"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white bg-[#06C755] hover:bg-[#05b54d] rounded-full transition-all duration-300 shadow-2xl shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                まずはLINEで相談
                            </a>
                            <Link
                                href="/academy/seminars"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-transparent border-2 border-white/30 hover:border-orange-500 hover:bg-orange-500/10 rounded-full transition-all duration-300"
                            >
                                または説明会に参加
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-8 justify-center opacity-80">
                            <Image
                                src="/images/keisan-reskiling-logo.webp"
                                alt="リスキリング補助金"
                                width={140}
                                height={56}
                                className="h-12 w-auto object-contain brightness-0 invert"
                            />
                            <div className="text-left">
                                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">
                                    Certified by METI
                                </p>
                                <p className="text-sm text-slate-200 font-bold">
                                    経済産業省認定 リスキリング講座
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
};

export default HeroSection;
