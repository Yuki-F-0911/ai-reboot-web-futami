"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout } from "@/components/blog/ArticleBody";

type FAQItem = {
  question: string;
  answer: string;
};

type AiTranscriptionGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "AI 文字起こし アプリ 比較",
  "Notta 使い方",
  "Clova Note 後継",
  "Whisper 文字起こし",
  "録音 自動 テキスト化",
] as const;

const tocItems = [
  { id: "summary", label: "結論: どれを選ぶべきか" },
  { id: "what-you-can-do", label: "AI文字起こしでできること" },
  { id: "comparison", label: "5サービス比較表" },
  { id: "free-vs-paid", label: "無料枠と有料プランの価値" },
  { id: "japanese-accuracy", label: "日本語精度の実態" },
  { id: "minutes-workflow", label: "議事録自動生成フロー" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
  { id: "academy-cta", label: "次の学習ステップ" },
  { id: "line-cta-final", label: "LINEで継続学習する" },
] as const;

const capabilityRows = [
  {
    useCase: "リアルタイム文字起こし",
    value: "会議中に要点を見失いにくくなる。聞き漏れ補完にも使える。",
    caution: "話者重なりや雑音があると誤認識が増える。",
  },
  {
    useCase: "録音ファイルの自動テキスト化",
    value: "インタビュー・講義・商談録音をまとめて処理できる。",
    caution: "録音品質が低いと固有名詞の修正コストが増える。",
  },
  {
    useCase: "Zoom/Meet/Teams連携",
    value: "会議終了後の議事録作成時間を短縮しやすい。",
    caution: "プランによって自動参加や分数上限が異なる。",
  },
] as const;

const comparisonRows = [
  {
    service: "Notta",
    freePlan: "月120分",
    paidPlan: "Pro $8.17/月〜（年払い）",
    integrations: "Zoom / Google Meet / Teams",
    japanese: "高め（ただし固有名詞は要確認）",
    bestFor: "日本語会議・商談・講義を幅広く扱う個人/法人",
  },
  {
    service: "LINE WORKS AiNote（旧Clova Note後継）",
    freePlan: "月300分（1件60分）",
    paidPlan: "SOLO 1,200円/月 または 9,600円/年",
    integrations: "Zoom / Google Meet / Teams / Webex / LINE WORKS",
    japanese: "高め（国内会議運用向け）",
    bestFor: "LINE WORKS利用中の法人、国内会議ログ管理",
  },
  {
    service: "Whisper（OSS/API）",
    freePlan: "OSS利用はソフト費0円（環境コスト別）",
    paidPlan: "API: $3〜$6 / 1M input tokens",
    integrations: "標準連携なし（自前実装）",
    japanese: "条件次第で高精度、運用設計依存",
    bestFor: "開発体制があり、要件に合わせて組み込みたい法人",
  },
  {
    service: "Otter.ai",
    freePlan: "月300分（1会話30分）",
    paidPlan: "Pro $16.99/月〜（月払い）",
    integrations: "Zoom / Google Meet / Teams（プラン差あり）",
    japanese: "[要確認: 公式記載に差分あり]",
    bestFor: "英語中心の会議・多国籍チーム",
  },
  {
    service: "Google Recorder",
    freePlan: "Pixel端末で実質無料",
    paidPlan: "なし",
    integrations: "標準連携なし（端末録音アプリ）",
    japanese: "端末・OS依存",
    bestFor: "個人のメモ・インタビュー下書き用途",
  },
] as const;

const upgradeSignals = [
  {
    trigger: "月あたり会議・録音が3時間を超える",
    reason: "無料枠の分数上限に達しやすく、継続運用が不安定になる。",
  },
  {
    trigger: "2人以上で議事録を共有する",
    reason: "権限管理、履歴管理、連携機能が必要になり無料運用では不足しやすい。",
  },
  {
    trigger: "Zoom/Meet/Teams後に自動で記録を回したい",
    reason: "連携や自動化は有料プランの方が設計しやすい。",
  },
  {
    trigger: "顧客向け議事録を提出する",
    reason: "精度確認と再編集工数を減らすには有料の話者分離・出力機能が有効。",
  },
] as const;

const accuracyCheckpoints = [
  {
    point: "方言・早口",
    detail:
      "標準語前提のモデルでは誤認識が増える。会議開始時の自己紹介パートを辞書学習や補正ルールに流用すると修正負荷を下げやすい。",
  },
  {
    point: "専門用語・固有名詞",
    detail:
      "人名、社名、製品名は誤変換が起きやすい。議事録配布前に「固有名詞だけ先にチェックする工程」を固定すると品質が安定する。",
  },
  {
    point: "話者分離（speaker diarization）",
    detail:
      "マイク1本の遠距離録音では話者分離が崩れやすい。会議室マイクの位置調整や、発話が重なった箇所の手動補正を前提にする。",
  },
] as const;

const workflowSteps = [
  {
    step: "1. 音声を収集する",
    description:
      "Zoom/Meet/Teams連携または録音ファイルアップロードで文字起こしを実行。外部参加者がいる会議では録音同意を事前に明示する。",
  },
  {
    step: "2. 文字起こしを一次校正する",
    description:
      "固有名詞、数値、日付だけ先に確認する。ここを飛ばすと要約段階で誤情報が固定化されやすい。",
  },
  {
    step: "3. ChatGPTで議事録テンプレ化する",
    description:
      "「決定事項」「未決事項」「担当者」「期限」の4項目を固定フォーマットで出力させると、会議ごとの品質ぶれを抑えやすい。",
  },
  {
    step: "4. 最終レビューして共有する",
    description:
      "事実確認後にNotion/Slack/メールへ共有。自動送信前に責任者を1人決める運用が、誤配布リスクを下げる。",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";

function LineCtaBox({
  className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6",
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-green-900">LINEで毎週AI知識を配信中</p>
      <p className="mt-3 text-sm leading-7 text-green-900">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          今すぐ無料で登録する（30秒）
        </a>
      </div>
    </section>
  );
}

export default function AiTranscriptionGuidePage({ faqItems }: AiTranscriptionGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI文字起こしアプリ比較2026" },
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
                title="AI文字起こしアプリ比較2026｜Notta・Clova Note後継・Whisper・Otter・Google Recorderの選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI文字起こしアプリ比較2026｜Notta・Clova Note後継・Whisper・Otter・Google Recorderの選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI文字起こしツールは、会議ログを残すだけの道具ではなく、議事録作成フロー全体を短縮する基盤です。2026年時点では、Notta・LINE WORKS
            AiNote（旧Clova Note後継）・Whisper・Otter.ai・Google Recorderで、無料枠、連携、運用負荷が大きく異なります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では「リアルタイム」「録音ファイル」「Zoom/Meet/Teams連携」「日本語精度」「無料と有料の境界」を軸に比較し、最後にChatGPTを使った議事録自動生成まで一連の運用を整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            価格・仕様の確認日: 2026-02-20（変動情報は導入前に再確認してください）
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/ai-transcription-guide/slide-01.png"
              alt="AI文字起こしアプリ比較の概要"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/notebooklm-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            NotebookLM活用ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-for-non-engineers" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            非エンジニア向けAI活用
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="結論: 文字起こしツールは「連携要件」と「校正負荷」で選ぶ"
            items={[
              "日本語会議中心なら Notta または AiNote を起点に比較するのが実務的。",
              "Clova Note は 2025-07-31 に終了済み。2026年比較では後継の LINE WORKS AiNote を見る。",
              "Whisper は高い柔軟性があるが、Zoom/Meet/Teams連携や運用画面は自前実装が前提。",
              "どのツールでも「文字起こしをそのまま配布」は非推奨。固有名詞・数値の校正工程を固定する。",
            ]}
          />
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="what-you-can-do"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-you-can-do">
            AI文字起こしでできること（リアルタイム・録音ファイル・会議連携）
          </ArticleH2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AI文字起こしの価値は、単なる変換速度ではなく、会議後のアクション整理までを短い時間で回せる点です。特に法人運用では、会議ログの検索性と共有速度が成果に直結します。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">機能</th>
                <th className="py-4 px-6 font-bold text-gray-900">業務価値</th>
                <th className="py-4 px-6 font-bold text-gray-900">注意点</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {capabilityRows.map((row) => (
                <tr key={row.useCase} className="hover:bg-gray-50/50 transition-colors align-top">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.useCase}</th>
                  <td className="py-4 px-6 text-gray-700">{row.value}</td>
                  <td className="py-4 px-6 text-gray-700">{row.caution}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            会議向け導入を考える場合は、
            <Link
              href="/academy/blog/ai-meeting-tools-comparison"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI議事録ツール比較
            </Link>
            もあわせて確認すると、録音同意や社内ルール設計まで含めて検討しやすくなります。
          </p>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox />
        </section>

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="comparison">
            主要5サービス比較（Notta / AiNote / Whisper / Otter / Google Recorder）
          </ArticleH2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            価格だけで選ぶと、導入後に連携不足や校正工数で逆にコストが増えるケースが出ます。比較では無料枠、会議連携、日本語運用の現実を同時に確認してください。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-4 font-bold text-gray-900">サービス</th>
                <th className="py-4 px-4 font-bold text-gray-900">無料枠</th>
                <th className="py-4 px-4 font-bold text-gray-900">有料価格目安</th>
                <th className="py-4 px-4 font-bold text-gray-900">Zoom/Meet/Teams</th>
                <th className="py-4 px-4 font-bold text-gray-900">日本語運用</th>
                <th className="py-4 px-4 font-bold text-gray-900">向いている用途</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <tr key={row.service} className="hover:bg-gray-50/50 transition-colors align-top">
                  <th className="py-4 px-4 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.service}</th>
                  <td className="py-4 px-4 text-gray-700">{row.freePlan}</td>
                  <td className="py-4 px-4 text-gray-700">{row.paidPlan}</td>
                  <td className="py-4 px-4 text-gray-700">{row.integrations}</td>
                  <td className="py-4 px-4 text-gray-700">{row.japanese}</td>
                  <td className="py-4 px-4 text-gray-700">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            注記: Clova Noteは終了済みのため、現行比較は LINE WORKS AiNote を基準に記載。
          </p>
          <p className="mt-2 text-xs leading-6 text-gray-500">
            注記: Otterの言語サポートは公式ヘルプ内で記載差分があるため、導入前に最新ドキュメントを再確認してください。
          </p>
        </motion.section>

        <motion.section
          id="free-vs-paid"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="free-vs-paid">無料で使える範囲と有料プランの価値</ArticleH2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            無料プランは「相性確認」には十分ですが、継続運用では分数上限と連携制限が先にボトルネックになります。有料化の判断は、利用時間ではなく業務インパクトで決めると失敗しにくくなります。
          </p>
          <ArticleH3>有料移行を検討する4つのサイン</ArticleH3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {upgradeSignals.map((signal) => (
              <li key={signal.trigger} className="pl-1 marker:text-gray-500">
                <strong className="text-gray-900">{signal.trigger}</strong>：{signal.reason}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            予算設計まで含めて導入判断したい場合は、
            <Link
              href="/academy/blog/corporate-ai-adoption-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              法人向けAI導入ガイド
            </Link>
            で組織設計の観点を先に整理しておくと、ツール選定が速くなります。
          </p>
        </motion.section>

        <motion.section
          id="japanese-accuracy"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="japanese-accuracy">日本語精度の実態（方言・専門用語・話者分離）</ArticleH2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            どのサービスも「高精度」を訴求しますが、公式に公開される日本語WER/CERは限定的です。実務では、モデル性能そのものより録音条件と校正フローの差が品質差になります。
          </p>
          <div className="mt-6 grid gap-4">
            {accuracyCheckpoints.map((item) => (
              <section key={item.point} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.point}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <Callout type="info" title="精度より運用設計が重要">
            第三者の実利用者レビューでも「初稿生成は速いが、提出前の確認は必須」という傾向が共通しています。精度議論を数値だけで終わらせず、運用ルールまで設計することが現実的です。
          </Callout>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            要約品質を上げるプロンプト設計は、
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレート集
            </Link>
            を参考にしてください。
          </p>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </section>

        <motion.section
          id="minutes-workflow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="minutes-workflow">
            議事録自動生成との組み合わせ（ChatGPT等で要約）
          </ArticleH2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            文字起こしの次に行うべきは、要約そのものではなく「要約前のチェック」です。誤変換を直してから要約するだけで、議事録の再編集時間を大きく下げられます。
          </p>
          <div className="mt-6 grid gap-4">
            {workflowSteps.map((item) => (
              <section key={item.step} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.step}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
              </section>
            ))}
          </div>
          <ArticleH3>議事録要約プロンプト例</ArticleH3>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-7 text-gray-700">
あなたは会議議事録作成アシスタントです。
以下の文字起こしテキストを、次の形式で整理してください。

1. 決定事項
2. 未決事項
3. 担当者と期限
4. 次回までのアクション

制約:
- 固有名詞は原文優先
- 推測で補わない
- 各項目は箇条書きで簡潔に
          </pre>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            会議ファシリテーションまで含めて改善する場合は、
            <Link
              href="/academy/blog/ai-presentation-workflow"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIでプレゼン資料を効率化するワークフロー
            </Link>
            もあわせて活用できます。
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
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        <motion.section
          id="related-links"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 mb-6 text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            関連記事
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li>
              <Link href="/academy/blog/ai-meeting-tools-comparison" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AI議事録ツール比較2026｜会議用途での選び方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                仕事で使えるプロンプトテンプレート集
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                企業のAI導入ガイド｜定着までの進め方
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-floating"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold">AI活用の判断軸とキャリア設計を同時に整える</h2>
          <p className="mt-4 text-sm leading-7 text-gray-300">
            AIリブートアカデミーでは、特定ツールの操作習得だけに偏らず、次の3本柱で学習プロセスを設計しています。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-300">
            <li className="pl-1 marker:text-gray-400">生成AI活用力: 実務で使えるAI活用の型を体系化する</li>
            <li className="pl-1 marker:text-gray-400">
              自己理解・キャリアデザイン: AIを鏡に強みと価値観を言語化し、次の役割を設計する
            </li>
            <li className="pl-1 marker:text-gray-400">仲間と共に学ぶ環境: 対話と協働で実践を継続し、変化を定着させる</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-gray-300">
            文字起こしツールの選定をきっかけに、業務設計とキャリアの両方を更新したい方は、学習プロセス全体の見直しが有効です。
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl bg-will-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-will-primary/90 active:scale-[0.98]"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              他の記事も読む
            </Link>
          </div>
        </motion.section>

        <section id="line-cta-final" className="mt-14">
          <LineCtaBox />
        </section>
      </article>
    </main>
  );
}
