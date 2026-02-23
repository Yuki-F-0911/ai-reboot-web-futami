"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiJobAnxietyGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const infoCheckedDate = "2026-02-24";

const keywordTags = ["AI 仕事 奪われる", "AI 雇用 影響 2026", "AI 失業 不安", "生成AI 仕事 なくなる"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "anxiety-is-normal", label: "その不安は正常です" },
  { id: "replaced-jobs", label: "AIが実際に置き換えた仕事" },
  { id: "ai-weaknesses", label: "AIが苦手なこと（2026年現在）" },
  { id: "risk-by-job", label: "職種別リスク評価（正直版）" },
  { id: "mindset-shift", label: "「奪われない」より「AIと働く」" },
  { id: "three-steps", label: "今から始める3ステップ" },
  { id: "reskilling", label: "学び直しへの現実的なアドバイス" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const summaryPoints = [
  "「AIに仕事を奪われる」という不安は正常。変化が速すぎる時代に不安を感じない方がおかしい。",
  "一部の仕事はすでに置き換わっている事実を直視することが、正しい対応への第一歩です。",
  "「職種」ではなく「その仕事の中のどの作業か」で考えると、リスクが正確に見えてきます。",
  "「AIに奪われない」を目指すより「AIと働く人」になる方が、現実的かつ合理的な戦略です。",
  "AIを使い始めるのに年齢制限も特別なスキルも不要。今日からChatGPTを仕事で使うだけで十分です。",
] as const;

const replacedJobs = [
  {
    area: "データ入力・単純集計",
    reality: "すでに大幅削減。RPA（自動化ツール）とAIの組み合わせで、人が手作業で行う量は激減しています。",
    level: "high",
  },
  {
    area: "基本的な翻訳",
    reality: "DeepL・ChatGPTの登場で翻訳の品質は上がり、価格は下落。「翻訳だけ」で食べていくのは難しくなっています。",
    level: "high",
  },
  {
    area: "標準化されたコンテンツ作成",
    reality: "SEO記事・定型文書・商品説明文など、テンプレート的な文章はAIが高速・低コストで生成できます。",
    level: "high",
  },
  {
    area: "顧客対応の一部（FAQチャットボット）",
    reality: "よくある問い合わせへの自動応答はAIが担当。コールセンターの問い合わせ件数は減少傾向にあります。",
    level: "medium",
  },
] as const;

const aiWeaknesses = [
  {
    title: "初対面の人間との信頼関係構築",
    body: "AIは情報を処理しますが、「この人が信頼できる」という感情的・直感的な判断は人間の得意領域です。営業・カウンセリング・採用面接など、信頼が核になる仕事はAIに代替されにくい。",
  },
  {
    title: "身体を使う仕事の実作業",
    body: "介護・医療行為・建設現場・調理の実作業など、物理的な環境での繊細な作業はロボット技術の進化が必要で、汎用的な代替はまだ先です。",
  },
  {
    title: "高度な文脈判断が必要な創造的仕事",
    body: "「なぜこのクライアントにはこのアプローチが刺さるのか」「この社会状況で何が響くのか」という複雑な文脈判断を伴う創造的な仕事は、AIにはまだ難しい。",
  },
  {
    title: "「責任をとる」ことが必要な意思決定",
    body: "経営判断・医療診断・法的判断など、結果に対して責任を持つ意思決定は、2026年現在もAIに丸投げできません。AIは支援ツールであり、最終責任は人間が持ちます。",
  },
] as const;

const riskLevels = [
  {
    risk: "高リスク",
    color: "red",
    jobs: ["データ入力・転記作業", "電話応対の定型業務", "簡易翻訳（専門知識不要の一般文書）", "定型文書作成（稟議書・議事録等のテンプレート作業）"],
    note: "これらの「作業」はすでに置き換えが進んでいます。ただし「職種」ではなく「作業」単位での評価が重要です。",
  },
  {
    risk: "中リスク",
    color: "yellow",
    jobs: ["一般的なライティング・コピーライティング", "経理の入力・仕訳の一部", "カスタマーサポートの一般対応", "基本的なデータ分析・レポート作成"],
    note: "完全に置き換わるわけではなく、「AIを使いこなせる人」が担う仕事に変化していく領域です。",
  },
  {
    risk: "低リスク",
    color: "green",
    jobs: ["高度な専門職（医師・弁護士・公認会計士等）", "対人サービス・ケアワーク（介護・保育・カウンセリング）", "身体を使う職人仕事（建設・調理・修繕）", "創造的かつ責任ある意思決定が必要な仕事"],
    note: "「職種」が低リスクでも、その中の定型的な作業はAIが担う部分が増えます。",
  },
] as const;

const threeSteps = [
  {
    step: "Step 1",
    title: "AIを恐れる前に、まず体験する",
    body: "ChatGPTやClaudeを使って、自分の仕事の一部をやらせてみてください。「メールの下書き」「会議の要約」「アイデア出し」など小さなことから始める。体験なき恐れは不安を増幅させるだけです。実際に触れると「使えること」と「使えないこと」が見えてきます。",
  },
  {
    step: "Step 2",
    title: "「AIでできること」と「自分の強み」を分けて整理する",
    body: "自分の仕事をリストアップして、AIに任せられる作業と、自分の経験・判断・関係性が必要な仕事を分けてみてください。この整理をすることで、「自分が本当に価値を生んでいる部分」が明確になります。",
  },
  {
    step: "Step 3",
    title: "AIに任せた時間で、自分の強みを深める",
    body: "AIが定型作業を担うことで生まれた時間を、人間にしかできない仕事に使ってください。より深い顧客理解、より複雑な課題解決、より高度な専門性の習得。AIは「時間を作ってくれる道具」として使うのが最も合理的です。",
  },
] as const;

const reskillingPoints = [
  {
    title: "「AIを学ぶ」より「AIを使う」が大事",
    body: "AIの仕組みや理論を学ぶより、実際に仕事でChatGPTを使う方がはるかに早く実力がつきます。「どうやって動いているか」より「何ができるか・どう使うか」を中心に置いてください。",
  },
  {
    title: "特別なスキルは不要。今日から始められる",
    body: "プログラミングも数学も必要ありません。今日からChatGPTのアカウントを作り、明日の仕事でメールの下書きを1本依頼してみる。それだけで「AIを使いこなす人」への第一歩です。",
  },
  {
    title: "40代・50代でも遅くはない（事実）",
    body: "AIツールは若者専用ではありません。むしろ豊富な業務経験・専門知識・人的ネットワークを持つ40代・50代こそ、AIを組み合わせることで大きな力を発揮できます。「今さら」ではなく「今だからこそ」です。",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "ツールの操作だけでなく、業務課題へのAI活用設計と成果への接続力を身につけます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "自分の強みとAIを掛け合わせた「自分だけの価値」を言語化し、キャリア設計へつなげます。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "実践レビューと対話を通じて改善を継続し、独学では得られない再現性のある成長を作ります。",
  },
] as const;

const riskColorMap: Record<string, { border: string; bg: string; badge: string; text: string; note: string }> = {
  red: {
    border: "border-red-200",
    bg: "bg-red-50",
    badge: "bg-red-100 text-red-800 border-red-200",
    text: "text-red-900",
    note: "text-red-700",
  },
  yellow: {
    border: "border-yellow-200",
    bg: "bg-yellow-50",
    badge: "bg-yellow-100 text-yellow-800 border-yellow-200",
    text: "text-yellow-900",
    note: "text-yellow-700",
  },
  green: {
    border: "border-green-200",
    bg: "bg-green-50",
    badge: "bg-green-100 text-green-800 border-green-200",
    text: "text-green-900",
    note: "text-green-700",
  },
};

export default function AiJobAnxietyGuidePage({ faqItems }: AiJobAnxietyGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIに仕事を奪われる？という不安に正直に答える" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            AIに仕事を奪われる？という不安に正直に答える【2026年版】
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-24">2026年2月24日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="AIに仕事を奪われる？という不安に正直に答える【2026年版】"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIに仕事を奪われるのでは…」という不安、あなたも感じていますか？その不安は正常です。変化が速すぎる時代に、不安を感じない方がおかしい。ただ、何が本当に変わっていて、何は変わっていないのかを正確に知ることが大切です。この記事では根拠なき楽観論も過度な恐怖論も言わず、現実を直視しながら前向きな行動指針をお伝えします。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-blue-800">確認日: {infoCheckedDate}</p>
        </motion.section>

        {/* その不安は正常です */}
        <motion.section
          id="anxiety-is-normal"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">その不安は正常です</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            「AIに仕事を奪われる」という不安を感じているなら、あなたは現実を見る力があります。事実として、ChatGPT登場以降の2年ほどで、特定の業務領域は明らかに変化しています。不安は現実認識の正常な反応です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            同時に、「みんな失業する」という過度な恐怖論も事実とは異なります。AIが人間のすべての仕事を置き換えるシナリオは、2026年時点では現実的ではありません。大切なのは「何が変わっていて、何は変わっていないか」を冷静に見極めることです。
          </p>
          <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">この記事の立場</p>
            <p className="mt-2 text-sm leading-7 text-amber-700">
              「大丈夫！心配しなくていい」という根拠なき楽観論も、「AIで大量失業が起きる」という過度な恐怖論も、どちらも言いません。現実を直視しながら、今から取れる行動を一緒に考えます。
            </p>
          </div>
        </motion.section>

        {/* AIが実際に置き換えた仕事 */}
        <motion.section
          id="replaced-jobs"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">現実①：AIが実際に置き換えた仕事</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            まず直視すべき現実があります。AIはすでに特定の作業を人間から引き取り始めています。「まだ先の話」ではなく、今起きていることです。
          </p>
          <div className="mt-6 space-y-4">
            {replacedJobs.map((item) => (
              <section key={item.area} className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-base font-semibold text-gray-900">{item.area}</h3>
                  {item.level === "high" && (
                    <span className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
                      置き換え進行中
                    </span>
                  )}
                  {item.level === "medium" && (
                    <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                      一部置き換え
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.reality}</p>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-800">直視することが大切</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              これらはすでに起きていることです。「自分には関係ない」と目を背けるより、「自分の仕事の中にこういう作業はあるか？」と点検する方が、次の一手を考えやすくなります。
            </p>
          </div>
        </motion.section>

        <LineCtaBox />

        {/* AIが苦手なこと */}
        <motion.section
          id="ai-weaknesses"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">現実②：AIが苦手なこと（2026年現在）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            一方で、AIにはまだ明確な苦手領域があります。全体の仕事の中で「AIが置き換えた部分」はまだ一部です。以下は2026年現在、AIが本質的に苦手とすることです。
          </p>
          <div className="mt-6 space-y-4">
            {aiWeaknesses.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">重要な視点</p>
            <p className="mt-2 text-sm leading-7 text-blue-700">
              「全体の一部しか置き換わっていない」というのが2026年の現実です。技術は進化し続けますが、今この瞬間、あなたの価値は消えていません。大切なのは、変化に先手を打って動くことです。
            </p>
          </div>
        </motion.section>

        {/* 職種別リスク評価 */}
        <motion.section
          id="risk-by-job"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">職種別リスク評価（正直版）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            「自分の仕事は大丈夫か」を考える上で、大切な視点があります。「職種」ではなく、「その仕事の中のどの作業か」で判断することです。同じ「営業職」でも、定型的な資料作成はリスクが高く、顧客との関係構築はリスクが低い。
          </p>
          <div className="mt-6 space-y-5">
            {riskLevels.map((item) => {
              const colors = riskColorMap[item.color];
              return (
                <section key={item.risk} className={`rounded-lg border p-5 ${colors.border} ${colors.bg}`}>
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-bold ${colors.badge}`}>
                    {item.risk}
                  </span>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                    {item.jobs.map((job) => (
                      <li key={job} className="pl-1">
                        {job}
                      </li>
                    ))}
                  </ul>
                  <p className={`mt-3 text-xs leading-6 ${colors.note}`}>{item.note}</p>
                </section>
              );
            })}
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-800">判断の基本：「作業」単位で考える</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              あなたの職種が「低リスク」でも、その職種の中に「高リスク作業」が含まれている場合があります。逆に、「高リスク」とされる職種でも、AIを使いこなせば仕事はなくならず「より価値の高い仕事」にシフトできます。
            </p>
          </div>
        </motion.section>

        <LineCtaBox />

        {/* 「奪われない」より「AIと働く」 */}
        <motion.section
          id="mindset-shift"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">「AIに奪われない」より「AIと働く」という発想転換</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            「AIに仕事を奪われないようにする」という守りの発想より、「AIを使いこなせる人になる」という攻めの発想の方が合理的です。守ることに意識を向けると、変化への適応が遅れます。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">AIを恐れる人</h3>
              <p className="mt-2 text-sm leading-7 text-gray-500">
                AIの進化を横目で見ながら「まだ大丈夫」と思い続け、気づいたときには選択肢が狭まっている。
              </p>
            </section>
            <section className="rounded-lg border border-will-primary/20 bg-will-lighter p-5">
              <h3 className="text-sm font-semibold text-will-primary">AIと働く人</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                AIに定型作業を任せ、自分は判断・創造・関係構築に集中。仕事の質と生産性が上がり、より価値の高い仕事にシフトしている。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">AIに翻弄される人</h3>
              <p className="mt-2 text-sm leading-7 text-gray-500">
                「AIが仕事を奪う」という情報に振り回され、不安だけが増えて具体的な行動に移れない。
              </p>
            </section>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            実際にAIを使って業務効率が上がった人は、仕事を失うのではなく「より価値の高い仕事」にシフトしています。AIは脅威ではなく、使いこなせれば強力な味方です。重要なのは「使う側」に早く移行することです。
          </p>
        </motion.section>

        {/* 今から始める3ステップ */}
        <motion.section
          id="three-steps"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">今から始めること（具体的3ステップ）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            「何をすればいいかわからない」という人のために、今日から始められる具体的な3ステップをまとめます。
          </p>
          <div className="mt-6 space-y-4">
            {threeSteps.map((step) => (
              <section key={step.step} className="flex gap-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
                <div className="flex-shrink-0">
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 学び直しへの現実的なアドバイス */}
        <motion.section
          id="reskilling"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">「学び直し」への現実的なアドバイス</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            「AIに対応するために学び直しが必要」とよく言われます。ただし、何をどう学ぶかについては、現実的な視点が必要です。
          </p>
          <div className="mt-6 space-y-4">
            {reskillingPoints.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-will-primary/20 bg-will-lighter p-5">
            <p className="text-sm font-semibold text-will-primary">リスキリング助成金の活用も</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              政府・自治体・企業の教育訓練給付制度を活用すれば、AI学習のコストを大幅に抑えられる場合があります。在職中の学び直しを支援する制度が整いつつあります。詳しくは
              <Link
                href="/academy/blog/dx-reskilling-subsidy-guide"
                className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                DX・リスキリング補助金ガイド
              </Link>
              をご参照ください。
            </p>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            関連記事:
            <Link
              href="/academy/blog/reskilling-over-40"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              40代からのリスキリング
            </Link>
            ・
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        {/* Academy CTA */}
        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AIと上手く付き合う方法を、自分のペースで学べる環境</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            「AIが怖い」「何から始めればいいかわからない」という方に向けて、AIリブートアカデミーではAI活用の基礎から実践まで、自分のペースで学べる環境を提供しています。年齢・経験問わず参加できます。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-white/80 bg-white p-4">
                <h3 className="text-sm font-semibold text-will-primary">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-growth"
            >
              アカデミーの詳細を見る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-will-primary/30 px-6 py-3 text-sm font-semibold text-will-primary transition-colors hover:border-will-primary hover:bg-white"
            >
              無料相談を予約する
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
