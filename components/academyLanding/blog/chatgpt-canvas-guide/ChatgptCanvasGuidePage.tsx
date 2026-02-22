"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import {
  ArticleH2,
  ArticleH3,
  Callout,
  SummaryBox,
  RichTable,
  RichFAQ,
} from "@/components/blog/ArticleBody";

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

const keywordTags = ["ChatGPT Canvas", "Canvas 使い方", "AI 文書作成", "ChatGPT 新機能", "共同編集"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-canvas", label: "Canvasとは何か" },
  { id: "chat-vs-canvas", label: "通常チャットとCanvasの違い" },
  { id: "three-uses", label: "Canvasで何ができる？3つの主要用途" },
  { id: "how-to-use", label: "Canvasの使い方ステップバイステップ" },
  { id: "use-cases", label: "Canvasが特に役立つ場面8選" },
  { id: "five-tips", label: "Canvasを使いこなす5つのコツ" },
  { id: "limitations", label: "現時点の制限と注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ" },
] as const;

const summaryItems = [
  "Canvasは2024年10月にChatGPTに追加された「共同編集モード」。チャット画面の横に編集ウィンドウが開き、AIと一緒にリアルタイムで文書・コードを作り込める",
  "通常チャットとの最大の違いは「修正のたびに全文コピペ不要」。Canvas内で直接変更が反映され、バージョン管理も自動で行われる",
  "主要用途は3つ：①文書作成・編集、②コード作成・デバッグ、③プレゼン資料の骨格作成。ChatGPT Plus以上のプランで利用可能",
  "使い始め方はシンプル。「Canvasで〇〇を作って」と入力するか、チャット欄のアイコンからCanvasモードを選択するだけ",
  "コツは「最初に大枠を作ってもらい、段階的に修正指示を出す」こと。部分選択して「この箇所だけ〇〇に変えて」という細かい指示も可能",
] as const;

const howToSteps = [
  {
    step: "Step 1：Canvasを起動する",
    content:
      "ChatGPTのチャット画面を開き、入力欄に「Canvasで〇〇を書いて」と入力するのが一番簡単な起動方法です。たとえば「Canvasで職務経歴書のテンプレートを作って」と入力するだけで、自動的にCanvas編集ウィンドウが開きます。または、入力欄の左側にある「+」アイコンをクリックし、「Canvasを使う」を選択することでも起動できます。",
  },
  {
    step: "Step 2：AIに初版を作成させる",
    content:
      "Canvasが開いたら、まずAIに初版を作ってもらいましょう。「ブログ記事のタイトルと見出し構成を作って。テーマは〇〇で、ターゲット読者は30代の会社員」のように、目的・テーマ・読者を明記するとより精度の高い初版が返ってきます。コードの場合は「Pythonで〇〇するスクリプトを書いて」と言語と目的を指定します。",
  },
  {
    step: "Step 3：チャット欄で修正指示を出す",
    content:
      "初版が表示されたら、チャット欄に修正指示を打ちます。「3章をもう少し具体的にして」「全体のトーンをもっとカジュアルに」「コードにコメントを追加して」など、自然な日本語で指示するだけで、Canvasの内容がリアルタイムで更新されます。変更前の状態に戻したい場合は、Canvas右上の「←（元に戻す）」ボタンで直前の状態に復元できます。",
  },
  {
    step: "Step 4：部分選択して細かく修正する",
    content:
      "特定の箇所だけ修正したいときは、Canvas内でその文章やコードをドラッグして選択します。選択すると「選択範囲について AIに相談」のポップアップが表示されるので、そこから「もっと短く」「ビジネスライクに」「英語に翻訳」などの指示を出せます。全体を書き直すよりも圧倒的に効率的です。",
  },
  {
    step: "Step 5：完成したらコピーして使う",
    content:
      "文書が完成したら、Canvas右上の「コピー」ボタンでテキスト全体をクリップボードにコピーできます。WordやNotionなど任意のツールに貼り付けて使いましょう。会話履歴にもCanvasの内容は保存されるため、後から同じ会話を開いて続きを編集することも可能です。",
  },
] as const;

const threeUses = [
  {
    title: "①文書作成・編集",
    icon: "📝",
    description:
      "ブログ記事、ビジネスメール、報告書、企画書、小説、SNS投稿文など、あらゆる文書をAIと共同制作できます。Canvasを使うと、AIが書いた下書きに対して「この段落をもっと具体的に」「結論を先に持ってくる構成に変えて」「3割短くして」と段階的に指示を出しながら、理想の文書を作り込んでいけます。通常チャットと違い、「全文をもう一度出力して」という手間が不要なのが最大の利点です。",
    examples: ["ブログ記事の下書きをゼロから作成", "メール文の文体・長さ・丁寧さを調整", "報告書の構成を変えながら最終稿まで仕上げる"],
  },
  {
    title: "②コード作成・デバッグ",
    icon: "💻",
    description:
      "プログラマーでなくても、Canvas上でコードを作成・修正できます。「このエラーメッセージを見せるからデバッグして」「コメントを日本語で追加して」「PythonをJavaScriptに変換して」といった指示が自然言語で行えます。コードの構文ハイライトにも対応しており、どこを変更したかが視覚的に分かります。",
    examples: ["Google Apps Scriptでスプレッドシートを自動化", "Pythonのデータ分析スクリプトをデバッグ", "HTMLメールのテンプレートをカスタマイズ"],
  },
  {
    title: "③プレゼン資料の骨格作成",
    icon: "📊",
    description:
      "PowerPointやKeynoteのスライドを直接作成はできませんが、「5枚のスライドの構成案と各スライドの内容」をCanvas上で作り込み、それをPowerPointに貼り付けるフローが効率的です。「経営会議向けに月次レポートの構成を5スライドで作って」と指示すると、各スライドのタイトル・要点・話すポイントがまとまった骨格文書が生成されます。",
    examples: ["月次報告スライドの構成案と各ページの要点", "新規事業の提案スライド骨格", "研修資料の章立てとコンテンツ素材"],
  },
] as const;

const fiveTips = [
  {
    tip: "コツ1：「まず全体の骨格を作って」から始める",
    detail:
      "最初から完璧な文書を求めず、「5章構成の目次だけ作って」「見出しと各セクションの2〜3行の要約だけ」と骨格の生成を先に依頼する方法が効率的です。骨格が確認できたら「2章を膨らませて」「3章の内容をもっと具体例を入れて書いて」と段階的に肉付けしていきます。いきなり「全文書いて」より、最終的な品質が上がります。",
  },
  {
    tip: "コツ2：「トーン指定」を最初に伝える",
    detail:
      "「フォーマルなビジネス文書で」「30代のビジネスパーソン向けの親しみやすい文体で」「箇条書きを多用したシンプルな構成で」など、文体・トーン・フォーマットを最初に指定しておくと、後の修正が少なくなります。途中で「全体をXXの文体に統一して」という指示も可能です。",
  },
  {
    tip: "コツ3：修正は「具体的な場所」を指定する",
    detail:
      "「もっとよくして」という抽象的な指示より、「2段落目の〇〇という表現を、もっとポジティブなニュアンスに変えて」「最後の締めの文章を、読者に行動を促す表現にして」と、場所と変更内容を明確にするほど、意図した修正が得られます。Canvas内の文章を直接選択してから指示するのが最も正確です。",
  },
  {
    tip: "コツ4：「バージョン比較」を活用する",
    detail:
      "Canvas右上の履歴ボタンから過去の編集バージョンを確認できます。「前のバージョンのほうが良かった」と感じたときはいつでも戻れます。A/Bテスト的に「同じ内容を別の文体で」と2パターン作ってもらい、比較してから選ぶ使い方も効果的です。",
  },
  {
    tip: "コツ5：コードには「動作環境」を明記する",
    detail:
      "コードを作成する際は「Python 3.11で動くように」「Node.js 20環境で」「Google Sheets の Apps Script として動作する」など、動作環境を明示します。バージョンや実行環境が不明確だと、動かないコードが生成されるリスクが高まります。また「エラーハンドリングを含めて」「日本語コメントを入れて」といった要件も最初に伝えましょう。",
  },
] as const;

export default function ChatgptCanvasGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPT Canvas完全ガイド2026" },
          ]}
        />

        {/* ヘッダー */}
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
                title="ChatGPTのCanvas（キャンバス）とは？文書・コード作成に革命！初心者でも使える新機能完全ガイド2026"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTのCanvas（キャンバス）とは？文書・コード作成に革命！初心者でも使える新機能完全ガイド2026
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTに文章を書いてもらったけど、修正のたびに全文コピーして貼り直すのが面倒…」——そんな体験をしたことはありませんか？
            2024年10月、OpenAIはその不満を解消する機能「Canvas（キャンバス）」を正式リリースしました。
            Canvasを使えば、AIと一緒にリアルタイムで文書を編集できます。書き直しのたびに全文が再生成されるのではなく、
            あなたが「ここをもう少し短く」と指示するとその部分だけが変更される——まるでAIが隣に座って一緒に資料を作ってくれるような体験です。
            この記事では、Canvasの仕組みから使い方・活用場面・使いこなしコツまで、初心者でも今日から使えるよう丁寧に解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT上級活用テクニック
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-custom-gpts-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            カスタムGPTs完全入門
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-writing-tool" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIライティングツール比較
          </Link>
          もあわせてご覧ください。
        </p>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox title="要点まとめ（結論先出し）" items={summaryItems} />
        </motion.section>

        {/* Canvasとは何か */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-is-canvas">Canvasとは何か</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Canvas（キャンバス）は、2024年10月にOpenAIがChatGPTへ追加した<strong>共同編集モード</strong>です。
            通常のChatGPTはチャット形式——質問を送ると回答が返ってくる「一問一答」の形式ですが、
            Canvasではチャット画面の横に独立した編集ウィンドウが開き、AIと一緒に文書やコードを作り込んでいけます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            最大の特徴は<strong>「インラインでの修正」</strong>です。通常のチャットで「もっと短くして」と依頼すると、
            AIは文書全体を書き直して新しいテキストとして出力します。そのたびに全文をコピー＆ペーストする必要があります。
            Canvasでは、修正指示を出すとCanvas内の該当箇所だけが変更され、他の部分はそのまま保持されます。
            変更箇所が色で強調表示されるため、何が変わったかも一目瞭然です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Canvasの名前はアーティストが絵を描く「キャンバス（画布）」から来ています。
            絵を描くように、AIと一緒に少しずつ手を加えながら最終的な作品（文書・コード）を完成させる——
            そのコンセプトが機能名に込められています。
          </p>

          <Callout type="info" title="Canvas対応モデルについて">
            Canvas機能を使うには、ChatGPTのGPT-4oまたは後継モデルが必要です。Canvas対応には
            ChatGPT Plus（月額20ドル）以上のプランが必要で、無料プランでは現時点（2026年2月）では利用できません。
            ただし、OpenAIは順次対応範囲を拡大しているため、最新情報はOpenAI公式サイトでご確認ください。
          </Callout>
        </motion.section>

        {/* 通常チャットとCanvasの違い */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="chat-vs-canvas">通常のChatGPTチャットとCanvasの違い</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            どちらを使うべきかを判断するために、通常チャットとCanvasの違いを整理しておきましょう。
          </p>

          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">比較項目</th>
                <th className="px-4 py-3 font-semibold text-gray-900">通常チャット</th>
                <th className="px-4 py-3 font-semibold text-gray-900 bg-will-lighter/30">Canvas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">主な用途</td>
                <td className="px-4 py-3 text-gray-600">質問・調べもの・短い会話・アイデア出し</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">文書・コード・資料など「作り込む成果物」</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">見た目</td>
                <td className="px-4 py-3 text-gray-600">チャット形式（縦一列に会話が流れる）</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">チャット欄＋横に編集ウィンドウ（2ペイン）</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">修正方法</td>
                <td className="px-4 py-3 text-gray-600">全文を再生成。毎回コピー&ペーストが必要</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">インライン修正。変更箇所のみ更新・色で強調表示</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">バージョン管理</td>
                <td className="px-4 py-3 text-gray-600">なし（会話履歴をさかのぼるのみ）</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">あり（履歴ボタンから過去バージョンに戻れる）</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">部分選択修正</td>
                <td className="px-4 py-3 text-gray-600">不可（全体への指示のみ）</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">可（テキスト選択して箇所を指定して修正）</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">長文作業の効率</td>
                <td className="px-4 py-3 text-gray-600">繰り返し修正が多いと煩雑</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">修正を重ねるほど効率が上がる</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">利用できるプラン</td>
                <td className="px-4 py-3 text-gray-600">無料プランを含む全プラン</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">Plus・Team・Pro・Enterprise（2026年2月時点）</td>
              </tr>
            </tbody>
          </RichTable>

          <p className="mt-4 text-base leading-8 text-gray-700">
            一言でまとめると、<strong>「質問して情報を得る」なら通常チャット、「作り込んで成果物を仕上げる」ならCanvas</strong>です。
            報告書、メール、プレゼン構成、コードのような「何度も修正して完成させるもの」はCanvasで作業するほうが格段に効率が上がります。
          </p>
        </motion.section>

        {/* 3つの主要用途 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="three-uses">Canvasで何ができる？3つの主要用途</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Canvasは文書とコードの両方に対応しています。特に活用度が高い3つの用途を詳しく解説します。
          </p>
          <div className="mt-8 space-y-8">
            {threeUses.map((item) => (
              <section key={item.title} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{item.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">活用例</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                    {item.examples.map((ex) => (
                      <li key={ex} className="pl-1 marker:text-gray-400">{ex}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="chatgpt-canvas-guide" />
        </motion.section>

        {/* 使い方ステップバイステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="how-to-use">Canvasの使い方ステップバイステップ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            初めてCanvasを使う方でも迷わないよう、起動から完成まで5ステップで解説します。
          </p>
          <div className="mt-8 space-y-6">
            {howToSteps.map((step, index) => (
              <div key={step.step} className="flex gap-5 rounded-xl border border-gray-200 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-will-primary text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{step.step}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700">{step.content}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout type="tip" title="すぐ試せるプロンプト例">
            <ul className="space-y-2">
              <li>「Canvasで、社内向けの週次報告メールのテンプレートを作って。ですます調、300字以内」</li>
              <li>「Canvasで、Python初心者向けにHello Worldから始まるチュートリアルコードを作って」</li>
              <li>「Canvasで、新サービスの提案書の目次と各章の概要を作って。5章構成」</li>
            </ul>
          </Callout>
        </motion.section>

        {/* Canvasが特に役立つ場面8選 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="use-cases">Canvasが特に役立つ場面8選</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            職業・用途別に、Canvasが特に効果を発揮するシーンをまとめました。
          </p>
          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">職業・役割</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Canvasで解決できる場面</th>
                <th className="px-4 py-3 font-semibold text-gray-900">具体的な使い方</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">営業・提案担当</td>
                <td className="px-4 py-3 text-gray-600">提案書・見積もりの文章を案件ごとにカスタマイズしたい</td>
                <td className="px-4 py-3 text-gray-600">テンプレートをCanvasで作り、顧客名・金額・課題を差し替えながら完成させる</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">マーケター・ライター</td>
                <td className="px-4 py-3 text-gray-600">ブログ記事・メルマガを何度も書き直しながら磨きたい</td>
                <td className="px-4 py-3 text-gray-600">初稿をCanvasで生成し、「SEOキーワードを追加して」「3割短く」と段階的に改稿</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">エンジニア・開発者</td>
                <td className="px-4 py-3 text-gray-600">コードのリファクタリング・コメント追加・バグ修正</td>
                <td className="px-4 py-3 text-gray-600">コードをCanvasに貼り付け「関数に分割して」「テストコードを追加して」と指示</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">非エンジニア（業務自動化）</td>
                <td className="px-4 py-3 text-gray-600">スプレッドシートのマクロやGASを作りたいがコードが書けない</td>
                <td className="px-4 py-3 text-gray-600">「Google Sheetsで〇〇するGASを作って」→エラーが出たら「このエラーを直して」とCanvas上で直接修正</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">人事・研修担当</td>
                <td className="px-4 py-3 text-gray-600">研修テキスト・マニュアルの草稿を効率的に作りたい</td>
                <td className="px-4 py-3 text-gray-600">「新入社員向けのOJTマニュアルを作って」→部門ごとの内容に細かく修正</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">経営者・管理職</td>
                <td className="px-4 py-3 text-gray-600">戦略文書・全社メール・プレスリリースの品質を高めたい</td>
                <td className="px-4 py-3 text-gray-600">骨格をCanvasで作り、トーン調整・論理構成の強化を繰り返す</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">学生・研究者</td>
                <td className="px-4 py-3 text-gray-600">レポート・論文の構成を整理しながら書き進めたい</td>
                <td className="px-4 py-3 text-gray-600">「この研究の要旨を400字でまとめて」→「もっと学術的な表現に」と磨く</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">フリーランス・副業</td>
                <td className="px-4 py-3 text-gray-600">複数クライアント向けの文書を素早く量産・カスタマイズしたい</td>
                <td className="px-4 py-3 text-gray-600">共通テンプレートをCanvasで管理し、クライアントごとの変更を効率よく反映</td>
              </tr>
            </tbody>
          </RichTable>
        </motion.section>

        {/* 5つのコツ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="five-tips">Canvasを使いこなす5つのコツ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Canvasを初めて使うと「なんとなく使えている」状態になりやすいですが、コツを押さえると品質と速度が大きく変わります。
          </p>
          <div className="mt-8 space-y-6">
            {fiveTips.map((item, index) => (
              <div key={item.tip} className="rounded-xl border-l-4 border-will-primary bg-gray-50 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.tip}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 制限と注意点 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="limitations">現時点の制限と注意点（2026年2月時点）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Canvasは非常に便利な機能ですが、現時点での制限も把握しておきましょう。
          </p>

          <div className="mt-6 space-y-4">
            <ArticleH3>プランの制限</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              Canvasは現時点でChatGPT Plus（月額2,000円前後）以上のプランが必要です。無料プランでは利用できません。
              ただし、OpenAIは過去にも機能を段階的に無料プランへ開放してきた実績があるため、今後変更になる可能性があります。
              最新情報はChatGPT公式サイトの料金ページでご確認ください。
            </p>

            <ArticleH3>エクスポート機能の制限</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              現時点では、Canvasで作成した文書をWord・PDF・Markdownなどのファイル形式で直接エクスポートする機能は限定的です。
              テキストのコピーボタンはありますが、書式（見出し・太字・箇条書きなど）をWord形式で保持したままエクスポートするには、
              コピーしてからWordやNotionに貼り付ける手間が発生します。
            </p>

            <ArticleH3>リアルタイムコラボレーションの非対応</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              Googleドキュメントのような「複数人が同時にリアルタイム編集する」機能はCanvasにはありません。
              あくまで「自分とAIの1対1の共同編集」です。チームで共有したい場合は、完成した文書をコピーしてGoogleドキュメントやNotionなどのコラボツールに移す必要があります。
            </p>

            <ArticleH3>画像・図の挿入非対応</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              現時点では、Canvas内に画像や図を直接挿入する機能はありません。テキストとコードのみに特化した編集環境です。
              グラフや図が必要な場合は、テキストで内容を固めてからPowerPointやFigmaなどの別ツールで視覚化するフローが現実的です。
            </p>
          </div>

          <Callout type="warning" title="最新情報は必ずOpenAI公式で確認を">
            Canvasの機能・対応プランは頻繁に更新されています。この記事の情報は2026年2月時点のものです。
            料金プランや機能の対応状況については、OpenAI公式サイト（openai.com）の最新情報をご確認ください。
          </Callout>
        </motion.section>

        {/* FAQ */}
        <motion.section
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

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="conclusion">まとめ：「コピペ地獄」から卒業して、AIと一緒に作る時代へ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTのCanvasは、文書・コード作成のワークフローを大きく変える機能です。この記事で押さえたポイントを振り返りましょう。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Canvasは「チャット＋編集ウィンドウ」の2ペイン構成。修正のたびに全文をコピペする必要がなくなる
            </li>
            <li className="pl-1 marker:text-gray-500">
              主な用途は3つ：文書作成・コード作成・プレゼン骨格。いずれも「繰り返し修正して完成させる成果物」に最適
            </li>
            <li className="pl-1 marker:text-gray-500">
              起動方法は「Canvasで〇〇を作って」と入力するだけ。専門知識は不要
            </li>
            <li className="pl-1 marker:text-gray-500">
              コツは「骨格→肉付け」の段階的アプローチ、トーン指定、部分選択修正の活用
            </li>
            <li className="pl-1 marker:text-gray-500">
              現時点ではPlus以上のプランが必要。エクスポート機能は限定的だが、今後の機能拡張に期待
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Canvasを使いこなすと、AIとのやりとりが「質問して回答をもらう」から「一緒に作品を作る」に変わります。
            初めて使うときは「Canvasで〇〇のメールを作って」と一言打つだけで十分です。
            使い続けるほど、AIとの共同作業の感覚が磨かれていきます。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            ChatGPTをさらに使いこなすヒントを毎週お届けしています。AIリブートのLINE公式アカウントをぜひ登録してください。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="ChatGPTをさらに使いこなすヒントを毎週配信中"
            description="ChatGPTをさらに使いこなすヒントを毎週お届けしています。AIリブートのLINE公式アカウントをぜひ登録してください。Canvas・プロンプト・最新機能など、実務ですぐ使えるTIPSを無料でお届けします。"
            buttonLabel="LINEで登録する（無料）"
            href="/line"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">次のステップ</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Canvasを使いこなしたら、次はプロンプトの書き方を学ぶと、AIの回答品質がさらに上がります。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy/blog/chatgpt-advanced-tips"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              ChatGPT上級活用テクニック
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級活用テクニック｜使いこなしの差がつく15の方法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-custom-gpts-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPTs（カスタムGPT）完全入門2026｜おすすめ15選と作り方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-writing-tool" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIライティングツール比較2026｜目的別おすすめ10選
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-slide-creation" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIでプレゼン資料を爆速作成｜ChatGPT×PowerPoint活用術
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
