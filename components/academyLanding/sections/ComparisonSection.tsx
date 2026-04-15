import {
  ACADEMY_COLORS,
  ACADEMY_TYPOGRAPHY,
  ACADEMY_SPACING,
} from "./academyDesignTokens";

/**
 * 比較データ型定義
 */
interface ComparisonRow {
  label: string;
  aiReboot: string;
  generalAi: string;
  careerCoaching: string;
}

const comparisonData: ComparisonRow[] = [
  {
    label: "学ぶ対象",
    aiReboot: "AI × キャリア × 自己理解を統合的に",
    generalAi: "AIスキルのみ",
    careerCoaching: "キャリア設計のみ",
  },
  {
    label: "学び方",
    aiReboot: "2日間の合宿研修 + 100日間の実践伴走",
    generalAi: "動画視聴・オンライン講座が中心",
    careerCoaching: "1on1面談が中心",
  },
  {
    label: "コミュニティ",
    aiReboot: "少人数の仲間と深い共創関係を構築",
    generalAi: "大規模コミュニティ（つながりは薄い）",
    careerCoaching: "基本的に個人完結",
  },
  {
    label: "ゴール",
    aiReboot: "「自分はどう生きたいか」から逆算して人生をリブート",
    generalAi: "特定スキルの習得・資格取得",
    careerCoaching: "転職成功・年収アップ",
  },
  {
    label: "運営の姿勢",
    aiReboot: "講師自身が日々AIと向き合う現役の実践者集団",
    generalAi: "カリキュラム化された教材を提供",
    careerCoaching: "コーチ/アドバイザーとして助言",
  },
  {
    label: "補助金",
    aiReboot: "経済産業省認定・最大70%補助",
    generalAi: "講座により異なる",
    careerCoaching: "対象外が多い",
  },
];

const ComparisonSection = () => {
  return (
    <section
      className={ACADEMY_SPACING.sectionPy}
      style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}
    >
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        {/* セクションヘッダー */}
        <div className="mb-16 lg:mb-20">
          <span
            className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.accentMain,
            }}
          >
            Comparison
          </span>
          <h2
            className="mb-6 text-3xl font-bold leading-tight lg:text-4xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            他のスクールとの違い
          </h2>
          <p
            className="max-w-3xl leading-loose"
            style={{ color: ACADEMY_COLORS.textBody }}
          >
            AIリブートアカデミーは、AIスキルを教えるスクールではありません。
            <br className="hidden lg:block" />
            「君は何を作りたいの？」「どういう働き方をしたいの？」
            <br className="hidden lg:block" />
            AIありの社会で、あなたが本当に生きたい生き方を一緒に見つける場所です。
          </p>
        </div>

        {/* 比較テーブル — PC */}
        <div className="hidden lg:block">
          <div
            className="overflow-hidden rounded-sm border"
            style={{ borderColor: ACADEMY_COLORS.lineSoft }}
          >
            {/* テーブルヘッダー */}
            <div
              className="grid grid-cols-4 border-b"
              style={{
                borderColor: ACADEMY_COLORS.lineSoft,
                backgroundColor: ACADEMY_COLORS.bgSection,
              }}
            >
              <div className="p-5">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.textMuted,
                  }}
                >
                  比較項目
                </span>
              </div>
              <div
                className="border-l p-5"
                style={{
                  borderColor: ACADEMY_COLORS.lineSoft,
                  backgroundColor: ACADEMY_COLORS.accentSoft,
                }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: ACADEMY_COLORS.accentDeep }}
                >
                  AIリブートアカデミー
                </span>
              </div>
              <div
                className="border-l p-5"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: ACADEMY_COLORS.textMuted }}
                >
                  一般的なAIスクール
                </span>
              </div>
              <div
                className="border-l p-5"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: ACADEMY_COLORS.textMuted }}
                >
                  キャリアコーチング
                </span>
              </div>
            </div>

            {/* テーブルボディ */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b last:border-b-0"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <div
                  className="p-5"
                  style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: ACADEMY_COLORS.textStrong }}
                  >
                    {row.label}
                  </span>
                </div>
                <div
                  className="border-l p-5"
                  style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: ACADEMY_COLORS.textStrong }}
                  >
                    {row.aiReboot}
                  </p>
                </div>
                <div
                  className="border-l p-5"
                  style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: ACADEMY_COLORS.textMuted }}
                  >
                    {row.generalAi}
                  </p>
                </div>
                <div
                  className="border-l p-5"
                  style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: ACADEMY_COLORS.textMuted }}
                  >
                    {row.careerCoaching}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 比較カード — モバイル */}
        <div className="space-y-6 lg:hidden">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="rounded-sm border p-5"
              style={{
                borderColor: ACADEMY_COLORS.lineSoft,
                backgroundColor: ACADEMY_COLORS.bgCanvas,
              }}
            >
              <p
                className="mb-4 text-sm font-bold"
                style={{ color: ACADEMY_COLORS.textStrong }}
              >
                {row.label}
              </p>

              {/* AIリブート（強調） */}
              <div
                className="mb-3 rounded-sm border-l-2 py-2 pl-4"
                style={{
                  borderColor: ACADEMY_COLORS.accentMain,
                  backgroundColor: ACADEMY_COLORS.accentSoft,
                }}
              >
                <p
                  className="mb-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.accentDeep,
                  }}
                >
                  AI Reboot Academy
                </p>
                <p
                  className="text-sm font-medium leading-relaxed"
                  style={{ color: ACADEMY_COLORS.textStrong }}
                >
                  {row.aiReboot}
                </p>
              </div>

              {/* 他サービス */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p
                    className="mb-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                      color: ACADEMY_COLORS.textMuted,
                    }}
                  >
                    AIスクール
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: ACADEMY_COLORS.textMuted }}
                  >
                    {row.generalAi}
                  </p>
                </div>
                <div>
                  <p
                    className="mb-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                      color: ACADEMY_COLORS.textMuted,
                    }}
                  >
                    キャリア
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: ACADEMY_COLORS.textMuted }}
                  >
                    {row.careerCoaching}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
