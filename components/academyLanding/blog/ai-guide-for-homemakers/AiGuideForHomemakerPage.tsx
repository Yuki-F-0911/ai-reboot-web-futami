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

type AiGuideForHomemakerPageProps = {
  faqItems: readonly FAQItem[];
};

type SceneItem = {
  id: string;
  number: string;
  title: string;
  scene: string;
  promptExample: string;
  result: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";
const lineCtaButtonLabel = "今すぐ無料で登録する（30秒）";

const keywordTags = ["主婦 AI 活用", "専業主婦 ChatGPT 使い方", "主婦 生成AI", "家事 AI 効率化"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "intro", label: "主婦こそAIを使うべき、本当の理由" },
  { id: "scene-1", label: "シーン1：献立・料理の悩みをゼロにする" },
  { id: "scene-2", label: "シーン2：育児・子どもの勉強サポート" },
  { id: "scene-3", label: "シーン3：家計管理・節約アドバイス" },
  { id: "scene-4", label: "シーン4：文章を書く場面（PTA・お礼状・断り文書）" },
  { id: "scene-5", label: "シーン5：仕事復帰・スキルアップのサポート" },
  { id: "why-homemakers", label: "「今から始める」ことに、どんな意味があるか" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "もっと体系的にAIを学びたい方へ" },
] as const;

const quickSummaryPoints = [
  "AIは「料理・育児・文書作成」など主婦が時間を取られている場面でこそ威力を発揮します。",
  "スマートフォンがあれば今日から使えます。難しい操作は一切不要。",
  "宿題はAIに「書かせる」のではなく、子どもと「一緒に考える」ツールとして使いましょう。",
  "家計管理から保険見直し・助成金調べまで、お金まわりの情報収集にも使えます。",
  "今AIを使い始めることは、仕事復帰時に「AI活用できる人材」になる準備でもあります。",
];

const scenes: readonly SceneItem[] = [
  {
    id: "scene-1",
    number: "1",
    title: "献立・料理の悩みをゼロにする",
    scene: "「今日の夕食、何にしよう」と毎日悩んでいませんか？",
    promptExample:
      "今日の食材：豚肉・キャベツ・卵・ネギ。30分以内で作れる夕食レシピを3つ教えて。子どもが好きな味で。",
    result:
      "冷蔵庫の食材を入力するだけで、献立アイデアを即座に出してくれます。「子どもが嫌いな食材はなし」「塩分控えめで」など条件を加えるほど、家庭の状況に合った提案が返ってきます。週の献立をまとめて考えるのも得意です。「月曜〜金曜の夕食、食費2万円以内、重複なしで献立を立てて」と頼んでみてください。",
  },
  {
    id: "scene-2",
    number: "2",
    title: "育児・子どもの勉強サポート",
    scene: "「なんでお空は青いの？」「宿題がわからない」。子どもの質問に正確に答えるのは大変です。",
    promptExample:
      "小学3年生の子どもが「なぜ空は青いの？」と聞いてきました。わかりやすく教えてください。",
    result:
      "難しい概念も子どもの年齢に合った言葉で説明してもらえます。宿題サポートでは「読書感想文の書き方の流れを教えて」「この算数の問題の解き方を、子どもに教えるにはどう説明すればいい？」など「一緒に考えるサポート」として活用しましょう。AIに丸ごと書かせるのではなく、「どう進めればいいかのヒント」をもらう使い方が理想的です。",
  },
  {
    id: "scene-3",
    number: "3",
    title: "家計管理・節約アドバイス",
    scene: "「食費を抑えたいけど、何から手をつければいいかわからない」。漠然とした悩みも相談できます。",
    promptExample:
      "食費を月5万円から4万円に抑えたいです。4人家族、子ども2人。まず何から始めればいいか教えてください。",
    result:
      "家計改善の優先順位を整理してくれます。また「育児給付金の申請条件を教えて」「電気代を下げるために今すぐできることは？」「学資保険と積立NISAどっちが得か、素人でもわかる形で比較して」など、お金まわりの情報収集にも役立ちます。具体的な判断（契約・投資など）は専門家に相談が必要ですが、「事前知識を整理する」用途には非常に便利です。",
  },
  {
    id: "scene-4",
    number: "4",
    title: "文章を書く場面（PTA・お礼状・断り文書）",
    scene: "PTA役員・先生へのメール・習い事の退会連絡。「うまく書けない」「失礼にならないか心配」。",
    promptExample:
      "習い事（ピアノ教室）を辞めることになりました。先生に失礼なく、感謝を伝える退会の連絡文を作ってください。子どもは3年通いました。",
    result:
      "文章作成はAIが最も得意とする場面です。「PTAの学校行事への協力依頼文を書いて」「先生へのお礼の手紙、300字程度で」など、シーン・相手・文字数を伝えるだけで、丁寧な文章の下書きを作ってくれます。あとは自分らしい言葉に少し手を加えるだけ。毎回「うまく書けたか不安」という悩みがなくなります。",
  },
  {
    id: "scene-5",
    number: "5",
    title: "仕事復帰・スキルアップのサポート",
    scene: "「子育てが落ち着いたら働きたい。でも10年ブランクがあって自信がない」。その悩みもAIに相談できます。",
    promptExample:
      "育児で10年間専業主婦をしていました。パートから働き始めたいのですが、今の時代、どんな仕事が向いていますか？得意なことは料理・段取り・コミュニケーションです。",
    result:
      "現在の自分のスキルや状況を伝えると、向いている仕事の候補と理由を教えてくれます。「履歴書の志望動機、10年ブランクありでも前向きに書く方法を教えて」「MOS（マイクロソフトオフィスの資格）を独学で取りたい。勉強の進め方を教えて」など、就職準備にも役立ちます。",
  },
];

function SceneSection({ item }: { item: SceneItem }) {
  return (
    <motion.div
      id={item.id}
      className="mt-8 rounded-xl border border-gray-200 bg-white p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
          {item.number}
        </span>
        <h3 className="blog-h3 text-lg font-bold text-gray-900">{item.title}</h3>
      </div>
      <p className="mt-3 text-base font-medium text-gray-700">{item.scene}</p>
      <div className="mt-4">
        <p className="text-xs font-semibold tracking-wide text-gray-500">プロンプト例（コピーして使えます）</p>
        <div className="mt-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-sm leading-7 text-gray-800">
          {item.promptExample}
        </div>
      </div>
      <div className="mt-4 rounded-lg border-l-4 border-will-primary bg-will-lighter px-5 py-4">
        <p className="text-sm font-semibold text-will-primary">AIを使うとどうなるか</p>
        <p className="mt-1 text-sm leading-7 text-gray-700">{item.result}</p>
      </div>
    </motion.div>
  );
}

function LineCtaBox({ className }: { className: string }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-gray-900">{lineCtaTitle}</p>
      <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
        家事・育児・仕事復帰でAIを活用した事例から、今日から使えるプロンプト例まで、毎週わかりやすい言葉でお届けしています。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        {lineCtaButtonLabel}
      </a>
    </motion.section>
  );
}

export default function AiGuideForHomemakerPage({ faqItems }: AiGuideForHomemakerPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "主婦がAIを使うと何が変わる？家事・育児・仕事探しに役立つ実践ガイド" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="主婦がAIを使うと何が変わる？家事・育児・仕事探しに役立つ実践ガイド【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            主婦がAIを使うと何が変わる？家事・育児・仕事探しに役立つ実践ガイド【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月25日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            毎日の献立、何にしようか迷う時間ってもったいないと思いませんか？
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            AIは、主婦が一番「時間を取られている」場面でこそ役立ちます。難しい操作は不要。スマートフォンがあればOKです。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            「主婦でもできる」ではなく、「<strong>主婦だからこそ使うべき場面がたくさんある</strong>」。この記事では、料理・育児・家計・文書作成・仕事復帰と、日常のシーン別に具体的な使い方とプロンプト例をまとめました。今日からそのまま使えます。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AIの基本的な始め方は
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            スマホでChatGPTを始めるガイド
          </Link>
          、時短効果の実例は
          <Link href="/academy/blog/ai-time-saving-calculation" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIで時間はどのくらい節約できるか試算してみた
          </Link>
          もあわせてご覧ください。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {quickSummaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* はじめに */}
        <motion.section
          id="intro"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">主婦こそAIを使うべき、本当の理由</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            「AIは仕事している人のものでしょ」「私には関係ない」。そう思う方も多いはずです。でも、少し考えてみてください。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            献立を考える、宿題を教える、PTAのお知らせを書く、家計を見直す、習い事の断り文を書く——これらはすべて、主婦が毎日こなしている「小さな仕事」です。そして、これらの<strong>すべてにAIが使えます</strong>。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            「主婦は時間がある」は間違いです。家事・育児・スケジュール管理を一手に担うのは、実質的にプロジェクトマネジメントに近い仕事量です。だからこそ、「判断のサポート」と「文章の下書き作成」に優れたAIは、主婦との相性が抜群に良い。
          </p>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">AIを使うのに必要なもの</p>
            <ul className="mt-3 space-y-2 pl-1 text-sm leading-7 text-amber-700">
              <li>✓ スマートフォン（iPhoneでもAndroidでもOK）</li>
              <li>✓ インターネット接続（Wi-FiまたはLTE）</li>
              <li>✓ メールアドレス（既存のもので登録できます）</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-amber-700">パソコンがなくても、タブレットでも使えます。</p>
          </div>
        </motion.section>

        {/* シーン別活用 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">シーン別：主婦が今日から使えるAI活用法</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            それぞれのシーンで、そのままコピーして使えるプロンプト例を掲載しています。まず1つ、試してみてください。
          </p>
        </motion.section>

        {scenes.map((item) => (
          <SceneSection key={item.id} item={item} />
        ))}

        <LineCtaBox className="blog-cta-box mt-14 rounded-lg border border-green-200 bg-green-50 p-6" />

        {/* 今から始める意味 */}
        <motion.section
          id="why-homemakers"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">「今から始める」ことに、どんな意味があるか</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            AIを使うことには、日常の便利さだけでなく、もう少し先の話もあります。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: "🕰️",
                title: "仕事をしていない時間でも習得できる",
                body: "「AIの使い方」は資格と違い、試験がありません。日常の家事の中で少しずつ使いながら、自然と身につけられます。育児中でも、通勤がなくても、スキルは積み上がります。",
              },
              {
                icon: "💼",
                title: "仕事復帰時に「AI活用できる人材」になれる",
                body: "パートや再就職の面接で「ChatGPTやAIを業務に使えます」と言える人は、まだ多くありません。今から日常で使い慣れておくことが、仕事の現場での大きな武器になります。",
              },
              {
                icon: "📚",
                title: "学歴・職歴に関係なく、今日から始められる",
                body: "AIの操作に特別な学歴や職歴は関係ありません。「使った時間が長い人が使いこなせる」というシンプルな世界です。スタートが早いほど有利です。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-2xl">{item.icon}</p>
                <h3 className="blog-h3 mt-2 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-base font-semibold text-gray-900">AIを使い始めた主婦のリアルな声（よくあるもの）</p>
            <div className="mt-4 space-y-4">
              {[
                {
                  voice: "「献立を毎日考えるのが嫌いだったのに、AIに任せたら週の夕食ぶんを10分で決められるようになった」",
                  label: "専業主婦・30代・子ども2人",
                },
                {
                  voice: "「子どもに質問されて答えられないことが減った。AIを一緒に調べることで、むしろ子どもとの会話が増えた」",
                  label: "兼業主婦・40代",
                },
                {
                  voice: "「PTA関連の文書を毎回うまく書けるか不安だったが、下書きをAIに作ってもらってから自信が出た」",
                  label: "専業主婦・30代・役員経験あり",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm leading-7 text-gray-800">{item.voice}</p>
                  <p className="mt-1 text-xs text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <LineCtaBox className="blog-cta-box mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6" />

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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">Q. {item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                スマホでChatGPTを始める方法｜初心者向けステップガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-time-saving-calculation" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIは本当に時間を節約してくれるのか：主婦・会社員・フリーランス別に具体的な数字で試算してみた
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-prompt-writing-basics" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIプロンプトの書き方入門：初心者が知っておくべき10のコツ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-job-hunting-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを活用した仕事探し・就活ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-learning-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI×勉強・資格・語学学習完全ガイド
              </Link>
            </li>
          </ul>
        </section>

        {/* Academy CTA */}
        <motion.section
          id="academy-cta"
          className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">もっと体系的にAIを学びたい方へ</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            「この記事に書かれていること以外にも、AIをもっと活用したい」「ちゃんと学んで、仕事にも活かせるようになりたい」。そう感じた方は、学ぶ環境を整えることが次のステップです。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、AIを初めて使う方から仕事復帰・スキルアップを目指す方まで、自分のペースで学べる環境を提供しています。育児中・家事の合間でも続けやすいカリキュラムです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "日常生活の延長で学べる",
                body: "「料理の献立作り」「子育ての質問」など、日常で使いながら自然にAIに慣れていくスタイルで学べます。「勉強している」感覚なく、気づいたら使いこなせるようになります。",
              },
              {
                title: "仕事復帰に向けたスキルも習得",
                body: "「将来パートを始めたい」「在宅で仕事をしたい」という方向けに、業務でそのまま使えるAI活用スキルも学べます。履歴書に書けるレベルのスキルを目指せます。",
              },
              {
                title: "疑問はすぐに解決できる環境",
                body: "「この使い方は合っている？」「もっといい方法がある？」など、一人で進めているとどうしても生まれる疑問を、サポートを通じて解消できます。",
              },
            ].map((pillar) => (
              <section key={pillar.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-7">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              アカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
