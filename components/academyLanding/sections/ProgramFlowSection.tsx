import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY, ACADEMY_SPACING } from "./academyDesignTokens";

const steps = [
  {
    id: "01",
    label: "STEP 01",
    title: "AIリブートキャンプ",
    description:
      "仲間と共に集中的に学ぶ2日間。生成AIの本質を理解し、100日間の挑戦で何を変えるかを明確にします。",
    items: ["マインドセットの解体", "AI活用の第一歩", "共創コミュニティ形成"],
    illustration: "/images/bootcamp-illustration.png",
  },
  {
    id: "02",
    label: "STEP 02",
    title: "AIリブート100",
    description:
      "最新のAI活用事例と実践的なワークショップ。一人ひとりの課題に寄り添うフィードバックで、仕事への実装を進めます。",
    items: [
      "生成AIの実務実装",
      "マーケティング視点の統合",
      "メンターによる定期フィードバック",
    ],
    illustration: "/images/online-learning-illustration.png",
  },
  {
    id: "03",
    label: "STEP 03",
    title: "成果発表会",
    description:
      "100日間の成長と成果を披露する晴れ舞台です。学びを成果物と言葉で振り返り、修了証も授与されます。",
    items: ["キャリアコンサルティング", "ポートフォリオ作成支援", "成果発表・修了証授与"],
    illustration: "/images/presentation-illustration.png",
  },
];

const ProgramFlowSection = () => {
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
            Flow
          </span>
          <h2
            className="mb-6 text-3xl font-bold leading-tight lg:text-4xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            学んで終わらせない、100日間の流れ
          </h2>
          <p className="max-w-2xl leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
            2日間の集中研修から始まる100日間の伴走を、何が定着していくのかまで含めて見える構成にしています。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
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
                {step.id}
              </span>

              <div className="relative z-10 [text-shadow:0_0_12px_var(--card-bg),0_0_24px_var(--card-bg),0_0_40px_var(--card-bg)]" style={{ '--card-bg': ACADEMY_COLORS.bgCanvas } as React.CSSProperties}>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.accentMain,
                  }}
                >
                  {step.label}
                </p>
                <h3 className="mb-3 text-xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                  {step.title}
                </h3>
                <p className="mb-5 text-sm leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
                  {step.description}
                </p>
                <ul className="relative space-y-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex gap-3 rounded-sm px-2 py-1 text-sm"
                      style={{
                        color: ACADEMY_COLORS.textMuted,
                        backgroundColor: ACADEMY_COLORS.bgCanvas,
                      }}
                    >
                      <span style={{ color: ACADEMY_COLORS.accentMain }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-40">
                <Image
                  src={step.illustration}
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

export default ProgramFlowSection;
