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

const keywordTags = ["AI 旅行計画", "ChatGPT 旅行", "Gemini 旅行", "旅行 AI 活用", "旅程表 自動作成"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "how-ai-changes-travel", label: "AIで旅行計画はここまで変わった" },
  { id: "planning-steps", label: "旅行の各ステップでのAI活用" },
  { id: "domestic-guide", label: "国内旅行での活用実例" },
  { id: "overseas-guide", label: "海外旅行での活用実例" },
  { id: "prompt-15", label: "今すぐ使えるプロンプト15選" },
  { id: "cautions", label: "AI旅行計画の注意点と限界" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ" },
] as const;

const summaryItems = [
  "AIを使えば旅行計画の下調べ・スケジュール作成・持ち物リスト・現地フレーズ準備を大幅に効率化できる。初心者でも「〇〇に3日間。予算5万円でスケジュールを」のように話しかけるだけでOK",
  "ChatGPTは対話形式でスケジュールを練り上げるのが得意。Geminiは地図・Googleサービス連携が強み。目的に応じて使い分けると効果が上がる",
  "国内旅行では宿の候補選び・食事スポット・移動ルートの効率化に。海外旅行では英会話フレーズ・文化的マナー・緊急時の対応フレーズ準備に特に役立つ",
  "AIの情報は2023〜2024年時点でカットオフされているケースが多い。宿・交通・観光スポットの予約情報は必ず公式サイトや直接確認で最新情報を確かめること",
  "「旅行後のフォトアルバムのキャプション作成」「旅の感想ブログ文章化」にもAIは役立つ。計画→現地→振り返りまでAIが旅のパートナーになれる",
] as const;

const planningSteps = [
  {
    phase: "①行き先・テーマ決め",
    icon: "🗺️",
    description: "「国内で温泉とグルメを楽しみたい。2泊3日で予算4万円。東京発。車なし」のように条件を伝えると、候補地リストと各地の特徴を比較してくれます。「子連れファミリー向けで安全な海外先を3つ教えて」「一人旅で人混みが少ない穴場を探したい」など、個人の状況に合わせた提案が得意です。",
    promptExample: "国内旅行で温泉とご当地グルメを楽しみたいです。2泊3日、予算4万円（交通費含む）、東京発、公共交通機関のみ。オススメの行き先を3つ比較して教えてください。",
  },
  {
    phase: "②スケジュール・旅程表の作成",
    icon: "📅",
    description: "行き先が決まったら、具体的な旅程表を作ってもらいましょう。「何時に起きて・どこへ行って・何を食べて・どこで泊まる」という時系列のスケジュールをテーブル形式やリスト形式で出力してもらえます。「移動時間も含めて」「子供がいるのでゆったりめに」など細かい条件も追加できます。",
    promptExample: "京都2泊3日の旅程表を作ってください。1日目：金閣寺・嵐山エリア、2日目：伏見稲荷・祇園、3日目：二条城・錦市場。各日ごとに移動時間を含めた時系列スケジュール（朝9時スタート）を表形式で。食事スポットも1か所ずつ提案してください。",
  },
  {
    phase: "③持ち物リスト作成",
    icon: "🧳",
    description: "「3泊4日の沖縄旅行・夏・海水浴あり・子ども連れ」のように条件を伝えると、忘れがちなものまで含めた持ち物チェックリストを作ってくれます。「登山ありの場合」「ヨーロッパへの初めての海外旅行」「ビジネス出張」など目的に応じたカスタムリストが出力されます。",
    promptExample: "海外旅行（ヨーロッパ・5泊7日・夏）の持ち物チェックリストを作ってください。初めての海外旅行です。衣類・電子機器・医薬品・書類・保険などカテゴリ別に整理してください。特に初めての海外で見落としがちなものも含めて。",
  },
  {
    phase: "④現地情報・食事・観光スポット調査",
    icon: "🍜",
    description: "「〇〇でランチにおすすめのお店の条件は？」「〇〇の観光スポットを予算別・所要時間別に整理して」と聞くと、現地情報をまとめて教えてくれます。ただし、AIの情報は古い場合があるため、実際の予約は口コミサイトや公式サイトで確認することが重要です（後述の注意点を参照）。",
    promptExample: "京都・嵐山エリアで昼食を食べるとしたら、どんなジャンルの食事が名物ですか？また、人気エリアのため混雑を避けるなら何時頃がおすすめか、地元民が通うスポットの特徴なども教えてください。（予約必要な店は自分で確認します）",
  },
  {
    phase: "⑤予算・費用シミュレーション",
    icon: "💰",
    description: "「東京→大阪2泊3日の概算費用を教えて。新幹線利用・ビジネスホテル・食事1日3000円として」のように条件を入力すると、費用の内訳と合計の目安を計算してくれます。「節約したい場合」「少し贅沢な旅にしたい場合」の費用差も比較してもらえます。",
    promptExample: "東京→京都の2泊3日旅行の概算費用を教えてください。交通：新幹線（自由席）、宿泊：1泊8000円のビジネスホテル×2泊、食事：1日3食で合計3000円として計算してください。観光スポットの入場料（主要3か所として）も含めた総額を教えてください。",
  },
] as const;

const domesticExamples = [
  {
    title: "家族旅行（子連れ）のプランニング",
    prompt:
      "小学生の子ども2人（8歳・10歳）と夫婦の4人家族で、夏休みに2泊3日で関西を旅行したいです。予算20万円以内（宿・交通含む）。東京発・新幹線利用。子どもが喜ぶスポット優先で、移動は多すぎずゆったりめのスケジュールをお願いします。",
    situation: "子連れ家族旅行",
  },
  {
    title: "一人旅・女性の安全なプラン",
    prompt:
      "女性の一人旅で、国内の温泉地に1泊2日で行きたいです。予算3万円以内。東京近郊（2時間圏内）で、一人でも安心して過ごせる旅館と、女性一人でも入りやすい食事処を教えてください。日帰りも含めて複数の選択肢をください。",
    situation: "女性一人旅",
  },
  {
    title: "夫婦・カップルの記念旅行",
    prompt:
      "結婚10周年記念の国内旅行を計画しています。2泊3日・予算15万円（少し贅沢に）。静かで自然豊かなエリアでの宿泊と、特別感のある食事を楽しみたいです。伊豆・箱根・長野・山陰エリアあたりで、ロマンチックな旅行プランの候補を3つ比較して教えてください。",
    situation: "記念旅行・カップル",
  },
] as const;

const overseasExamples = [
  {
    title: "初めての海外旅行（台湾3泊4日）",
    prompt:
      "初めての海外旅行で台湾（台北）に3泊4日で行きます。海外旅行の経験ゼロです。①準備しておくこと（パスポート・保険・SIMカードなど）②現地での基本的な注意事項③おすすめの観光スポット・グルメ④緊急時の英語/中国語フレーズ を教えてください。",
    situation: "初海外・台湾",
  },
  {
    title: "ヨーロッパ旅行の旅程作成（パリ5泊）",
    prompt:
      "パリ5泊6日の旅程を作ってください。観光スポット：エッフェル塔・ルーブル美術館・ベルサイユ宮殿・モンマルトル・オルセー美術館。移動は地下鉄・徒歩中心。各日のスケジュール（午前・午後・夕食）を分けて時系列で作成してください。混雑が少ない時間帯のアドバイスも添えてください。",
    situation: "ヨーロッパ観光",
  },
  {
    title: "海外旅行前の英会話フレーズ準備",
    prompt:
      "英語が苦手な初心者です。ヨーロッパ旅行（英語が通じる国）で実際に使う英会話フレーズを教えてください。①ホテルチェックイン ②レストランで注文 ③お土産購入時の値段確認 ④道に迷ったとき ⑤体調不良時。各シーン5フレーズずつ、発音のカタカナ読みも付けてください。",
    situation: "英会話フレーズ集",
  },
] as const;

const cautions = [
  {
    title: "AIの情報は「最新」ではないことが多い",
    detail:
      "ChatGPT・Geminiなどの主要AIモデルは、学習データのカットオフ（更新停止）日があり、2023〜2024年初頭の情報までしか持っていないことが多いです。宿の廃業・料金改定・観光スポットの営業時間変更・新規オープン店舗の情報は、AIが知らないケースがあります。スケジュールや候補地の選定はAIに任せつつ、実際の予約・確認は必ず公式サイトや予約サービスで行ってください。",
  },
  {
    title: "「おすすめのお店」はAIの作り話（ハルシネーション）に注意",
    detail:
      "AIに「〇〇エリアのランチにおすすめのお店を教えて」と聞くと、実在しない店名や電話番号・住所を堂々と答えることがあります（ハルシネーション）。特定の店名・予約情報・電話番号はAIからは取得せず、Googleマップ・食べログ・TripAdvisorなどの実際のサービスで検索・確認してください。",
  },
  {
    title: "交通・移動の最新ルート・料金は別途確認を",
    detail:
      "電車の乗り換えルートや料金はAIが提示する金額と実際が異なる場合があります。移動計画はGoogleマップや乗換案内アプリで都度確認することをお勧めします。特に海外での移動手段（バスのルート変更・交通カードの仕様など）は最新情報が重要です。",
  },
  {
    title: "ビザ・入国要件は必ず最新の公式情報を確認",
    detail:
      "海外旅行では、ビザの取得要件・ワクチン接種証明・入国審査の要件は国や時期によって変わります。AIが「〇〇はビザ不要」と答えても、その情報が古い可能性があります。外務省の海外安全情報・現地大使館の公式ページ・航空会社の案内で必ず最新情報を確認してください。",
  },
] as const;

export default function AiTravelPlanningGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI旅行計画完全ガイド" },
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
                title="AIで旅行計画が変わる！ChatGPT・Geminiを使った旅行準備の完全ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIで旅行計画が変わる！ChatGPT・Geminiを使った旅行準備の完全ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            旅行の計画って、正直けっこう大変ですよね。行き先を調べて、スケジュールを組んで、宿を探して、持ち物をそろえて……
            気づくと「旅行の準備で疲れてしまった」という経験、ありませんか？
            AIを使えば、そのモヤモヤした準備作業が驚くほど変わります。「〇〇に3日間旅行したい。予算5万円。スケジュールを作って」と
            話しかけるだけで、移動・食事・観光スポットをまとめた旅程表がみるみる出来上がるのです。
            この記事では、ChatGPT・Geminiを使った旅行計画の方法を、実際に使えるプロンプト例とともに初心者の方にもわかりやすく解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-hobby-lifestyle-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIで趣味が10倍楽しくなる活用術
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT上級活用テクニック
          </Link>
          ・
          <Link href="/academy/blog/ai-overview-map-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI全体マップ2026
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

        {/* AIで旅行計画はここまで変わった */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="how-ai-changes-travel">AIで旅行計画はここまで変わった</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「行き先を何十個もブックマークして、最後どれを選べばいいかわからなくなった」——旅行計画あるあるではないでしょうか。
            従来のやり方では、ガイドブックや旅行サイトを見て、食べログで食事を調べて、ホテルを比較して……と
            情報収集だけで数時間かかることも珍しくありませんでした。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIを使うと、このプロセスが根本から変わります。具体的には：
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-gray-700">
            <li className="pl-1 marker:text-gray-400"><strong>行き先の候補選び</strong>：条件（予算・日数・目的・出発地）を伝えると複数の候補を比較してくれる</li>
            <li className="pl-1 marker:text-gray-400"><strong>旅程表作成</strong>：「何時にどこへ行って何を食べる」という時系列スケジュールを自動生成</li>
            <li className="pl-1 marker:text-gray-400"><strong>持ち物チェックリスト</strong>：旅のスタイル・季節・目的地別にカスタマイズされたリストを作成</li>
            <li className="pl-1 marker:text-gray-400"><strong>英会話フレーズ集</strong>：実際の場面別フレーズを発音付きで出力</li>
            <li className="pl-1 marker:text-gray-400"><strong>費用の目安計算</strong>：交通・宿泊・食事の概算を条件入力で即時計算</li>
          </ul>
          <p className="mt-4 text-base leading-8 text-gray-700">
            これらすべてが、旅行サイトを何十分も回遊せずに、<strong>自分の条件をAIに話しかけるだけ</strong>で得られます。
            以前は「旅行計画は面倒だから時間がとれない」と言っていた方が、AIを使って30分で旅程表を完成させてしまうケースも増えています。
          </p>

          <Callout type="info" title="ChatGPTとGemini、旅行計画でどちらを使う？">
            両方とも旅行計画に使えますが、向き不向きがあります。
            <strong>ChatGPT</strong>は対話を重ねながらスケジュールを作り込むのが得意。
            <strong>Gemini</strong>はGoogleマップとの連携（Gemini Advanced）やGoogle FlightsなどGoogleサービスとの統合が強みです。
            無料プランで始めるならどちらでも問題ありません。並行して使うと情報の幅が広がります。
          </Callout>
        </motion.section>

        {/* 旅行の各ステップでのAI活用 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="planning-steps">旅行の各ステップでのAI活用</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            旅行の準備は大きく5つのフェーズに分かれます。それぞれのフェーズでAIをどう活用するか、
            実際に使えるプロンプト例とともに解説します。
          </p>
          <div className="mt-8 space-y-8">
            {planningSteps.map((step, index) => (
              <div key={step.phase} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{step.description}</p>
                <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">プロンプト例 {index + 1}</p>
                  <p className="text-sm leading-7 text-gray-800">{step.promptExample}</p>
                </div>
              </div>
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
          <MidArticleCtaBox slug="ai-travel-planning-guide" />
        </motion.section>

        {/* 国内旅行の活用実例 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="domestic-guide">国内旅行での活用実例</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            状況別に、実際にChatGPTへ送れるプロンプト例を紹介します。そのままコピーして、〇〇の部分だけ書き換えて使ってください。
          </p>
          <div className="mt-8 space-y-6">
            {domesticExamples.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-will-lighter/30 px-5 py-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-will-primary text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">{item.situation}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-3">{item.title}</h3>
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">プロンプト</p>
                    <p className="text-sm leading-7 text-gray-800">{item.prompt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Callout type="tip" title="旅程表は「表形式で出して」が便利">
            「旅程表を表形式で出してください。列は：時間帯／場所／アクティビティ／メモ」のように、
            出力形式を指定すると見やすい旅程表になります。その後「この旅程表をコピーしてNotionに貼ればOK」という形で、
            実際に使えるドキュメントとして活用できます。
          </Callout>
        </motion.section>

        {/* 海外旅行での活用実例 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="overseas-guide">海外旅行での活用実例</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            海外旅行では、AIの便利さがさらに際立ちます。特に英会話フレーズ・文化的マナー・緊急時フレーズの準備において、
            AIは非常に心強いパートナーになります。
          </p>
          <div className="mt-8 space-y-6">
            {overseasExamples.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-will-lighter/30 px-5 py-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-will-primary text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">{item.situation}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-3">{item.title}</h3>
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">プロンプト</p>
                    <p className="text-sm leading-7 text-gray-800">{item.prompt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* プロンプト15選 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="prompt-15">今すぐ使えるプロンプト15選（コピーしてそのまま使える）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            〇〇や【 】の中だけ書き換えてChatGPTに送ってください。
          </p>

          <ArticleH3>計画・下調べ系</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              "【〇〇（行き先）】に【〇泊〇日】で行きます。予算【〇万円】（交通費含む）、【出発地】発です。おすすめの観光スポットTOP5と移動の注意点を教えてください。",
              "今年の夏休みに家族4人（大人2人・小学生2人）で旅行を考えています。予算20万円以内・東京発・3泊4日。子どもが楽しめる国内旅行先を3つ比較して教えてください。",
              "一人旅で【〇〇エリア】を2泊3日で回りたいです。体力的に無理せず、カフェや地元のスーパーも楽しむゆっくりした旅程を作ってください。",
            ].map((prompt, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs text-gray-500 mb-1 font-semibold">プロンプト {i + 1}</p>
                <p className="text-sm leading-7 text-gray-800">{prompt}</p>
              </div>
            ))}
          </div>

          <ArticleH3 className="mt-8">スケジュール作成系</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              "【〇〇】2泊3日の旅程表を作ってください。移動時間を含めた時系列スケジュール（朝9時スタート）を、表形式（時間帯／場所／活動内容）で出力してください。",
              "1日目に【〇〇エリア】、2日目に【〇〇エリア】を観光する旅程表を作ってください。昼食のおすすめジャンルも各日1つ提案してください。",
              "【〇〇（観光地）】に1日かけて観光するとしたら、混雑を避けながら効率よく回れるモデルコースを教えてください。",
            ].map((prompt, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs text-gray-500 mb-1 font-semibold">プロンプト {i + 4}</p>
                <p className="text-sm leading-7 text-gray-800">{prompt}</p>
              </div>
            ))}
          </div>

          <ArticleH3 className="mt-8">持ち物・準備系</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              "【〇〇（行き先）】への【〇泊〇日】旅行の持ち物チェックリストを作ってください。【夏/冬/春秋】で、【子ども連れ/一人旅/カップル】です。忘れがちなものも含めてカテゴリ別に整理してください。",
              "海外旅行（【〇〇（国）】・初めて）の出発前チェックリストを作ってください。パスポート・保険・Wi-Fi・SIMカード・税関申告書など、入国〜帰国までに必要な準備を網羅的に教えてください。",
              "【〇〇（山/海/温泉など目的）】目的の旅行に特化した持ち物リストを作ってください。通常の旅行には持っていかないが、この旅には必須のアイテムも含めて。",
            ].map((prompt, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs text-gray-500 mb-1 font-semibold">プロンプト {i + 7}</p>
                <p className="text-sm leading-7 text-gray-800">{prompt}</p>
              </div>
            ))}
          </div>

          <ArticleH3 className="mt-8">海外・言語系</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              "【〇〇（国）】のレストランで使う英会話フレーズを教えてください。「席の予約・注文・アレルギー伝達・お会計」のシーン別に5フレーズずつ、カタカナ読みも付けて。",
              "【〇〇（国）】旅行中に体調不良になったとき、現地の病院や薬局で使えるフレーズと、日本から持参すべき常備薬のリストを教えてください。",
              "【〇〇（国）】の旅行で知っておくべき文化的マナーを教えてください。日本人が無意識にやりがちな失礼な行動も含めて。",
              "【〇〇（国）】への短期旅行で必要なビザの有無と、入国時に注意すること（税関・持ち込み禁止品など）を教えてください。（最新情報は外務省で確認します）",
            ].map((prompt, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs text-gray-500 mb-1 font-semibold">プロンプト {i + 10}</p>
                <p className="text-sm leading-7 text-gray-800">{prompt}</p>
              </div>
            ))}
          </div>

          <ArticleH3 className="mt-8">旅行後の活用</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              "【〇〇（旅行先）】で撮った写真のInstagramキャプションを5パターン作ってください。ハッシュタグも含めて。海・山・食事など[写真のシーン]にあったもので。",
              "【〇〇（旅行の概要：行き先・期間・ハイライト）】という旅行の体験記を、友人に話すような親しみやすい文体で600字程度のブログ文章にまとめてください。",
            ].map((prompt, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs text-gray-500 mb-1 font-semibold">プロンプト {i + 14}</p>
                <p className="text-sm leading-7 text-gray-800">{prompt}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 注意点と限界 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="cautions">AI旅行計画の注意点と限界</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを旅行計画に活用することには大きなメリットがある一方で、
            知っておくべき注意点もあります。楽しい旅行にするために、以下を必ず確認してください。
          </p>
          <div className="mt-8 space-y-6">
            {cautions.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">⚠️</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Callout type="warning" title="AIは「旅行プランナー補助」として使う">
            AIは旅行計画の「アイデア出し・情報整理・下準備」を圧倒的に効率化してくれる優秀なアシスタントです。
            ただし、最終的な宿泊・交通の予約は公式予約サービスで、ビザ・入国要件は外務省・大使館の最新情報で、
            食事・観光スポットの情報はGoogleマップや食べログなどのリアルタイム情報源で確認してください。
            AIは「最初の設計図」を描くのが得意、実際の「手続き」は人間が行うという役割分担が最もうまく機能します。
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
          <ArticleH2 id="conclusion">まとめ：旅行の「準備の手間」をAIに任せて、「体験」に集中しよう</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを使えば、旅行計画の面倒な部分——情報収集・スケジュール作成・持ち物整理・フレーズ準備——を大幅に効率化できます。この記事のポイントを振り返りましょう。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              「〇〇に3日間旅行。予算5万円でスケジュールを作って」と話しかけるだけで旅程表の骨格が完成する
            </li>
            <li className="pl-1 marker:text-gray-500">
              行き先選び・スケジュール・持ち物・費用計算・英会話フレーズまで、旅のあらゆるフェーズでAIが役立つ
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPTは対話式の計画作成、GeminiはGoogleサービス連携で使い分けると効果的
            </li>
            <li className="pl-1 marker:text-gray-500">
              AIの情報は古い場合があるため、宿・交通・ビザの最新情報は必ず公式サイトで確認すること
            </li>
            <li className="pl-1 marker:text-gray-500">
              旅行後のフォト投稿キャプションや体験記執筆にもAIを活用してみよう
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            準備に時間をかけすぎず、現地での体験・会話・発見に集中する——それが「AIを使った旅行」の最大のメリットです。
            次の旅行計画では、ぜひChatGPTやGeminiを旅行パートナーとして活用してみてください。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AIを使いこなすための最新ヒントを毎週お届けしています。AIリブートのLINE公式アカウントをぜひ登録してください。
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
            title="旅行・ライフスタイルでAIを使いこなすヒントを毎週配信中"
            description="旅行計画・趣味・日常生活でのAI活用法を毎週お届けしています。AIリブートのLINE公式アカウントをぜひ登録してください。プロンプト例・最新AIツール情報を無料でお届けします。"
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
            旅行計画でAIを使いこなしたら、日常のあらゆる場面でのAI活用術も学んでみましょう。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy/blog/ai-hobby-lifestyle-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AIで趣味が10倍楽しくなる活用術
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
              <Link href="/academy/blog/ai-hobby-lifestyle-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで趣味が10倍楽しくなる！料理・旅行・読書・音楽・映画の活用術2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級活用テクニック｜使いこなしの差がつく15の方法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-overview-map-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                2026年春のAI全体マップ｜初心者がまず知っておくべきツール・できること・始め方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-wow-moments-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTに「すごい」と感じた瞬間10選｜初めて使ったときの感動と活用法
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
