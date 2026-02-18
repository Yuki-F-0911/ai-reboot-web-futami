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

type WhatIsMcpPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["MCP とは", "AIエージェント", "外部ツール連携", "MCP セキュリティ"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-mcp", label: "MCPとは？仕組み" },
  { id: "what-can-do", label: "MCPでできること" },
  { id: "security-risks", label: "危険な落とし穴" },
  { id: "checklist", label: "安全導入チェック" },
  { id: "deployment-steps", label: "導入ステップ" },
  { id: "future", label: "今後と展望" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "summary", label: "まとめ" },
  { id: "cta", label: "CTA" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

export default function WhatIsMcpPage({ faqItems }: WhatIsMcpPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "MCP（Model Context Protocol）とは？" },
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
                title="MCP（Model Context Protocol）とは？できることと危険な落とし穴【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            MCP（Model Context Protocol）とは？できることと危険な落とし穴【2026年版】
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIエージェントが「ファイルを読む」「DBを叩く」「ブラウザを操作する」——この“外部行動”が当たり前になるほど、
            <span className="font-semibold text-gray-900">安全な連携の設計</span>がボトルネックになります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、MCP（Model Context Protocol）の仕組みとできることを整理した上で、導入時に踏みがちな危険な落とし穴（権限・認証・ログ・脆弱性・暴走）と、
            すぐに使えるチェックリストをまとめます。
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
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">MCPはAIと外部ツールをつなぐ「USBポート」のような標準プロトコル</li>
            <li className="pl-1 marker:text-gray-500">できることは強力だが、権限・認証・ログの設計なしでは危険</li>
            <li className="pl-1 marker:text-gray-500">安全な連携のために、ガイドラインとチェックリストが必須</li>
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            結論: MCPは「便利な接続規格」であり、導入の成否は<span className="font-semibold text-gray-900">運用設計（境界線）</span>で決まります。
            技術より先に、権限・認証・監査の“仕組み”を整えてから広げるのが最短ルートです。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-mcp" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            MCPとは？仕組みをわかりやすく解説
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            MCP（Model Context Protocol）は、AIモデル（またはAIエージェント）が、外部のツールやデータソースにアクセスするための標準プロトコルです。
            例えるなら、AIにとっての「USBポート」です。
            Anthropicが提唱し、仕様とSDKがオープンに公開されています。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">アーキテクチャ（Client / Server / Tool / Resource）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            実際の利用では、Claude Desktop / Claude Code などのAIアプリや、Visual Studio Code などのIDEが<span className="font-semibold text-gray-900">Host（ホスト）</span>として動き、
            その中のClientがMCPサーバーに接続します。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">Client</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">ホスト内でMCPサーバーへ接続し、ツール利用や参照をオーケストレーションします。</p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">Server</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">外部ツール/データへの入口。権限、認証、ログ、入力制限など“安全の境界線”を実装します。</p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">Tool</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">実行系の機能（例: ファイル検索、API呼び出し、DBクエリ、ブラウザ操作）。</p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">Resource</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">参照系のデータ（例: ドキュメント、ナレッジ、設定、レポート）。安全に“読む”ための設計が重要です。</p>
            </section>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            なおMCPサーバーは、Tool/Resourceに加えて<span className="font-semibold text-gray-900">Prompt（再利用できる指示テンプレート）</span>なども公開できます。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">従来のAPI連携との違い</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            APIは「特定サービスの機能を呼ぶ」ための1対1の接続です。一方MCPは、AIが多様なツール群を“同じ作法”で呼べるようにする標準化レイヤーです。
            その分、便利になりますが「勝手に実行される可能性」が上がるため、権限と監査が必須になります。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">通信方式（stdio / Streamable HTTP）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            ローカル接続は<span className="font-semibold text-gray-900">stdio</span>（アプリがローカルプロセスを起動して連携）、
            リモート接続は<span className="font-semibold text-gray-900">Streamable HTTP</span>（HTTP経由で連携）という形が基本です。
            リモート公開する場合は、認証・認可（例: OAuth）やアクセス制御を前提に設計します。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-can-do" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            MCPでできること
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            MCPの本質は「AIが外部に手を伸ばすための共通インターフェース」です。できることが増えるほど、権限と境界線の設計が重要になります。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">代表的な連携（例）</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">ファイル操作（読み書き、検索）</li>
            <li className="pl-1 marker:text-gray-500">データベース連携（クエリ実行、データ取得）</li>
            <li className="pl-1 marker:text-gray-500">Web操作（ブラウザ操作、スクレイピング）</li>
            <li className="pl-1 marker:text-gray-500">外部API連携（Slack、GitHub、Google等）</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">ユースケース別テーブル</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ユースケース</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">つなぐ対象</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">得られる効果</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">最低限のガード</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">社内ナレッジ検索</th>
                  <td className="py-4 px-4">ドキュメント/FAQ/議事録</td>
                  <td className="py-4 px-4">回答の高速化、属人化の低減</td>
                  <td className="py-4 pl-4">閲覧権限の継承、機密マスキング、参照ログ</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">データ分析アシスト</th>
                  <td className="py-4 px-4">DWH/BI/スプレッドシート</td>
                  <td className="py-4 px-4">集計・可視化の自動化</td>
                  <td className="py-4 pl-4">読み取り専用、クエリ制限、監査ログ</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">運用自動化（軽い）</th>
                  <td className="py-4 px-4">チケット/通知/定型処理</td>
                  <td className="py-4 px-4">対応漏れ削減、工数削減</td>
                  <td className="py-4 pl-4">承認ステップ、実行前プレビュー、ロール別権限</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">ブラウザ操作</th>
                  <td className="py-4 px-4">社内Web/管理画面</td>
                  <td className="py-4 px-4">入力作業の半自動化</td>
                  <td className="py-4 pl-4">許可ドメイン制限、個人情報の扱い、操作ログ</td>
                </tr>
              </tbody>
            </table>
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
          <h2 id="security-risks" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            MCPの危険な落とし穴
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            MCPは「ツールを使えるようにする」仕組みです。つまり攻撃者にとっては「ツールを悪用できる入口」になりえます。よくある落とし穴と対策を押さえます。
          </p>

          <div className="mt-8 grid gap-4">
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">リスク1: 権限の過剰付与（全ファイルアクセス等）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                “便利だから”で広い権限を渡すと、誤操作でも漏えいでも被害が最大化します。最小権限（read-only / フォルダ限定 / テーブル限定）から始めます。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">リスク2: プロンプトインジェクション経由のツール悪用</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                Webページやドキュメントに混入した指示で、エージェントが勝手に“危険な操作”を実行するケースがあります。外部入力は不信として扱い、危険操作は人の承認を挟みます。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">リスク3: MCPサーバーの脆弱性（依存パッケージ、未検証サーバー）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                サーバーは“境界線”そのものです。依存ライブラリ、設定ミス、コミュニティサーバーの品質で事故が起きます。検証環境での動作確認と、更新・脆弱性対応の運用を前提にします。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">リスク4: 認証情報の漏洩（APIキー、トークン）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                トークンが漏れると“権限そのもの”が盗まれます。秘匿情報は環境変数やシークレット管理に寄せ、ログ/プロンプトへ出ない設計にします。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">リスク5: 意図しない連鎖実行（エージェントの暴走）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「検索→取得→書き込み→通知」のように複数ツールが連鎖すると、想定外の副作用が増えます。ステップごとの制限、実行前の差分プレビュー、ロールバック設計が有効です。
              </p>
            </section>
          </div>

          <div className="mt-8 rounded-lg border border-orange-200 bg-orange-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">対策の基本は3つだけ</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">最小権限（できるだけ読むだけ、範囲を絞る）</li>
              <li className="pl-1 marker:text-gray-500">認証・承認（危険操作は人を挟む）</li>
              <li className="pl-1 marker:text-gray-500">ログ・監査（後から追える状態にする）</li>
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
          <h2 id="checklist" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            安全に導入するためのチェックポイント（10項目）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            MCP導入の失敗は「後で整えるつもりだった設計」がそのまま本番に残ることで起きます。まずはここを埋めてから、スコープを広げてください。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">カテゴリ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">チェック項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">対策</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">権限管理</th>
                  <td className="py-4 px-4">最小権限（read-only / 範囲限定）で始めている</td>
                  <td className="py-4 pl-4">フォルダ/テーブル/エンドポイント単位で制限</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">権限管理</th>
                  <td className="py-4 px-4">危険操作（削除/外部送信/書き込み）を分離している</td>
                  <td className="py-4 pl-4">ツールを読み取り系/変更系に分け、変更系は承認必須</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">権限管理</th>
                  <td className="py-4 px-4">実行対象のホワイトリスト（ドメイン/パス）を持っている</td>
                  <td className="py-4 pl-4">許可ドメイン/許可ディレクトリ/許可クエリの明文化</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">認証・認可</th>
                  <td className="py-4 px-4">認証方式（SSO/トークン）とローテーション方針が決まっている</td>
                  <td className="py-4 pl-4">短命トークン、定期ローテ、失効の手順を用意</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">認証・認可</th>
                  <td className="py-4 px-4">人の承認（Human-in-the-loop）が必要な操作が定義されている</td>
                  <td className="py-4 pl-4">送信/削除/支払い等は必ず確認画面と承認ログ</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">ログ・監査</th>
                  <td className="py-4 px-4">「誰が/いつ/何を/なぜ」実行したか追える</td>
                  <td className="py-4 pl-4">tool呼び出し履歴、入力/出力の要点、実行結果を保存</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">ログ・監査</th>
                  <td className="py-4 px-4">アラート条件（異常な回数・深夜実行・失敗連発）が決まっている</td>
                  <td className="py-4 pl-4">監視と通知、遮断の手順（止血）を用意</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">サーバー管理</th>
                  <td className="py-4 px-4">依存パッケージの更新/脆弱性対応が回る</td>
                  <td className="py-4 pl-4">SBOM/脆弱性スキャン、更新頻度、担当者を明確化</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">サーバー管理</th>
                  <td className="py-4 px-4">サンドボックス（テスト環境）で検証してから本番へ入れている</td>
                  <td className="py-4 pl-4">検証用データ、権限、ログでリハーサルを実施</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">運用</th>
                  <td className="py-4 px-4">事故時の初動（停止・ログ保全・連絡先）が決まっている</td>
                  <td className="py-4 pl-4">インシデントフロー、権限の一括停止、影響範囲確認</td>
                </tr>
              </tbody>
            </table>
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
          <h2 id="deployment-steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            MCPの導入ステップ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            いきなり“全部つなぐ”は失敗します。まずはユースケースを1つに絞り、境界線を決めてから広げるのが安全です。
          </p>

          <ol className="mt-8 space-y-4">
            <li className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">Step 1: ユースケース定義（何をつなぐか）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                まず「読ませたいデータ」と「実行させたい操作」を分けて書き出します。最初は“読むだけ”が安全です。
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">Step 2: MCPサーバー選定（公式/コミュニティ/カスタム）</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                まずは公式・コミュニティ提供のサーバーで検証し、自社固有の要件（SSO、監査、独自データ）だけをカスタムするのが効率的です。
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">Step 3: 権限・認証設計 → チェックリストへ</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                実装より先に、権限・認証・ログの前提を揃えます。迷ったら
                <a href="#checklist" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  チェックポイント（10項目）
                </a>
                から埋めてください。
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">Step 4: テスト環境での検証</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                検証用のデータ・権限で、想定外のツール連鎖や、プロンプトインジェクションの耐性（外部入力の扱い）を確認します。
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">Step 5: 本番導入とモニタリング</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                本番はログとアラートが命綱です。異常な実行や失敗の連発を検知できる状態にしてから、対象範囲を段階的に広げます。
              </p>
            </li>
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="future" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            MCPの今後と展望
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            今後は「つなぐ」だけでは差別化にならず、エンタープライズ要件（認証・監査・ポリシー）をどこまで標準化できるかが焦点になります。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">エコシステムの拡大（公式/コミュニティのサーバーが増える）</li>
            <li className="pl-1 marker:text-gray-500">エンタープライズ対応（SSO、監査、データガバナンス）</li>
            <li className="pl-1 marker:text-gray-500">認証・認可の標準化動向（安全な“鍵”の扱いが主戦場）</li>
            <li className="pl-1 marker:text-gray-500">競合プロトコルとの比較（ツール呼び出し標準、プラグイン方式など）</li>
          </ul>
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
            FAQ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「結局、どう使えば安全？」に直結する質問を、短くまとめます。
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
          <h2 id="related-links" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            関連リンク
          </h2>
          <ul className="mt-6 space-y-2">
            <li>
              <Link
                href="/academy/blog/ai-agent-deployment-checklist"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェント導入チェックリスト | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントとは？ | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-data-leak-patterns" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの情報漏えいパターンと対策 | AIリブート
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
          <p className="mt-4 text-sm leading-7 text-gray-700">
            MCPは、AIエージェントの外部連携を一気に加速させる標準プロトコルです。一方で、権限・認証・ログが曖昧なまま導入すると、事故が“ツール実行”として起きやすくなります。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            まずは「読むだけ」から始め、最小権限と監査ログを整え、危険操作は人の承認を挟む——この3点を守ると、MCPは強力な武器になります。
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
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            CTA
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            MCPを含むAIエージェント導入は、技術だけでなくガバナンス設計が重要です。無料セミナーと相談窓口を用意しています。
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
