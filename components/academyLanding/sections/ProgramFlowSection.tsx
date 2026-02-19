import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "./academyDesignTokens";

const steps = [
    {
        id: "01",
        label: "STEP 01",
        title: "2日間のキックオフ・キャンプ",
        description: "非日常の環境で、自分自身と深く向き合い、仲間との繋がりを築く2日間。AIリブートキャンプを通じて、これまでの常識を一度解体し、新しい自分への「再起動」を行います。",
        items: ["マインドセットの解体", "AI活用の第一歩", "共創コミュニティ形成"],
        illustration: "/images/bootcamp-illustration.png"
    },
    {
        id: "02",
        label: "STEP 02",
        title: "100日間の実践プログラム",
        description: "キャンプで得た熱量をそのままに、実務に即したAI活用スキルを習得。メンターによる伴走サポートを受けながら、自分だけのAI活用プロジェクトを推進します。",
        items: ["生成AIの実務実装", "マーケティング視点の統合", "メンターによる定期フィードバック"],
        illustration: "/images/online-learning-illustration.png"
    },
    {
        id: "03",
        label: "STEP 03",
        title: "キャリアリブート・転職支援",
        description: "習得したスキルと再定義した自己価値を武器に、望むキャリアへと踏み出します。専門家によるキャリアコンサルティングと転職支援を通じて、新しいステージへの移行を確実にします。",
        items: ["キャリアコンサルティング", "ポートフォリオ作成支援", "企業マッチング・転職支援"],
        illustration: "/images/presentation-illustration.png"
    }
];

const ProgramFlowSection = () => {
    return (
        <section
            className="py-24 lg:py-32"
            style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
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
                        Program Flow
                    </span>
                    <h2
                        className="text-3xl lg:text-4xl font-bold leading-tight mb-6"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.serif,
                            color: ACADEMY_COLORS.textStrong
                        }}
                    >
                        自分を再起動する100日間
                    </h2>
                    <p 
                        className="max-w-2xl leading-loose"
                        style={{ color: ACADEMY_COLORS.textBody }}
                    >
                        「点」の学びで終わらせない。集中的なキャンプから始まり、100日間の継続的な実践と、<br className="hidden lg:block" />
                        その先のキャリア支援までがパッケージ化された一貫性のある成長体験を提供します。
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
                                style={{ backgroundColor: ACADEMY_COLORS.lineStrong }}
                            />

                            {/* Dot/Marker */}
                            <div 
                                className="lg:hidden absolute left-[-4px] top-0 w-2 h-2 rounded-full" 
                                style={{ backgroundColor: ACADEMY_COLORS.lineStrong }}
                            />

                            {/* Illustration */}
                            <div className="mb-6 h-24 flex items-center">
                                <div className="p-2 bg-white rounded-md shadow-sm">
                                    <Image
                                        src={step.illustration}
                                        alt={step.title}
                                        width={100}
                                        height={90}
                                        className="object-contain opacity-85"
                                    />
                                </div>
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
