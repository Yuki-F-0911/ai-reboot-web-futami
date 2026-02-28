import Link from "next/link";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY, ACADEMY_SPACING } from "./academyDesignTokens";

const voices = [
    {
        attribute: "AIリブートキャンプ 1期生",
        title: "単なる便利ツールだと思っていたAIが、自分の深層を掘り下げるパートナーに変わりました",
        body: "正直、参加する前は「ChatGPTにコードを書いてもらうことの延長線上でしょ？」と思っていました。でも、全く違いました。答えのない問いをAIと、そして仲間と共に探求していく過程で、「ここまで深められるのか」という衝撃を受けました。単に学ぶだけでなく、その場でWebサイトという具体的な「成果物」まで形にできたのが大きな収穫です。",
    },
    {
        attribute: "AIリブートキャンプ 1期生",
        title: "自腹での参加。でも、それ以上の未来への投資になりました",
        body: "決して安い金額ではありませんでしたが、直感を信じて飛び込んで正解でした。「やっちゃうか！」というチャレンジ精神で集まったメンバーとの出会いは、何にも代えがたい資産です。自分のキャリアや過去の経験が、AIという武器を得てどう花開くのか。自分にとって良い未来にしかならないという確信があります。",
    },
    {
        attribute: "AIリブートキャンプ 1期生",
        title: "一人なら動画を1本見て終わっていた。仲間がいるから、限界を超えられる",
        body: "最初は「本当に自分にできるのか」と不安でした。でも、ここに来て一番良かったのは「仲間」ができたことです。おそらく一人で独学していたら、途中で行き詰まって挫折していたと思います。励まし合い、知恵を出し合える環境があるからこそ、密度の濃い2日間を走り切れました。この後の100日間も、この仲間となら頑張れます。",
    },
    {
        attribute: "セミナー参加者",
        title: "「静観していることは、既に退化している」が一番に響いた",
        body: "10年後に2026年を振り返った時に、「あの時、静観せず、とりあえず動いてよかった！」と言える一年にしたいと強く思った。",
    },
    {
        attribute: "セミナー参加者",
        title: "AIの進化のスケールの大きさに驚きました",
        body: "まさに光の速さのようでした。",
    },
];


const VoicesSection = () => {
    return (
        <section 
            className={ACADEMY_SPACING.sectionPy}
            style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 lg:mb-20">
                    <span 
                        className="inline-block text-[10px] tracking-[0.2em] font-bold uppercase mb-4"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                            color: ACADEMY_COLORS.accentMain 
                        }}
                    >
                        Voices
                    </span>
                    <h2 
                        className="text-3xl lg:text-4xl font-bold leading-tight mb-6"
                        style={{ 
                            fontFamily: ACADEMY_TYPOGRAPHY.serif,
                            color: ACADEMY_COLORS.textStrong
                        }}
                    >
                        参加者の声
                    </h2>
                    <p 
                        className="max-w-2xl leading-loose"
                        style={{ color: ACADEMY_COLORS.textBody }}
                    >
                        たった2日間のキャンプでも、多くの「リブート」が生まれました。<br className="hidden lg:block" />
                        その変化の兆しが、100日間の伴走を通じて確信へと変わります。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {voices.map((voice, index) => (
                        <article
                            key={index}
                            className="rounded-sm border p-8 lg:p-10"
                            style={{ 
                                backgroundColor: ACADEMY_COLORS.bgPanel,
                                borderColor: ACADEMY_COLORS.lineSoft
                            }}
                        >
                            <h3 
                                className="text-lg lg:text-xl font-bold leading-snug mb-6"
                                style={{ 
                                    fontFamily: ACADEMY_TYPOGRAPHY.serif,
                                    color: ACADEMY_COLORS.textStrong
                                }}
                            >
                                {voice.title}
                            </h3>

                            <p 
                                className="text-sm lg:text-base leading-loose mb-8"
                                style={{ color: ACADEMY_COLORS.textBody }}
                            >
                                {voice.body}
                            </p>

                            <div 
                                className="pt-6 border-t"
                                style={{ borderColor: ACADEMY_COLORS.bgSection }}
                            >
                                <p 
                                    className="text-[10px] font-bold tracking-widest"
                                    style={{ 
                                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                                        color: ACADEMY_COLORS.textMuted
                                    }}
                                >
                                    {voice.attribute}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                    <Link
                        href="/academy/reviews"
                        className="inline-flex items-center gap-2 border-b pb-1 text-sm font-bold transition-opacity hover:opacity-70"
                        style={{ color: ACADEMY_COLORS.textStrong, borderColor: ACADEMY_COLORS.textStrong }}
                    >
                        <span>受講生の評判・口コミをもっと見る</span>
                        <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                        href="/rebooters"
                        className="inline-flex items-center gap-2 border-b pb-1 text-sm font-bold transition-opacity hover:opacity-70"
                        style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
                    >
                        <span>受講生の成果・実績を見る（REBOOTERS）</span>
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VoicesSection;
