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

type AiSideJobGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const infoCheckedDate = "2026-02-24";

const keywordTags = ["AI 副業 始め方", "ChatGPT 副業 2026", "AI 副業 現実", "生成AI 副業 稼げる"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "intro", label: "「AIで副業」の現実" },
  { id: "types", label: "副業種別の現実評価" },
  { id: "cautions", label: "3つの注意点" },
  { id: "how-to-start", label: "始める順番" },
  { id: "conclusion", label: "正直な結論" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const summaryPoints = [
  "AIは副業を「より効率的に」してくれるが、副業を「ゼロから作り出す」わけではありません。",
  "「AIで簡単に稼げる」を謳う広告・高額セミナーは詐欺リスクが高く、注意が必要です。",
  "副業に使うAIツールは商用利用規約の確認が必須。特に画像・音楽系は著作権問題が未解決です。",
  "まず日常・仕事でAIを使いこなしてから副業を検討する順番が、最も失敗しにくい方法です。",
] as const;

const sideJobTypes = [
  {
    type: "文章・コンテンツ作成系",
    possibility: "中",
    possibilityColor: "yellow",
    examples: "ブログ記事執筆、SNS投稿文作成、ライティング代行",
    reality: "AIを使えば作業速度は上がる。ただし「品質と独自性」が問われるため、AIそのままでは評価されない。最終的な質は人間が担保する必要がある。",
    keyPoint: "AIは「アシスタント」として使い、編集・判断・責任は人間が持つ。",
  },
  {
    type: "翻訳・多言語コンテンツ",
    possibility: "中〜高",
    possibilityColor: "green",
    examples: "DeepL・ChatGPTで翻訳、専門分野の確認・修正",
    reality: "純粋な翻訳の単価は下がっているが、「専門分野の翻訳＋確認・修正」には依然として需要がある。専門知識を持っている人が有利。",
    keyPoint: "専門分野の知識とAI翻訳の組み合わせが価値を生む。",
  },
  {
    type: "画像・デザイン系",
    possibility: "低〜中",
    possibilityColor: "red",
    examples: "Midjourney・DALL-Eでの画像生成、素材販売",
    reality: "著作権問題が未解決。多くの素材サイトがAI生成素材をNG対象にしている。安易に始めると利用規約違反リスクがある。",
    keyPoint: "利用規約と著作権を徹底的に確認してから着手すること。",
  },
  {
    type: "AIコンサルティング・研修",
    possibility: "高（知識が必要）",
    possibilityColor: "green",
    examples: "中小企業・個人事業主へのAI活用サポート、社内研修",
    reality: "AIを実際に使いこなせるなら需要がある。ただし相応の知識、説明力、コミュニケーション力が必要。「少し使えるだけ」では通用しない。",
    keyPoint: "自分自身の業務でAIを徹底活用してから、教える立場に移るのが正しい順序。",
  },
  {
    type: "動画・音声コンテンツ",
    possibility: "中",
    possibilityColor: "yellow",
    examples: "AI音声・AI動画を使ったYouTube、ポッドキャスト",
    reality: "AIで制作コストは下がるが、「企画力・継続力・差別化」は人間に求められる。再生数・収益化まで時間がかかる。",
    keyPoint: "コンテンツの核となるアイデア・テーマ設計は人間の力が決める。",
  },
] as const;

const cautionItems = [
  {
    number: "01",
    title: "「AIを使う副業」ではなく「AIを道具にした自分の仕事」であること",
    body: "AIに全部やらせた成果物は、品質管理ができません。誤情報の混入、文体の不統一、著作権リスクなどが見えないまま納品されると、信頼を失います。「AIを使いながら、自分の判断・編集・責任が残る」仕事の設計が重要です。AIは道具であり、仕事の主体は常に人間です。",
  },
  {
    number: "02",
    title: "著作権・利用規約を必ず確認する",
    body: "各AIツールには商用利用に関する規約があります。「個人利用はOKだが商用はNG」「出力結果の二次利用に制限がある」ケースも存在します。画像生成AI・音楽生成AIは特に複雑で、「使えると思ったら使えなかった」リスクがあります。副業を始める前に、使用するツールの利用規約を必ず原文で確認してください。",
  },
  {
    number: "03",
    title: "「AIで楽して稼げる」は高確率で罠",
    body: "「AIを使えば誰でも月○万稼げる」「特別な知識不要」「今すぐ稼げる」を謳うセミナーや情報商材は、詐欺的なものが多く存在します。実際のAI副業には、AIを使えるスキル＋専門知識＋継続力のすべてが必要です。「楽して」ではなく「効率的に」という認識が現実的です。高額な塾・コース・ツール販売を強く勧めてくる場合は特に注意してください。",
  },
] as const;

const howToStartSteps = [
  {
    step: "Step 1",
    title: "まずAIを自分の日常・仕事で使いこなす（副業より先）",
    body: "副業を始める前に、日常業務や生活でAIを徹底的に使い込む期間が必要です。「AIで何ができて、何ができないか」を体感することが、副業で失敗しないための土台になります。",
  },
  {
    step: "Step 2",
    title: "得意分野 × AI活用のかけ算を探す",
    body: "「AIだけ」では差別化できません。あなたの専門知識・経験・スキルと、AIを組み合わせた「かけ算」こそが価値になります。会計知識があればAI×経理サポート、語学力があればAI×翻訳確認といった形です。",
  },
  {
    step: "Step 3",
    title: "小さく始めて、実績を作る",
    body: "最初から大きな案件を狙わず、小さな案件・低単価でも実績を作ることから始めます。実績があれば次の案件獲得が楽になり、単価も上げやすくなります。「完璧に準備してから」ではなく「小さく始めて改善する」が正解です。",
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

function PossibilityBadge({ level, color }: { level: string; color: string }) {
  const colorMap: Record<string, string> = {
    green: "bg-green-100 text-green-800 border-green-200",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
    red: "bg-red-100 text-red-800 border-red-200",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${colorMap[color] ?? colorMap.yellow}`}>
      可能性: {level}
    </span>
  );
}

export default function AiSideJobGuidePage({ faqItems }: AiSideJobGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIで副業を始める：現実的な可能性と注意点" },
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
            AIで副業を始める：現実的な可能性と3つの注意点【2026年版】
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-24">2026年2月24日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="AIで副業を始める：現実的な可能性と3つの注意点【2026年版】"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIを使って副収入を得たい」という気持ちはわかります。一方で「AIで月50万稼げる！」といった広告も溢れています。この記事では、AIを使った副業の現実を種別ごとに評価し、失敗しないための3つの注意点を正直にお伝えします。誇大広告に惑わされないための判断軸として役立ててください。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

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

        <motion.section
          id="intro"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">「AIで副業」の現実：半分は本当で、半分は誇張</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            「AIを使えば副業で月10万・50万稼げる」という話を見かけます。これは完全な嘘ではありません。しかし、「誰でも簡単に」「すぐに」という部分が大きく誇張されています。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIは確かに、文章作成・翻訳・画像生成・分析などの作業を速くしてくれます。ただし、それで「副業の仕事」が自動的に生まれるわけではありません。仕事を取るには、品質への責任、専門知識、継続する意志、そして顧客との信頼関係が必要です。これはAIを使っても変わりません。
          </p>
          <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">正直な前提</p>
            <p className="mt-2 text-sm leading-7 text-amber-700">
              AIは副業を「より効率的に」してくれます。しかし「副業を作り出す」のはあなた自身のスキル・知識・継続力です。AIはその乗数であり、掛け合わせる元の数が大きいほど効果が出ます。
            </p>
          </div>
        </motion.section>

        <motion.section
          id="types"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">副業種別の現実評価</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            代表的な5つの副業タイプについて、2026年時点での現実的な評価をまとめます。
          </p>
          <div className="mt-6 space-y-5">
            {sideJobTypes.map((item) => (
              <section key={item.type} className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-base font-semibold text-gray-900">{item.type}</h3>
                  <PossibilityBadge level={item.possibility} color={item.possibilityColor} />
                </div>
                <p className="mt-2 text-xs text-gray-500">例: {item.examples}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.reality}</p>
                <div className="mt-3 rounded bg-gray-50 px-4 py-2">
                  <p className="text-xs font-semibold text-gray-700">ポイント: {item.keyPoint}</p>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="cautions"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">失敗しないための3つの注意点</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AI副業でつまずく多くのケースは、この3つのどれかが原因です。始める前に必ず確認してください。
          </p>
          <div className="mt-6 space-y-5">
            {cautionItems.map((item) => (
              <section key={item.number} className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-2xl font-bold text-will-primary/30">{item.number}</span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-5">
            <p className="text-sm font-semibold text-red-800">詐欺的な「AI副業塾」に注意</p>
            <p className="mt-2 text-sm leading-7 text-red-700">
              「初心者でも月30万保証」「AI使うだけで稼げる」「今だけの特別価格」を謳う高額セミナーや情報商材は、詐欺率が高いです。正当なAI学習は、こうした誇大な収益保証をしません。判断基準は「無料・低価格で体験できるか」「実績が具体的に示されているか」「強引な勧誘がないか」の3点です。
            </p>
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="how-to-start"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AI副業を始めるならこの順番</h2>
          <div className="mt-6 space-y-4">
            {howToStartSteps.map((step) => (
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
          <p className="mt-6 text-sm leading-7 text-gray-700">
            関連記事:
            <Link href="/academy/blog/ai-freelance-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIフリーランス仕事ガイド
            </Link>
            ・
            <Link href="/academy/blog/ai-side-business-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI副業の稼ぎ方2026
            </Link>
            ・
            <Link href="/academy/blog/ai-content-sns-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIコンテンツ/SNS運用ガイド
            </Link>
          </p>
        </motion.section>

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">正直な結論</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIは副業を「より効率的に」してくれます。文章が速く書ける、翻訳のチェックが楽になる、アイデア出しが早くなる。これは本当のことです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            しかし、AIが「副業を作り出す」ことはありません。仕事を取るための専門知識、品質への責任、顧客との信頼構築、継続する意志、これらはAIを使っても変わらず人間に求められます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AI副業の本質は「自分のスキル・知識 × AI活用」です。掛け算なので、自分側の数字がゼロに近ければ答えもゼロに近くなります。まずAIを道具として使いこなす力をつけること。そこから始めるのが、最も現実的な道です。
          </p>
        </motion.section>

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

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AIを道具として使いこなすための基礎から学びたい方へ</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            副業で成果を出すには、ツールの使い方だけでなく「AIを自分の強みと組み合わせる設計力」が必要です。AIリブートアカデミーでは、次の3本柱を軸に、AI活用と自己理解・キャリア設計を一体で支援しています。
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
