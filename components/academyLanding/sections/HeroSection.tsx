"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
    "/images/hero-slide-v2-1.png",
    "/images/hero-slide-v2-2.png",
    "/images/hero-slide-v2-3.png",
    "/images/hero-slide-v2-4.png",
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
        <section className="relative w-full min-h-screen overflow-hidden bg-slate-50">
            {/* Mobile: Image at top */}
            <div className="lg:hidden relative w-full h-[40vh] overflow-hidden">
                {heroImages.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                    >
                        <Image
                            src={src}
                            alt={`AI Reboot Academy Scene ${index + 1}`}
                            fill
                            className="object-cover object-center"
                            priority={index === 0}
                        />
                    </div>
                ))}
                {/* Gradient overlay for smooth transition to content */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
            </div>

            {/* Desktop: Diagonal Background - Image Section */}
            <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0">
                {/* Diagonal Clip */}
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
                    }}
                >
                    {/* Carousel Images */}
                    {heroImages.map((src, index) => (
                        <div
                            key={src}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                        >
                            <Image
                                src={src}
                                alt={`AI Reboot Academy Scene ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-transparent to-transparent" />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-6 lg:pt-28 pb-12 lg:pb-16 lg:min-h-screen flex items-center">
                <div className="w-full lg:max-w-2xl text-center lg:text-left">
                    {/* Tagline Badge */}
                    <div className="inline-block mb-6">
                        <span className="inline-flex items-center px-4 py-2 text-sm font-bold text-orange-600 bg-orange-50 border border-orange-200 rounded">
                            経済産業省認定リスキリング補助金対象講座
                        </span>
                    </div>

                    {/* Sub Heading */}
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                        激変する時代に、自分を再起動する
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight">
                        AI REBOOT
                        <br />
                        ACADEMY
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">エーアイリブートアカデミー</p>

                    {/* Orange Highlight Text */}
                    <p className="text-lg sm:text-xl md:text-xl font-bold text-orange-500 mb-4">
                        100日間で、変化する時代を<br className="sm:hidden" />味方につける人材へ
                    </p>

                    {/* Description */}
                    <p className="text-base sm:text-base text-slate-600 mb-8 leading-relaxed">
                        <span className="hidden sm:inline">生成AI活用 × マーケティング × コミュニケーション × キャリアデザイン</span>
                        <span className="sm:hidden">生成AI活用 × マーケティング<br />× コミュニケーション × キャリアデザイン</span>
                        <br />
                        AI時代に活躍する人材に、いち早くなる。
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                        <Link
                            href="/briefing"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-all duration-300 shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300"
                        >
                            無料説明会に参加
                        </Link>
                        <a
                            href="https://line.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#06C755] hover:bg-[#05b54d] rounded-full transition-all duration-300 shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                            </svg>
                            LINEで相談
                        </a>
                    </div>

                    {/* Sub Link */}
                    <p className="text-sm text-slate-500 mb-6 underline underline-offset-4 cursor-pointer hover:text-slate-700">
                        法人向けはこちら
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                        <div className="h-12 w-auto">
                            <Image
                                src="/images/keisan-reskiling-logo-darkbg.webp"
                                alt="リスキリング補助金"
                                width={120}
                                height={48}
                                className="h-full w-auto object-contain p-1.5 bg-slate-800 rounded"
                            />
                        </div>
                        <div className="h-px w-8 bg-slate-300 hidden sm:block" />
                        <p className="text-xs text-slate-500 font-medium">
                            経済産業省認定
                            <br />
                            リスキリング講座
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
