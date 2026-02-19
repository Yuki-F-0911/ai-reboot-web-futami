import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const steps = [
    {
        id: "01",
        label: "STEP 01",
        title: "AIリブートキャンプ",
        description: "仲間と共に集中的に学ぶ2日間。生成AIの本質を理解し、100日間の挑戦が始まります。",
        items: ["マインドセットの解体", "AI活用の第一歩", "共創コミュニティ形成"],
        illustration: "/images/bootcamp-illustration.png"
    },
    {
        id: "02",
        label: "STEP 02",
        title: "AIリブート100",
        description: "最新のAI活用事例と実践的なワークショップ。一人ひとりの課題に寄り添うフィードバック。",
        items: ["生成AIの実務実装", "マーケティング視点の統合", "メンターによる定期フィードバック"],
        illustration: "/images/online-learning-illustration.png"
    },
    {
        id: "03",
        label: "STEP 03",
        title: "成果発表会",
        description: "100日間の成長と成果を披露する晴れ舞台です。修了証も授与されます。",
        items: ["キャリアコンサルティング", "ポートフォリオ作成支援", "成果発表・修了証授与"],
        illustration: "/images/presentation-illustration.png"
    }
];

const ProgramFlowSection = () => {
    return (
        <section
            className="py-24 lg:py-32"
            style={{ backgroundColor: '#ffffff' }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                {/* Section Header */}
                <div className="mb-20 lg:mb-24">
                    <span
                        className="inline-block text-[10px] tracking-[0.2em] font-bold uppercase mb-4"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                            color: ACADEMY_COLORS.accentMain 
                        }}
                    >
                        FLOW
                    </span>
                    <h2
                        className="text-3xl lg:text-4xl font-bold leading-tight mb-6"
                        style={{
                            fontFamily: ACADEMY_TYPOGRAPHY.serif,
                            color: ACADEMY_COLORS.textStrong
                        }}
                    >
                        プログラムの流れ
                    </h2>
                    <p
                        className="max-w-2xl leading-loose"
                        style={{ color: ACADEMY_COLORS.textBody }}
                    >
                        2日間の集中研修から始まる100日間の旅
                    </p>
                </div>

                {/* Timeline Layout */}
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 relative">
                    {/* Vertical Connector Line for Mobile */}
                    <div 
                        className="lg:hidden absolute left-0 top-0 bottom-0 w-px" 
                        style={{ backgroundColor: ACADEMY_COLORS.lineSoft }}
                    />

                    {steps.map((step) => (
                        <div key={step.id} className="relative pl-8 lg:pl-0 group">
                            {/* Horizontal Line for Desktop */}
                            <div 
                                className="hidden lg:block w-full h-px mb-8 group-hover:opacity-60 transition-opacity" 
                                style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                            />

                            {/* Dot/Marker */}
                            <div 
                                className="lg:hidden absolute left-[-4px] top-0 w-2 h-2 rounded-full" 
                                style={{ backgroundColor: ACADEMY_COLORS.lineStrong }}
                            />

                            {/* Illustration */}
                            <div className="mb-6 h-40 flex items-center">
                                <Image
                                    src={step.illustration}
                                    alt={step.title}
                                    width={160}
                                    height={140}
                                    className="object-contain"
                                />
                            </div>

                            <div className="mb-6">
                                <span
                                    className="text-xs font-bold tracking-widest"
                                    style={{ 
                                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                        color: ACADEMY_COLORS.accentMain
                                    }}
                                >
                                    {step.label}
                                </span>
                            </div>

                            <h3 
                                className="text-xl lg:text-2xl font-bold mb-6"
                                style={{ color: ACADEMY_COLORS.textStrong }}
                            >
                                {step.title}
                            </h3>

                            <p 
                                className="text-sm lg:text-base leading-loose mb-8"
                                style={{ color: ACADEMY_COLORS.textBody }}
                            >
                                {step.description}
                            </p>

                            <ul className="space-y-3">
                                {step.items.map(item => (
                                    <li 
                                        key={item} 
                                        className="flex gap-3 text-xs"
                                        style={{ color: ACADEMY_COLORS.textMuted }}
                                    >
                                        <span 
                                            className="font-bold"
                                            style={{ color: ACADEMY_COLORS.accentMain }}
                                        >
                                            →
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramFlowSection;
