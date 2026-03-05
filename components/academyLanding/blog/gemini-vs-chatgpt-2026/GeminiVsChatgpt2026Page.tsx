import Link from "next/link";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import { MotionHeader, MotionSection } from "./MotionReveal";

type FAQItem = {
  question: string;
  answer: string;
};

type GeminiVsChatgpt2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Gemini vs ChatGPT 2026",
  "Google AI Pro",
  "ChatGPT Plus 比較",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "price-comparison", label: "料金比較（2026年3月）" },
  { id: "performance-2026", label: "2026年の性能比較" },
  { id: "gemini-strengths", label: "Geminiが勝る場面" },
  { id: "chatgpt-strengths", label: "ChatGPTが勝る場面" },
  { id: "verdict", label: "結論・選び方" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related", label: "関連記事" },
  { id: "academy-cta", label: "AIリブートアカデミーのご案内" },
] as const;

const pricingRows = [
  {
    service: "Google AI Pro",
    plan: "旧Gemini Advanced",
    monthly: "¥2,900/月",
    model: "Gemini 3.1 Pro（フルアクセス）",
    trial: "Google One Premium 試用あり",
  },
  {
    service: "ChatGPT Plus",
    plan: "OpenAI Plus",
    monthly: "$20/月（約¥3,000）",
    model: "GPT-5.2（フルアクセス）",
    trial: "無料トライアルなし（無料版あり）",
  },
] as const;

const geminiStrengths = [
  {
    title: "最大の武器：コンテキストウィンドウ（100万〜200万トークン）",
    detail:
      "書籍1冊・コードベース全体・1年分のSlackを一撃で処理できる業界最長クラスのコンテキストウィンドウ。50万語以上の資料をプロンプト一発で構造化する使い方も実証済みです。",
  },
  {
    title: "NotebookLM統合 + Google Workspace 連携",
    detail:
      "NotebookLMで整理した知識をGeminiの頭脳で直接活用できます。Gmail・Docs・Sheetsとの統合に加え、300ソース入りのカスタムAIブレインを構築できる点がビジネス活用の核心です。",
  },
  {
    title: "マルチモーダル処理の幅",
    detail:
      "画像分析・YouTube動画の要約・PDFの読み取りをひとつのモデルで処理できます。Google フォトとの連携など、Googleサービス全体でのシームレスな活用が強みです。",
  },
  {
    title: "⚠️ 弱点：マルチステップ指示の実行精度",
    detail:
      "「計画して何もしない」という批判が繰り返し報告されています。複数の手順を順番に実行するタスクや、ツール連携を組み合わせた自動化では失敗率が高め。シングルショットの大量処理には強く、複雑なワークフロー自動化には不向きです。",
  },
] as const;

const chatgptStrengths = [
  {
    title: "最大の特徴：メモリ機能でパートナー的存在に",
    detail:
      "蓄積された文脈と「判断されずに話せる安心感」が習慣化の最大の理由です。長期間使うほど自分向けに最適化されていく体験は他のAIにはない強みです。⚠️ ただしメモリの同期ズレや信頼性低下への不満も根強く、信頼性を優先してオフにしているユーザーも多い点には注意が必要です。",
  },
  {
    title: "GPT-5.2 Thinking モードの深掘り分析",
    detail:
      "「しつこく徹底的に考え抜く」特性で、調べ物・ファクトチェック・深掘り分析が得意です。iPhone/Apple Watchへの通知連携など利便性も高く、時間のかかるタスクをバックグラウンドで処理できます。",
  },
  {
    title: "GPTs と外部サービス連携のエコシステム",
    detail:
      "特定業務に特化したカスタムGPTs（カスタムAI）が公開・共有されています。ZapierやMakeとの連携でノーコード自動化の選択肢も広く、外部サービスとの連携エコシステムの成熟度は最高水準です。",
  },
  {
    title: "画像生成（GPT Image 1.5）との統合",
    detail:
      "ChatGPT Plus内でGPT Image 1.5を使った画像生成が完結します（旧画像モデルは2026年5月廃止予定で、GPT Image 1.5へ移行）。文章と画像を往復しながらSNS投稿・プレゼン資料・ビジュアルコンテンツを一連の会話で制作できます。",
  },
] as const;

const verdictCards = [
  {
    condition: "Googleサービスをメインで使っている",
    recommendation: "Google AI Pro",
    reason: "Gmail・Docs・Sheetsとの直接統合が業務効率を最も高めます。",
  },
  {
    condition: "GPTsやZapier連携を活用したい",
    recommendation: "ChatGPT Plus",
    reason: "外部サービスとの連携エコシステムが圧倒的に充実しています。",
  },
  {
    condition: "クリエイティブ制作・画像生成が中心",
    recommendation: "ChatGPT Plus",
    reason: "GPT Image 1.5（DALL\u002dE後継）との統合と創作系タスクでの完成度が強みです。",
  },
  {
    condition: "コーディング・技術的な作業が多い",
    recommendation: "Claude Pro も検討",
    reason: "20分間粘り強く自己修正し続けるコーディング能力と、Microsoft 365ネイティブ連携による企業ユーザー対応が強みです。",
  },
] as const;

export default function GeminiVsChatgpt2026Page({ faqItems }: GeminiVsChatgpt2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Gemini 3.1 vs ChatGPT 2026" },
          ]}
        />

        <MotionHeader
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
                title="Gemini 3.1 vs ChatGPT 2026｜どちらを選ぶべきか完全比較"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Gemini 3.1 vs ChatGPT 2026｜どちらを選ぶべきか完全比較
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年3月4日（確認日ベース）</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            2026年のAI選択は「GeminiかChatGPTか」という2択から、「用途別モデルルーティング」へと変わりつつあります。
            ただし、有料プランを1つだけ選ぶとしたら？本記事では料金・性能・用途の3軸で、2026年3月時点の最新情報を整理します。
          </p>
        </MotionHeader>

        <section className="mt-8 rounded-lg border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-base font-bold text-gray-900">この記事でわかること</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">Gemini 3.1 Pro（Google AI Pro）とChatGPT Plusの料金・機能比較</li>
            <li className="pl-1">2026年3月時点のベンチマーク数値と「その限界」</li>
            <li className="pl-1">用途別に選ぶための判断軸（Googleユーザー/クリエイター/コーダー）</li>
            <li className="pl-1">両方を無料で試してから決める方法</li>
          </ul>
        </section>

        <section className="mb-8 mt-8 rounded-xl border border-blue-500 bg-blue-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Answer Box</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            GmailやGoogle Docsをメインで使うならGoogle AI Pro（¥2,900/月）が連携効率で優位。
            GPTsやGPT Image 1.5活用、クリエイティブ制作ならChatGPT Plus（約¥3,000/月）が強い。
            最善の選び方は「両方の無料版を2週間試してから、よく使う方を有料化する」です。
          </p>
        </section>

        <ArticleTOC items={tocItems} />

        <MotionSection
          id="summary"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Gemini 3.1 Pro（2026年2月19日リリース）はARC-AGI-2: 77.1%、GPQA Diamond: 94.3%を記録。</li>
            <li className="pl-1 marker:text-gray-500">Google AI ProはGemini Advancedの名称変更版（2025年5月〜）。料金・機能は同等。</li>
            <li className="pl-1 marker:text-gray-500">{"ChatGPT PlusはGPTsとGPT Image 1.5（DALL\u002dE後継）のエコシステムが最大の強み。メモリ機能によるパートナー体験も継続利用の核心。"}</li>
            <li className="pl-1 marker:text-gray-500">料金はほぼ同等（約¥3,000/月）。用途と既存ツール環境で選ぶのが正解。</li>
          </ul>
        </MotionSection>

        <MotionSection
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </MotionSection>

        <MotionSection
          id="price-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">料金比較（2026年3月）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            有料プランの月額はほぼ同水準。差は料金より「何がついてくるか」にあります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[640px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">サービス</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">プラン</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">月額</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">利用できるモデル</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">無料試用</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="py-4 px-4">{row.plan}</td>
                    <td className="py-4 px-4">{row.monthly}</td>
                    <td className="py-4 px-4">{row.model}</td>
                    <td className="py-4 pl-4">{row.trial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            なお、Google AI Ultraは¥30,000+/月（2026年3月時点）と法人・ヘビーユーザー向けの上位プランです。
            個人が最初に検討するのはGoogle AI Pro一択です。
          </p>
          <p className="mt-3 text-xs leading-6 text-gray-500">
            出典: Google AI公式、OpenAI公式（確認日: 2026-03-04）。料金は変更される場合があります。
          </p>
        </MotionSection>

        <MotionSection
          id="performance-2026"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">2026年の性能比較</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ベンチマーク最強がイコール「あなたに最適」ではありません。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Gemini 3.1 Pro（2026年2月19日リリース）の公式発表値：
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold">ARC-AGI-2: 77.1%</span>
              　─　新しい問題への汎化能力を測る指標。業界最高水準。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold">GPQA Diamond: 94.3%</span>
              　─　博士レベルの専門知識を問う試験。専門家水準を超えたスコア。
            </li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            GPT-5.2（OpenAI）やClaude Opus 4.6（Anthropic）もトップクラスのベンチマーク値を持ちます。
            重要なのは「あなたが実際に使うタスクで試してみること」です。
            メール返信の質・コード生成のデバッグ精度・企画書の論理構成など、
            自分の業務に近いプロンプトで比較するのが最も意味があります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ベンチマーク数値は、同じ数値でも評価方法・プロンプト設計・モデルバージョンによって変わります。
            参考指標として使いつつ、最終判断は実際の使用感で行ってください。
          </p>
        </MotionSection>

        <MotionSection
          id="gemini-strengths"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Geminiが勝る場面</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Googleのサービス圏内で使う人ほど、Geminiの恩恵は大きくなります。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {geminiStrengths.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          id="chatgpt-strengths"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ChatGPTが勝る場面</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ChatGPTの強みはモデル性能より「エコシステムの厚み」にあります。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {chatgptStrengths.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="gemini-vs-chatgpt-2026" />
        </MotionSection>

        <MotionSection
          id="verdict"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">結論・選び方</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            用途と既存ツール環境で選ぶ。それが最も後悔しない判断基準です。
          </p>
          <div className="mt-6 space-y-3">
            {verdictCards.map((card) => (
              <div
                key={card.condition}
                className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:gap-5"
              >
                <div className="flex-1">
                  <p className="text-sm text-gray-600">こんな人は</p>
                  <p className="mt-0.5 text-sm font-semibold text-gray-900">{card.condition}</p>
                </div>
                <div className="shrink-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">おすすめ</p>
                  <p className="mt-0.5 text-base font-bold text-gray-900">{card.recommendation}</p>
                </div>
                <div className="flex-1 sm:border-l sm:border-gray-200 sm:pl-5">
                  <p className="text-sm leading-7 text-gray-600">{card.reason}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-gray-900">最強の選び方: 両方を無料で試してから決める</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1">Gemini無料版（Gemini 2.0 Flash）とChatGPT無料版（GPT-4o mini）を両方登録する</li>
              <li className="pl-1">自分がよく使うタスク（メール・企画書・コード・翻訳など）で同じプロンプトを試す</li>
              <li className="pl-1">2週間使ってみて「より多く使った方」を有料化する</li>
            </ol>
          </div>
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-gray-900">用途別モデルルーティングの補足：Grok 4.2 について</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              X（旧Twitter）のリアルタイムデータへのアクセスが唯一無二の強みで、速報やXトレンドの把握に特化しています。
              ⚠️ ただし独立調査でファクトチェック精度の低さが報告されており（誤引用率が競合他社より高いという結果も）、情報源として単体利用するのは非推奨です。
            </p>
          </div>
        </MotionSection>

        <MotionSection
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </MotionSection>

        <MotionSection
          id="related"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/ai-trends-february-2026"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                2026年2月AI重大更新｜GPT・Gemini・Claude最新情報まとめ
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/ai-free-plan-comparison-2026"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI無料プラン比較2026｜ChatGPT・Gemini・Claudeどれが使えるか
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/ai-tool-choice-fatigue-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIツール選択疲れの解消法｜選び方の判断軸を整理する
              </Link>
            </li>
          </ul>
        </MotionSection>

        <MotionSection
          id="academy-cta"
          className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            GeminiかChatGPTかという問いは、ツール選定の出発点です。本質は「どのAIを選ぶか」より「AIをどの業務課題に接続するか」にあります。
            AIリブートアカデミーでは、生成AI活用力の習得に加え、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりを一体で設計しています。
            自分のキャリアにAIをどう組み込むかを考えたい方は、学習プロセス全体を見直すことが有効です。
          </p>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              AIリブートアカデミーの詳細を見る
            </Link>
          </div>
        </MotionSection>
      </article>
    </main>
  );
}
