import Image from "next/image";
import Link from "next/link";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY, ACADEMY_SPACING } from "./academyDesignTokens";

const elements = [
  {
    id: "01",
    title: "生成AI活用",
    description: "AI時代に仕事のやり方をアップデートする実務スキルを磨く領域。",
    details: ["プロンプトエンジニアリング", "AIマーケティング", "実務自動化"],
    illustration: "/images/mindset-illustration.png",
  },
  {
    id: "02",
    title: "マーケティング",
    description: "AI時代にこそ求められる、価値を届け人を動かす戦略思考を身につける領域。",
    details: ["マーケティング戦略", "コピーライティング", "データ分析"],
    illustration: "/images/skills-illustration.png",
  },
  {
    id: "03",
    title: "コミュニケーション",
    description: "AIでは代替できない、対話と共創の推進力を鍛える領域。",
    details: ["プレゼンテーション", "チームビルディング", "対話力"],
    illustration: "/images/community-illustration.png",
  },
  {
    id: "04",
    title: "キャリアデザイン",
    description: "自分の価値観と強みを再定義し、次のキャリアを設計する領域。",
    details: ["強みの言語化", "価値観の再構築", "ビジョン設計"],
    illustration: "/images/career-design-illustration.png",
  },
];

const ConceptSection = () => {
  return (
    <section className={ACADEMY_SPACING.sectionPy} style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}>
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <span
            className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.accentMain,
            }}
          >
            Concept
          </span>
          <p className="mb-3 text-sm font-medium" style={{ color: ACADEMY_COLORS.textMuted }}>
            生成AIを学ぶ場所ではない。人生をリブートする場所。
          </p>
          <h2
            className="mb-6 text-3xl font-bold leading-tight lg:text-5xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            AIを学ぶだけで終わらない。<br />
            仕事とキャリアまで組み替える。
          </h2>
          <p className="mb-6 max-w-3xl text-base leading-loose lg:text-lg" style={{ color: ACADEMY_COLORS.textBody }}>
            生成AI活用力・自己理解・仲間との学び。この3つを軸に、理解と実践を繰り返しながら、自ら手を動かし変化を習慣に落とし込みます。AIリブートは、知識を増やすだけではなく、仕事のやり方とキャリアの選び方を変えるための設計です。
          </p>
          <p
            className="mb-6 text-xs font-bold tracking-wider lg:text-sm"
            style={{ color: ACADEMY_COLORS.accentMain, fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
          >
            生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境
          </p>
          <Link
            href="/academy/message"
            className="inline-flex items-center gap-2 border-b pb-1 text-sm font-bold transition-opacity hover:opacity-70"
            style={{
              color: ACADEMY_COLORS.textStrong,
              borderColor: ACADEMY_COLORS.textStrong,
            }}
          >
            <span>私たちのメッセージを読む</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {elements.map((element) => (
            <div
              key={element.id}
              className="relative overflow-hidden rounded-sm border p-8"
              style={{
                borderColor: ACADEMY_COLORS.lineSoft,
                backgroundColor: ACADEMY_COLORS.bgCanvas,
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
                {element.id}
              </span>

              <div className="relative z-10 [text-shadow:0_0_12px_var(--card-bg),0_0_24px_var(--card-bg),0_0_40px_var(--card-bg)]" style={{ '--card-bg': ACADEMY_COLORS.bgCanvas } as React.CSSProperties}>
                <h3 className="mb-3 text-xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                  {element.title}
                </h3>
                <p className="mb-5 text-sm leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
                  {element.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {element.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-sm border px-2 py-1 text-[10px]"
                      style={{
                        borderColor: ACADEMY_COLORS.lineSoft,
                        color: ACADEMY_COLORS.textMuted,
                        backgroundColor: ACADEMY_COLORS.bgPanel,
                      }}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-40">
                <Image
                  src={element.illustration}
                  alt=""
                  width={120}
                  height={120}
                  className="h-[120px] w-[120px] object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
