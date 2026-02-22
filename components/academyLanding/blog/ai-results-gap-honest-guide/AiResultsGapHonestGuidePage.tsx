"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "AI 成果 出ない 理由",
  "AI マインドセット",
  "ChatGPT うまく使えない",
  "生成AI 使いこなし 差",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-no-results", label: "「使えているのに成果が出ない」その理由" },
  { id: "mindset-3", label: "差を生む3つのマインドセット" },
  { id: "real-use-cases", label: "成果を出している人の実際の使い方5例" },
  { id: "checklist", label: "今日から変えられる思考習慣チェックリスト" },
  { id: "continue-honestly", label: "「続けることの難しさ」と正直に向き合う" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const mindsets = [
  {
    id: "mindset-1",
    number: "01",
    before: "「完璧な答えを一発で求める」",
    after: "「70点で動く」への転換",
    description:
      "AIを使って成果が出ない人の多くが、最初の1回で完璧な答えを求めようとします。「このプロンプトを送ったら完璧な文章が返ってくるはず」という期待があるため、少しでも期待外れだと「AIは使えない」と感じてしまいます。",
    truth:
      "成果を出している人は、最初の回答が70点でいいと思っています。70点の下書きをもらって、そこから「もう少し短くして」「この部分をもっと具体的に」と追加指示を重ねる。この対話プロセスを経て、最終的に90点の成果物が出来上がります。",
    example: {
      before:
        '❌ 「完璧な提案書を書いて」と送って、微妙な回答が返ってきたので「やっぱりAIはダメだ」と諦める',
      after:
        '✅ 「提案書の骨子を5つの見出しで作って」→返ってきた骨子を見て「3番を具体的な事例付きで膨らませて」→「もう少しエグゼクティブ向けの言葉遣いにして」と対話を重ねる',
    },
  },
  {
    id: "mindset-2",
    number: "02",
    before: "「一回使えば終わり」",
    after: "「対話を重ねる」という認識",
    description:
      "「AIに質問する = 検索する」という感覚で使っていると、一発で得た回答に満足できず終わりになります。検索は一回で答えを得るものですが、AIは違います。AIは「一緒に考えてくれる相談相手」です。",
    truth:
      "チャット形式であることには意味があります。文脈を蓄積しながら、より深い理解に向けて対話を重ねられる。「さっきの回答を踏まえた上で…」「別の角度から見るとどうですか？」という続け方ができるのが、AIが検索と根本的に違う点です。",
    example: {
      before: "❌ 「マーケティング戦略のアイデアを教えて」→返ってきた一般論を読んで「なんか薄いな」と感じて終わり",
      after:
        '✅ 「うちは中小の食品メーカーで、40代主婦がメイン顧客です。この条件でマーケティングアイデアを5つ出して」→「その中の2番について、もっと予算が少ない前提でどうする？」→具体的に展開していく',
    },
  },
  {
    id: "mindset-3",
    number: "03",
    before: "「AIに任せる」",
    after: "「AIと一緒に考える」という関係性",
    description:
      "「AIにやってもらう」という姿勢だと、AIの回答に対して受け身になります。回答の質を判断したり、修正指示を出したりするのが「追加コスト」に感じてしまいます。そして「AIが使えない」ではなく「自分が使えていない」という本質的な問題が隠れてしまいます。",
    truth:
      "成果を出している人は、AIをチームメンバーのように扱います。「この草案どう思う？」「ここが弱い気がするんだけど補強する案ある？」「もし立場が逆だったら何を指摘する？」という使い方です。AIに指示する側でいながら、AIの視点も借りる。この双方向の関係性が成果を生みます。",
    example: {
      before: "❌ 「プレゼン資料を作って」→返ってきたものをそのまま使って「なんかイマイチ」",
      after:
        '✅ 「このプレゼン資料の構成をレビューして。説得力が弱い部分はどこ？」→「なるほど。じゃあその部分をあなたが聞き手だったとして、どんな反論が出そう？」→「その反論への答えを盛り込んで書き直して」',
    },
  },
] as const;

const realUseCases = [
  {
    role: "30代・人事担当者",
    task: "採用面接の質問リスト作成",
    howTheyUse:
      "「エンジニア職の面接官なのですが、技術力と協調性を両方見られる質問を10個作ってください。答えを見れば人物像が見えてくるような質問がいい」と入力。返ってきた10問を見て「3番はもっと具体的なシナリオを使った質問にして」と修正指示。最終的に30分かかっていた準備が5分で終わるようになった。",
    insight: "具体的な条件（職種・目的）を初回に盛り込むと、一発目の精度が上がる",
  },
  {
    role: "40代・中小企業の営業マネージャー",
    task: "商談後のフォローメール作成",
    howTheyUse:
      "商談メモをそのまま貼り付けて「このメモを読んで、顧客へのお礼メールを作って。課題として挙がったコスト削減の部分に触れながら、次回のデモ提案につなげる内容で」と指示。毎回30分かかっていたフォローメールが5分になり、週に2〜3時間が浮くようになった。",
    insight: "「材料を丸ごと渡す」のが最速。整理してから渡そうとしない",
  },
  {
    role: "20代・フリーランスライター",
    task: "記事のアウトライン作成",
    howTheyUse:
      "「読者は30代の会社員で、副業を始めたいと思っている。副業の始め方記事のアウトラインを作って。読者が最も不安に思う3つのポイントを各セクションで解消する構成にして」と依頼。アウトラインが出てきたら「第3章の読者の不安がまだ薄い。もっと具体的な不安（時間がない・税金が怖い等）を入れて」と追加指示。",
    insight: "「読者像を渡す」のが構成の精度を上げる最大のコツ",
  },
  {
    role: "50代・経営者",
    task: "社内向け方針発表文の作成",
    howTheyUse:
      "「来期から全社でAIツールを導入します。抵抗感がある社員も多いので、押し付けにならず前向きになれるような社内発表文を書いてください。200字以内で」と依頼。返ってきた文章を読んで「少し抽象的。『最初は慣れないかもしれないが』のような共感の言葉を先に入れてほしい」と修正指示を出した。",
    insight: "「文字数制限」と「感情的な配慮」を初回に指定すると、修正が少なくて済む",
  },
  {
    role: "30代・マーケター",
    task: "競合調査の整理",
    howTheyUse:
      "競合他社のWebサイトから手動でコピーした情報をClaudeに貼り付けて「これを価格・ターゲット・強みの3軸で比較表にまとめて」と依頼。表が出てきたら「自社と比較して、一番差別化できそうな点はどこか？その理由を説明して」とさらに分析を依頼。",
    insight: "「情報収集」はAIより人間、「整理・分析」はAIが得意という役割分担が大切",
  },
] as const;

const checklistItems = [
  { category: "初回入力の習慣", item: "誰が・何のために・どんな条件かを最初に伝えているか", good: true },
  { category: "対話の習慣", item: "最初の回答に「追加指示」を出しているか（一発で終わらせていないか）", good: true },
  { category: "評価の習慣", item: "「なんか違う」と感じたとき、どこが違うかを言語化しているか", good: true },
  { category: "材料提供の習慣", item: "関連する情報・背景・制約をAIに渡しているか", good: true },
  { category: "役割分担の習慣", item: "最終判断・編集は自分がしているか（AIに丸投げしていないか）", good: true },
  { category: "記録の習慣", item: "うまくいったプロンプトをメモして次に活かしているか", good: true },
  { category: "避けるべきこと", item: "「完璧な答えを一発で求めて」一度の失敗で諦めていないか", good: false },
  { category: "避けるべきこと", item: "「検索感覚」で使って一発の回答だけで判断していないか", good: false },
] as const;

export default function AiResultsGapHonestGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIで成果が出る人・出ない人の本当の差" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="AIで成果が出る人・出ない人の本当の差｜使い方よりも大切な3つのマインドセット"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIで成果が出る人・出ない人の本当の差｜使い方よりも大切な3つのマインドセット
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTを使ってみた。でも、なんか違う気がする」「周りはAIで効率が上がったと言っているのに、自分は変わらない」——そのモヤモヤには、理由があります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            まず伝えておきたいのは、<strong>あなたが悪いわけでも、ツールの問題でもない</strong>ということです。
            成果が出ない原因の多くは、AIに対する「思考の構え」にあります。
            この記事では、成果を出している人と出せていない人の差を正直に分解し、今日から変えられる思考習慣をお伝えします。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマも参考に：
          <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIを「使えるようになった人」がやっていた5つのこと
          </Link>
          ・
          <Link href="/academy/blog/ai-mindset-3habits" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI時代に「使いこなせる人」になるための3つの思考習慣
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI最初の30日ガイド
          </Link>
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              成果が出ない原因はツールの問題ではなく「思考の構え」の問題
            </li>
            <li className="pl-1 marker:text-gray-500">
              差を生む3つのマインドセット：①70点で動く ②対話を重ねる ③一緒に考える
            </li>
            <li className="pl-1 marker:text-gray-500">
              成果を出している人は「完璧な一発」を求めず、対話プロセスで成果物を育てている
            </li>
            <li className="pl-1 marker:text-gray-500">
              習慣化のコツは「新しいツールとして使う」のではなく「今の仕事の流れにAIを組み込む」こと
            </li>
          </ul>
        </motion.section>

        {/* なぜ成果が出ないか */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-no-results" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「使えているのに成果が出ない」——その本当の理由
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを触ったことはある。使ったこともある。でも「なんか変わった気がしない」——この状態に陥る人の共通点があります。
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="text-base font-semibold text-red-800">成果が出ない人の共通パターン</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-red-900">
                <li className="pl-1 marker:text-red-400">「こんにちは」「要約して」など、指示が短すぎる</li>
                <li className="pl-1 marker:text-red-400">最初の回答が期待外れで、そこで止まる（追加指示を出さない）</li>
                <li className="pl-1 marker:text-red-400">AIの回答をそのまま使おうとして「微妙だな」と感じて諦める</li>
                <li className="pl-1 marker:text-red-400">「どのプロンプトがベスト？」と完璧な入力を探し続けて動かない</li>
                <li className="pl-1 marker:text-red-400">試した回数が少ない（週に1〜2回しか使っていない）</li>
              </ul>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="text-base font-semibold text-green-800">成果が出る人の共通パターン</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-green-900">
                <li className="pl-1 marker:text-green-400">最初の入力で状況・目的・制約を具体的に伝える</li>
                <li className="pl-1 marker:text-green-400">返ってきた回答に「追加指示」を出して対話を重ねる</li>
                <li className="pl-1 marker:text-green-400">70点の素材をもらって、残り30点は自分で編集する</li>
                <li className="pl-1 marker:text-green-400">毎日の仕事の中にAIを組み込んで使う（週1ではなく毎日）</li>
                <li className="pl-1 marker:text-green-400">失敗を「プロンプト改善のデータ」として記録する</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この差は、ツールの違いでも、知識の量でもありません。<strong>AIに対する「思考の構え」の違い</strong>です。
            次のセクションで、3つのマインドセットとして整理します。
          </p>
        </motion.section>

        {/* 3つのマインドセット */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="mindset-3" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            差を生む3つのマインドセット
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            成果が出る人と出ない人の差は、具体的に3つのマインドセットに分解できます。
            どれも、今日から意識を変えるだけで実践できます。
          </p>
          <div className="mt-8 space-y-8">
            {mindsets.map((mindset) => (
              <section key={mindset.id} id={mindset.id} className="scroll-mt-28 rounded-xl border-2 border-will-primary/20 p-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-base font-bold text-white">
                    {mindset.number}
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 line-through">{mindset.before}</p>
                    <h3 className="text-lg font-bold text-gray-900">→ {mindset.after}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{mindset.description}</p>
                <div className="mt-4 rounded-lg bg-will-lighter/50 p-4">
                  <p className="text-sm font-semibold text-will-primary">なぜそうなのか</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{mindset.truth}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm leading-7 text-gray-700">{mindset.example.before}</p>
                  <p className="text-sm leading-7 text-gray-700">{mindset.example.after}</p>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-results-gap-honest-guide" />
        </motion.section>

        {/* 成果を出している人の実際の使い方 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="real-use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            成果を出している人の実際の使い方5例
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            理想論ではなく、実際にどう使っているか。職種別の具体例で見てみましょう。
          </p>
          <p className="mt-2 text-xs text-gray-500">
            ※ AIリブートが収集した利用者の声をもとに、プライバシーに配慮して再構成した事例です。
          </p>
          <div className="mt-6 space-y-5">
            {realUseCases.map((useCase) => (
              <section key={useCase.role} className="rounded-xl border border-gray-200 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-will-primary/10 px-3 py-1 text-xs font-semibold text-will-primary">
                    {useCase.role}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">{useCase.task}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">{useCase.howTheyUse}</p>
                <div className="mt-3 rounded-lg bg-amber-50 px-4 py-2">
                  <p className="text-xs font-semibold text-amber-700">この事例から学べること</p>
                  <p className="mt-1 text-sm text-amber-900">{useCase.insight}</p>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* チェックリスト */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="checklist" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            今日から変えられる思考習慣チェックリスト
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            自分の現在地を確認しましょう。✅が少ないほど、そこに改善の余地があります。
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">カテゴリ</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">チェック項目</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">方向性</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {checklistItems.map((row) => (
                  <tr key={row.item} className={row.good ? "hover:bg-green-50/30" : "hover:bg-red-50/30"}>
                    <td className="px-4 py-3 text-xs font-medium text-gray-500">{row.category}</td>
                    <td className="px-4 py-3 text-gray-700">{row.item}</td>
                    <td className="px-4 py-3 text-center">
                      {row.good ? (
                        <span className="text-green-600 font-bold">✅ 良い習慣</span>
                      ) : (
                        <span className="text-red-500 font-bold">⚠️ 要注意</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            良い習慣が6個中4個以上できていれば、思考習慣は整っています。
            要注意項目に引っかかっていたら、そこを意識的に変えてみましょう。
          </p>
        </motion.section>

        {/* 続けることの難しさ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="continue-honestly" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「続けることの難しさ」と正直に向き合う
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここまで読んで「わかった、やってみよう」と思っても、多くの人が2週間後には元に戻ります。これは意志の問題ではありません。
            <strong>「新しいツールを使う」という心構えでいる限り、続けるのは難しい</strong>のです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            人は新しいことを「追加のタスク」として認識すると、忙しい時に最初にカットします。
            だから「AIを使う時間を作る」のではなく、「今やっている仕事の中でAIを使う」という組み込み方が必要です。
          </p>
          <div className="mt-6 space-y-3">
            <div className="rounded-lg border border-gray-200 p-4">
              <p className="text-sm font-semibold text-gray-700">❌ 続かない使い方</p>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                「今日はAI学習の時間」と別枠でスケジュールを組む。忙しくなるとその時間が最初に消える。
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-700">✅ 続く使い方</p>
              <p className="mt-2 text-sm leading-7 text-green-900">
                「メールを書く前にAIに下書きを頼む」「会議の前にAIと論点を整理する」——既存の仕事の流れに差し込む。
                このやり方なら、忙しい日でも自然にAIを使うことになります。
              </p>
            </div>
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            もう一つ正直に言っておくと、<strong>成果が出るまでには時間がかかります</strong>。
            最初の2週間は「慣れのコスト」の期間です。「まだ成果が感じられない」のは当然です。
            3週間目から「この作業はAIに頼めるな」という感覚が出てきます。
            そして1ヶ月後、AIを使わずに仕事をするのが少し面倒になっている自分に気づくはずです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートはその「慣れのコスト期間」を一人で乗り越えるのが難しい方のために、
            伴走する学習プログラムを提供しています。
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：もう一度、試してみてほしい
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事でお伝えしたことを振り返ります。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">成果が出ない原因はツールではなく、AIに対する「思考の構え」</li>
            <li className="pl-1 marker:text-gray-500">マインドセット①：「完璧な一発」を求めず、70点で動いて対話で育てる</li>
            <li className="pl-1 marker:text-gray-500">マインドセット②：検索ではなく対話——文脈を積み重ねて深める</li>
            <li className="pl-1 marker:text-gray-500">マインドセット③：「任せる」ではなく「一緒に考える」——最終判断は人間が行う</li>
            <li className="pl-1 marker:text-gray-500">続けるコツは「AI学習時間を作る」ではなく「今の仕事にAIを組み込む」</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIって自分には向いていないかも」と思い始めていた方に、読んだ後に「もう一度試してみよう」と感じてもらえたなら嬉しいです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ツールの使い方を覚える前に、<strong>AIとの向き合い方を変える</strong>——その小さな意識の変化が、
            3ヶ月後・半年後の大きな差になっています。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AIで人生をリブートする——その可能性を、もう一度信じてみてください。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="あなたの業種・職種に合ったプロンプト集を、AIリブートのLINEで受け取ろう"
            description="「自分の仕事に合ったAIの使い方がわからない」そんな方のために、業種別プロンプト50選をLINEでプレゼントしています。営業・人事・マーケ・事務・医療・教育など多業種に対応。まずは無料でご登録ください。"
            buttonLabel="LINEで業種別プロンプト50選を受け取る（無料）"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のステップ：具体的なプロンプトの書き方を学ぶ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            マインドセットを変えたら、次はプロンプトの書き方を体系的に学びましょう。
            「最初の入力で何を伝えればいいか」がわかると、AIの回答品質が一段上がります。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを「使えるようになった人」がやっていた5つのこと｜挫折しないためのリアルな始め方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-mindset-3habits" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代に「使いこなせる人」になるための3つの思考習慣【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-templates-50" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                すぐ使える！ChatGPTプロンプトテンプレート50選
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを仕事で使い始めた人の「最初の30日」完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-3month-journey" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを3ヶ月使い続けたら、こんな変化が起きた
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
