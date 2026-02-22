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
  SummaryBox,
  RichTable,
  RichFAQ,
  Callout,
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

const keywordTags = [
  "AI 有料プラン 比較",
  "ChatGPT Plus 費用対効果",
  "Claude Pro 料金",
  "Gemini Advanced",
  "AI コスパ 2026",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "price-list", label: "主要AIツール有料プラン一覧" },
  { id: "free-vs-paid", label: "無料と有料の正直な比較" },
  { id: "by-user-type", label: "ユーザータイプ別おすすめプラン" },
  { id: "timing", label: "有料プランに入るタイミング" },
  { id: "save-cost", label: "費用を抑える3つの戦略" },
  { id: "simulation", label: "コストシミュレーション" },
  { id: "trends", label: "2026年後半の価格動向" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const summaryItems = [
  "主要4サービス（ChatGPT Plus・Claude Pro・Gemini Advanced・Perplexity Pro）はいずれも月約2,000〜3,000円。スペックはほぼ横一線",
  "無料プランでも日常的なAI活用は十分可能。有料化は「制限に毎日引っかかる」ようになってから",
  "最初の1本はChatGPT PlusかClaude Proを推奨。用途でどちらが向くかを判断する",
  "Googleワークスペース利用者はGemini Advancedが特にコスパ高。検索重視ならPerplexity Pro",
  "複数課金は月6,000円以上になるため、1本を深く使いこなしてから追加を検討するのが賢明",
] as const;

const pricePlanRows = [
  {
    tool: "ChatGPT Plus",
    price: "月20ドル（約3,000円）",
    model: "GPT-5・GPT-4o（フルアクセス）",
    features: "DALL-E画像生成・音声入力・GPTs・ブラウジング",
    bestFor: "オールマイティに使いたい方",
  },
  {
    tool: "ChatGPT Pro",
    price: "月200ドル（約30,000円）",
    model: "GPT-5・o3（フル・無制限）",
    features: "Plusの全機能＋o3モデル無制限・高度な推論",
    bestFor: "研究者・ヘビーユーザー向け",
  },
  {
    tool: "Claude Pro",
    price: "月20ドル（約3,000円）",
    model: "Claude Sonnet 4.6・Opus 4.6",
    features: "Projects機能・200Kコンテキスト・優先アクセス",
    bestFor: "長文処理・資料分析が多い方",
  },
  {
    tool: "Gemini Advanced",
    price: "月2,900円（Google One AI Premium）",
    model: "Gemini 2.0 Ultra",
    features: "Gmail・Docs・Sheets連携・1TB Driveストレージ付き",
    bestFor: "Googleワークスペースユーザー",
  },
  {
    tool: "Perplexity Pro",
    price: "月2,000円（年払い1,680円/月）",
    model: "GPT-4o・Claude・Geminiを選択可",
    features: "リアルタイム検索・複数モデル切替・無制限詳細回答",
    bestFor: "情報収集・検索重視の方",
  },
] as const;

const freeVsPaidRows = [
  { feature: "回答モデルの品質", free: "制限付き最新モデル or 一世代前", paid: "最新・最高性能モデルにフルアクセス" },
  { feature: "回答回数の制限", free: "1日あたり数十回程度（ツールによる）", paid: "実質無制限（一部上限あり）" },
  { feature: "ファイルアップロード", free: "制限あり（容量・回数）", paid: "容量・回数ともに大幅増" },
  { feature: "画像生成（ChatGPT）", free: "制限付き", paid: "高解像度・無制限（Plus以上）" },
  { feature: "サーバー優先度", free: "混雑時に遅延が発生しやすい", paid: "優先アクセスでレスポンスが安定" },
  { feature: "Projects機能（Claude）", free: "利用不可", paid: "Pro以上で利用可能" },
  { feature: "音声入力・出力", free: "制限付き（ChatGPT）", paid: "高品質・無制限（ChatGPT Plus以上）" },
  { feature: "コンテキスト長", free: "8K〜32Kトークン程度", paid: "最大200K〜（Claudeなど）" },
] as const;

const userTypeRecommendations = [
  {
    type: "AIを初めて本格的に使い始める方",
    icon: "🚀",
    pick: "ChatGPT Plus または Claude Pro",
    reason: "どちらも月3,000円程度で最高性能モデルを使い放題。まずChatGPT Plusで始め、長文処理が増えたらClaude Proへ移行するパターンが多い。",
  },
  {
    type: "画像生成もAIでやりたい方",
    icon: "🎨",
    pick: "ChatGPT Plus",
    reason: "DALL-E 3が統合されており、テキストと画像生成を同一の画面で完結できる。SNS用の画像・バナー・アイキャッチ作成に。",
  },
  {
    type: "長文処理・資料分析が多い方",
    icon: "📄",
    pick: "Claude Pro",
    reason: "200,000トークン（約15万字）のコンテキストは業界最大水準。Projects機能で資料を蓄積しながら継続的に作業できる点も強み。",
  },
  {
    type: "Google Workspaceユーザー",
    icon: "📊",
    pick: "Gemini Advanced（Google One AI Premium）",
    reason: "月2,900円でGmailの返信提案・Googleドキュメントの文章生成・スプレッドシートの分析が直接使える。1TB Driveストレージも付いてくる。",
  },
  {
    type: "情報収集・ニュースリサーチが中心の方",
    icon: "🔍",
    pick: "Perplexity Pro",
    reason: "最新ニュース・学術論文をリアルタイムで検索しながら整理してくれる。「調べる」作業が仕事の中心の方に向いている。",
  },
] as const;

const costStrategies = [
  {
    num: "01",
    title: "まず1ツールを3ヶ月間徹底的に使い込む",
    body: "複数に分散させると各ツールの使い方が浅くなり、費用対効果が下がります。最初の1本を3ヶ月間毎日使い、「これだけでは足りない」と感じる限界が見えてから2本目を検討しましょう。",
  },
  {
    num: "02",
    title: "無料プランと有料プランを「用途」で使い分ける",
    body: "「調べもの」はPerplexity無料版、「文章の下書き」はClaude無料版という使い分けで、月0円でも相当な作業をこなせます。有料化は1つの用途で毎日制限にぶつかるようになってから。",
  },
  {
    num: "03",
    title: "Perplexity Proだけ年払いにする",
    body: "4サービスの中で年払い割引があるのはPerplexityのみ。月払い2,000円→年払い換算1,680円で約17%お得になります。他のサービスは月払いが唯一の選択肢（2026年2月時点）。",
  },
] as const;

const simulationData = [
  { pattern: "無料プランのみ（フル活用）", monthly: "0円", annual: "0円", hours: "月10時間", perHour: "0円", verdict: "◎ まず試す段階" },
  { pattern: "ChatGPT Plus のみ", monthly: "約3,000円", annual: "約36,000円", hours: "月10時間", perHour: "約300円/時間", verdict: "○ 十分なコスパ" },
  { pattern: "Claude Pro のみ", monthly: "約3,000円", annual: "約36,000円", hours: "月10時間", perHour: "約300円/時間", verdict: "○ 長文作業向け" },
  { pattern: "Gemini Advanced のみ", monthly: "2,900円", annual: "約34,800円", hours: "月10時間", perHour: "約290円/時間", verdict: "○ Google利用者向け" },
  { pattern: "ChatGPT Plus ＋ Claude Pro", monthly: "約6,000円", annual: "約72,000円", hours: "月20時間（各10時間）", perHour: "約300円/時間", verdict: "△ 使い分けが明確なら可" },
  { pattern: "3サービス以上の掛け持ち", monthly: "9,000円〜", annual: "108,000円〜", hours: "月30時間以上必要", perHour: "300円/時間〜", verdict: "✕ 初心者には非推奨" },
] as const;

export default function AiToolCostGuide2026Page({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI有料プランの費用対効果を正直比較2026" },
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
              <span key={tag} className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton title="AI有料プランの費用対効果を正直比較2026" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI有料プランの費用対効果を正直比較2026
            <span className="mt-2 block text-2xl text-gray-700 sm:text-3xl">ChatGPT・Claude・Gemini、月いくら払うべき？</span>
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTとClaude、どっちのProに入ればいい？」「毎月何千円も払う価値ある？」——AIツールの有料プランへの投資を迷っている方は多いはず。
            2026年2月時点の最新情報をもとに、主要4サービスの有料プランを正直に比較します。
            価格・性能・用途ごとの向き不向き、そして「有料化すべきタイミング」の明確な目安まで、忖度なしでお伝えします。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連記事：
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">ChatGPTプラン比較</Link>・
          <Link href="/academy/blog/claude-projects-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">Claude Projects完全ガイド</Link>・
          <Link href="/academy/blog/gpt-vs-claude-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">GPT vs Claude 2026年比較</Link>・
          <Link href="/academy/blog/ai-free-plan-comparison-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">AI無料プラン比較2026</Link>
          もあわせてご覧ください。
        </p>

        <ArticleTOC items={tocItems} />

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <div id="conclusion" className="scroll-mt-28">
            <SummaryBox title="要点まとめ（AIO向け：結論先出し）" items={summaryItems} />
          </div>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ArticleH2 id="price-list">2026年の主要AIツール有料プラン一覧</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">2026年2月時点の料金・モデル・主要機能をまとめました（1ドル＝150円換算）。</p>
          <RichTable>
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">サービス・プラン</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">月額料金</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">利用できるモデル</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">主要機能</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">向いている方</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pricePlanRows.map((row) => (
                <tr key={row.tool} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-bold text-gray-900">{row.tool}</td>
                  <td className="px-4 py-3 font-semibold text-will-primary">{row.price}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{row.model}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.features}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-3 text-xs text-gray-500">
            ※ 料金・仕様は2026年2月時点。最新情報は
            <a href="https://chatgpt.com/pricing" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">ChatGPT料金</a>・
            <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">Claude料金</a>でご確認ください。
          </p>
          <Callout type="warning" title="ChatGPT Proについて（月200ドル）">
            ChatGPT Proは月約30,000円と他の3〜5倍の価格設定です。研究者・開発者向けで、一般ユーザーにはChatGPT Plusで十分です。
          </Callout>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ArticleH2 id="free-vs-paid">無料プランでできること・できないこと：正直な比較</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">「無料で十分なんじゃないか？」という疑問は正当です。実際、日常的なAI活用の多くは無料プランでもこなせます。</p>
          <RichTable>
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">機能</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">無料プラン</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-will-primary">有料プラン</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {freeVsPaidRows.map((row) => (
                <tr key={row.feature} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.free}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{row.paid}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-5 text-base leading-8 text-gray-700">
            正直に言えば、<strong>「1日に5〜10回程度、文章の下書きや要約に使う」程度なら無料プランで十分</strong>です。有料化を検討すべきは以下のような状況です：
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-400">「今日は上限に達しました」のメッセージに毎日遭遇する</li>
            <li className="pl-1 marker:text-gray-400">30ページ以上のPDFを要約・分析したい</li>
            <li className="pl-1 marker:text-gray-400">混雑時間帯にサーバーが遅く、業務に支障が出る</li>
            <li className="pl-1 marker:text-gray-400">画像生成を日常的に使いたい（ChatGPT）</li>
            <li className="pl-1 marker:text-gray-400">Claude ProjectsなどPro限定機能が業務に必要</li>
          </ul>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ArticleH2 id="by-user-type">ユーザータイプ別おすすめプラン</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「自分はどれを選べばいいの？」——正直に言うと、<strong>最初の1本は「とりあえず一番シェアの高いChatGPT Plus」から始めるのが失敗しにくい</strong>です。
          </p>
          <div className="mt-6 space-y-4">
            {userTypeRecommendations.map((item) => (
              <div key={item.type} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <p className="font-bold text-gray-900">{item.type}</p>
                    <p className="mt-1 text-sm font-semibold text-will-primary">おすすめ：{item.pick}</p>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{item.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <MidArticleCtaBox slug="ai-tool-cost-guide-2026" />
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ArticleH2 id="timing">有料プランに入るべきタイミング・目安</ArticleH2>
          <Callout type="tip" title="有料化すべき3つのサイン">
            <ol className="mt-2 list-decimal space-y-2 pl-5">
              <li><strong>週3回以上「上限に達しました」と表示される：</strong>月3,000円÷20日＝1日150円のコストで制限がなくなると考えると、費用対効果は十分です。</li>
              <li><strong>AIで節約できた時間が月2時間を超えた：</strong>時給2,000円と仮定すると、月2時間の節約＝4,000円の価値創出。月3,000円を十分に回収できます。</li>
              <li><strong>「この機能があれば絶対使う」というPro限定機能がある：</strong>Claude ProjectsやChatGPTの高品質画像生成など、具体的な用途が決まったタイミングが有料化の最適解。</li>
            </ol>
          </Callout>
          <Callout type="info" title="まだ有料化しなくていいケース">
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>AIを使い始めてまだ2週間以内（まず使い方を身につける期間）</li>
              <li>1日1〜2回しか使わず、制限に引っかかったことがない</li>
              <li>「試してみたい」という好奇心だけが動機（まず無料で十分楽しめる）</li>
            </ul>
          </Callout>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ArticleH2 id="save-cost">費用を抑えてAIを使いこなす3つの戦略</ArticleH2>
          <div className="mt-6 space-y-4">
            {costStrategies.map((item) => (
              <div key={item.num} className="flex gap-4 rounded-xl border border-gray-200 bg-gray-50/50 p-5">
                <div className="shrink-0 text-3xl font-bold text-will-primary/30">{item.num}</div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ArticleH2 id="simulation">実際のコストシミュレーション（月10時間使う場合）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">「1時間あたりいくら」で考えると費用対効果がわかりやすくなります。仮に月10時間（1営業日30分）使うとしてシミュレーションしました。</p>
          <RichTable>
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">プランパターン</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">月額費用</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">年額費用</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">使用時間</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">1時間あたり</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">判定</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {simulationData.map((row) => (
                <tr key={row.pattern} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">{row.pattern}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-will-primary">{row.monthly}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.annual}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.hours}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{row.perHour}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-4 text-base leading-8 text-gray-700">
            <strong>1時間あたり約300円</strong>（有料プラン1本）は、コンビニコーヒー1杯分程度のコストです。AIによって1時間の作業が30分に短縮されれば、時給換算で十分に元が取れます。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ArticleH2 id="trends">2026年後半の注目：各社の価格変動トレンド</ArticleH2>

          <ArticleH3>値下げ圧力と競争激化</ArticleH3>
          <p className="mt-2 text-base leading-8 text-gray-700">
            DeepSeekなどのオープンソースモデルの台頭により、AIの推論コストは急速に低下しています。2026年後半には無料プランの高機能化か、有料プランの値下げが起きる可能性があります。
          </p>

          <ArticleH3>「エージェント利用」による従量課金の普及</ArticleH3>
          <p className="mt-2 text-base leading-8 text-gray-700">
            AIエージェントの利用増加に伴い、処理量に応じた従量課金モデルが主流になる可能性があります。現在の定額制から移行が進む場合、ヘビーユーザーにとってはコストが増える可能性も。
          </p>

          <ArticleH3>法人向け価格の整備</ArticleH3>
          <p className="mt-2 text-base leading-8 text-gray-700">
            ChatGPT Team・Claude Teamなどの法人向けプランは2025〜2026年に続々と改定が行われています。企業で複数名が使う場合は、個人Proプランより法人プランの方がコスパが良くなるケースが出てきています。
          </p>

          <Callout type="info" title="2026年後半の賢い判断軸">
            価格が下がる可能性があるため、年払いより月払いで柔軟性を保つのが賢明です（Perplexityを除く）。また、1社に依存するより、無料プランも含めた「マルチAI戦略」が費用対効果の高い使い方になりつつあります。
          </Callout>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        <motion.section className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <ArticleH2 id="summary">まとめ：「迷ったらChatGPT Plus」、用途が決まれば乗り換えを</ArticleH2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">主要4サービスはいずれも月約2,000〜3,000円で最高性能モデルにアクセスできる</li>
            <li className="pl-1 marker:text-gray-500">無料プランは「毎日制限にぶつかる」ようになってから有料化を検討</li>
            <li className="pl-1 marker:text-gray-500">最初の1本はChatGPT Plus（オールラウンド）かClaude Pro（長文・資料分析）</li>
            <li className="pl-1 marker:text-gray-500">Google Workspace利用者にはGemini Advanced、検索重視にはPerplexity Proが向く</li>
            <li className="pl-1 marker:text-gray-500">複数課金は使い分けが明確になってから。まず1本を深く使い込む</li>
            <li className="pl-1 marker:text-gray-500">2026年後半は価格変動の可能性あり。年払いより月払いで柔軟性を保つのが賢明</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIツールの有料化は「サブスクを増やす」ことではなく、「自分の生産性への投資」です。月3,000円で1日1時間の作業が30分に短縮されれば、1ヶ月で15時間を取り戻せます。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            まずは無料プランで試し、「もっと使いたい」という感覚が来たら有料化を。その最初の一歩を、AIリブートが応援します。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <LineCtaBox
            title="どのAIを使えばいいか迷ったら"
            description="AIリブートのLINE公式アカウントで相談してください。「自分の仕事にはどのAIが向いてる？」「有料プランに入るべき？」——初学者向けの情報を週1回配信中。個別相談も受け付けています（登録無料）。"
            buttonLabel="LINEで無料相談する"
          />
        </motion.section>

        <motion.section className="mt-14 border-t border-gray-300 pt-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal} transition={{ duration: 0.5, ease: "easeOut" }}>
          <h2 className="text-2xl font-bold text-gray-900">次のステップ：プランを決めたら使い方を学ぼう</h2>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
              プロンプトの書き方を学ぶ
            </Link>
            <Link href="/academy/blog/claude-projects-guide" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900">
              Claude Projects完全ガイドを読む
            </Link>
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li><Link href="/academy/blog/chatgpt-plan-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">ChatGPTプラン比較｜無料・Plus・Pro・Teamの違いを徹底解説</Link></li>
            <li><Link href="/academy/blog/claude-projects-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">Claude Projectsとは？使い方から活用術まで完全ガイド</Link></li>
            <li><Link href="/academy/blog/gpt-vs-claude-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">GPT vs Claude 2026年版比較｜どちらを使うべきか</Link></li>
            <li><Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">AI無料プラン比較2026｜ChatGPT・Claude・Geminiの無料版ガイド</Link></li>
            <li><Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">ChatGPTプロンプトの書き方入門</Link></li>
            <li><Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">生成AIとは？初心者向けわかりやすい解説</Link></li>
            <li><Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">「AIが怖い・難しい」を乗り越える安心スタートガイド</Link></li>
            <li><Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">AIリブートアカデミー TOP</Link></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
