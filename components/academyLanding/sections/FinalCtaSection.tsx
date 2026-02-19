import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const FinalCtaSection = () => {
    return (
        <section 
            className="py-24 lg:py-40"
            style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                <div className="max-w-3xl">
                    <span 
                        className="inline-block text-[10px] tracking-[0.2em] font-bold uppercase mb-8"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                            color: ACADEMY_COLORS.accentMain 
                        }}
                    >
                        Conclusion
                    </span>
                    
                    <h2 
                        className="text-4xl lg:text-7xl font-bold leading-tight mb-12"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.serif,
                            color: ACADEMY_COLORS.textStrong
                        }}
                    >
                        人生を、<br className="lg:hidden" />リブートする。
                    </h2>
                    
                    <p 
                        className="text-lg lg:text-2xl leading-loose mb-16 font-medium"
                        style={{ color: ACADEMY_COLORS.textBody }}
                    >
                        生成AI活用 × 自己理解 × 共創コミュニティ。<br className="hidden lg:block" />
                        100日間で、AI時代に自らの価値を再定義し、<br className="sm:hidden" />
                        新しい未来へ踏み出す準備はできましたか？
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12">
                        <a
                            href="https://bexn9pao.autosns.app/line"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold text-white hover:opacity-90 rounded-lg transition-all duration-300 shadow-sm"
                            style={{ backgroundColor: ACADEMY_COLORS.ctaLine }}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                            </svg>
                            公式LINEで無料相談
                        </a>
                        
                        <a
                            href="/academy/seminars"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-white border hover:bg-stone-50 rounded-lg transition-all duration-300"
                            style={{ 
                                borderColor: ACADEMY_COLORS.lineSoft,
                                color: ACADEMY_COLORS.textStrong
                            }}
                        >
                            オンライン説明会に参加
                        </a>
                    </div>
                    
                    <p 
                        className="text-xs leading-loose"
                        style={{ color: ACADEMY_COLORS.textMuted }}
                    >
                        ※ 無理な勧誘は一切ございません。現在のキャリアのお悩み相談だけでも歓迎です。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;
