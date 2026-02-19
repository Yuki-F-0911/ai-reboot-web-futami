import Image from "next/image";
import Link from "next/link";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const corePillars = [
  "生成AI活用力",
  "自己理解・キャリアデザイン",
  "仲間と共に学ぶ環境",
];

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
    description: "価値を届け、人を動かすための戦略思考を身につける領域。",
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
    <section className="py-24 lg:py-32" style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}>
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
          <h2
            className="mb-6 text-3xl font-bold leading-tight lg:text-5xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            生成AIを学ぶ場所ではない。<br />
            人生をリブートする場所。
          </h2>
          <p className="mb-6 max-w-3xl text-base leading-loose lg:text-lg" style={{ color: ACADEMY_COLORS.textBody }}>
            AIリブートアカデミーは、スキル習得だけで終わらないための設計です。3本柱を軸に、4つの実践領域で手を動かしながら変化を定着させます。
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

        <div className="mb-12 border-y py-4" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
          <p
            className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.accentMain,
            }}
          >
            3 Pillars
          </p>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
            {corePillars.map((pillar, index) => (
              <p key={pillar} className="text-sm font-medium leading-loose lg:text-base" style={{ color: ACADEMY_COLORS.textStrong }}>
                {pillar}
                {index < corePillars.length - 1 && (
                  <span className="ml-4 hidden lg:inline" style={{ color: ACADEMY_COLORS.lineStrong }}>
                    /
                  </span>
                )}
              </p>
            ))}
          </div>
        </div>

        <ol className="border-t" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
          {elements.map((element) => (
            <li
              key={element.id}
              className="grid gap-6 border-b py-8 lg:grid-cols-12 lg:gap-10 lg:py-10"
              style={{ borderColor: ACADEMY_COLORS.lineSoft }}
            >
              <div className="lg:col-span-7">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="text-xs font-bold tracking-widest"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                      color: ACADEMY_COLORS.accentMain,
                    }}
                  >
                    ELEMENT {element.id}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold lg:text-2xl" style={{ color: ACADEMY_COLORS.textStrong }}>
                  {element.title}
                </h3>
                <p className="mb-4 text-sm leading-loose lg:text-base" style={{ color: ACADEMY_COLORS.textBody }}>
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
                        backgroundColor: ACADEMY_COLORS.bgCanvas,
                      }}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  className="inline-flex rounded-md border p-4"
                  style={{
                    borderColor: ACADEMY_COLORS.lineSoft,
                    backgroundColor: ACADEMY_COLORS.bgCanvas,
                  }}
                >
                  <Image
                    src={element.illustration}
                    alt={element.title}
                    width={170}
                    height={140}
                    className="h-auto w-auto object-contain"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ConceptSection;
