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

type AiPortfolioGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const artifactTypes = [
  {
    title: "プロンプト集（業務特化型）",
    description:
      "「どんな業務に使えるか」が伝わるプロンプトをカテゴリ別にまとめたもの。メール返信、会議アジェンダ作成、レポート下書きなど業務名を明記することが重要です。",
    point: "成果の再現性が高く、非エンジニアでも作成・公開できます。",
  },
  {
    title: "業務自動化フロー",
    description:
      "Make・Zapier・n8nで構築したワークフローのスクリーンショット＋手順書。「どんなトリガーで何が動くか」をREADMEや説明文で明示すると評価されやすくなります。",
    point: "社内での再現や転用のしやすさが、実務力の証拠になります。",
  },
  {
    title: "分析ダッシュボード",
    description:
      "ChatGPTやClaude、Notionデータベースと連携した集計・可視化の実装例。実データを使う場合は個人情報・機密情報を必ず匿名化・ダミー化してから公開します。",
    point: "課題→分析設計→解釈のフローを書くと意思決定支援の文脈が伝わります。",
  },
  {
    title: "生成AIで制作したコンテンツ",
    description:
      "AI支援で制作した記事、提案資料、図解スライドなど。「AIが生成した初稿にどんな編集を加えたか」を添えると、品質担保の判断力が伝わります。",
    point: "最終成果物だけでなく「プロセスの記録」が差別化になります。",
  },
  {
    title: "Notionテンプレート・業務設計ドキュメント",
    description:
      "自社や副業先で整備したAI活用の運用ルール、業務フロー、チェックリストをNotionでテンプレート化したもの。再利用性が高く、導入支援の文脈で評価されます。",
    point: "AIの使い方を「組織に広げる力」を証明できます。",
  },
] as const;

const sceneItems = [
  {
    scene: "転職活動",
    focus: "課題→手法→数値成果の構造で記録",
    details: [
      "採用担当者が知りたいのは「何を改善したか」ではなく「どれだけ改善したか」。作業時間の短縮率、件数増加、品質指標など数値で記録します。",
      "職務経歴書の「AI活用実績」欄にポートフォリオURLを添付するのが一般的。GitHubのREADMEかNotionページが主流です。",
      "「AIを使った」より「この業務課題をAIでどう解決したか」に書き直すと、面接での説明も一貫します。",
    ],
  },
  {
    scene: "副業・フリーランス",
    focus: "再現性と即戦力感を示す成果物",
    details: [
      "発注者は「自分の業務に使えるか」を最初に判断します。成果物に「前提条件・使用ツール・設定手順」をセットで記録するのが有効です。",
      "過去の案件実績は守秘義務に配慮して匿名化・抽象化し、「どんな種類の仕事をしたか」だけ公開する形式が現実的です。",
      "ライティング支援・データ整理・自動化設計など、副業の種類に合わせてポートフォリオの構成を変えます。",
    ],
  },
  {
    scene: "社内評価・昇進",
    focus: "チームへの展開可能性を示す",
    details: [
      "個人の業務改善だけでなく「他の人でも再現できる手順書」があると、評価される場面が増えます。",
      "月次レポートや業務報告に「AI活用セクション」を設けて定点観測形式で記録すると、年次評価に活用しやすくなります。",
      "上司や部門長への提案時は「試算コスト削減額・時間短縮」を先に提示し、後から成果物の詳細を説明する順序が通りやすいです。",
    ],
  },
] as const;

const publishSteps = [
  {
    platform: "GitHub",
    use: "プロンプト集・自動化スクリプト・分析コードの公開",
    howto:
      "リポジトリを作成し、README.mdに「背景・課題・構成・使い方・成果」の5項目を記載。機密情報が入っていないか公開前にdiffを確認します。",
    caution: "APIキーや会社情報が混入していないか必ずチェック。.envファイルは.gitignoreに追加します。",
  },
  {
    platform: "Notion",
    use: "業務フロー・テンプレート・デザイン系ポートフォリオの公開",
    howto:
      "ページを「Public」設定にしてURLを共有。ページ内に目次・成果サマリー・使用ツールを上部に置くと、閲覧者が内容をすぐ把握できます。",
    caution: "Notionはリンクを知っている人全員が閲覧できる点に注意。個人情報・社名・取引先名は削除または匿名化します。",
  },
] as const;

const portfolioSteps = [
  {
    step: "Step 1",
    title: "実績の棚卸しをする",
    detail:
      "「AIを使った業務」を過去3〜6ヶ月で書き出します。プロンプト設計、自動化、分析補助、資料作成のどれに当てはまるかカテゴリ分けします。量より「課題と成果が記録できるもの」を優先します。",
  },
  {
    step: "Step 2",
    title: "課題→手法→成果の構造で記録する",
    detail:
      "「ChatGPTを使って議事録を自動化しました」ではなく「週4時間かかっていた議事録作成を15分に短縮（プロンプト設計＋Zapier連携）」という形式で書き直します。この構造が評価の基準になります。",
  },
  {
    step: "Step 3",
    title: "最低3つの成果物を選ぶ",
    detail:
      "ジャンルが異なる3成果物（例：プロンプト集・自動化フロー・業務設計ドキュメント）を選ぶと、対応範囲の広さが伝わります。完成度が高い1点より、目的が明確な3点のほうが評価されやすい傾向があります。",
  },
  {
    step: "Step 4",
    title: "プラットフォームを選んで公開する",
    detail:
      "コード・プロンプトはGitHub、テンプレート・フローはNotionが主流。両方用意してURLを1ページにまとめると、転職・副業・社内説明のどの場面でも出しやすくなります。",
  },
  {
    step: "Step 5",
    title: "更新サイクルを設計する",
    detail:
      "月1回15分の「ポートフォリオ更新タイム」を設定して習慣化します。新しい成果物を追加するだけでなく、既存成果物の「数値」や「手順」も定期的に見直すと、活動の継続性が伝わります。",
  },
] as const;

const keywordTags = ["AI ポートフォリオ 作り方", "AIスキル 転職 証明", "生成AI 実績 まとめ方"] as const;

const tocItems = [
  { id: "why-just-learning-isnt-enough", label: "「AIを学んだ」だけでは評価されない理由" },
  { id: "portfolio-artifacts", label: "AIポートフォリオに入れるべき成果物の種類" },
  { id: "scene-based-presentation", label: "転職・副業・社内評価、シーン別の見せ方" },
  { id: "how-to-publish", label: "GitHubとNotionで公開する方法" },
  { id: "portfolio-5steps", label: "ポートフォリオ作成の5ステップ" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function AiPortfolioGuidePage({ faqItems }: AiPortfolioGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIポートフォリオ作り方" },
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
                title="AIスキルのポートフォリオ作り方2026｜転職・副業・社内評価につながる実績のまとめ方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIスキルのポートフォリオ作り方2026｜転職・副業・社内評価につながる実績のまとめ方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIを学んでいる」と伝えても、転職・副業・社内評価に結びつくのは<strong>成果物の記録がある</strong>ときだけです。
            この記事では、ポートフォリオに含める成果物の種類、シーン別の見せ方、GitHubとNotionでの公開方法を5ステップで整理します。
            まず「過去3ヶ月でAIを使った業務」を1つ書き出し、そこから構造化するのが最短ルートです。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* H2-1: なぜ学習だけでは評価されないのか */}
        <motion.section
          id="why-just-learning-isnt-enough"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「AIを学んだ」だけでは評価されない理由
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            学習の証明と実務の証明は別物です。「使える」を見せるには、課題と成果がセットの記録が必要になります。
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              ChatGPTを毎日使っている、動画で生成AIを学んだ、資格を取得した。これらは学習の証拠にはなりますが、
              転職・副業・社内評価の文脈では「どんな課題をどう解決したか」の記録がなければ実力の判断材料にならないのが現実です。
            </p>
            <p>
              採用担当者や副業の発注者が知りたいのは「ツールを知っているか」ではありません。
              「この人に業務を渡したとき、どんな成果が出るか」です。その判断材料になるのが成果物の記録——いわゆるポートフォリオです。
            </p>
            <p>
              2026年時点でも、生成AIを「何らかの形で使っている」社会人が増えているという調査・報告があります。差がつくのは
              <strong>「課題→手法→成果」の構造で記録できているかどうか</strong>です。
              メール対応を時短した、会議資料の下書きを15分で作れるようになった、こうした記録が積み重なってポートフォリオになります。
            </p>
            <p>
              AI学習のロードマップについては
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ
              </Link>
              で詳しく解説しています。学習の進め方と並行して、記録の習慣を始めるのが効果的です。
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">学習証明と実務証明の違い</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm leading-7 text-gray-700">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-3 pr-4 font-semibold text-gray-900">種類</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">例</th>
                    <th className="py-3 pl-4 font-semibold text-gray-900">評価者の判断材料になるか</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 align-top">
                    <td className="py-4 pr-4 font-semibold text-gray-900">学習証明</td>
                    <td className="py-4 px-4">資格取得、受講履歴、YouTube視聴</td>
                    <td className="py-4 pl-4">基礎知識の確認にはなるが限定的</td>
                  </tr>
                  <tr className="border-b border-gray-200 align-top">
                    <td className="py-4 pr-4 font-semibold text-gray-900">実務証明</td>
                    <td className="py-4 px-4">業務課題をAIで解決した記録（成果物＋数値）</td>
                    <td className="py-4 pl-4">「この人に任せたらどうなるか」が判断できる</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* LINE CTA #1 */}
        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-green-800">
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
            LINEで週1AI通信を受け取る（無料）
          </a>
        </motion.section>

        {/* H2-2: 成果物の種類 */}
        <motion.section
          id="portfolio-artifacts"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIポートフォリオに入れるべき成果物の種類
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            プログラミングができなくても作れる成果物は多くあります。自分の業務と重なるカテゴリから1つ選んで始めるのが現実的です。
          </p>
          <div className="mt-8 space-y-6">
            {artifactTypes.map((artifact, index) => (
              <motion.div
                key={artifact.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">{artifact.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{artifact.description}</p>
                <p className="mt-3 rounded-md bg-amber-50 px-4 py-2 text-xs font-semibold leading-6 text-amber-800">
                  ポイント: {artifact.point}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AIエンジニアと非エンジニアのポートフォリオの違い</p>
            <p className="mt-3 text-sm leading-7 text-blue-800">
              AIエンジニアのポートフォリオは「モデルの実装・ファインチューニング・API連携」など技術的な実装が中心です。
              非エンジニアは「業務課題の定義・ツール選定・プロセス設計・業務定着」の実績を中心に組み立てます。
              技術力より<strong>問題解決力</strong>を見せるのが非エンジニアポートフォリオのポイントです。
            </p>
          </div>
        </motion.section>

        {/* H2-3: シーン別の見せ方 */}
        <motion.section
          id="scene-based-presentation"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            転職・副業・社内評価、シーン別の見せ方
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            同じ成果物でも、見せ方の構造を変えると評価の質が変わります。目的に合わせた「フレーム」を先に決めてから整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            職種別のAIスキルについては
            <Link
              href="/academy/blog/skills-for-ai-era-career"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI時代に必要なスキルを職種別に解説
            </Link>
            も参考にしてください。ポートフォリオ設計と学習計画を合わせて考えると効率的です。
          </p>

          <div className="mt-8 space-y-8">
            {sceneItems.map((item, index) => (
              <motion.div
                key={item.scene}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">{item.scene}</h3>
                <p className="mt-1 text-sm font-semibold text-will-primary">フォーカス: {item.focus}</p>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
                  {item.details.map((detail) => (
                    <li key={detail} className="pl-1 marker:text-gray-500">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            実際のキャリアチェンジ事例については
            <Link
              href="/academy/blog/ai-career-change-cases"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI時代のキャリアチェンジ事例集
            </Link>
            で、業種・職種別のBefore/Afterとともに整理しています。
          </p>
        </motion.section>

        {/* LINE CTA #2 */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
            LINEで週1AI通信を受け取る（無料）
          </a>
        </motion.section>

        {/* H2-4: 公開方法 */}
        <motion.section
          id="how-to-publish"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GitHubとNotionで公開する方法
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            公開先は成果物の種類によって使い分けます。どちらも無料で始められ、URLひとつで共有できるのが利点です。
          </p>

          <div className="mt-8 space-y-6">
            {publishSteps.map((item) => (
              <div key={item.platform} className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">{item.platform}</h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-gray-500">主な用途: {item.use}</p>
                <p className="mt-4 text-sm leading-7 text-gray-700">{item.howto}</p>
                <div className="mt-3 rounded-md bg-red-50 px-4 py-3 text-xs leading-6 text-red-800">
                  <span className="font-semibold">注意: </span>{item.caution}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">ポートフォリオページを1枚にまとめる</p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              GitHubとNotionのURLを1つのNotionページや個人サイトにまとめると、採用担当者や発注者に渡しやすくなります。
              Notionの「ポートフォリオまとめページ」に各成果物の概要・URL・成果数値を一覧化する形式が使いやすいです。
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              成果物を増やすほど「更新日」が重要になります。古いコンテンツは削除より「アーカイブ」として整理し、
              最新3〜5件を前面に出す構成にすると、継続的に活動していることが伝わります。
            </p>
          </div>
        </motion.section>

        {/* H2-5: 5ステップ */}
        <motion.section
          id="portfolio-5steps"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ポートフォリオ作成の5ステップ
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            「何から始めればいいかわからない」を解消するための順序です。最初は完璧を目指さず、記録を1件完成させることを目標にします。
          </p>

          <ol className="mt-8 space-y-7">
            {portfolioSteps.map((item, index) => (
              <motion.li
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="border-t border-gray-200 pt-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-will-primary">{item.step}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">最初の1件を選ぶ基準</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-800">
              <li className="pl-1 marker:text-amber-600">実際の業務課題に直結している（架空の課題より評価されやすい）</li>
              <li className="pl-1 marker:text-amber-600">Before/Afterの変化が数値や時間で示せる</li>
              <li className="pl-1 marker:text-amber-600">他者でも再現できる手順が書ける</li>
              <li className="pl-1 marker:text-amber-600">機密情報や個人情報を含まずに公開できる</li>
            </ul>
          </div>
        </motion.section>

        {/* H2-6: FAQ */}
        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            「未経験でも作れるか」「どこに公開するか」など、ポートフォリオ作成で迷いやすいポイントをQ&Aで整理します。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>

          {/* LINE CTA #3（FAQ末尾） */}
          <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6">
            <p className="text-base font-semibold text-green-800">
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
              LINEで週1AI通信を受け取る（無料）
            </a>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ｜0→100日で実務活用レベルへ | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/skills-for-ai-era-career"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI時代に必要なスキルを職種別に解説｜2026年版キャリア戦略 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-career-change-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI時代のキャリアチェンジ事例集｜転換と成長のパターンを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-side-business-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                副業でAIを活用する始め方ガイド｜AIスキルで始められる副業の種類と準備 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-engineer-career-change"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                未経験からAIエンジニアへの転職ロードマップ｜学習手順と準備を解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        {/* まとめ */}
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
            <li className="pl-1 marker:text-gray-500">「AIを学んだ」証明ではなく「課題→手法→成果」の記録がポートフォリオの核心です。</li>
            <li className="pl-1 marker:text-gray-500">プログラミング経験がなくてもプロンプト集・業務設計ドキュメント・自動化フローで作成できます。</li>
            <li className="pl-1 marker:text-gray-500">転職・副業・社内評価の3シーンでは、見せ方のフレームを変えることが評価につながります。</li>
            <li className="pl-1 marker:text-gray-500">GitHubはコード・プロンプト、NotionはフローやテンプレートのURLをまとめるのが主流です。</li>
            <li className="pl-1 marker:text-gray-500">まず1件完成させてから更新サイクルを設計し、継続的に積み上げる運用が長期的に有効です。</li>
          </ul>
        </motion.section>

        {/* 次のアクション */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ポートフォリオ設計を一緒に進めたい方へ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「何を成果物にするか」「どのシーンで使うか」の整理から始めたい方は、無料セミナーや個別相談でロードマップを設計できます。
            AIリブートアカデミーでは2日間の集中研修＋100日間の伴走で、学習から実績づくりまでサポートします。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
