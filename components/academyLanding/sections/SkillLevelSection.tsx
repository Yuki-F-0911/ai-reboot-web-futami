import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY, ACADEMY_SPACING } from "./academyDesignTokens";

const levels = [
  {
    id: "01",
    level: "LEVEL 01",
    title: "AI基礎力",
    subtitle: "AIを自分事と捉え、変革に向けて行動できるレベル",
    definition:
      "生成AIの基礎知識を習得し、AIを恐れず活用する姿勢を身につけます。100日間の挑戦のスタートラインです。",
    program: {
      title: "AI時代のマインドセット形成",
      action: "主要AIツールの特性理解と、継続的な学習習慣の確立",
    },
  },
  {
    id: "02",
    level: "LEVEL 02",
    title: "AI活用力",
    subtitle: "AIを活用して業務効率化・価値創出ができるレベル",
    definition:
      "ChatGPT、Claude、Geminiなど複数の生成AIを使いこなし、自分の仕事にAIを実装。生産性を飛躍的に向上させます。",
    program: {
      title: "実践的なAI共創スキル",
      action: "プロンプトエンジニアリングの深化と業務フローの再設計",
    },
  },
  {
    id: "03",
    level: "LEVEL 03",
    title: "AI共創力",
    subtitle: "AIと共に新しい価値を創り出せるレベル",
    definition:
      "あなたの「やりたい」をAIと共に形にする力を養成。AI時代のリーダーとして活躍できる人材を目指します。",
    program: {
      title: "Will実現のためのキャリアデザイン",
      action: "自己理解の深化と、AI時代における独自の提供価値確立",
    },
  },
];

const SkillLevelSection = () => {
  return (
    <section className={ACADEMY_SPACING.sectionPy} style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}>
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <span
            className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.accentMain,
            }}
          >
            Growth Steps
          </span>
          <h2
            className="mb-6 text-3xl font-bold leading-tight lg:text-4xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            AIスキルの成長ステップ
          </h2>
          <p className="max-w-2xl leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
            3段階の能力定義に沿って、実務力と自己理解を同時に深める構造です。
          </p>
        </div>

        <ol className="border-b" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
          {levels.map((item) => (
            <li
              key={item.id}
              className="grid gap-8 border-t py-10 lg:grid-cols-12 lg:gap-12 lg:py-12"
              style={{ borderColor: ACADEMY_COLORS.lineSoft }}
            >
              <div className="lg:col-span-5">
                <span
                  className="mb-4 inline-block text-xs font-bold tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.accentDeep,
                  }}
                >
                  {item.level}
                </span>
                <h3 className="mb-3 text-xl font-bold lg:text-2xl" style={{ color: ACADEMY_COLORS.textStrong }}>
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-loose" style={{ color: ACADEMY_COLORS.textMuted }}>
                  {item.subtitle}
                </p>
                <p className="text-sm leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
                  {item.definition}
                </p>
              </div>

              <div className="grid gap-6 lg:col-span-7 lg:grid-cols-2">
                <div className="border-t pt-4" style={{ borderColor: ACADEMY_COLORS.lineStrong }}>
                  <p
                    className="mb-3 text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                      color: ACADEMY_COLORS.textMuted,
                    }}
                  >
                    Program
                  </p>
                  <p className="text-base font-bold leading-loose" style={{ color: ACADEMY_COLORS.textStrong }}>
                    {item.program.title}
                  </p>
                </div>
                <div className="border-t pt-4" style={{ borderColor: ACADEMY_COLORS.lineStrong }}>
                  <p
                    className="mb-3 text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                      color: ACADEMY_COLORS.textMuted,
                    }}
                  >
                    Action / Goal
                  </p>
                  <p className="text-sm leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
                    {item.program.action}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-end">
          <Image
            src="/images/skill-pyramid-illustration.png"
            alt="スキル成長ピラミッド"
            width={180}
            height={180}
            className="h-auto w-auto object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillLevelSection;
