import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const FinalCtaSection = () => {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}>
      <div className="container mx-auto max-w-5xl px-6 lg:px-12">
        <div className="mb-10 h-px w-full" style={{ backgroundColor: ACADEMY_COLORS.lineStrong }} />

        <span
          className="mb-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{
            fontFamily: ACADEMY_TYPOGRAPHY.numeric,
            color: ACADEMY_COLORS.accentMain,
          }}
        >
          Final Call
        </span>

        <h2
          className="mb-8 text-4xl font-bold leading-tight lg:text-6xl"
          style={{
            fontFamily: ACADEMY_TYPOGRAPHY.serif,
            color: ACADEMY_COLORS.textStrong,
          }}
        >
          人生を、リブートする。
        </h2>

        <p className="mb-8 max-w-3xl text-base leading-loose lg:text-lg" style={{ color: ACADEMY_COLORS.textBody }}>
          生成AI活用力・自己理解とキャリアデザイン・仲間と共に学ぶ環境。3つの軸を100日間で接続し、次の仕事と生き方を具体化していきます。
        </p>

        <div className="mb-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <a
            href="https://bexn9pao.autosns.app/line"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg px-12 py-4 text-base font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
            style={{ backgroundColor: ACADEMY_COLORS.ctaLine }}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            公式LINEで無料相談
          </a>

          <a
            href="/academy/seminars"
            className="inline-flex items-center gap-2 border-b pb-1 text-sm font-bold transition-opacity hover:opacity-70"
            style={{
              color: ACADEMY_COLORS.textStrong,
              borderColor: ACADEMY_COLORS.textStrong,
            }}
          >
            <span>オンライン説明会に参加</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <p className="text-xs leading-loose" style={{ color: ACADEMY_COLORS.textMuted }}>
          ※ 無理な勧誘は一切ありません。現在のキャリアや学習方針の整理だけでも歓迎しています。
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
