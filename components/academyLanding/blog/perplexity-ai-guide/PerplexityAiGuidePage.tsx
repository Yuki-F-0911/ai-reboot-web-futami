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

type PerplexityAiGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Perplexity AI 使い方",
  "Perplexity AI 日本語",
  "Perplexity ChatGPT 違い",
  "検索AI 比較",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "google-vs-perplexity", label: "Google検索との違いとPerplexityの基本" },
  { id: "free-vs-paid", label: "無料プランと有料プランの違い" },
  { id: "perplexity-vs-chatgpt", label: "PerplexityとChatGPTの違い" },
  { id: "prompt-examples", label: "活用シーン別プロンプト例" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";

const summaryPoints = [
  "Perplexityは「検索して終わり」ではなく、「回答と根拠の確認を同時に進める」ための検索AIです。",
  "Google検索はリンク探索に強く、Perplexityは要点整理と引用確認を短時間で進める用途に向きます。",
  "無料プランでも調査の下書きには十分使えますが、日常業務で回すなら有料プランの検索枠と高度機能の価値が出ます。",
  "ChatGPTは発想や文章生成、Perplexityは調査と比較の初動に強く、併用すると精度と速度の両方を確保しやすくなります。",
  "使い始めは「調査」「比較」「要約」の3用途に絞ってプロンプトを定型化すると定着しやすくなります。",
] as const;

const searchDifferenceRows = [
  {
    axis: "主な目的",
    google: "関連ページを幅広く探す",
    perplexity: "質問に対する要約回答を得る",
    practical: "探索量を重視するならGoogle、結論の叩き台が欲しいならPerplexity",
  },
  {
    axis: "情報の見え方",
    google: "リンク一覧から自分で読む",
    perplexity: "回答本文と引用元を同時に提示",
    practical: "根拠確認の導線を短くしたいときにPerplexityが有効",
  },
  {
    axis: "比較タスク",
    google: "複数ページを行き来して比較",
    perplexity: "比較観点を指定してまとめさせやすい",
    practical: "比較表の初稿を作ってから一次情報を確認する流れが作りやすい",
  },
  {
    axis: "曖昧な問い",
    google: "検索クエリを変えつつ探す",
    perplexity: "対話で条件を追加しながら再検索",
    practical: "論点を絞り込みたい場面ではPerplexityが速い",
  },
  {
    axis: "最終判断",
    google: "原典確認は利用者任せ",
    perplexity: "引用があっても原典確認は必要",
    practical: "どちらも最終判断は人間が一次情報を読む前提",
  },
] as const;

const googleSearchPainPoints = [
  {
    title: "検索結果を読む時間が長くなる",
    body: "上位10件を開いても、欲しい結論が断片化されていると読み直しが発生します。特に比較検討では「同じ論点が別ページに分散する」ため、探索時間が伸びやすくなります。",
  },
  {
    title: "出典の信頼性を自分で評価する負荷が高い",
    body: "検索順位だけで信頼性は判断できません。公式情報、一次情報、二次解説を見分ける必要があり、初心者ほどこの見極めで時間を消耗します。",
  },
  {
    title: "調べるたびに比較観点がぶれる",
    body: "検索クエリを変えるたびに、比較軸そのものが変わってしまうことがあります。結果として、意思決定に必要な観点が最後まで揃わないケースが起きます。",
  },
] as const;

const reliabilityChecklist = [
  "引用元が公式情報か、一次情報に近いかを確認する",
  "回答文だけを使わず、引用先の該当箇所まで読む",
  "数値や日付を扱う場合は、最新更新日を確認する",
  "複数ソースで一致している論点と、食い違う論点を分ける",
  "意思決定に使う前に、前提条件（地域・時期・契約形態）を再確認する",
] as const;

const freePaidRows = [
  {
    item: "基本検索",
    free: "利用可能（回数や速度に制限あり）",
    paid: "利用枠が広く、日常運用しやすい",
  },
  {
    item: "高性能モデルの選択",
    free: "一部のみ、または制限付き",
    paid: "選択肢が広がり、長文・比較タスクの安定性が上がる",
  },
  {
    item: "高度な調査機能",
    free: "試用レベル",
    paid: "深掘り調査や複雑な質問で使いやすい",
  },
  {
    item: "ファイル・資料の活用",
    free: "軽量な用途が中心",
    paid: "資料横断の要約・比較がしやすい",
  },
  {
    item: "継続運用のしやすさ",
    free: "学習・お試し向け",
    paid: "業務ルーティンに組み込みやすい",
  },
] as const;

const paidValuePoints = [
  "1日あたりの調査件数が多い人ほど、有料プランの検索枠と処理安定性の価値が出やすいです。",
  "根拠付きで比較を回す業務（市場調査、競合比較、製品選定）では、無料プランより手戻りが減りやすくなります。",
  "一方で、週に数回の軽い情報収集なら無料プランでも十分なケースが多く、先に利用頻度を見積もるのが合理的です。",
] as const;

const paidDecisionChecklist = [
  {
    point: "1日あたりの利用回数が10回を超えるか",
    reason: "利用回数が多いほど、無料枠の制限がボトルネックになります。頻繁に上限に当たるなら有料化の効果が出やすくなります。",
  },
  {
    point: "調査結果をそのまま業務判断に使うか",
    reason: "市場調査や製品比較など、根拠確認の再現性が必要な業務では、有料機能の安定性が効きます。",
  },
  {
    point: "チームで同じ調査フォーマットを回したいか",
    reason: "個人利用では無料でも十分ですが、チーム運用では出力品質の揺れを減らす価値が大きくなります。",
  },
  {
    point: "資料をまたぐ比較・要約を日常的に行うか",
    reason: "資料横断処理の頻度が高い場合、無料運用では工数が増えやすく、有料機能が時間短縮に直結します。",
  },
  {
    point: "月額コストを回収できるタスクがあるか",
    reason: "削減できる作業時間を先に見積もると、感覚ではなく業務効果で判断できます。",
  },
] as const;

const chatgptComparisonRows = [
  {
    axis: "得意領域",
    perplexity: "調査、出典確認、論点整理",
    chatgpt: "発想、文章生成、下書き作成",
    recommendation: "調査はPerplexity、文章化はChatGPTの分業が安定",
  },
  {
    axis: "回答の作り方",
    perplexity: "検索結果をもとに回答を構成",
    chatgpt: "対話文脈から回答を生成",
    recommendation: "事実確認が必要な問いはPerplexity先行が安全",
  },
  {
    axis: "引用元の扱い",
    perplexity: "引用の確認導線が明確",
    chatgpt: "別途検証運用が必要",
    recommendation: "対外資料の下調べはPerplexityから着手",
  },
  {
    axis: "アウトプット制作",
    perplexity: "要点整理までは得意",
    chatgpt: "文体調整・構成改善まで得意",
    recommendation: "調査結果をChatGPTで成果物化すると効率が高い",
  },
] as const;

const useCaseFlows = [
  {
    scene: "社会人: 市場調査レポートを作る",
    flow: "Perplexityで論点と出典を集約し、ChatGPTで社内共有用の文書に整形する。最後に一次情報の数字と日付を確認する。",
  },
  {
    scene: "学生: レポートの下調べをする",
    flow: "Perplexityで参考文献候補を整理し、ChatGPTで構成案を作る。引用ルールに合わせて自分で本文を再構成する。",
  },
  {
    scene: "転職準備: 業界研究を進める",
    flow: "Perplexityで業界動向を調査し、ChatGPTで志望動機や面接回答の下書きを作る。事実部分は必ず原典で裏取りする。",
  },
  {
    scene: "チーム運用: 定例で比較検討する",
    flow: "Perplexityの比較出力を共通フォーマット化し、ChatGPTで会議資料に落とす。議事録化して次回比較に再利用する。",
  },
] as const;

const promptExamples = [
  {
    title: "調査: 新しい業界トピックを10分で把握する",
    prompt:
      "目的: 生成AIの検索活用トレンドを把握したい\n前提: 日本語で概要を理解したい\n指示: 主要論点を5つ、各論点に引用元を付けて要約してください。未確定情報は明示してください。\n出力形式: 箇条書き＋出典リンク",
    note: "最初の情報収集を短時間で終わらせる型です。引用元を確認してから次の深掘りに進みます。",
  },
  {
    title: "比較: ツール選定の比較表を作る",
    prompt:
      "目的: 検索AIツールを比較したい\n前提: 仕事で毎日使う想定\n指示: Perplexity、ChatGPT、Geminiを「情報探索」「要約品質」「日本語運用」「料金の考え方」で比較し、判断基準を示してください。根拠の引用も付けてください。\n出力形式: 比較表＋推奨シナリオ",
    note: "比較観点を先に指定すると、論点が散らばりにくくなります。",
  },
  {
    title: "要約: 長い記事を会議共有用に圧縮する",
    prompt:
      "目的: 長文記事をチーム共有したい\n前提: 会議時間は15分\n指示: 次の記事を「結論」「重要データ」「実務への示唆」「次に確認する論点」で要約してください。誤解しやすい点があれば注意書きを加えてください。\n出力形式: 4見出しの箇条書き",
    note: "要約観点を明示すると、読み手が使える情報に変換しやすくなります。",
  },
  {
    title: "調査+比較: 2案の意思決定メモを作る",
    prompt:
      "目的: A案/B案のどちらを採用するか判断したい\n前提: コストと導入スピードを重視\n指示: 2案を比較し、メリット・リスク・導入手順・向いている条件を整理してください。根拠の引用を付けて、最後に判断基準を3つ提示してください。\n出力形式: 比較表＋最終コメント",
    note: "会議前にこの形式で叩き台を作ると、議論の質が上がります。",
  },
  {
    title: "要約+実行: 調査結果を次アクションに変換する",
    prompt:
      "目的: 情報収集で終わらせず実行につなげたい\n前提: 1週間以内に着手可能な範囲で整理したい\n指示: 調査内容をもとに、今週やることを3つ、来週やることを3つ、保留事項を3つに分けて提案してください。各項目に実行条件を添えてください。\n出力形式: 週次アクションプラン",
    note: "調査の出口を決めるテンプレートとして使えます。",
  },
] as const;

const promptPitfalls = [
  {
    title: "失敗1: 目的が曖昧なまま質問する",
    fix: "「何を決めるための調査か」を先に明記します。意思決定の目的がない質問は、情報量は増えても判断材料になりにくくなります。",
  },
  {
    title: "失敗2: 出典確認を省略する",
    fix: "回答をそのまま貼り付けるのではなく、引用元の該当箇所を最低2件確認します。特に数値・制度・料金は更新が早いため必須です。",
  },
  {
    title: "失敗3: 1回で完璧な回答を求める",
    fix: "1回目は全体像、2回目で比較観点追加、3回目で結論という3段階に分けると精度が上がります。",
  },
] as const;

const miniCaseStudies = [
  {
    title: "ケース1: 営業企画で競合比較の初稿を半日短縮",
    detail:
      "従来はGoogle検索で10〜15記事を手作業で読み、比較軸を後から揃えていました。Perplexityで最初に比較軸を指定し、引用付きで初稿を出したうえで、重要項目だけ原典確認する運用に変えたことで、比較表の初稿作成時間を大きく削減できました。ポイントは「最終版ではなく初稿を早く作る」目的で使うことです。",
  },
  {
    title: "ケース2: 学生レポートの下調べで論点漏れを減らす",
    detail:
      "テーマが広いレポートでは、調査範囲が曖昧になりやすい課題があります。Perplexityで「背景・主要論点・反対意見・追加で調べる論点」を固定フォーマットで出すと、調査計画を先に作れるため、後半で論点不足に気づくリスクを下げられます。最終提出前に引用元を再確認することで、信頼性の担保もしやすくなります。",
  },
  {
    title: "ケース3: 個人の学習で情報収集から実行まで接続",
    detail:
      "情報収集だけで終わる人は、調査の出口が未定義なことが多いです。Perplexityで調べた結果を「今週やること3つ」に変換し、ChatGPTで実行手順に落とす流れを固定すると、学習の実行率が上がります。ツールの使い方を学ぶだけでなく、行動計画まで作ることで実務定着につながります。",
  },
] as const;

const practicalFlow = [
  "Google検索で公式情報や一次情報を確認する",
  "Perplexityで要点整理と比較の下書きを作る",
  "引用元を開いて事実確認し、誤読を修正する",
  "ChatGPTで提出用の文章・資料に整形する",
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";
  const titleClass = tone === "green" ? "text-base font-semibold text-green-800" : "text-base font-semibold text-orange-800";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={titleClass}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </motion.section>
  );
}

export default function PerplexityAiGuidePage({ faqItems }: PerplexityAiGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Perplexity AIの使い方ガイド" },
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
            Perplexity AIの使い方完全ガイド2026｜ChatGPTとの違いと検索AIの活用法
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-19">2026年2月19日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="Perplexity AIの使い方完全ガイド2026｜ChatGPTとの違いと検索AIの活用法"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Google検索で情報を探していると、ページを何十個も開いたのに結論がまとまらないことがあります。Perplexity
            AIは、検索結果を要約しつつ引用元まで同時に見せることで、この時間ロスを減らす設計の検索AIです。この記事では、Google検索との違いを起点に、無料と有料の使い分け、ChatGPTとの役割分担、仕事で使える具体的なプロンプトまで実務目線で整理します。
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
          id="google-vs-perplexity"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Google検索との違いとPerplexityの基本</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Perplexityの本質は、検索体験を「リンク収集」から「根拠付きの要点整理」に寄せている点です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Google検索は網羅的に情報を見つけるのに強く、Perplexityは「今知りたい問い」に対して回答の叩き台を作るのに向いています。どちらか一方が優れているというより、探索段階と整理段階で役割が異なります。生成AIの基礎から整理したい方は、
            <Link
              href="/academy/blog/what-is-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AIとは？初心者向けにわかりやすく解説
            </Link>
            も合わせて読むと、検索AIの位置づけを把握しやすくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            もう1つ重要なのは、Perplexityが「誤りをゼロにする」ツールではなく、「引用にすぐ辿れることでハルシネーションを検知しやすくする」ツールだという点です。根拠の確認導線が短いぶん、誤情報を早く見抜けることが実務上の価値になります。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Google検索</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Perplexity AI</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実務上の使い分け</th>
                </tr>
              </thead>
              <tbody>
                {searchDifferenceRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.google}</td>
                    <td className="px-4 py-4">{row.perplexity}</td>
                    <td className="px-4 py-4">{row.practical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">Google検索で詰まりやすいポイント</h3>
          <div className="mt-4 space-y-4">
            {googleSearchPainPoints.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">Perplexityを使い始める最短手順</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">質問を1文で具体化する（例: 比較軸や対象期間を入れる）。</li>
            <li className="pl-1 marker:text-gray-500">回答を読んだら、まず引用元を2〜3件開いて一次情報を確認する。</li>
            <li className="pl-1 marker:text-gray-500">不足論点を追加質問して、比較観点を狭める。</li>
            <li className="pl-1 marker:text-gray-500">最終的な結論は自分の業務条件に当てはめて判断する。</li>
          </ol>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">根拠確認で外さないチェックリスト</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {reliabilityChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="free-vs-paid"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">無料プランと有料プランの違い</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Perplexityは無料でも始められますが、利用頻度が上がるほど有料プランの価値が明確になります。
          </p>
          <p className="mt-2 text-xs text-gray-500">
            ※2026年2月時点。料金・機能・上限は更新されるため、最新は公式プランページを確認してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">無料プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">有料プラン</th>
                </tr>
              </thead>
              <tbody>
                {freePaidRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-4">{row.free}</td>
                    <td className="px-4 py-4">{row.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {paidValuePoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">有料化を判断する5つのチェック</h3>
          <div className="mt-4 space-y-4">
            {paidDecisionChecklist.map((item) => (
              <section key={item.point} className="rounded-lg border border-gray-200 p-5">
                <h4 className="text-base font-semibold text-gray-900">{item.point}</h4>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.reason}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            まずは無料で触り、1週間で「何回使ったか」「どの業務に効いたか」を記録してから有料化を判断すると失敗しにくくなります。
          </p>
        </motion.section>

        <motion.section
          id="perplexity-vs-chatgpt"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">PerplexityとChatGPTの違い</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            事実ベースの調査はPerplexity、説明文や提案文の仕上げはChatGPT、という分業が最も再現性の高い運用です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Perplexity</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実務での推奨運用</th>
                </tr>
              </thead>
              <tbody>
                {chatgptComparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.perplexity}</td>
                    <td className="px-4 py-4">{row.chatgpt}</td>
                    <td className="px-4 py-4">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">手戻りを減らす4ステップ</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {practicalFlow.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">業務・学習シーン別の併用フロー</h3>
          <div className="mt-4 space-y-4">
            {useCaseFlows.map((item) => (
              <section key={item.scene} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h4 className="text-base font-semibold text-gray-900">{item.scene}</h4>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.flow}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            ChatGPT側の指示テンプレートを整えたい場合は、
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレート集
            </Link>
            を使うと、調査結果をそのままアウトプットに接続しやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="prompt-examples"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">活用シーン別プロンプト例</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            使い方を定着させるには、用途ごとの型を決めることが重要です。ここでは「調査」「比較」「要約」を中心に5本のテンプレートを示します。
          </p>
          <div className="mt-6 space-y-6">
            {promptExamples.map((example) => (
              <section key={example.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{example.title}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-white p-4 text-xs leading-6 text-gray-700">
{example.prompt}
                </pre>
                <p className="mt-3 text-sm leading-7 text-gray-700">{example.note}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">プロンプト運用で起きやすい失敗と修正</h3>
          <div className="mt-4 space-y-4">
            {promptPitfalls.map((item) => (
              <section key={item.title} className="rounded-lg border border-amber-200 bg-amber-50 p-5">
                <h4 className="text-base font-semibold text-amber-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-amber-800">{item.fix}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">実務でのミニケース</h3>
          <div className="mt-4 space-y-4">
            {miniCaseStudies.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            学習を中長期で進めるときは、
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              社会人のための生成AI学習ロードマップ
            </Link>
            で順序を固定すると、ツール比較で迷いにくくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、自己理解・キャリアデザインの言語化、さらに仲間と共に学ぶ環境づくりまで一体で設計しています。ツール習得を単発で終わらせず、実務とキャリアに接続したい方は、学習設計そのものを見直すのが有効です。
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
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連記事</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/genspark-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Gensparkとは？AI検索の新世代ツールを徹底解説｜Perplexityとの違いと使い分け
              </Link>
            </li>
          </ul>
        </section>

        <LineCtaBox tone="green" />
      </article>
    </main>
  );
}
