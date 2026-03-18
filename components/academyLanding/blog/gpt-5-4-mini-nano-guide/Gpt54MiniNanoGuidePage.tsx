"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";
import { ArticleH2, ArticleH3, Callout, RichFAQ, RichTable, SummaryBox } from "@/components/blog/ArticleBody";

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
} as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ" },
  { id: "what-is", label: "mini / nano とは何か" },
  { id: "spec-compare", label: "仕様・料金の比較表" },
  { id: "model-compare", label: "他の軽量モデルとの比較" },
  { id: "how-to-use-free", label: "ChatGPT無料ユーザーの使い方（mini）" },
  { id: "api-usage", label: "APIでのコスト試算（nano）" },
  { id: "use-cases", label: "ユースケース別 使い分け早見表" },
  { id: "limits", label: "注意点・限界" },
  { id: "faq", label: "FAQ" },
] as const;

const summaryItems = [
  "GPT-5.4 miniはフル版に迫る性能を半分以下のコストで提供。ChatGPT無料ユーザーも利用可（確認日: 2026-03-18）。",
  "GPT-5.4 nanoはAPIのみ。入力$0.20/Mと最安水準で、分類・抽出・ランキング・コーディングサブエージェントに向く。",
  "長文処理（64K〜128Kトークン）ではminiの精度がフル版の半分以下に落ちる。多量の資料を横断する作業はフル版を選ぶこと。",
] as const;

export default function Gpt54MiniNanoGuidePage({ faqItems }: Props) {
  return (
    <div className="academy-blog-page">
      <AcademyBreadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "アカデミー", href: "/academy" },
          { label: "ブログ", href: "/academy/blog" },
          { label: "GPT-5.4 miniとnanoの違いとは？" },
        ]}
      />

      <div className="blog-layout">
        <aside className="blog-toc-aside">
          <ArticleTOC items={[...tocItems]} />
        </aside>

        <article className="blog-article" data-blog-article-body>
          <header className="blog-header">
            <div className="blog-meta">
              <span className="blog-category">最新AIツール</span>
              <time dateTime="2026-03-18">2026年3月18日</time>
            </div>
            <h1 className="blog-title">
              GPT-5.4 miniとnanoの違いとは？料金・性能・使い分けを比較【2026年3月】
            </h1>
            <p className="blog-lead">
              OpenAIは2026年3月17日、軽量モデル「GPT-5.4 mini」と「GPT-5.4 nano」をリリースしました。
              miniはChatGPT無料プランにも開放され、nanoはAPI向けに$0.20/Mという最安水準の料金を実現しています。
              料金・ベンチマーク・他モデルとの比較、ユースケース別の使い分けを整理します。
            </p>
            <div className="blog-header-actions">
              <CopyAsMarkdownButton
                title="GPT-5.4 miniとnanoの違いとは？料金・性能・使い分けを比較【2026年3月】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </header>

          {/* 要点まとめ */}
          <motion.section
            id="answer-box"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SummaryBox items={[...summaryItems]} />
          </motion.section>

          <LineCtaBox />

          {/* H2-1: mini / nano とは何か */}
          <motion.section
            id="what-is"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ArticleH2>GPT-5.4 mini と nano とは何か — 3行でわかる要点</ArticleH2>
            <p className="blog-p">
              GPT-5.4 miniとnanoは、OpenAIのフラッグシップモデル「GPT-5.4」の軽量版として2026年3月17日にリリースされました。
              OpenAI自身は「これまでで最も高性能な小型モデル」と位置づけています（
              <a
                href="https://openai.com/index/introducing-gpt-5-4-mini-and-nano/"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                OpenAI公式ブログ、2026-03-17
              </a>
              ）。
            </p>

            <ArticleH3>GPT-5.4 mini</ArticleH3>
            <p className="blog-p">
              GPT-5.4の能力をより速く・安く使えるようにしたモデルです。前世代のGPT-5 miniより2倍以上高速に動作し、
              コーディング・推論・マルチモーダル処理・ツール利用のすべてで性能が向上しています。
              ChatGPTの無料プラン・Goプラン・APIのすべてで利用できます。
            </p>

            <ArticleH3>GPT-5.4 nano</ArticleH3>
            <p className="blog-p">
              速度とコストを最優先に設計した超小型モデルです。分類・データ抽出・ランキング・コーディングサブエージェントなど、
              「精度よりスループット」が求められる定型タスクに向けて設計されています。
              APIのみの提供で、ChatGPT UIからは使用できません（確認日: 2026-03-18）。
            </p>

            <Callout type="info">
              <strong>どちらを選ぶかの基準:</strong> ChatGPTで日常業務に使うならmini。
              APIでバッチ処理や自動化パイプラインを構築するならnano。
              長文ドキュメント（レポート・契約書・議事録の大量処理）が主用途ならフル版GPT-5.4を検討。
            </Callout>
          </motion.section>

          {/* H2-2: 仕様・料金の比較表 */}
          <motion.section
            id="spec-compare"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ArticleH2>仕様・料金の比較表（GPT-5.4 mini / nano / フル版）</ArticleH2>
            <p className="blog-p">
              以下は2026年3月18日時点の公式情報をもとにした比較です（
              <a
                href="https://openai.com/api/pricing/"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                OpenAI APIプライシングページ
              </a>
              より）。
            </p>

            <RichTable className="mt-6">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">モデル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">入力/Mトークン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">出力/Mトークン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">コンテキスト</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">速度</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">利用可能な場所</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">GPT-5.4 mini</td>
                  <td className="px-4 py-3">$0.75</td>
                  <td className="px-4 py-3">$3.00</td>
                  <td className="px-4 py-3">400K</td>
                  <td className="px-4 py-3">GPT-5 mini比 2倍速</td>
                  <td className="px-4 py-3">API・ChatGPT（無料含む）・Codex</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">GPT-5.4 nano</td>
                  <td className="px-4 py-3">$0.20</td>
                  <td className="px-4 py-3">$1.25</td>
                  <td className="px-4 py-3">400K</td>
                  <td className="px-4 py-3">最高速</td>
                  <td className="px-4 py-3">APIのみ</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">GPT-5.4（フル版）</td>
                  <td className="px-4 py-3">$5.00</td>
                  <td className="px-4 py-3">$20.00</td>
                  <td className="px-4 py-3">400K</td>
                  <td className="px-4 py-3">標準</td>
                  <td className="px-4 py-3">API・ChatGPT Plus以上</td>
                </tr>
              </tbody>
            </RichTable>

            <p className="blog-p">
              nanoの入力コスト$0.20/Mは、フル版GPT-5.4（$5.00/M）の25分の1です。
              コスト感を掴む実例として、
              <a
                href="https://simonwillison.net/2026/Mar/17/mini-and-nano/"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                Simon Willisonの試算
              </a>
              では約76,000枚の画像説明をnanoで処理しても$52に収まるとされています。
            </p>
          </motion.section>

          {/* H2-3: 他の軽量モデルとの比較 */}
          <motion.section
            id="model-compare"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ArticleH2>Claude Haiku 4.5・Gemini 3 Flashとの比較</ArticleH2>
            <p className="blog-p">
              2026年3月時点の軽量モデル4本を、入力コスト・強み・注意点で比較します（確認日: 2026-03-18、各社API公式より）。
            </p>

            <RichTable className="mt-6">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">モデル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">入力/M</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">出力/M</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">GPT-5.4 nano</td>
                  <td className="px-4 py-3">$0.20</td>
                  <td className="px-4 py-3">$1.25</td>
                  <td className="px-4 py-3">最安コスト。大量バッチ処理・分類・サブエージェント</td>
                  <td className="px-4 py-3">ChatGPT UIでは使用不可。マルチターン会話は苦手</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">GPT-5.4 mini</td>
                  <td className="px-4 py-3">$0.75</td>
                  <td className="px-4 py-3">$3.00</td>
                  <td className="px-4 py-3">コスト×性能バランス最良。コーディング・マルチモーダル</td>
                  <td className="px-4 py-3">長文追跡タスクはフル版比で精度が半分以下</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Claude Haiku 4.5</td>
                  <td className="px-4 py-3">$1.00</td>
                  <td className="px-4 py-3">$5.00</td>
                  <td className="px-4 py-3">マルチターン会話・日本語の自然さ。低レイテンシ</td>
                  <td className="px-4 py-3">nano比で入力コスト5倍。コーディングサブエージェントはGPT系が有利</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Gemini 3 Flash</td>
                  <td className="px-4 py-3">$0.50</td>
                  <td className="px-4 py-3">$3.00</td>
                  <td className="px-4 py-3">スループット最高水準。Google連携</td>
                  <td className="px-4 py-3">品質はバージョンで変動あり。2026年はコストが上昇傾向</td>
                </tr>
              </tbody>
            </RichTable>

            <ArticleH3>ベンチマークで見るminiとフル版の差</ArticleH3>
            <p className="blog-p">
              性能差を数値で確認します（
              <a
                href="https://simonwillison.net/2026/Mar/17/mini-and-nano/"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                Simon Willison、2026-03-17
              </a>
              ）。
            </p>

            <RichTable className="mt-6">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">ベンチマーク</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">mini</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">フル版</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">差</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実務への影響</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">SWE-Bench Pro（コーディング）</td>
                  <td className="px-4 py-3">54.4%</td>
                  <td className="px-4 py-3">57.7%</td>
                  <td className="px-4 py-3">約3pt差</td>
                  <td className="px-4 py-3">miniで十分に近い</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">OSWorld-Verified（PC操作）</td>
                  <td className="px-4 py-3">72.1%</td>
                  <td className="px-4 py-3">75.0%</td>
                  <td className="px-4 py-3">約3pt差</td>
                  <td className="px-4 py-3">ほぼ同等</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-amber-700">MRCR v2（長文追跡 64K〜128K）</td>
                  <td className="px-4 py-3 font-medium text-amber-700">47.7%</td>
                  <td className="px-4 py-3">86.0%</td>
                  <td className="px-4 py-3 font-medium text-amber-700">38pt差</td>
                  <td className="px-4 py-3 font-medium text-amber-700">⚠️ 長文はフル版推奨</td>
                </tr>
              </tbody>
            </RichTable>

            <Callout type="warning">
              <strong>長文処理には要注意:</strong> 64K〜128Kトークンの長い文脈で複数の情報を追跡するテスト（MRCR v2）では
              miniが47.7%に対しフル版は86.0%と38ポイントの差があります。
              複数の資料を横断して要素を抽出する業務では、miniではなくフル版GPT-5.4またはClaudeを選ぶことをお勧めします。
            </Callout>
          </motion.section>

          {/* H2-4: ChatGPT無料ユーザーの使い方 */}
          <motion.section
            id="how-to-use-free"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ArticleH2>ChatGPT無料ユーザーがGPT-5.4 miniを使う方法</ArticleH2>
            <p className="blog-p">
              GPT-5.4 miniはChatGPTの無料プランでも「Thinking」モードを通じて利用できます（確認日: 2026-03-18）。
              通常のチャットとは入口が異なるため、手順を確認してから試してください。
            </p>

            <ol className="blog-ol">
              <li className="blog-li">
                <strong>ChatGPT（chatgpt.com）にアカウントログイン</strong>（アカウント未作成なら無料作成）
              </li>
              <li className="blog-li">
                <strong>入力欄左のモデル選択メニューをクリック</strong>
              </li>
              <li className="blog-li">
                <strong>「Thinking」または「GPT-5.4 mini」を選択</strong>
                （表示名はUIのアップデートにより変更される場合があります）
              </li>
              <li className="blog-li">
                通常通りメッセージを送信。1セッションあたりのメッセージ数には制限があります
              </li>
            </ol>

            <Callout type="info">
              無料プランの場合、GPT-5.4 miniの利用上限に達すると自動的に標準の軽量モデルに切り替わります。
              制限なく使いたい場合は有料プラン（ChatGPT Go・Plus）への移行を検討してください。
            </Callout>

            <p className="blog-p">
              APIで利用する場合は、モデル名を <code>gpt-5.4-mini</code> と指定するだけで
              従来のGPT-5 miniから切り替えられます。コードの変更はモデル名のみです。
            </p>
          </motion.section>

          <LineCtaBox />

          {/* H2-5: APIでのコスト試算 */}
          <motion.section
            id="api-usage"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ArticleH2>APIでのコスト試算（nano活用シナリオ）</ArticleH2>
            <p className="blog-p">
              nanoの$0.20/M入力という価格がどれほど効くか、処理量ごとにコストを試算します。
              下記はOpenAI APIの従量料金をもとにした概算です（確認日: 2026-03-18）。
            </p>

            <RichTable className="mt-6">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">シナリオ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">モデル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">入力コスト/月</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">出力コスト/月</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">月額合計</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">分類タスク（1件 500入力・50出力）× 10万件/月</td>
                  <td className="px-4 py-3 font-medium">GPT-5.4 nano</td>
                  <td className="px-4 py-3">$10.00</td>
                  <td className="px-4 py-3">$6.25</td>
                  <td className="px-4 py-3 font-medium">約$16/月</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">同上 × 10万件/月</td>
                  <td className="px-4 py-3 font-medium">Claude Haiku 4.5</td>
                  <td className="px-4 py-3">$50.00</td>
                  <td className="px-4 py-3">$25.00</td>
                  <td className="px-4 py-3 font-medium text-amber-700">約$75/月（nano比 4.7倍）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">コーディング補助（1件 2K入力・500出力）× 1,000件/月</td>
                  <td className="px-4 py-3 font-medium">GPT-5.4 mini</td>
                  <td className="px-4 py-3">$1.50</td>
                  <td className="px-4 py-3">$1.50</td>
                  <td className="px-4 py-3 font-medium">約$3/月</td>
                </tr>
              </tbody>
            </RichTable>

            <ArticleH3>コーディングサブエージェントへの活用</ArticleH3>
            <p className="blog-p">
              OpenAIが特に推奨するのが「コーディングサブエージェント」への活用です。
              メインのコーディングAIが複雑な判断を担い、その配下でnanoがコードの補完・テスト分類・
              エラーの振り分けといったサポートタスクを処理する構成です。
            </p>
            <p className="blog-p">
              精度が求められる部分にはminiまたはフル版、
              スループット重視の繰り返し処理にはnanoを割り当てることで、
              コストと品質のバランスを最適化できます。
            </p>
          </motion.section>

          {/* H2-6: ユースケース別 使い分け */}
          <motion.section
            id="use-cases"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ArticleH2>ユースケース別 使い分け早見表</ArticleH2>
            <p className="blog-p">
              どのタスクにどのモデルを使うかを一覧にまとめます。迷ったときの判断基準として参考にしてください。
            </p>

            <RichTable className="mt-6">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">タスク</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">推奨モデル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">理由</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">コーディング補助・コードレビュー</td>
                  <td className="px-4 py-3 font-medium">GPT-5.4 mini</td>
                  <td className="px-4 py-3">SWE-Bench Pro 54.4%。フル版比3pt差で速度2倍</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">メール文面・短文の分類・タグ付け</td>
                  <td className="px-4 py-3 font-medium">GPT-5.4 nano</td>
                  <td className="px-4 py-3">$0.20/Mで大量処理。定型タスクは精度より速度とコスト</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">画像解析・スクリーンショット処理</td>
                  <td className="px-4 py-3 font-medium">GPT-5.4 mini</td>
                  <td className="px-4 py-3">OSWorld 72.1%。フル版と3ptの差でコスト大幅削減</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">複数文書の横断サマリー（長文）</td>
                  <td className="px-4 py-3 font-medium text-amber-700">GPT-5.4（フル版）</td>
                  <td className="px-4 py-3 text-amber-700">MRCR v2 mini 47.7% vs full 86.0%。長文追跡はフル版必須</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">チャットボット・会話型UI</td>
                  <td className="px-4 py-3 font-medium">Claude Haiku 4.5 / GPT-5.4 mini</td>
                  <td className="px-4 py-3">Haikuは会話の自然さ重視。miniはコーディング系ボットに向く</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">大量バッチ処理・サブエージェント委任</td>
                  <td className="px-4 py-3 font-medium">GPT-5.4 nano</td>
                  <td className="px-4 py-3">76,000画像を$52で処理（Simon Willison試算）。最安コスト</td>
                </tr>
              </tbody>
            </RichTable>

            <p className="blog-p">
              コスト・速度・精度の3軸で考えると、1つのモデルに固執せず「タスクごとに使い分ける」設計が
              APIを使う開発者・法人にとっての最適解になります。
              ChatGPTのUI利用者であれば、まずminiを試してフル版との差が許容範囲か確認するのが効率的です。
            </p>
          </motion.section>

          {/* H2-7: 注意点・限界 */}
          <motion.section
            id="limits"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ArticleH2>注意点・限界</ArticleH2>

            <ArticleH3>miniの長文追跡は精度が大きく落ちる</ArticleH3>
            <p className="blog-p">
              64K〜128Kトークンの長いコンテキストで複数の情報を追跡する作業では、
              miniの精度はフル版の約半分になります（MRCR v2: mini 47.7% vs フル版 86.0%）。
              複数の会議録・契約書・調査レポートをまとめて分析する作業には不向きです。
            </p>

            <ArticleH3>nanoはChatGPT UIで使用不可</ArticleH3>
            <p className="blog-p">
              nanoはAPIのみの提供で、ChatGPT（Web・iOS・Android）の画面からは選択できません（確認日: 2026-03-18）。
              開発環境やAPIキーを持っていない場合は利用できないため注意してください。
            </p>

            <ArticleH3>料金・仕様は変更される可能性がある</ArticleH3>
            <p className="blog-p">
              記載の料金は2026年3月18日時点の確認値です。OpenAIは料金やプラン条件を定期的に変更するため、
              実際に使う前に
              <a
                href="https://openai.com/api/pricing/"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                OpenAI公式のプライシングページ
              </a>
              を確認することをお勧めします。
            </p>

            <ArticleH3>日本語性能は公式ベンチマークに含まれていない</ArticleH3>
            <p className="blog-p">
              公開されているベンチマーク（SWE-Bench Pro・OSWorld・MRCR v2）は英語タスク中心です。
              日本語での精度はOpenAIからの公式数値がなく、実務での検証が必要です。
              日本語の文書処理・メール作成・要約といった業務での品質は、
              実際に試してフル版や他モデルと比較するのが確実です。
            </p>
          </motion.section>

          {/* FAQ */}
          <motion.section
            id="faq"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ArticleH2>よくある質問</ArticleH2>
            <RichFAQ items={[...faqItems]} />
          </motion.section>

          <LineCtaBox />

          {/* アカデミーCTA */}
          <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="blog-cta-box"
          >
            <h2 className="blog-h2">AIを「どう使うか」の判断軸を育てる</h2>
            <p className="blog-p">
              GPT-5.4 miniやnanoのようなモデルは今後も半年単位で更新が続きます。
              大切なのは個々のモデルを覚えることより、
              「どの業務課題にAIを当てるか」「どこにコストをかけて、どこを自動化するか」という判断軸です。
            </p>
            <p className="blog-p">
              AIリブートアカデミーでは、生成AI活用力の習得だけでなく、
              AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまでを一体で設計しています。
              新しいモデルが出るたびに慌てるのではなく、変化に対して自分のキャリアと仕事の軸を持って向き合いたい方は、
              学習プロセス全体を見直すことが有効です。
            </p>
            <Link href="/academy" className="blog-cta-link">
              AIリブートアカデミーの詳細を見る →
            </Link>
          </motion.section>

          {/* 関連記事 */}
          <nav className="blog-related" aria-label="関連記事">
            <h2 className="blog-h2">関連記事</h2>
            <ul className="blog-ul">
              <li className="blog-li">
                <Link href="/academy/blog/gpt-5-4" className="blog-link">
                  GPT-5.4とは？3つのモデルの違い・性能・使い方を解説
                </Link>
              </li>
              <li className="blog-li">
                <Link href="/academy/blog/gpt-5-4-vs-claude-gemini-2026" className="blog-link">
                  GPT-5.4・Claude・Gemini比較 2026 — 用途別の使い分けで選ぶ
                </Link>
              </li>
              <li className="blog-li">
                <Link href="/academy/blog/gpt-5-4-business-use-cases" className="blog-link">
                  GPT-5.4のビジネス活用10選 — 実例で解説
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </div>
  );
}
