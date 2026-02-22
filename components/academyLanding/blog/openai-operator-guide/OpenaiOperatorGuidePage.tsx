"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type OpenaiOperatorGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "OpenAI Operator 使い方",
  "ChatGPT Operator ブラウザ自動化",
  "OpenAI エージェント",
  "ChatGPT Pro 自動操作",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "difference", label: "OperatorとAtlasの違い" },
  { id: "getting-started-japan", label: "日本での利用開始方法" },
  { id: "use-cases", label: "実際にできること" },
  { id: "limitations", label: "できないこと・制限" },
  { id: "security", label: "セキュリティ設定" },
  { id: "comparison", label: "Anthropic/Google比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
  { id: "academy-cta", label: "学習を継続する次の一歩" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";

const summaryPoints = [
  "Operatorは2025年1月23日に研究プレビューとして公開され、2025年2月21日に日本を含む地域へ拡大しました。",
  "2026年2月時点では、Operator単体ではなくChatGPTのagent modeとして使う理解が正確です。",
  "AtlasはAIブラウザ製品、Operator/agent modeはブラウザ操作を含むタスク実行機能で、役割が異なります。",
  "フォーム入力、予約、EC操作、データ収集のような反復作業は効果が出やすい一方、送信・決済・金融操作は人間確認が必須です。",
  "Anthropic Computer UseはAPI実装寄り、Google Marinerは米国中心の段階提供で、導入前提条件が異なります。",
] as const;

const atlasVsOperatorRows = [
  {
    axis: "何を提供するか",
    atlas: "ブラウザそのものにAI機能を統合した操作体験",
    operator: "目標を渡してブラウザ操作を自律実行するエージェント機能",
  },
  {
    axis: "主な利用起点",
    atlas: "閲覧中に調べる・要約する・補助してもらう",
    operator: "タスクを委任し、実行結果を受け取る",
  },
  {
    axis: "2026年2月時点の提供形態",
    atlas: "Atlasアプリ/ブラウザで提供（プラン別に機能差あり）",
    operator: "ChatGPT agent modeへ統合。operator.chatgpt.comは終了案内",
  },
  {
    axis: "向いている導入ステップ",
    atlas: "個人の調査・下書き・日常ブラウジング改善",
    operator: "業務フローの反復工程を定義して半自動化",
  },
] as const;

const rolloutTimeline = [
  {
    date: "2025-01-23",
    title: "Operator公開（研究プレビュー）",
    detail:
      "OpenAIがOperatorを公開。開始時点は米国Proユーザー向けで、ブラウザを見てクリック・入力・スクロールする仕組みが提示されました。",
  },
  {
    date: "2025-02-21",
    title: "日本を含む地域へ展開",
    detail:
      "OpenAI公式更新で、日本・韓国・シンガポール・英国などへ提供拡大。引き続きProユーザー向けの案内でした。",
  },
  {
    date: "2025-07-17",
    title: "agent modeへ統合開始",
    detail:
      "Operatorの学習成果をChatGPT agent modeへ統合。2025年8月にはPlus/Business/Eduへ対象が順次拡大しました。",
  },
] as const;

const startSteps = [
  {
    title: "Step 1. 自動化対象を1業務に固定する",
    body: "最初は「毎週の価格チェック」「定型フォーム入力」など、成果が測れる1業務に絞ります。対象を広げると品質評価ができません。",
  },
  {
    title: "Step 2. 事前条件を明文化する",
    body: "入力データ、禁止操作、承認者、出力形式を先に決めます。ここが曖昧だと精度より運用事故が先に起きます。",
  },
  {
    title: "Step 3. 監視モード前提で回す",
    body: "メール送信、金融操作、外部公開の前には人間確認を必須にして、最終実行を人が担うフローにします。",
  },
  {
    title: "Step 4. 週次で短縮時間と修正率を記録する",
    body: "時短だけでなく、修正回数・再入力回数・誤操作件数を追跡し、効果が出る条件をチームで共有します。",
  },
] as const;

const useCaseCards = [
  {
    title: "フォーム入力の定型処理",
    body: "問い合わせや社内申請のように入力欄が固定されている作業は、最も効果が出やすい領域です。特に候補値が決まっている業務で時間短縮が見込めます。",
    example: "例: 見積依頼フォームの下書き、社内ワークフロー申請の一次入力",
  },
  {
    title: "予約業務の前処理",
    body: "候補日抽出、条件入力、予約候補の比較までを任せると、担当者は最終選択に集中できます。確定操作は人が行う運用が安全です。",
    example: "例: 会食先の候補比較、出張日程の仮予約、会議室予約の候補提示",
  },
  {
    title: "ECサイトの調査・比較",
    body: "価格、在庫、送料、納期など比較軸を先に定義すると、意思決定前の調査工数を圧縮できます。最終購入はTake over modeに切り替えて実施します。",
    example: "例: 調達先比較表の下書き、月次の価格モニタリング",
  },
  {
    title: "データ収集と整形",
    body: "公開情報の抽出と表形式への整理は実務利用しやすい用途です。情報源URLと取得日時を必ず残すことで、後から検証しやすくなります。",
    example: "例: 競合機能比較、採用情報の更新監視、公開価格の定点観測",
  },
] as const;

const limitationRows = [
  {
    area: "一部サイトへのアクセス",
    limitation: "OpenAI側の安全基準で一部サイトはブロック対象。完全リストは公開されていない",
    operationRule: "業務で必須サイトがある場合は事前にPoCで動作確認する",
  },
  {
    area: "高リスクカテゴリ",
    limitation: "メール、金融、法務、医療などは監視モード対象になりやすい",
    operationRule: "送信・確定前に人の承認を必須化する",
  },
  {
    area: "UIが複雑な画面",
    limitation: "スライドショーや高機能カレンダーなどは操作精度が落ちる場合がある",
    operationRule: "複雑な画面は自動化対象から外し、補助用途に留める",
  },
  {
    area: "ログイン/決済/CAPTCHA",
    limitation: "Take over modeで人間入力が必要。AIへの丸投げは不可",
    operationRule: "共有アカウントを避け、端末・資格情報を分離して運用する",
  },
] as const;

const securityChecklist = [
  "パスワードは必ずTake over modeで直接入力し、AI出力欄へ貼り付けない",
  "決済情報・契約確定・外部送信は人間の承認を必須にする",
  "業務アカウントと個人アカウントを分離し、権限は最小化する",
  "セッション終了時に履歴・ログ・接続アプリを確認し、不要な接続を解除する",
  "秘密情報を含む業務は、入力可能データの範囲を文書化してから運用する",
] as const;

const competitorRows = [
  {
    product: "OpenAI Operator / ChatGPT agent",
    availability: "ChatGPT内で提供。2026-02時点は有料プラン中心",
    style: "ブラウザ操作を含むタスク実行。監視モードとTake over modeあり",
    fit: "非エンジニア含む現場で、反復ブラウザ業務を短縮したいチーム",
  },
  {
    product: "Anthropic Computer Use",
    availability: "ベータ。Anthropic APIとBedrock/Vertex AI経由で提供",
    style: "APIから仮想PC操作を組み込む開発者向けアプローチ",
    fit: "自社プロダクトにPC操作エージェントを組み込みたい開発組織",
  },
  {
    product: "Google Project Mariner",
    availability: "米国のGoogle AI Ultra加入者向けに段階提供",
    style: "Chrome拡張起点でWebタスクを実行。ユーザー確認を前提に設計",
    fit: "Googleエコシステム中心で実験導入を進めたいチーム",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "業務で再現できるAI活用の判断軸を身につけ、ツール名ではなく課題起点で使い分ける力を育てます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡に自分の強みと価値観を言語化し、次に伸ばすスキルとキャリア方向を整理します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題に取り組む仲間との対話と実践共有で、学習を継続できる習慣を作ります。",
  },
] as const;

function LineCtaBox({ tone }: { tone: "gray" | "green" | "orange" }) {
  const className =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : tone === "orange"
        ? "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
        : "mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6";

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-gray-900">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          今すぐ無料で登録する（30秒）
        </a>
      </div>
    </motion.section>
  );
}

export default function OpenaiOperatorGuidePage({ faqItems }: OpenaiOperatorGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "OpenAI Operatorガイド" },
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
                title="OpenAI Operator使い方ガイド｜Atlasとの違い・日本での始め方・安全な自動操作"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            OpenAI Operator使い方ガイド｜Atlasとの違い・日本での始め方・安全な自動操作
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            先に混同しやすい点を整理します。Atlasは「AIブラウザ」、Operatorは「ブラウザ操作を実行するエージェント機能」です。つまり、Atlasは作業する場、Operatorは作業を進める実行レイヤーという関係で捉えると判断がぶれません。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            この記事では、OpenAIの公式公開情報を基準に、Operatorの使い方を2026年2月20日時点で整理します。特に、日本での開始時期、現在のプラン条件、できることと制限、セキュリティ設定、Anthropic
            Computer Use・Google Marinerとの比較まで実務向けにまとめます。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            Atlasの詳細を先に確認したい場合は
            <Link href="/academy/blog/openai-atlas-guide" className="blog-link text-will-primary underline-offset-2 hover:underline">
              OpenAI Atlasガイド
            </Link>
            を参照してください。
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
        </motion.section>

        <motion.section
          id="difference"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">Operatorとは？まずAtlasとの違いを3分で整理</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Operatorは、Webページを見ながらクリック、入力、スクロールを実行する「行動型」のAIです。一方でAtlasは、ブラウザの中にAI対話と補助機能を統合した「作業環境」です。導入判断で重要なのは、改善したい対象が「調査体験」なのか「作業実行」なのかを分けることです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Atlas</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Operator / agent mode</th>
                </tr>
              </thead>
              <tbody>
                {atlasVsOperatorRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.atlas}</td>
                    <td className="py-4 pl-4">{row.operator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            補足: OpenAIのagent FAQでは、旧operator.chatgpt.comは終了し、現在はagent mode統合が明記されています。指名検索で「Operator」を探している場合でも、実際の利用導線はChatGPT側に移っています。
          </p>
        </motion.section>

        <LineCtaBox tone="gray" />

        <motion.section
          id="getting-started-japan"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">日本での利用開始方法（プラン・料金・開始手順）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            日本での開始時期とプラン条件は、時系列で見ると整理しやすくなります。2025年1月23日の公開当初は米国Pro向け、2025年2月21日に日本を含む地域へ拡大、その後2025年7月17日からagent mode統合が始まりました。
          </p>
          <div className="mt-6 space-y-4">
            {rolloutTimeline.map((item) => (
              <section key={item.date} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-xs font-semibold tracking-wide text-will-primary">{item.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">料金の押さえどころ</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Operator公開当初の前提だったChatGPT Proは月額200ドルです。</li>
            <li className="pl-1 marker:text-gray-500">2026年2月時点のagent modeは有料プラン中心で提供され、対象は更新されるため利用時点で確認が必要です。</li>
            <li className="pl-1 marker:text-gray-500">支払い操作を伴う業務は、プラン選定より先に承認ルール設計を優先してください。</li>
          </ul>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">開始時の実装手順</h3>
          <div className="mt-4 space-y-4">
            {startSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h4 className="text-base font-semibold text-gray-900">{step.title}</h4>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            プラン詳細を比較したい場合は
            <Link href="/academy/blog/chatgpt-plan-comparison" className="blog-link text-will-primary underline-offset-2 hover:underline">
              ChatGPTプラン比較ガイド
            </Link>
            を併せて確認してください。
          </p>
        </motion.section>

        <motion.section
          id="use-cases"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">実際にできること（フォーム入力・予約・EC操作・データ収集）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            OpenAI公式のOperator紹介では、DoorDash、Instacart、OpenTable、Uber、Pricelineなどの協業先が提示されています。実務での有効性は「同じ判断を繰り返す作業」に集中させると高くなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {useCaseCards.map((card) => (
              <section key={card.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
                <p className="mt-3 text-xs font-medium text-gray-500">{card.example}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            エージェントの基本概念を整理したい場合は
            <Link href="/academy/blog/what-is-ai-agent" className="blog-link text-will-primary underline-offset-2 hover:underline">
              AIエージェントとは？
            </Link>
            と
            <Link
              href="/academy/blog/ai-agent-operations-guide"
              className="blog-link text-will-primary underline-offset-2 hover:underline"
            >
              AIエージェント運用ガイド
            </Link>
            も参照すると、運用設計まで一貫して理解できます。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="limitations"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">できないこと・失敗しやすいこと（サイト制限と安全設計）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2026年2月時点で重要なのは「対応サイトの数」ではなく「制限される条件」を理解することです。OpenAI FAQでは、アクセス制限サイトの存在、監視モード対象カテゴリ、複雑UIでの失敗可能性が明示されています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">論点</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">制限内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用ルール</th>
                </tr>
              </thead>
              <tbody>
                {limitationRows.map((row) => (
                  <tr key={row.area} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.area}</th>
                    <td className="py-4 px-4">{row.limitation}</td>
                    <td className="py-4 pl-4">{row.operationRule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="security"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">セキュリティ設定（パスワード管理の注意点）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Operator/agent modeを業務利用する際は、精度より先にセキュリティ境界を決めるべきです。特にログイン情報、決済情報、外部送信の扱いを曖昧にしたまま導入すると、時短よりリスクが上回ります。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {securityChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            実務導入では、操作ログの保存期間、誰が承認者か、失敗時の手戻り手順まで定義しておくと、現場定着が進みやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="comparison"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">Anthropic Computer Use・Google Marinerとの比較</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            3者を同列で比較するより、「誰が操作主体か」で整理するのが実務向きです。OpenAIは製品利用、AnthropicはAPI実装、Googleは段階提供中の実験導入という違いがあります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">製品</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">提供状況</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">実行スタイル</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いているケース</th>
                </tr>
              </thead>
              <tbody>
                {competitorRows.map((row) => (
                  <tr key={row.product} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.product}</th>
                    <td className="py-4 px-4">{row.availability}</td>
                    <td className="py-4 px-4">{row.style}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            どの選択でも共通するのは、確認不要な操作だけを委任し、確認が必要な操作は必ず人間が担当する設計です。この分離ができると、導入後のトラブルが大きく減ります。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="related-links"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">関連リンク（一次情報）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://openai.com/index/introducing-operator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-will-primary underline-offset-2 hover:underline"
              >
                OpenAI: Introducing Operator
              </a>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://help.openai.com/en/articles/11752874-chatgpt-agent-faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-will-primary underline-offset-2 hover:underline"
              >
                OpenAI Help: ChatGPT agent FAQ
              </a>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://openai.com/index/introducing-atlas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-will-primary underline-offset-2 hover:underline"
              >
                OpenAI: Introducing Atlas
              </a>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://docs.anthropic.com/en/docs/build-with-claude/computer-use"
                target="_blank"
                rel="noopener noreferrer"
                className="text-will-primary underline-offset-2 hover:underline"
              >
                Anthropic Docs: Computer use (beta)
              </a>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://deepmind.google/models/project-mariner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-will-primary underline-offset-2 hover:underline"
              >
                Google DeepMind: Project Mariner for developers
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-6 text-gray-500">※確認日: 2026年2月20日。提供範囲と仕様は更新される可能性があります。</p>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-orange-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="mt-4 text-sm leading-7 text-orange-900/90">
            AIリブートアカデミーでは、特定ツールの操作習得ではなく、生成AI活用力・自己理解とキャリアデザイン・仲間と共に学ぶ環境の3本柱を一体で設計します。ツール名に振り回されず、自分の仕事で活かす判断基準を持ちたい方に向けた学習設計です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-orange-200 bg-white p-4">
                <h3 className="text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
