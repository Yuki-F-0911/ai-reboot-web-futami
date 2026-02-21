"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type GptVsClaude2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const infoCheckedDate = "2026-02-21";

const keywordTags = ["ChatGPT Claude 比較 2026", "GPT-4o vs Claude 4.6", "o3 / o4-mini 使い分け"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "spec-diff", label: "モデル仕様の違い" },
  { id: "reasoning-models", label: "o3・o4-miniの位置づけ" },
  { id: "usecase-diff", label: "用途別おすすめ（文章・コード・分析・翻訳・創作）" },
  { id: "pricing-diff", label: "料金・無料プラン比較" },
  { id: "decision-chart", label: "どっちを選ぶ？判断チャート" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const modelSpecRows = [
  {
    item: "比較対象",
    gpt4o: "GPT-4o（ChatGPT / API）",
    sonnet: "Claude Sonnet 4.6（Claude / API）",
    opus: "Claude Opus 4.6（Claude / API）",
  },
  {
    item: "公開時期",
    gpt4o: "2024-05-13公開（継続更新）",
    sonnet: "2026-02-20公開",
    opus: "2026-02-20公開",
  },
  {
    item: "コンテキストウィンドウ",
    gpt4o: "128K tokens",
    sonnet: "200K tokens（APIで1Mベータ対応）",
    opus: "200K tokens（APIで1Mベータ対応）",
  },
  {
    item: "最大出力",
    gpt4o: "16,384 tokens",
    sonnet: "公開上限は利用チャネル依存",
    opus: "最大32K output tokens",
  },
  {
    item: "API単価（代表値）",
    gpt4o: "input $2.50 / 1M, output $10 / 1M",
    sonnet: "input $3 / 1M, output $15 / 1M",
    opus: "input $5 / 1M, output $25 / 1M",
  },
] as const;

const benchmarkRows = [
  {
    metric: "ベンダー公式の位置づけ",
    gpt4o: "「非推論モデルで最も高性能」",
    sonnet: "「Opus級の品質を低コストで」",
    opus: "「エージェントコーディングで最高性能」",
    note: "公開主張は各社定義のため、同条件検証が必要",
  },
  {
    metric: "長文コンテキスト運用",
    gpt4o: "標準128Kで多用途に安定",
    sonnet: "1Mベータで長文処理コストを抑えやすい",
    opus: "1Mベータで複雑な推論タスク向き",
    note: "必要長が200K未満なら体感差が小さい場合もある",
  },
] as const;

const useCaseRows = [
  {
    useCase: "文章（下書き/構造化）",
    chatgpt: "見出し構造、箇条書き、JSON/表形式など形式指定の追従が安定しやすい。",
    claude: "Sonnet 4.6は長文推敲、Opus 4.6は論点の深掘りで強みが出やすい。",
    recommendation: "下書きはGPT-4o、最終推敲はSonnet/Opusで分業すると再現性が高い。",
  },
  {
    useCase: "コード",
    chatgpt: "実装速度と反復修正の回転が速く、日常開発の母数を稼ぎやすい。",
    claude: "Sonnet 4.6はコスト効率、Opus 4.6は高難度タスクでの精度に強み。",
    recommendation: "通常実装はGPT-4o、難所のみOpusへ切替える運用が現実的。",
  },
  {
    useCase: "分析（比較/意思決定）",
    chatgpt: "比較軸の展開や仮説分解を高速に回しやすい。",
    claude: "長文資料の一貫した要約や反対論点の洗い出しで安定しやすい。",
    recommendation: "比較表はGPT-4o、最終メモはClaudeで整えると意思決定しやすい。",
  },
  {
    useCase: "翻訳",
    chatgpt: "用語統一・出力形式固定がしやすい。",
    claude: "自然な文体の調整がしやすく、説明文章の読み味を整えやすい。",
    recommendation: "契約文や仕様書は両者で差分チェックして確定する。",
  },
  {
    useCase: "創作（企画/コピー）",
    chatgpt: "発散量を確保しやすく、案数を出しやすい。",
    claude: "Sonnet/Opusともにトーン統一に強く、長文の一体感を作りやすい。",
    recommendation: "発散はGPT-4o、トーン統一はClaudeで仕上げる。",
  },
] as const;

const japaneseDiffRows = [
  {
    axis: "文体の自然さ",
    chatgpt: "業務文体では明快に整理されやすい。",
    claude: "Sonnet/Opusともに接続の滑らかさを評価する声が多い。",
  },
  {
    axis: "用語の厳密性",
    chatgpt: "用語集を渡すと安定しやすく、構造化出力との相性が良い。",
    claude: "説明は丁寧だが、専門用語は再検証前提で運用が必要。",
  },
  {
    axis: "長文での整合性",
    chatgpt: "章立て指定をすると整合性を維持しやすい。",
    claude: "1Mベータ運用を含め、長文の流れ維持で優位が出やすい。",
  },
] as const;

const personalPlanRows = [
  {
    planAxis: "無料プラン",
    chatgpt: "Freeあり（制限付き）",
    claude: "Freeあり（制限付き）",
  },
  {
    planAxis: "個人有料プラン",
    chatgpt: "Go $10 / Plus $20 / Pro $200",
    claude: "Pro $17（年払い時） / Max $100 or $200",
  },
  {
    planAxis: "使い分けの目安",
    chatgpt: "毎日利用やo3/o4-mini併用まで行うなら有料を検討",
    claude: "長文利用やOpus運用を行うならPro/Maxを検討",
  },
] as const;

const decisionChartSteps = [
  {
    question: "Q1. コード生成と構造化アウトプットを毎日使うか？",
    yes: "GPT-4o優先で開始",
    no: "Q2へ進む",
  },
  {
    question: "Q2. 長文執筆や推敲の比率が高いか？",
    yes: "Claude Sonnet 4.6優先で開始",
    no: "Q3へ進む",
  },
  {
    question: "Q3. 高難度推論タスクの比率が高いか？",
    yes: "難問だけo3またはClaude Opus 4.6へ切替える",
    no: "標準はGPT-4o/Claude Sonnet 4.6の併用で最適化",
  },
] as const;

const oneWeekTestSteps = [
  "同じタスクを5本用意（文章2・コード1・分析1・翻訳1）",
  "同一プロンプトで両方に投入し、出力を保存",
  "評価軸を固定（正確性、修正追従、読みやすさ、速度）",
  "7日後に「時間削減率」と「再編集量」で決定",
] as const;

type LineCtaBoxProps = {
  className: string;
};

function LineCtaBox({ className }: LineCtaBoxProps) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">
        AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）
      </p>
      <p className="mt-2 text-sm leading-7 text-gray-700">モデル更新や料金変更を、実務判断で使える要点だけに絞って配信しています。</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </section>
  );
}

export default function GptVsClaude2026Page({ faqItems }: GptVsClaude2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTとClaude比較 2026年版" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="ChatGPTとClaude比較 2026年版｜GPT-4o vs Claude Sonnet 4.6 / Opus 4.6の選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTとClaude比較 2026年版｜GPT-4o vs Claude Sonnet 4.6 / Opus 4.6の選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月21日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「結局どっちを使うべきか」が決まらない理由は、モデル名の比較だけで判断しようとするからです。2026年時点では、
            ChatGPT側はGPT-4oを中心にo3/o4-miniの推論モデルが並び、Claude側はSonnet 4.6とOpus 4.6を使い分ける構成になっています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、旧記事
            <Link href="/academy/blog/gpt-vs-claude-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GPT-4とClaude比較
            </Link>
            から比較軸を更新し、GPT-4o vs Claude 4.6系を用途別・料金別で判断できる形に再設計します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">日常業務の主軸はGPT-4o、長文・難問はClaude Sonnet 4.6 / Opus 4.6の分業が実務で安定します。</li>
            <li className="pl-1 marker:text-gray-500">API単価の代表値はGPT-4oが低く、頻繁実行の工程ほど差が出やすいです。</li>
            <li className="pl-1 marker:text-gray-500">1Mコンテキストが必要なタスクはClaude 4.6系が優位になりやすいです。</li>
            <li className="pl-1 marker:text-gray-500">
              高難度推論はo3またはOpus 4.6、反復タスクはo4-miniやGPT-4oへ寄せると費用対効果が出しやすくなります。
            </li>
          </ul>
          <p className="mt-4 text-xs leading-6 text-gray-500">情報確認日: {infoCheckedDate}</p>
        </motion.section>

        {/* Answer Box */}
        <section className="mb-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">この記事の結論</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2026年2月時点での実務最適は、標準運用をGPT-4oで回し、長文や高難度タスクをClaude Sonnet 4.6 / Opus 4.6へ切り替える分業です。さらに推論専用のo3と低コスト推論のo4-miniを工程単位で使い分けると、品質とコストの両立がしやすくなります。
          </p>
        </section>

        <WebtoonBannerSection />

        <motion.section
          id="spec-diff"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPT-4oとClaude Sonnet 4.6 / Opus 4.6の仕様差は、コンテキスト窓と単価で先に見分けると判断しやすい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            乗り換えを検討するときは、体感より先に仕様を確認したほうが失敗が減ります。特にコンテキスト窓、最大出力、API単価は実運用コストに直結します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">GPT-4o</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Claude Sonnet 4.6</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude Opus 4.6</th>
                </tr>
              </thead>
              <tbody>
                {modelSpecRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-4">{row.gpt4o}</td>
                    <td className="px-4 py-4">{row.sonnet}</td>
                    <td className="py-4 pl-4">{row.opus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ChatGPT側のモデル運用の前提は、
            <Link href="/academy/blog/chatgpt-gpt5-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT主要モデルの違い整理記事
            </Link>
            で併せて確認しておくと、古いモデル情報との混在を防げます。
          </p>
          <p className="mt-3 text-xs leading-6 text-gray-500">注記: 価格は各社の公開API価格（2026-02-21確認）に基づきます。</p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold text-gray-900">ベンダー公表の性能情報は、定義差を前提に読む</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">指標</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">GPT-4o</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Claude Sonnet 4.6</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Claude Opus 4.6</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">読み方</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkRows.map((row) => (
                  <tr key={row.metric} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.metric}</th>
                    <td className="px-4 py-4">{row.gpt4o}</td>
                    <td className="px-4 py-4">{row.sonnet}</td>
                    <td className="px-4 py-4">{row.opus}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            公開値は比較の起点として有効ですが、評価条件が異なる以上、「自分の業務で再現できるか」を別に検証する必要があります。
          </p>
        </motion.section>

        <motion.section
          id="reasoning-models"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">o3・o4-miniは「主役」ではなく工程特化で使う</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            OpenAIの推論モデルは、GPT-4oを置き換えるより工程ごとに挿すほうが効果が出ます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">モデル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">API単価（1M tokens）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用メモ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">o3</th>
                  <td className="px-4 py-4">高難度推論、複雑な仕様検討、失敗コストが高い判断</td>
                  <td className="px-4 py-4">input $2.00 / output $8.00</td>
                  <td className="py-4 pl-4">毎回使うより、難問タスクに限定したほうが費用対効果が高い。</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">o4-mini</th>
                  <td className="px-4 py-4">反復推論、テスト生成、下書き改善など母数重視の工程</td>
                  <td className="px-4 py-4">input $1.10 / output $4.40</td>
                  <td className="py-4 pl-4">高速で回数を稼ぐ工程に向く。最終品質はGPT-4o/Claudeで確認する。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-gray-500">出典: OpenAI API Pricing（確認日: 2026-02-21）</p>
        </motion.section>

        <motion.section
          id="usecase-diff"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            用途別おすすめは、文章・コード・分析・翻訳・創作で役割分担を決めると最適化しやすい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「どっちが上か」より、「どの工程を任せるか」を決めると迷いが減ります。特に既に両方使ったことがある人は、乗り換えより分業のほうが効果が出やすいです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT（GPT-4o）</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Claude Sonnet 4.6 / Opus 4.6</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務での使い分け</th>
                </tr>
              </thead>
              <tbody>
                {useCaseRows.map((row) => (
                  <tr key={row.useCase} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.useCase}</th>
                    <td className="px-4 py-4">{row.chatgpt}</td>
                    <td className="px-4 py-4">{row.claude}</td>
                    <td className="py-4 pl-4">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">日本語性能の実際の差は「自然さ」と「厳密性」を分けて見る</h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            日本語での同条件・最新公開ベンチは限定的です。公開情報と実利用者の声を統合すると、文体自然さと厳密性で得意が分かれる傾向があります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">観点</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT（GPT-4o）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude Sonnet 4.6 / Opus 4.6</th>
                </tr>
              </thead>
              <tbody>
                {japaneseDiffRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.chatgpt}</td>
                    <td className="py-4 pl-4">{row.claude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-gray-500">
            [要確認: 同条件の最新公開日本語ベンチマークが更新された場合は本表を差し替え]
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <motion.section
          id="pricing-diff"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            料金比較は、無料枠の使い勝手と有料移行タイミングを分けて検討すると失敗しにくい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            プラン比較で重要なのは金額だけではありません。毎日の利用回数、長文処理、モデル切り替えの必要性まで含めて判断する必要があります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude</th>
                </tr>
              </thead>
              <tbody>
                {personalPlanRows.map((row) => (
                  <tr key={row.planAxis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.planAxis}</th>
                    <td className="px-4 py-4">{row.chatgpt}</td>
                    <td className="py-4 pl-4">{row.claude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ChatGPTのプラン差を深掘りしたい場合は、
            <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプラン比較記事
            </Link>
            も併読すると、無料継続か有料移行かを決めやすくなります。
          </p>
          <p className="mt-3 text-xs leading-6 text-gray-500">価格情報確認日: {infoCheckedDate}</p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </motion.section>

        <motion.section
          id="decision-chart"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            どっちを選ぶべきかは、判断チャートで「乗り換え」より「役割分担」を検証すると決めやすい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            多くのケースでは、最初から完全移行するより、用途別の役割分担を先に試すほうが精度と納得感が高くなります。
          </p>
          <div className="mt-7 space-y-4">
            {decisionChartSteps.map((step) => (
              <section key={step.question} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">Yes: {step.yes}</p>
                <p className="text-sm leading-7 text-gray-700">No: {step.no}</p>
              </section>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">失敗しない1週間比較テスト手順</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {oneWeekTestSteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Claude側の運用の基本を再確認したい場合は、
            <Link href="/academy/blog/claude-beginner-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude入門ガイド
            </Link>
            も合わせて参照すると比較の観点が揃います。
          </p>

          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AIリブートアカデミーで見直せること</p>
            <p className="mt-3 text-sm leading-7 text-blue-800">
              AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりを一体で設計しています。ツール名に引っ張られず、業務課題に対する判断軸を育てたい方に向いた学習設計です。
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox
            slug="gpt-vs-claude-2026"
          />
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
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
          <div className="mt-6">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/gpt-vs-claude-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPT-4とClaude徹底比較｜旧バージョン比較記事
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-gpt5-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT主要モデルの違いを整理｜モデル選びと使い分け
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-beginner-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude入門ガイド｜使い方・料金・始め方
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
