"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import {
  ArticleH2,
  ArticleH3,
  Callout,
  SummaryBox,
  RichTable,
  RichFAQ,
} from "@/components/blog/ArticleBody";

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

const keywordTags = ["AI 頼りすぎ", "AI 依存", "健全なAI活用", "AI 思考力", "AI 付き合い方"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "checklist", label: "AIを使いすぎ？使わなすぎ？診断" },
  { id: "dependency-reality", label: "AI依存の正体" },
  { id: "when-to-use", label: "使うべき場面・自分でやるべき場面" },
  { id: "seven-rules", label: "健全なAI活用の7つのルール" },
  { id: "one-week-plan", label: "1週間のAI活用改善プラン" },
  { id: "human-skills", label: "AI時代に必要な人間ならではの能力" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ" },
] as const;

const summaryItems = [
  "AIへの依存は「使い方」の問題。AIに考える作業を丸投げすれば思考力は鈍るが、「考えてからAIで強化する」使い方なら思考の質が上がる",
  "AI過剰依存のサインは5つ：AIなしで自信がない・回答を検証しない・考える前に質問する・自分の文章に自信がない・AI不使用の時間がほぼない",
  "AIが得意な作業（繰り返し・情報整理・下書き）と人間が担うべき作業（最終判断・対人関係・創造的思考）を意識してすみ分けることが重要",
  "健全な関係の核心：①考えてからAIに聞く、②AI回答を疑う習慣、③AI不使用の時間を作る、④任せる範囲を自分で決める",
  "AIを「思考の代替」ではなく「思考の増幅器」として使うことで、人間の判断力・創造力を守りながら生産性を高められる",
] as const;

const sevenRules = [
  {
    number: "ルール1",
    title: "考えてからAIに聞く（アウトプットをAIで強化する）",
    content:
      "最も重要なルールです。何かに困ったとき、すぐにAIに聞くのではなく「自分はどう思うか」を先にメモするか、頭の中で整理してから質問します。「自分の考え：〇〇だと思う。これについてどう思う？」という形でAIに投げかけると、AIの回答が自分の考えを検証・補強するツールになります。最初に自分で考えることで、AIの誤りにも気づきやすくなります。",
    icon: "🧠",
  },
  {
    number: "ルール2",
    title: "AIの回答を必ず疑う（盲信しない）",
    content:
      "AIは「もっともらしい文章」を生成するのが得意ですが、事実と異なる情報（ハルシネーション）が混入することがあります。特に数字・固有名詞・法律・医療情報は必ず一次ソースで確認する習慣をつけましょう。「この情報の出典は？」とAI自身に聞くことも有効ですが、出典自体が存在しない場合もあるため注意が必要です。AIを「まず疑う相手」と思うことで、情報リテラシーが鍛えられます。",
    icon: "🔍",
  },
  {
    number: "ルール3",
    title: "AI不使用の時間を意識的に作る",
    content:
      "毎日AIを使っている人は、週に1〜2回「AIなしで考える時間」を設けましょう。会議の前に「AI未使用で議題への意見をまとめる5分」を作る、朝のメール処理を一度AIなしでやってみる、日記や思考メモをAIに頼らず書いてみるなど、小さな「AI断ち」を習慣化するだけで思考力の維持につながります。デジタルデトックスと同じ感覚です。",
    icon: "⏸️",
  },
  {
    number: "ルール4",
    title: "AIに任せる範囲を自分で決める",
    content:
      "「この種類の仕事はAIに任せる、この種類は自分でやる」という自分なりのルールを明文化しましょう。たとえば「文書の下書きはAIに頼む、最終チェックと送信は必ず自分でやる」「アイデア出しはAIと壁打ち、最終決定は自分」のように、任せる範囲と自分でやる範囲の境界線を先に決めておくと、無意識の丸投げが防げます。",
    icon: "📋",
  },
  {
    number: "ルール5",
    title: "学びの機会としてAIを使う（答えではなくプロセスを）",
    content:
      "答えをもらうだけでなく、「なぜその答えになるのか」を理解することを意識しましょう。「この提案書の構成が良い理由を説明して」「このコードの動作原理を初心者向けに説明して」と、理解を深める使い方をすることで、AIを使えば使うほど自分のスキルも上がります。「釣りの仕方を教えてもらう」のがこのルールの核心です。",
    icon: "📚",
  },
  {
    number: "ルール6",
    title: "プライバシーラインを決める",
    content:
      "「AIに入力しない情報」のルールを自分で設定しましょう。最低限のラインは：①個人を特定する情報（氏名・住所・電話番号・マイナンバー）、②他者の個人情報、③会社の機密情報・未発表情報、④医療・金融に関する具体的な他者の情報。チャット履歴はサービス側に保存されるため「これが流出しても困らないか？」を基準に判断してください。有料プランでは学習利用をオフにできる設定もあります。",
    icon: "🔒",
  },
  {
    number: "ルール7",
    title: "AIを「仕事の道具」として使い、「思考の代替」にしない",
    content:
      "最終的に最も重要なルールです。スプレッドシートが計算を代わりにやってくれるように、AIは特定の作業を代替してくれるツールです。しかし、「何を作るか」「誰に届けるか」「どう伝えるか」といった思考の中核はあなたが担うべき部分です。AIが最終的なゴールを決めることはできません。道具の主人は自分であるという意識を保ち続けることが、長期的な思考力・判断力の維持につながります。",
    icon: "⚖️",
  },
] as const;

const weeklyPlan = [
  {
    day: "Day 1（月曜）",
    theme: "現状把握",
    action:
      "今日1日、AIをいつ・何に・どれだけ使ったかメモする。「なぜAIを使ったか」の理由も書き添える。依存しているパターンが見えてくる。",
  },
  {
    day: "Day 2（火曜）",
    theme: "「考えてから聞く」を実践",
    action:
      "AIに質問する前に、必ず自分の考えを1〜3行書いてから質問する。「自分の考え：〇〇と思う。これは正しい？」という形式で。",
  },
  {
    day: "Day 3（水曜）",
    theme: "AI不使用の時間を作る",
    action:
      "午前中の最初の1時間、または昼休みは意図的にAIを使わず、自分だけで考えてみる。強制的に自力で仕事をすることで、AIに任せてきた作業の感覚を取り戻す。",
  },
  {
    day: "Day 4（木曜）",
    theme: "AIの回答を検証する",
    action:
      "AIが出した情報を1つ選んで、必ず公式サイト・記事で事実確認する習慣をつける。「AIが言ったから正しい」ではなく「正しいか確かめてから使う」思考回路を作る。",
  },
  {
    day: "Day 5（金曜）",
    theme: "任せる範囲を言語化する",
    action:
      "「AIに任せていい仕事」「自分がやるべき仕事」を箇条書きでリストアップする。曖昧になっていた境界線を明確にすることで、意識的なAI活用に変わる。",
  },
  {
    day: "Day 6（土曜）",
    theme: "学びとして使う",
    action:
      "普段AIに「答えをもらっている」何かを選び、今日は「なぜそうなるかを教えてもらう」使い方に切り替える。理解を深める質問（「なぜ？」「どうやって？」）を意識的に多くする。",
  },
  {
    day: "Day 7（日曜）",
    theme: "振り返りと次週のルール設定",
    action:
      "1週間を振り返り、「どんなときにAIに頼りすぎた？」「どんな使い方が良かった？」を書き出す。来週のAI活用ルールを3つだけ決める。シンプルなルールほど続きやすい。",
  },
] as const;

export default function AiHealthyUsageGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "健全なAI活用の7つのルール" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
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
                title="AIに頼りすぎていない？健全なAI活用のための7つのルール"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIに頼りすぎていない？健全なAI活用のための7つのルール｜思考力・判断力を守りながら使う方法
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTに何でも聞いてしまって、自分で考えなくなっている気がする」——AIを使い始めた方から、こんな声をよく聞きます。
            一方で「AIをうまく使えなくて、結局使わずに仕事している」という悩みも少なくありません。
            AI活用の本当の問題は、「使う・使わない」ではなく、<strong>「どう使うか」</strong>にあります。
            この記事では、AI依存の正体を正直に分析し、思考力・判断力を守りながらAIを最大限活用するための
            「健全なAI活用の7つのルール」を具体的に紹介します。
            AIとの関係を見直したい方に、実践的なヒントをお届けします。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIへの不安を乗り越えるガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIハルシネーション対策ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-data-leak-patterns" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIの情報漏えいパターン
          </Link>
          ・
          <Link href="/academy/blog/ai-privacy-safety-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIプライバシー・安全ガイド
          </Link>
          もあわせてご覧ください。
        </p>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox title="要点まとめ（結論先出し）" items={summaryItems} />
        </motion.section>

        {/* 診断チェックリスト */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="checklist">「AIを使いすぎ？使わなすぎ？」診断チェックリスト</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まず、あなた自身のAI活用状況を確認してみましょう。それぞれの項目について、あてはまるものをチェックしてください。
          </p>

          <Callout type="warning" title="AI過剰依存のサイン（2つ以上当てはまる場合は要注意）">
            <ul className="space-y-2">
              <li>☐ AIなしでは同じ仕事をこなせる自信がない</li>
              <li>☐ AIの回答をほとんど確認・検証せずにそのまま使っている</li>
              <li>☐ 自分の意見をまとめる前に、すぐAIに質問している</li>
              <li>☐ AIなしで書いた文章に自信が持てなくなった</li>
              <li>☐ 仕事中にAIを使わない時間がほとんどない</li>
              <li>☐ 会議でAIに聞いてから発言するのが当たり前になっている</li>
            </ul>
          </Callout>

          <Callout type="info" title="AI活用不足のサイン（2つ以上当てはまる場合も改善の余地あり）">
            <ul className="space-y-2">
              <li>☐ AIを使うべきシーンが分からず、結局ほとんど使っていない</li>
              <li>☐ 繰り返し作業や下書き作成に毎回時間がかかっている</li>
              <li>☐ 同僚がAIで効率化しているのを見て焦りを感じている</li>
              <li>☐ AIを使いたいが、何から始めればいいか分からない</li>
              <li>☐ AIはエンジニアや専門家のものだと思っている</li>
            </ul>
          </Callout>

          <p className="mt-6 text-base leading-8 text-gray-700">
            過剰依存側も、活用不足側も、どちらも「AIとの関係の見直し」が必要なサインです。
            このどちらかにあてはまる方に向けて、以降で具体的な対処法を解説します。
          </p>
        </motion.section>

        {/* AI依存の正体 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="dependency-reality">AI依存の正体：どんな時に問題になるのか</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AI依存」という言葉は漠然としています。実際にどんな状況が問題になるのかを、具体的な失敗例で見てみましょう。
          </p>

          <ArticleH3>失敗例1：ハルシネーションを検証せずに使ってしまう</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            営業資料にAIが出した市場規模の数字を確認せずに使い、クライアントの前で指摘されて恥をかいた——これはよく聞くケースです。
            AIは「もっともらしい数字」を自信満々に出力しますが、事実と違う場合があります。
            AIへの過信は、情報の正確性を担保すべき場面で深刻な問題を引き起こします。
          </p>

          <ArticleH3>失敗例2：自分の言葉で話せなくなる</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            メールも報告書もAIが作った文章をそのまま使い続けると、「自分の言葉で伝える力」が少しずつ鈍ります。
            上司や顧客から「最近のメールは何か違う」と言われたり、口頭で同じ内容を説明しようとすると言葉が出てこなかったりする問題が起きます。
            文章力は使わなければ維持できません。
          </p>

          <ArticleH3>失敗例3：判断を先送りしてAIに委ねる</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            「どちらのプランがいいか」「このリスクをどう評価するか」——判断に迷うとすぐAIに聞いて、その答えをそのまま採用する習慣がつくと、
            「自分はどうしたいのか」を考える機会が失われます。AIは合理的な選択肢を提示しますが、
            その判断の責任を取るのは常に人間です。自分で考えて決める練習を意識的にしないと、判断力が鈍ります。
          </p>

          <ArticleH3>失敗例4：創造的な発想がAI的になる</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            アイデア出しを常にAIに頼ると、「AIが出しやすいアイデア」しか選ばなくなる傾向が生まれます。
            AIは学習データの統計的な平均に基づいてアイデアを出すため、独創的・非線形な発想は出にくい側面があります。
            自分の経験・直感・感情から生まれる発想を大切にするためにも、アイデア出しは最初に自力でやることが重要です。
          </p>

          <p className="mt-4 text-base leading-8 text-gray-700">
            これらの失敗例に共通するのは、<strong>AIに「思考の代替」をさせてしまっていること</strong>です。
            「道具として使う」と「代わりに考えてもらう」の境界線を意識することが、健全なAI活用の核心です。
          </p>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-healthy-usage-guide" />
        </motion.section>

        {/* 使うべき場面・自分でやるべき場面 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="when-to-use">AIを使うべき場面・自分でやるべき場面の見分け方</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            何でもAIに任せるのも、何もAIに頼らないのも、どちらも非効率です。
            「AIが得意なこと」と「人間が担うべきこと」を整理して、賢くすみ分けましょう。
          </p>

          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">作業の種類</th>
                <th className="px-4 py-3 font-semibold text-gray-900 bg-green-50">AIに任せる（推奨）</th>
                <th className="px-4 py-3 font-semibold text-gray-900 bg-amber-50">自分でやる（推奨）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">文書・文章</td>
                <td className="px-4 py-3 text-gray-600 bg-green-50/30">下書き生成、文体変換、要約、誤字脱字チェック</td>
                <td className="px-4 py-3 text-gray-600 bg-amber-50/30">最終チェック・送信、重要な主張の決定、感情を込めた表現</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">情報収集・リサーチ</td>
                <td className="px-4 py-3 text-gray-600 bg-green-50/30">アイデア出しの壁打ち、既知情報の整理・構造化</td>
                <td className="px-4 py-3 text-gray-600 bg-amber-50/30">重要な数字・事実の一次ソース確認、専門的判断</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">意思決定</td>
                <td className="px-4 py-3 text-gray-600 bg-green-50/30">選択肢の列挙、メリット・デメリットの整理</td>
                <td className="px-4 py-3 text-gray-600 bg-amber-50/30">最終判断・決定、リスク評価、倫理的判断</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">コミュニケーション</td>
                <td className="px-4 py-3 text-gray-600 bg-green-50/30">定型メールの下書き、資料の骨子作成</td>
                <td className="px-4 py-3 text-gray-600 bg-amber-50/30">顧客・取引先との直接対話、クレーム対応、信頼構築</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">創造・企画</td>
                <td className="px-4 py-3 text-gray-600 bg-green-50/30">アイデアの多様な展開、参考事例の列挙</td>
                <td className="px-4 py-3 text-gray-600 bg-amber-50/30">核となる独自アイデアの発想、コンセプトの本質決定</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">学習・スキルアップ</td>
                <td className="px-4 py-3 text-gray-600 bg-green-50/30">概念の説明要請、不明点の質問、理解度チェック</td>
                <td className="px-4 py-3 text-gray-600 bg-amber-50/30">実際に手を動かす練習、試行錯誤のプロセス、深い理解の獲得</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">繰り返し作業</td>
                <td className="px-4 py-3 text-gray-600 bg-green-50/30">テンプレートへの情報入力、フォーマット変換、翻訳</td>
                <td className="px-4 py-3 text-gray-600 bg-amber-50/30">品質基準の設定、例外ケースの判断、成果物の最終確認</td>
              </tr>
            </tbody>
          </RichTable>

          <p className="mt-4 text-base leading-8 text-gray-700">
            一般則として、<strong>「繰り返し・定型・情報整理」はAIが得意</strong>で、
            <strong>「最終判断・対人関係・創造的な核心部分」は人間が担うべき</strong>领域です。
            この区別を意識するだけで、AIとの関係は大きく健全になります。
          </p>
        </motion.section>

        {/* 7つのルール */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="seven-rules">健全なAI活用の7つのルール</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            理念ではなく、明日から実践できる具体的なルールとして7つを紹介します。
            すべてを一度に始める必要はありません。まず1〜2つを選んで試してみてください。
          </p>
          <div className="mt-8 space-y-6">
            {sevenRules.map((rule) => (
              <section key={rule.number} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{rule.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-will-primary/10 px-3 py-1 text-xs font-bold text-will-primary">
                        {rule.number}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{rule.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-8 text-gray-700">{rule.content}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 1週間プラン */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="one-week-plan">実践：1週間のAI活用改善プラン</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            7つのルールをいきなりすべて実践しようとすると続きません。1週間かけて段階的に取り入れるプランを紹介します。
            各日のアクションはどれも5〜15分でできる小さなものです。
          </p>
          <div className="mt-8 space-y-4">
            {weeklyPlan.map((item) => (
              <div key={item.day} className="flex gap-4 rounded-xl border border-gray-200 p-5">
                <div className="flex min-w-[100px] flex-col">
                  <span className="text-sm font-bold text-will-primary">{item.day}</span>
                  <span className="mt-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    {item.theme}
                  </span>
                </div>
                <p className="text-sm leading-7 text-gray-700">{item.action}</p>
              </div>
            ))}
          </div>
          <Callout type="tip" title="1週間後に確認すること">
            <ul className="space-y-1">
              <li>自分で考えてからAIに聞く習慣がついてきたか？</li>
              <li>AIの回答を検証することが自然になってきたか？</li>
              <li>AIを使わない時間に何か気づきがあったか？</li>
            </ul>
            3つすべてに「少しできた」と感じたら、健全なAI活用への第一歩が踏み出せています。
          </Callout>
        </motion.section>

        {/* 人間ならではの能力 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="human-skills">AI時代に必要な「人間ならではの能力」とは</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIが急速に進化する中で、「AIに置き換えられない人間の強み」はどこにあるのでしょうか。
            健全なAI活用を続けることで守られる、人間ならではの能力を整理します。
          </p>

          <ArticleH3>①批判的思考力（クリティカルシンキング）</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            AIの出力を「疑い、検証し、改善する」能力は、AIを使えば使うほど必要になります。
            AIが提示する答えが本当に正しいか、自分のケースに適用できるか、抜けている観点はないかを評価する力です。
            「AIの回答を疑う」習慣を続けることで、この力は鍛えられます。
          </p>

          <ArticleH3>②文脈の理解と感情的知性</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            人間関係の微妙なニュアンス、組織の政治的文脈、相手の感情状態——これらを読み取って適切に対応する能力は、
            現時点のAIには難しい領域です。顧客との信頼構築、チームの心理的安全性の醸成、難しい会話での共感——
            こうした「人間同士のやりとり」に関わる場面は、AIに任せるより自分が担うべき領域です。
          </p>

          <ArticleH3>③固有の体験と独自の視点</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            あなたの人生経験、失敗した記憶、喜びの体験、独特の価値観——これらから生まれる「あなたにしか言えないこと」は、
            AIには生成できません。ブログ記事、プレゼン、提案書に「自分ならではの視点」を加えることが、
            AIが量産するコンテンツとの差別化になります。
          </p>

          <ArticleH3>④最終意思決定と責任を取る力</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            どんなに優れたAIアドバイスがあっても、最後に「決断する」のは人間です。
            不確実な状況で判断し、その結果に責任を持つ——この「意思決定者としての役割」は、
            AIがどれだけ進化しても人間が担い続ける領域です。自分で判断する機会を意識的に作ることで、この力は維持されます。
          </p>

          <p className="mt-6 text-base leading-8 text-gray-700">
            AIを賢く使いながらこれらの能力を育てることが、AI時代に本当に必要なリスキリングです。
            AIは道具であり、その道具を使いこなす主人公はあなた自身です。
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="conclusion">まとめ：AIは「増幅器」、主人公はあなた</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事では、AIとの健全な関係を築くための7つのルールを紹介しました。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">AI依存の問題は「使いすぎ」ではなく「どう使うか」にある</li>
            <li className="pl-1 marker:text-gray-500">過剰依存と活用不足、どちらも「使い方の見直し」が解決策</li>
            <li className="pl-1 marker:text-gray-500">AIが得意な作業と人間が担うべき作業を意識的にすみ分ける</li>
            <li className="pl-1 marker:text-gray-500">7つのルールの中で、今すぐ始めやすいのは「ルール1（考えてから聞く）」と「ルール3（AI不使用の時間を作る）」</li>
            <li className="pl-1 marker:text-gray-500">AIを使いこなすほど、批判的思考・感情的知性・独自の視点といった人間ならではの力が重要になる</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIは「仕事の代わりにやってくれる存在」ではなく、「あなたの力を増幅してくれる道具」です。
            電卓が計算の補助をしてくれても、数学的思考は人間が持つのと同じように、
            AIがアウトプットを助けてくれても、思考・判断・創造の主役はあなた自身です。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AIとの健全な付き合い方、もっと知りたい方はAIリブートのLINE公式アカウントへ。
            毎週実践的なヒントを配信しています。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="AIとの健全な付き合い方、毎週ヒントをお届け"
            description="AIとの健全な付き合い方、もっと知りたい方はAIリブートのLINE公式アカウントへ。毎週実践的なヒントを配信しています。思考力を守りながらAIを使いこなすコツ、最新ツールの情報、プロンプト例などを無料でお届けします。"
            buttonLabel="LINEで登録する（無料）"
            href="/line"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">次のステップ</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIとの付き合い方を整えたら、具体的な活用スキルを高めていきましょう。
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
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIのハルシネーション対策ガイド｜誤情報を見抜くファクトチェック手順
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-data-leak-patterns" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIで情報漏えいが起きるパターン10選｜現場のNG例とルール
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-privacy-safety-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIのプライバシー・安全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AI、最初の30日間ガイド｜ビジネス活用を着実に広げるステップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド
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
