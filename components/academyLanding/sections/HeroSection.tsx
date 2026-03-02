"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      className="relative flex min-h-[85vh] w-full flex-col overflow-hidden lg:min-h-[90vh]"
      style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
    >
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden lg:hidden">
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
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 0, transparent 49%, rgba(15,23,42,0.35) 50%, transparent 51%, transparent 100%)",
            backgroundSize: "40px 100%",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            backgroundImage: `linear-gradient(to top, ${ACADEMY_COLORS.bgCanvas} 0%, rgba(248, 248, 247, 0) 100%)`,
          }}
        />
      </div>

      <div className="absolute right-0 top-0 z-0 hidden h-full w-[58%] lg:block">
        <div className="absolute inset-0" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}>
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
            >
              <Image src={src} alt={`AI Reboot Academy Scene ${index + 1}`} fill className="object-cover" priority={index === 0} />
            </div>
          ))}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent 0, transparent 49%, rgba(15,23,42,0.35) 50%, transparent 51%, transparent 100%)",
              backgroundSize: "60px 100%",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, ${ACADEMY_COLORS.bgCanvas} 0%, rgba(248, 248, 247, 0.45) 40%, rgba(248, 248, 247, 0) 100%)`,
            }}
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-1 items-center px-5 pt-8 sm:px-6 sm:pt-10 lg:px-12 lg:pt-0">
        <div className="w-full text-center lg:max-w-3xl lg:text-left">
          <div className="mb-5 flex justify-center sm:mb-8 lg:justify-start">
            <span
              className="inline-block rounded-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] lg:text-xs"
              style={{ backgroundColor: ACADEMY_COLORS.bgSection, color: ACADEMY_COLORS.textMuted }}
            >
              AI Reboot Academy
            </span>
          </div>

          <h1
            className="mb-6 text-[clamp(1.9rem,6.8vw,3.8rem)] font-bold leading-[1.22] tracking-tight sm:mb-8"
            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif, color: ACADEMY_COLORS.textStrong }}
          >
            激変する時代に、<br />
            自分を再起動する
          </h1>

          <div className="mb-8 space-y-3 sm:mb-10 sm:space-y-4">
            <p
              className="text-lg font-medium leading-relaxed sm:text-xl sm:leading-loose lg:text-2xl"
              style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif, color: ACADEMY_COLORS.textStrong }}
            >
              100日間で、変化する時代を味方につける。<br className="sm:hidden" />
              自分の可能性を再設計する。
            </p>
            <p className="mx-auto max-w-xl text-[15px] leading-relaxed sm:text-base sm:leading-loose lg:mx-0 lg:text-lg" style={{ color: ACADEMY_COLORS.textBody }}>
              2日間の集中キャンプから始まり、実践と対話を重ねる100日間で、AI時代に通用する思考と行動を定着させます。
            </p>
          </div>

          <p
            className="mb-6 text-xs font-bold tracking-wider lg:text-sm"
            style={{ color: ACADEMY_COLORS.accentMain, fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
          >
            生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境
          </p>

          <div className="mb-10 flex flex-col items-stretch gap-3 sm:mb-12 sm:flex-row sm:items-center sm:gap-4 lg:items-start">
            <Link
              href="/briefing?src=academy-hero"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg px-10 py-4 text-base font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: ACADEMY_COLORS.ctaLine }}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              公式LINEで無料相談
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex w-full items-center justify-center rounded-lg border px-8 py-4 text-base font-bold transition-opacity hover:opacity-80 sm:w-auto"
              style={{
                backgroundColor: ACADEMY_COLORS.bgPanel,
                borderColor: ACADEMY_COLORS.lineSoft,
                color: ACADEMY_COLORS.textBody,
              }}
            >
              オンライン説明会に参加
            </Link>
          </div>


          <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-start">
            <div className="flex items-center gap-4">
              <Image
                src="/images/keisan-reskiling-logo.webp"
                alt="リスキリング補助金"
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
              />
              <p className="text-[10px] font-medium leading-tight" style={{ color: ACADEMY_COLORS.textMuted }}>
                経済産業省認定
                <br />
                リスキリング講座
              </p>
            </div>
            <Link
              href="/corporate"
              className="border-b pb-1 text-xs transition-opacity hover:opacity-70"
              style={{ color: ACADEMY_COLORS.textMuted, borderColor: ACADEMY_COLORS.lineSoft }}
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
