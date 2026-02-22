"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type WorkflowAutomationComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "ワークフロー自動化",
  "Make比較",
  "Zapier比較",
  "n8n",
  "ノーコード自動化",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-workflow-automation", label: "ワークフロー自動化とは？" },
  { id: "tool-comparison", label: "Make・Zapier・n8n 徹底比較" },
  { id: "how-to-choose", label: "選び方の判断軸" },
  { id: "use-cases", label: "部門別活用パターン5選" },
  { id: "getting-started", label: "最初の1本を今日中に作る3ステップ" },
  { id: "pitfalls", label: "よくある失敗3パターン" },
  { id: "faq", label: "よくある質問" },
  { id: "related-links", label: "関連リンク" },
  { id: "article-summary", label: "まとめ" },
  { id: "cta", label: "次のアクション" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const toolComparisonRows = [
  {
    tool: "Zapier",
    freePlan: "月100タスク",
    apps: "7,000以上",
    difficulty: "低",
    selfHost: "✕",
    japanese: "△（英語UI）",
    bestFor: "手軽さ重視・大量アプリ連携",
  },
  {
    tool: "Make（旧Integromat）",
    freePlan: "月1,000オペレーション",
    apps: "1,800以上",
    difficulty: "中",
    selfHost: "✕",
    japanese: "◯",
    bestFor: "コスト効率・複雑フロー",
  },
  {
    tool: "n8n",
    freePlan: "セルフホストは無制限",
    apps: "400以上＋HTTP汎用",
    difficulty: "中〜高",
    selfHost: "◯（OSS）",
    japanese: "△（英語UI）",
    bestFor: "セキュリティ・コスト最小化",
  },
] as const;

const selectionCriteria = [
  {
    situation: "初めて自動化ツールを使う",
    recommendation: "Zapier",
    reason: "UIが直感的でノーコード。公式チュートリアルも豊富で最短で動くものが作れる。",
  },
  {
    situation: "月次タスク数が多くコストを抑えたい",
    recommendation: "Make",
    reason:
      "オペレーション単位課金でZapierより費用対効果が高い。複雑なマルチステップシナリオも無料プランで構築可能。",
  },
  {
    situation: "社内機密情報を含むフローを扱う",
    recommendation: "n8n（セルフホスト）",
    reason: "データが外部クラウドに出ない。Dockerで社内ネットワーク内に完全閉鎖環境を構築できる。",
  },
  {
    situation: "APIが公開されている任意のSaaSと連携したい",
    recommendation: "n8n または Make",
    reason:
      "n8nのHTTPノード・MakeのHTTPモジュールでREST APIに直接リクエスト可能。Zapierにない国内SaaSも接続できる。",
  },
  {
    situation: "AIエージェント（Dify等）との連携も視野に入れたい",
    recommendation: "n8n または Make",
    reason: "HTTPリクエストでDify APIを呼び出し、AI処理をフローの一部として組み込める。LLMとの統合に強い。",
  },
] as const;

const useCases = [
  {
    department: "営業",
    flow: "Webフォーム送信 → CRM登録 → Slack通知 → 担当者へフォローアップメール自動送信",
    tool: "Zapier or Make",
    effect: "リード対応の初動を平均2時間→5分に短縮",
  },
  {
    department: "人事・採用",
    flow: "求人票応募 → スプレッドシート記録 → 面接日程調整メール送信 → カレンダー登録",
    tool: "Make",
    effect: "採用事務工数を週あたり3〜4時間削減",
  },
  {
    department: "マーケティング",
    flow: "ブログ公開 → SNS投稿スケジュール → メルマガリスト追加 → GA4データ取得→週次レポート生成",
    tool: "Make or n8n",
    effect: "週次レポート作成を90分→自動化で0分に",
  },
  {
    department: "カスタマーサポート",
    flow: "メール受信 → AI分類（Dify連携）→ Slackチャンネルに振り分け → チケット起票",
    tool: "n8n ＋ Dify",
    effect: "一次対応仕分け工数を80%削減、見落としゼロへ",
  },
  {
    department: "経理・財務",
    flow: "請求書メール受信 → PDF添付ファイル抽出 → スプレッドシート転記 → 承認フロー通知",
    tool: "Make or n8n",
    effect: "月次請求処理の手作業を1/3以下に圧縮",
  },
] as const;

const startingSteps = [
  {
    step: "01",
    title: "Zapierでアカウントを作成し、Zap（フロー）を新規作成する",
    detail:
      "Zapier.comにアクセスし、Googleアカウントでサインアップ。ダッシュボードの「Create Zap」ボタンをクリックするとビジュアルエディタが開きます。まずはトリガーアプリ（例: Gmail）を選択してください。",
    point: "最初はシンプルな「2ステップZap」から始める。複雑なフローは動作確認後に追加する。",
  },
  {
    step: "02",
    title: "トリガーとアクションを設定し、テストデータで動作確認する",
    detail:
      "トリガー（例:「新着メールを受信したとき」）を設定したら、接続するアクションアプリ（例: Google Sheets）を選択し、どのデータをどのセルに書き込むかをマッピングします。設定後は必ず「Test」ボタンで実データを流して動作確認しましょう。",
    point: "テストデータに実際の業務データを使わず、ダミーデータで検証する。個人情報の取り扱いに注意。",
  },
  {
    step: "03",
    title: "Zapを有効化し、1週間後に実行ログを確認して改善する",
    detail:
      "テスト成功後、「Turn on Zap」で有効化すると自動実行が始まります。1週間後にZap Historyでエラーや想定外の動作がないか確認しましょう。エラーが多い場合はトリガー条件やフィルターの見直しが必要です。",
    point: "エラー通知をメールで受け取る設定を有効にしておく。問題の早期発見に直結する。",
  },
] as const;

const pitfalls = [
  {
    pattern: "失敗1",
    title: "最初から複雑なマルチステップフローを組もうとする",
    situation:
      "「どうせ作るなら完璧に」と、承認フロー・条件分岐・エラーハンドリングを一度に設計した結果、動作確認に2週間かかり途中で挫折するケース。",
    solution:
      "最小構成（トリガー→アクション2ステップ）で動くものを先に完成させる。実際に業務で使いながら段階的に機能を追加するほうが、精度も定着率も上がります。",
  },
  {
    pattern: "失敗2",
    title: "エラーハンドリングを省略して気づかずに止まる",
    situation:
      "フローは動いているつもりが、接続先SaaSのAPI仕様変更やレート制限でサイレントに止まっており、数週間後に「データが欠けている」と発覚するケース。",
    solution:
      "Zapierの「Error Notifications」、Makeの「エラーハンドラモジュール」、n8nの「Error Trigger」を設定し、失敗時にSlackやメールへ即時通知する仕組みを最初から組み込みましょう。",
  },
  {
    pattern: "失敗3",
    title: "月次のタスク数制限とコストを見落とす",
    situation:
      "無料プランで試作したフローを本番環境に流したところ、月中に上限に達してフローが止まり、急遽有料プランに切り替えたが請求が予想の3倍になったケース。",
    solution:
      "本番化前に月次処理件数を試算し、プランの上限と照合しておく。Makeはオペレーション数が少ないほどコスト安。タスク数が多い業務はn8nセルフホストへの移行も検討してください。",
  },
] as const;

export default function WorkflowAutomationComparisonPage({
  faqItems,
}: WorkflowAutomationComparisonPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ワークフロー自動化ツール比較" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
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
            ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較【2026年版】
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-26">2026年2月26日</time> 公開
            </p>
            <CopyAsMarkdownButton
                title="ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「どのツールが自社の業務に合うのか？」——ワークフロー自動化ツールを選ぶ際、Make・Zapier・n8nのどれを使うべきか迷うのは当然です。料金体系も強みもまったく異なる3ツールを、4つの判断軸で整理します。この記事を読めば、試行錯誤なく自社に最適なツールを選べるようになります。
          </p>
        </motion.header>

        {/* 要点まとめ */}
        <motion.section
          id="summary"
          className="scroll-mt-28 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">この記事の要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            <li className="pl-1 marker:text-blue-500">
              <strong>Zapier</strong>は接続アプリ数7,000以上で最も手軽。まず動かしたい人の第一選択。
            </li>
            <li className="pl-1 marker:text-blue-500">
              <strong>Make</strong>はコスト効率が高く複雑なシナリオを視覚的に設計できる。スケール時に強い。
            </li>
            <li className="pl-1 marker:text-blue-500">
              <strong>n8n</strong>はセルフホストが可能でセキュリティ要件の厳しい法人・機密業務に最適。
            </li>
            <li className="pl-1 marker:text-blue-500">
              選び方の軸は「コスト」「技術難易度」「セキュリティ」「接続したいSaaS」の4点で決まる。
            </li>
            <li className="pl-1 marker:text-blue-500">
              DifyなどのAIエージェントとHTTP連携することで、AI処理を自動化フローに組み込める。
            </li>
          </ul>
        </motion.section>

        {/* Answer Box */}
        <section className="mb-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">この記事の結論</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            初導入で最短成果を狙うならZapier、コスト効率と複雑フローの両立を狙うならMake、機密データ運用や長期コスト最適化ならn8n（セルフホスト）が適しています。選定は「接続先SaaS」「月次処理量」「セキュリティ要件」の3点で決まります。迷う場合はZapierかMakeで1業務を先行自動化し、処理量が増えた段階でn8n移行を検討するのが現実的です。
          </p>
        </section>

        <section className="mt-8 rounded-lg border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-base font-bold text-gray-900">この記事でわかること</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">Make・Zapier・n8nを料金・機能・難易度・セキュリティの4軸で比較した結果</li>
            <li className="pl-1">部門別おすすめ活用パターン5選と最初のフロー作成3ステップ</li>
            <li className="pl-1">プログラミング知識なしで使えるツールの見分け方</li>
            <li className="pl-1">個人情報を含むフローのセキュリティ対策と国内SaaS連携の実例</li>
          </ul>
        </section>

        <ArticleTOC items={tocItems} />

        {/* H2-1: ワークフロー自動化とは？ */}
        <motion.section
          id="what-is-workflow-automation"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ワークフロー自動化とは？手作業をゼロにする仕組みの基本
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ワークフロー自動化とは、複数のアプリやサービス間の「つなぎ」作業を、人の手を介さず自動で実行する仕組みです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            たとえば「Googleフォームに問い合わせが来たら→スプレッドシートに記録→担当者にSlack通知→返信メールを自動送信」という一連の作業を、設定した条件に従って24時間自動で動かせます。これがワークフロー自動化の実態です。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            従来のRPAとの違い：画面操作ではなくAPI連携が主流に
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            RPAはパソコンの画面操作を記録・再生することで自動化を実現しますが、アプリのUIが変わると壊れやすく、メンテナンスコストが高い欠点があります。Make・Zapier・n8nはAPIを介した連携が基本のため、UIに依存せず安定して動作し、クラウドSaaS時代の業務自動化に適しています。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            2026年現在、業務アプリの多くがAPIを公開しており、ノーコードのワークフロー自動化ツールで大半の連携が実現できます。コードを書かずとも、SaaS同士を「つなぐ」だけで業務効率化できる時代になりました。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            自動化の恩恵が大きい業務の特徴
          </h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <strong>繰り返し頻度が高い</strong>：毎日・毎週同じ手順で行う転記・通知・集計作業
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>ルールが明確</strong>：「〇〇が来たら△△する」と条件が言語化できる業務
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>複数ツール間の橋渡し</strong>：CRM・メール・チャット・スプレッドシートを横断する作業
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>タイムセンシティブ</strong>：リード対応や問い合わせ返信など、速さが成果に直結する業務
            </li>
          </ul>
        </motion.section>

        {/* LINE CTA #1 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
            href="https://bexn9pao.autosns.app/line?src=blog&slug=workflow-automation-comparison"
          />
        </motion.section>

        {/* H2-2: ツール比較 */}
        <motion.section
          id="tool-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Make・Zapier・n8n 徹底比較｜料金・機能・難易度を一覧で整理
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            3ツールは「手軽さ（Zapier）」「コスト効率（Make）」「セキュリティ（n8n）」でそれぞれ異なる強みを持ちます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            以下の表は2026年2月時点の情報を基に整理しています。料金・プラン詳細は各公式サイトでご確認ください。
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">無料プラン</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">接続アプリ数</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">難易度</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">セルフホスト</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">日本語対応</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">特におすすめの用途</th>
                </tr>
              </thead>
              <tbody>
                {toolComparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.tool}</td>
                    <td className="py-4 px-4">{row.freePlan}</td>
                    <td className="py-4 px-4">{row.apps}</td>
                    <td className="py-4 px-4">{row.difficulty}</td>
                    <td className="py-4 px-4">{row.selfHost}</td>
                    <td className="py-4 px-4">{row.japanese}</td>
                    <td className="py-4 px-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            Zapierの強みと弱み
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Zapierの最大の強みは接続アプリ数の多さと設定のシンプルさです。7,000以上のアプリに対応しており、「とにかく動かしたい」ならまずZapierを選べば失敗しません。一方、タスク数が増えると費用が急増し、月に数万〜数十万タスクを処理する規模になるとコストが課題になります。また、自社サーバーへのセルフホストはできないため、外部サービスにデータを預ける前提で使う必要があります。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            Makeの強みと弱み
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Makeの特徴はビジュアルシナリオエディタの柔軟性です。条件分岐・繰り返し・エラーハンドリングを視覚的に組み立てられ、複雑なフローも一画面で全体を把握できます。オペレーション単位の課金体系はZapierよりコスト予測がしやすく、大量処理が発生する業務に向いています。ただし日本語UIがあるものの、設定項目が多く初学者には若干の慣れが必要です。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            n8nの強みと弱み
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            n8nはOSSとして公開されており、自社サーバーにセルフホストすればデータが外部クラウドに出ません。個人情報・機密情報を扱う業務フローでは唯一の現実的な選択肢です。HTTPノードを使えばREST APIを持つ任意のサービスと接続でき、公式コネクタ数の少なさをカバーします。一方、セルフホスト環境の構築・運用にはDockerの基礎知識が必要で、クラウド版は無料プランがないため初期コストが発生します。
          </p>
        </motion.section>

        {/* H2-3: 選び方 */}
        <motion.section
          id="how-to-choose"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            選び方の判断軸｜状況別おすすめツール早見表
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「どれでもできる」からこそ迷う。状況を絞ると答えは明確になります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            以下の表で自分の状況に近い行を探してください。複数当てはまる場合は、セキュリティ要件が最優先です。
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 font-semibold text-gray-900">状況</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">推奨ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">理由</th>
                </tr>
              </thead>
              <tbody>
                {selectionCriteria.map((row) => (
                  <tr key={row.situation} className="border-b border-gray-200 align-top">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.situation}</td>
                    <td className="py-4 px-4 font-semibold text-will-primary">{row.recommendation}</td>
                    <td className="py-4 px-4">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            コスト試算の考え方：Zapier vs Make
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Zapierは「タスク」単位で課金されます。1つのZapで3アクションが実行された場合は3タスク消費です。Makeは「オペレーション」単位で、シナリオ内のモジュール実行1回が1オペレーションです。処理件数が月1,000件を超えてくると、Makeのオペレーション課金のほうがZapierより大幅にコストが低くなるケースが多いです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            詳細な料金比較は各公式サイト（zapier.com / make.com）の料金ページをご確認ください。プランは頻繁に改定されるため、実際の月次処理件数で試算することをお勧めします。
          </p>
        </motion.section>

        {/* H2-4: 部門別活用パターン */}
        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            部門別活用パターン5選｜今すぐ使えるフロー設計
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            業務部門ごとに「自動化の型」は異なります。自社の状況に近いパターンをそのまま使ってください。
          </p>

          <div className="mt-6 space-y-6">
            {useCases.map((uc, index) => (
              <div
                key={uc.department}
                className="rounded-lg border border-gray-200 bg-gray-50 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold text-gray-900">{uc.department}部門</h3>
                  <span className="ml-auto text-xs font-medium text-will-primary">{uc.tool}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <strong className="text-gray-900">フロー：</strong>
                  {uc.flow}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  <strong className="text-gray-900">効果の目安：</strong>
                  {uc.effect}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            AIエージェントと組み合わせた自動化（カスタマーサポートの事例）については、
            <Link
              href="/academy/blog/dify-beginner-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              DifyでAI業務ボットを作る方法
            </Link>
            も参照してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox
            slug="workflow-automation-comparison"
          />
        </motion.section>

        {/* H2-5: 最初の1本を作る3ステップ */}
        <motion.section
          id="getting-started"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            最初の1本を今日中に作る3ステップ｜Zapierで始める入門フロー
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「いつか試そう」を「今日動かす」に変えるには、最もシンプルなフローを1本完成させることが唯一の方法です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            初めてのワークフロー自動化ツールにはZapierが最適です。アカウント作成から最初のZap稼働まで、30分以内に完成できます。
          </p>

          <div className="mt-6 space-y-6">
            {startingSteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{step.detail}</p>
                  <div className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-2">
                    <p className="text-xs leading-6 text-amber-800">
                      <strong>ポイント：</strong>
                      {step.point}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            Makeへの移行タイミング：Zapierの「不便」が見えてきたら
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            「2ステップ以上の複雑なフローが必要になった」「月のタスク数が無料枠を超え費用が気になり始めた」「条件分岐を視覚的に把握したい」——これらの不満が出てきたタイミングがMakeへの移行サインです。ZapierとMakeはどちらもOAuth連携でGmailやSlackと接続するため、フローの設計思想さえ理解できていれば移行は比較的スムーズです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            n8nへの移行は「社内機密情報を扱いたい」「月次タスク数が数万件超で外部サービスのコストが無視できない」「DockerやLinuxの基礎知識がある」場合に検討してください。
          </p>
        </motion.section>

        {/* LINE CTA #2 */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-orange-800">
            📩 LINEで毎週AI知識を配信中
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            今すぐ無料で登録する（30秒）
          </a>
        </motion.section>

        {/* H2-6: よくある失敗 */}
        <motion.section
          id="pitfalls"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある失敗3パターンと対処法
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「試してみたが途中で止まった」「知らないうちにエラーが出ていた」——導入初期によくある3つの失敗パターンを先に知っておくことで、つまずきを回避できます。
          </p>

          <div className="mt-6 space-y-8">
            {pitfalls.map((p) => (
              <div key={p.pattern} className="rounded-lg border border-red-100 bg-red-50 p-5">
                <h3 className="text-base font-bold text-red-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <strong className="text-gray-900">よくある状況：</strong>
                  {p.situation}
                </p>
                <div className="mt-3 rounded-md border border-green-200 bg-white px-4 py-3">
                  <p className="text-sm leading-7 text-gray-700">
                    <strong className="text-green-700">対処法：</strong>
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            AIエージェントをフローに組み込む場合のセキュリティ設計については、
            <Link
              href="/academy/blog/ai-agent-deployment-checklist"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIエージェント導入チェックリスト
            </Link>
            も合わせて参照してください。
          </p>
        </motion.section>

        {/* FAQ */}
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
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Q. {item.question}
                </dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/dify-beginner-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Difyの使い方完全ガイド｜ノーコードでAI業務ボットを最短で作る方法
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-agent-build-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/what-is-mcp"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                MCPとは？AIエージェントの外部接続を可能にするプロトコルを解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-agent-deployment-checklist"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェント導入チェックリスト
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/make-automation-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Make.com×生成AI自動化ガイド｜最初の1本を実装する手順【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/n8n-beginner-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                n8n入門ガイド｜初心者が業務自動化を最初の1本から実装する手順【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/power-automate-ai-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Power Automate×生成AI活用｜Microsoft環境の現場自動化レシピ集 | AIリブート
              </Link>
            </li>
          </ul>
        </section>

        {/* まとめ */}
        <motion.section
          id="article-summary"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              ワークフロー自動化は「API連携＋条件実行」でSaaS間の手作業をゼロにする仕組み。RPAより安定しやすく、ノーコードで始められる。
            </li>
            <li className="pl-1 marker:text-gray-500">
              Zapierは手軽さ・アプリ数が最大の強み。初めて使うなら最優先の選択肢。
            </li>
            <li className="pl-1 marker:text-gray-500">
              Makeはオペレーション課金でコスト予測がしやすく、複雑なフローの視覚的設計に強い。
            </li>
            <li className="pl-1 marker:text-gray-500">
              n8nはセルフホストでデータを社内に閉じられる唯一の選択肢。機密業務・大量処理に最適。
            </li>
            <li className="pl-1 marker:text-gray-500">
              最初の1本は最小2ステップ（トリガー→アクション）で完成させ、動作確認後に複雑化する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              DifyなどのAIエージェントをHTTP連携でフローに組み込めば、AI処理込みの業務自動化が実現できる。
            </li>
          </ul>
        </motion.section>

        {/* 次のアクション */}
        <motion.section
          id="cta"
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">次のアクション</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ワークフロー自動化の基礎が理解できたら、次のステップに進みましょう。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              今すぐ無料で登録する（30秒）
            </a>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              アカデミーTOPへ
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
