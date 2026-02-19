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

type AiDataAnalysisExcelPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI データ分析 Excel", "Claude in Excel", "AI Excel ツール比較", "ChatGPT データ分析"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "three-points", label: "AIが変える3つのポイント" },
  { id: "formula-generation", label: "関数生成のやり方" },
  { id: "practical-steps", label: "実践ステップ（整理→分析→可視化→レポート）" },
  { id: "use-cases", label: "シーン別ガイド" },
  { id: "ai-excel-tools", label: "AI×Excelツールの比較と使い分け" },
  { id: "prompt-examples", label: "すぐ使えるプロンプト例5選" },
  { id: "pitfalls", label: "注意点（セキュリティ/確認）" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "cta", label: "次のアクション" },
] as const;

const threePoints = [
  {
    title: "1. 関数生成（式の下書きが秒速になる）",
    detail:
      "列名・条件・戻り値を伝えるだけで、IF/SUMIFS/XLOOKUPなどの式案を生成できます。人は“意図どおりか”の検算に集中できます。",
  },
  {
    title: "2. データクレンジング（整理手順が言語化される）",
    detail:
      "欠損・重複・型の揺れ・表記ゆれの直し方を手順化できます。Power Queryや関数の候補を並べ、最短ルートを選べます。",
  },
  {
    title: "3. 可視化（グラフと切り口がすぐ出る）",
    detail:
      "目的（増減要因/比較/構成比）に合わせて、適切なグラフ種別とピボット設計を提案させられます。意思決定に必要な“見せ方”を速く作れます。",
  },
] as const;

const formulaPrompts = [
  {
    title: "VLOOKUP/XLOOKUP（マスタ参照）",
    prompt:
      "あなたはExcelの関数に詳しいアナリストです。\n次の条件を満たす式を提案してください。\n\n【目的】商品コードから商品名を参照したい\n【データ】\n- Sheet1: A列=商品コード, B列=売上\n- Master: A列=商品コード, B列=商品名\n【要件】\n- 見つからないときは空欄\n- できればXLOOKUPを優先\n\n【出力形式】\n1) 推奨式\n2) 参照範囲の注意点\n3) よくある失敗（型/空白）",
  },
  {
    title: "IF/IFS（条件分岐）",
    prompt:
      "以下の条件で、ExcelのIF/IFSの式を作ってください。\n\n【目的】売上をランク分けしたい\n【入力】B2に売上金額\n【ルール】\n- 100万円以上: A\n- 50万円以上: B\n- 10万円以上: C\n- それ以外: D\n\n【出力形式】\n式（日本語/英語関数どちらでもOK）と、判定順序の理由を1行で。",
  },
  {
    title: "ピボットテーブル（配置設計）",
    prompt:
      "あなたはExcel分析の専門家です。次の目的を達成するためのピボットテーブル設計を提案してください。\n\n【目的】月別×商品カテゴリの売上推移を見たい\n【列】日付, 商品カテゴリ, 売上\n【要件】\n- 月別に集計\n- カテゴリ別に比較\n- 伸びが大きいカテゴリが分かる\n\n【出力形式】\n- 行/列/値/フィルターの配置案\n- 推奨グラフ（種類）\n- 追加で入れると良い指標（例: 前月比）",
  },
] as const;

const practicalSteps = [
  {
    title: "1. データ整理（定義を揃える）",
    bullets: ["列名・単位・期間・粒度を明確にする", "欠損/重複/型の揺れをチェックする", "必要ならPower Queryで整形する"],
  },
  {
    title: "2. 分析（問いを1つに絞る）",
    bullets: ["まずは“増えた/減った”の事実を確定する", "比較軸（期間/セグメント）を固定する", "仮説→検証の順で深掘りする"],
  },
  {
    title: "3. 可視化（意思決定の形にする）",
    bullets: ["構成比・推移・比較のどれかに寄せる", "ピボット＋スライサーで切り替えを用意する", "1枚で伝えるなら要素を絞る"],
  },
  {
    title: "4. レポート（結論→根拠→示唆→次アクション）",
    bullets: ["結論は1行で先に書く", "根拠は主要数値を3つまでに絞る", "次アクションは期限/担当/観点を含める"],
  },
] as const;

const sceneGuides = [
  {
    title: "売上分析",
    items: ["月別/週別の推移と前年差", "カテゴリ別の伸長/落ち込み", "上位商品の寄与（Pareto）"],
  },
  {
    title: "顧客分析",
    items: ["新規/既存の構成比と推移", "LTVの分解（回数×単価）", "解約/離反の兆候（頻度低下）"],
  },
  {
    title: "在庫管理",
    items: ["回転率・欠品・滞留の検知", "発注点の目安づくり", "需要急増のシグナル（急伸SKU）"],
  },
  {
    title: "アンケート集計",
    items: ["自由記述の分類と要約", "設問別の傾向（満足/不満）", "セグメント別の差分（属性別）"],
  },
] as const;

const promptExamples = [
  {
    title: "1) 関数生成（条件と列名を渡す）",
    prompt:
      "次のExcel表で、C列に「購入回数の区分」を入れる式を作ってください。\n- A列: 顧客ID\n- B列: 購入回数\nルール: 10回以上=ヘビー / 3回以上=ミドル / それ以外=ライト\n要件: 空白は空白のまま\n出力: 式と、参照範囲の注意点",
  },
  {
    title: "2) データ整理（クレンジング手順を作る）",
    prompt:
      "以下のデータをExcelで分析できる状態にするためのクレンジング手順を提案してください。\n\n【よくある問題】\n- 日付が文字列になっている\n- 顧客名に全角/半角や表記ゆれがある\n- 金額列に「,」や「円」が混ざっている\n\n出力形式: 手順（優先順）/ 推奨関数 or Power Query / 検算ポイント",
  },
  {
    title: "3) グラフ提案（目的から逆算する）",
    prompt:
      "目的: 月別売上の増減要因を上司に説明したい。\n列: 月, 商品カテゴリ, 売上, 粗利\n制約: 1スライドで説明、グラフは2つまで。\n出力: 推奨グラフ2案（種類・軸・色分け）と、読み取りポイント。",
  },
  {
    title: "4) 異常値検出（原因の当たりをつける）",
    prompt:
      "異常: 今週のCVRが前週比-30%。\n関連変更: LP改修あり。\nExcel集計列: 日付, 流入チャネル, セッション, CV, CVR。\n出力: まず確認すべき切り口（3つ）/ 計測不具合の確認手順 / 追加で必要なデータ。",
  },
  {
    title: "5) レポート要約（結論ファーストで短く）",
    prompt:
      "次の集計結果を、上司向けに要約してください。\n制約: 結論1行 + 根拠（主要数値3つ）+ 示唆2点 + 次アクション2点。\nトーン: 簡潔で断定しすぎない。\nデータ:\n{ここに数値を貼る}",
  },
] as const;

export default function AiDataAnalysisExcelPage({ faqItems }: AiDataAnalysisExcelPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI×Excelデータ分析" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton title="AIでExcelデータ分析を効率化する方法" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIでExcelデータ分析を効率化する方法
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIは「式の下書き」「整理手順の提案」「見せ方の候補」「文章要約」を高速化し、人は検算と意思決定に集中できます。
            AIに下書きを任せ、あなたは検算と示唆づくりに集中すると、スピードと再現性が上がります。
            Excel分析は「関数」「整形」「グラフ」「レポート文章」のどこかで詰まると、検討の時間より作業の時間が増えがちです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            プロンプトの型を先に押さえたい場合は{" "}
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事用プロンプトテンプレート
            </Link>
            もあわせて確認すると、定着が早くなります。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              AIは「式の下書き」「整理手順の提案」「見せ方の候補」「文章要約」を高速化し、人は検算と意思決定に集中できます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              最初は“問いを1つ”に絞り、列名・期間・粒度など前提を渡すと精度が安定します。
            </li>
            <li className="pl-1 marker:text-gray-500">
              機密データは匿名化・集計値化が基本。AIの出力は必ず数値で検証してください。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="three-points" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIがExcel業務を変える3つのポイント
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AIは「式を作る」「整える」「説明文に落とす」を高速化します。人は検算と意思決定の質を上げることに集中できます。
          </p>
          <div className="mt-6 space-y-4">
            {threePoints.map((point) => (
              <section key={point.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{point.detail}</p>
              </section>
            ))}
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
          <h2 id="formula-generation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT/ClaudeでExcel関数を生成する方法（VLOOKUP・IF・ピボット等）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            関数生成は「列名」「条件」「戻り値」「例外」を具体化できれば再現性が出ます。最後は必ず検算して採用しましょう。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            「列名（どの列）」「条件（いつ）」「戻り値（何を返す）」「例外（見つからない/空白）」を具体的に渡すのがコツです。式は必ずサンプルデータで検算し、
            参照範囲のズレや型の違い（数値/文字列）で崩れないかを確認してください。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            なお、Claude in ExcelのようにExcelアドイン型のAIを使える場合は、この「プロンプトの型」をそのままシート上で実行し、対象セルに貼れる形で式や手順を
            生成できます（最終的な検算は必須です）。
          </p>
          <div className="mt-8 space-y-6">
            {formulaPrompts.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-xs font-semibold tracking-wide text-gray-500">コピペ用プロンプト</p>
                <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                  <code>{item.prompt}</code>
                </pre>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="practical-steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            データ分析の実践ステップ（データ整理→分析→可視化→レポート）
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIを入れても、分析フロー自体は変わりません。変わるのは“下書きの速さ”です。次の4ステップに沿って進めると、迷わず再現できます。
          </p>
          <div className="mt-6 space-y-4">
            {practicalSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="pl-1 marker:text-gray-500">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
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
          <h2 id="use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Excel × AI 活用シーン別ガイド（売上分析/顧客分析/在庫管理/アンケート集計）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            “何を見たいか”が決まると、必要な列と集計軸が決まります。以下はよくある業務シーン別の切り口です。学習から始めたい方は
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AI学習ロードマップ
            </Link>
            も参考にしてください。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sceneGuides.map((guide) => (
              <section key={guide.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {guide.items.map((item) => (
                    <li key={item} className="pl-1 marker:text-gray-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-indigo-200 bg-indigo-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ai-excel-tools" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI×Excelツールの比較と使い分け（2026年2月版）
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「AIでExcel分析を速くする」と言っても、ツールによって“どこでAIが動くか”が違います。まずは{" "}
            <span className="font-semibold text-gray-900">（1）Excelの中で完結させたいか</span>、{" "}
            <span className="font-semibold text-gray-900">（2）ローカルファイルを扱いたいか</span>を決めると、選定がブレません。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            仕様や提供範囲は、ロールアウト/契約プラン/テナント設定で変わります。ここでは「実務で選ぶ観点」を揃えた上で、公平に整理します（重要データは必ず検算）。
          </p>

          <div className="mt-6 overflow-x-auto rounded-lg border border-indigo-200 bg-white">
            <table className="min-w-[840px] table-auto border-collapse text-left text-sm">
              <thead className="bg-indigo-50">
                <tr className="border-b border-indigo-200">
                  <th className="px-4 py-3 font-semibold text-gray-900">項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Claude in Excel</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Copilot in Excel</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT（Advanced Data Analysis）</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Claude Cowork</th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold text-gray-900">動作場所</th>
                  <td className="px-4 py-3 text-gray-700">Excelアドイン</td>
                  <td className="px-4 py-3 text-gray-700">Excel内蔵</td>
                  <td className="px-4 py-3 text-gray-700">ブラウザ/アプリ</td>
                  <td className="px-4 py-3 text-gray-700">デスクトップアプリ</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold text-gray-900">ローカルファイル</th>
                  <td className="px-4 py-3 text-gray-700">対応（OneDrive不要）</td>
                  <td className="px-4 py-3 text-gray-700">非対応（OneDrive/SharePointが前提になりやすい）</td>
                  <td className="px-4 py-3 text-gray-700">アップロード/クラウド連携</td>
                  <td className="px-4 py-3 text-gray-700">対応</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold text-gray-900">複数シート理解</th>
                  <td className="px-4 py-3 text-gray-700">強い（引用つき説明が得意）</td>
                  <td className="px-4 py-3 text-gray-700">弱い（前提を言語で補うと安定）</td>
                  <td className="px-4 py-3 text-gray-700">アップロードした範囲内</td>
                  <td className="px-4 py-3 text-gray-700">対応</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold text-gray-900">Power Query</th>
                  <td className="px-4 py-3 text-gray-700">対応（Mコード生成/最適化）</td>
                  <td className="px-4 py-3 text-gray-700">非対応（手順提案は可能）</td>
                  <td className="px-4 py-3 text-gray-700">非対応</td>
                  <td className="px-4 py-3 text-gray-700">—</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold text-gray-900">料金目安</th>
                  <td className="px-4 py-3 text-gray-700">Claude Pro〜</td>
                  <td className="px-4 py-3 text-gray-700">Microsoft 365 Copilot</td>
                  <td className="px-4 py-3 text-gray-700">ChatGPT Plus〜</td>
                  <td className="px-4 py-3 text-gray-700">Claude Pro〜</td>
                </tr>
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">成熟度</th>
                  <td className="px-4 py-3 text-gray-700">プレビュー</td>
                  <td className="px-4 py-3 text-gray-700">GA（制約が多い）</td>
                  <td className="px-4 py-3 text-gray-700">GA</td>
                  <td className="px-4 py-3 text-gray-700">プレビュー</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <section className="rounded-lg border border-indigo-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">Claude in Excel（Anthropic）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                2025年10月頃からプレビュー提供が進み、2026年1月頃にProプラン以上（Pro/Max/Team/Enterprise）での利用が広がったとされます。Excelアドインとして動作し、
                分析はOpus 4.6系モデルで行う構成が目安です。
              </p>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                料金はClaude Pro（月額20ドル程度）からが目安です（プラン/契約形態で変動）。
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">
                  強み: ローカルファイルでも動作しやすい（OneDrive保存が前提になりにくい）
                </li>
                <li className="pl-1 marker:text-gray-500">強み: 複数タブのワークブック理解＋セル参照つきの説明が得意</li>
                <li className="pl-1 marker:text-gray-500">強み: Power QueryのMコード生成/最適化が可能</li>
                <li className="pl-1 marker:text-gray-500">強み: 「Ask before edits」で編集前確認の運用に寄せられる</li>
                <li className="pl-1 marker:text-gray-500">
                  強み: 応答速度がCopilotより速いと感じる人もいる（体感差・環境差あり）
                </li>
                <li className="pl-1 marker:text-gray-500">
                  弱み: まだプレビュー段階。複雑な金融モデル等は手動検証が必須
                </li>
                <li className="pl-1 marker:text-gray-500">弱み: 入力パラメータ変更時に関連計算が追随しないケースがある</li>
                <li className="pl-1 marker:text-gray-500">
                  弱み: 基本タスク（重複削除、フォーマット統一、数式デバッグ）は得意だが、文脈理解が必要な複雑なデータクリーニングは苦手な傾向
                </li>
              </ul>
            </section>

            <section className="rounded-lg border border-indigo-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">Copilot in Excel（Microsoft）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                Microsoft 365にネイティブ統合されているため、環境が揃っていれば“いつものExcelの延長”で使えます。一方で、組織設定や保存場所の要件など、制約が出やすいのも特徴です。
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">強み: Microsoft 365内での即時性（導入済みなら体験がシームレス）</li>
                <li className="pl-1 marker:text-gray-500">前提: Microsoft 365の有料ライセンス（Copilot Pro等）が必要になりやすい</li>
                <li className="pl-1 marker:text-gray-500">制約: OneDrive/SharePoint保存＋AutoSaveオンが前提になりやすい（ローカル不可になりがち）</li>
                <li className="pl-1 marker:text-gray-500">
                  制約: COPILOT関数はバージョン2510以上が必要とされ、テナントによって利用可否が分かれる
                </li>
                <li className="pl-1 marker:text-gray-500">制約: COPILOT関数は数値計算よりテキスト処理・アイデア生成向き</li>
                <li className="pl-1 marker:text-gray-500">
                  制約: 利用回数の上限が設定される場合がある（例: 10分で最大100回、1時間で最大300回など）
                </li>
                <li className="pl-1 marker:text-gray-500">
                  注意: 機能（例: App Skillsなど）は提供状況が変動しやすく、2026年2月末にExcelから削除予定と案内されるケースもある
                </li>
                <li className="pl-1 marker:text-gray-500">注意: 長いスプレッドシートでクラッシュするという報告もあるため、大規模データは分割・検算が無難</li>
              </ul>
            </section>

            <section className="rounded-lg border border-indigo-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">ChatGPT（Advanced Data Analysis / Python）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                CSV/Excelをアップロードして、内部でPython（pandas等）を使って分析・可視化できます。2026年はGoogle Drive/OneDriveから直接ファイル追加できる運用も増え、
                「グラフ＋文章のレポート」まで一気通貫で作りやすいのが強みです。
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">強み: 集計/統計/可視化/文章化まで“レポート生成”が速い</li>
                <li className="pl-1 marker:text-gray-500">強み: 手順が残る（Pythonコードや前処理のログとして再利用できる）</li>
                <li className="pl-1 marker:text-gray-500">注意: Excel内で直接動くわけではなく、チャット経由のワークフロー</li>
                <li className="pl-1 marker:text-gray-500">注意: 機密データはアップロード可否・契約条件を必ず確認</li>
              </ul>
            </section>

            <section className="rounded-lg border border-indigo-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">Claude Cowork（Anthropic）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                2026年1月に発表された、プログラミング不要のデスクトップエージェント（研究プレビュー）。キャッチコピーは「Claude Code for the rest of your work」。
                CSVをドロップするだけで、サマリー・グラフ・インサイト込みのレポートが短時間で作れる方向性が注目されています。
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">強み: 非エンジニアでも「ファイル投入→レポート」まで到達しやすい</li>
                <li className="pl-1 marker:text-gray-500">強み: Excelレポート自動生成にも対応する構成が増えている</li>
                <li className="pl-1 marker:text-gray-500">弱み: 研究プレビュー段階のため、業務運用は検証前提</li>
              </ul>
            </section>
          </div>

          <section className="mt-8 rounded-lg border border-indigo-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-gray-900">おすすめの使い分け（最短で成果が出る選び方）</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">
                社内データをExcel上で直接分析したい → <span className="font-semibold text-gray-900">Claude in Excel</span>（ローカルOK、マルチシート理解）
              </li>
              <li className="pl-1 marker:text-gray-500">
                Microsoft 365環境が整っていて手軽に始めたい → <span className="font-semibold text-gray-900">Copilot in Excel</span>（ただし保存/テナント制約に注意）
              </li>
              <li className="pl-1 marker:text-gray-500">
                CSVをアップロードして可視化・レポートを作りたい → <span className="font-semibold text-gray-900">ChatGPT Advanced Data Analysis</span>
              </li>
              <li className="pl-1 marker:text-gray-500">
                プログラミング不要でPC上のファイルをまとめて分析したい → <span className="font-semibold text-gray-900">Claude Cowork</span>
              </li>
              <li className="pl-1 marker:text-gray-500">
                本格的にPythonで分析を学びたい → <span className="font-semibold text-gray-900">pandas/scikit-learn</span>（中長期のスキル投資）
              </li>
            </ul>
          </section>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="prompt-examples" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            すぐ使えるプロンプト例5選（関数生成/データ整理/グラフ提案/異常値検出/レポート要約）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            そのままコピペして使える形にしました。社内で共有する場合は、変数（{`{列名}`}, {`{期間}`} など）を残すと再利用しやすくなります。
          </p>
          <div className="mt-8 space-y-6">
            {promptExamples.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <pre className="mt-4 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                  <code>{item.prompt}</code>
                </pre>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-rose-200 bg-rose-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="pitfalls" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI活用時の注意点（データセキュリティ、ハルシネーション確認）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              機密データは貼らない前提で運用する（匿名化・集計値化・サンプル化）。組織ルールに沿って利用範囲を決めます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              AIの式や手順は“もっともらしい誤り”が混ざります。必ず検算（件数、合計、代表サンプル）を入れてください。
            </li>
            <li className="pl-1 marker:text-gray-500">
              条件の取り違えが多いです（期間、税込/税抜、欠損の扱い、通貨単位など）。前提条件を最初に文章で固定します。
            </li>
            <li className="pl-1 marker:text-gray-500">
              社外共有資料は最終的に人が編集・確認するフローを徹底します。レポート文章は“下書き”として扱うのが安全です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            つまずきやすいのは「機密データ」「検算不足」「目的の曖昧さ」です。よくある疑問をQ&Aで整理します。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集｜営業・マーケ・管理部門の活用ポイントを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/corporate-ai-adoption-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                中小企業の生成AI導入ガイド｜失敗しない進め方と費用感 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/python-ai-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Python×AI入門｜最初に覚える概念と学習の進め方を解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

<motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">AIは「式の下書き」「整理手順の提案」「見せ方の候補」「文章要約」を高速化し、人は検算と意思決定に集中できます。</li>
            <li className="pl-1 marker:text-gray-500">最初は“問いを1つ”に絞り、列名・期間・粒度など前提を渡すと精度が安定します。</li>
            <li className="pl-1 marker:text-gray-500">機密データは匿名化・集計値化が基本。AIの出力は必ず数値で検証してください。</li>
          </ul>
        </motion.section>
<motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
	        >
	          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
	            次のアクション：実務に落とし込みたい方へ
	          </h2>
	          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
	            ツールの知識より「何を判断したいか」を言語化する思考OSで成果が出ます。仲間と100日間の伴走で、あなたの業務データを使った実務アウトプットまで落とし込むなら
	            <Link href="/academy" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
	              AIリブートアカデミー
	            </Link>
	            で実務フローに合わせて整理できます。
	          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              講座ラインナップを見る
            </Link>
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              仕事用プロンプトテンプレートを読む
            </Link>
          </div>
        </motion.section>

        
      </article>
    </main>
  );
}
