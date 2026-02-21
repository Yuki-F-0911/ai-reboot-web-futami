"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type PerplexityPagesGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = [
  "Perplexity Pages 使い方",
  "Threads/Spaces 運用",
  "Share/Export 共有",
  "Pages SEO活用",
] as const;

const tocItems = [
  { id: "answer-box", label: "結論（Answer Box）" },
  { id: "definition", label: "定義：Pages/Threads/Spaces" },
  { id: "difference", label: "一般利用との違い" },
  { id: "build-flow", label: "公開資産化フロー" },
  { id: "publish", label: "公開・共有の実務設定" },
  { id: "seo", label: "SEOを意識した構成設計" },
  { id: "operations", label: "運用ルールと更新管理" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学習を継続する次の一歩" },
] as const;

const answerPoints = [
  "2026年2月時点はCreate pageが一時停止のため、Threadで調査→Spaceで整理→Share/Exportで配布が最短ルートです。",
  "公開前に決めるべき3点は、対象読者・更新頻度・責任者です。ここが曖昧だと運用が崩れます。",
  "事故防止のコアは、公開範囲・添付ファイル・更新日・責任者の4チェックです。",
  "SEO目的なら主戦場は自社ドメインです。Perplexity共有は検証ログや草稿用途に置くと安全です。",
] as const;

const officialDocs = {
  pages: "https://www.perplexity.ai/help-center/en/articles/10352968-perplexity-pages",
  thread: "https://www.perplexity.ai/help-center/en/articles/10354769-what-is-a-thread",
  spaces: "https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces",
  files: "https://www.perplexity.ai/help-center/en/articles/10354810-security-and-privacy-with-file-uploads",
  gettingStarted: "https://www.perplexity.ai/help-center/en/articles/10354975-getting-started-with-perplexity",
} as const;

const definitionCards = [
  {
    title: "Thread（スレッド）",
    body: "会話の履歴と出典が積み上がる単位。フォローアップで「結論→根拠→例外」を深掘りし、調査の連続性を作ります。",
    href: officialDocs.thread,
    linkLabel: "公式ヘルプ: What is a Thread?",
  },
  {
    title: "Space（スペース）",
    body: "Threadsや検索をプロジェクト単位で束ねる作業場。共同作業者を招待したり、運用の指示を固定して再現性を作れます。",
    href: officialDocs.spaces,
    linkLabel: "公式ヘルプ: What are Spaces?",
  },
  {
    title: "Pages（ページ）",
    body: "本来は調査結果を読み物として整形し公開しやすくする機能ですが、2026年2月時点はCreate pageが一時停止。まずはThreads/Spacesで運用し、Convert復活後にPage化するのが現実解です。",
    href: officialDocs.pages,
    linkLabel: "公式ヘルプ: Perplexity Pages",
  },
] as const;

const flowSteps = [
  {
    title: "Step 0. まず「Pagesは作れるか？」を確認する",
    body: "2026年2月時点はCreate pageが一時停止のため、Threads/Spacesで検証→Share/Exportで配布する前提で進めます。",
  },
  {
    title: "Step 1. 調査クエリを定義する",
    body: "読者が知りたい問いを1つに絞り、比較軸を3〜5個に固定します（例：料金/制限/共有/運用/リスク）。",
  },
  {
    title: "Step 2. Threadで調査→追質問で“根拠付きの骨”を作る",
    body: "Threadは履歴と出典が残るため、結論→根拠→例外の順で深掘りしやすいです。主張ごとに公式/規約/ヘルプなど一次情報を最低1つ添えます。",
  },
  {
    title: "Step 3. セクション構成を先に固定する",
    body: "おすすめ順は「結論→定義→使い方→注意点→FAQ」。先に型を固定すると、公開後の読みやすさと更新作業が安定します。",
  },
  {
    title: "Step 4. Spaceに入れて“運用単位”にする",
    body: "ThreadをSpaceに集約し、同テーマの調査を束ねます。共同作業ならSpaceに共同作業者を招待し、運用ルール（責任者・更新日・公開範囲）を固定します。",
  },
  {
    title: "Step 5. 公開・共有（Share）か配布（Export）を選ぶ",
    body: "Shareはリンク共有でスピード優先、Exportは社内配布や添付除外など保存性優先です。公開したThreadは添付が見える可能性があるため、機密が混ざる場合はExportを選びます。",
  },
] as const;

const recommendedPrompts = [
  "このテーマを公開記事にする前提で、見出し案→要点→FAQ案を先に出して。",
  "各主張に一次情報（公式/規約/ヘルプ）を最低1つ付けて。曖昧なら曖昧と明記して。",
] as const;

const publishRows = [
  {
    item: "公開範囲",
    point: "「公開リンク」か「組織内」かを明確化（Enterpriseでは管理側制御もあり得る）",
    mistake: "意図せず全体公開してしまう",
  },
  {
    item: "添付ファイル",
    point: "機密があるなら公開しない。共有するならExportを優先する",
    mistake: "公開スレッドに機密添付が混ざる",
  },
  {
    item: "更新日",
    point: "冒頭と見出し近くに併記する",
    mistake: "古い情報が新しい顔をする",
  },
  {
    item: "責任者",
    point: "更新担当を1人決め、変更履歴を残す",
    mistake: "誰も更新せず陳腐化する",
  },
] as const;

const seoRows = [
  {
    area: "タイトル",
    rule: "検索意図と対象読者を明示",
    example: "Perplexity Pages使い方｜公開・共有・SEO活用",
  },
  {
    area: "冒頭3行",
    rule: "結論を先出しし、読む価値を明示",
    example: "何がわかるか、誰向けか、どこまで扱うかを短く書く",
  },
  {
    area: "見出し構造",
    rule: "問い→答えの順で並べる",
    example: "何ができるか → どう作るか → どう運用するか",
  },
  {
    area: "FAQ",
    rule: "実務で迷う点を6問以上入れる",
    example: "公開範囲、更新頻度、SEO、共同編集など",
  },
] as const;

const operationChecklist = [
  "公開前レビュー担当を固定する",
  "月1回はリンク切れと古い数値を確認する",
  "更新履歴に変更理由を残す",
  "Thread/Spaceで検証→自社ブログへ転用で検索資産を積む",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "調査から公開までを短時間で回し、情報発信を業務成果へつなげる力を育てます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "得意分野をテーマ化し、発信実績をキャリア資産として積み上げます。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "公開物を相互レビューし、精度と再現性を継続的に高めます。",
  },
] as const;

function MidArticleCtaBox() {
  return (
    <motion.section
      className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-emerald-900">AIで仕事を変えたい方へ｜LINEで無料相談する</p>
      <p className="mt-2 text-sm leading-7 text-emerald-900/90">
        経産省リスキリング補助金対象の100日間プログラム「AIリブートアカデミー」について、LINEで気軽に相談できます。生成AIを仕事で活用する方法を一緒に考えます。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで無料相談する（登録無料）
      </a>
    </motion.section>
  );
}

function LineCtaBox() {
  return (
    <motion.section
      className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-green-800">AIで仕事を変えたい方へ｜LINEで無料相談する</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        経産省リスキリング補助金対象の100日間プログラム「AIリブートアカデミー」について、LINEで気軽に相談できます。補助金の使い方・カリキュラム・学習イメージを無料でお伝えします。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで無料相談する（登録無料）
      </a>
    </motion.section>
  );
}

export default function PerplexityPagesGuidePage({ faqItems }: PerplexityPagesGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Perplexity Pages使い方ガイド" },
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
                title="Perplexity Pages使い方ガイド｜公開・共有・SEO活用の実務手順【2026年2月最新版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Perplexity Pages使い方ガイド｜公開・共有・SEO活用の実務手順【2026年2月最新版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月21日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Perplexity Pagesは本来、調査結果を読み物として公開しやすい形に整える機能です。ただし2026年2月時点はCreate pageが一時停止のため、
            現状はThreads/Spacesで検証し、Share/Exportで配布する運用が確実です。確認日: 2026-02-21。
          </p>

          <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            <p className="font-semibold">重要（2026年2月の仕様）</p>
            <p className="mt-2">
              公式ヘルプではPages体験改善のため「Create page」が一時停止と案内されています。Convert to Pageは改善して復活予定のため、
              本記事では「Threads/Spaces → Share/Export →（Convert復活後にPage化）」の実務フローで解説します。
            </p>
            <a
              href={officialDocs.pages}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-orange-700 underline underline-offset-4 hover:text-orange-800"
            >
              公式ヘルプ: Perplexity Pages
            </a>
          </section>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">結論（Answer Box）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {answerPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="definition"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">定義：Pages/Threads/Spacesは何が違う？</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {definitionCards.map((card) => (
              <section key={card.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{card.body}</p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-semibold text-orange-600 underline underline-offset-4 hover:text-orange-700"
                >
                  {card.linkLabel}
                </a>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="difference"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Perplexity一般利用との違い。Threads/Spaces運用は「公開資産化」が目的</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            通常のPerplexity利用（単発検索）でも答えは出ますが、公開・共有・更新まで考えるなら、Threadで調査の根拠を積み上げ、
            Spaceで構造と運用ルールを固定するのが強いです。基本操作を確認したい場合は
            <Link href="/academy/blog/perplexity-ai-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Perplexity一般ガイド
            </Link>
            を先に確認してください。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            なおThreads/Spacesは基本的に非公開で、共有したいときにShareで公開・共有します。公開範囲と添付の扱いは必ず事前に確認してください。
            <a
              href={officialDocs.gettingStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              公式ヘルプ（Getting Started）
            </a>
          </p>
        </motion.section>

        <motion.section
          id="build-flow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">（現行版）公開資産化フロー。6ステップで“共有できる形”にする</h2>
          <div className="mt-6 space-y-4">
            {flowSteps.map((step) => (
              <section key={step.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">おすすめプロンプト（コピペ用）</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {recommendedPrompts.map((prompt) => (
                <li key={prompt} className="pl-1 marker:text-gray-400">
                  {prompt}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-semibold text-gray-900">Share/Exportの選び方（実務）</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              Shareはリンク共有でスピード最優先、Exportは社内配布や添付除外など保存性を優先します。公開したThreadは添付が見える可能性があるため、
              機密が混ざる場合は「公開しない/Exportで共有」を基本にしてください。
              <a
                href={officialDocs.files}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                公式ヘルプ（File uploads）
              </a>
            </p>
          </section>
        </motion.section>

        <motion.section
          id="publish"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">公開・共有の実務設定。事故を防ぐための4チェック</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">設定項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">推奨方針</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">よくある失敗</th>
                </tr>
              </thead>
              <tbody>
                {publishRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-3">{row.point}</td>
                    <td className="py-3 pl-4">{row.mistake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <MidArticleCtaBox />

        <motion.section
          id="seo"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">SEOを意識した構成設計。Perplexity共有は「検証→転用」が安全</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            SEO狙いの基本は、検索流入の主戦場を自社ドメインに置くことです。Perplexity側は仕様が変わりやすく、Pagesも改修中のため、
            共有ページは「検証ログ→配布→草稿」として使い、確度が上がったらブログへ転用する運用が堅いです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">要素</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実装ルール</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">記述例</th>
                </tr>
              </thead>
              <tbody>
                {seoRows.map((row) => (
                  <tr key={row.area} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.area}</th>
                    <td className="px-4 py-3">{row.rule}</td>
                    <td className="py-3 pl-4">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="operations"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">運用ルールと更新管理。公開後に価値を落とさない</h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {operationChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-orange-900">発信を成果につなげるには、公開後の運用設計まで学ぶ</h2>
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
