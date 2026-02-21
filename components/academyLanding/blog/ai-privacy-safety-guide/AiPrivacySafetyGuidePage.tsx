"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

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

const keywordTags = [
  "生成AI 個人情報 大丈夫",
  "ChatGPT セキュリティ 安全性",
  "AI 情報漏洩 対策",
  "ChatGPT 会社で使う 注意点",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "data-flow", label: "何が本当に危険？AIのデータの流れを理解する" },
  { id: "rule-1", label: "ルール1：個人を特定できる情報は入力しない" },
  { id: "rule-2", label: "ルール2：会社の機密情報は入力前に確認する" },
  { id: "rule-3", label: "ルール3：「学習に使わない」設定をオンにする" },
  { id: "rule-4", label: "ルール4：有料版と無料版の違いを知る" },
  { id: "rule-5", label: "ルール5：「SNS公開テスト」を習慣にする" },
  { id: "ng-ok-examples", label: "NG/OK入力例一覧" },
  { id: "enterprise-checklist", label: "企業でAIを導入するためのチェックリスト" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const toolPrivacyComparison = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    freeTraining: "デフォルトで学習に使用（オプトアウト可）",
    paidTraining: "Plus/Proも同様にオプトアウト可。Team/Enterpriseは学習対象外（契約で保証）",
    optOutSetting: "「Improve the model for everyone」をOFF",
    optOutLocation: "Settings → Data Controls",
    dataRetention: "削除後30日で完全削除",
    humanReview: "明記なし（安全性チェック目的の場合あり）",
    policyUrl: "https://openai.com/policies/",
    compliance: "SOC 2 Type 2 / ISO 27001 / ISO 27701",
  },
  {
    name: "Claude",
    company: "Anthropic",
    freeTraining: "デフォルトで学習に使用（2025年10月〜。オプトアウト可）",
    paidTraining: "Pro/Maxもオプトアウト可。Team/Enterpriseは学習対象外（商用契約で保証）",
    optOutSetting: "「Help improve Claude」をOFF",
    optOutLocation: "Settings → Privacy",
    dataRetention: "オプトアウト時は30日。オプトインの場合は最大5年（匿名化）",
    humanReview: "自動フィルタリングで機微データを除外。人手レビューの明示なし",
    policyUrl: "https://privacy.claude.com/en/",
    compliance: "SOC 2 Type 2",
  },
  {
    name: "Gemini",
    company: "Google",
    freeTraining: "デフォルトで学習に使用（オプトアウト可）",
    paidTraining: "Google One AI Premiumも同様。Workspace版は学習対象外",
    optOutSetting: "「Gemini Apps Activity」をOFF",
    optOutLocation: "プロフィール → Gemini Apps Activity",
    dataRetention: "OFF時も72時間保持。人手レビュー済みデータは最大3年間保持",
    humanReview: "あり（会話の一部を訓練されたレビュアーが確認）",
    policyUrl: "https://support.google.com/gemini/answer/13594961",
    compliance: "Google Cloud 各種認証（ISO 27001等）",
  },
] as const;

const optOutSteps = {
  chatgpt: [
    { step: 1, text: "ChatGPT にログインする" },
    { step: 2, text: "右上のプロフィールアイコンをクリック" },
    { step: 3, text: "「Settings（設定）」を選択" },
    { step: 4, text: "「Data Controls」をクリック" },
    { step: 5, text: "「Improve the model for everyone」のスイッチをOFFにする" },
    { step: 6, text: "「Done」で完了。全デバイスに即座に反映" },
  ],
  claude: [
    { step: 1, text: "claude.ai にログインする" },
    { step: 2, text: "左下の「Settings（設定）」を開く" },
    { step: 3, text: "「Privacy」タブを選択" },
    { step: 4, text: "「Help improve Claude」のスイッチをOFFにする" },
    { step: 5, text: "変更は即座に反映される" },
  ],
  gemini: [
    { step: 1, text: "gemini.google.com にアクセスする" },
    { step: 2, text: "プロフィールアイコンをタップ/クリック" },
    { step: 3, text: "「Gemini Apps Activity」を選択" },
    { step: 4, text: "「Turn off（オフにする）」を選択" },
    { step: 5, text: "必要に応じて「Turn off and delete activity」で過去データも削除" },
  ],
} as const;

const ngOkExamples = [
  {
    type: "ng" as const,
    label: "個人情報をそのまま入力",
    example: "田中太郎さん（090-1234-5678、東京都港区○○1-2-3）に送るメールを書いて",
    fix: "「取引先の担当者に送るお礼メール」のように個人情報を伏せて依頼する",
  },
  {
    type: "ng" as const,
    label: "社内の機密データを貼り付け",
    example: "この売上データ（実数値付き）を分析して。来期の事業計画に使います",
    fix: "数値をダミーに置き換えるか、エンタープライズ版で利用する",
  },
  {
    type: "ng" as const,
    label: "パスワードやAPIキーを含むコード",
    example: "このコードをレビューして（API_KEY=sk-xxxx が含まれたまま）",
    fix: "秘密情報を「YOUR_API_KEY」などのプレースホルダーに置き換える",
  },
  {
    type: "ok" as const,
    label: "一般的な文章作成の依頼",
    example: "取引先へのお礼メールの文面を作ってください。カジュアルすぎず、丁寧なトーンで",
    reason: "個人情報や機密情報を含まない一般的な依頼",
  },
  {
    type: "ok" as const,
    label: "公開情報に基づくリサーチ",
    example: "2026年の生成AI市場の動向について、主要なトレンドを3つ教えてください",
    reason: "公開情報の整理であり、機密性のある情報を含まない",
  },
  {
    type: "ok" as const,
    label: "匿名化済みのデータ分析",
    example: "以下のアンケート結果（数値のみ、回答者名なし）の傾向を分析してください",
    reason: "個人を特定できる情報が除去されており、安全",
  },
] as const;

const enterpriseChecklist = [
  "社内AI利用ガイドラインを策定・周知する",
  "使用するAIツールのデータポリシーを確認する",
  "入力禁止情報のカテゴリを明確にする（個人情報・顧客情報・営業秘密・未公開財務情報）",
  "エンタープライズ版（ChatGPT Team/Enterprise、Claude for Work等）の導入を検討する",
  "オプトアウト設定を全社員に案内する（無料版・個人有料版の場合）",
  "AI出力の社外公開前チェック体制を整える",
  "定期的にポリシーの更新を確認する（四半期に1回推奨）",
] as const;

export default function AiPrivacySafetyGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIに個人情報を入れても大丈夫？" },
          ]}
        />

        {/* ヘッダー */}
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
              <CopyAsMarkdownButton
                title="生成AIに個人情報を入れても大丈夫？｜安全に使うための5つのルール"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            生成AIに個人情報を入れても大丈夫？
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            安全に使うための5つのルール【2026年版】
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>

          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTに仕事のメールを書いてもらったけど、入力した内容ってどこかに保存されるの？」「会社の資料をAIに要約させたら情報漏洩にならない？」——生成AIを使い始めた多くの人が抱く不安です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            結論からお伝えします。<strong>正しく設定し、入力する情報を選べば、生成AIは安全に使えます。</strong>ただし「何も気にせず何でも入力してOK」ではありません。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、ChatGPT・Claude・Geminiの2026年2月時点のデータポリシーを正確に比較しながら、<strong>「何が危険で、何は安全か」</strong>の境界線を明確にします。オプトアウト設定の具体的な手順も、ツールごとにステップバイステップで説明します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              氏名・住所・電話番号など<strong>個人を特定できる情報は入力しない</strong>。匿名化・抽象化してから依頼する
            </li>
            <li className="pl-1 marker:text-gray-500">
              会社の機密情報はAIに入力する前に<strong>上司やセキュリティ部門に確認</strong>。エンタープライズ版なら契約で学習対象外
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPT・Claude・Geminiとも<strong>「学習に使わない」設定がある</strong>。今すぐオフにしよう（手順は記事内で解説）
            </li>
            <li className="pl-1 marker:text-gray-500">
              有料版の方が安全なのは事実。特に<strong>Team/Enterprise版は契約で学習利用が禁止</strong>されている
            </li>
            <li className="pl-1 marker:text-gray-500">
              入力前に<strong>「これがSNSに公開されても問題ないか？」</strong>と自問する習慣が最強のセキュリティ対策
            </li>
          </ul>
        </motion.section>

        {/* データの流れを理解する */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="data-flow" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            何が本当に危険？AIのデータの流れを理解する
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-700">
            「生成AIに入力した情報は、全世界に公開される」——これは<strong>誤解</strong>です。しかし「完全に安全」でもありません。まず、あなたが入力したデータがどう扱われるかを正しく理解しましょう。
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                step: "1. 入力",
                desc: "あなたがテキストを入力すると、データはインターネット経由でAI提供会社のサーバーに送信されます。",
              },
              {
                step: "2. 処理",
                desc: "サーバー上でAIモデルが回答を生成し、あなたに返送します。この時点では他のユーザーにデータが見えることはありません。",
              },
              {
                step: "3. 保存",
                desc: "会話履歴はあなたのアカウントに紐づいて保存されます。保存期間はサービスにより異なります（30日〜数年）。",
              },
              {
                step: "4. 学習（ここが問題）",
                desc: "デフォルト設定では、入力データがAIモデルの改善（学習）に使われる可能性があります。オプトアウトすれば防げます。",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-will-primary/10 text-sm font-bold text-will-primary">
                  {item.step.split(".")[0]}
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{item.step}</p>
                  <p className="mt-1 text-sm leading-7 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-semibold text-red-800">実際に起きたインシデント：Samsung社のケース（2023年）</p>
            <p className="mt-2 text-sm leading-7 text-red-900">
              2023年4月、Samsung半導体部門のエンジニアが社内の機密ソースコードや会議メモをChatGPTに入力するインシデントが発生。当時のデフォルト設定では入力データが学習に使われる仕様だったため、機密情報がOpenAIの学習パイプラインに取り込まれた可能性が指摘されました。Samsungはその後、社内での生成AI利用を全面禁止する通達を出しました。
            </p>
            <p className="mt-2 text-xs text-red-700">
              出典：
              <a href="https://www.darkreading.com/vulnerabilities-threats/samsung-engineers-sensitive-data-chatgpt-warnings-ai-use-workplace" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">
                Dark Reading（2023年4月）
              </a>
            </p>
          </div>

          <p className="mt-6 text-base leading-8 text-gray-700">
            このインシデントから学べる教訓は明確です。<strong>問題は「AIが危険」なのではなく「入力する情報の選択」と「設定の確認」を怠ったこと</strong>です。正しいルールを知っていれば、安全に活用できます。
          </p>
        </motion.section>

        {/* ルール1 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="rule-1" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ルール1：個人を特定できる情報（氏名・住所・電話番号）は入力しない
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-700">
            最も重要で、最もシンプルなルールです。<strong>氏名、住所、電話番号、メールアドレス、マイナンバーなど、個人を特定できる情報はAIに入力しない</strong>。これだけで、プライバシーリスクの大部分を回避できます。
          </p>

          <p className="mt-4 text-base leading-8 text-gray-700">
            「でも、メールの文面を作ってもらうときに名前が必要では？」と思うかもしれません。その場合は<strong>匿名化</strong>してください。
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-700">NG: そのまま入力</p>
              <p className="mt-3 rounded-lg bg-white p-3 text-sm leading-7 text-gray-700">
                &ldquo;株式会社ABC 営業部 田中太郎様（tanaka@abc.co.jp）に、2月25日のお打ち合わせについてリマインドメールを書いてください&rdquo;
              </p>
            </div>
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-700">OK: 匿名化して入力</p>
              <p className="mt-3 rounded-lg bg-white p-3 text-sm leading-7 text-gray-700">
                &ldquo;取引先の担当者に、来週の打ち合わせのリマインドメールを書いてください。丁寧だけど堅すぎないトーンで&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">入力を避けるべき情報の例</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-amber-900">
              <li>氏名・住所・電話番号・メールアドレス</li>
              <li>生年月日・マイナンバー・免許証番号</li>
              <li>クレジットカード番号・銀行口座情報</li>
              <li>健康診断結果・医療情報</li>
              <li>パスワード・APIキー・アクセストークン</li>
            </ul>
          </div>
        </motion.section>

        {/* ルール2 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="rule-2" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ルール2：会社の機密情報は入力前に上司に確認する
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-700">
            個人で使う場合と、仕事で使う場合では注意すべきポイントが違います。仕事で生成AIを使うとき、最も気をつけるべきは<strong>「会社の情報」の取り扱い</strong>です。
          </p>

          <p className="mt-4 text-base leading-8 text-gray-700">
            具体的に「入力してはいけない情報」を挙げます。
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { category: "顧客情報", examples: "顧客名簿、取引先の非公開情報、契約内容の詳細" },
              { category: "営業秘密", examples: "製品の設計図、製造プロセス、独自のアルゴリズム" },
              { category: "未公開財務情報", examples: "未発表の決算数値、M&A交渉の内容、投資計画" },
              { category: "人事情報", examples: "社員の評価データ、給与情報、採用候補者の個人情報" },
            ].map((item) => (
              <div key={item.category} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-sm font-bold text-gray-900">{item.category}</p>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.examples}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-base leading-8 text-gray-700">
            判断に迷ったら、<strong>「入力前に上司またはセキュリティ部門に確認する」</strong>のがベストです。多くの企業がAI利用ガイドラインの策定を進めています。自社にガイドラインがあるか確認してみましょう。
          </p>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">エンタープライズ版という選択肢</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              ChatGPT Team/Enterprise、Claude for Work（Team/Enterprise）、Gemini for Google Workspaceなどのビジネスプランでは、<strong>契約上「入力データをAIの学習に使用しない」ことが保証</strong>されています。会社でAIを本格的に活用するなら、エンタープライズ版の導入が最も安全な選択です。
            </p>
          </div>
        </motion.section>

        {/* ルール3：オプトアウト設定 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="rule-3" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ルール3：「学習に使わない」設定をオンにする——各ツールのオプトアウト手順
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPT・Claude・Geminiのいずれも、デフォルト設定では<strong>あなたの入力データがAIモデルの改善（学習）に使われる可能性があります</strong>。しかし、各ツールとも「学習に使わない」設定（オプトアウト）が用意されています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            <strong>今すぐ以下の手順で設定を変更しましょう。</strong>所要時間は各ツール1分程度です。
          </p>

          {/* ChatGPT */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900">ChatGPT のオプトアウト手順</h3>
            <div className="mt-4 space-y-3">
              {optOutSteps.chatgpt.map((item) => (
                <div key={item.step} className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-will-primary/10 text-xs font-bold text-will-primary">
                    {item.step}
                  </span>
                  <p className="text-sm leading-7 text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm leading-7 text-amber-900">
                <strong>補足：</strong>「Temporary Chat（一時チャット）」モードを使えば、個別のチャットを学習対象外にすることもできます。チャット画面上部のアイコンから切り替え可能です。
              </p>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              参考：
              <a href="https://help.openai.com/en/articles/7730893-data-controls-faq" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                OpenAI Data Controls FAQ
              </a>
            </p>
          </div>

          {/* Claude */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900">Claude のオプトアウト手順</h3>
            <div className="mt-4 space-y-3">
              {optOutSteps.claude.map((item) => (
                <div key={item.step} className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-will-primary/10 text-xs font-bold text-will-primary">
                    {item.step}
                  </span>
                  <p className="text-sm leading-7 text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm leading-7 text-amber-900">
                <strong>注意：</strong>Anthropicは2025年10月にポリシーを変更し、無料・Pro・Maxプランではデフォルトで学習に使用される設定になりました。以前からClaudeを使っていた方も、設定を再確認してください。
              </p>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              参考：
              <a href="https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                Anthropic: Is my data used for model training?
              </a>
            </p>
          </div>

          {/* Gemini */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900">Gemini のオプトアウト手順</h3>
            <div className="mt-4 space-y-3">
              {optOutSteps.gemini.map((item) => (
                <div key={item.step} className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-will-primary/10 text-xs font-bold text-will-primary">
                    {item.step}
                  </span>
                  <p className="text-sm leading-7 text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm leading-7 text-red-900">
                <strong>重要な注意点：</strong>Geminiでは「Gemini Apps Activity」をOFFにしても、安全性チェック目的で会話の一部が<strong>人間のレビュアーによって確認される可能性</strong>があります。レビュー対象となったデータは<strong>最大3年間保持</strong>されます。機密性の高い情報はGeminiの個人プランに入力しないことを推奨します。
              </p>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              参考：
              <a href="https://support.google.com/gemini/answer/13594961" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                Google: Gemini Apps のプライバシーに関する通知
              </a>
            </p>
          </div>
        </motion.section>

        {/* ルール4：有料版と無料版の違い */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="rule-4" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ルール4：有料版と無料版のデータポリシーの違いを知る
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-700">
            「有料版の方が安全」とよく言われますが、具体的にどう違うのでしょうか？2026年2月時点の各ツールのデータポリシーを比較します。
          </p>

          {/* 比較テーブル */}
          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm leading-6 text-gray-700 sm:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-900">項目</th>
                    {toolPrivacyComparison.map((tool) => (
                      <th key={tool.name} className="px-4 py-3 font-semibold text-gray-900">
                        {tool.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 font-medium text-gray-900">無料版の学習利用</td>
                    {toolPrivacyComparison.map((tool) => (
                      <td key={tool.name} className="px-4 py-4 text-sm">{tool.freeTraining}</td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-4 font-medium text-gray-900">有料版の学習利用</td>
                    {toolPrivacyComparison.map((tool) => (
                      <td key={tool.name} className="px-4 py-4 text-sm">{tool.paidTraining}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-gray-900">オプトアウト設定名</td>
                    {toolPrivacyComparison.map((tool) => (
                      <td key={tool.name} className="px-4 py-4 text-sm font-mono text-xs">{tool.optOutSetting}</td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-4 font-medium text-gray-900">設定場所</td>
                    {toolPrivacyComparison.map((tool) => (
                      <td key={tool.name} className="px-4 py-4 text-sm">{tool.optOutLocation}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-gray-900">データ保持期間</td>
                    {toolPrivacyComparison.map((tool) => (
                      <td key={tool.name} className="px-4 py-4 text-sm">{tool.dataRetention}</td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-4 font-medium text-gray-900">人間によるレビュー</td>
                    {toolPrivacyComparison.map((tool) => (
                      <td key={tool.name} className="px-4 py-4 text-sm">{tool.humanReview}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-gray-900">主な認証</td>
                    {toolPrivacyComparison.map((tool) => (
                      <td key={tool.name} className="px-4 py-4 text-sm">{tool.compliance}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            ※ 2026年2月22日時点の情報です。最新の内容は各サービスの公式ページでご確認ください。
          </p>
          <p className="mt-1 text-xs text-gray-500">
            出典：
            <a href="https://openai.com/policies/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">OpenAI Privacy</a>
            ｜<a href="https://privacy.claude.com/en/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Anthropic Privacy</a>
            ｜<a href="https://support.google.com/gemini/answer/13594961" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Gemini Privacy</a>
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">プランごとの安全性レベル</h3>
          <div className="mt-4 space-y-3">
            {[
              {
                level: "最も安全",
                color: "border-emerald-200 bg-emerald-50",
                textColor: "text-emerald-700",
                badgeColor: "bg-emerald-100 text-emerald-800",
                desc: "エンタープライズ版（ChatGPT Team/Enterprise、Claude for Work、Gemini for Workspace）",
                detail: "契約でデータの学習利用が禁止。管理者が組織全体の設定を一元管理。コンプライアンス認証あり。",
              },
              {
                level: "安全（設定が必要）",
                color: "border-blue-200 bg-blue-50",
                textColor: "text-blue-700",
                badgeColor: "bg-blue-100 text-blue-800",
                desc: "有料版＋オプトアウト設定済み（ChatGPT Plus/Pro、Claude Pro/Max）",
                detail: "学習利用をオフに設定済み。ただし保護はユーザー自身の設定に依存（契約上の保証はなし）。",
              },
              {
                level: "注意が必要",
                color: "border-amber-200 bg-amber-50",
                textColor: "text-amber-700",
                badgeColor: "bg-amber-100 text-amber-800",
                desc: "無料版・有料版（デフォルト設定のまま）",
                detail: "入力データが学習に使われる可能性あり。オプトアウト設定を強く推奨。",
              },
            ].map((item) => (
              <div key={item.level} className={`rounded-xl border p-5 ${item.color}`}>
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${item.badgeColor}`}>{item.level}</span>
                  <p className={`text-sm font-bold ${item.textColor}`}>{item.desc}</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 記事中盤CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-privacy-safety-guide" />
        </motion.section>

        {/* ルール5 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="rule-5" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ルール5：入力前に「SNSに公開されても問題ないか？」テストをする
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-700">
            5つのルールの中で、最も実践的で最も強力なのがこの習慣です。AIにテキストを入力する前に、<strong>「この内容がもしSNS（Xなど）に公開されたとしたら、自分や会社に問題が起きるか？」</strong>と自問してください。
          </p>

          <p className="mt-4 text-base leading-8 text-gray-700">
            答えが「問題ない」なら、そのまま入力してOKです。「まずい」と感じたなら、その部分を匿名化するか、入力を控えましょう。
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                emoji: "1",
                title: "入力したい内容を頭に浮かべる",
                desc: "メール文面、データ分析の依頼、コードレビューなど",
              },
              {
                emoji: "2",
                title: "「これがSNSに流出したら？」と自問する",
                desc: "自分・同僚・会社・取引先に問題が生じないか",
              },
              {
                emoji: "3",
                title: "問題がなければ入力。あればは匿名化",
                desc: "名前をA氏に、数値をダミーに、固有名を一般名に",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-will-primary/10 text-sm font-bold text-will-primary">
                  {item.emoji}
                </div>
                <p className="mt-3 text-sm font-bold text-gray-900">{item.title}</p>
                <p className="mt-2 text-xs leading-6 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">なぜ「SNS公開テスト」が有効なのか？</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              技術的な知識がなくても、「公開されて困るかどうか」は直感的に判断できます。難しいポリシー文書を読まなくても、この1つの質問が<strong>最も確実なフィルター</strong>として機能します。チームで共有するルールとしても、覚えやすく実践しやすいのが利点です。
            </p>
          </div>
        </motion.section>

        {/* NG/OK 入力例一覧 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ng-ok-examples" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            NG/OK入力例一覧——具体的に何がダメで何が安全か
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-700">
            ここまでのルールを踏まえて、実際の入力例で「NG」と「OK」を整理します。
          </p>

          <div className="mt-8 space-y-4">
            {ngOkExamples.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 p-5 ${
                  item.type === "ng"
                    ? "border-red-200 bg-red-50/50"
                    : "border-emerald-200 bg-emerald-50/50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-bold ${
                      item.type === "ng"
                        ? "bg-red-100 text-red-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {item.type === "ng" ? "NG" : "OK"}
                  </span>
                  <p className="text-sm font-bold text-gray-900">{item.label}</p>
                </div>
                <div className="mt-3 rounded-lg bg-white p-3">
                  <p className="text-sm leading-7 text-gray-700">{item.example}</p>
                </div>
                {item.type === "ng" && "fix" in item && (
                  <div className="mt-3 flex gap-2">
                    <span className="shrink-0 text-xs font-bold text-emerald-700">改善策：</span>
                    <p className="text-xs leading-6 text-gray-700">{item.fix}</p>
                  </div>
                )}
                {item.type === "ok" && "reason" in item && (
                  <div className="mt-3 flex gap-2">
                    <span className="shrink-0 text-xs font-bold text-emerald-700">安全な理由：</span>
                    <p className="text-xs leading-6 text-gray-700">{item.reason}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* 企業チェックリスト */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="enterprise-checklist" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            企業でAIを導入するためのチェックリスト
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-700">
            個人の注意だけでなく、組織としてのルール整備も重要です。経済産業省・総務省が2025年に公表した「AI事業者ガイドライン v1.1」でも、AI利用者（企業）に対してプライバシー保護の取り組みが求められています。
          </p>

          <div className="mt-6 space-y-3">
            {enterpriseChecklist.map((item, i) => (
              <div key={i} className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-gray-300 bg-gray-50 text-xs text-gray-500">
                  {i + 1}
                </div>
                <p className="text-sm leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-gray-500">
            参考：
            <a
              href="https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20240419_report.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              経済産業省 AI事業者ガイドライン
            </a>
          </p>
        </motion.section>

        {/* FAQ */}
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
          <dl className="mt-6 space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                <dt className="text-base font-bold text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：正しく知れば、安全に使える
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            生成AIを安全に使うための5つのルールを振り返りましょう。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1"><strong>個人を特定できる情報は入力しない</strong>——匿名化してから依頼する</li>
            <li className="pl-1"><strong>会社の機密情報は入力前に上司に確認</strong>——エンタープライズ版が最も安全</li>
            <li className="pl-1"><strong>「学習に使わない」設定をオンにする</strong>——ChatGPT・Claude・Geminiすべてに設定がある</li>
            <li className="pl-1"><strong>有料版と無料版のデータポリシーの違いを理解する</strong>——Team/Enterpriseは契約で保護</li>
            <li className="pl-1"><strong>「SNS公開テスト」を習慣にする</strong>——入力前の1秒の自問が最強のセキュリティ</li>
          </ol>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「便利だけど怖い」——その感覚は間違っていません。しかし、<strong>正しい知識と設定があれば、生成AIは安全に、そして大きな価値をもたらすツール</strong>になります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            まずは今日、使っているツールのオプトアウト設定を確認することから始めてみてください。この1分の作業が、あなたのAI活用を一段安心なものにします。
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        {/* 関連リンク */}
        <nav id="related-links" className="mt-14 scroll-mt-28 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-gray-900">関連リンク</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-will-primary underline hover:text-will-dark">
                ChatGPT vs Claude vs Gemini 初心者ガイド——3つのAIツールの使い分け
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-will-primary underline hover:text-will-dark">
                生成AIを「使えるようになった人」がやっていた5つのこと
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-will-primary underline hover:text-will-dark">
                ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年最新比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-will-primary underline hover:text-will-dark">
                ChatGPTの始め方——スマホで5分で登録完了する手順
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
