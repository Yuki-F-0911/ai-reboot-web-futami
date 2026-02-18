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

type AiGuidelineTemplatePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI 社内ガイドライン", "禁止事項", "権限・ログ", "例外申請"] as const;

const tocItems = [
  { id: "conclusion", label: "結論：禁止ではなく安全に使える状態" },
  { id: "risks", label: "リスクとガイドライン論点" },
  { id: "one-page-template", label: "【コピペ可】1枚雛形" },
  { id: "30-days", label: "30日で運用まで持っていく" },
  { id: "department-ops", label: "部門別の運用例（営業/人事/開発）" },
  { id: "faq-checklist", label: "FAQ＋チェックリスト" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const onePageTemplate = `# 生成AI 社内利用ガイドライン（1枚版／雛形）

## 1. 対象範囲
- 対象者: （例）全社員／一部部署（    ）／委託先（可/不可）
- 対象ツール: ChatGPT / Claude / Gemini / Copilot / その他（    ）
- 対象データ: 公開情報／社内情報（区分により制限）／個人情報（原則禁止）

## 2. 入力ルール（データ分類）
- 入力OK: 公開情報／自社が公開済みの情報
- 原則NG: 個人情報、社外秘、機微情報（契約・価格・設計・ソースコード・認証情報 等）
- 例外: 申請/承認フローを通し、ログ保存と影響範囲確認の上で実施

## 3. 禁止事項（コピペして使えるNG例）
- 入力NG: 顧客名・住所・電話・メール、契約書、未公開の売上/原価、認証情報（APIキー/パスワード）
- 出力NG: 生成物を「事実確認なし」で外部公開、著作権/ライセンス不明の画像・文章を商用利用
- 共有NG: 生成結果を社外に転送、個人アカウントでの業務データ取り扱い（許可なし）

## 4. 権限・ログ・承認（最低限）
- アカウント: 会社管理アカウントを原則とする（個人アカウント利用は条件付き）
- 権限: 役割に応じて機能制限（例）外部連携/API、ファイルアップロード、共有
- ログ: 目的・入力区分・利用ツール・出力の用途を記録（監査用）
- 承認: 対外公開物/顧客向け成果物は人のレビューを必須とする

## 5. 例外申請とインシデント対応
- 例外申請: 目的／対象データ／代替策／リスク／承認者（    ）／ログ保存の方法
- インシデント初動: ①利用停止 ②関係者連絡 ③ログ保全 ④影響範囲確認 ⑤再発防止
- 連絡先: 情シス（    ）／法務（    ）／現場責任者（    ）`;

export default function AiGuidelineTemplatePage({ faqItems }: AiGuidelineTemplatePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIの社内ガイドライン雛形" },
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
              <CopyAsMarkdownButton
                title="生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計（2026年版）"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計（2026年版）
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「現場がChatGPT/Claude/Copilotを使い始めたが、情シス・法務の不安が強く稟議が止まる」——中小企業では、この状態が最も多いです。
            重要なのは、禁止で止めることではありません。<span className="font-semibold text-gray-900">安全に使える状態を作り、統制しながら広げる</span>ことです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、社内共有にそのまま貼れる「1枚雛形（コピペ可）」と、30日で運用まで持っていく手順、部門別のOK/NG例、FAQとチェックリストをまとめます。
            情シス兼DX推進担当が、最短で合意形成できるように「決めること」と「決めないこと」の境界も明確にします。
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
            結論：社内ガイドラインは「禁止」ではなく「安全に使える状態」を作る
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: ガイドラインは「使っていい範囲」を先に定義し、<span className="font-semibold">権限とログ</span>で統制する文書です。
            禁止事項だけを増やすと、現場は個人アカウント（シャドーAI）へ逃げやすく、監査も教育もできません。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">なぜ今「雛形」が必要か（現場は既に使っている）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            現場は「便利だから」先に使い始めます。だからこそ、理想論の禁止ではなく「事故が起きる前に、最低限の境界線を引く」ことが優先です。
            雛形があると、法務・情シス・現場の議論が「言葉」ではなく「項目」に落ちるため、合意形成が一気に進みます。
          </p>

          <h3 className="mt-7 text-lg font-semibold text-gray-900">この1枚で決めること／決めないこと（境界線）</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">決めること:</span> 対象範囲（誰が/何を/どのツールで）、入力NGの基準（データ分類）、禁止事項（NG例）、権限、ログ、例外申請、インシデント初動。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">決めないこと:</span> すべての業務ユースケースの可否（最初から網羅しない）、完璧な法的判断（個別案件は法務レビューへ）、ツールの細かな設定手順（別紙の運用手順へ）。
            </li>
          </ul>

          <h3 className="mt-7 text-lg font-semibold text-gray-900">まず決めるべき3点：入力ルール・権限・ログ</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            最初に決めるべきは、運用が崩れたときに戻せる「骨格」です。特にこの3点が曖昧だと、事故対応も改善もできません。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-orange-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-orange-700">入力ルール</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">データ分類で「入力OK/NG」を判断。グレーは例外申請へ。</p>
            </section>
            <section className="rounded-lg border border-orange-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-orange-700">権限</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">誰がどの機能（連携/共有/ファイル）を使えるかを役割で分ける。</p>
            </section>
            <section className="rounded-lg border border-orange-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-orange-700">ログ</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">「目的・入力区分・利用ツール・出力用途」を残し、監査と改善に使う。</p>
            </section>
          </div>
        </motion.section>

        <motion.section
          className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold text-gray-900">社内ガイドライン、まずは1枚でOKです</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            社内共有しやすい「1枚版」＋チェックリスト付き。まずは雛形だけ受け取って、稟議・合意形成を前に進めましょう。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              雛形（Google Docs/Notion）をLINEで受け取る
            </a>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              無料セミナーを見る
            </Link>
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
          <h2 id="risks" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            生成AIの社内利用で起きるリスクと、ガイドラインに落とす論点
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ガイドラインは「事故を防ぐ」だけでなく、事故が起きたときに<span className="font-semibold">止血できる</span>ようにする設計です。起きるリスクから逆算して、必須項目を押さえます。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">情報漏えい：何が漏れるか（機密/個人情報/取引先情報）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            事故は「悪意」より「うっかり」で起きます。例えば、提案書の要約を依頼したつもりで、顧客名・単価・契約条件をそのまま貼り付けてしまうケースです。
            対策はシンプルで、入力データを区分し、入力OK/NGを明文化することです。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">データ区分</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">例</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">入力可否（基本）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">公開情報</th>
                  <td className="py-4 px-4">自社サイト、公開プレス、公開FAQ</td>
                  <td className="py-4 pl-4">原則OK</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">社内情報（一般）</th>
                  <td className="py-4 px-4">手順書、社内ルール、一般的な業務メモ</td>
                  <td className="py-4 pl-4">条件付き（ツール/権限/ログ前提）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">社外秘・機微</th>
                  <td className="py-4 px-4">契約、価格、未公開売上、設計、ソースコード、認証情報</td>
                  <td className="py-4 pl-4">原則NG（例外申請）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">個人情報</th>
                  <td className="py-4 px-4">氏名、住所、電話、メール、履歴書、健康情報</td>
                  <td className="py-4 pl-4">原則NG（原則入力しない）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">著作権・商用利用・ブランド：生成物の扱いで揉めるポイント</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            文章・画像・動画・コードは、論点が少しずつ違います。共通するのは「生成物をそのまま採用しない」ことです。対外発信・商用利用は必ず人が確認し、必要なら出典やライセンスを確認する運用にします。
            画像/動画の商用利用の注意点は、以下の記事も参考になります。
            <Link href="/academy/blog/ai-image-generation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI画像生成おすすめツール比較
            </Link>
            /
            <Link href="/academy/blog/ai-video-tool-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI動画生成ツールおすすめ比較
            </Link>
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">品質・説明責任：誤情報/差別/幻覚をどう扱うか</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            生成AIはもっともらしい文章を作れる反面、誤り（幻覚）や偏りが混ざることがあります。ガイドラインでは「最終責任は人」「対外文書はレビュー必須」を明文化し、レビューの粒度（誰が、何を、どの基準で見るか）を決めます。
            人事・採用ではバイアスや差別リスクが増えるため、後述の部門別運用例で具体的に扱います。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">ツール連携（エージェント/自動化）が生む新しいリスク</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            RAGやエージェント、自動化ツール連携は、便利な一方で「権限委任」「ログ欠落」「意図しない外部送信」が新しい事故になります。
            例えば、社内データを検索して回答する仕組み（RAG）や、外部サービスへ自動投稿するエージェントは、接続先の権限と監査が最重要です。
            仕組みの基礎は
            <Link href="/academy/blog/what-is-rag" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              RAG（検索拡張生成）とは？
            </Link>
            と
            <Link href="/academy/blog/what-is-ai-agent" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは？
            </Link>
            を押さえると理解が速いです。
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
          <h2 id="one-page-template" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            【コピペ可】生成AI 社内利用ガイドライン雛形（1枚版）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            まずは最小セットで暫定運用し、ログを見ながら改定するのが現実的です。以下はそのまま社内文書に貼れる「1枚版」です（穴埋め前提）。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">対象範囲（対象者・対象ツール・対象データ）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            ここが曖昧だと、例外が増えて運用が崩れます。「誰が」「どのツールで」「どのデータを扱うか」を先に固定し、例外は申請で拾います。
          </p>

          <h3 className="mt-7 text-lg font-semibold text-gray-900">禁止事項（入力NG／出力NG／共有NG）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            禁止事項は抽象的に書かず、現場が判断できるNG例で書きます。特に「入力NG」と「生成物をそのまま外に出す禁止」の2つが重要です。
          </p>

          <h3 className="mt-7 text-lg font-semibold text-gray-900">権限・ログ・承認（最低限の運用要件）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            「個人利用」から「業務利用」へ上げる分岐点は、権限とログです。誰が何をしたかが追えないと、監査も再発防止もできません。
          </p>

          <h3 className="mt-7 text-lg font-semibold text-gray-900">例外申請とインシデント対応（止血の手順）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            例外が発生するのは正常です。重要なのは、グレーを放置せず、申請で可視化すること。インシデントは「初動テンプレ」があるだけで被害が小さくなります。
          </p>

          <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-md bg-slate-900 p-5 text-xs leading-6 text-slate-100">
            <code>{onePageTemplate}</code>
          </pre>

          <p className="mt-4 text-xs leading-6 text-gray-500">
            補足: 実運用では「入力データ分類表」「例外申請フォーム」「インシデント初動手順」を別紙で持つと、現場が迷いません。
            参考として
            <Link href="/academy/blog/ai-agent-build-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントの作り方
            </Link>
            の「権限/ログ設計」の考え方も同じです。
          </p>
        </motion.section>

        <motion.section
          className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold text-gray-900">禁止事項・権限・ログまで“穴埋め式”で完成</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            入力データ分類表／例外申請フォーム／インシデント初動手順もセットで用意すると、社内展開が一気に楽になります。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              穴埋めテンプレ一式をLINEで受け取る
            </a>
            <Link
              href="/academy/blog/corporate-ai-adoption-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              中小企業の生成AI導入ガイドを見る
            </Link>
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
          <h2 id="30-days" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            最短導入ステップ：30日でガイドラインを「運用」まで持っていく
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            文書を作るだけで終わらせず、PoC→定着までを30日で回すのが最短です。ポイントは「使い方研修」より「事故らない運用研修」を軸にすることです。
          </p>

          <div className="mt-8 space-y-4">
            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">0〜7日：現状把握（シャドーAI/利用ツール/用途）と方針決定</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">「誰が何を使っているか」を棚卸し（禁止ではなく実態把握から）。</li>
                <li className="pl-1 marker:text-gray-500">まずは対象範囲を限定（例: 提案書の下書き、社内FAQの要約など）。</li>
                <li className="pl-1 marker:text-gray-500">入力NGの基準（データ分類）を暫定で決め、グレーは例外申請に逃がす。</li>
              </ul>
            </section>

            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">8〜14日：入力データ分類＋権限設計（誰が何をできるか）</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">データ分類表を作り、部署×役割×データ種別でマトリクス化する。</li>
                <li className="pl-1 marker:text-gray-500">会社管理アカウントと個人アカウントの扱いを決める（業務は原則会社管理）。</li>
                <li className="pl-1 marker:text-gray-500">対外公開物の承認者（レビュー責任）を決める。</li>
              </ul>
            </section>

            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">15〜30日：ログ/監査＋教育（研修）＋定着施策</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">ログの粒度を決める（目的・入力区分・出力用途・共有先）。</li>
                <li className="pl-1 marker:text-gray-500">「OK例/NG例」の社内ナレッジを作り、現場の判断を統一する。</li>
                <li className="pl-1 marker:text-gray-500">
                  教育は「プロンプト技術」より「事故らない運用」を優先。社内研修の設計は
                  <Link href="/academy/blog/corporate-ai-training-internal" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                    社内AI研修の始め方
                  </Link>
                  が参考になります。
                </li>
                <li className="pl-1 marker:text-gray-500">
                  研修を体系化したい場合は
                  <Link href="/academy/blog/corporate-ai-training" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                    法人向けAI研修で成果を出す完全ガイド
                  </Link>
                  も合わせて確認してください。
                </li>
              </ul>
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
          <h2 id="department-ops" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            部門別の運用例（営業/人事/開発）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「うちはどこまでOK？」は、部門の業務データと責任の置き方で変わります。ここではOK例・NG例の粒度まで落とします。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">営業：提案書/メールでのOK例・NG例（顧客情報の扱い）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            営業は顧客情報が混ざりやすい領域です。ポイントは「顧客固有情報を入れない」形に分解してAIに投げることです。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-emerald-700">OK例</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">公開情報をもとに競合比較表の叩き台を作る。</li>
                <li className="pl-1 marker:text-gray-500">提案書の構成案を作る（固有名詞・単価・契約条件は伏せる）。</li>
                <li className="pl-1 marker:text-gray-500">メール文面のトーン調整（宛先名や案件固有情報は入れない）。</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-rose-700">NG例</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">顧客名・担当者名・メール・住所をそのまま貼り付ける。</li>
                <li className="pl-1 marker:text-gray-500">契約書/見積/単価表をそのままアップロードする（原則NG）。</li>
                <li className="pl-1 marker:text-gray-500">生成した提案文を事実確認なしで顧客へ送る。</li>
              </ul>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">人事・採用：求人票・スクリーニング・評価の注意点</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            人事は個人情報と差別リスクが強く、ガイドライン上は「原則NG」が増えます。個人情報を入力しない設計（匿名化・要約）と、評価の説明責任を守るレビュー体制が重要です。
            実務の活用例は
            <Link href="/academy/blog/ai-hr-recruiting" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI × 人事・採用の実践ガイド
            </Link>
            も参考になります。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">求人票のたたき台作成はOK（公開情報と自社の公開可能情報で）。</li>
            <li className="pl-1 marker:text-gray-500">履歴書や評価コメントの入力は原則NG（個人情報・機微が混ざる）。</li>
            <li className="pl-1 marker:text-gray-500">スクリーニングは「補助」まで（最終判断は人／根拠の記録を残す）。</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">開発：Copilot/AIコーディングの情報管理とレビュー運用</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            開発はソースコードや認証情報の混入が最大リスクです。運用の基本は「秘密情報を入力しない」「生成コードをレビューする」「ライセンス/脆弱性の観点を含める」です。
            チーム導入時のルールは
            <Link href="/academy/blog/github-copilot-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GitHub Copilotの使い方
            </Link>
            に詳しくまとめています。
          </p>
          <div className="mt-4 rounded-lg border border-gray-200 p-5">
            <h4 className="text-sm font-semibold tracking-wide text-gray-900">最小運用ルール（開発）</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">APIキー/秘密鍵/パスワード/顧客データをプロンプトに貼らない。</li>
              <li className="pl-1 marker:text-gray-500">生成コードは必ずレビューし、テストを通す（“動く”と“正しい”は別）。</li>
              <li className="pl-1 marker:text-gray-500">外部送信や自動実行を伴う連携は、権限とログの設計を先にする。</li>
            </ul>
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
          <h2 id="faq-checklist" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）＋チェックリスト
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            反対意見（法務/情シス/現場）を先回りして、意思決定を加速させます。迷うポイントは「データ分類」と「例外申請」に寄せて整理するとブレません。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">7つのFAQ</h3>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">導入チェックリスト（最低限）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            1枚雛形を作ったら、次に「運用できるか」を確認します。以下が埋まっていれば、暫定運用を開始できます。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">対象範囲（対象者・対象ツール・対象データ）が明文化されている</li>
            <li className="pl-1 marker:text-gray-500">入力NGの基準がデータ分類で定義され、例外申請の導線がある</li>
            <li className="pl-1 marker:text-gray-500">禁止事項がNG例で書かれている（現場が判断できる）</li>
            <li className="pl-1 marker:text-gray-500">会社管理アカウント/個人アカウントの扱いが決まっている</li>
            <li className="pl-1 marker:text-gray-500">権限（連携/共有/ファイル）と承認（レビュー責任者）が定義されている</li>
            <li className="pl-1 marker:text-gray-500">ログの保存項目（目的・入力区分・出力用途）が決まっている</li>
            <li className="pl-1 marker:text-gray-500">インシデント初動の連絡先と手順（止血）が用意されている</li>
            <li className="pl-1 marker:text-gray-500">見直し頻度（四半期/半期）と改定責任者が決まっている</li>
          </ul>

          <motion.section
            className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-gray-900">稟議が止まるポイント、先に潰します</h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              現状ヒアリング→社内向け叩き台まで最短で整理。ガイドライン整備、研修、導入設計まで一緒に進めたい方はご相談ください。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
              >
                無料相談（ガイドライン整備・研修・導入）に進む
              </a>
              <Link
                href="/academy/seminars"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
              >
                無料セミナーを見る
              </Link>
            </div>
          </motion.section>
        </motion.section>

        <motion.section
          className="mt-14 border-t border-slate-200 pb-4 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                中小企業の生成AI導入ガイド | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/corporate-ai-training-internal"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社内AI研修の始め方と定着の進め方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-training" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                法人向けAI研修で成果を出す完全ガイド | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-hr-recruiting" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI × 人事・採用｜業務効率化から戦略的活用までの実践ガイド | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/github-copilot-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GitHub Copilotの使い方｜導入・設定・効率化のコツを初心者向けに解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-image-generation-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI画像生成おすすめツール比較｜Nano Banana・Midjourney・DALL-Eの使い方と選び方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-video-tool-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI動画生成ツールおすすめ比較｜用途別の選び方と始め方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）とは？仕組み・メリット・活用事例をわかりやすく解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/rag-use-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）の活用事例8選｜業種・業務別に解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントとは？定義・種類・作り方を解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </motion.section>
      </article>
    </main>
  );
}
