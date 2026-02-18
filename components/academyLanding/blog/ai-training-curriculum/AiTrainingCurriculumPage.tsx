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

type AiTrainingCurriculumPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI研修 カリキュラム", "職種別プログラム", "定着（OJT）"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ（3段階設計）" },
  { id: "why-training", label: "なぜAI研修が必要なのか" },
  { id: "curriculum-design", label: "研修カリキュラムの全体設計" },
  { id: "role-based-curriculum", label: "職種別カリキュラム例（営業/マーケ/バックオフィス/エンジニア）" },
  { id: "planning-template", label: "研修企画書テンプレート（10項目）" },
  { id: "internal-trainer", label: "社内講師の育成方法" },
  { id: "pitfalls", label: "研修の落とし穴と対策" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const planningTemplateItems = [
  { item: "研修目的", description: "経営課題→現場課題に落とし込み、KPI（後述）まで言語化します。" },
  { item: "対象者", description: "全社基礎（全社員）＋職種別応用（部門）＋管理職向け（意思決定）の3層で設計します。" },
  { item: "実施形式", description: "対面/オンライン/ハイブリッド、eラーニング併用、演習比率（例: 30%講義/70%演習）を定義します。" },
  { item: "カリキュラム構成", description: "基礎→応用→定着の3段階。各回のテーマ、演習内容、宿題（OJTタスク）を明記します。" },
  { item: "スケジュール", description: "研修日程だけでなく、OJT期間とフォローアップ勉強会まで含めて引きます。" },
  { item: "講師", description: "外部講師/社内講師の役割分担、社内講師のアサイン条件と育成計画を記載します。" },
  { item: "使用ツール", description: "利用する生成AI、社内ナレッジ（RAG等）、アカウント/権限、ログ方針を整理します。" },
  { item: "評価方法", description: "受講満足度だけでなく、業務指標（時間短縮、品質、再作業率等）を継続観測できる形にします。" },
  { item: "予算", description: "外部研修費、社内講師育成費、ツール費、運営工数（準備/運用）を分けて見積もります。" },
  { item: "フォローアップ計画", description: "30日以内のOJT、月次フォローアップ、成果共有会、教材アップデート体制を定義します。" },
 ] as const;

const scheduleRows = [
  { phase: "準備（1〜2週間）", content: "目的・対象者・ルール（ガイドライン）整理／教材準備／社内講師の補助体制" },
  { phase: "基礎（半日〜1日）", content: "全社向け：できること/できないこと、セキュリティ、基本プロンプト、業務での使い分け" },
  { phase: "応用（2時間×2〜4回）", content: "職種別：ユースケース→演習→フィードバック→テンプレ化（プロンプト/手順）" },
  { phase: "定着（1〜3ヶ月）", content: "OJTタスク、月1の勉強会、成果共有、KPI観測→改善サイクル" },
] as const;

export default function AiTrainingCurriculumPage({ faqItems }: AiTrainingCurriculumPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI研修カリキュラム例（職種別）" },
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
                title="AI研修カリキュラム例（職種別）｜社内定着まで見据えた設計（2026年版）"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI研修カリキュラム例（職種別）｜社内定着まで見据えた設計（2026年版）
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AI研修は「1回やって終わり」にすると、現場の行動が変わりません。重要なのは、<span className="font-semibold text-gray-900">業務で使える形に落とし込み、OJTで定着させる</span>
            ことです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、全社基礎→職種別応用→定着（OJT）の3段階で、営業・マーケ・バックオフィス・エンジニア向けの具体的な研修プログラム例を提示し、最後にそのまま使える研修企画書テンプレート（10項目）もまとめます。
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
            要点まとめ：研修は「基礎（全社）→応用（職種別）→定着（OJT）」の3段階で設計する
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">研修は「基礎（全社）→応用（職種別）→定着（OJT）」の3段階設計が最短ルート</li>
            <li className="pl-1 marker:text-gray-500">座学だけでなく、実務タスクでのハンズオン（演習→宿題→レビュー）まで作る</li>
            <li className="pl-1 marker:text-gray-500">KPIで研修効果を可視化し、月次で継続改善できる仕組みを作る</li>
          </ul>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-orange-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-orange-700">基礎（全社）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">安全な使い方と共通言語を作る（ツール操作より先にルール）。</p>
            </section>
            <section className="rounded-lg border border-orange-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-orange-700">応用（職種別）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">業務ユースケースに直結した演習で「使える型」を持ち帰る。</p>
            </section>
            <section className="rounded-lg border border-orange-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-orange-700">定着（OJT）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">30日以内に実務タスクを回し、勉強会＋KPIで改善する。</p>
            </section>
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
          <h2 id="why-training" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            なぜAI研修が必要なのか
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            生成AIは「使う/使わない」で、現場の生産性と品質の差が広がります。放置すると、ツール選定やルールがないまま現場に広がり、事故と分断（属人化）が起きます。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">活用が進むと起きること</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">下書き・要約・叩き台の速度が上がり、レビューに時間を使える</li>
                <li className="pl-1 marker:text-gray-500">ナレッジの形式化（テンプレ/プロンプト）が進み、再現性が上がる</li>
                <li className="pl-1 marker:text-gray-500">新人/非専門職でも一定品質のアウトプットに到達しやすくなる</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">放置すると起きること（リスク）</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">個人アカウント利用＝シャドーAIが増え、監査・教育ができなくなる</li>
                <li className="pl-1 marker:text-gray-500">機密/個人情報の入力事故、生成物の誤情報・権利問題が起きやすくなる</li>
                <li className="pl-1 marker:text-gray-500">使える人だけが先に進み、部門間で成果が分断される</li>
              </ul>
            </section>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            シャドーAIの予防（禁止ではなく統制で進める設計）は
            <Link href="/academy/blog/shadow-ai-countermeasures" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              シャドーAI対策の進め方
            </Link>
            にまとめています。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-base font-semibold text-gray-900">研修は「投資対効果（ROI）」を作る装置</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              研修がないと、現場は試行錯誤が属人化し、成果が出ても再現されません。研修で「共通ルール＋型（テンプレ）＋OJT」を作ると、改善が横展開され、同じ投資でも回収速度が上がります。
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
          <h2 id="curriculum-design" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            研修カリキュラムの全体設計
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            カリキュラムは、基礎→応用→定着の3段階で設計します。ポイントは、応用研修を「職種固有のユースケース」と「演習」に寄せ、最後にOJTで回る運用へ接続することです。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">3段階設計：基礎→応用→定着</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">基礎研修（全社・半日）</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">AIの基本（できること/できないこと）</li>
                <li className="pl-1 marker:text-gray-500">セキュリティルール（入力NG、権限、ログ）</li>
                <li className="pl-1 marker:text-gray-500">基本操作＋よくある業務テンプレ（要約/メール/議事録）</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">応用研修（職種別・2時間×2〜4回）</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">職種固有のユースケースを3〜5個に絞る</li>
                <li className="pl-1 marker:text-gray-500">演習（ハンズオン）→レビュー→テンプレ化</li>
                <li className="pl-1 marker:text-gray-500">宿題としてOJTタスクを設計する</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">定着支援（1〜3ヶ月）</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">OJTタスク（30日以内）で実務に接続</li>
                <li className="pl-1 marker:text-gray-500">月1回のフォローアップ勉強会</li>
                <li className="pl-1 marker:text-gray-500">KPIで効果測定→改善</li>
              </ul>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">全体スケジュール表（例）</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">フェーズ</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">内容</th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row) => (
                  <tr key={row.phase} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.phase}</th>
                    <td className="py-4 pl-4">{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 id="role-based-curriculum" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            職種別カリキュラム例
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            応用研修は「職種の実務タスク」から逆算します。各職種で、テーマ/目標/演習内容/所要時間をセットで作り、研修後はそのままOJTタスクに接続します。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">営業</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">テーマ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目標</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">演習内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">所要時間</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">提案書の叩き台</th>
                  <td className="py-4 px-4">構成案→本文→差別化ポイントまで短時間で作る</td>
                  <td className="py-4 px-4">顧客情報を伏せた要件から提案書骨子を生成→レビュー→テンプレ化</td>
                  <td className="py-4 pl-4">60分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">メール文面生成</th>
                  <td className="py-4 px-4">トーン調整と誤解を減らす表現設計</td>
                  <td className="py-4 px-4">目的/相手/制約を入力→複数案→社内ルール（敬語/表記）に合わせる</td>
                  <td className="py-4 pl-4">45分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">議事録作成</th>
                  <td className="py-4 px-4">要点・TODO・決定事項を正確に残す</td>
                  <td className="py-4 px-4">音声/メモの要約→議事録フォーマットへ整形→確認観点（抜け漏れ）</td>
                  <td className="py-4 pl-4">45分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">顧客分析</th>
                  <td className="py-4 px-4">課題仮説と次アクションを整理する</td>
                  <td className="py-4 px-4">公開情報＋匿名化した商談ログから仮説→質問案→次回提案の流れ</td>
                  <td className="py-4 pl-4">60分</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">マーケティング</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">テーマ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目標</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">演習内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">所要時間</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">コンテンツ作成</th>
                  <td className="py-4 px-4">記事/LPの構成と初稿を高速化する</td>
                  <td className="py-4 px-4">検索意図→見出し案→要点→初稿→ファクトチェック観点を追加</td>
                  <td className="py-4 pl-4">60分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">SNS投稿案</th>
                  <td className="py-4 px-4">媒体ごとの最適化（X/Instagram/LinkedIn）</td>
                  <td className="py-4 px-4">トーン/文字数/CTAを条件化→複数案→炎上・誤解リスクのチェック</td>
                  <td className="py-4 pl-4">45分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">データ分析</th>
                  <td className="py-4 px-4">仮説→検証→改善案を短時間で回す</td>
                  <td className="py-4 px-4">施策結果の要約→示唆→次の打ち手→KPIの見直し案</td>
                  <td className="py-4 pl-4">60分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">A/Bテスト案</th>
                  <td className="py-4 px-4">仮説の質と検証設計を上げる</td>
                  <td className="py-4 px-4">現状コピーを入力→改善仮説→パターン案→検証手順と判定基準</td>
                  <td className="py-4 pl-4">45分</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">バックオフィス</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">テーマ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目標</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">演習内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">所要時間</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">文書要約</th>
                  <td className="py-4 px-4">規程/契約/手順書の要点を短時間で整理する</td>
                  <td className="py-4 px-4">要約粒度（3段階）を指定→要点→確認観点→社内共有フォーマットへ</td>
                  <td className="py-4 pl-4">45分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">FAQ作成</th>
                  <td className="py-4 px-4">問い合わせ対応を減らす</td>
                  <td className="py-4 px-4">問い合わせログ→分類→FAQ案→不足情報の洗い出し→更新ルール</td>
                  <td className="py-4 pl-4">60分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">データ入力</th>
                  <td className="py-4 px-4">入力ミス/手戻りを減らす</td>
                  <td className="py-4 px-4">手順の要約→チェックリスト化→例外パターンの整理→レビュー運用</td>
                  <td className="py-4 pl-4">45分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">レポート生成</th>
                  <td className="py-4 px-4">報告の質とスピードを上げる</td>
                  <td className="py-4 px-4">事実（数値/出来事）→示唆→次アクションの型で報告書を作る</td>
                  <td className="py-4 pl-4">60分</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">エンジニア</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">テーマ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目標</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">演習内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">所要時間</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">コード生成</th>
                  <td className="py-4 px-4">要件→設計→実装の叩き台を速く作る</td>
                  <td className="py-4 px-4">仕様→制約→例外→テスト観点まで書かせ、レビュー観点を固定化する</td>
                  <td className="py-4 pl-4">60分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">コードレビュー</th>
                  <td className="py-4 px-4">レビューの観点漏れを減らす</td>
                  <td className="py-4 px-4">変更差分の要約→リスク→改善案→セキュリティ/性能/可読性の観点でチェック</td>
                  <td className="py-4 pl-4">45分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">テスト生成</th>
                  <td className="py-4 px-4">境界条件と例外の網羅性を上げる</td>
                  <td className="py-4 px-4">入力パターン→期待値→失敗ケース→最小テストセットを作り、CIで回す</td>
                  <td className="py-4 pl-4">60分</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">ドキュメント作成</th>
                  <td className="py-4 px-4">実装の意図を残し、引き継ぎを楽にする</td>
                  <td className="py-4 px-4">README/ADR/設計メモの雛形化→レビュー→更新運用の設計</td>
                  <td className="py-4 pl-4">45分</td>
                </tr>
              </tbody>
            </table>
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
          <h2 id="planning-template" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            研修企画書テンプレート（10項目）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            研修企画は「やることの列挙」ではなく、目的→対象→運用→評価までの一枚設計です。以下の10項目が埋まると、稟議と実行が進みやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">記載内容</th>
                </tr>
              </thead>
              <tbody>
                {planningTemplateItems.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="py-4 pl-4">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 id="internal-trainer" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            社内講師の育成方法
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            応用研修は業務理解が重要なため、社内講師の存在が効きます。社内講師は「ツールに詳しい人」ではなく、<span className="font-semibold">業務の型を言語化して再現できる人</span>を選びます。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">社内講師に求めるスキル</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">職種の実務タスクを分解し、演習に落とし込める</li>
            <li className="pl-1 marker:text-gray-500">プロンプトや手順をテンプレ化し、再利用できる形にできる</li>
            <li className="pl-1 marker:text-gray-500">受講者の詰まりポイントを観察し、フィードバックできる</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">養成プログラム（2〜4週間）</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">Week 1：基礎＋教材理解</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">基礎研修を講師視点で受講（ルール/注意点も含む）</li>
                <li className="pl-1 marker:text-gray-500">共通テンプレ（要約/メール/議事録）の標準化</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">Week 2：職種別演習の設計</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">ユースケースを3〜5個に絞り、演習手順に落とす</li>
                <li className="pl-1 marker:text-gray-500">評価観点（出来栄え/リスク/再現性）を決める</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">Week 3：模擬講義＋改善</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">模擬講義→フィードバック→教材/テンプレの改訂</li>
                <li className="pl-1 marker:text-gray-500">受講者の典型ミス（入力NG/誤情報）を教材に反映</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">Week 4：運用設計</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">教材の更新フロー（担当/頻度/保存先）を決める</li>
                <li className="pl-1 marker:text-gray-500">月次の勉強会、成果共有、KPIレビューの役割分担を作る</li>
              </ul>
            </section>
          </div>

          <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-base font-semibold text-gray-900">教材の標準化とナレッジ共有</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              教材は「資料」ではなく「運用資産」です。テンプレ（プロンプト、チェックリスト、NG例）を共通化し、更新履歴が残る場所（Notion/Confluence/Google Docs等）に集約します。
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
          <h2 id="pitfalls" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            研修の落とし穴と対策
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            研修が失敗する原因は「内容」より「運用設計」にあります。よくある落とし穴を先に潰し、定着まで一直線に繋げます。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">落とし穴1：座学だけで終わる</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                対策：ハンズオン必須化（実務タスクで演習→宿題→レビュー）。研修の成果物をテンプレ化して持ち帰らせます。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">落とし穴2：1回きりで終わる</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                対策：定着支援フェーズ（1〜3ヶ月）を設計し、月1回のフォローアップ勉強会とKPIレビューを組み込みます。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">落とし穴3：管理職が参加しない</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                対策：管理職向けに別プログラム（判断基準、リスク、KPI、役割）を用意し、現場のOJTを支える体制を作ります。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">落とし穴4：ルールなしで始める</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                対策：ガイドラインと同時展開。最低限の入力ルール/権限/ログを決めてから研修に入ります（
                <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  ガイドライン雛形
                </Link>
                参照）。
              </p>
            </section>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="related-links" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            関連リンク
          </h2>
          <ul className="mt-6 space-y-2">
            <li>
              <Link href="/academy/blog/ai-training-kpi" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI研修KPI（研修効果の測り方）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形（#1）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/shadow-ai-countermeasures" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                シャドーAI対策（#2）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-training" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                法人向けAI研修で成果を出す完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-training-internal" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                社内AI研修の始め方と定着の進め方
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </motion.section>

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
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AI研修のゴールは「受講」ではなく「現場が継続的に使える状態」です。基礎（全社）で共通言語とルールを作り、応用（職種別）で実務の型を持ち帰り、定着（OJT）で成果を横展開できる運用に繋げましょう。
          </p>
        </motion.section>

        <motion.section
          className="mt-10 rounded-lg border border-gray-200 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-xl font-semibold text-gray-900">
            研修設計の叩き台、最短で作ります
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            目的設計→職種別カリキュラム→OJTまで一気通貫で整理。無料セミナーで全体像を掴むか、LINEで気軽に相談してください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              LINEで相談する
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
