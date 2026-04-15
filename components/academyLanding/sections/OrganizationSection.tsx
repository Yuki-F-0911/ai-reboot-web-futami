import Image from "next/image";
import {
  ACADEMY_COLORS,
  ACADEMY_TYPOGRAPHY,
  ACADEMY_SPACING,
} from "./academyDesignTokens";

/**
 * 組織の信頼性を示す実績データ
 */
const credentials = [
  {
    number: "20",
    unit: "年+",
    label: "キャリア教育への従事歴",
  },
  {
    number: "150",
    unit: "社+",
    label: "採用支援・組織開発の支援実績",
  },
  {
    number: "180",
    unit: "本+/年",
    label: "メディア出演・登壇実績",
  },
];

const OrganizationSection = () => {
  return (
    <section
      className={ACADEMY_SPACING.sectionPy}
      style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
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
            About Us
          </span>
          <h2
            className="mb-6 text-3xl font-bold leading-tight lg:text-4xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            運営について
          </h2>
          <p
            className="max-w-3xl leading-loose"
            style={{ color: ACADEMY_COLORS.textBody }}
          >
            AIリブートアカデミーは、株式会社ウィルフォワードが運営する経済産業省認定リスキリング講座です。
          </p>
        </div>

        {/* ウィルフォワードの思想 */}
        <div className="mb-16 lg:mb-20 lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="mb-8 lg:col-span-5 lg:mb-0">
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-sm"
              style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
            >
              <Image
                src="/images/hero-slide-v2-1.jpg"
                alt="ウィルフォワードの活動"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:col-span-7">
            <h3
              className="mb-4 text-xl font-bold lg:text-2xl"
              style={{
                fontFamily: ACADEMY_TYPOGRAPHY.serif,
                color: ACADEMY_COLORS.textStrong,
              }}
            >
              「世界を一つの家族にする」
            </h3>
            <p
              className="mb-6 text-sm leading-loose lg:text-base"
              style={{ color: ACADEMY_COLORS.textBody }}
            >
              ウィルフォワードは決まった事業ドメインに縛られず、一人ひとりの「Will（志）」と「才能」を起点にした事業を展開してきました。
              コンサルティング、教育研修、マーケティング、クリエイティブ——領域は多岐にわたりますが、すべてに共通するのは「人の可能性を信じ、引き出す」という信念です。
            </p>
            <p
              className="text-sm leading-loose lg:text-base"
              style={{ color: ACADEMY_COLORS.textBody }}
            >
              ホラクラシー経営やティール組織を自社で15年実践し、「出社義務なし」「社内ルールゼロ」という自由な組織文化の中から
              AIリブートアカデミーは生まれました。単なるスクール運営ではなく、組織として「人はどうすれば本当に変われるのか」を問い続けてきた知見が、このプログラムの背骨になっています。
            </p>
          </div>
        </div>

        {/* 実績数値 */}
        <div
          className="mx-auto max-w-4xl grid grid-cols-1 gap-px overflow-hidden rounded-sm border sm:grid-cols-3"
          style={{
            borderColor: ACADEMY_COLORS.lineSoft,
            backgroundColor: ACADEMY_COLORS.lineSoft,
          }}
        >
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="p-6 text-center lg:p-8"
              style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
            >
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <span
                  className="text-3xl font-bold lg:text-4xl"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.accentMain,
                  }}
                >
                  {cred.number}
                </span>
                <span
                  className="text-sm font-bold"
                  style={{ color: ACADEMY_COLORS.accentMain }}
                >
                  {cred.unit}
                </span>
              </div>
              <p
                className="text-[11px] font-medium leading-snug"
                style={{ color: ACADEMY_COLORS.textMuted }}
              >
                {cred.label}
              </p>
            </div>
          ))}
        </div>

        {/* 認定バッジ */}
        <div className="mt-12 flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/keisan-reskiling-logo.webp"
              alt="リスキリング補助金"
              width={180}
              height={72}
              className="h-14 w-auto object-contain"
            />
            <p
              className="text-[11px] font-medium leading-tight"
              style={{ color: ACADEMY_COLORS.textMuted }}
            >
              経済産業省認定
              <br />
              リスキリングを通じたキャリアアップ支援事業
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
