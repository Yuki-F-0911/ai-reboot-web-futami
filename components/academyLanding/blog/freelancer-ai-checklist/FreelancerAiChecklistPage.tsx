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

type FreelancerAiChecklistPageProps = {
  faqItems: readonly FAQItem[];
};

type ChecklistItem = {
  check: string;
  action: string;
};

type ChecklistSection = {
  id: string;
  heading: string;
  intro: string;
  introSecondary: string;
  items: readonly ChecklistItem[];
};

type LineCtaBoxProps = {
  className: string;
  titleClassName: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["個人事業主 生成AI", "フリーランス AI チェックリスト", "副業 AI ツール"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "sales-checklist", label: "営業カテゴリ10項目" },
  { id: "work-checklist", label: "作業カテゴリ10項目" },
  { id: "accounting-checklist", label: "経理カテゴリ10項目" },
  { id: "content-checklist", label: "発信カテゴリ10項目" },
  { id: "learning-checklist", label: "学習カテゴリ10項目" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "90分実行プラン" },
] as const;

const salesChecklist: readonly ChecklistItem[] = [
  { check: "理想顧客の業種・課題・予算感を1文で定義している", action: "直近受注案件から共通条件を3つ抜き出す" },
  { check: "提案書の基本構成（課題→方針→成果指標）をテンプレ化している", action: "提案書テンプレの見出しを固定する" },
  { check: "初回提案メールの件名パターンを3案持っている", action: "AIで件名案を10個作り3個に絞る" },
  { check: "見積書の工数分解を工程単位で説明できる", action: "作業工程を5〜8項目に分解して雛形化する" },
  { check: "失注理由をカテゴリ化して次回提案に反映している", action: "失注理由を「価格・提案軸・時期」に分類する" },
  { check: "ヒアリング質問リストを業種別に準備している", action: "初回面談で使う質問を7個作成する" },
  { check: "提案前に競合比較の要点をAIで整理している", action: "競合2社の違いを比較表で出力する" },
  { check: "再提案メールの雛形を保持している", action: "失注後の再提案テンプレを作る" },
  { check: "商談後24時間以内のフォロー文面を用意している", action: "フォロー文の定型文を3パターン作る" },
  { check: "案件化率を週次で記録し改善論点を言語化している", action: "応募数・返信数・受注数を1シートで管理する" },
] as const;

const workChecklist: readonly ChecklistItem[] = [
  { check: "作業開始時に目的・制約・納品形式をAIに明示している", action: "プロンプト冒頭に目的と制約を追記する" },
  { check: "リサーチと本文生成を別工程で実行している", action: "調査メモと本文ドラフトを別チャットに分ける" },
  { check: "下書き生成後のレビュー観点を固定している", action: "数値・固有名詞・主張根拠の3点をチェック項目化する" },
  { check: "案件ごとの用語集を作り、トーンを統一している", action: "用語集を10語作り毎回入力する" },
  { check: "納品前の誤字脱字・重複表現チェックを自動化している", action: "最終レビュー用プロンプトを保存する" },
  { check: "作業ログを残し、再現できる手順にしている", action: "良かった指示文をテンプレ集に追加する" },
  { check: "機密情報を匿名化してからAIに入力している", action: "社名・金額・個人名の置換ルールを定義する" },
  { check: "出力をそのまま納品せず、必ず人間が最終判断している", action: "最終判断者と判定基準を明文化する" },
  { check: "よく使う業務のプロンプトテンプレをカテゴリ化している", action: "営業・制作・管理の3フォルダを作る" },
  { check: "作業時間短縮だけでなく品質指標も追っている", action: "修正回数とクレーム発生有無を月次で記録する" },
] as const;

const accountingChecklist: readonly ChecklistItem[] = [
  { check: "請求書の文面テンプレを案件タイプ別に持っている", action: "単発・継続・準委任の3雛形を作る" },
  { check: "見積条件と請求条件の差分を説明できる", action: "見積書と請求書の差分チェック欄を作る" },
  { check: "入金確認の週次ルーティンを固定している", action: "毎週同じ曜日に入金確認タスクを設定する" },
  { check: "未入金時の督促文を段階別に準備している", action: "初回連絡・再連絡・最終連絡の3文面を作る" },
  { check: "経費入力時に勘定科目候補をAIで一次整理している", action: "摘要文から科目候補を出す指示文を作成する" },
  { check: "月末に売上見込みと確定売上を分けて管理している", action: "案件ごとの見込み/確定ステータスを更新する" },
  { check: "税務提出前に数字と証憑の突合を行っている", action: "請求書・入金記録・契約書の3点確認を実施する" },
  { check: "契約条件（支払期日・検収条件）を案件管理表に記録している", action: "契約情報カラムを追加して空欄を埋める" },
  { check: "制度変更や法令情報の確認日を記録している", action: "制度確認ログに日付と参照元を残す" },
  { check: "経理作業の責任範囲をAIと人間で分離している", action: "AIは下書き、人間は確定判断と明記する" },
] as const;

const contentChecklist: readonly ChecklistItem[] = [
  { check: "発信テーマを「見込み客の悩み」起点で設定している", action: "顧客質問を10件書き出して優先順位を付ける" },
  { check: "週1本の基幹コンテンツを先に作っている", action: "今週の1テーマと構成を決める" },
  { check: "SNS媒体ごとに投稿形式を分けている", action: "X用短文、Instagram用要点、LinkedIn用解説を分岐する" },
  { check: "投稿の冒頭で課題提起を明確にしている", action: "冒頭1行を「誰の何の課題か」に置き換える" },
  { check: "実績紹介で守秘範囲を守っている", action: "実績投稿の匿名化チェックを実施する" },
  { check: "CTAを「問い合わせ」「資料」「LINE」など目的別に設計している", action: "投稿ごとのCTA目的を1つに限定する" },
  { check: "投稿の反応を記録して次回改善に使っている", action: "保存数・クリック率・問い合わせ数を記録する" },
  { check: "発信内容と提供サービスの整合が取れている", action: "投稿テーマと商品導線の対応表を作る" },
  { check: "AI生成文の口調を自分の文体に調整している", action: "文体ルールを5項目にまとめる" },
  { check: "月次で発信テーマの棚卸しをしている", action: "反応が良かったテーマ上位5件を再活用する" },
] as const;

const learningChecklist: readonly ChecklistItem[] = [
  { check: "週次の学習時間を固定し予定に入れている", action: "週2回30分の学習ブロックをカレンダー登録する" },
  { check: "学習テーマを業務課題に紐づけている", action: "今月解決したい課題を1つ選ぶ" },
  { check: "新ツール導入時に目的・評価基準を先に決めている", action: "導入判断シートに評価軸を3つ設定する" },
  { check: "学んだ手順をテンプレ化し再利用している", action: "再利用可能な手順を1ページに整理する" },
  { check: "月1回、スキル棚卸しと単価見直しを行っている", action: "提供価値と単価の対応表を更新する" },
  { check: "実案件で試した結果をログに残している", action: "成功/失敗の要因を各3行で記録する" },
  { check: "キャリア方針を3ヶ月単位で見直している", action: "次四半期で伸ばす領域を1つ決める" },
  { check: "一人で抱えず学習コミュニティを活用している", action: "相談できる仲間・コミュニティを1つ選ぶ" },
  { check: "情報収集先を固定しノイズを減らしている", action: "追うメディアを3つに絞る" },
  { check: "学習成果を発信して仕事機会へ接続している", action: "今週の学びを1投稿で公開する" },
] as const;

const checklistSections: readonly ChecklistSection[] = [
  {
    id: "sales-checklist",
    heading: "営業カテゴリ10項目：提案準備をAIで標準化すると応募本数と提案精度を両立できる",
    intro:
      "営業は「情報収集→提案→見積→フォロー」の反復が多く、AIで下書きと比較を先に作ると判断に集中できます。",
    introSecondary:
      "個人事業主や副業ワーカーは提案準備の時間が売上に直結するため、テンプレ運用の有無が案件化率に直結します。",
    items: salesChecklist,
  },
  {
    id: "work-checklist",
    heading: "作業カテゴリ10項目：生成AIを下書き専任にすると納品品質を落とさず時短できる",
    intro:
      "実作業でAIを使うときは、生成速度より「工程分離」が重要です。調査、下書き、レビューを分けると品質が安定します。",
    introSecondary:
      "特にフリーランス業務では、修正往復を減らせるかが利益率を左右します。レビュー観点を固定すると再現性が上がります。",
    items: workChecklist,
  },
  {
    id: "accounting-checklist",
    heading: "経理カテゴリ10項目：請求・入金・記帳の定型処理をAI化すると月末負担を減らせる",
    intro:
      "経理領域では、請求文面作成や入金確認メモのような定型処理にAIを使うと負担を下げやすくなります。",
    introSecondary:
      "一方で、税務提出や最終判断は人間責任です。AIの役割を「下書き補助」に限定すると安全に運用できます。",
    items: accountingChecklist,
  },
  {
    id: "content-checklist",
    heading: "発信カテゴリ10項目：SNS・ブログ発信をAIで設計すると見込み客との接点が増える",
    intro:
      "発信の成果は投稿本数だけでは決まりません。見込み客の課題起点でテーマを設計し、媒体別に変換することが重要です。",
    introSecondary:
      "AIは投稿量を増やすだけでなく、訴求軸の比較検証にも使えます。運用ログを残すほど改善速度が上がります。",
    items: contentChecklist,
  },
  {
    id: "learning-checklist",
    heading: "学習カテゴリ10項目：週次学習をAIで回すとスキル更新とキャリア設計を継続できる",
    intro:
      "AI領域は更新が速いため、単発学習ではなく週次運用が必要です。学習を業務課題に結びつけると実装率が高まります。",
    introSecondary:
      "個人で学ぶだけでは継続が難しいため、振り返りと対話の場を持つことで定着しやすくなります。",
    items: learningChecklist,
  },
] as const;

function LineCtaBox({ className, titleClassName }: LineCtaBoxProps) {
  return (
    <div className={className}>
      <p className={titleClassName}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで週1AI通信を受け取る（無料）
      </a>
    </div>
  );
}

export default function FreelancerAiChecklistPage({ faqItems }: FreelancerAiChecklistPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "個人事業主・フリーランスのAI活用チェックリスト50" },
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
                title="個人事業主・フリーランスのためのAI活用チェックリスト50｜今日からできること"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            個人事業主・フリーランスのためのAI活用チェックリスト50｜今日からできること
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            個人で仕事をしていると、営業・制作・請求・発信・学習を同時に回す必要があります。AIは便利ですが、使い方が曖昧だと時間短縮も品質向上も中途半端になります。
            そこで本記事では、個人事業主・フリーランス・副業会社員向けに、実務でそのまま使える50項目を5カテゴリで整理しました。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            制度・仕様の確認日: 2026年2月20日（厚労省「副業・兼業の促進に関するガイドライン」、公取委・中小企業庁・厚労省
            「フリーランス・事業者間取引適正化等法Q&A」、OpenAI「ChatGPT Businessのデータ取り扱い」）。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ：個人事業主・フリーランスのAI活用は「5カテゴリ×10項目」で抜け漏れを防げる
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">50項目を営業・作業・経理・発信・学習に分けると、今日の優先順位を即決できます。</li>
            <li className="pl-1 marker:text-gray-500">AIは「下書き・比較・整理」を任せ、人間は最終判断と責任を持つ運用が実務向きです。</li>
            <li className="pl-1 marker:text-gray-500">副業会社員は就業規則と機密情報ルールを先に確認し、AI使用範囲を明文化してください。</li>
            <li className="pl-1 marker:text-gray-500">
              50項目の印刷用PDF版は、記事内で案内するLINE特典から受け取れます。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
        </motion.section>

        {checklistSections.map((section, sectionIndex) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">{section.heading}</h2>
            <p className="mt-5 text-base font-medium leading-8 text-gray-900">{section.intro}</p>
            <p className="mt-3 text-sm leading-7 text-gray-700">{section.introSecondary}</p>

            {section.id === "sales-checklist" && (
              <p className="mt-4 text-sm leading-7 text-gray-700">
                提案から請求までの全体ワークフローは
                <Link href="/academy/blog/ai-freelance-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  フリーランス・副業のAI活用術
                </Link>
                と
                <Link href="/academy/blog/ai-side-business-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  副業でAIを活用する始め方ガイド
                </Link>
                も併読すると設計しやすくなります。
              </p>
            )}

            {section.id === "work-checklist" && (
              <p className="mt-4 text-sm leading-7 text-gray-700">
                実務で使う指示文の型は
                <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  仕事で使えるプロンプトテンプレート集
                </Link>
                、出力品質を上げるコツは
                <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  ChatGPTを仕事で使いこなす実践テクニック集
                </Link>
                に整理しています。
              </p>
            )}

            <div className="mt-7 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-3 pr-4 font-semibold text-gray-900">No.</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">チェック項目</th>
                    <th className="py-3 pl-4 font-semibold text-gray-900">今日やること（15分）</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item, itemIndex) => (
                    <tr key={item.check} className="border-b border-gray-200 align-top">
                      <th className="py-4 pr-4 font-semibold text-gray-900">{sectionIndex * 10 + itemIndex + 1}</th>
                      <td className="py-4 px-4">{item.check}</td>
                      <td className="py-4 pl-4">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        ))}

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" titleClassName="text-base font-semibold text-orange-800" />
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）：個人事業主・フリーランスのAIチェックリスト運用で詰まりやすい点
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            運用初期は「何から着手するか」と「どこまでAIに任せるか」で迷いやすくなります。実務で頻出の論点から確認してください。
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

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">
            90分実行プラン：50項目を今週から回すための最短手順
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-blue-900">
            <li className="pl-1">営業・作業カテゴリから各3項目を選び、今週のテンプレを先に作る。</li>
            <li className="pl-1">経理カテゴリから2項目を選び、請求・入金管理を定型化する。</li>
            <li className="pl-1">発信・学習カテゴリから各1項目を選び、次の案件獲得につながる行動に変える。</li>
            <li className="pl-1">翌週に達成率を見直し、未達項目を削るか手順を簡素化する。</li>
          </ol>
          <p className="mt-5 text-sm leading-7 text-blue-900">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを通じた自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            単発の時短で終わらせず、働き方そのものを更新したい方は、この記事のチェックリストを起点に運用してください。
          </p>
          <div className="mt-6">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-white p-6" titleClassName="text-base font-semibold text-green-800" />
          </div>
        </motion.section>
      </article>
    </main>
  );
}
