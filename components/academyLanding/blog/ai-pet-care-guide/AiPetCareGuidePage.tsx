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

const keywordTags = ["AI ペット", "ChatGPT 犬 猫", "ペット 体調 相談 AI", "ペットケア AI", "ChatGPT Vision ペット"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "intro", label: "ペットと暮らす喜びと、ふとした不安" },
  { id: "use-case-1", label: "場面1：体調の変化を相談する" },
  { id: "use-case-2", label: "場面2：食事・おやつの選び方を相談する" },
  { id: "use-case-3", label: "場面3：しつけのアドバイスをもらう" },
  { id: "use-case-4", label: "場面4：Vision機能で品種・特徴を教えてもらう" },
  { id: "use-case-5", label: "場面5：ペット用品の比較・選び方を調べる" },
  { id: "prompt-examples", label: "すぐ使えるプロンプト例集" },
  { id: "caution", label: "絶対に注意すること" },
  { id: "vision-advanced", label: "ChatGPT VisionでX線・皮膚写真を相談する" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const useCases = [
  {
    id: "use-case-1",
    emoji: "🌡",
    title: "場面1：体調の変化をAIに相談する",
    subtitle: "「これ、病院に連れて行くべき？」という判断の参考に",
    description:
      "ペットが少し元気がない、食欲が落ちている、変な歩き方をしている——そんなとき、「病院に行くほどでもないかな」と様子を見るか、「でも心配だな」と悩むことがあります。そんなときにAIへの相談が役立ちます。",
    note: "⚠ AIの情報はあくまでも参考情報です。受診の判断は最終的に飼い主さんが行い、症状が重い・急変している場合は迷わず獣医師へ連絡してください。",
    examples: [
      {
        prompt: "「3歳の柴犬オスです。昨日から右前足をかばうように歩いています。触ると嫌がる様子はありません。今日ドッグランで走り回りました。様子見でよいですか？それとも病院へ行くべきですか？」",
        result:
          "「急いで受診が必要なサイン（体重をまったくかけない、腫れ・熱感がある、食欲低下・嗜眠）」と「様子見でよいサイン（軽度の跛行・昨日から）」を整理して提示。「24時間以内に改善しなければ受診を」という判断の目安も教えてくれます。",
      },
      {
        prompt: "「7歳の猫、メス。今朝からトイレに何度も行くが少ししか出ない。鳴き声が出ないようで困っている様子。食欲は普通。どんな可能性がありますか？」",
        result:
          "頻尿・排尿困難の考えられる原因（膀胱炎・尿路結石・会陰尿道閉塞など）を症状の重さ別に整理。特に「尿が全く出ていない場合は緊急」という点を強調し、すぐに受診を推奨するレベルを明確に伝えてくれます。",
      },
    ],
  },
  {
    id: "use-case-2",
    emoji: "🥩",
    title: "場面2：食事・おやつの選び方を相談する",
    subtitle: "「何を食べさせていいの？」という疑問をAIが整理してくれる",
    description:
      "ペットフードの種類は多く、「原材料の表示を見てもよくわからない」「アレルギーがあるので成分を確認したい」という声はよく聞きます。AIはフード選びの考え方を整理してくれる情報収集の相棒として活用できます。",
    note: "⚠ アレルギーや持病がある場合は、フード変更前に必ず獣医師に相談してください。",
    examples: [
      {
        prompt: "「1歳のトイプードルを飼っています。最近下痢が続いています。消化に良いドッグフードの選び方と、避けた方が良い原材料を教えてください」",
        result:
          "消化に良いフードの特徴（タンパク質源が単一・グレインフリー or 低繊維・加水分解タンパク等）を整理。避けたい成分（大豆・乳製品・小麦グルテン）の一覧と、「3〜4日で改善しなければ受診を」という目安も添えてくれます。",
      },
      {
        prompt: "「猫にとって危険な食べ物を一覧で教えてください。特にこれだけは絶対に与えてはいけないものを上位10個で」",
        result:
          "ネギ類・チョコレート・ブドウ・キシリトール・アルコール・生のいか・タコなどを毒性の強さとともにリスト化。「少量でも危険なもの」と「大量でなければ問題が少ないもの」を分けて説明してくれます。",
      },
    ],
  },
  {
    id: "use-case-3",
    emoji: "🐾",
    title: "場面3：しつけのアドバイスをもらう",
    subtitle: "「なぜこうするの？」という理解から始めるしつけ",
    description:
      "「なぜこの子はトイレを失敗するのか」「なぜ散歩でリードを引っ張るのか」——犬・猫の行動には必ず理由があります。AIはその「なぜ」を説明してくれた上で、段階的なトレーニング方法を提案してくれます。",
    note: "💡 しつけは継続と一貫性が鍵です。家族全員が同じ方法で接することを心がけましょう。",
    examples: [
      {
        prompt: "「2歳の柴犬、オスです。散歩中に他の犬を見るたびに激しく吠えます。引っ張って向かっていこうとするので困っています。改善するためのトレーニング方法を教えてください」",
        result:
          "「吠えの根本原因（興奮・恐怖・社会化不足の可能性）」を説明した上で、脱感作トレーニング（距離を保ちながら他の犬に慣れさせる）のステップを具体的に提示。「まず距離10メートルから観察させる」という現実的な第一歩から始められる設計になっています。",
      },
      {
        prompt: "「生後3ヶ月の子猫が夜中に大きな声で鳴き続けます。何か原因があるのでしょうか？対処方法を教えてください」",
        result:
          "子猫の夜鳴きの主な原因（不安・空腹・体調不良・発情の前兆など）を分けて説明。「環境を整える方法（温かい寝床・時計の音・一緒に寝るなど）」と「獣医師への相談が必要なサイン（食欲不振を伴う場合など）」を整理して提示してくれます。",
      },
    ],
  },
  {
    id: "use-case-4",
    emoji: "📸",
    title: "場面4：ペットの写真を見せて品種・特徴を教えてもらう（Vision機能）",
    subtitle: "「この子って何の品種？」という疑問を写真から解決",
    description:
      "ChatGPT Plus（GPT-4o）やGeminiには画像を読み取る機能があります。ペットの写真を送ると、品種の推定・毛色の特徴・体型からの健康チェックのポイントなどを教えてくれます。保護犬・保護猫を引き取った方や、ミックス犬を飼っている方に特に喜ばれる使い方です。",
    note: "💡 品種の推定は確定的な診断ではなく参考情報です。血統書のない子の品種を知りたい場合は、動物病院でのDNA検査サービスも選択肢の一つです。",
    examples: [
      {
        prompt: "「この写真の犬の品種を推定してください。また、この品種に特有の性格と健康上の注意点を教えてください」（写真を添付）",
        result:
          "写真の特徴（毛色・耳の形・体型・顔立ち）から品種を推定し、その品種の特徴（性格・運動量・かかりやすい病気・ケアのポイント）を整理して提示。ミックス犬の場合は「この犬種とこの犬種の特徴が見られます」という説明もしてくれます。",
      },
      {
        prompt: "「先週から猫の背中に写真のような赤い発疹が出ています。痒がっている様子もあります。考えられる原因を教えてください」（写真を添付）",
        result:
          "発疹の特徴から考えられる原因（ノミアレルギー性皮膚炎・食物アレルギー・接触性皮膚炎・真菌感染など）を整理。「このような症状は自己判断が難しく、皮膚科専門の獣医師への相談を推奨します」という安全基準も明示してくれます。",
      },
    ],
  },
  {
    id: "use-case-5",
    emoji: "🛒",
    title: "場面5：ペット用品の比較・選び方を調べる",
    subtitle: "「どのケージがいい？」「おすすめのシャンプーは？」をAIと整理する",
    description:
      "ペット用品はメーカーが多く、レビューを全部読んでいると時間がいくらあっても足りません。AIに「こういう条件で探している」と伝えると、選ぶ際の比較基準を整理してくれます。",
    note: "💡 AIが提案する商品名は古い場合があります。製品選定の最終確認は最新のレビューや獣医師の意見を参考にしてください。",
    examples: [
      {
        prompt: "「一人暮らしで初めて猫を飼います。生後2ヶ月の子猫を迎えます。最初に必ず揃えるべき用品を優先度順にリストアップしてください。予算は1万円程度です」",
        result:
          "トイレ・フード・水飲み器・キャリーバッグ・爪とぎを「必須」として、おもちゃ・爪切りを「あると良い」に分類。各アイテムの選ぶときのポイント（トイレは猫の1.5倍の大きさなど）も添えてリスト化してくれます。",
      },
      {
        prompt: "「8kg超えの大型犬（ゴールデンレトリーバー・5歳）用のハーネスを選んでいます。引っ張り癖があります。選ぶときのポイントと、H型・Y型の違いを教えてください」",
        result:
          "H型とY型の構造・向いている用途・引っ張り癖がある場合の使い分けを比較。「引っ張り癖がある場合はハーネスの構造より、並行して引き歩きトレーニングを行うことが根本的な解決策」という追加アドバイスも提示してくれます。",
      },
    ],
  },
] as const;

const promptExamples = [
  {
    category: "体調・健康相談",
    qa: [
      {
        q: "犬が水をやたら飲むようになった。何か病気の可能性がありますか？",
        a: "多飲多尿の主な原因として、糖尿病・クッシング症候群・慢性腎臓病・子宮蓄膿症（未避妊メス）が考えられます。「1日の水分摂取量が体重1kgあたり100ml以上」が目安の一つです。受診してホルモン検査・尿検査を受けることを推奨します。",
      },
      {
        q: "猫が昨日からご飯を食べない。何日様子を見てよいですか？",
        a: "健康な成猫が24〜48時間以上食べない場合は受診が推奨されます。特に肝臓に脂肪が蓄積する「肝リピドーシス（脂肪肝）」は食欲不振が続くと発症リスクがあります。48時間以上食べない、または元気がない・嘔吐がある場合はすぐに病院へ。",
      },
    ],
  },
  {
    category: "食事・フード選び",
    qa: [
      {
        q: "犬に生野菜を与えてもよいですか？おすすめと避けるものを教えてください",
        a: "OK野菜：ブロッコリー（少量）・にんじん・さつまいも（加熱推奨）・きゅうりなど。NG野菜：ネギ・玉ねぎ・ニンニク・アボカド・ブドウ。特にネギ類は少量でも溶血性貧血を引き起こす可能性があり、絶対に与えないでください。",
      },
      {
        q: "老猫（15歳）の食欲が落ちてきました。食べてもらえるフードの工夫を教えてください",
        a: "高齢猫は嗅覚が衰え食欲が低下することがあります。試せる工夫：ウェットフードに切り替える・フードを少し温める（猫は温かい食事を好む）・食器の高さを調節する（首の負担を減らす）・種類を小分けして複数提示する。食欲不振が1週間以上続く場合は受診を。",
      },
    ],
  },
  {
    category: "しつけ・行動",
    qa: [
      {
        q: "猫がソファを爪でガリガリする。やめさせる方法はありますか？",
        a: "猫にとって爪研ぎは本能的な行動のため「やめさせる」より「場所を移す」アプローチが効果的です。ソファの近くに好みの素材（麻・段ボール・カーペット素材）の爪研ぎを置き、そちらを使ったらほめる。ソファにはアルミホイルを一時的に置くと効果的なことがあります。",
      },
      {
        q: "留守番が苦手な犬が、帰宅すると家の中が荒れている。対策を教えてください",
        a: "分離不安の可能性があります。段階的な留守番練習（最初は5分→10分→30分と伸ばす）、出かける前・帰宅後の過剰なあいさつを控える、Kongなど時間がかかる噛むおもちゃを与えるなどが有効です。症状が重い場合は行動治療専門の獣医師への相談も選択肢です。",
      },
    ],
  },
] as const;

const cautionItems = [
  {
    level: "緊急",
    title: "これらの症状は迷わず獣医師へ",
    items: [
      "呼吸が速い・苦しそう・口を開けて息をしている",
      "嘔吐・下痢が止まらない、または血が混じっている",
      "水を全く飲まない・尿が出ていない（特に猫・1日以上）",
      "意識がない・けいれんを起こしている",
      "異物を飲み込んだ（または疑われる）",
      "外傷・骨折・交通事故後",
    ],
    style: "border-red-400 bg-red-50",
    titleStyle: "text-red-700",
  },
  {
    level: "注意",
    title: "AIの回答を信頼しすぎない",
    items: [
      "AIは診断できません。「〇〇病の可能性が高い」という回答は参考情報であり医学的診断ではありません",
      "最新の治療情報・薬の処方・用量はAIでなく必ず獣医師に確認してください",
      "地域の気候・環境に固有の疾患（特定のノミ・ダニ・感染症）はAIが知らない場合があります",
      "AIの学習データには古い情報も含まれるため、最新のワクチン情報などは公式機関のサイトも参照してください",
    ],
    style: "border-amber-400 bg-amber-50",
    titleStyle: "text-amber-700",
  },
] as const;

export default function AiPetCareGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIでペットのお世話がもっと楽しく安心に！" },
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
                title="AIでペットのお世話がもっと楽しく安心に！ChatGPTを使った犬・猫のケア＆相談術"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIでペットのお世話がもっと楽しく安心に！ChatGPTを使った犬・猫のケア＆相談術
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「少し元気がないけど、病院に連れて行くほどでもないかな？」
            「このフードで合っているのかな？」——ペットを飼っていると、
            こんなふとした疑問や小さな不安が日常的に浮かんできます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            そんなとき、スマートフォンで検索するよりも、ChatGPTやGeminiに直接相談するほうが、
            自分のペットの状況に合わせた情報を整理してもらえます。
            この記事では、犬・猫を飼っている方が日常的に感じる疑問5つの場面に分けて、
            AIの活用法と実際のプロンプト例を紹介します。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            大前提として：<strong>AIはあくまでも情報収集のサポーター</strong>です。
            体調が悪そうなペットの診断や治療の判断は、必ず獣医師に委ねてください。
            この記事はその前提を大切にしながら、「安心してAIを使える場面」をご紹介します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AIを使い始めたばかりの方は
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude入門ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-hobby-lifestyle-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIで趣味が10倍楽しくなる活用術
          </Link>
          ・
          <Link href="/academy/blog/ai-daily-life-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI日常活用ガイド
          </Link>
          も合わせてご覧ください。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">AIは「様子見でよいか・病院に行くべきか」の判断材料の整理に役立つ（診断はできない）</li>
            <li className="pl-1 marker:text-gray-500">食事・フード選び・しつけ・用品比較など、「即答が欲しい日常の疑問」はAIに向いている</li>
            <li className="pl-1 marker:text-gray-500">ChatGPT Vision（写真読み取り機能）でペットの写真から品種推定・皮膚状態の確認ができる</li>
            <li className="pl-1 marker:text-gray-500">緊急症状（呼吸困難・意識喪失・血便血尿など）は迷わず獣医師へ。AIに相談している時間はない</li>
            <li className="pl-1 marker:text-gray-500">AIは「専門家の代替」ではなく「情報収集と疑問整理のサポーター」として使うのが正解</li>
          </ul>
        </motion.section>

        {/* 導入：ペットと暮らす喜びと不安 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="intro" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ペットと暮らす喜びと、ふとした不安
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            犬や猫と暮らす時間は、かけがえのないものです。
            帰宅したときに駆け寄ってくる姿、膝の上でうとうとする重さ、ガラス越しに外を眺める真剣な顔——
            そんな日常のワンシーンが、疲れた心を癒してくれます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            一方で、ペットは言葉で「調子が悪い」「ここが痛い」と教えてくれません。
            飼い主はペットのちょっとした変化を見逃さないよう、常に気を配っています。
            それが愛情の形でもあり、同時にプレッシャーでもあります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「このくらいで病院に連れて行っていいのかな」「大げさだと思われないかな」と感じながら、
            ネットで情報を検索し、似たような症状の書き込みを読んでは不安になる——
            そんな経験がある方も多いのではないでしょうか。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIは、そんな「ちょっと聞いてみたい」という声に、すぐに応えてくれます。
            24時間いつでも、自分のペットの状況を詳しく伝えながら、
            「どう考えればいいか」を一緒に整理できる存在です。
            もちろん、AIはお医者さんではありません。でも、
            不安を抱えたまま検索サイトを彷徨うよりも、ずっと心強い情報整理の相棒になれます。
          </p>
        </motion.section>

        {/* 5つの場面 */}
        {useCases.map((useCase, i) => (
          <motion.section
            key={useCase.id}
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 id={useCase.id} className="scroll-mt-28 text-2xl font-bold text-gray-900">
              <span className="mr-3 text-3xl">{useCase.emoji}</span>
              {useCase.title}
            </h2>
            <p className="mt-2 text-base font-medium text-will-primary">{useCase.subtitle}</p>
            <p className="mt-4 text-base leading-8 text-gray-700">{useCase.description}</p>
            <div className="mt-6 space-y-5">
              {useCase.examples.map((example, j) => (
                <section key={j} className="rounded-xl border border-gray-200 p-5">
                  <h3 className="text-base font-bold text-gray-900">
                    <span className="mr-2 text-will-primary">プロンプト例 {j + 1}.</span>
                  </h3>
                  <div className="mt-3 rounded-md bg-gray-50 p-3">
                    <p className="text-xs font-semibold text-gray-500">送った内容</p>
                    <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-gray-700">
                    <span className="font-semibold text-gray-900">AIの回答：</span>
                    {example.result}
                  </p>
                </section>
              ))}
            </div>
            <p className="mt-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700">
              {useCase.note}
            </p>

            {/* 場面2の後に中間CTA */}
            {i === 1 && (
              <div className="mt-10">
                <MidArticleCtaBox slug="ai-pet-care-guide" />
              </div>
            )}
          </motion.section>
        ))}

        {/* プロンプト例集 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="prompt-examples" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            すぐ使えるプロンプト例集（Q&A形式）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            よくある質問と、AIからどのような回答が返ってくるかをQ&A形式でまとめました。
            「まさにこれ！」という疑問があれば、そのままChatGPTに貼り付けて使えます。
          </p>
          <div className="mt-6 space-y-6">
            {promptExamples.map((section) => (
              <div key={section.category}>
                <h3 className="text-lg font-bold text-will-primary">{section.category}</h3>
                <div className="mt-3 space-y-4">
                  {section.qa.map((item, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 p-5">
                      <p className="text-sm font-semibold text-gray-900">
                        Q. {item.q}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        <span className="font-semibold text-gray-700">AIの回答例：</span>
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 絶対に注意すること */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="caution" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            絶対に注意すること：AIに頼ってはいけない場面
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIは便利なツールですが、「頼ってはいけない場面」があります。
            ここを間違えると、ペットの命に関わる場合があります。
          </p>
          <div className="mt-6 space-y-5">
            {cautionItems.map((caution) => (
              <div
                key={caution.title}
                className={`rounded-xl border p-5 ${caution.style}`}
              >
                <p className={`text-sm font-bold ${caution.titleStyle}`}>
                  {caution.level === "緊急" ? "🚨" : "⚠"} {caution.title}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  {caution.items.map((item, i) => (
                    <li key={i} className="pl-1 marker:text-gray-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIに聞いたらOKと言われたから」という理由で受診を遅らせることは、
            絶対に避けてください。AIの回答は「判断材料の整理」であって、「診断」ではありません。
            少しでも不安があれば、かかりつけの獣医師に電話で相談することをためらわないでください。
          </p>
        </motion.section>

        {/* ChatGPT VisionでX線・皮膚写真を相談する */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="vision-advanced" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            参考情報：ChatGPT VisionでX線写真・皮膚の状態を相談する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPT Plus（GPT-4o）の画像読み取り機能（Vision）を使うと、
            獣医師に見せる前の「下調べ」として、X線写真や皮膚の状態を見てもらうことができます。
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900">X線写真を共有する場合</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「この胸部X線写真で気になる点はありますか？犬の年齢は6歳で、昨日から咳が出ています」のように、
                X線写真と症状をセットで共有すると、AIが写真から読み取れる大まかな情報（心臓の大きさ・肺の状態・気管の様子）を
                非専門的な言葉で説明してくれます。
              </p>
              <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">
                ⚠ AIの読み取りは参考情報です。X線診断は獣医師の専権事項であり、AIの説明をもとに治療の判断をすることは危険です。「次の受診でこの点を聞いてみよう」という事前準備として使ってください。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900">皮膚・傷の写真を相談する場合</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「猫の耳の中にこのような黒い汚れがあります。耳ダニの可能性はありますか？」のように写真を共有すると、
                AIが見た目の特徴から考えられる状態（耳ダニ・細菌性外耳炎・正常な耳垢の違いなど）を説明してくれます。
                「病院に行くべき症状かどうか」の判断材料として使えます。
              </p>
              <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">
                ⚠ 写真だけによる診断には限界があります。AIの回答はあくまでも「可能性の整理」です。
              </p>
            </div>
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この機能を使う際のベストな姿勢は「受診前に自分の疑問を整理するため」です。
            「AIがこう言っていたので病院に行きません」ではなく、
            「AIがこういう可能性を教えてくれたので、病院でこの点を確認します」という使い方が理想的です。
          </p>
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
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
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：AIをペットケアの「安心の相棒」として使う
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ペットとの暮らしに生まれる「ちょっとした疑問」「小さな不安」——
            そういった日常の声に24時間応えてくれるのがAIの強みです。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">体調変化 → 「様子見でよいか・病院へ行くべきか」の判断材料を整理してもらう</li>
            <li className="pl-1 marker:text-gray-500">食事相談 → 食べてはいけないもの・フードの選び方の基準を教えてもらう</li>
            <li className="pl-1 marker:text-gray-500">しつけ → 行動の「なぜ」を理解した上で、段階的なトレーニング方法を提案してもらう</li>
            <li className="pl-1 marker:text-gray-500">Vision機能 → 品種推定・皮膚状態の確認・受診前の事前調査に活用する</li>
            <li className="pl-1 marker:text-gray-500">用品選び → 比較基準を整理してもらい、選択肢を絞るための情報収集に使う</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIはペットの「お医者さん」でも「ブリーダー」でも「専門家」でもありません。
            でも、あなたのそばにいて「一緒に考えてくれる相棒」としては、とても頼りになります。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            大切なペットのために、AIをうまく使いこなしながら、
            獣医師との連携も大切にする——そのバランスが、一番の「ペットケアのかたち」だと思います。
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
            title="AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）"
            description="ペットケアだけでなく、日常生活・仕事・学習など身近なシーンでのAI活用ヒントを週1本のペースでLINEにお届けしています。メルマガより気軽に読めると好評です。登録無料、いつでも退会できます。"
            buttonLabel="LINEで週1AI通信を受け取る（無料）"
          />
        </motion.section>

        {/* アカデミーCTA */}
        <motion.section
          className="mt-10 rounded-xl border border-will-primary/20 bg-will-lighter/40 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-lg font-bold text-gray-900">AI活用力とキャリアを、生活の充実とともに育てる</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            ペットケアでの活用は、AIと対話する最初の一歩としてとても良いスタートです。
            日常でAIを使い慣れたとき、次に「仕事でもっとAIを活かしたい」「キャリアを変えるきっかけにしたい」
            という思いが自然に浮かんでくることがあります。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、
            AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            「AIを日常から仕事・キャリアへ」と広げていきたい方は、まずLINEで気軽にご相談ください。
          </p>
          <a
            href="https://bexn9pao.autosns.app/line"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
          >
            AIリブートアカデミーについてLINEで相談する（無料）
          </a>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-hobby-lifestyle-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで趣味が10倍楽しくなる！料理・旅行・読書・音楽・映画の活用術
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-daily-life-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで日常生活が変わる！毎日の使い方ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者向け完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-cooking-recipe-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで料理が楽しくなる！ChatGPTを使ったレシピ活用術
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
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
