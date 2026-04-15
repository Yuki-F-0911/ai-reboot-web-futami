import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY, ACADEMY_SPACING } from "./academyDesignTokens";

/**
 * 講師データ型定義
 */
interface Instructor {
  name: string;
  nameEn: string;
  role: string;
  company: string;
  /** 具体的実績（箇条書き） */
  achievements: string[];
  /** 日々の実践を示す一文（引用スタイル） */
  practice: string;
  image: string;
  featured?: boolean;
}

const instructors: Instructor[] = [
  {
    name: "成瀬 拓也",
    nameEn: "Takuya Naruse",
    role: "AIリブートアカデミー主宿",
    company: "株式会社ウィルフォワード 代表取締役",
    achievements: [
      "筑波大学体育専門学群卒。アチーブメント（株）で法人研修・学生キャリア教育事業を6年間牽引",
      "経済産業省認定リスキリング支援事業を企画・運営。大手・中小企業へのAI導入支援・社内研修を多数実施",
      "「AI時代のキャリア設計」をテーマに全国で講演・ワークショップを展開。鎌倉「HATSU鎌倉」プログラムディレクターとして起業家育成も推進",
      "ホラクラシー経営・ティール組織等の次世代組織開発を自社で15年実践。キャリア教育に20年以上従事",
      "Forbes JAPAN・Newsweek Japan 等メディア掲載実績あり",
      "大手上場企業・スタートアップへの採用支援・人材紹介実績あり",
    ],
    practice:
      "「AIで仕事を効率化する」の手前にある、「自分は何のために働くのか」という問いに真正面から向き合い続けています。経営の現場で日々対話し、自らも変化し続ける実践者として、受講生一人ひとりのリブートに伴走します。",
    image: "/images/naruse.jpg",
    featured: true,
  },
  {
    name: "坂本 拓磨",
    nameEn: "Takuma Sakamoto",
    role: "AIプロダクト / クリエイティブリード",
    company: "株式会社ウィルフォワード",
    achievements: [
      "AIアーキテクトとしてRAG・エージェント設計を実務導入",
      "UI/UXからブランド開発まで統合的に手がける生成AIのプロフェッショナル",
      "受講生のプロジェクトに深く伴走し、本質的なAI活用力を育成",
    ],
    practice:
      "毎日AIと向き合い、プロダクトを作り続ける現役の実践者です。「AIを使った」ではなく「AIと共に創る」体験を、受講生と一緒に追求しています。",
    image: "/images/sakamoto.jpg",
  },
  {
    name: "青木 玲仝",
    nameEn: "Ryoto Aoki",
    role: "キャリア支援ディレクター",
    company: "株式会社ウィルフォワード",
    achievements: [
      "10年以上にわたり採用・教育・人材育成を実務で担う",
      "幅広い組織のキャリア開発と育成設計を支援してきた専門家",
      "受講者の内発的動機を起点にしたキャリア再構築プログラムを設計",
    ],
    practice:
      "「正解のないキャリア」に伴走し続けるために、自分自身も日々問い直しています。受講生と同じ目線で、一緒に次の一歩を考える存在でありたい。",
    image: "/images/aoki.jpg",
  },
  {
    name: "久米田 克",
    nameEn: "Masaru Kumeta",
    role: "キャリアリブート伴走コーチ / 事業責任者",
    company: "AIリブートアカデミー",
    achievements: [
      "大手企業での経験を経て、自らもキャリアの再構築に挑む実践者",
      "国家資格キャリアコンサルタントとしての対話力と運営知見を活かす",
      "受講生の自己理解と行動変容を促進する伴走支援",
    ],
    practice:
      "「変わりたいけど、変れない」——その気持ちは誰よりもわかります。自分自身がキャリアを再構築した経験から、受講生の挑戦を本気で支えます。",
    image: "/images/kumeda.jpg",
  },
];

/**
 * ウィルフォワード内のキャリア教育専門家（講師ではないが会社のキャリア支援の信頼性を担う）
 */
const teamMember = {
  name: "谷出 正直",
  nameEn: "Masanao Tanide",
  role: "In-House Career Expert｜キャリアコンサルタント（国家資格）",
  company: "株式会社ウィルフォワード 在籍",
  achievements: [
    "筑波大学大学院 体育研究科修了。エン・ジャパン（株）で新卒採用支援11年、4年連続売上No.1",
    "約150社の新卒採用を成功に導いた採用コンサルティングの専門家",
    "NHK「クローズアップ現代+」日本経済新聞・PRESIDENT等メディア出演 年間180本以上",
    "筑波大学・琉球大学・立教大学等でキャリア授業・就職ガイダンスを実施。延べ1,000名以上を支援",
    "AI時代の「強みの再定義」をテーマにしたワークショップを開発・展開",
  ],
  image: "/images/tanide.jpg",
};



const InstructorsSection = () => {
  return (
    <section
      className={ACADEMY_SPACING.sectionPy}
      style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
    >
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        {/* セクションヘッダー */}
        <div className="mb-16 lg:mb-24">
          <span
            className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.accentMain,
            }}
          >
            Mentors &amp; Advisors
          </span>
          <h2
            className="mb-6 text-3xl font-bold leading-tight lg:text-4xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            現役の実践者が、あなたの100日間に伴走します
          </h2>
          <p
            className="max-w-3xl leading-loose"
            style={{ color: ACADEMY_COLORS.textBody }}
          >
            AIリブートアカデミーの講師・メンターは、「教える人」ではありません。
            <br className="hidden lg:block" />
            日々の仕事でAIと向き合い、キャリアと組織を自ら変え続ける実践者集団です。
          </p>
        </div>

        {/* 講師リスト */}
        <div className="space-y-20 lg:space-y-28">
          {instructors.map((instructor, index) => (
            <article
              key={index}
              className={`${
                instructor.featured
                  ? "lg:grid lg:grid-cols-12 lg:gap-12"
                  : "lg:grid lg:grid-cols-12 lg:gap-10"
              }`}
            >
              {/* 写真 */}
              <div
                className={`relative mb-6 overflow-hidden rounded-sm lg:mb-0 ${
                  instructor.featured
                    ? "aspect-[4/5] lg:col-span-4"
                    : "aspect-[4/5] lg:col-span-3"
                }`}
                style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
              >
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* 情報 */}
              <div
                className={`flex flex-col justify-center ${
                  instructor.featured ? "lg:col-span-8" : "lg:col-span-9"
                }`}
              >
                {/* 名前・肩書き */}
                <div className="mb-5">
                  <h3
                    className="mb-1 text-2xl font-bold lg:text-3xl"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.serif,
                      color: ACADEMY_COLORS.textStrong,
                    }}
                  >
                    {instructor.name}
                  </h3>
                  <p
                    className="mb-2 text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                      color: ACADEMY_COLORS.accentDeep,
                    }}
                  >
                    {instructor.nameEn}
                  </p>
                  <div
                    className="border-b pb-4"
                    style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                  >
                    <p
                      className="mb-1 text-xs font-bold"
                      style={{ color: ACADEMY_COLORS.textMuted }}
                    >
                      {instructor.company}
                    </p>
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{ color: ACADEMY_COLORS.textBody }}
                    >
                      {instructor.role}
                    </p>
                  </div>
                </div>

                {/* 実績 */}
                <ul className="mb-6 space-y-2">
                  {instructor.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: ACADEMY_COLORS.textBody }}
                    >
                      <span
                        className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{
                          backgroundColor: ACADEMY_COLORS.accentMain,
                        }}
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* 日々の実践（引用スタイル） */}
                <blockquote
                  className="border-l-2 pl-5"
                  style={{ borderColor: ACADEMY_COLORS.accentSoft }}
                >
                  <p
                    className="text-sm italic leading-loose"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.serif,
                      color: ACADEMY_COLORS.textBody,
                    }}
                  >
                    {instructor.practice}
                  </p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        {/* ウィルフォワードのキャリア専門家（在籍メンバー） */}
        <div
          className="mt-20 rounded-sm border p-8 lg:mt-28 lg:p-10"
          style={{
            borderColor: ACADEMY_COLORS.lineSoft,
            backgroundColor: ACADEMY_COLORS.bgSection,
          }}
        >
          <span
            className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.textMuted,
            }}
          >
            Willforward Team Member
          </span>
          <h3
            className="mb-8 text-lg font-bold lg:text-xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            ウィルフォワードにはキャリア教育の専門家が在籍しています
          </h3>
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">
            {/* 写真 */}
            <div
              className="relative mb-6 aspect-[4/5] overflow-hidden rounded-sm lg:col-span-3 lg:mb-0"
              style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
            >
              <Image
                src={teamMember.image}
                alt={teamMember.name}
                fill
                className="object-cover object-top"
              />
            </div>
            {/* 情報 */}
            <div className="flex flex-col justify-center lg:col-span-9">
              <div className="mb-5">
                <h4
                  className="mb-1 text-xl font-bold"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.serif,
                    color: ACADEMY_COLORS.textStrong,
                  }}
                >
                  {teamMember.name}
                </h4>
                <p
                  className="mb-2 text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.accentDeep,
                  }}
                >
                  {teamMember.nameEn}
                </p>
                <div
                  className="border-b pb-4"
                  style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <p
                    className="mb-1 text-xs font-bold"
                    style={{ color: ACADEMY_COLORS.textMuted }}
                  >
                    {teamMember.company}
                  </p>
                  <p
                    className="text-sm font-medium leading-snug"
                    style={{ color: ACADEMY_COLORS.textBody }}
                  >
                    {teamMember.role}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {teamMember.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: ACADEMY_COLORS.textBody }}
                  >
                    <span
                      className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: ACADEMY_COLORS.lineSoft }}
                    />
                    {achievement}
                  </li>
                ))}
              </ul>
              <p
                className="mt-5 text-xs"
                style={{ color: ACADEMY_COLORS.textMuted }}
              >
                ※ 谷出はAIリブートアカデミーの講師ではなく、ウィルフォワードのキャリア支援の専門性を担う在籍メンバーです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
