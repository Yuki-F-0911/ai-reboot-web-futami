import Link from "next/link";
import {
  ACADEMY_COLORS,
  ACADEMY_TYPOGRAPHY,
  ACADEMY_SPACING,
} from "./academyDesignTokens";

/**
 * 受講生ストーリー型定義（Before/After型）
 */
interface RebooterStory {
  /** ニックネーム */
  nickname: string;
  /** 属性（職種・背景） */
  attribute: string;
  /** 参加前の状態 */
  before: string;
  /** 変化した現在の状態 */
  after: string;
  /** 本人の一言（引用） */
  quote: string;
  /** どのフェーズか */
  phase: string;
}

/**
 * 受講生の変化ストーリーデータ
 * 出典: Sprint2中間報告会・DAY1自己紹介・個別メンタリング
 */
const rebooterStories: RebooterStory[] = [
  {
    nickname: "リオさん",
    attribute: "元ミュージカル出身・歌唱指導・ショー制作",
    before:
      "生成AIはほとんど使ったことがなく、自分の価値をどう新しい領域で活かせるか模索していた。AIを学ぶことで自分の場所を開拓するきっかけにしたいと参加。",
    after: "AI（Gemini）との壁打ちで「制作進行」が自分の得意分野だと発見。メール情報のスプレッドシート自動整理、カレンダー連携のスケジュール管理システムを自力で構築。短期の仕事先でAIを活用してマニュアルを作成し、ポートフォリオとして形に。",
    quote:
      "AIを学ぶことが自分の価値になると確信しています。自分はWeb制作よりも「制作進行」が得意だと、AIとの対話で気づけました。",
    phase: "1期生・挑戦中",
  },
  {
    nickname: "きばちゃん",
    attribute: "治療関係・アスリートパフォーマンス支援",
    before:
      "骨格データの分析やWeb業務にAIを活用したいが、具体的な使い方が分からなかった。",
    after: "Googleアナリティクス・予約管理システム（Square）のデータを自動でスプレッドシートに反映する仕組みを構築し、実務で稼働中。「みんなで同じレベルでAIの話ができるようになりたい」とサブリーダーに立候補。",
    quote:
      "一人だけがAIを使えても意味がない。周囲を巻き込む力が必要だと気づきました。",
    phase: "1期生・挑戦中",
  },
  {
    nickname: "むすびんさん",
    attribute: "ゲーム開発・仕様設計・シナリオライティング",
    before:
      "現場ではAIはまだ使われておらず、自分もたまにコードを書いてもらう程度。子供と一緒にゲームを作れるようになりたいと参加。",
    after: "以前から抱えていたPOSシステムのバグをAIに質問して解決し、大きな自信に。会社導入用のローカルLLM構築で「ナレッジグラフ」という新手法を自ら調査し、環境構築に成功。",
    quote:
      "AIの限界を知ったからこそ、本当に使える領域が見えてきました。",
    phase: "1期生・挑戦中",
  },
  {
    nickname: "カッシーさん",
    attribute: "建築リペア・独立開業",
    before:
      "画像生成など試しているが具体的な業務活用はまだ。独立したばかりで多忙を極める中、仕事での使い道を広げたいと参加。",
    after: "「脳がしっかり休まっていないとAIと壁打ちできない」という根本的気づきを獲得。知人のパーソナルジムHPをAIで最速プロトタイピング。次のスプリントのリーダーに自ら志願。",
    quote:
      "自分の趣味のためではなく、人のためにAIをどう使うかを考えるようになりました。",
    phase: "1期生・挑戦中",
  },
];

/**
 * 既存の参加者の声（セミナー等）
 */
const quickVoices = [
  {
    attribute: "AIリブートキャンプ 1期生",
    title:
      "単なる便利ツールだと思っていたAIが、自分の深層を掘り下げるパートナーに変わりました",
    body: "答えのない問いをAIと、そして仲間と共に探求していく過程で、「ここまで深められるのか」という衝撃を受けました。その場でWebサイトという具体的な「成果物」まで形にできたのが大きな収穫です。",
  },
  {
    attribute: "AIリブートキャンプ 1期生",
    title:
      "一人なら動画を1本見て終わっていた。仲間がいるから、限界を超えられる",
    body: "ここに来て一番良かったのは「仲間」ができたこと。おそらく一人で独学していたら、途中で行き詰まって挫折していたと思います。",
  },
];

const VoicesSection = () => {
  return (
    <section
      className={ACADEMY_SPACING.sectionPy}
      style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        {/* セクションヘッダー */}
        <div className="mb-16 lg:mb-20">
          <span
            className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.accentMain,
            }}
          >
            Rebooters&apos; Stories
          </span>
          <h2
            className="mb-6 text-3xl font-bold leading-tight lg:text-4xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            1期生が、挑戦の途中で掴みつつある変化
          </h2>
          <p
            className="max-w-3xl leading-loose"
            style={{ color: ACADEMY_COLORS.textBody }}
          >
            初期フェーズの今だからこそ、一人ひとりの変化を正直にお伝えします。
            <br className="hidden lg:block" />
            完成された成功事例ではなく、「現在進行形」のリアルなストーリーです。
          </p>
        </div>

        {/* Before/After ストーリーカード */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {rebooterStories.map((story, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-sm border"
              style={{
                backgroundColor: ACADEMY_COLORS.bgPanel,
                borderColor: ACADEMY_COLORS.lineSoft,
              }}
            >
              {/* ヘッダー: ニックネーム + 属性 */}
              <div
                className="flex items-center justify-between border-b px-6 py-4 lg:px-8"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <div className="flex items-center gap-3">
                  {/* イニシャルアイコン */}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-sm text-sm font-bold"
                    style={{
                      backgroundColor: ACADEMY_COLORS.accentSoft,
                      color: ACADEMY_COLORS.accentDeep,
                      fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: ACADEMY_COLORS.textStrong }}
                    >
                      {story.nickname}
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ color: ACADEMY_COLORS.textMuted }}
                    >
                      {story.attribute}
                    </p>
                  </div>
                </div>
                <span
                  className="rounded-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: ACADEMY_COLORS.bgSection,
                    color: ACADEMY_COLORS.accentMain,
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                  }}
                >
                  {story.phase}
                </span>
              </div>

              {/* Before / After コンテンツ */}
              <div className="p-6 lg:p-8">
                {/* Before */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                        color: ACADEMY_COLORS.textMuted,
                      }}
                    >
                      Before
                    </span>
                    <div
                      className="h-px flex-grow"
                      style={{
                        backgroundColor: ACADEMY_COLORS.lineSoft,
                      }}
                    />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: ACADEMY_COLORS.textMuted }}
                  >
                    {story.before}
                  </p>
                </div>

                {/* 矢印（テキスト記号） */}
                <div
                  className="mb-6 flex items-center gap-3"
                  style={{ color: ACADEMY_COLORS.accentMain }}
                >
                  <div
                    className="h-px flex-grow"
                    style={{
                      backgroundColor: ACADEMY_COLORS.accentSoft,
                    }}
                  />
                  <span
                    className="text-xs font-bold tracking-widest"
                    style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric }}
                  >
                    IN PROGRESS
                  </span>
                  <div
                    className="h-px flex-grow"
                    style={{
                      backgroundColor: ACADEMY_COLORS.accentSoft,
                    }}
                  />
                </div>

                {/* After */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                        color: ACADEMY_COLORS.accentMain,
                      }}
                    >
                      After
                    </span>
                    <div
                      className="h-px flex-grow"
                      style={{
                        backgroundColor: ACADEMY_COLORS.accentSoft,
                      }}
                    />
                  </div>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: ACADEMY_COLORS.textStrong }}
                  >
                    {story.after}
                  </p>
                </div>

                {/* 引用コメント */}
                <blockquote
                  className="border-l-2 pl-4"
                  style={{ borderColor: ACADEMY_COLORS.accentMain }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: ACADEMY_TYPOGRAPHY.serif,
                      color: ACADEMY_COLORS.textBody,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        {/* 簡易ボイス（セミナー参加者等） */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {quickVoices.map((voice, index) => (
            <article
              key={index}
              className="rounded-sm border p-6 lg:p-8"
              style={{
                backgroundColor: ACADEMY_COLORS.bgPanel,
                borderColor: ACADEMY_COLORS.lineSoft,
              }}
            >
              <h3
                className="mb-4 text-base font-bold leading-snug lg:text-lg"
                style={{
                  fontFamily: ACADEMY_TYPOGRAPHY.serif,
                  color: ACADEMY_COLORS.textStrong,
                }}
              >
                {voice.title}
              </h3>
              <p
                className="mb-6 text-sm leading-loose"
                style={{ color: ACADEMY_COLORS.textBody }}
              >
                {voice.body}
              </p>
              <div
                className="border-t pt-4"
                style={{ borderColor: ACADEMY_COLORS.bgSection }}
              >
                <p
                  className="text-[10px] font-bold tracking-widest"
                  style={{
                    fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                    color: ACADEMY_COLORS.textMuted,
                  }}
                >
                  {voice.attribute}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* リンク群 */}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/academy/reviews"
            className="inline-flex items-center gap-2 border-b pb-1 text-sm font-bold transition-opacity hover:opacity-70"
            style={{
              color: ACADEMY_COLORS.textStrong,
              borderColor: ACADEMY_COLORS.textStrong,
            }}
          >
            <span>受講生の評判・口コミをもっと見る</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/rebooters"
            className="inline-flex items-center gap-2 border-b pb-1 text-sm font-bold transition-opacity hover:opacity-70"
            style={{
              color: ACADEMY_COLORS.accentMain,
              borderColor: ACADEMY_COLORS.accentMain,
            }}
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
