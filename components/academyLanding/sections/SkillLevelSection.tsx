import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY, ACADEMY_SPACING } from "./academyDesignTokens";

const levels = [
  {
    id: "01",
    level: "LEVEL 01",
    title: "AI基礎力",
    subtitle: "AIを自分事と捉え、変革に向けて行動できるレベル",
    action: "ChatGPT・Claude・Geminiなど主要なAIツールを毎日触り、使い方を試しながら自分の言葉でAIを動かす習慣をつくる。",
    goal: "AIを「難しいもの」から「使えるもの」へ。変化のスタートラインに立つ。",
  },
  {
    id: "02",
    level: "LEVEL 02",
    title: "AI活用力",
    subtitle: "AIを活用して業務効率化・価値創出ができるレベル",
    action: "自分の業務を棚卸しし、AIで代替・補助できるタスクを特定。実際に組み込んで動かし、仕事のやり方を再設計する。",
    goal: "単なる効率化ではなく、「AIと一緒に働く感覚」を体に染み込ませる。",
  },
  {
    id: "03",
    level: "LEVEL 03",
    title: "AI共創力",
    subtitle: "AIと共に新しい価値を創り出せるレベル",
    action: "自分の強みと価値観を言語化し、AIを使って独自の視点や提供価値を設計・発信できるようにする。",
    goal: "AI時代に、自分らしく活躍できる場所と役割を自分の手でつくる。",
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
            100日後に目指す3つの変化
          </h2>
          <p className="max-w-2xl leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
            3段階の能力定義に沿って、AIを触る段階から、仕事に組み込み、自分の価値として語れる段階まで進めます。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {levels.map((item) => (
            <div
              key={item.id}
              className="relative grid grid-rows-[auto_auto_1fr_auto] overflow-hidden rounded-sm border p-8 sm:grid-rows-subgrid sm:row-span-4"
              style={{
                borderColor: ACADEMY_COLORS.lineSoft,
                backgroundColor: ACADEMY_COLORS.bgPanel,
              }}
            >
              <span
                className="pointer-events-none absolute -top-2 right-4 select-none text-6xl font-bold leading-none opacity-[0.07]"
                style={{
                  fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                  color: ACADEMY_COLORS.textStrong,
                }}
                aria-hidden="true"
              >
                {item.id}
              </span>

              <div className="relative z-10">
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.accentDeep,
                  }}
                >
                  {item.level}
                </p>
                <h3 className="mb-2 text-xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-loose" style={{ color: ACADEMY_COLORS.textMuted }}>
                  {item.subtitle}
                </p>
              </div>

              <div className="relative z-10 border-t pt-4 mt-6" style={{ borderColor: ACADEMY_COLORS.lineStrong }}>
                <p
                  className="mb-2 text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.accentMain,
                  }}
                >
                  Action
                </p>
                <p className="text-sm leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
                  {item.action}
                </p>
              </div>

              <div className="relative z-10 border-t pt-4 mt-4" style={{ borderColor: ACADEMY_COLORS.lineStrong }}>
                <p
                  className="mb-2 text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.textMuted,
                  }}
                >
                  Goal
                </p>
                <p className="text-sm leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
                  {item.goal}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillLevelSection;
