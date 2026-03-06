"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";
import { ArticleH2, ArticleH3, Callout, RichFAQ, RichTable } from "@/components/blog/ArticleBody";

type FAQItem = {
  question: string;
  answer: string;
};

type Gpt54ComputerUseGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "GPT-5.4 Computer Use",
  "ChatGPT PC操作 自動化",
  "GPT-5.4 コンピュータ操作 使い方",
  "AI PC自動化 2026",
] as const;

const tocItems = [
  { id: "overview", label: "Computer Useとは？3行で理解する" },
  { id: "capabilities", label: "何ができるか・できないか" },
  { id: "osworld", label: "OSWorld-Verified 75.0% の意味" },
  { id: "howto", label: "実際の使い方（ChatGPT / API）" },
  { id: "usecases", label: "活用シーン5選" },
  { id: "security", label: "セキュリティ・プライバシー" },
  { id: "faq", label: "FAQ" },
] as const;

const answerPoints = [
  "GPT-5.4 Computer Useは、画面を見てクリック・入力・スクロールし、Webとローカルアプリをまたぐ処理を実行できる機能です。",
  "強いのは、フォーム入力、ブラウザから表計算への転記、複数アプリをまたぐ定型ワークフローのような構造化タスクです。",
  "CAPTCHA、MFA、決済、送信確定、本番データ削除のような高リスク操作は人間確認が前提です。OSWorld 75.0% は高い実力を示しますが、無監視運用の許可証ではありません。",
] as const;

const capabilityRows = [
  {
    area: "定型フォーム入力",
    fit: "入力欄が安定し、止める位置を「送信前」で指定できる作業",
    caution: "CAPTCHA、二段階認証、自治体ごとのUI変化が大きい画面は人手確認を残す",
  },
  {
    area: "ブラウザ -> スプレッドシート -> メール",
    fit: "情報収集、表更新、報告メール下書きを一連で処理する作業",
    caution: "送信確定や社外共有はAIに任せ切らず、レビューを挟む",
  },
  {
    area: "ローカルアプリの反復操作",
    fit: "ファイル整理、アップロード、ステータス更新などUIが安定した作業",
    caution: "権限の強い管理画面や削除操作は approval gate を入れる",
  },
  {
    area: "3Dプリンタ用の部品案/STL前処理",
    fit: "rough draft、寸法の叩き台、STL修正の前工程",
    caution: "公差、強度、安全性は必ずCADと人手で再検証する",
  },
  {
    area: "ログイン/MFA/決済",
    fit: "人間が takeover する前提の補助操作のみ",
    caution: "秘密情報をメッセージに貼らない。login中は人がブラウザを握る",
  },
  {
    area: "金融・法務・本番データ更新",
    fit: "下書き、情報収集、チェックリスト化まで",
    caution: "最終確定は必ず人間。高ステークス作業の自律実行は非推奨",
  },
] as const;

const scoreRows = [
  {
    metric: "GPT-5.4 on OSWorld-Verified",
    value: "75.0%",
    meaning: "OpenAI公式発表。PC操作ベンチマークで human baseline を上回る",
  },
  {
    metric: "Human baseline",
    value: "72.4%",
    meaning: "同じベンチマークでの人間成績。75.0% は「デモを超えた」ことを示す",
  },
  {
    metric: "Previous SOTA",
    value: "46.6%",
    meaning: "GPT-5.4は前世代の state of the art から大幅に更新",
  },
  {
    metric: "computer-use-preview (public guide)",
    value: "38.1%",
    meaning: "現行の公開実装ガイドは preview モデル基準。GPT-5.4の native Computer Use とは性能水準が異なる",
  },
] as const;

const chatgptSteps = [
  "ChatGPTの paid plan と agent mode 利用可否を確認する。Free plan では使えない。",
  "新しいチャットで tools menu から Agent を選ぶか、composer で `/agent` と入力する。",
  "ゴール、入力データ、止める条件を1プロンプトで明示する。例: 「CSVのA〜F列をフォームに入力し、送信前で止まってください」",
  "login、MFA、支払い情報、機密入力が必要になったら Take over browser に切り替えて人間が操作する。",
  "完了後は結果だけでなく、失敗行、要確認箇所、次回使い回すプロンプトを agent に要約させる。",
] as const;

const apiSteps = [
  "個人PCではなく、sandboxed browser / VM / container のような isolated environment を用意する。",
  "Responses API で computer loop を組む。現時点の公開ガイドは `computer-use-preview` と `computer_use_preview` を使う。",
  "response の `computer_call` を受け取り、クリック、入力、スクロールなどをコードで実行する。",
  "実行後の screenshot を `computer_call_output` として返し、可能なら `current_url` も送って safety check の精度を上げる。",
  "`pending_safety_checks` が返ったら、人間確認を挟んだうえで `acknowledged_safety_checks` を返す。",
] as const;

const useCaseItems = [
  {
    title: "1. 3Dプリンタ用の部品案とSTL前処理",
    body: "初期のコミュニティ検証では、自然文の仕様から部品案を起こし、参考画像や寸法表を調べ、STL修正の前工程までつなげる使い方が試されています。価値が出るのは『最初のラフを速く作る』部分です。",
    rule: "最終寸法、公差、強度計算、安全確認は人間の責任で行う。",
  },
  {
    title: "2. 3万件規模のポータル入力ワークフロー",
    body: "OpenAI公式発表では、Mainstay が custom confirmation policies を使い、3万超の property tax portals をまたぐ処理を進めている事例が紹介されています。Computer Useは、差分の大きいフォームでも『途中で止める』『危険な箇所だけ承認する』設計と相性が良いです。",
    rule: "自治体やシステムごとの差分、session timeout、送信確定前のレビューを前提にする。",
  },
  {
    title: "3. ブラウザ -> スプレッドシート -> メールの複数アプリ連携",
    body: "価格調査、競合調査、進捗更新のような作業では、ブラウザで情報を集めて表に転記し、そのまま報告メールまで作る multi-app workflow が効果を出しやすいです。OpenAIも『workflows across applications』を GPT-5.4 の強みとして挙げています。",
    rule: "社外送信や最終共有は人間がチェックする。",
  },
  {
    title: "4. バックオフィスの定型処理",
    body: "添付ファイルの保存、命名ルールの統一、管理画面のステータス更新、FAQの転記のような反復処理は、ルール化しやすく、Computer Useの導入候補になりやすい領域です。",
    rule: "対象アプリを allowlist 化し、権限を最小化したアカウントで動かす。",
  },
  {
    title: "5. 内製ツールのUI回帰チェック",
    body: "smoke test 的にログイン画面、主要導線、保存前までのクリック列を流し、エラー時の screenshot を残す用途も実務的です。完全なE2Eテストの代替ではなく、人間の確認を減らす補助として捉えると設計しやすいです。",
    rule: "本番データ変更は避け、テスト環境でだけ回す。",
  },
] as const;

const securityChecklist = [
  "パスワード、APIキー、個人情報をメッセージ本文に貼らない。機密入力は takeover 中に人が行う。",
  "必要な apps / connectors だけ有効化し、使わない権限は外す。",
  "agent が使う browser / VM は個人端末から分離し、履歴、cookie、downloads の扱いを決める。",
  "Plus / Pro では screenshots を含むデータが privacy policy に従って扱われる。Business / Enterprise / Edu は既定で学習に使われない点を分けて理解する。",
  "screenshots と browsing history は chat を削除するまで残る。機密タスク後は retention と削除フローを必ず回す。",
  "workspace 単位で RBAC、app controls、website blocking を使い、agent が触れてよい範囲を狭める。",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "新機能をただ試すのではなく、どの業務に当てると再現性が出るかを判断する力を育てます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡にして、自分の強み、任せるべき仕事、伸ばすべき役割を言語化します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "試行錯誤や運用知見を共有できる仲間がいることで、単発の検証を継続的な実務変化に変えます。",
  },
] as const;

const lineCtaTitle = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";
const lineCtaDescription =
  "GPT-5.4のような新機能の速報を追うだけでなく、実務で試す順番と注意点を毎週1本の短い解説で受け取れます。ツール広告ではなく、仕事で使う前提の整理だけを知りたい方向けです。";
const lineCtaButton = "LINEで週1AI通信を受け取る（無料）";

export default function Gpt54ComputerUseGuidePage({ faqItems }: Gpt54ComputerUseGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "GPT-5.4 Computer Use完全ガイド" },
          ]}
        />

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
                title="GPT-5.4 Computer Use完全ガイド｜PC操作AIの使い方と注意点"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            GPT-5.4 Computer Use完全ガイド｜PC操作AIの使い方と注意点
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年3月6日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAIは2026年3月5日に
            <a
              href="https://openai.com/index/introducing-gpt-5-4/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              GPT-5.4
            </a>
            を発表し、native computer use capabilities を備えた最初の汎用モデルとして位置づけました。要するに、文章生成や推論だけでなく、画面を見てクリックし、入力し、複数アプリをまたぐ仕事まで同じ文脈で扱える段階に入った、ということです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            検索者が混同しやすいのは、GPT-5.4本体、旧
            <Link href="/academy/blog/openai-operator-guide" className="blog-link text-will-primary underline-offset-4 hover:underline">
              Operator / agent mode
            </Link>
            、そして current public preview docs の関係です。本記事では、
            <Link href="/academy/blog/gpt-5-4" className="blog-link text-will-primary underline-offset-4 hover:underline">
              GPT-5.4全体像
            </Link>
            との違いを押さえつつ、
            <Link href="/academy/blog/ai-agent-landscape-2026" className="blog-link text-will-primary underline-offset-4 hover:underline">
              AIエージェント市場
            </Link>
            の流れの中で Computer Use をどう扱うべきかを整理します。
          </p>

          <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <p className="text-sm font-semibold text-amber-700">3行で要点</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {answerPoints.map((point) => (
                <li key={point} className="pl-1 marker:text-amber-600">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="overview"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="overview">Computer Useとは？3行で理解する</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            GPT-5.4 Computer Useは、モデルが画面を視覚的に理解しながら、クリック、入力、スクロール、アプリ切り替えを行い、指定されたゴールまで作業を進める能力です。OpenAIは公式発表で、Webからローカルアプリまで横断し、applications をまたぐ workflows を実行できることを強調しています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ここで重要なのは、これが専用の研究プレビューだけでなく、mainline の GPT-5.4 に統合されたことです。以前は browser automation か preview model か、あるいは product surface としての Operator を別々に理解する必要がありました。今は「考える」「調べる」「コードを書く」「PCを触る」が同じタスク設計の中でつながり始めています。
          </p>
          <Callout type="info" title="位置づけを一言で言うと">
            旧Operatorが「どこから使うか」という product surface の話だったのに対し、GPT-5.4 Computer Useは「モデルが何をネイティブにできるか」という capability の話です。検索時にこの2つを分けておくと、ChatGPT手順とAPI手順の違いで迷いにくくなります。
          </Callout>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox
            title={lineCtaTitle}
            description={lineCtaDescription}
            buttonLabel={lineCtaButton}
            analyticsSource="gpt54_computer_use_early"
          />
        </div>

        <motion.section
          id="capabilities"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="capabilities">何ができるか・できないか</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            Computer Useで成果が出るのは、画面上の状態が読みやすく、手順がある程度固定されていて、途中で人間確認を挟める仕事です。逆に、UIの揺れが大きい、1回の誤操作コストが高い、資格情報や法的責任が絡む作業は、まだAIに最後まで握らせるべきではありません。
          </p>

          <RichTable>
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 font-semibold text-gray-900">領域</th>
                <th className="px-4 py-3 font-semibold text-gray-900">向いている条件</th>
                <th className="px-4 py-3 font-semibold text-gray-900">止めるべき場面</th>
              </tr>
            </thead>
            <tbody>
              {capabilityRows.map((row) => (
                <tr key={row.area} className="border-b border-gray-200 align-top">
                  <td className="px-4 py-4 font-semibold text-gray-900">{row.area}</td>
                  <td className="px-4 py-4">{row.fit}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{row.caution}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>

          <ArticleH3>実務での判断基準</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            まずは「同じ画面を何度も触る」「途中成果を保存できる」「失敗しても巻き戻せる」業務から始めるのが基本です。逆に、削除、送信、承認、契約、支払いのような irreversible action は Computer Use の対象外に置くか、必ず explicit approval を入れてください。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            初期のコミュニティ検証では、3Dプリンタ用の部品案から STL 修正の前工程を回す maker workflow、大量のポータル入力、ブラウザから表計算とメールへつなぐ multi-app workflow が目立ちます。万能な desktop autopilot と捉えるより、「構造化されたPCオペレーションに強いエージェント」と考えるほうが実態に近いです。
          </p>
          <Callout type="warning" title="最初のPoCで外すべき領域">
            金融、法務、医療、個人情報の大量処理、本番データ削除、社外送信の自動確定は初期PoCから外してください。高ステークス領域は human-in-the-loop が前提であり、成功率より事故コストの管理が先です。
          </Callout>
        </motion.section>

        <motion.section
          id="osworld"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="osworld">OSWorld-Verified 75.0% の意味</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            OpenAIが前面に出している 75.0% は、OSWorld-Verified というPC操作ベンチマークでの成績です。重要なのは、単にクリックが速いという話ではなく、複数ステップの状態遷移を追いながら、途中のズレを修正してゴールまで到達できるかを測っている点です。
          </p>

          <RichTable>
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 font-semibold text-gray-900">指標</th>
                <th className="px-4 py-3 font-semibold text-gray-900">数値</th>
                <th className="px-4 py-3 font-semibold text-gray-900">実務での読み方</th>
              </tr>
            </thead>
            <tbody>
              {scoreRows.map((row) => (
                <tr key={row.metric} className="border-b border-gray-200 align-top">
                  <td className="px-4 py-4 font-semibold text-gray-900">{row.metric}</td>
                  <td className="px-4 py-4">{row.value}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>

          <p className="text-base leading-8 text-gray-700">
            ここで見落としやすいのは、OpenAIの current public Computer use guide がまだ
            <a
              href="https://platform.openai.com/docs/guides/tools-computer-use"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              `computer-use-preview`
            </a>
            を中心に書かれており、その guide 上の OSWorld は 38.1% だという点です。公開されている実装サンプルは参考になる一方、GPT-5.4 announcement が示す native Computer Use の性能水準はそれよりかなり先に進んでいます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ただし、75.0% は「人間以上に安全」という意味ではありません。ベンチマークにない独自UI、社内権限モデル、session timeout、prompt injection、監査要件は別問題です。実務では benchmark を信用しつつも、最後は自社の workflow で acceptance test を通す必要があります。
          </p>
        </motion.section>

        <motion.section
          id="howto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="howto">実際の使い方（ChatGPT経由 / API経由）</ArticleH2>

          <ArticleH3>ChatGPT経由で始める手順</ArticleH3>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-7 text-gray-700 sm:text-base">
            {chatgptSteps.map((step) => (
              <li key={step} className="pl-1">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-base leading-8 text-gray-700">
            OpenAI Help Center によると、ChatGPT agent は visual browser、terminal、apps を使って 5〜30分程度の複雑タスクを処理できます。フォーム入力や spreadsheet 編集のようなタスクは向いていますが、login が必要な場面では takeover が前提です。takeover 中は screenshots を取得しないため、password や secret の入力は必ずそこで行ってください。
          </p>

          <ArticleH3>API経由で始める手順</ArticleH3>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-7 text-gray-700 sm:text-base">
            {apiSteps.map((step) => (
              <li key={step} className="pl-1">
                {step}
              </li>
            ))}
          </ol>

          <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs leading-6 text-slate-100 sm:text-sm">
{`// Current public guide pattern (2026-03-06)
response = client.responses.create({
  model: "computer-use-preview",
  tools: [{
    type: "computer_use_preview",
    display_width: 1440,
    display_height: 900,
    environment: "browser"
  }],
  input: [{
    role: "user",
    content: [{ type: "input_text", text: "Open the portal and stop before submit." }]
  }],
  reasoning: { summary: "concise" },
  truncation: "auto"
})

// Loop
// 1. Read computer_call
// 2. Execute click/type/scroll in sandbox
// 3. Send computer_call_output with screenshot + current_url
// 4. If pending_safety_checks exists, ask human and pass acknowledged_safety_checks`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            公開ガイドでは `current_url` と `acknowledged_safety_checks` を送る設計が推奨されています。これは prompt injection や irrelevant domain の検出精度を上げるためです。
          </p>

          <Callout type="warning" title="公開ドキュメントのズレに注意">
            GPT-5.4の発表では updated `computer` tool が API / Codex に追加されたと案内されていますが、2026-03-06 時点で一般公開されている詳細実装ガイドは `computer-use-preview` naming のままです。実装前に最新の API reference / release notes で、使うモデル名と tool 名を必ず再確認してください。
          </Callout>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox
            title={lineCtaTitle}
            description={lineCtaDescription}
            buttonLabel={lineCtaButton}
            analyticsSource="gpt54_computer_use_mid"
          />
        </div>

        <motion.section
          id="usecases"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="usecases">活用シーン5選</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            「何に使うと一番効くのか」が分からないまま導入すると、Computer Use はすぐに過大評価か過小評価に振れます。最初は、成果物、止める条件、責任分界が明確な作業から始めるべきです。
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {useCaseItems.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  <span className="font-semibold text-gray-900">運用ルール:</span> {item.rule}
                </p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            特に大量フォーム入力と複数アプリまたぎは、初期の反応が最も熱い領域です。逆に、Computer Use を「どんなPC作業でも丸ごと任せられる」と捉えると事故率が上がります。価値が出るのは、手順があり、途中レビューがあり、巻き戻しできる workflow です。
          </p>
        </motion.section>

        <motion.section
          id="security"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="security">セキュリティ・プライバシーの注意点</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            企業利用で最初に見るべきは精度ではなく、screenshots と secrets の取り扱いです。ChatGPT agent は visual browser の screenshots を使ってページを理解します。画面に出した情報の範囲が、そのままモデルの判断材料になります。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700 sm:text-base">
            {securityChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAI Help Center では、Plus / Pro と Business / Enterprise / Edu でデータの扱いが分かれています。業務で顧客情報や未公開情報を扱うなら、consumer plan の延長ではなく、workspace controls と retention policy を前提に設計すべきです。特に website blocking、RBAC、enabled apps の制御は導入初期から決めてください。
          </p>
          <Callout type="warning" title="企業導入前に最低限決める4項目">
            1. agent が触れてよいアプリとドメインの allowlist / blocklist。 2. login / approval / send / delete の責任者。 3. screenshots と logs の保存期間。 4. 失敗時の切り戻し手順。この4点が決まっていない状態で本番運用に入るのは危険です。
          </Callout>
        </motion.section>

        <motion.section
          id="faq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">FAQ</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        <div className="mt-10">
          <LineCtaBox
            title={lineCtaTitle}
            description={lineCtaDescription}
            buttonLabel={lineCtaButton}
            analyticsSource="gpt54_computer_use_late"
          />
        </div>

        <motion.section
          className="mt-16 rounded-3xl border border-will-primary/15 bg-will-lighter/40 p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-2xl font-bold text-gray-900">ツール名ではなく、AIを仕事に組み込む判断軸を持ちたい方へ</p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            GPT-5.4のような新機能で差がつくのは、触った人より、どの業務に任せてどこを人が握るかを設計できる人です。AIリブートアカデミーでは、特定ツールの操作習得ではなく、生成AI活用力、自己理解・キャリアデザイン、仲間と共に学ぶ環境を一体で整えています。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              AIリブートアカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
