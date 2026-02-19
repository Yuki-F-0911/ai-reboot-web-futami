import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const steps = [
  {
    id: "01",
    label: "STEP 01",
    title: "AIリブートキャンプ",
    description:
      "仲間と共に集中的に学ぶ2日間。生成AIの本質を理解し、100日間の挑戦が始まります。",
    items: ["マインドセットの解体", "AI活用の第一歩", "共創コミュニティ形成"],
    illustration: "/images/bootcamp-illustration.png",
  },
  {
    id: "02",
    label: "STEP 02",
    title: "AIリブート100",
    description:
      "最新のAI活用事例と実践的なワークショップ。一人ひとりの課題に寄り添うフィードバック。",
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
      "100日間の成長と成果を披露する晴れ舞台です。修了証も授与されます。",
    items: ["キャリアコンサルティング", "ポートフォリオ作成支援", "成果発表・修了証授与"],
    illustration: "/images/presentation-illustration.png",
  },
];

const ProgramFlowSection = () => {
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
            Flow
          </span>
          <h2
            className="mb-6 text-3xl font-bold leading-tight lg:text-4xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            プログラムの流れ
          </h2>
          <p className="max-w-2xl leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
            2日間の集中研修から始まる100日間の伴走を、時系列で追える構成にしています。
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute bottom-2 left-[11px] top-2 w-px lg:hidden"
            style={{ backgroundColor: ACADEMY_COLORS.lineSoft }}
          />
          <ol className="space-y-12 lg:grid lg:grid-cols-12 lg:gap-10 lg:space-y-0">
            {steps.map((step, index) => (
              <li key={step.id} className="relative pl-9 lg:col-span-4 lg:pl-0">
              <div className="mb-4 flex items-center justify-between border-t pt-4" style={{ borderColor: ACADEMY_COLORS.lineStrong }}>
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.textMuted,
                  }}
                >
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <span
                    className="hidden text-sm font-bold lg:inline"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                      color: ACADEMY_COLORS.accentMain,
                    }}
                  >
                    →
                  </span>
                )}
              </div>

              <h3 className="mb-4 text-xl font-bold lg:text-2xl" style={{ color: ACADEMY_COLORS.textStrong }}>
                {step.title}
              </h3>
              <p className="mb-6 text-sm leading-loose lg:text-base" style={{ color: ACADEMY_COLORS.textBody }}>
                {step.description}
              </p>

              <div className="mb-6 w-fit rounded-md border p-3" style={{ borderColor: ACADEMY_COLORS.lineSoft, backgroundColor: ACADEMY_COLORS.bgCanvas }}>
                <Image
                  src={step.illustration}
                  alt={step.title}
                  width={150}
                  height={120}
                  className="h-auto w-auto object-contain"
                />
              </div>

              <ul className="space-y-3">
                {step.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm" style={{ color: ACADEMY_COLORS.textMuted }}>
                    <span style={{ color: ACADEMY_COLORS.accentMain }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProgramFlowSection;
