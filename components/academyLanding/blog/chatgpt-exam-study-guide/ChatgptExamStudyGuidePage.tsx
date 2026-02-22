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

const keywordTags = ["ChatGPT 資格勉強", "AI 試験対策", "暗記カード 自動生成", "過去問 AI 解説", "学習スケジュール AI"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-ai-study", label: "なぜ資格勉強にAIが向いているのか" },
  { id: "flashcard", label: "暗記カードを自動生成する方法" },
  { id: "past-exam", label: "過去問をAIに解説してもらう方法" },
  { id: "weakness", label: "弱点をAIに分析してもらう方法" },
  { id: "schedule", label: "学習スケジュールをAIに作ってもらう方法" },
  { id: "comparison", label: "ChatGPT vs Gemini 勉強活用比較" },
  { id: "qualification-hints", label: "資格別の活用ヒント" },
  { id: "caution", label: "AIを使うときの注意点" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const flashcardExamples = [
  {
    title: "用語・定義の暗記カードを作る",
    prompt:
      "「ファイナンシャルプランナー2級の試験対策として、『複利計算』の暗記カードを10枚作ってください。表面に用語・裏面に定義と具体例の形式で」",
    result:
      "各カードに「表：複利計算とは何か（問い）／裏：元本と利息を合わせた金額に対して利息が計算される方式。例：元本100万円・年利3%・5年後の金額＝115.9万円（計算式付き）」という形式で出力。繰り返し見直し用に最適な構成になります。",
  },
  {
    title: "英単語カードを一括生成する",
    prompt:
      "「TOEIC 600点を目指しています。ビジネス場面で頻出する形容詞を20語、単語・品詞・意味・例文の形式でリスト化してください」",
    result:
      "効率的・代替できない・遅延するなどのビジネス頻出語を英語・品詞・日本語訳・例文セットでまとめて出力。そのままAnkiやNotionに貼り付けて暗記カードとして使えます。",
  },
  {
    title: "歴史の年号・出来事を整理する",
    prompt:
      "「日本史の明治時代（1868〜1912年）の重要な出来事を、年号・出来事・意義の3列表形式で15件まとめてください。中学受験・高校受験レベルで」",
    result:
      "廃藩置県・学制発布・西南戦争など15件を年号順に整理し、試験で問われやすい「意義」の観点も追加。そのままプリントアウトして使える完成度で出力されます。",
  },
  {
    title: "法律条文を噛み砕いて暗記しやすくする",
    prompt:
      "「宅建試験対策として、民法の売買契約に関する主要条文を、『試験で問われやすいポイント』に絞って5つ、わかりやすい日本語で解説してください」",
    result:
      "法律用語を日常語に置き換え、試験頻出の「〇〇の場合はどうなるか」という問いに答える形式で5条文を整理。条文番号と出題パターンも合わせて提示してくれます。",
  },
  {
    title: "一問一答形式のミニテストを作る",
    prompt:
      "「ITパスポート試験の『テクノロジ系』分野から、初心者がつまずきやすい一問一答を15問作ってください。難易度は基礎〜中程度で」",
    result:
      "CPUの動作・OSの役割・セキュリティ用語など幅広い範囲から15問を自動生成。「正解・解説・関連用語」がセットになっており、弱点把握にも使えます。",
  },
] as const;

const pastExamExamples = [
  {
    title: "過去問の解説を求める",
    prompt:
      "「FP2級（2024年9月実施）の学科試験・第7問を解きましたが不正解でした。解答プロセスと、間違えやすいポイントを説明してください。問題文：〔問題テキストをここに貼り付け〕」",
    result:
      "正解の選択肢を選んだ理由を順序立てて説明し、「この問題で引っかかりやすいポイント」「同じ形式の問題を正解するための着眼点」を追加。単に正解を教えるだけでなく、思考プロセスごと解説してくれます。",
  },
  {
    title: "類似問題を作ってもらう",
    prompt:
      "「今解いたTOEICのPart5の問題（関係代名詞・時制）の類似問題を5問作ってください。難易度は同じくらいで。正解と解説付きで」",
    result:
      "既存の問題の文法ポイントを把握し、別の語彙・文脈で作った類似問題5問を正解・解説付きで出力。同じ文法項目を違う文脈で繰り返すことで定着度が上がります。",
  },
  {
    title: "間違えた問題を再整理する",
    prompt:
      "「今週間違えた問題をリストアップします。この誤答パターンからどの単元に穴があるか分析して、優先的に復習すべき順番を教えてください。〔誤答リスト〕」",
    result:
      "誤答の傾向を分析し、「記憶の曖昧さ」「計算ミス」「読み違い」「知識の欠落」に分類。「まずこの単元を集中的に」という優先順位と理由を添えて提示してくれます。",
  },
  {
    title: "専門用語を自分の言葉で確認する",
    prompt:
      "「宅建の試験範囲にある『地役権』を、10秒で説明できるように短くまとめてください。あと、よく混同される『地上権』との違いも」",
    result:
      "地役権：「自分の土地のために他人の土地を通行・利用する権利」地上権：「他人の土地に建物を建てる権利」という10秒解説を提示。試験直前の確認作業に最適です。",
  },
] as const;

const weaknessAnalysisSteps = [
  {
    step: "Step 1：誤答リストをAIに渡す",
    description:
      "「今月の模擬試験で間違えた問題番号と分野をリストアップします。このパターンから弱点分野を教えてください」と送ると、AIが傾向を読み取ります。",
    tip: "「なんとなく苦手」という感覚を、具体的な単元名に変換してもらうのがコツです。",
  },
  {
    step: "Step 2：単元ごとの理解度を点数化してもらう",
    description:
      "「以下の単元について、私の回答精度から推定される理解度を10点満点で評価してください」と問うと、どこに時間を使うべきかが一目瞭然になります。",
    tip: "感覚ではなく数値で把握することで、残り学習時間の配分が最適化できます。",
  },
  {
    step: "Step 3：苦手単元だけの集中プランを作ってもらう",
    description:
      "「財務諸表の読み方が特に苦手です。残り3週間で合格点に持っていくための最短学習プランを作ってください」と依頼すると、苦手に特化した週別メニューを提示してくれます。",
    tip: "試験日の逆算と弱点特化を組み合わせることで、ゴールから逆算した勉強になります。",
  },
] as const;

const scheduleExamples = [
  {
    title: "合格から逆算した学習スケジュール",
    prompt:
      "「ITパスポート試験を2ヶ月後に受けます。平日は30分、土日は2時間確保できます。合格から逆算した週別学習プランを作ってください。テキスト1冊と過去問アプリを持っています」",
    result:
      "第1〜2週：テキスト通読（全体把握）→第3〜4週：分野別問題演習→第5〜6週：弱点補強→第7〜8週：直前模試と仕上げ、という4フェーズのプランを週別の具体的な学習内容付きで提示。各週の到達目標と「ここが終わったら次へ」のチェックポイントも入れてくれます。",
  },
  {
    title: "毎日の勉強ルーティンを作る",
    prompt:
      "「TOEIC 750点を目指しています。朝7〜7:30が唯一の勉強時間です。30分でできる毎日の英語学習ルーティンを3ヶ月プランで教えてください」",
    result:
      "「月：単語10語インプット（10分）→Part5の問題5問（10分）→前日の復習（10分）」「水：リスニング集中日（30分Part1〜4を聞き流し）」など曜日別のルーティンを、3ヶ月の段階に合わせて設計。飽きずに続くように「週1回は好きな英語コンテンツを見る日」を設けるアドバイスも添えてくれます。",
  },
] as const;

const comparisonItems = [
  {
    aspect: "文章解説の詳しさ",
    chatgpt: "◎ 段階的な説明が得意。複雑な問題も「まず結論→根拠→例外」の順で整理してくれる",
    gemini: "◎ Googleの検索情報と連携した解説が可能。特にIT・時事関連の解説は最新情報に強い",
  },
  {
    aspect: "暗記カード・問題生成",
    chatgpt: "◎ 出力フォーマットの自由度が高い。表形式・Q&A形式・Anki向けCSVなど指定通りに出力できる",
    gemini: "○ 同様に対応可能。Google Docsへの直接エクスポートができると一層便利になる（2026年現在）",
  },
  {
    aspect: "画像・図の読み取り",
    chatgpt: "◎ 参考書のページ写真を送ると、その内容について解説・問題生成が可能",
    gemini: "◎ 同様に対応可能。Googleレンズと組み合わせることで手書きメモの解析も",
  },
  {
    aspect: "英語・語学学習",
    chatgpt: "◎ 会話練習・発音指導・文法解説のどれも高品質。Advanced Voice Modeで音声会話練習も可能",
    gemini: "◎ Google翻訳との相性が良い。YouTube動画の要約からリスニング練習も組み立てやすい",
  },
  {
    aspect: "数学・計算問題",
    chatgpt: "○ 計算過程を丁寧に見せてくれる。Code Interpreterで複雑な数式の検証も可能",
    gemini: "○ 同様。WolframAlpha連携が活用できる場面では数値計算の精度が高い",
  },
  {
    aspect: "学習スケジュール作成",
    chatgpt: "◎ カスタム指示に「常に私の学習計画と照らし合わせて回答して」と設定すると継続的なコーチが可能",
    gemini: "○ Google カレンダー連携（2026年現在一部対応）により、スケジュール実装まで一気通貫にできる",
  },
] as const;

const qualificationHints = [
  {
    name: "FP（ファイナンシャルプランナー）2・3級",
    category: "資格・スキル",
    hints: [
      "「ライフプランニングの6つのパターンを比較表で整理して」→各ライフステージの考え方を一覧化",
      "「税制優遇の種類（NISA・iDeCo・ふるさと納税）を制限額・対象者・節税効果で比較して」→試験頻出の比較問題対策",
      "「FP試験で毎年必ず出る『六法則の暗記』をゴロ合わせで覚える方法を教えて」→丸暗記が必要な数値の記憶法",
    ],
  },
  {
    name: "TOEIC（700〜860点を目指す方）",
    category: "語学",
    hints: [
      "「Part7の長文読解で時間が足りない。速読のコツと時間配分の戦略を教えて」→試験特有の時間マネジメント",
      "「ビジネスメールでよく使う挨拶・依頼・断りの英語フレーズを各5つ、TOEICに出そうな文体で」→Part7対策と実務直結",
      "「間違えやすいgo to vs go + 動詞の違いを具体例10個で説明して」→よく間違える文法項目の徹底解説",
    ],
  },
  {
    name: "宅建（宅地建物取引士）",
    category: "不動産",
    hints: [
      "「都市計画法の用途地域13種類を、建築できるもの・できないものを中心に表で整理して」→暗記量が多い分野の整理",
      "「宅建業法の重要事項説明で説明しなければならない内容を、売買と賃貸で分けてリスト化して」→出題頻度が高い実務系問題",
      "「過去5年間で宅建試験の合格基準点はどう推移してきた？難易度の特徴を教えて」→試験傾向の把握（最新情報は公式で要確認）",
    ],
  },
  {
    name: "ITパスポート・基本情報技術者",
    category: "IT",
    hints: [
      "「OSI参照モデルの7層を、それぞれのプロトコル名と役割を含めて中学生でもわかるように説明して」→難解な概念の噛み砕き",
      "「情報セキュリティ対策（マルウェア・フィッシング・SQLインジェクション）を試験によく出るポイントに絞って解説して」→頻出問題の効率学習",
      "「アジャイル開発・ウォーターフォール開発の違いを、実際のプロジェクト事例で説明して」→概念を現実と結びつける",
    ],
  },
] as const;

const cautionItems = [
  {
    title: "AIの知識には『カットオフ』がある",
    description:
      "ChatGPTをはじめとする生成AIは、学習データに使われた時点以降の最新情報は持っていません。法改正・税制改正・試験範囲の変更など、毎年更新される資格情報は、必ず公式テキストや試験実施団体のウェブサイトで確認しましょう。「AIに聞いたから正しい」ではなく、「AIで理解を深めて、公式で確認する」が安全な使い方です。",
  },
  {
    title: "解説の誤りが混じることがある（ハルシネーション）",
    description:
      "AIは自信ありげに間違った解説をすることがあります（「ハルシネーション」と呼ばれる現象）。特に数値・条文・計算式など、正確さが求められる情報は、テキストや問題集の解説と照合してください。AIの解説を「理解のための足がかり」として使い、最終的な正否は公式テキストで確認する姿勢が大切です。",
  },
  {
    title: "「作ってもらった」暗記カードは自分でも確認を",
    description:
      "AIに作ってもらった暗記カードや一問一答は、使う前にざっと目を通すことをおすすめします。細部の表現や定義が自分の理解と違う場合は、「この部分の表現を変えて」と追加指示をすれば修正してくれます。自分の言葉で理解できる形に調整することで、暗記の定着も上がります。",
  },
  {
    title: "AIは「答え合わせ係」ではなく「思考の壁打ち相手」として使う",
    description:
      "問題を解く前からAIに答えを聞いてしまうと、思考する練習ができなくなります。まず自分で問題に向き合い、答えを出してから「なぜ自分はこう考えたのか」をAIと一緒に検証するサイクルが、本当の意味での実力向上につながります。",
  },
] as const;

export default function ChatgptExamStudyGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTで資格・試験勉強が変わる！AI活用術" },
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
                title="ChatGPTで資格・試験勉強が変わる！暗記・過去問・弱点克服に使えるAI活用術【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTで資格・試験勉強が変わる！暗記・過去問・弱点克服に使えるAI活用術【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            仕事しながら資格の勉強、なかなか時間が取れないですよね。テキストを開いてもすぐ眠くなる、
            過去問を解いても理解できないまま先に進んでしまう——そんな悩みを抱えている方に、
            ちょっと嬉しいお知らせがあります。ChatGPTを「学習の相棒」として使いこなすと、
            限られた時間でも着実に実力がつく勉強法に変えられます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、暗記カードの自動生成・過去問の解説・弱点分析・スケジュール作成まで、
            資格勉強にAIを活用する具体的な方法をプロンプト例付きで解説します。
            FP、TOEIC、宅建、ITパスポートなど人気資格への応用ヒントも紹介しますので、
            「自分の試験に使えるか？」を確かめながら読んでみてください。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AIを使い始めたばかりの方は
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude入門ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-study-learning-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIで勉強効率を上げる方法
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            カスタム指示の設定方法
          </Link>
          も合わせてご覧ください。
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
            <li className="pl-1 marker:text-gray-500">ChatGPTは暗記カード作成・過去問解説・弱点分析・学習スケジュール管理の4領域で活用できる</li>
            <li className="pl-1 marker:text-gray-500">「問題文を貼り付けてなぜ間違えたか解説して」という使い方が最も即効性がある</li>
            <li className="pl-1 marker:text-gray-500">苦手分野の集中プランをAIに作ってもらうことで、残り学習時間を最効率で使える</li>
            <li className="pl-1 marker:text-gray-500">AIの解説は理解を助けるための足がかり。最終的な正否は公式テキストで確認が必須</li>
            <li className="pl-1 marker:text-gray-500">ChatGPT・Geminiともに強みが異なるため、用途で使い分けると効果が高まる</li>
          </ul>
        </motion.section>

        {/* なぜ資格勉強にAIが向いているのか */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-ai-study" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            なぜ資格勉強にAIが向いているのか
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            資格勉強の一番の壁は「わからないときに立ち止まってしまう」ことです。
            テキストを読んでも腑に落ちない箇所が出てきたとき、次に何をすればいいか迷うとき——
            従来は塾の先生や知人に聞くか、ネットで検索するしかありませんでした。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ChatGPTはその「詰まった瞬間」に即座に応えてくれます。深夜でも、通勤電車の中でも、
            「この問題のどこで間違えたのか教えて」「この用語をもっとわかりやすく説明して」と
            気軽に聞けるのが最大の強みです。しかも質問への返答の質が高く、
            自分のレベルに合わせて説明を調整してもらえます。
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                icon: "⏱",
                title: "いつでも即座に答えてくれる",
                desc: "深夜・通勤中・休憩時間——どんなタイミングでも疑問を解消できる",
              },
              {
                icon: "🎯",
                title: "自分の理解度に合わせた説明",
                desc: "「もっと簡単に」「例え話で」「もう一度別の角度から」と指示できる",
              },
              {
                icon: "🃏",
                title: "暗記素材を無限に生成できる",
                desc: "問題集にない角度からの問いや、自分が苦手な形式の問題を作ってもらえる",
              },
              {
                icon: "📊",
                title: "弱点の可視化と優先順位付け",
                desc: "誤答パターンを分析して「何を先に勉強すべきか」を明確にしてくれる",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-2xl">{item.icon}</p>
                <p className="mt-2 font-semibold text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIに丸投げして答えを出してもらう」のではなく、
            「自分で考えた後にAIと一緒に検証する」サイクルを作ることが、
            実力が伸びる使い方のポイントです。AIは「答えを教える先生」ではなく、
            「考え方を一緒に磨いてくれる対話相手」として使ってみてください。
          </p>
        </motion.section>

        {/* 暗記カードを自動生成 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="flashcard" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            暗記カードを自動生成する方法（プロンプト例付き）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「暗記カードを作る時間がない」という方に最もおすすめの使い方が、AIによる暗記カードの自動生成です。
            テキストの範囲を指定するだけで、試験に出やすいポイントを整理したカードを量産できます。
          </p>
          <div className="mt-6 space-y-5">
            {flashcardExamples.map((example, i) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 text-will-primary">活用法 {i + 1}.</span>
                  {example.title}
                </h3>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AIの回答：</span>
                  {example.result}
                </p>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">活用のコツ</p>
            <p className="mt-2 text-sm leading-7 text-blue-700">
              生成した暗記カードはAnki・NotionやGoogleスプレッドシートに貼り付けて管理するとさらに便利です。
              「CSV形式で出力して」とAIに指示するとツール連携がスムーズになります。
              ただし内容は必ず一度確認し、テキストの記述と照合してください。
            </p>
          </div>
        </motion.section>

        {/* 過去問をAIに解説してもらう */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="past-exam" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            過去問をAIに解説してもらう方法
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「問題集の解説を読んでも納得できない」「なぜこの選択肢が間違いなのかわからない」——
            そんなとき、問題文と自分の考えをそのままAIに送ってみてください。
            単に「答えはAです」で終わるのではなく、思考プロセスから教えてくれます。
          </p>
          <div className="mt-6 space-y-5">
            {pastExamExamples.map((example, i) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 text-will-primary">活用法 {i + 6}.</span>
                  {example.title}
                </h3>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AIの回答：</span>
                  {example.result}
                </p>
              </section>
            ))}
          </div>
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
          <MidArticleCtaBox slug="chatgpt-exam-study-guide" />
        </motion.section>

        {/* 弱点をAIに分析してもらう */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="weakness" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            自分の弱点をAIに分析してもらう方法
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「なんとなく苦手な気がする」という感覚を、具体的な単元名・改善策に変換してもらうのがこの使い方です。
            誤答リストをAIに渡すだけで、自分一人では気づきにくいパターンを見つけてくれます。
          </p>
          <div className="mt-6 space-y-6">
            {weaknessAnalysisSteps.map((item, i) => (
              <div key={item.step} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-will-primary text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.step}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{item.description}</p>
                    <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">
                      💡 {item.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-800">実際のプロンプト例</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              「今週の模擬試験結果です。間違えた問題：第3問（所得税の計算）、第8問（都市計画法）、第12問（民法の時効）、第19問（登記手続き）。これらの誤答パターンから、私が特に理解できていない概念は何か教えてください。次の2週間の学習優先順位も提案してください」
            </p>
            <p className="mt-3 text-xs text-gray-500">→ この形式で送ると、単元のつながりや根本的な知識の欠落を整理して提示してくれます。</p>
          </div>
        </motion.section>

        {/* 学習スケジュール作成 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="schedule" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            学習スケジュールをAIに作ってもらう方法
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「計画を立てても続かない」という方の多くは、計画が自分の生活リズムと合っていないことが原因です。
            ChatGPTに「平日は何分確保できるか」「試験日はいつか」「使える教材は何か」を伝えると、
            現実的なスケジュールを組んでくれます。
          </p>
          <div className="mt-6 space-y-5">
            {scheduleExamples.map((example, i) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 text-will-primary">活用法 {i + 10}.</span>
                  {example.title}
                </h3>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AIの回答：</span>
                  {example.result}
                </p>
              </section>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            さらに一歩進めたい方は、ChatGPTのカスタム指示（Custom Instructions）に
            「私の目標資格・試験日・毎日の学習時間」を設定しておくと、
            質問のたびに学習計画と照らし合わせたアドバイスをもらえるようになります。
            詳しくは
            <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              カスタム指示の設定方法
            </Link>
            をご覧ください。
          </p>
        </motion.section>

        {/* ChatGPT vs Gemini */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT vs Gemini — 勉強活用で使い分けるポイント
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            どちらのAIを使うべきか迷う方へ。以下の比較を参考に、目的に応じて使い分けてみてください。
            どちらも無料プランから始められます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">項目</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">ChatGPT</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Gemini</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={item.aspect} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-900">{item.aspect}</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{item.chatgpt}</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{item.gemini}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            ※ 上記は2026年2月時点の情報です。両ツールとも機能が頻繁にアップデートされるため、最新情報は各公式サイトでご確認ください。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            迷ったら、まずChatGPTから始めるのが最初の一歩としておすすめです。
            慣れてきたらGeminiも試し、自分の勉強スタイルに合う方を選びましょう。
          </p>
        </motion.section>

        {/* 資格別活用ヒント */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="qualification-hints" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            資格別のAI活用ヒント（FP・TOEIC・宅建・ITパスポート）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            それぞれの資格の特性に合わせた活用例を紹介します。
            そのままコピーして使えるプロンプト例も載せています。
          </p>
          <div className="mt-6 space-y-6">
            {qualificationHints.map((qual) => (
              <section key={qual.name} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">{qual.name}</h3>
                <ul className="mt-3 space-y-3">
                  {qual.hints.map((hint, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                      <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-will-primary/10 text-xs font-bold text-will-primary">
                        {i + 1}
                      </span>
                      <span>{hint}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            上記以外の資格でも基本的な使い方は同じです。「〔資格名〕の勉強にAIをどう使えばいいか教えて」と最初に聞くだけで、
            その資格に特化した活用法をAIが提案してくれます。
          </p>
        </motion.section>

        {/* 注意点 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="caution" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIで勉強するときに押さえておくべき注意点
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTはとても便利な学習サポーターですが、使い方によっては逆効果になることもあります。
            以下の4点は、特に意識して使うようにしてください。
          </p>
          <div className="mt-6 space-y-4">
            {cautionItems.map((item, i) => (
              <div key={item.title} className="rounded-xl border-l-4 border-amber-400 bg-amber-50 p-5">
                <h3 className="text-base font-bold text-gray-900">
                  <span className="mr-2 text-amber-600">⚠ 注意点 {i + 1}：</span>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.description}</p>
              </div>
            ))}
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：AI勉強法で「限られた時間」を最大化する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            仕事や家事で忙しい中での資格勉強は、時間の少なさより「詰まったときに前へ進めない」ことが一番つらいものです。
            ChatGPTはその詰まりを即解消してくれる相棒です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">テキストを見ながら「この用語の暗記カードを10枚作って」→ 記憶の定着を加速</li>
            <li className="pl-1 marker:text-gray-500">間違えた問題を貼り付けて「なぜ間違えたか教えて」→ 理解の穴を即修正</li>
            <li className="pl-1 marker:text-gray-500">「残り2ヶ月で合格できるプランを作って」→ 現実的なスケジュールを即設計</li>
            <li className="pl-1 marker:text-gray-500">誤答リストを渡して「弱点を分析して」→ 限られた時間を最重要分野に集中</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            大切なのは、AIに「全部やってもらう」のではなく、「自分が考えた後に壁打ち相手として使う」姿勢です。
            この使い方を続けることで、試験の合格と同時に「自分で考えながら学ぶ力」も育っていきます。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            今日の勉強で「わからない」と感じた瞬間、そのままChatGPTに相談してみてください。
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
            title="AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）"
            description="資格勉強・スキルアップ・日常業務でのAI活用まで、週1本のペースで実践的なAI知識をLINEでお届けしています。メルマガより気軽に読めると好評です。登録無料、いつでも退会できます。"
            buttonLabel="LINEで週1AI通信を受け取る（無料）"
          />
        </motion.section>

        {/* アカデミーCTA */}
        <motion.section
          className="mt-10 rounded-xl border border-will-primary/20 bg-will-lighter/40 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-lg font-bold text-gray-900">AI活用力とキャリアを同時に設計したい方へ</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            資格勉強にAIを活かすことで「学ぶ効率」は上がります。一方で、
            AIを活用して何を目指すか——働き方・キャリア・自分の強みをどう活かすか——という問いは、
            自分自身と向き合わないと答えが出ません。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、
            AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            「何のためにAIを学ぶのか」を整理したい方は、まずLINEで無料相談からどうぞ。
          </p>
          <a
            href="https://bexn9pao.autosns.app/line"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
          >
            AIリブートアカデミーについてLINEで相談する（無料）
          </a>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-study-learning-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで勉強効率が変わる！学習×AI活用の完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者向けガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTカスタム指示完全ガイド｜設定するだけで回答が変わる
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-memory-feature-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTのメモリ機能完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gemini-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Gemini初心者向け完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/notebooklm-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                NotebookLMの使い方｜勉強・情報整理に最強のAIツール
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
