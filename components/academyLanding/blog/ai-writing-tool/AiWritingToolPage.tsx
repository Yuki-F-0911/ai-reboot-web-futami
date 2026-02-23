"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiWritingToolPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 文章作成 ツール 比較", "AI ライティング 2026", "ChatGPT 文章", "Claude 文章生成", "コピーライティング AI"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "categories", label: "汎用チャット型 vs 専門ライティング型" },
  { id: "tools-comparison", label: "主要5ツール比較" },
  { id: "usecase", label: "用途別おすすめ" },
  { id: "avoid-ai-sounding", label: "AIっぽい文章を減らす方法" },
  { id: "japanese-content", label: "日本語作成の注意点" },
  { id: "detection", label: "AI文章検出の仕組みと限界" },
  { id: "faq", label: "よくある質問" },
  { id: "related-links", label: "関連記事" },
  { id: "next-step", label: "次の一歩を決めたい方へ" },
] as const;

const comparisonRows = [
  {
    tool: "ChatGPT",
    category: "汎用チャット型",
    price: "Plus $20/月、Pro $200/月",
    japanese: "日本語を含む多言語対応",
    strengths: "下書き作成、要約、リライト、見出し案の反復が速い",
    fit: "個人の執筆補助から法人のたたき台生成まで幅広く対応",
    caution: "指示が曖昧だと汎用的な文体に寄りやすい",
  },
  {
    tool: "Claude",
    category: "汎用チャット型",
    price: "Pro $20/月（年払い実質$17）、Max $100/$200",
    japanese: "多言語対応（日本語含む）",
    strengths: "長文整理、要件を踏まえた再構成、トーン調整がしやすい",
    fit: "長文記事、提案書、編集工程を重視するチーム",
    caution: "出力安定性はモデル更新で体感が変わることがある",
  },
  {
    tool: "Jasper",
    category: "専門ライティング型",
    price: "Creator $49/月、Pro $69/月（年払い割引あり）",
    japanese: "30+言語対応に日本語を明記",
    strengths: "Brand Voice、テンプレ、マーケ用途のワークフロー化に強い",
    fit: "複数担当でコピー運用を標準化したい法人チーム",
    caution: "日本専用プラン名は公式明示なし [要確認]",
  },
  {
    tool: "Copy.ai",
    category: "専門ライティング型",
    price: "Chat無料、Growth $49/seat/月（最小5席）",
    japanese: "言語指定プロンプトで日本語出力可能",
    strengths: "Workflow/Infobase/Brand Voiceで営業・マーケ文面の量産がしやすい",
    fit: "チーム運用でメール・提案文を継続生成する組織",
    caution: "料金はチーム前提。日本専用契約条件は要確認",
  },
  {
    tool: "Notion AI",
    category: "汎用チャット型（ドキュメント統合）",
    price: "Notion Plus/Businessなどの階層で提供",
    japanese: "Notion UIは日本語対応",
    strengths: "議事録、タスク、記事下書きを同じワークスペースで管理できる",
    fit: "情報管理とライティングを1つの運用に統合したいチーム",
    caution: "純粋なコピー最適化は専門ライティング型より弱い場合がある",
  },
] as const;

const usecaseRows = [
  {
    usecase: "ブログ記事",
    recommendation: "ChatGPTまたはClaudeで構成と初稿を作り、最終編集は人が担当",
    workflow: "検索意図整理 -> H2/H3設計 -> 本文下書き -> 根拠確認 -> 推敲",
    note: "長文は情報の重複と抽象語を削る編集工程が必須",
  },
  {
    usecase: "SNS投稿",
    recommendation: "ChatGPT/Claudeで複数案を短時間生成し、語尾と具体性を手動調整",
    workflow: "目的定義 -> 3案生成 -> 具体数字を追加 -> 1投稿1メッセージに圧縮",
    note: "CTAを詰め込みすぎると反応率が落ちやすい",
  },
  {
    usecase: "メールマーケティング",
    recommendation: "JasperやCopy.aiで件名・本文AB案を運用し、配信結果で改善",
    workflow: "セグメント設計 -> 件名AB -> 本文生成 -> 配信 -> 開封/クリック分析",
    note: "誇張表現や機械的敬語の監修が重要",
  },
  {
    usecase: "プレスリリース",
    recommendation: "ClaudeまたはNotion AIで骨子整理、事実と表記統一は必ず人が確定",
    workflow: "事実一覧 -> 発表骨子 -> 本文整形 -> 法務/広報レビュー -> 公開",
    note: "固有名詞・数値・日付はAI任せにしない",
  },
] as const;

const antiAiTips = [
  "結論先出しのあとに、固有名詞・数値・期間を入れる",
  "抽象語（効率化、最適化、価値）だけの段落をなくす",
  "1段落1メッセージに限定し、文長を混ぜてリズムを作る",
  "自社の失敗例・検証ログ・意思決定理由を1つ入れる",
  "公開前に音読し、話し言葉として不自然な箇所を削る",
] as const;

const japanesePitfalls = [
  {
    point: "敬語の粒度が揺れる",
    symptom: "です/ます調の中に急に断定口調が混ざる",
    fix: "冒頭でトーンを指定し、推敲で語尾だけを集中確認する",
  },
  {
    point: "主語省略で責任主体が曖昧",
    symptom: "『実施しました』が誰の行動か不明になる",
    fix: "法人文書では主語を明示。社内/顧客/運営の主体を固定する",
  },
  {
    point: "カタカナ語の連続で読了率が落ちる",
    symptom: "抽象語が続いて意味が取りにくい",
    fix: "専門語の直後に平易な言い換えを置く",
  },
  {
    point: "同義反復で冗長化",
    symptom: "同じ主張を別表現で繰り返す",
    fix: "段落ごとに『結論は1つ』をルール化する",
  },
  {
    point: "事実確認なしで公開",
    symptom: "価格・機能・制度の古い情報が残る",
    fix: "確認日を明記し、公開前に一次情報を再確認する",
  },
] as const;

const detectorRows = [
  {
    item: "判定ロジック",
    detail: "GPTZeroはperplexityとburstinessを主要指標として公開",
    implication: "文体特徴の推定であり、著者の断定証明ではない",
  },
  {
    item: "精度の限界",
    detail: "公式FAQでも100%精度ではないことを明記",
    implication: "単一スコアで合否判定しない運用が必要",
  },
  {
    item: "研究上の課題",
    detail: "学術研究で、改変や条件差で検出性能が大きく低下",
    implication: "検出回避より、事実整合性と編集責任を重視する",
  },
] as const;

export default function AiWritingToolPage({ faqItems }: AiWritingToolPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI文章作成ツール比較2026" },
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
                title="AI文章作成ツール比較2026｜ChatGPT・Claude・Jasper・Copy.ai・Notion AIの選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI文章作成ツール比較2026｜ChatGPT・Claude・Jasper・Copy.ai・Notion AIの選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            AI文章作成ツールの選定で失敗しやすいのは、機能一覧だけで比較してしまうことです。実務で差が出るのは、
            <strong className="font-semibold text-gray-900">どの用途で使うか</strong>と
            <strong className="font-semibold text-gray-900">公開前の編集責任をどう設計するか</strong>です。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、汎用チャット型と専門ライティング型の違いを整理し、ChatGPT・Claude・Jasper・Copy.ai・Notion AIを料金と日本語運用の観点で比較します。ブログ、SNS、メールマーケティング、プレスリリースの用途別に、導入判断の基準を明確にします。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-600">料金・仕様・言語対応の確認日: 2026-02-20</p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              選定は「ツール名」ではなく、用途（ブログ/SNS/メール/広報）と運用体制で決めると失敗しにくいです。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              汎用チャット型は柔軟性、専門ライティング型はテンプレとチーム運用の標準化に強みがあります。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              AIっぽい文章を減らす最短ルートは、固有情報の追加と推敲工程の固定です。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              GPTZero等の検出器は補助指標です。最終判断は一次情報確認と人の編集責任で担保します。
            </li>
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="categories"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            AI文章作成ツールは「汎用チャット型」と「専門ライティング型」で分ける
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            比較の起点を揃えるために、最初にカテゴリを分けます。汎用チャット型は用途の幅が広く、専門ライティング型はチームで再利用しやすい設計が強みです。
          </p>
          <div className="blog-table mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">カテゴリ</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">代表ツール</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">向く場面</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <td className="px-4 py-3 align-top font-medium text-gray-900">汎用チャット型</td>
                  <td className="px-4 py-3 align-top text-gray-700">ChatGPT / Claude / Notion AI</td>
                  <td className="px-4 py-3 align-top text-gray-700">構成案、下書き、要約、リライトを横断して扱える</td>
                  <td className="px-4 py-3 align-top text-gray-700">個人執筆、社内文書、企画段階の探索</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top font-medium text-gray-900">専門ライティング型</td>
                  <td className="px-4 py-3 align-top text-gray-700">Jasper / Copy.ai</td>
                  <td className="px-4 py-3 align-top text-gray-700">Brand Voice、テンプレ、ワークフローで量産しやすい</td>
                  <td className="px-4 py-3 align-top text-gray-700">メール配信、広告文、チームでの継続運用</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="tools-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">主要5ツール比較（2026年2月20日時点）</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            下表は、料金と日本語対応、用途適合を同時に見られるように整理しています。価格は公式表示の月額ベースです。
          </p>
          <div className="blog-table mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">分類</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">料金目安</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">日本語対応</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">向く用途</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row.tool}>
                    <td className="px-4 py-3 align-top font-semibold text-gray-900">{row.tool}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.category}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.price}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.japanese}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.fit}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              JasperとCopy.aiはマーケ運用機能が強い一方、公式に日本専用プラン名は明示されていません。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              Notionの価格は地域表示で通貨が変わります。請求前に管理画面の表示通貨を確認してください。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="usecase"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">用途別おすすめ（ブログ・SNS・メール・プレスリリース）</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            同じツールでも用途で最適解は変わります。実務では、生成と編集の役割分担を先に決めると品質が安定します。
          </p>
          <div className="blog-table mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">用途</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">おすすめ運用</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">進め方</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {usecaseRows.map((row) => (
                  <tr key={row.usecase}>
                    <td className="px-4 py-3 align-top font-semibold text-gray-900">{row.usecase}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.recommendation}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.workflow}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="avoid-ai-sounding"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AIが書いた文章らしくしないための実践手順</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            文章が機械的に見える原因は、モデル性能より指示と編集工程の欠落です。次の5手順を固定すると、読みやすさと説得力が上がります。
          </p>
          <ol className="blog-ol mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {antiAiTips.map((tip) => (
              <li key={tip} className="blog-li pl-1 marker:text-gray-500">
                {tip}
              </li>
            ))}
          </ol>
          <div className="blog-table mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">改善前</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">改善後</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <td className="px-4 py-3 align-top text-gray-700">「AIを使うと業務が効率化できます。」</td>
                  <td className="px-4 py-3 align-top text-gray-700">「週次レポート作成をAI化し、作業時間を90分から35分へ短縮しました。」</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top text-gray-700">「高品質なコンテンツを素早く作れます。」</td>
                  <td className="px-4 py-3 align-top text-gray-700">「配信前レビューを3観点（誤情報/敬語/CTA）で固定し、差し戻し率を半減しました。」</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="japanese-content"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">日本語コンテンツ作成で失敗しやすいポイント</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            日本語は主語省略と敬語の階層で意味が変わりやすく、英語中心で学習された文体をそのまま使うと違和感が出ます。公開前に次の観点を確認してください。
          </p>
          <div className="blog-table mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">よくある崩れ</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">症状</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">改善策</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {japanesePitfalls.map((row) => (
                  <tr key={row.point}>
                    <td className="px-4 py-3 align-top font-semibold text-gray-900">{row.point}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.symptom}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="detection"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AI文章検出ツール（GPTZero等）の仕組みと対策の現在地</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            検出ツールは統計的な特徴量を使って推定します。運用上は「補助判定」として扱い、公開品質は編集プロセスで担保するのが現実的です。
          </p>
          <div className="blog-table mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">観点</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">事実</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">実務での扱い</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {detectorRows.map((row) => (
                  <tr key={row.item}>
                    <td className="px-4 py-3 align-top font-semibold text-gray-900">{row.item}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.detail}</td>
                    <td className="px-4 py-3 align-top text-gray-700">{row.implication}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              判定回避を目的に不自然な言い換えを重ねると、読者価値が下がりCVも落ちます。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              検出スコアではなく、一次情報照合・編集履歴・責任者レビューを品質管理の中心に置いてください。
            </li>
          </ul>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="related-links"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/gpt-vs-claude-2026" className="blog-link text-will-primary underline underline-offset-4">
                ChatGPTとClaude比較 2026年版
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="blog-link text-will-primary underline underline-offset-4">
                ChatGPTプロンプト入門
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-content-sns-guide" className="blog-link text-will-primary underline underline-offset-4">
                AIでSNSコンテンツを作る実務ガイド
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-sales-prompt-templates" className="blog-link text-will-primary underline underline-offset-4">
                営業向けAIプロンプト20選
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="next-step"
          className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter/40 p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">次の一歩を決めたい方へ</h2>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            ツール比較の次に必要なのは、どの業務課題にAIを当てるかを判断する基準です。AIリブートアカデミーでは、生成AI活用力の習得に加えて、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりを一体で設計しています。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">生成AI活用力:</span> 実務で使えるAIスキルを体系的に整理する
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">自己理解・キャリアデザイン:</span> 強みと価値観を言語化し、次の選択を明確にする
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">仲間と共に学ぶ環境:</span> 対話と協働で学習の継続率を高める
            </li>
          </ul>
          <div className="mt-6">
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
