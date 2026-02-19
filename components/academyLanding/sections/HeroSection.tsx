import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

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
        <section 
            className="relative flex flex-col w-full min-h-[85vh] lg:min-h-[90vh] overflow-hidden"
            style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
        >
            {/* Mobile: Image at top */}
            <div className="lg:hidden relative w-full h-[45vh] min-h-[320px] overflow-hidden">
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
                {/* Thin vertical lines overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(to right, transparent 0, transparent 49%, #000 50%, transparent 51%, transparent 100%)', backgroundSize: '40px 100%' }} 
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f8f7] to-transparent" />
            </div>

            {/* Desktop: Diagonal Background - Image Section */}
            <div className="hidden lg:block absolute top-0 right-0 w-[58%] h-full z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
                    }}
                >
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
                    {/* Thin vertical lines overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" 
                         style={{ backgroundImage: 'linear-gradient(to right, transparent 0, transparent 49%, #000 50%, transparent 51%, transparent 100%)', backgroundSize: '60px 100%' }} 
                    />
                    {/* Refined gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f7] via-[#f8f8f7]/40 to-transparent" />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-12 lg:pt-0 flex flex-1 items-center">
                <div className="w-full lg:max-w-3xl text-center lg:text-left">
                    {/* Section Label */}
                    <div className="mb-8 flex justify-center lg:justify-start">
                        <span className="inline-block py-1 px-3 bg-slate-100 text-[10px] lg:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase rounded-sm">
                            AI Reboot Academy
                        </span>
                    </div>

                    {/* Main Tagline */}
                    <h1 
                        className="text-[clamp(2.25rem,6vw,4.2rem)] font-bold text-slate-900 mb-8 leading-[1.15] tracking-tight"
                        style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
                    >
                        激変する時代に、<br />
                        自分を再起動する
                    </h1>

                    {/* Hero Description with Noto Serif for first part */}
                    <div className="mb-12 space-y-4">
                        <p 
                            className="text-xl lg:text-2xl text-slate-800 font-medium leading-relaxed"
                            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
                        >
                            100日間で、変化する時代を<br className="sm:hidden" />
                            味方につける人材へ
                        </p>
                        <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            生成AI活用 × 自己理解 × 仲間との学び。<br className="hidden lg:block" />
                            AI時代を生き抜く「武器」と「視点」を、<br className="sm:hidden" />
                            体系的に習得する実践プログラム。
                        </p>
                    </div>

                    {/* 3 Pillars Label */}
                    <div className="mb-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
                        {['生成AI活用力', '自己理解・キャリア', '共創コミュニティ'].map((pillar) => (
                            <div key={pillar} className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-orange-500 rounded-full" />
                                <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">{pillar}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
                        <a
                            href="https://bexn9pao.autosns.app/line"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-bold text-white bg-[#06C755] hover:bg-[#05b54d] rounded-lg transition-all duration-300 shadow-sm"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                            </svg>
                            公式LINEで無料相談
                        </a>
                        <Link
                            href="/academy/seminars"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 rounded-lg transition-all duration-300"
                        >
                            オンライン説明会に参加
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start opacity-80">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/keisan-reskiling-logo.webp"
                                alt="リスキリング補助金"
                                width={120}
                                height={48}
                                className="h-10 w-auto object-contain grayscale brightness-90"
                            />
                            <p className="text-[10px] text-slate-500 font-medium leading-tight">
                                経済産業省認定<br />
                                リスキリング講座
                            </p>
                        </div>
                        <Link
                            href="/corporate"
                            className="text-xs text-slate-500 underline underline-offset-4 hover:text-slate-800 transition-colors"
                        >
                            法人・導入検討の方はこちら
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
