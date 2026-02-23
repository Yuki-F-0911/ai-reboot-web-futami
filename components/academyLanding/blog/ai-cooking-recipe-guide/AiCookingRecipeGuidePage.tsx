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

const keywordTags = ["AI 料理", "ChatGPT レシピ", "Gemini 献立", "AI 冷蔵庫", "AI 栄養管理"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "intro", label: "AI×料理でできること：7つのカテゴリ" },
  { id: "fridge-recipe", label: "冷蔵庫食材でレシピ提案：実践プロンプト集" },
  { id: "weekly-menu", label: "1週間の献立を丸ごとAIに作ってもらう" },
  { id: "allergy-calorie", label: "アレルギー対応・カロリー計算の活用例" },
  { id: "failure-tips", label: "料理の失敗リカバリー＆レベルアップ術" },
  { id: "world-cooking", label: "世界の料理を家庭で再現する" },
  { id: "shopping-prep", label: "買い物リスト自動生成と下準備のコツ" },
  { id: "start-steps", label: "今日から始める3ステップ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ" },
] as const;

const summaryItems = [
  "ChatGPT・GeminiなどのAIは「冷蔵庫の食材を伝えるだけでレシピを提案」してくれる。食材の無駄が減り、毎日の献立の悩みが消える",
  "1週間分の献立、栄養バランスの分析、カロリー計算、アレルギー対応レシピも自動生成できる",
  "料理の失敗（しょっぱすぎた・水っぽくなった）を診断して、その場で対処法を教えてくれる「キッチンの相談相手」になる",
  "海外料理の本格レシピを日本の家庭調味料で代用して作る方法も教えてもらえる",
  "プロンプトは難しく考えなくていい。「〇〇があります。夕飯のレシピを教えて」の一言で十分",
] as const;

const sevenCategories = [
  { icon: "🥕", title: "食材消費レシピ提案", desc: "冷蔵庫・冷凍庫の余り食材からレシピを提案。食材ロスが劇的に減る" },
  { icon: "📅", title: "週間献立の自動作成", desc: "栄養バランスを考慮した1週間分の献立をまとめて生成" },
  { icon: "🌾", title: "アレルギー対応レシピ", desc: "小麦・卵・乳製品・ナッツなど除去した安全なレシピを提案" },
  { icon: "🔥", title: "カロリー計算・栄養管理", desc: "献立のカロリーを計算し、栄養バランスのアドバイスも" },
  { icon: "🆘", title: "料理の失敗リカバリー", desc: "「しょっぱすぎた」「固まらない」などの失敗を即座に診断・対処" },
  { icon: "🌏", title: "世界の料理を家庭で再現", desc: "本格料理の材料を身近な代用品に置き換えて作る方法を提案" },
  { icon: "🛒", title: "買い物リスト自動生成", desc: "献立をもとに必要な食材リストを作成。購入忘れゼロに" },
] as const;

const fridgeRecipeExamples = [
  {
    title: "基本：冷蔵庫の食材からレシピ提案",
    prompt:
      "「冷蔵庫に鶏もも肉・じゃがいも・玉ねぎ・にんじん・牛乳があります。30分以内で作れる夕食を3つ提案してください。一人暮らしで食べきれる量で」",
    result:
      "肉じゃが・クリームシチュー・鶏肉のマスタード炒め（じゃがいも添え）が提案されます。材料の使い切り方・調理時間の目安・簡単にできるコツも一緒に説明してくれます。",
    tip: "「〇分以内」「〇人分」「調理器具（電子レンジのみ・フライパンのみ等）」を加えると、より実用的な提案に",
  },
  {
    title: "応用：「もう少し野菜を食べたい」制約付きで聞く",
    prompt:
      "「冷蔵庫に豚こま切れ肉・キャベツ・もやし・卵があります。野菜を多めにとりたいです。10分でできる夕食を提案してください」",
    result:
      "豚バラキャベツ炒め（中華風）・もやし卵スープ添え・豚肉とキャベツのお好み焼き風——野菜ボリュームたっぷりのレシピが提案され、栄養バランスのポイントまで添えてくれます。",
    tip: "「ヘルシーに」「野菜多め」「糖質控えめ」など健康志向の制約を加えると的確な提案に",
  },
  {
    title: "「余った食材の使い切り」特化で聞く",
    prompt:
      "「冷蔵庫で使い切りたい食材：なす×2本・豚ひき肉100g・味噌・ねぎ。この食材を全部使うレシピを1つ教えてください。ご飯のおかずになるもので」",
    result:
      "麻婆なすのレシピが提案されます。指定した全食材の使い方・分量・手順がわかりやすく説明され、余ったときの冷凍保存方法もアドバイスしてくれます。",
    tip: "「全部使う」と指定すると食材ロスゼロを実現できる。冷凍食材の消費にも使える",
  },
  {
    title: "冷凍食材からレシピを提案",
    prompt:
      "「冷凍庫に冷凍エビ・冷凍ブロッコリー・冷凍うどんがあります。解凍から30分で作れる昼食を2つ提案してください」",
    result:
      "エビとブロッコリーのペペロンチーノ風うどん・エビチリうどん炒めのレシピが提案されます。冷凍食材の正しい解凍方法もセットで教えてくれます。",
    tip: "冷凍食材は「解凍方法」も聞くとより実用的。「半解凍でそのまま炒める」などのコツも教えてくれる",
  },
] as const;

const weeklyMenuExample = {
  prompt:
    "「1週間（月〜日）の夕食献立を作ってください。条件：夫婦2人暮らし・野菜中心・1食あたりの材料費500円以内・週2日は魚を取り入れたい。土日は少し手間をかけても構いません」",
  sampleMenu: [
    { day: "月曜日", menu: "鶏むね肉のソテー・小松菜の和え物・みそ汁" },
    { day: "火曜日", menu: "鮭の塩焼き・ほうれん草のおひたし・豆腐の味噌汁" },
    { day: "水曜日", menu: "豚肉と白菜の鍋風・ご飯" },
    { day: "木曜日", menu: "アジの煮付け・大根おろし・わかめスープ" },
    { day: "金曜日", menu: "カレーライス（野菜多め）・福神漬け" },
    { day: "土曜日", menu: "手作り餃子・中華スープ・もやし炒め" },
    { day: "日曜日", menu: "豚の角煮・ひじきの煮物・お吸い物" },
  ],
  benefit:
    "このように条件を伝えれば、1週間分の献立を一括生成してくれます。さらに「この献立をもとに買い物リストを作って」と続ければ、週1回のまとめ買いリストも自動作成。献立と買い物のダブル解決ができます。",
} as const;

const allergyCalorieExamples = [
  {
    title: "アレルギー対応レシピ",
    prompt:
      "「小麦アレルギーがあります（グルテンフリー）。今日の夕食に作れる主菜と副菜を各1品ずつ提案してください。和食系で」",
    result:
      "グルテンフリーの主菜（豆腐とひき肉の炒め物・醤油は米醤油または生醤油を指定）と副菜（わかめのナムル）が提案されます。代用できる調味料の注意点（普通の醤油には小麦が含まれる等）も詳しく説明してくれます。",
  },
  {
    title: "カロリー計算付きレシピ",
    prompt:
      "「ダイエット中です。1食500kcal以内で作れる夕食を提案してください。鶏むね肉・ブロッコリー・卵があります」",
    result:
      "鶏むね肉のスパイシーソテー＋ブロッコリーのガーリック炒め＋スクランブルエッグのメニューが提案され、各料理のカロリーと合計カロリーも計算して表示してくれます。満腹感を高めるボリュームアップのコツも。",
  },
  {
    title: "食事記録の栄養バランスチェック",
    prompt:
      "「今日の食事：朝はトースト2枚とコーヒー、昼はコンビニの幕の内弁当、夜はから揚げ定食。栄養バランスはどうですか？明日に向けてのアドバイスをください」",
    result:
      "「炭水化物多め・タンパク質はまずまず・ビタミンCと食物繊維が不足気味」という診断とともに、「明日の朝はヨーグルトとバナナ、昼に野菜スープを追加するといい」などの具体的な改善提案が返ってきます。",
  },
] as const;

const failureRecoveryExamples = [
  {
    icon: "🧂",
    failure: "しょっぱすぎた料理",
    prompt: "「カレーを作ったら塩辛すぎました。今からできる対処法を教えてください」",
    solution:
      "じゃがいもや玉ねぎを追加して塩分を吸わせる方法、牛乳・ヨーグルトを加えてまろやかにする方法、水を足して再煮込みする方法を優先度順に提案してくれます。それでも塩辛い場合はソースや薬味として使う活用法も。",
  },
  {
    icon: "💧",
    failure: "煮物・汁物が水っぽくなった",
    prompt: "「肉じゃがを作ったら水っぽくなってしまいました。原因と対処法を教えてください」",
    solution:
      "野菜からの水分が原因の可能性を診断し、「蓋をとって中火で煮詰める」「片栗粉でとろみをつける」の対処法を、手順付きで説明してくれます。次回作るときの「水分が出にくくなるコツ」も教えてもらえます。",
  },
  {
    icon: "🔴",
    failure: "お肉が固くなってしまった",
    prompt: "「鶏むね肉を炒めたら固くパサパサになってしまいました。柔らかくする方法はありますか？」",
    solution:
      "「今ある固い肉を柔らかくする方法（スープに入れてほぐす・細かく刻んでチャーハンにする）」と「次回パサつきを防ぐコツ（下処理・加熱温度・片栗粉の活用）」を分けて説明してくれます。",
  },
  {
    icon: "🍰",
    failure: "スイーツが固まらない・失敗した",
    prompt: "「プリンを作ったら固まらず液体のままです。どうすればいいですか？」",
    solution:
      "卵の量・加熱温度・時間の問題点を診断し、「固まらなかったプリン液をそのまま使ったアレンジレシピ（クリームブリュレ風・ミルクセーキなど）」を提案。失敗を別のスイーツに変身させるアイデアが得られます。",
  },
] as const;

const worldCookingExamples = [
  {
    country: "タイ料理",
    dish: "グリーンカレー",
    prompt:
      "「タイのグリーンカレーを家庭にある調味料で代用して作る方法を教えてください。ナンプラーはあります」",
    substitution: "グリーンカレーペーストの代替：市販のレッドカレーペースト＋バジル＋青唐辛子。ナンプラー代替：醤油＋少量の魚粉。ガランガルやカフィアライムリーフは省略可能な工程も教えてくれます",
  },
  {
    country: "イタリア料理",
    dish: "カルボナーラ",
    prompt:
      "「本格的なカルボナーラを作りたい。よくある失敗（卵が固まってしまう）を防ぐコツを教えてください」",
    substitution: "卵のタイミング（火を止めてから和える）・チーズの種類・パスタのゆで汁の重要性を詳しく説明。「ペコリーノ・ロマーノがなければパルミジャーノで代用可能」などの代替情報も提供",
  },
  {
    country: "インド料理",
    dish: "バターチキンカレー",
    prompt:
      "「スパイスを1から揃えずに、バターチキンカレーに近い味を家庭で再現する方法を教えてください。カレー粉はあります」",
    substitution: "市販カレー粉をベースに、バター・生クリーム・トマト缶・ガラムマサラ（または五香粉で代用）を組み合わせる方法を提案。本格派との違いも正直に教えてくれます",
  },
] as const;

const startSteps = [
  {
    step: "Step 1：今日の夕食の「困った」を一言で書く",
    description:
      "「冷蔵庫に○○と○○があるけど何を作ればいいか迷っている」「なんか今日はもう疲れて考えたくない」——どんな状況でもOKです。今の状況を一言AIに伝えてみましょう。完璧な質問文を作る必要はありません。",
    tip: "「鶏肉と玉ねぎとトマトがあります。今夜のおかずは？」それだけで十分です。",
  },
  {
    step: "Step 2：提案されたレシピに条件を足してみる",
    description:
      "AIが提案してくれたレシピが「難しそう」「この食材がない」「もっと簡単にしたい」と感じたら、追加で条件を伝えましょう。「もっと簡単に」「フライパン1つで」「15分以内で」など、一言足すだけで提案が変わります。",
    tip: "「この中で一番簡単なものをもっと詳しく教えて」という一言で深掘りできます。",
  },
  {
    step: "Step 3：1週間後、献立を丸ごとお任せしてみる",
    description:
      "ChatGPTとのやりとりに慣れてきたら、「今週の夕食献立を7日分作って。条件は〇〇人分・野菜多め・材料費1日500円以内」と頼んでみましょう。1週間分まとめて作れるので、毎日悩む必要がなくなります。",
    tip: "献立が決まったら「この献立の買い物リストも作って」と続ければ一石二鳥。",
  },
] as const;

export default function AiCookingRecipeGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI×料理レシピ活用術入門" },
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
                title="AIで料理が楽しくなる！ChatGPT・Geminiを使ったレシピ&料理活用術入門"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIで料理が楽しくなる！ChatGPT・Geminiを使ったレシピ&料理活用術入門
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「今日の夕食、何を作ればいいか全然浮かばない……」「冷蔵庫の残り物をなんとか使い切りたいけど、アイデアが出ない」——
            そんなキッチンでの悩みを、AIがまるごと解決してくれます。
            ChatGPTやGeminiは、今あなたの冷蔵庫にある食材を伝えるだけで、
            献立・レシピ・栄養バランス・買い物リストまでぜんぶ提案してくれる
            <strong>「24時間対応の料理アドバイザー」</strong>なんです。
            この記事では、料理初心者から忙しい方・ダイエット中の方まで、
            すぐに使える具体的なプロンプト例をたっぷり紹介します。
            読み終わったら、今夜の献立が決まっているはずです。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AIを使い始めたばかりの方は
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/ai-hobby-lifestyle-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            趣味×AI活用術
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-web-search-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT検索機能ガイド
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

        {/* 7つのカテゴリ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="intro">AI×料理でできること：7つのカテゴリ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「料理にAIを使う」と言っても、できることは思っているよりずっと幅広いです。
            まずは全体像を把握しましょう。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sevenCategories.map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-xs leading-6 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            以下のセクションでは、この7つのカテゴリをそれぞれ実際のプロンプト例とともに詳しく解説します。
            気になるカテゴリから読んでください。
          </p>
        </motion.section>

        {/* 冷蔵庫食材でレシピ提案 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="fridge-recipe">冷蔵庫の食材からレシピ提案：実践プロンプト集</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIと料理の組み合わせで最も人気の活用法が「冷蔵庫の食材を伝えてレシピを提案してもらう」こと。
            「今ある食材でなんとかしたい」という日常の悩みが一発で解決します。
          </p>

          <div className="mt-6 space-y-6">
            {fridgeRecipeExamples.map((example, i) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 text-will-primary">例{i + 1}.</span>
                  {example.title}
                </h3>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <div className="mt-3">
                  <p className="text-xs font-semibold text-gray-500">AIの回答イメージ</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.result}</p>
                </div>
                <div className="mt-3 rounded-md bg-amber-50 px-3 py-2">
                  <p className="text-xs font-semibold text-amber-800">💡 コツ：{example.tip}</p>
                </div>
              </section>
            ))}
          </div>

          <Callout type="tip" title="「今すぐ使えるシンプルなプロンプト」">
            難しく考えなくてOK。まずは「冷蔵庫に〇〇と〇〇と〇〇があります。今夜のおかずを1つ提案してください」
            この一文で十分です。シンプルなほど使いやすく、習慣になりやすいです。
          </Callout>
        </motion.section>

        {/* 1週間の献立 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="weekly-menu">1週間の献立を丸ごとAIに作ってもらう</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            毎日「今日の夕食は何にしよう」と悩む時間を週1回にまとめてしまう——
            それが「週間献立の一括生成」です。条件さえ伝えれば、7日分の献立を一気に作ってくれます。
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 p-6">
            <div className="rounded-md bg-gray-50 p-4">
              <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
              <p className="mt-1 text-sm leading-7 text-gray-700">{weeklyMenuExample.prompt}</p>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-gray-700">AIが作成する献立の例：</p>
              <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
                <RichTable>
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 font-semibold text-gray-900 text-left">曜日</th>
                      <th className="px-4 py-3 font-semibold text-gray-900 text-left">夕食メニュー</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {weeklyMenuExample.sampleMenu.map((item) => (
                      <tr key={item.day}>
                        <td className="px-4 py-3 font-medium text-gray-700">{item.day}</td>
                        <td className="px-4 py-3 text-gray-600">{item.menu}</td>
                      </tr>
                    ))}
                  </tbody>
                </RichTable>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-gray-700">{weeklyMenuExample.benefit}</p>
          </div>

          <Callout type="info" title="献立作成のプロのコツ">
            週間献立を依頼するときに「同じ食材を複数のメニューで使い回したい」と加えると、
            食材を効率よく消費できる献立を作ってくれます。たとえばキャベツを月曜のサラダ・水曜の炒め物・金曜のスープに分散して使う——
            そんな賢い使い回しプランを自動で考えてくれます。
          </Callout>
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
          <MidArticleCtaBox slug="ai-cooking-recipe-guide" />
        </motion.section>

        {/* アレルギー対応・カロリー計算 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="allergy-calorie">アレルギー対応・カロリー計算の活用例</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            食物アレルギーがある方や、カロリーを管理したい方にとって、AIは特に強力な味方です。
            「〇〇を使わないレシピ」「カロリー〇〇kcal以内で」という条件に柔軟に対応してくれます。
          </p>

          <div className="mt-6 space-y-5">
            {allergyCalorieExamples.map((example) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">{example.title}</h3>
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

          <Callout type="warning" title="アレルギー情報の取り扱いについて">
            AIが提案するアレルギー対応レシピは参考情報です。重篤なアレルギーをお持ちの方は、
            使用する食材・調味料のラベルを必ず自分で確認してください。
            AIの回答のみに頼ることは危険な場合があります。
          </Callout>
        </motion.section>

        {/* 料理の失敗リカバリー */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="failure-tips">料理の失敗リカバリー＆レベルアップ術</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「あ、失敗した……」と思ったとき、AIはすぐ相談できる頼もしい存在です。
            失敗の原因を診断し、「今からできる対処法」と「次回への改善策」を分けて教えてくれます。
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {failureRecoveryExamples.map((example) => (
              <section key={example.failure} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{example.icon}</span>
                  <h3 className="text-base font-bold text-gray-900">{example.failure}</h3>
                </div>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">こんなときに聞く</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-xs leading-6 text-gray-600">{example.solution}</p>
              </section>
            ))}
          </div>

          <ArticleH3>レベルアップにも使える：「なぜこうなるのか」を聞く</ArticleH3>
          <p className="mt-4 text-base leading-8 text-gray-700">
            失敗リカバリーだけでなく、「なぜこの料理はこうするのか」という理由を聞くと料理の腕が上がります。
            「味噌汁を沸騰させてはいけないのはなぜ？」「炒め物で先に塩を振る理由は？」のように、
            料理の「なぜ」をAIに質問するのは、料理本を読むよりも深くわかりやすく教えてもらえるのでおすすめです。
          </p>
        </motion.section>

        {/* 世界の料理 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="world-cooking">世界の料理を家庭で再現する</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「外食で食べた〇〇を家で作ってみたい」「この料理を日本の調味料で代用できないか」——
            AIは世界各国の料理を、日本の家庭にある身近な食材・調味料に置き換えて作る方法を教えてくれます。
          </p>

          <div className="mt-6 space-y-5">
            {worldCookingExamples.map((example) => (
              <section key={example.dish} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-will-lighter px-3 py-1 text-xs font-semibold text-will-primary">{example.country}</span>
                  <h3 className="text-base font-bold text-gray-900">{example.dish}</h3>
                </div>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AIの提案：</span>
                  {example.substitution}
                </p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 買い物リスト */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="shopping-prep">買い物リスト自動生成と下準備のコツ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            献立が決まったら、次は買い物です。AIに頼めば、献立をもとに必要な食材リストを自動作成してくれます。
            「すでに家にある食材」を伝えれば、本当に買う必要があるものだけをリストアップしてくれます。
          </p>

          <div className="mt-5 rounded-xl border border-gray-200 p-5">
            <p className="text-sm font-semibold text-gray-700">プロンプト例</p>
            <div className="mt-2 rounded-md bg-gray-50 p-3 text-sm leading-7 text-gray-700">
              「先ほど作った週間献立をもとに、買い物リストを作ってください。家にある食材：醤油・みりん・砂糖・塩・サラダ油・卵。これらは除いてリストに入れないでください。スーパーの売り場（肉・魚・野菜・調味料）別に整理して」
            </div>
            <p className="mt-4 text-sm leading-7 text-gray-700">
              <span className="font-semibold text-gray-900">AIの回答：</span>
              売り場ごとに整理された買い物リストが生成されます。スーパーで迷わず動けるため、買い物時間が短縮でき、購入忘れもなくなります。「週の予算〇〇円で収めるにはどうする？」と追加で聞けば、節約プランも提案してくれます。
            </p>
          </div>

          <ArticleH3>下準備・作り置きにも活用</ArticleH3>
          <p className="mt-4 text-base leading-8 text-gray-700">
            週末にまとめて作り置きする派の方には、「この食材を使った作り置きレシピを5品教えて。冷蔵3日以内で食べ切れるもの」のように頼むのが効果的です。
            各料理の保存期間・解凍・再加熱の方法まで教えてくれます。忙しい平日の時短に大きく貢献します。
          </p>
        </motion.section>

        {/* 今日から始める3ステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="start-steps">今日から始めるAI×料理の3ステップ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「難しそう」「どこから始めればいいかわからない」——そんな方のために、今夜から試せる3ステップをご用意しました。
          </p>
          <div className="mt-6 space-y-5">
            {startSteps.map((item, i) => (
              <div key={item.step} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-5">
                <div className="flex items-start gap-4">
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
          <ArticleH2 id="conclusion">まとめ：AIはキッチンの心強い相棒になれる</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事でご紹介した、AI×料理の活用法を振り返りましょう。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              冷蔵庫の食材を伝えるだけでレシピ提案——食材ロスが減り、毎日の献立の悩みが消える
            </li>
            <li className="pl-1 marker:text-gray-500">
              1週間分の献立を一括生成——毎日「今日の夕食は？」と悩む時間がゼロになる
            </li>
            <li className="pl-1 marker:text-gray-500">
              アレルギー対応・カロリー計算も自動化——健康面の管理が格段に楽になる
            </li>
            <li className="pl-1 marker:text-gray-500">
              料理の失敗もAIに相談——「今からできる対処法」で諦めなくていい
            </li>
            <li className="pl-1 marker:text-gray-500">
              世界の料理を家庭の食材で再現——料理の世界が広がる
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを料理に使うのに、難しい知識は一切不要です。
            「今日の冷蔵庫の食材を伝えてレシピを聞く」——たったそれだけで始められます。
            今夜の夕食の悩みを、まずChatGPTやGeminiに相談してみてください。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AI×料理の実践レシピや献立のアイデアは、AIリブートのLINEでも定期配信しています。ぜひ登録してください。
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
            title="AI×料理のアイデアを毎週お届け"
            description="冷蔵庫の食材で作れるレシピアイデア・時短献立プロンプト・アレルギー対応レシピなど、AIを使った料理の実践テクニックをAIリブートのLINE公式アカウントで配信しています。登録は無料。今日から使えるプロンプトを受け取ってください。"
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
            料理以外の日常の趣味にもAIを活用してみましょう。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/ai-hobby-lifestyle-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              趣味×AI活用術（料理以外）を見る
            </Link>
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              プロンプトの書き方を学ぶ
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-hobby-lifestyle-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで趣味が10倍楽しくなる！料理・旅行・読書・音楽・映画の活用術2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-web-search-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTの検索機能が超便利！使い方・活用術を初心者向けに解説【2026年最新】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTカスタム指示完全ガイド｜設定するだけで毎回の回答が変わる
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
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
