import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY, ACADEMY_SPACING } from "./academyDesignTokens";

const comparisonRows = [
  {
    label: "学びの中心",
    others: "AIツールの使い方を知る",
    reboot: "AI活用力と自己理解を行き来しながら、自分の仕事に落とし込む",
  },
  {
    label: "ゴール",
    others: "理解して終わる",
    reboot: "何を作るか、誰に届けるかまで考えて成果物にする",
  },
  {
    label: "支援体制",
    others: "ひとりで進める",
    reboot: "2日間のキャンプと100日伴走で、変化を習慣化する",
  },
  {
    label: "AI時代との向き合い方",
    others: "便利なツールとして触れる",
    reboot: "キャリアや働き方の前提から見直し、自分の強みに変える",
  },
];

const ComparisonSection = () => {
  return (
    <section id="comparison" className={ACADEMY_SPACING.sectionPy} style={{ backgroundColor: ACADEMY_COLORS.bgWarm }}>
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <span
            className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric, color: ACADEMY_COLORS.accentMain }}
          >
            Comparison
          </span>
          <h2
            className="mb-4 text-3xl font-bold leading-tight lg:text-5xl"
            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif, color: ACADEMY_COLORS.textStrong }}
          >
            他サイトとの比較
          </h2>
          <p className="max-w-3xl text-base leading-loose lg:text-lg" style={{ color: ACADEMY_COLORS.textBody }}>
            AIリブートは、ツールの知識を集めるだけの場ではありません。AI時代に合わせて仕事のやり方とキャリアの選び方まで再設計することを、はじめから前提にしています。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div
            className="overflow-hidden rounded-sm border"
            style={{ borderColor: ACADEMY_COLORS.lineSoft, backgroundColor: ACADEMY_COLORS.bgCanvas }}
          >
            <div className="grid gap-px lg:grid-cols-[180px_1fr_1fr]" style={{ backgroundColor: ACADEMY_COLORS.lineSoft }}>
              <div className="hidden p-5 lg:block" style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }} />
              <div className="p-5" style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}>
                <p className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textMuted }}>
                  他スクール・他サークル
                </p>
              </div>
              <div className="p-5" style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}>
                <p className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                  AIリブート
                </p>
              </div>
              {comparisonRows.map((row) => (
                <div key={row.label} className="contents">
                  <div className="p-5" style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}>
                    <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACADEMY_COLORS.accentMain }}>
                      {row.label}
                    </p>
                  </div>
                  <div className="p-5" style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}>
                    <p className="text-sm leading-loose" style={{ color: ACADEMY_COLORS.textMuted }}>
                      {row.others}
                    </p>
                  </div>
                  <div className="p-5" style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}>
                    <p className="text-sm leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
                      {row.reboot}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="relative overflow-hidden rounded-sm border p-6"
              style={{ borderColor: ACADEMY_COLORS.lineSoft, backgroundColor: ACADEMY_COLORS.bgPanel }}
            >
              <div className="pointer-events-none absolute -right-4 -top-4 opacity-20">
                <Image
                  src="/images/skill-pyramid-illustration.png"
                  alt=""
                  width={180}
                  height={180}
                  className="h-[180px] w-[180px] object-contain"
                  aria-hidden="true"
                />
              </div>
              <p
                className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: ACADEMY_COLORS.accentMain, fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
              >
                Why It Matters
              </p>
              <h3 className="mb-3 text-xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                AI時代に必要なのは、学ぶ量より変えられる範囲
              </h3>
              <p className="text-sm leading-loose" style={{ color: ACADEMY_COLORS.textBody }}>
                AIツールを知っていることより、自分の仕事に組み込み、キャリアの武器として使えることが重要です。AIリブートはそのための土台づくりから伴走します。
              </p>
            </div>

            <div
              className="rounded-sm border p-6"
              style={{ borderColor: ACADEMY_COLORS.lineSoft, backgroundColor: ACADEMY_COLORS.bgCanvas }}
            >
              <p
                className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: ACADEMY_COLORS.accentMain, fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
              >
                Included
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI活用力",
                  "自己理解",
                  "キャリア設計",
                  "仲間との実践",
                  "成果発表",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border px-3 py-1 text-xs font-medium"
                    style={{
                      borderColor: ACADEMY_COLORS.lineSoft,
                      backgroundColor: ACADEMY_COLORS.bgPanel,
                      color: ACADEMY_COLORS.textBody,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
