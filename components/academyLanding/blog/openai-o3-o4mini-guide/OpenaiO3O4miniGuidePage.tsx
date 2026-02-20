"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type OpenaiO3O4miniGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["OpenAI o3 使い方", "o4-mini 比較", "OpenAI 推論モデル", "o3 API"] as const;

const tocItems = [
  { id: "answer-box", label: "結論（Answer Box）" },
  { id: "model-positioning", label: "o3とo4-miniとは" },
  { id: "difference-gpt4o", label: "通常のChatGPT（GPT-4o）との違い" },
  { id: "o3-use-cases", label: "o3の得意タスク" },
  { id: "o4mini-position", label: "o4-miniのポジション" },
  { id: "pricing", label: "料金プラン・API費用" },
  { id: "selection-chart", label: "実務での使い分けチャート" },
  { id: "limitations", label: "制限・注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary-cta", label: "まとめ＋LINE CTA" },
] as const;

const answerBoxPoints = [
  "o3は、複雑な条件整理や数学・コード推論のように「思考の深さ」で品質が決まる場面に向いた推論モデルです。",
  "o4-miniは、推論モデルの中で速度とコスト効率を優先したポジションで、処理件数の多い実務に合わせやすい設計です。",
  "通常モデル（GPT-4o系）よりレイテンシは増えやすい一方、難問タスクでの一貫性を取りやすいのが推論モデルの価値です。",
  "2026年2月時点では、o3/o4-mini単体比較ではなく、GPT-5系・Deep Researchを含む役割分担で選定するのが実務的です。",
] as const;

const positioningRows = [
  {
    model: "o3",
    role: "高難度推論を担当する主力モデル",
    strengths: "数学、コード、複数制約の推論、画像を含む分析で安定しやすい",
    practicalUse: "重要な意思決定、仕様レビュー、再現性が必要な推論タスク",
  },
  {
    model: "o4-mini",
    role: "高速・低コスト寄りの推論モデル",
    strengths: "短い往復での推論、件数の多い処理、コスト管理のしやすさ",
    practicalUse: "一次トリアージ、分類、要約、下書き生成の大量処理",
  },
] as const;

const gpt4oDiffRows = [
  {
    axis: "主な設計思想",
    reasoning: "途中の思考工程を重視し、難問に対する一貫性を高める",
    gpt4o: "日常的な応答速度と汎用性を重視",
  },
  {
    axis: "向いているタスク",
    reasoning: "複数条件の比較、反証検討、数式やコードを含む複雑判断",
    gpt4o: "チャット、要約、軽い下書き、即時回答が求められる業務",
  },
  {
    axis: "レイテンシ傾向",
    reasoning: "深く考える分、長くなりやすい",
    gpt4o: "短い往復で返答しやすい",
  },
  {
    axis: "コスト管理",
    reasoning: "推論工程ぶん出力コストが増えるケースがある",
    gpt4o: "短文応答中心の運用では予測しやすい",
  },
] as const;

const o3TaskCards = [
  {
    title: "数学・定量ロジックの検証",
    body: "前提条件が多い試算、式変形、ケース分けを伴う問題で、途中条件の整合チェックまで含めて運用しやすい領域です。",
    example: "例: 価格改定シミュレーション、投資判断の条件分岐、KPIの感度分析",
  },
  {
    title: "コード設計・レビュー",
    body: "動くコードの生成より、仕様の抜け漏れ検知、境界条件の整理、テスト観点の抽出で価値が出やすくなります。",
    example: "例: API仕様レビュー、エラー分岐設計、既存コードの改善方針整理",
  },
  {
    title: "複雑な意思決定支援",
    body: "制約条件と優先順位が衝突するタスクで、採用理由と棄却理由をセットで説明させる用途に向いています。",
    example: "例: 部門横断プロジェクトの優先順位決定、要件トレードオフ整理",
  },
  {
    title: "反証ベースの検討",
    body: "最初の結論をそのまま採用せず、反対仮説を投げて矛盾点を抽出する運用で品質を上げやすいモデルです。",
    example: "例: 提案書の穴チェック、リスク洗い出し、意思決定前の反対意見生成",
  },
] as const;

const o4MiniRows = [
  {
    task: "一次分類・トリアージ",
    fit: "問い合わせ、障害報告、チケットを優先度別に振り分ける",
    reason: "短い推論を多数回す業務で、速度と費用のバランスが取りやすい",
  },
  {
    task: "大量要約・下書き",
    fit: "会議メモ、ログ、日報の要約と定型フォーマット化",
    reason: "一定品質を維持しながら処理件数を増やしやすい",
  },
  {
    task: "軽量なコード補助",
    fit: "定型関数の生成、簡単な修正案、コメント整形",
    reason: "高難度推論を必要としない作業ではコスト最適化しやすい",
  },
  {
    task: "前処理ワークフロー",
    fit: "本番モデル投入前の入力整形・要件抽出・タグ付け",
    reason: "後段をo3やGPT-5系に渡す前段として効率が高い",
  },
] as const;

const pricingRows = [
  {
    item: "価格の見方",
    guidance: "公開情報では、o4-miniがo3より低単価寄り。詳細はモデルページとPricingページで確認する",
  },
  {
    item: "重要な課金ポイント",
    guidance: "推論モデルではreasoning tokensが出力課金に含まれるため、出力長と再実行回数が総コストを左右する",
  },
  {
    item: "実務での比較指標",
    guidance: "1リクエスト単価ではなく、成果物1件あたりの実効コスト（再試行込み）で比較する",
  },
  {
    item: "ChatGPTとAPIの差",
    guidance: "ChatGPTプラン費用とAPI従量課金は別管理。導入予算は分けて設計する",
  },
] as const;

const selectionRows = [
  {
    situation: "数式・仕様・条件が多い判断を1本でまとめたい",
    primary: "o3",
    reason: "深い推論を前提に、根拠付きで論点整理しやすい",
    fallback: "o4-miniで前処理してからo3で最終判断",
  },
  {
    situation: "毎日大量に回る要約・分類を安定運用したい",
    primary: "o4-mini",
    reason: "推論品質と処理件数のバランスを取りやすい",
    fallback: "難案件のみo3へ昇格",
  },
  {
    situation: "最新総合モデル中心で1本化したい",
    primary: "GPT-5系",
    reason: "総合性能や新機能を優先したい場合に選びやすい",
    fallback: "推論が重い箇所だけo3へ切り替え",
  },
  {
    situation: "外部情報を横断調査してレポート化したい",
    primary: "Deep Research",
    reason: "推論よりも調査フローの自動化が主目的になるため",
    fallback: "調査後の意思決定整理をo3で実施",
  },
] as const;

const limitationPoints = [
  "ChatGPTのモデル構成は更新が速く、2026-02-13にはo4-mini退役案内が出ています。記事・社内資料には確認日を固定してください。",
  "推論モデルは精度が高くても誤りがゼロにはなりません。固有名詞、数値、日付、引用元URLは必ず人手で検証する運用が必要です。",
  "1回あたりの応答品質だけでモデルを固定すると、運用コストが先に破綻しやすくなります。再実行率を含めて比較してください。",
  "高リスク領域（法務、医療、金融、人事評価）では、モデル選定より承認フローと責任境界の設計を優先してください。",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "業務課題に対してどのモデルを当てるべきかを判断し、実務成果につなげる力を育てます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡にして自分の強みと価値観を言語化し、次に伸ばす領域を明確にします。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との対話と実践共有で、学習を継続できる状態をつくります。",
  },
] as const;

export default function OpenaiO3O4miniGuidePage({ faqItems }: OpenaiO3O4miniGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "OpenAI o3/o4-mini使い方ガイド" },
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
                title="OpenAI o3/o4-mini使い方ガイド｜推論モデルの実務選定と料金判断【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            OpenAI o3/o4-mini使い方ガイド｜推論モデルの実務選定と料金判断【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAIのo3/o4-miniは、通常のチャット高速応答より「複雑な推論」を重視して設計されたモデルです。問題は、性能比較だけ見ても実務の選定には使えないことです。業務で必要なのは、
            どのタスクにどのモデルを当てるかという運用設計です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、o3とo4-miniの位置づけ、GPT-4oやGPT-5系との違い、API費用の見方、Deep Researchとの分担まで、2026-02-20時点の公開情報で整理します。
          </p>
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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            {answerBoxPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-600">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="model-positioning"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">o3とo4-miniとは。OpenAI推論モデルは「考える工程」に予算を使う選択肢</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            OpenAI公式ドキュメントでは、o3は高難度推論向け、o4-miniは高速かつ低コスト寄りの推論モデルとして整理されています。どちらも「推論工程」を持つため、通常モデルより応答時間が延びる代わりに、
            難しい問題での一貫性を取りやすいのが特徴です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">モデル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">位置づけ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な強み</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務での使いどころ</th>
                </tr>
              </thead>
              <tbody>
                {positioningRows.map((row) => (
                  <tr key={row.model} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.model}</th>
                    <td className="px-4 py-4">{row.role}</td>
                    <td className="px-4 py-4">{row.strengths}</td>
                    <td className="py-4 pl-4">{row.practicalUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            API実装の基礎を先に揃えたい場合は、
            <Link href="/academy/blog/openai-responses-api-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              OpenAI Responses APIガイド
            </Link>
            から先に確認すると、モデル選定と実装設計を同時に進めやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="difference-gpt4o"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">通常のChatGPT（GPT-4o）との違い。速度より思考深度を優先するかで選ぶ</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            通常モデル（代表例としてGPT-4o）は、短い往復での会話と日常タスクに向いた設計です。一方、推論モデルは「考える時間」を使って難問を処理します。どちらが優れているかではなく、
            作業の難易度に合わせて使い分けるのが前提です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">o3/o4-mini（推論モデル）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">通常モデル（GPT-4o）</th>
                </tr>
              </thead>
              <tbody>
                {gpt4oDiffRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.reasoning}</td>
                    <td className="py-4 pl-4">{row.gpt4o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            補足として、2026-02-13時点のOpenAI Help更新では、ChatGPTモデルセレクター上のo4-mini退役が案内されています。モデル名だけで判断せず、現在の提供状況を
            <Link href="/academy/blog/chatgpt-gpt5-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GPT-5系の使い分け記事
            </Link>
            とあわせて確認してください。
          </p>
        </motion.section>

        <motion.section
          id="o3-use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">o3の得意なタスク。数学・コード・複雑推論で「判断理由」を残しやすい</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            o3の価値は、単純な正答率だけではなく、複数条件を扱う判断プロセスを崩れにくくできる点です。特に、条件が増えると人間側のレビュー負荷が高まる業務で、o3を使うメリットが出ます。
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {o3TaskCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
                <p className="mt-3 text-xs leading-6 text-gray-600">{card.example}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            重要なポイントは、o3を「最初から全文生成に使う」より、「難しい判断箇所だけに当てる」設計です。前段の整形や軽い要約はo4-miniへ分けると、全体の速度と費用が安定します。
          </p>
        </motion.section>

        <motion.section
          id="o4mini-position"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">o4-miniのポジション。高速・低コスト推論を回す「運用モデル」として使う</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            o4-miniは、推論品質を維持しながら処理件数を増やしたい場面で有効です。o3ほどの深い推論を毎回使う必要がない業務では、o4-miniを標準化する方が運用コストを読みやすくできます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">具体タスク</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">選定理由</th>
                </tr>
              </thead>
              <tbody>
                {o4MiniRows.map((row) => (
                  <tr key={row.task} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.task}</th>
                    <td className="px-4 py-4">{row.fit}</td>
                    <td className="py-4 pl-4">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            なお、ChatGPT上のモデル構成は更新されるため、UI上で同名モデルが見当たらない場合はAPI側のモデル提供状況と分けて確認してください。運用ルールを決める際は
            <Link href="/academy/blog/openai-operator-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Operator運用ガイド
            </Link>
            のように承認フローを先に設計しておくと、実行ミスを減らせます。
          </p>
        </motion.section>

        <motion.section
          id="pricing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">料金プラン・API費用。固定単価の暗記より「実効コスト」を管理する</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            価格は更新されるため、最初に覚えるべきは「公開情報でどこを確認するか」です。公開情報ではo4-miniがo3より低単価寄りですが、最終的な費用はプロンプト長、出力長、再実行回数で変わります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">確認項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務での見方</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="py-4 pl-4">{row.guidance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-6 text-gray-500">
            情報確認日: 2026-02-20。価格は変動するため、実運用前にOpenAI公式Pricingページとモデルページを再確認してください。
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
          <MidArticleCtaBox
            slug="openai-o3-o4mini-guide"
          />
        </motion.section>

        <motion.section
          id="selection-chart"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">実務での使い分けチャート。o3/o4-miniをGPT-5系・Deep Researchと分担する</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実務では1モデル固定より、タスク分割が効きます。推論そのものが主目的ならo3/o4-mini、総合性能や最新機能が主目的ならGPT-5系、外部情報の収集と引用整理が主目的ならDeep Researchを選びます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">状況</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">第一候補</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">選ぶ理由</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">第二候補</th>
                </tr>
              </thead>
              <tbody>
                {selectionRows.map((row) => (
                  <tr key={row.situation} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.situation}</th>
                    <td className="px-4 py-4">{row.primary}</td>
                    <td className="px-4 py-4">{row.reason}</td>
                    <td className="py-4 pl-4">{row.fallback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            調査用途の実務フローは
            <Link href="/academy/blog/openai-deep-research-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              OpenAI Deep Researchガイド
            </Link>
            、最新モデル全体の運用は
            <Link href="/academy/blog/chatgpt-gpt5-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GPT-5系使い分け記事
            </Link>
            を併読すると、チーム設計が速くなります。
          </p>
        </motion.section>

        <motion.section
          id="limitations"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">制限・注意点。モデル比較より先に運用ルールを固定する</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            推論モデルは強力ですが、運用設計がない状態では効果が出にくくなります。以下を最初に固定すると、モデル変更が起きても現場が崩れにくくなります。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {limitationPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
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

        <motion.section
          id="summary-cta"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-orange-900">まとめ。推論モデル選定は「難易度・件数・責任境界」の3点で決める</h2>
          <p className="mt-4 text-sm leading-7 text-orange-900/90">
            o3/o4-miniは、どちらが上かを決める比較より、業務ごとに使い分ける設計が成果を左右します。高難度判断はo3、件数が多い推論はo4-mini、調査はDeep Research、
            総合性能重視はGPT-5系という分担を最初に決めると、導入後の迷いが減ります。
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
            <LineCtaBox
              className="rounded-lg border border-green-200 bg-green-50 p-6"
              href="https://bexn9pao.autosns.app/line?src=blog&slug=openai-o3-o4mini-guide"
            />
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
