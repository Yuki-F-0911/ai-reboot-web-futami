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

const keywordTags = ["AI 仕事 奪われる", "AI時代 キャリア", "生成AI 仕事 なくなる", "AI 転職 不安", "ChatGPT 仕事への影響"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "truth", label: "「AIに仕事を奪われる」の真実を整理する" },
  { id: "job-matrix", label: "AIに「奪われやすい仕事」と「奪われにくい仕事」" },
  { id: "anxiety", label: "不安の正体を分解する" },
  { id: "skills", label: "AI時代に求められる5つのスキル" },
  { id: "steps", label: "今日から始められる3ステップ" },
  { id: "cases", label: "AI活用でキャリアアップした事例" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const jobMatrix = [
  {
    category: "事務職",
    aiImpact: "高",
    color: "bg-red-50 border-red-200",
    tagColor: "bg-red-100 text-red-700",
    aiReplace: "データ入力、定型帳票の作成、スケジュール管理、経費精算",
    humanValue: "イレギュラー対応、社内調整、気配りのコミュニケーション",
    future: "AI×事務＝業務効率化のハブ人材。AIで定型作業を自動化し、部門間の潤滑油として価値が上がる",
  },
  {
    category: "営業職",
    aiImpact: "中",
    color: "bg-amber-50 border-amber-200",
    tagColor: "bg-amber-100 text-amber-700",
    aiReplace: "リスト作成、提案書の下書き、市場リサーチ、メール文面の作成",
    humanValue: "顧客との信頼構築、ニーズの深掘り、交渉、クロージング",
    future: "AI×営業＝提案品質の飛躍的向上。AIがリサーチと資料作成を担い、人間は「会う・聴く・提案する」に集中",
  },
  {
    category: "クリエイティブ職",
    aiImpact: "中",
    color: "bg-amber-50 border-amber-200",
    tagColor: "bg-amber-100 text-amber-700",
    aiReplace: "素材生成、バリエーション展開、リサイズ、初稿の下書き",
    humanValue: "コンセプト設計、ブランドの世界観構築、感性に基づく判断",
    future: "AI×クリエイティブ＝制作スピードの革命。AIで量産工程を効率化し、人間はディレクションと品質管理に注力",
  },
  {
    category: "医療・介護職",
    aiImpact: "低",
    color: "bg-green-50 border-green-200",
    tagColor: "bg-green-100 text-green-700",
    aiReplace: "画像診断の補助、カルテ入力、文献検索、シフト管理",
    humanValue: "患者とのコミュニケーション、身体的ケア、倫理的判断、緊急対応",
    future: "AI×医療＝診断精度の向上と事務負担の軽減。人間にしかできないケアの時間が増える",
  },
  {
    category: "教育職",
    aiImpact: "低〜中",
    color: "bg-blue-50 border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
    aiReplace: "テスト作成、採点、教材のカスタマイズ、学習進捗の分析",
    humanValue: "生徒のモチベーション管理、人格形成の支援、保護者対応",
    future: "AI×教育＝個別最適化学習の実現。AIが学力分析を担い、教師は「育てる」ことに専念できる",
  },
  {
    category: "管理職",
    aiImpact: "低",
    color: "bg-green-50 border-green-200",
    tagColor: "bg-green-100 text-green-700",
    aiReplace: "データ集計・レポート作成、会議の議事録、KPI分析",
    humanValue: "ビジョン設定、チームビルディング、意思決定、部下の育成",
    future: "AI×管理職＝データドリブン経営の加速。AIがファクトを整理し、人間が判断とリーダーシップを発揮する",
  },
] as const;

const anxietyCauses = [
  {
    number: "01",
    cause: "「何が変わるかわからない」",
    explanation: "情報不足が恐怖を増幅している",
    solution: "AIの影響は業界・職種によって大きく異なります。「AI 自分の職種名」で検索して、具体的な変化を把握するだけで不安は大幅に減ります。漠然とした恐怖は、情報で輪郭を与えれば小さくなります。",
    icon: "?",
  },
  {
    number: "02",
    cause: "「自分だけ取り残される気がする」",
    explanation: "周囲もまだ手探りの段階",
    solution: "2025年の調査では、業務で生成AIを日常的に活用している人はまだ全体の3割程度。SNSでは「使いこなしている人」が目立ちますが、多くの人はまだ試行錯誤中です。今から始めても決して遅くありません。",
    icon: "...",
  },
  {
    number: "03",
    cause: "「今のスキルが無駄になる」",
    explanation: "むしろ今のスキル+AIが最強の組み合わせ",
    solution: "AIは「あなたの経験を代替する」のではなく「あなたの経験を増幅する」ツールです。10年の営業経験を持つ人がAIを使えば、経験のない人がAIを使うよりはるかに高い成果を出せます。あなたの専門性は、AI時代にこそ輝きます。",
    icon: "!",
  },
] as const;

const aiSkills = [
  {
    number: 1,
    title: "AIに「いい指示」を出す力",
    subtitle: "プロンプト力",
    description: "AIの回答品質は、あなたの質問の質で決まります。曖昧な指示には曖昧な回答が返り、具体的な指示には具体的な回答が返る。「誰に・何を・どんな形式で」を明確にするだけで、AIの出力は劇的に変わります。",
    action: "今日からできること：ChatGPTに「来週の会議のアジェンダを作って。参加者5名、議題は○○、所要時間60分」と具体的に指示してみる",
    relatedLink: { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTスマホ活用ガイド" },
  },
  {
    number: 2,
    title: "AIの出力を「判断する」力",
    subtitle: "ファクトチェック・品質管理",
    description: "AIは時に間違えます（ハルシネーション）。数字の正確性、文脈の適切さ、自社の事情との整合性——これらを見極める「最終判断」は人間にしかできません。AIの出力を鵜呑みにせず、自分の専門知識で検証する力が求められます。",
    action: "今日からできること：AIの回答に含まれる数字や固有名詞を1つだけGoogle検索で裏取りする習慣をつける",
    relatedLink: null,
  },
  {
    number: 3,
    title: "AIと「協働する」力",
    subtitle: "ワークフロー設計",
    description: "AI活用の上級者は「AIに全部任せる」のではなく、「ここはAI、ここは自分」と分業を設計しています。たとえば「リサーチと下書きはAI、構成と最終仕上げは自分」という分担。この設計力が生産性の差を生みます。",
    action: "今日からできること：今日の業務を書き出し、「AIに任せられそうな部分」に丸をつけてみる",
    relatedLink: null,
  },
  {
    number: 4,
    title: "「人間にしかできない」ことを磨く力",
    subtitle: "共感・創造性・リーダーシップ",
    description: "相手の感情を読み取る共感力、ゼロからコンセプトを生み出す創造性、チームを動かすリーダーシップ——これらは2026年現在のAIが最も苦手とする領域です。AIが定型業務を代替するほど、これらの「人間力」の市場価値は上がります。",
    action: "今日からできること：次の会議で「この場にいる人の感情」に意識を向けてみる。AIにはできない洞察が得られる",
    relatedLink: null,
  },
  {
    number: 5,
    title: "学び続ける姿勢",
    subtitle: "キャッチアップ力",
    description: "AI技術の進化は速く、半年前の情報がもう古くなることもあります。大切なのは「すべてを知ること」ではなく「必要な時に学べる姿勢」を持つこと。月に1本AIに関する記事を読むだけでも、まったく情報に触れない人とは大きな差がつきます。",
    action: "今日からできること：この記事をブックマークし、月に1回AIリブートのブログをチェックする習慣をつける",
    relatedLink: { href: "/academy/blog/how-to-learn-generative-ai", label: "生成AIの学び方ロードマップ" },
  },
] as const;

const careerSteps = [
  {
    step: 1,
    title: "まずAIを「触ってみる」",
    description: "難しく考える必要はありません。ChatGPT・Claude・Geminiはすべて無料で、アカウント登録だけで始められます。最初の一歩は「今日の夕飯のおすすめを教えて」でもOK。触ってみることで「なるほど、こういうものか」という感覚が掴めます。",
    actions: [
      "ChatGPT（chatgpt.com）にアクセスして無料アカウントを作る",
      "「自己紹介してくれる？」と話しかけてみる",
      "自分の仕事に関する質問を1つしてみる（例：「営業メールの書き方のコツを教えて」）",
    ],
    tip: "3つのツールに同じ質問をして、回答の違いを比べてみると面白い発見があります",
  },
  {
    step: 2,
    title: "自分の仕事の「AIで楽になる部分」を見つける",
    description: "AIを仕事に活かすコツは「大きな変革」ではなく「小さな効率化」から始めること。あなたの日常業務の中で、「毎回同じような作業」「時間がかかるけど頭は使わない作業」を探してみてください。",
    actions: [
      "今週やった業務を箇条書きで10個書き出す",
      "その中から「定型的・反復的な作業」にチェックをつける",
      "チェックがついた作業を1つ選び、AIに「○○を手伝って」と頼んでみる",
    ],
    tip: "メール返信の下書き、会議メモの整理、Excelデータの分析依頼がよくある最初の成功体験",
  },
  {
    step: 3,
    title: "「AI+自分のスキル」の掛け算を考える",
    description: "AIの本当の価値は、あなたの専門性と組み合わさった時に発揮されます。「AIが得意なこと」×「あなたが得意なこと」の掛け算で、これまでにない成果が出せるようになります。",
    actions: [
      "自分の強み（業界知識・人脈・経験）を3つ書き出す",
      "それぞれの強みに「AI活用」を掛け合わせたらどんな成果が出せるか考える",
      "1つ選んで、今週中に実践してみる",
    ],
    tip: "例：営業経験10年×AI＝顧客データ分析に基づく提案書の自動生成。事務経験×AI＝部門全体の業務効率化推進リーダー",
  },
] as const;

const careerCases = [
  {
    name: "A.Tさん",
    age: "42歳",
    role: "事務職",
    gender: "女性",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100 text-purple-700",
    story:
      "毎月20時間かかっていたExcelでの売上集計作業。ChatGPTに関数の書き方を相談したところ、マクロで自動化できることを知り、AIの助けを借りながらマクロを作成。作業時間が2時間に短縮され、空いた時間でデータ分析スキルを習得。半年後には社内のAI活用推進リーダーに抜擢され、全部門の業務効率化を担当するようになった。",
    quote: '「最初は"Excel おすすめ関数"をChatGPTに聞いただけ。まさか自分がAI推進リーダーになるとは思ってもいませんでした」',
  },
  {
    name: "K.Mさん",
    age: "35歳",
    role: "営業職",
    gender: "男性",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-700",
    story:
      "提案書の作成に毎回3〜4時間かかっていたが、Claudeに顧客情報と提案の方向性を伝えて「たたき台」を作らせるようにしたところ、作成時間が1時間に短縮。浮いた時間を顧客との対面コミュニケーションに充てた結果、成約率が約20%向上。チーム内でも手法を共有し、部門全体の生産性向上に貢献している。",
    quote: '「AIが下書きしてくれるから、自分は"お客さんに会うこと"に集中できるようになった。これが一番大きかった」',
  },
  {
    name: "S.Hさん",
    age: "53歳",
    role: "管理職",
    gender: "男性",
    color: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-700",
    story:
      "週5回の会議の議事録作成と共有に部下の時間が取られていることに課題を感じ、ChatGPTで議事録の自動要約を試してみた。録音テキストを貼り付けて「決定事項・アクションアイテム・次回議題に整理して」と指示するだけで、10分で議事録が完成。この手法を部門全体に展開し、月間約40時間の工数削減を実現した。",
    quote: '「最初は自分のためだったけど、チームに広げたら"課長のおかげで楽になった"と言われた。50代でも遅くなかった」',
  },
] as const;

export default function AiJobFutureCareerGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIに仕事を奪われる？AI時代のキャリア戦略" },
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
                className="rounded-full border border-will-primary/20/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="AIに仕事を奪われる？不安の正体と、今日から始めるAI時代のキャリア戦略"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            AIに仕事を奪われる？
            <br className="sm:hidden" />
            不安の正体と、
            <br className="hidden sm:block" />
            今日から始めるAI時代のキャリア戦略
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            【2026年版】データと事実に基づく、誠実なキャリアガイド
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIに仕事を奪われるかもしれない」——ニュースやSNSでこんな話題を目にして、漠然とした不安を感じていませんか？
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            その不安は、とても自然なことです。誰だって自分の仕事の将来が不透明だと感じたら不安になります。
            ただ、<strong>不安の多くは「事実」ではなく「情報不足」から生まれています。</strong>
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、「AIに仕事を奪われる」という不安の正体を2026年最新のデータで冷静に整理し、
            あなたが<strong>今日から始められる具体的なキャリア戦略</strong>をお伝えします。煽りでも楽観でもない、事実に基づいた誠実なガイドです。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            そもそも生成AIとは？
          </Link>
          ・
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIへの不安を乗り越えるガイド
          </Link>
          ・
          <Link href="/academy/blog/how-to-learn-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIの学び方ロードマップ
          </Link>
          もあわせて読むと、全体像がつかめます。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              「AIに仕事を奪われる」は半分正解で半分間違い。<strong>仕事がなくなるのではなく、仕事の&ldquo;やり方&rdquo;が変わる</strong>
            </li>
            <li className="pl-1 marker:text-gray-500">
              定型的・反復的な作業はAIに置き換わるが、判断・共感・創造性が求められる業務は人間の領域であり続ける
            </li>
            <li className="pl-1 marker:text-gray-500">
              不安の正体は「情報不足」「周囲との比較」「スキルの陳腐化への恐怖」——いずれも対処可能
            </li>
            <li className="pl-1 marker:text-gray-500">
              今の仕事を辞める必要はない。<strong>今のスキル×AIの掛け算が、最も現実的で強いキャリア戦略</strong>
            </li>
            <li className="pl-1 marker:text-gray-500">
              まずはChatGPTを触ってみる → 日常業務で1つ試す → 自分の強み×AIの掛け算を考える。この3ステップで十分
            </li>
          </ul>
        </motion.section>

        {/* セクション1: 「AIに仕事を奪われる」の真実 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="truth" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「AIに仕事を奪われる」の真実を整理する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まず、事実を確認しましょう。2024〜2026年の間に、AIが実際にどんな影響を与えたのか。ニュースの見出しだけでは見えない、リアルな変化を整理します。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">2024〜2026年で実際に起きたこと</h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                field: "コールセンター",
                icon: "phone",
                change: "AIチャットボットの導入で、一次対応の多くが自動化。オペレーター数は減少傾向",
                reality: "ただし複雑なクレーム対応・感情的なケアが必要な場面では人間のオペレーターが不可欠。「対応の質」で差別化する方向へシフト",
              },
              {
                field: "翻訳",
                icon: "globe",
                change: "DeepL・Google翻訳の精度がさらに向上。定型文書の翻訳はほぼAIで完結",
                reality: "一方で、ニュアンスの調整・文化的配慮が必要な翻訳は人間の需要が堅調。「翻訳者」から「翻訳ディレクター」へ役割が進化",
              },
              {
                field: "プログラミング",
                icon: "code",
                change: "GitHub Copilot・Cursorなど AIコーディングツールが急速に普及。コード生成の自動化が進む",
                reality: "「コードを書く」だけのプログラマーは厳しくなる一方、「何を作るか設計できる」エンジニアの価値はむしろ上昇",
              },
              {
                field: "イラスト・デザイン",
                icon: "palette",
                change: "Midjourney・DALL-E・Stable DiffusionなどAI画像生成ツールが一般化",
                reality: "素材レベルの生成はAIが担うようになったが、ブランドの世界観構築やコンセプト設計はAIにはできず、クリエイターの価値は変わらない",
              },
            ].map((item) => (
              <div key={item.field} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-sm font-bold text-will-primary">{item.field}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.change}</p>
                <div className="mt-3 rounded-lg bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">実態</p>
                  <p className="mt-1 text-sm leading-7 text-gray-600">{item.reality}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-bold text-gray-900">「仕事が消えた」のではなく「仕事の内容が変わった」</h3>
          <p className="mt-4 text-base leading-8 text-gray-700">
            共通しているのは、<strong>「仕事そのものがなくなった」のではなく、「仕事の中のAIに任せられる部分」がAIに移った</strong>ということです。
            コールセンターも翻訳も、プログラミングもデザインも、仕事は存在し続けています。ただし、求められる役割が「作業者」から「判断者・設計者」へとシフトしているのです。
          </p>

          <h3 className="mt-10 text-lg font-bold text-gray-900">過去の技術革新でも同じことが起きていた</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="px-4 py-3 text-left font-bold text-gray-900">技術革新</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900">当時の不安</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-900">実際に起きたこと</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-800">産業革命（18世紀）</td>
                  <td className="px-4 py-3 text-gray-600">「機械に仕事を奪われる」</td>
                  <td className="px-4 py-3 text-gray-600">手工業は減ったが、工場労働・管理職・エンジニアなど新しい職業が大量に誕生</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-800">インターネット（1990年代）</td>
                  <td className="px-4 py-3 text-gray-600">「書店・旅行代理店がなくなる」</td>
                  <td className="px-4 py-3 text-gray-600">業態は変化したが、Webデザイナー・ECマーケターなど新職種が生まれた</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-800">スマートフォン（2007年〜）</td>
                  <td className="px-4 py-3 text-gray-600">「携帯ショップ・カメラ店が消える」</td>
                  <td className="px-4 py-3 text-gray-600">アプリ開発者・SNSマーケター・インフルエンサーなどスマホ起点の職業が爆発的に増加</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">生成AI（2022年〜）</td>
                  <td className="px-4 py-3 text-gray-600">「AIに仕事を奪われる」</td>
                  <td className="px-4 py-3 font-medium text-will-primary">業務の一部はAIに移行。同時にAI活用人材・プロンプトエンジニアなど新しい役割が生まれている</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            歴史が示しているのは、<strong>技術革新は「仕事を消す」のではなく「仕事を作り替える」</strong>ということ。
            AIも例外ではありません。恐怖を煽る記事には距離を置き、事実を冷静に見つめることが大切です。
          </p>
        </motion.section>

        {/* セクション2: 職種別マトリクス */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="job-matrix" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIに「奪われやすい仕事」と「奪われにくい仕事」
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「自分の仕事は大丈夫だろうか？」——これが最も気になるところだと思います。
            ただし重要なのは、<strong>「奪われる/奪われない」の二択ではなく、グラデーション</strong>であるということ。
            ほとんどの職種は「業務の一部がAIに移り、一部は人間が担い続ける」という変化を迎えます。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">職種別AI影響マトリクス</h3>
          <p className="mt-3 text-sm text-gray-500">※ あなたの職種を見つけて、「自分ごと」として読んでみてください</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobMatrix.map((job) => (
              <div key={job.category} className={`rounded-xl border p-5 ${job.color}`}>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-gray-900">{job.category}</h4>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${job.tagColor}`}>
                    AI影響度：{job.aiImpact}
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500">AIに置き換わる業務</p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">{job.aiReplace}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">人間が担い続ける業務</p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">{job.humanValue}</p>
                  </div>
                  <div className="rounded-lg bg-white/60 p-3">
                    <p className="text-xs font-semibold text-gray-500">これからの姿</p>
                    <p className="mt-1 text-sm font-medium leading-6 text-gray-800">{job.future}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">ポイント</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              どの職種も<strong>「AIに完全に置き換わる」のではなく「AIと共存する形」に変化</strong>しています。
              大切なのは「自分の仕事のどの部分がAIに任せられ、どの部分に自分の価値があるか」を見極めること。
              それがわかれば、AIは脅威ではなく最強のパートナーになります。
            </p>
          </div>
        </motion.section>

        {/* セクション3: 不安の正体を分解する */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="anxiety" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            不安の正体を分解する——あなたの不安は正常です
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここで少し立ち止まって、あなたの中にある「不安」そのものに向き合ってみましょう。
            <strong>不安を感じること自体は悪いことではありません。</strong>
            それは変化に対する健全な反応です。ただ、不安の正体を知ることで、対処の仕方が見えてきます。
          </p>

          <div className="mt-8 space-y-5">
            {anxietyCauses.map((item) => (
              <div key={item.number} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-gray-400">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold tracking-widest text-will-primary">不安の原因 {item.number}</p>
                    <h3 className="mt-1 text-lg font-bold text-gray-900">{item.cause}</h3>
                    <p className="mt-1 text-sm font-medium text-gray-500">{item.explanation}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-base font-bold text-emerald-800">大丈夫。あなたは一人じゃない</p>
            <p className="mt-3 text-sm leading-7 text-emerald-900">
              AIに対する不安を感じているのは、あなただけではありません。多くの人が同じように感じています。
              大切なのは、不安を無視することでも、不安に押しつぶされることでもなく、
              <strong>「不安をエネルギーに変えて、小さな一歩を踏み出す」</strong>こと。
              この記事の後半では、その具体的な一歩をお伝えします。
            </p>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIに対する不安や恐怖感をもっと詳しく理解したい方は、
            <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              「AIが怖い・難しい」を乗り越える安心スタートガイド
            </Link>
            も参考にしてください。
          </p>
        </motion.section>

        {/* セクション4: AI時代に求められる5つのスキル */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="skills" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI時代に求められる5つのスキル
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIに負けないスキル」ではなく、<strong>「AIを味方につけるスキル」</strong>という視点が大切です。
            以下の5つは、どんな職種でも共通して求められる力です。各スキルに「今日からできる具体的なアクション」をつけました。
          </p>

          <div className="mt-8 space-y-6">
            {aiSkills.map((skill) => (
              <div key={skill.number} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{skill.title}</h3>
                    <p className="mt-0.5 text-sm font-medium text-gray-500">{skill.subtitle}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{skill.description}</p>
                    <div className="mt-4 rounded-lg bg-blue-50 p-3">
                      <p className="text-sm font-bold text-blue-800">{skill.action}</p>
                    </div>
                    {skill.relatedLink && (
                      <p className="mt-3 text-sm text-gray-500">
                        参考：
                        <Link href={skill.relatedLink.href} className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                          {skill.relatedLink.label}
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            AI時代のスキル戦略をさらに深掘りしたい方は、
            <Link href="/academy/blog/skills-for-ai-era-career" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI時代に求められるスキルとキャリア設計
            </Link>
            もあわせてお読みください。資格取得を検討中の方は
            <Link href="/academy/blog/ai-certification-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI関連資格ガイド
            </Link>
            が参考になります。
          </p>
        </motion.section>

        {/* セクション5: 今日から始められる3ステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            今日から始められるAIキャリア戦略 3ステップ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「資格を取りなさい」「転職しなさい」とは言いません。
            <strong>今の仕事を続けながら、今日から始められる</strong>3つのステップをお伝えします。
          </p>

          <div className="mt-8 space-y-6">
            {careerSteps.map((step) => (
              <div key={step.step} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="flex items-center gap-4 bg-gray-50 px-6 py-4">
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-7 text-gray-700">{step.description}</p>
                  <div className="mt-4">
                    <p className="text-xs font-bold tracking-widest text-gray-500">具体的なアクション</p>
                    <ul className="mt-2 space-y-2">
                      {step.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 rounded-lg bg-amber-50 p-3">
                    <p className="text-xs font-semibold text-amber-800">TIP</p>
                    <p className="mt-1 text-sm leading-7 text-amber-900">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            Step 1のAIツールの始め方は、
            <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              スマホでChatGPTを始めるガイド
            </Link>
            で画面つきで詳しく解説しています。
            また、AIを使い始めてからの学び方については
            <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIを使えるようになった人の5つの習慣
            </Link>
            が参考になります。
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-job-future-career-guide" />
        </motion.section>

        {/* セクション6: 事例 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            実際にAIを活用してキャリアアップした人の事例
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「本当にAIでキャリアが変わるの？」と思うかもしれません。
            ここでは、ごく普通の会社員がAIを活用してキャリアを切り拓いた3つの事例を紹介します。
          </p>

          <div className="mt-8 space-y-6">
            {careerCases.map((person) => (
              <div key={person.name} className={`rounded-xl border p-6 ${person.color}`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${person.iconBg}`}>
                    {person.gender === "女性" ? "W" : "M"}
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">
                      {person.name}（{person.age}・{person.role}・{person.gender}）
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-700">{person.story}</p>
                <div className="mt-4 rounded-lg bg-white/70 p-4">
                  <p className="text-sm italic leading-7 text-gray-600">{person.quote}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-base font-bold text-gray-900">3人に共通するポイント</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">最初の一歩は「小さな業務効率化」から始めている</li>
              <li className="pl-1 marker:text-gray-500">特別なIT知識やプログラミングスキルは持っていなかった</li>
              <li className="pl-1 marker:text-gray-500">自分の「業務知識×AI」の掛け算で成果を出している</li>
              <li className="pl-1 marker:text-gray-500">成果を周囲に共有することで、さらにキャリアが広がった</li>
            </ul>
          </div>
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-bold text-gray-900 marker:content-[''] [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start gap-3 pr-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-will-primary/10 text-xs font-bold text-will-primary">
                      Q
                    </span>
                    {item.question}
                  </span>
                  <span className="shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180">
                    &#9662;
                  </span>
                </summary>
                <div className="border-t border-gray-100 px-5 py-4">
                  <p className="pl-9 text-sm leading-7 text-gray-700">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ——AIは敵じゃない。最強のパートナーになる
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事を通じてお伝えしたかったのは、一つのシンプルなメッセージです。
          </p>
          <div className="mt-6 rounded-lg border border-will-primary/20 bg-white p-6">
            <p className="text-lg font-bold leading-8 text-gray-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              仕事がなくなるのではなく、仕事の&ldquo;やり方&rdquo;が変わる。
              <br />
              AIと上手に付き合える人が、これからの時代に強い。
            </p>
          </div>
          <div className="mt-6 space-y-4 text-base leading-8 text-gray-700">
            <p>
              「AIに仕事を奪われる」という不安は、情報不足から生まれています。事実を知り、自分の仕事との関係を整理すれば、漠然とした恐怖は具体的な「やるべきこと」に変わります。
            </p>
            <p>
              今のあなたに必要なのは、資格でも転職でもありません。
              <strong>今の仕事×AIという掛け算を、小さな一歩から始めること</strong>です。
            </p>
            <p>
              ChatGPTに「こんにちは」と話しかけてみてください。それが、AI時代のキャリアを切り拓く最初の一歩です。
            </p>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-500">
            AIリブートアカデミーでは、「思考OSのインストール」——AIとの共存という新しい考え方そのものを身につけるプログラムを提供しています。
            AIとの付き合い方を体系的に学びたい方は、ぜひ一度ご覧ください。
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
          <LineCtaBox />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは何か？初心者向けにわかりやすく解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを使えるようになった人がやっていた5つのこと
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                スマホでChatGPTを始めるガイド｜初心者向けセットアップ完全版
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/skills-for-ai-era-career" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代に求められるスキルとキャリア設計
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-certification-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI関連資格ガイド｜2026年おすすめ資格と学習ロードマップ
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
