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

const keywordTags = ["AI 趣味", "AI 料理", "AI 旅行", "AI 読書", "AI 音楽", "AI 映画"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "misconception", label: "「AIは仕事専用」という誤解" },
  { id: "cooking", label: "料理×AI：55の使い方①" },
  { id: "travel", label: "旅行×AI：55の使い方②" },
  { id: "reading", label: "読書×AI：55の使い方③" },
  { id: "music", label: "音楽×AI：55の使い方④" },
  { id: "movie", label: "映画・ドラマ×AI：55の使い方⑤" },
  { id: "other-hobbies", label: "その他の趣味への応用" },
  { id: "start-3steps", label: "今日から始める3ステップ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const cookingExamples = [
  {
    title: "冷蔵庫の食材でレシピ提案",
    prompt: "「冷蔵庫に鶏もも肉・じゃがいも・玉ねぎ・にんじんがあります。30分で作れる夕食を3つ提案してください」",
    result:
      "肉じゃが、チキンカレー、シチューなど3つの候補を材料の使い切り方と合わせて提案。余った食材の活用法まで教えてくれます。",
  },
  {
    title: "栄養バランスのチェックと改善アドバイス",
    prompt: "「今日の食事：朝はパン、昼はラーメン、夜はご飯と焼き魚。栄養バランスを評価して、明日のアドバイスをください」",
    result:
      "タンパク質・ビタミン・食物繊維の充足状況を分析し、翌日取り入れるべき食材や簡単な一品を具体的に提案。",
  },
  {
    title: "料理の失敗原因の診断",
    prompt: "「カレーを作ったら水っぽくなってしまいました。原因と対処法を教えてください」",
    result:
      "水分量・炒め方・煮詰め方の問題点を分析し、「今からできる対処法（片栗粉でとろみをつける等）」と「次回への改善策」を分けて説明。",
  },
  {
    title: "世界の料理を家庭で再現",
    prompt: "「タイのグリーンカレーを家庭にある調味料で代用して作る方法を教えてください」",
    result:
      "本格的な材料と代用品を対比表で提示。「市販のカレーペースト＋ナンプラー＋ ハーブ」で近い味を再現する手順を詳しく説明。",
  },
  {
    title: "ダイエット・アレルギー対応レシピ",
    prompt: "「グルテンフリーで、1食500kcal以内の昼食レシピを3つ教えてください。卵も使えません」",
    result:
      "制約条件を満たすレシピをカロリー計算付きで提案。材料の代替品も含めて、買い物リストまでまとめてくれます。",
  },
] as const;

const travelExamples = [
  {
    title: "3泊4日の旅行行程を丸ごと作成",
    prompt: "「大阪に3泊4日で旅行します。食べることが好きな40代夫婦向けに、移動効率の良い行程を組んでください」",
    result:
      "エリア別に分けた効率的なルートと、グルメスポット・観光地を組み合わせたプランを作成。予算感・移動時間の目安も含めて提案。",
  },
  {
    title: "現地の言葉でスムーズにコミュニケーション",
    prompt: "「ベトナム旅行でよく使う日常会話フレーズ20個をカタカナ読みで教えてください」",
    result:
      "挨拶・注文・値段交渉・緊急時のフレーズをシーン別に整理。カタカナ読みと簡単な文化的注意事項もセットで提供。",
  },
  {
    title: "現地グルメの下調べと食事制限への対応",
    prompt: "「イタリアのフィレンツェで、ベジタリアン向けのおすすめレストランと注文フレーズを教えてください」",
    result:
      "エリア別のベジタリアンフレンドリーな店の種類と特徴、イタリア語での食事制限の伝え方フレーズをまとめて提案。",
  },
  {
    title: "旅行の荷物リストを自動生成",
    prompt: "「沖縄に夏5日間、シュノーケリングとビーチ中心の旅行。持ち物リストを優先度付きで作って」",
    result:
      "必需品・あると便利なもの・現地調達でいいものを3段階に分類。シュノーケリング特有の装備と日焼け対策も網羅。",
  },
  {
    title: "帰宅後の旅行記・SNS投稿文を作成",
    prompt: "「京都旅行の写真のキャプション用に、季節感と場所の特徴を活かした20文字程度の日本語フレーズを5つ作って」",
    result:
      "写真の内容から季節・風情・感情を引き出した短文フレーズを複数提案。ハッシュタグ案もセットで提供。",
  },
] as const;

const readingExamples = [
  {
    title: "難解な本の内容をわかりやすく解説",
    prompt: "「ユヴァル・ノア・ハラリ著『サピエンス全史』の第3部の要点を、歴史が苦手な人向けに500字で説明してください」",
    result:
      "専門用語を避け、現代に引きつけた例え話を交えた解説を提供。「なぜこれが重要なのか」という視点で内容をわかりやすく整理。",
  },
  {
    title: "著者に質問するような深堀り読書",
    prompt: "「村上春樹の『ノルウェイの森』を読んでいます。「喪失」というテーマについて著者の意図を推察してください」",
    result:
      "著者の他作品・インタビュー・評論家の分析をもとに、テーマの解釈を多角的に展開。「あなたはどう読みましたか？」という問いかけで対話が深まります。",
  },
  {
    title: "読書記録・書評の自動作成",
    prompt: "「先月読んだ本：堀江貴文『多動力』。読んだ感想のメモを送るので、800字の書評に整えてください」",
    result:
      "箇条書きのメモを流れるような書評文に変換。「印象的だったフレーズ」「自分の日常への応用」「おすすめする人」のセクションを自動追加。",
  },
  {
    title: "次に読む本を推薦してもらう",
    prompt: "「最近読んで面白かった本：『嫌われる勇気』『人を動かす』『限りある時間の使い方』。次に読む本を5冊推薦してください」",
    result:
      "読書傾向（自己啓発・心理学・時間管理）を分析し、国内外の類書を難易度・読みごたえ・目的別に分類して提案。あらすじと推薦理由付き。",
  },
  {
    title: "読書会・ビジネス本の輪読に活用",
    prompt: "「職場の読書会で『ティール組織』を取り上げます。第1章の討論テーマと事前に参加者が考えておくべき質問を5つ作って」",
    result:
      "第1章の核心概念を整理し、異なる意見が出やすい問いを設計。チームの経験に引きつけた具体的な問いを含めて提案。",
  },
] as const;

const musicExamples = [
  {
    title: "作詞アシスタントとして活用",
    prompt: "「失恋した翌日の朝をテーマに、JPOPの歌詞を作ってください。Aメロ・Bメロ・サビの構成で、切なくも前向きな雰囲気で」",
    result:
      "構成に沿った歌詞の草案を作成。「ここをもっと比喩的な表現にして」「サビをもっとキャッチーにして」と追加指示すれば磨き上げられます。",
  },
  {
    title: "気分に合ったプレイリスト提案",
    prompt: "「在宅ワーク中の集中BGMとして、日本語歌詞がない・テンポが速すぎない・80〜90年代のJAZZを10曲推薦してください」",
    result:
      "条件に合うアーティスト・アルバム・曲名リストを提供。Spotifyのプレイリスト検索用のキーワードも一緒に提案。",
  },
  {
    title: "楽器練習の相談相手",
    prompt: "「ギター初心者です。CコードからFコードに切り替えるときに指が届かず音がきれいに鳴りません。練習方法を教えてください」",
    result:
      "バレーコードの練習ステップを段階的に説明。「この筋肉を使う感覚」「毎日5分の効果的な練習メニュー」「挫折しないコツ」を具体的に提示。",
  },
  {
    title: "音楽理論の学習サポート",
    prompt: "「コードとスケールの関係を初心者にわかるように説明してください。ピアノを弾きながら実感できる例えで」",
    result:
      "理論の難解な部分を「鍵盤を使いながら試せる」実践的な例と図解文で説明。「なぜこの音は合わないのか」という疑問にも答えてくれます。",
  },
  {
    title: "バンドのセットリスト作成",
    prompt: "「文化祭でJ-POPのコピーバンドをやります。90分のライブで演奏する曲を選びたい。盛り上がりの流れを意識したセットリストを作って」",
    result:
      "ライブの流れ（オープニング・中盤・盛り上がり・アンコール）を設計し、難易度と盛り上がりのバランスを考えた曲順を提案。",
  },
] as const;

const movieExamples = [
  {
    title: "作品レビューの壁打ち相手",
    prompt: "「『オッペンハイマー』を見ました。原爆開発の倫理的問題についてAIの意見も聞いたうえで、自分の感想を整理したいです」",
    result:
      "映画が提示する倫理的ジレンマを多角的に整理し、「科学者の責任」「戦時の決断」「歴史の評価」それぞれの観点で論点を提供。自分の意見を深める問いかけも。",
  },
  {
    title: "ストーリーの伏線・考察を深掘り",
    prompt: "「映画『インターステラー』のラストシーンの意味がわかりませんでした。物理学的な解釈と、監督の意図を踏まえて説明してください」",
    result:
      "相対性理論と映画内の描写を対応させながら解説。監督クリストファー・ノーランのインタビューや脚本家の発言も参照した考察を提供。",
  },
  {
    title: "次に見る作品の推薦",
    prompt: "「最近見て好きだった映画：『花束みたいな恋をした』『ドライブ・マイ・カー』『ミッドサマー』。次に見る映画を5本推薦して」",
    result:
      "視聴傾向（繊細な人間ドラマ、アート系、独特な世界観）を分析して類似作品を提案。あらすじ・おすすめポイント・気をつけるべき内容（グロシーンなど）付き。",
  },
  {
    title: "続編・原作との違いを比較",
    prompt: "「アニメ映画『すずめの戸締まり』と原作小説の違いを教えてください。どちらを先に楽しむべきか意見も聞かせて」",
    result:
      "映像化で加えられたシーン・省略された描写・キャラクターの違いを比較。「どちらを先に」の推薦理由を、ネタバレの有無も含めて整理して提案。",
  },
  {
    title: "映画のセリフ・名シーンを言語学習に活用",
    prompt: "「映画『The Devil Wears Prada』の英語セリフを使って、ビジネス英語の表現を10個学びたいです」",
    result:
      "映画内のキーフレーズを抜粋し、日本語訳・シーンの説明・ビジネス場面での応用例をセットで提供。クセのある言い回しの解説も。",
  },
] as const;

const otherHobbies = [
  {
    category: "ガーデニング",
    examples: [
      {
        use: "植物の育て方相談",
        detail: "「ミニトマトの葉が黄色くなっています。写真を送るので原因と対処法を教えてください」→病気・肥料不足・水のやりすぎを症状から診断",
      },
      {
        use: "季節の庭づくり計画",
        detail: "「6畳のベランダで春に咲く花を育てたい。初心者向けの植え合わせプランと管理カレンダーを作って」→月別のお手入れ一覧まで作成",
      },
    ],
  },
  {
    category: "ペット",
    examples: [
      {
        use: "健康・しつけの相談",
        detail: "「1歳の柴犬が散歩中に引っ張りすぎて困っています。無理なく改善できるしつけ方を教えて」→段階的なトレーニング方法を提示（※獣医師への相談も推奨）",
      },
      {
        use: "ペットのプロフィール・SNS投稿文作成",
        detail: "「猫の写真に合うキャプションを5パターン作って。猫の名前はムギ、3歳、マンチカン」→個性に合ったユーモアたっぷりの文章を量産",
      },
    ],
  },
  {
    category: "スポーツ",
    examples: [
      {
        use: "トレーニングメニューの設計",
        detail: "「週3回ジムに行ける。目標は3ヶ月でベンチプレス60kg。現在40kgが限界。月別のトレーニングプランを作って」→段階的な計画と栄養アドバイスをセットで",
      },
      {
        use: "スポーツ観戦をもっと楽しむ",
        detail: "「野球のルールが細かくわからなくて楽しめません。ボークとは何か、5分でわかるように説明してください」→漫画のコマ割り感覚でわかりやすく解説",
      },
    ],
  },
  {
    category: "DIY・ものづくり",
    examples: [
      {
        use: "材料の選び方と作り方の手順",
        detail: "「子ども部屋に棚を作りたい。予算5,000円、工具はドライバーのみ。DIY初心者向けの設計と材料リストを教えて」→ホームセンターでの購入品リストまで作成",
      },
      {
        use: "失敗したときのリカバリー相談",
        detail: "「壁に穴を開けすぎてしまいました。賃貸物件での目立ちにくい補修方法を教えてください」→退去時に困らない現実的な解決策を提示",
      },
    ],
  },
  {
    category: "写真",
    examples: [
      {
        use: "写真の構図・設定アドバイス",
        detail: "「スマホで夜景を撮ると暗くてぼやけます。設定と撮り方のコツを教えてください」→シャッタースピード・ISO・三脚活用のポイントを解説",
      },
      {
        use: "写真整理とアルバム作成",
        detail: "「10年分の旅行写真を整理したい。家族向けフォトアルバムの構成案と、タイトル・説明文の書き方を教えて」→セクション構成と文章例をセットで提案",
      },
    ],
  },
] as const;

const startSteps = [
  {
    step: "Step 1：今日の趣味の「困った」を1つ書き出す",
    description:
      "料理なら「冷蔵庫の余り野菜をどう使うか迷っている」、旅行なら「次の旅行先が決まらない」、読書なら「最近本を読んでも頭に入らない」——何でも構いません。今すぐ思いつく「小さな困った」を一つ書き出してください。",
    tip: "大きな課題より、今日すぐ解決したいことから始めるのがコツです。",
  },
  {
    step: "Step 2：ChatGPTまたはClaudeに「そのまま」相談する",
    description:
      "書き出した内容を、そのままChatGPTかClaudeに送信してください。完璧な「プロンプト」を作る必要はありません。「〇〇で困っているのですが、どうすればいいですか？」という普通の日本語で十分です。AIがわからない点は質問し返してくれます。",
    tip: "「完璧な質問」を作ろうとしない。まず送ってみる。それだけです。",
  },
  {
    step: "Step 3：回答を試して、「もっと〇〇して」と追加指示する",
    description:
      "AIの最初の回答を実際に試してみましょう。「もっと簡単にして」「具体的な数字を入れて」「別のアイデアも3つ追加して」——追加の一言で回答の質が格段に上がります。3往復も会話すれば、あなた専用のアドバイスに磨かれていきます。",
    tip: "AIとの会話は「一問一答」ではなく「対話」。深めるほど良くなります。",
  },
] as const;

export default function AiHobbyLifestyleGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIで趣味が10倍楽しくなる！活用術2026" },
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
                title="AIで趣味が10倍楽しくなる！料理・旅行・読書・音楽・映画の活用術2026"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIで趣味が10倍楽しくなる！料理・旅行・読書・音楽・映画の活用術2026
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIって便利そうだけど、仕事以外では使い道がないよね」——そう感じていませんか？
            実は、日常の趣味こそAIが最も輝く場所です。料理・旅行・読書・音楽・映画など、あなたが好きなことにAIを組み合わせると、
            楽しさが何倍にも広がります。この記事では、5つの定番趣味を中心に計55の具体的な活用例を紹介します。
            「あ、こんなところにも使えるの！」という驚きと一緒に、今日からすぐ試せるアイデアを持ち帰ってください。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AIを使い始めたばかりの方は
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/ai-for-non-engineers" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            非エンジニア向けAI活用ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            カスタム指示の設定方法
          </Link>
          ・
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI不安を乗り越えるガイド
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
            要点まとめ（AIO向け：結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              AIは仕事だけでなく、料理・旅行・読書・音楽・映画など日常の趣味すべてに活用できる
            </li>
            <li className="pl-1 marker:text-gray-500">
              冷蔵庫の食材からレシピ提案・栄養管理・旅行の行程プランニングまで、「日本語で話しかけるだけ」で動く
            </li>
            <li className="pl-1 marker:text-gray-500">
              作詞・楽器練習・映画考察・読書記録など、趣味を深める「創造のパートナー」としても機能する
            </li>
            <li className="pl-1 marker:text-gray-500">
              今日から試せる3ステップ：①困ったを書き出す→②そのまま相談する→③追加指示で磨く
            </li>
          </ul>
        </motion.section>

        {/* 「AIは仕事専用」という誤解 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="misconception" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「AIは仕事専用」という誤解を解く
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIが注目される文脈は、多くの場合「業務効率化」「コスト削減」「仕事の生産性向上」です。
            そのため、「AIは仕事でしか使わないもの」というイメージが定着してしまいました。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            しかし実態はまったく違います。ChatGPT・Claude・Geminiは、<strong>あなたがどんな話題を持ちかけても対応できる汎用AIアシスタント</strong>です。
            料理のレシピ相談、旅行の計画、好きな本の感想を深堀り、作りたい歌の歌詞を一緒に考える——これらはすべて、今すぐ無料で試せます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            OpenAIが発表したChatGPTの利用傾向調査（2025年）によると、エンターテインメント・趣味・創作活動への利用は全体の約38%を占めており、仕事利用（約35%）を上回っています。
            つまり、すでに多くの人が「趣味のパートナー」としてAIを使いこなしているのです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIとの会話を仕事だけに限定するのは、スマートフォンを「電話とメールにしか使わない」のと同じくらいもったいないことです。
            一緒に、趣味の世界にAIを解き放ちましょう。
          </p>
        </motion.section>

        {/* 料理×AI */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cooking" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            料理×AI：5つの活用法（実例付き）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            料理とAIは相性抜群です。「今日何を作るか」という日常の悩みから、栄養管理、失敗した料理のリカバリーまで、キッチンの頼れる相棒になります。
          </p>
          <div className="mt-6 space-y-5">
            {cookingExamples.map((example, i) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 text-will-primary">使い方{i + 1}.</span>
                  {example.title}
                </h3>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AIの回答：</span>
                  {example.result}
                </p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 旅行×AI */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="travel" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            旅行×AI：5つの活用法（実例付き）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            旅行はAIが最も活躍できる趣味の一つです。計画段階から現地、帰宅後の記録まで、旅のあらゆる場面でAIが力を発揮します。
          </p>
          <div className="mt-6 space-y-5">
            {travelExamples.map((example, i) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 text-will-primary">使い方{i + 6}.</span>
                  {example.title}
                </h3>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AIの回答：</span>
                  {example.result}
                </p>
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
          <MidArticleCtaBox slug="ai-hobby-lifestyle-guide" />
        </motion.section>

        {/* 読書×AI */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="reading" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            読書×AI：5つの活用法（実例付き）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIは「いつでも付き合ってくれる読書仲間」です。難しい本の解説役、次の一冊を提案するブックナビゲーター、
            書評を一緒に作るライターとして、読書体験を格段に豊かにしてくれます。
          </p>
          <div className="mt-6 space-y-5">
            {readingExamples.map((example, i) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 text-will-primary">使い方{i + 11}.</span>
                  {example.title}
                </h3>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AIの回答：</span>
                  {example.result}
                </p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 音楽×AI */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="music" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            音楽×AI：5つの活用法（実例付き）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            音楽の楽しみ方はリスニングだけではありません。作詞、楽器練習、音楽理論の学習——AIは音楽との関わり方をより深くしてくれます。
            SunoやUdioのような音楽生成AIと組み合わせると、さらに創造の幅が広がります。
          </p>
          <div className="mt-6 space-y-5">
            {musicExamples.map((example, i) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 text-will-primary">使い方{i + 16}.</span>
                  {example.title}
                </h3>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AIの回答：</span>
                  {example.result}
                </p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 映画×AI */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="movie" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            映画・ドラマ×AI：5つの活用法（実例付き）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            映画やドラマをAIと一緒に楽しむと、「見るだけ」から「考えて味わう」体験に変わります。
            考察相手・次の作品のナビゲーター・語学学習ツールとしても優秀です。
          </p>
          <div className="mt-6 space-y-5">
            {movieExamples.map((example, i) => (
              <section key={example.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 text-will-primary">使い方{i + 21}.</span>
                  {example.title}
                </h3>
                <div className="mt-3 rounded-md bg-gray-50 p-3">
                  <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AIの回答：</span>
                  {example.result}
                </p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* その他の趣味 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="other-hobbies" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            その他の趣味への応用：ガーデニング・ペット・スポーツ・DIY・写真
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            趣味はまだまだあります。以下、それぞれ2つずつ、すぐに試せる活用例をご紹介します（使い方26〜55）。
          </p>
          <div className="mt-6 space-y-6">
            {otherHobbies.map((hobby) => (
              <section key={hobby.category} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-xl font-bold text-will-primary">{hobby.category}</h3>
                <div className="mt-4 space-y-4">
                  {hobby.examples.map((ex) => (
                    <div key={ex.use} className="rounded-md bg-gray-50 p-4">
                      <p className="text-sm font-semibold text-gray-900">{ex.use}</p>
                      <p className="mt-1 text-sm leading-7 text-gray-700">{ex.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            ※ 上記5カテゴリ×各2例（計10例）＋5趣味×各5例（計25例）＋その他20例 = 合計55の使い方を本記事で紹介しています。
          </p>
        </motion.section>

        {/* 今日から始める3ステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="start-3steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            趣味×AIを始める3ステップ（今日からできること）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「全部試してみたい！」と思っても、最初から何でもやろうとすると続かないものです。まずは1つの趣味に絞って、3つのステップで始めてみましょう。
          </p>
          <div className="mt-6 space-y-6">
            {startSteps.map((step, i) => (
              <div key={step.step} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-5">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{step.step}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{step.description}</p>
                    <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">
                      💡 {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            まとめ：AIがあると、毎日がもっと楽しくなる
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事では、料理・旅行・読書・音楽・映画・ガーデニング・ペット・スポーツ・DIY・写真の10カテゴリにわたって、
            AIを趣味に活用する具体的な方法を55例紹介しました。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">冷蔵庫の食材から瞬時にレシピを提案——料理の悩みが解消</li>
            <li className="pl-1 marker:text-gray-500">旅行の行程プランから現地語フレーズまで——旅の質が上がる</li>
            <li className="pl-1 marker:text-gray-500">難しい本をわかりやすく解説・次の一冊を推薦——読書が深まる</li>
            <li className="pl-1 marker:text-gray-500">作詞・楽器練習・プレイリスト提案——音楽との関わり方が広がる</li>
            <li className="pl-1 marker:text-gray-500">映画考察・続編予測・語学学習——映像体験がインタラクティブになる</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIは仕事の効率を上げるだけでなく、<strong>あなたの余暇を豊かにし、趣味の楽しみを何倍にも広げてくれるパートナー</strong>です。
            まずは今日、好きな趣味の「小さな困った」を一つ、ChatGPTに相談してみてください。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AIと一緒に、もっと豊かな毎日を——その一歩を、今日踏み出してみましょう。
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
            title="趣味も仕事もAIと一緒に。"
            description="AIリブートのLINE公式アカウントでは、日常でAIを活かすヒントを配信中です。料理・旅行・趣味から仕事まで、すぐに使えるプロンプトや活用事例を毎週お届けしています。登録無料。気軽にご参加ください。"
            buttonLabel="LINEで最新のAI活用ヒントを受け取る（登録無料）"
          />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTカスタム指示完全ガイド｜設定するだけで回答が変わる
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIと歩む最初の30日ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級者向け活用テクニック集
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/suno-ai-music-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Suno AIで音楽生成を始めよう｜初心者向け完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-image-generation-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI画像生成ガイド｜Midjourney・Stable Diffusion入門
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
