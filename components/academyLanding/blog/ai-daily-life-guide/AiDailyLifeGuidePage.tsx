"use client";

import Link from "next/link";
import { Fragment } from "react";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

type ConversationMessage = {
  readonly role: "user" | "ai";
  readonly text: string;
};

type Tip = {
  readonly num: number;
  readonly title: string;
  readonly description: string;
  readonly prompt: string;
  readonly conversation?: readonly ConversationMessage[];
  readonly conversationTitle?: string;
};

type Category = {
  readonly id: string;
  readonly title: string;
  readonly emoji: string;
  readonly subtitle: string;
  readonly intro: string;
  readonly badge: string;
  readonly border: string;
  readonly bg: string;
  readonly numBg: string;
  readonly tips: readonly Tip[];
};

/* ------------------------------------------------------------------ */
/*  Animation                                                          */
/* ------------------------------------------------------------------ */

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ------------------------------------------------------------------ */
/*  Keyword tags                                                       */
/* ------------------------------------------------------------------ */

const keywordTags = [
  "生成AI 日常生活 活用",
  "ChatGPT 生活 便利",
  "AI 暮らし 使い方",
  "ChatGPT 日常 活用例",
] as const;

/* ------------------------------------------------------------------ */
/*  TOC                                                                */
/* ------------------------------------------------------------------ */

const tocItems = [
  { id: "key-points", label: "要点まとめ" },
  { id: "not-just-work", label: "AIは「仕事のもの」だと思っていませんか？" },
  { id: "cat-food", label: "食 — 毎日の「何作ろう？」がなくなる" },
  { id: "cat-life", label: "暮らし — 面倒な比較・判断をAIに相談" },
  { id: "cat-health", label: "健康 — 不安を「安心」に変えるAI活用" },
  { id: "cat-family", label: "子育て・家族 — 忙しい毎日にAIの力を" },
  { id: "cat-hobby", label: "趣味・学び — 好きなことをもっと深く" },
  { id: "caution", label: "AIを使うときの大切な注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

/* ------------------------------------------------------------------ */
/*  Category & tips data                                               */
/* ------------------------------------------------------------------ */

const categories: readonly Category[] = [
  {
    id: "cat-food",
    title: "食",
    emoji: "🍳",
    subtitle: "毎日の「何作ろう？」がなくなる",
    intro:
      "毎日の献立作りは、地味だけど一番頭を使う家事かもしれません。AIに相談すれば、冷蔵庫の中身からレシピを考えてくれたり、栄養バランスをチェックしてくれたり。「今日の夕飯どうしよう」のストレスから解放されます。",
    badge: "bg-orange-100 text-orange-700",
    border: "border-orange-200",
    bg: "bg-orange-50",
    numBg: "bg-orange-500",
    tips: [
      {
        num: 1,
        title: "今日の献立をAIに考えてもらう",
        description:
          "「今日の夕飯、何にしよう……」毎日のこの悩みがAIで解決します。家族の人数や好み、調理時間を伝えるだけで、献立をパッと提案してくれます。",
        prompt:
          "4人家族（大人2人、小学生2人）の夕飯の献立を考えて。調理時間は30分以内、予算は1,000円くらいで。子どもが野菜嫌いなので、野菜を食べやすくする工夫も入れてね。",
      },
      {
        num: 2,
        title: "冷蔵庫の残り物でレシピを作る",
        description:
          "買い物に行く時間がない日、冷蔵庫にある食材を伝えるだけでレシピを提案してくれます。食材を並べて送るだけなので、超簡単です。",
        prompt:
          "冷蔵庫に以下の食材があります。これだけで作れる夕飯を3つ提案して。\n・鶏もも肉 200g\n・じゃがいも 2個\n・にんじん 1本\n・玉ねぎ 1個\n・卵 3個\n・醤油、味噌、マヨネーズはあります",
        conversationTitle: "冷蔵庫の中身を伝えたらこんな提案が",
        conversation: [
          {
            role: "user",
            text: "冷蔵庫に鶏もも肉、じゃがいも、にんじん、玉ねぎ、卵があります。30分以内で2品作れるレシピを教えて。",
          },
          {
            role: "ai",
            text: "いい食材がそろっていますね！30分で2品、作れますよ。\n\n【メイン】鶏と野菜のほくほく甘辛煮\n① 鶏もも肉を一口大に切る\n② じゃがいも・にんじん・玉ねぎを乱切り\n③ フライパンで鶏肉を焼き、野菜を加えて水150mlと醤油・みりん・砂糖（各大さじ2）で15分煮る\n\n【副菜】ふわふわ卵のにんじんしりしり\n① にんじん1/3本を千切り\n② 油で炒めて卵2個を流し入れ、塩少々で味付け\n\n余ったじゃがいもで明日のポテトサラダもいけますよ。作り方も知りたいですか？",
          },
          {
            role: "user",
            text: "いいね！あと、子どもが甘辛煮の辛い味が苦手なんだけど……",
          },
          {
            role: "ai",
            text: "お子さんの分だけ、取り分けてから砂糖を少し多めにして醤油を控えめにすると「甘煮」風になりますよ。\n\nもう一つの方法は、最初から甘めに仕上げて、大人の分だけ後から醤油を足すやり方。これなら一度に作れてラクです。",
          },
        ],
      },
      {
        num: 3,
        title: "栄養バランスをチェックする",
        description:
          "「最近、栄養偏ってるかも……」と思ったら、1日の食事内容をAIに伝えてみましょう。足りない栄養素と、それを補う簡単な食材を教えてくれます。",
        prompt:
          "今日の食事内容を教えるので、栄養バランスをチェックして。\n朝：食パン1枚、コーヒー\n昼：コンビニのおにぎり2個\n夕：カレーライス\n足りない栄養素と、明日の食事で補えるおすすめ食材を教えて。",
      },
      {
        num: 4,
        title: "1週間分の買い物リストを自動生成",
        description:
          "献立が決まったら、そのまま「買い物リストにして」と頼むだけ。スーパーの売り場順に整理してもらうこともできます。",
        prompt:
          "さっき提案してくれた1週間分の献立をもとに、買い物リストを作って。スーパーの売り場別（野菜、肉、魚、乳製品、調味料）に分けてね。家にある基本調味料（醤油・塩・砂糖・油）は除外して。",
      },
    ],
  },
  {
    id: "cat-life",
    title: "暮らし",
    emoji: "🏠",
    subtitle: "面倒な比較・判断をAIに相談",
    intro:
      "引っ越し、家電選び、保険の見直し、片付け。暮らしの中には「調べるのが面倒」「誰かに相談したい」場面がたくさんあります。AIは24時間いつでも、嫌な顔ひとつせず相談に乗ってくれます。",
    badge: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    bg: "bg-amber-50",
    numBg: "bg-amber-500",
    tips: [
      {
        num: 5,
        title: "引っ越し先の比較を手伝ってもらう",
        description:
          "複数の候補があるとき、条件を伝えて比較表を作ってもらえます。自分では見落としがちな観点も提案してくれます。",
        prompt:
          "引っ越しを検討中です。以下の2物件を比較して、メリット・デメリットを表にまとめて。\n物件A：中野区、家賃12万、駅徒歩5分、1LDK、築10年\n物件B：練馬区、家賃9万、駅徒歩12分、2LDK、築20年\n通勤先は新宿、共働き夫婦2人暮らしです。",
      },
      {
        num: 6,
        title: "家電選びの相談をする",
        description:
          "洗濯機、エアコン、掃除機……高い買い物ほど迷いますよね。予算と用途を伝えるだけで、候補を絞り込んでくれます。",
        prompt:
          "ドラム式洗濯機の購入を検討しています。以下の条件に合うおすすめを3つ教えて。\n・予算：15〜20万円\n・家族：4人（夫婦＋子ども2人）\n・重視：乾燥機能、静音性\n・設置スペース：幅65cm以内\nそれぞれのメリット・デメリットも教えてね。",
      },
      {
        num: 7,
        title: "保険の見直しを壁打ちする",
        description:
          "「今の保険って本当に必要？」という疑問をAIにぶつけてみましょう。専門家に相談する前の「予習」として最適です。",
        prompt:
          "加入中の保険を見直したいです。一般的な観点からアドバイスをください。\n・生命保険：月8,000円（死亡保障3,000万円）\n・医療保険：月3,000円（入院日額5,000円）\n・がん保険：月2,000円\n家族は夫婦＋子ども1人（3歳）、世帯年収600万円です。\n※最終判断は保険の専門家に相談しますが、まず考え方の整理を手伝って。",
      },
      {
        num: 8,
        title: "断捨離の計画を立てる",
        description:
          "「片付けたいけど、どこから手をつければ……」を解決。場所やモノの種類に合わせた断捨離プランを作ってくれます。",
        prompt:
          "3連休で部屋の断捨離をしたいです。効率的な進め方を教えて。\n対象：1LDKのマンション（一人暮らし）\n溜まっているもの：服、本、書類\n使える時間：3日間（各4時間）\n1日目〜3日目のスケジュールと「捨てる・残す」の判断基準も教えて。",
      },
    ],
  },
  {
    id: "cat-health",
    title: "健康",
    emoji: "💚",
    subtitle: "不安を「安心」に変えるAI活用",
    intro:
      "「この症状、何科に行けばいいんだろう」「運動したいけど何から始めれば」——健康に関する不安や疑問は、まずAIに相談して整理してみましょう。受診前の不安が減り、医師への質問も的確になります。",
    badge: "bg-teal-100 text-teal-700",
    border: "border-teal-200",
    bg: "bg-teal-50",
    numBg: "bg-teal-500",
    tips: [
      {
        num: 9,
        title: "症状から何科に行くべきか調べる",
        description:
          "「この症状、何科に行けばいいの？」という疑問をAIで事前に整理。あくまで参考情報ですが、受診の不安を減らせます。",
        prompt:
          "最近、以下の症状があります。何科を受診すべきか教えてください。\n・朝起きると頭の後ろが重い\n・肩こりがひどい\n・目が疲れやすい\n考えられる原因と、受診前にできるセルフケアも教えて。\n※参考情報として聞いています。最終的には医師の診断を受けます。",
        conversationTitle: "「頭が重い」とAIに相談してみた",
        conversation: [
          {
            role: "user",
            text: "最近、右の首筋がずっと張っていて、ときどきズキッと頭痛がします。目の疲れもひどいです。何科にかかればいい？",
          },
          {
            role: "ai",
            text: "つらい症状ですね。いくつか確認させてください。\n・頭痛は片側だけですか？両側ですか？\n・デスクワークが多い仕事ですか？\n・症状はいつ頃から続いていますか？",
          },
          {
            role: "user",
            text: "頭痛は右側が多いです。デスクワーク中心で、パソコンは1日8時間くらい。1か月前からです。",
          },
          {
            role: "ai",
            text: "ありがとうございます。状況から考えると、以下の受診先が考えられます。\n\nまずおすすめ：整形外科\n首周りの筋肉の緊張や姿勢が原因の「緊張型頭痛」の可能性があります。デスクワーク＋首の張り＋目の疲れという組み合わせは、この診断に多いパターンです。\n\n改善しない場合：脳神経内科\n片側の頭痛が続く場合は念のため選択肢に入ります。\n\n受診までにできること：\n・1時間ごとに首をゆっくり回すストレッチ\n・モニターの高さを目線に調整\n・温かいタオルを首に当てる\n\n⚠️ あくまで一般的な参考情報です。正確な診断は必ず医師の診察を受けてください。",
          },
        ],
      },
      {
        num: 10,
        title: "自分に合った運動メニューを作る",
        description:
          "ジムに行かなくても、自宅でできる運動プランをAIが提案。体力レベルや目的に合わせてカスタマイズしてくれます。",
        prompt:
          "自宅でできる運動メニューを作って。\n目的：運動不足の解消\n体力レベル：運動習慣なし（デスクワーク中心）\n時間：1日15分\n器具：なし\n週5日のメニューを、初心者でも続けられるレベルで。1週目〜4週目で少しずつレベルアップする構成にして。",
      },
      {
        num: 11,
        title: "睡眠改善のアドバイスをもらう",
        description:
          "「なんだか眠れない」「朝スッキリしない」。生活習慣を伝えると、改善ポイントを提案してくれます。",
        prompt:
          "最近よく眠れません。以下の生活習慣を見て、改善ポイントを教えて。\n・就寝：夜1時ごろ\n・起床：朝7時（目覚ましで無理やり）\n・寝る前：布団でスマホを30分くらい見る\n・カフェイン：夕方にコーヒー1杯\n・運動：ほぼなし\n今日から始められる改善策を3つ、優先順位をつけて教えて。",
      },
      {
        num: 12,
        title: "モヤモヤした気持ちを整理する",
        description:
          "ストレスや不安を言語化するのにAIは最適。人には話しにくいことも、AIなら気兼ねなく話せます。",
        prompt:
          "最近ちょっとストレスが溜まっています。話を聞いてもらえますか？\n仕事が忙しくて、家に帰ると何もやる気が起きません。休日もゴロゴロしてしまって、自己嫌悪になります。\nアドバイスというよりは、まず気持ちの整理を手伝ってください。",
      },
    ],
  },
  {
    id: "cat-family",
    title: "子育て・家族",
    emoji: "👨‍👩‍👧‍👦",
    subtitle: "忙しい毎日にAIの力を",
    intro:
      "子どもの宿題、PTAの案内文、家族旅行のプラン……。忙しい毎日の中で「ちょっと誰かに手伝ってほしい」場面、AIが頼れるアシスタントになります。",
    badge: "bg-rose-100 text-rose-700",
    border: "border-rose-200",
    bg: "bg-rose-50",
    numBg: "bg-rose-500",
    tips: [
      {
        num: 13,
        title: "子どもの宿題のヒントを出してもらう",
        description:
          "「答えを教えて」ではなく「ヒントだけ出して」がポイント。子どもの考える力を伸ばしながら、親の負担も減らせます。",
        prompt:
          "小学4年生の子どもが自由研究で「なぜ月の形は変わるのか」を調べています。\n答えを直接教えるのではなく、子ども自身が考えられるようなヒントを3つ出して。小学生にわかる言葉で、実験や観察のアイデアも含めて。",
        conversationTitle: "子どもの自由研究をAIにヒントだけ出してもらった",
        conversation: [
          {
            role: "user",
            text: "小学4年生の子どもが「なぜ月の形は変わるの？」の自由研究をしています。答えは教えないで、ヒントだけ出して。",
          },
          {
            role: "ai",
            text: "すてきな研究テーマですね！考える力が育つヒントを3つ出しますね。\n\nヒント1：ボール遊びで実験してみよう\n暗い部屋でボールに懐中電灯の光を当ててみて。ボールの周りをぐるっと歩きながら見ると、光の当たり方がどう変わるかな？\n\nヒント2：1か月間、月を観察してみよう\n毎日同じ時間に月の形をスケッチしてみて。何日で元の形に戻るかな？カレンダーに記録するとわかりやすいよ。\n\nヒント3：太陽・月・地球の関係を考えてみよう\n月は自分で光っているのかな？それとも何かの光を反射しているのかな？3つの位置関係がカギだよ。\n\nお子さんが「わかった！」となるまで見守ってあげてくださいね。つまったらまたヒントを出しますよ。",
          },
        ],
      },
      {
        num: 14,
        title: "オリジナル絵本を即興で作る",
        description:
          "「もう1冊読んで！」のリクエストに、AIでオリジナルの物語を作ってあげましょう。子どもの名前や好きなものを入れられます。",
        prompt:
          "5歳の子ども向けに、短い絵本のお話を作って。\n・主人公の名前：ゆうくん\n・好きなもの：恐竜、電車\n・テーマ：勇気を出すこと\n・長さ：3分くらいで読み聞かせできる分量\nやさしい言葉で、ワクワクする展開にしてね。",
      },
      {
        num: 15,
        title: "PTAや町内会の案内文を作る",
        description:
          "「この文面でいいかな……」と悩む案内文、AIに下書きを頼めば一瞬。フォーマルさの調整も簡単です。",
        prompt:
          "小学校PTA主催の夏祭りの案内文を作ってください。\n日時：7月20日（土）10:00〜15:00\n場所：校庭\n内容：模擬店、盆踊り、スイカ割り\n持ち物：水筒、タオル、レジャーシート\n対象：全校生徒とその家族\nA4用紙1枚に収まるように。保護者に配るプリントなので、丁寧だけど堅すぎない文体で。",
      },
      {
        num: 16,
        title: "家族旅行のプランを考えてもらう",
        description:
          "行き先選びから、タイムスケジュール、予算の目安まで。「旅行プランナー」としてAIはとても優秀です。",
        prompt:
          "夏休みに家族旅行を計画しています。プランを考えて。\n・家族：夫婦＋小学2年生＋4歳\n・日程：2泊3日\n・予算：10万円くらい（交通費込み）\n・出発地：東京\n・希望：海か川で遊べる、子どもが飽きない、大人もリラックス\n3つの候補地を出して、それぞれスケジュールと予算内訳も教えて。",
      },
    ],
  },
  {
    id: "cat-hobby",
    title: "趣味・学び",
    emoji: "📚",
    subtitle: "好きなことをもっと深く",
    intro:
      "園芸、カメラ、語学、読書、家計管理……。趣味や学びの分野でも、AIは「詳しい友人」のように相談に乗ってくれます。好きなことがもっと楽しくなる活用術です。",
    badge: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-200",
    bg: "bg-indigo-50",
    numBg: "bg-indigo-500",
    tips: [
      {
        num: 17,
        title: "趣味を深掘りする相談相手にする",
        description:
          "園芸、料理、カメラ、手芸……何でもAIは「知識豊富な友人」のように相談に乗ってくれます。",
        prompt:
          "ベランダ菜園を始めたいです。初心者向けのアドバイスをください。\n・環境：マンションのベランダ（南向き、奥行き1m）\n・予算：初期費用5,000円以内\n・希望：料理に使える野菜やハーブ\n今の時期（2月）から準備して春に収穫できるものを教えて。必要な道具リストも。",
      },
      {
        num: 18,
        title: "語学学習のパートナーにする",
        description:
          "英会話教室に通わなくても、AIと好きなだけ会話練習ができます。レベルに合わせて話してくれるのもうれしいポイント。",
        prompt:
          "英語の会話練習を手伝って。\n私のレベル：中学英語はわかるけど会話は苦手\nシチュエーション：海外旅行でレストランを予約する\nルール：\n・まず私が英語で話しかけるので、レストランのスタッフ役をやって\n・文法ミスがあったら、会話の後でやさしく指摘して\n・日本語訳もつけて",
      },
      {
        num: 19,
        title: "読書感想の壁打ちをする",
        description:
          "本を読んだ後に感じたことをAIに話すと、自分では気づかなかった視点が見つかります。読書の楽しさが倍増します。",
        prompt:
          "最近『嫌われる勇気』を読みました。読書感想の壁打ちを手伝って。\n印象に残ったのは「課題の分離」という考え方です。\n感想：人の評価を気にしすぎていた自分に気づいた。でも実践は難しそう。\n結論を教えるのではなく、私自身が考えを深められるような問いかけをして。",
      },
      {
        num: 20,
        title: "家計簿を分析してもらう",
        description:
          "毎月の支出をAIに見せるだけで、「削れるポイント」「平均との比較」を教えてくれます。FPに相談する前の下準備にも。",
        prompt:
          "先月の家計簿を分析して。4人家族（夫婦＋小学生2人）、世帯手取り月収45万円です。\n・住居費：12万\n・食費：8万\n・日用品：1.5万\n・外食：2.5万\n・教育費：3万\n・通信費：1.8万\n・交通費：1.5万\n・保険：2万\n・趣味：1.5万\n・被服費：1万\n・その他：2万\n削れそうなポイントと、同じ家族構成の一般的な支出との比較を教えて。\n※資産運用の判断はFPに相談します。",
        conversationTitle: "家計簿をAIに見せたら意外な発見が",
        conversation: [
          {
            role: "user",
            text: "先月の家計簿です。4人家族で手取り45万円。食費8万、外食2.5万、通信費1.8万、保険2万。削れるところある？",
          },
          {
            role: "ai",
            text: "拝見しました！全体的にしっかり管理されている印象ですが、いくつか気になるポイントがあります。\n\n① 通信費 1.8万円 → 目安 0.8〜1万円\n4人家族でも、格安SIMへの乗り換えで月5,000〜1万円削減できる可能性があります。今のキャリアと契約内容を教えてもらえれば、具体的に試算できますよ。\n\n② 外食 2.5万円\n食費8万円とは別に外食2.5万円なので、合計10.5万円。4人家族の平均は約8〜9万円です。外食の回数を月1回減らすだけで5,000円の効果があります。\n\n③ 保険 2万円\nお子さんの年齢によっては、過剰な保障になっている可能性も。これはFPさんに具体的に相談するのがおすすめです。\n\n年間で見ると、通信費の見直しだけで6〜12万円の削減ポテンシャルがありますね。",
          },
          {
            role: "user",
            text: "通信費、もう少し詳しく聞きたい！今はドコモで家族4人とも契約してるんだけど……",
          },
          {
            role: "ai",
            text: "ドコモ家族4人ですね。現在のプラン名がわかるとより正確に比較できますが、一般的な目安をお伝えしますね。\n\nドコモのままでも「irumo」にプラン変更するとかなり安くなります。0.5GBプランなら月550円から。Wi-Fi中心の方はこれだけで大幅削減です。\n\nMVNO（格安SIM）に乗り換える場合、例えば家族4人をIIJmioの5GBプラン（月990円×4人＝3,960円）にすると、今の1.8万円から4,000円程度に。年間16万円以上の差になります。\n\n⚠️ ただしドコモ光とのセット割を使っている場合は総合的に計算が必要です。",
          },
        ],
      },
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Caution items                                                      */
/* ------------------------------------------------------------------ */

const cautionItems = [
  {
    num: 1,
    title: "医療の最終判断は必ず医師に",
    body: "AIは症状の整理や受診先の目安には使えますが、診断はできません。「何科に行くべきか」の参考にはなりますが、正確な診断と治療は必ず医師にお任せください。緊急性のある症状（激しい痛み・呼吸困難・意識障害）は、AIに相談する前に119番へ。",
  },
  {
    num: 2,
    title: "お金の大きな判断は専門家に",
    body: "保険の見直しや家計分析で「考え方の整理」はできますが、具体的な金融商品の選択や資産運用の判断は、FP（ファイナンシャルプランナー）や専門家に相談してください。AIの回答はあくまで「一般的な目安」です。",
  },
  {
    num: 3,
    title: "個人情報の入力は必要最小限に",
    body: "AIに相談するとき、名前・住所・電話番号などの個人情報を入力する必要はありません。「4人家族、世帯年収○万円」のように、個人を特定できない範囲の情報で十分な回答が得られます。",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function ConversationExample({
  title,
  messages,
}: {
  title: string;
  messages: readonly ConversationMessage[];
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-100 bg-gray-50 px-4 py-2.5">
        <p className="text-xs font-semibold text-gray-500">💬 {title}</p>
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === "user" ? "" : ""}`}>
            <div
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                msg.role === "user"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {msg.role === "user" ? "You" : "AI"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-gray-500">
                {msg.role === "user" ? "あなた" : "AIの回答"}
              </p>
              <p className="mt-1 whitespace-pre-line text-sm leading-7 text-gray-700">
                {msg.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PromptCard({ prompt, numBg, num }: { prompt: string; numBg: string; num: number }) {
  return (
    <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <div className="flex items-center gap-2">
        <span className={`inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold text-white ${numBg}`}>
          {num}
        </span>
        <p className="text-xs font-semibold text-gray-500">そのまま使えるプロンプト例</p>
      </div>
      <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-700">{prompt}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function AiDailyLifeGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "日常生活×生成AI活用術20選" },
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
                title="AIで暮らしが変わる｜日常生活×生成AI活用術20選【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            AIで暮らしが変わる｜日常生活×生成AI活用術20選
          </h1>
          <p
            className="mt-2 text-lg text-gray-600"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            食・暮らし・健康・子育て・趣味——無料で今日から使える
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIは仕事で使うもの」——そう思っていませんか？
            実は、AIが一番活躍する場所は、オフィスのデスクではなく
            <strong>「あなたの暮らしの中」</strong>かもしれません。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            毎日の献立に悩む時間、引っ越し先の比較に費やす週末、
            「この症状、何科に行けば……」と検索し続ける夜。
            そんな日常の「ちょっと困った」を、AIがまるごとサポートしてくれます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、<strong>食・暮らし・健康・子育て・趣味</strong>の5カテゴリで
            すぐに試せるAI活用術20選を、
            <strong>そのまま使えるプロンプト例つき</strong>で紹介します。
            2026年2月時点のChatGPT・Claude・Geminiの無料プランで、今日から使えるものばかりです。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* ────────── 要点まとめ ────────── */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            id="key-points"
            className="scroll-mt-28 text-2xl font-bold text-gray-900"
          >
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              毎日の献立、冷蔵庫の残り物レシピ、買い物リストまで——「食」の悩みをAIが丸ごと解決
            </li>
            <li className="pl-1 marker:text-gray-500">
              引っ越し比較、家電選び、保険の見直し——暮らしの「面倒な判断」をAIに壁打ちできる
            </li>
            <li className="pl-1 marker:text-gray-500">
              「何科に行くべき？」「運動メニューを作りたい」——健康の不安をAIで事前整理（最終判断は医師に）
            </li>
            <li className="pl-1 marker:text-gray-500">
              宿題ヒント、絵本の即興創作、旅行プラン——子育て・家族の時間をAIが豊かにする
            </li>
            <li className="pl-1 marker:text-gray-500">
              趣味の深掘り、語学練習、家計分析——学びと暮らしの質をAIが底上げ
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>すべてChatGPT・Claude・Geminiの無料プランで今日から使える</strong>
            </li>
          </ul>
        </motion.section>

        {/* ────────── イントロ ────────── */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            id="not-just-work"
            className="scroll-mt-28 text-2xl font-bold text-gray-900"
          >
            AIは「仕事のもの」だと思っていませんか？
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ニュースで見るAIの話題は、プログラミングとか、ビジネスの効率化とか、
            自分とは遠い世界の話に聞こえますよね。
            「便利そうだけど、自分の生活には関係ないかな」——そう思っている方は少なくありません。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            でも、ちょっと想像してみてください。
          </p>
          <div className="mt-6 space-y-3">
            {[
              "「今日の夕飯、何にしよう？」と冷蔵庫の前で悩む時間がゼロになる",
              "引っ越しの物件比較を、不動産屋さんに行く前にAIと整理できる",
              "子どもの「なんで月の形は変わるの？」に、AIと一緒に答えを探す冒険ができる",
              "「この症状は何科？」を夜中に延々と検索する代わりに、AIが30秒で整理してくれる",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <span className="mt-0.5 text-lg">✨</span>
                <p className="text-sm leading-7 text-gray-700">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            これ、<strong>全部AIで今日からできること</strong>です。しかも無料で。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事を読み終わるころには、「え、AIってこんなことにも使えるの？」という驚きと、
            「今日から試してみよう」というワクワクが生まれているはずです。
            使うツールはChatGPT・Claude・Geminiのどれでも大丈夫。
            すべて無料プランで実践できます。
          </p>
          <p className="mt-3 text-xs text-gray-500">
            ※ 2026年2月時点の情報です。ChatGPT（GPT-5.2が5時間10回まで→GPT-5 miniで継続利用可）、Claude（Sonnet 4.6）、Gemini（3 Flashが回数無制限）はすべて無料で使えます。
          </p>
        </motion.section>

        {/* ────────── カテゴリ 1〜5 ────────── */}
        {categories.map((cat, catIndex) => (
          <Fragment key={cat.id}>
            <motion.section
              className="mt-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={sectionReveal}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* カテゴリ見出し */}
              <div className={`mb-6 rounded-xl border ${cat.border} ${cat.bg} p-5`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.emoji}</span>
                  <div>
                    <h2
                      id={cat.id}
                      className="scroll-mt-28 text-2xl font-bold text-gray-900"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {cat.title} — {cat.subtitle}
                    </h2>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">{cat.intro}</p>
              </div>

              {/* Tip カード */}
              <div className="space-y-8">
                {cat.tips.map((tip) => (
                  <div key={tip.num}>
                    <h3 className="flex items-center gap-3 text-lg font-bold text-gray-900">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${cat.numBg}`}
                      >
                        {tip.num}
                      </span>
                      {tip.title}
                    </h3>
                    <p className="mt-3 pl-11 text-base leading-8 text-gray-700">
                      {tip.description}
                    </p>

                    {/* プロンプト例 */}
                    <div className="pl-11">
                      <PromptCard prompt={tip.prompt} numBg={cat.numBg} num={tip.num} />
                    </div>

                    {/* 会話例（あれば） */}
                    {tip.conversation && tip.conversationTitle && (
                      <div className="mt-4 pl-11">
                        <ConversationExample
                          title={tip.conversationTitle}
                          messages={tip.conversation}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* カテゴリ3（健康）と4（子育て）の間にCTA */}
            {catIndex === 2 && (
              <motion.section
                className="mt-14"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={sectionReveal}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <MidArticleCtaBox slug="ai-daily-life-guide" />
              </motion.section>
            )}
          </Fragment>
        ))}

        {/* ────────── 注意点 ────────── */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            id="caution"
            className="scroll-mt-28 text-2xl font-bold text-gray-900"
          >
            AIを使うときの大切な注意点
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIはとても便利ですが、万能ではありません。
            安心して使い続けるために、この3つだけは覚えておいてください。
          </p>
          <div className="mt-6 space-y-4">
            {cautionItems.map((item) => (
              <div
                key={item.num}
                className="rounded-xl border-2 border-red-100 bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-gray-700">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ────────── FAQ ────────── */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            id="faq"
            className="scroll-mt-28 text-2xl font-bold text-gray-900"
          >
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Q. {item.question}
                </dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">
                  A. {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* ────────── まとめ ────────── */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            id="summary"
            className="scroll-mt-28 text-2xl font-bold text-gray-900"
          >
            まとめ：AIは、あなたの暮らしの「もう一人の家族」
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            20の活用術、いかがでしたか？
            「全部やらなきゃ」と思う必要はまったくありません。
            <strong>この中から1つだけ、今日の夜に試してみてください。</strong>
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            おすすめは「今日の夕飯の献立を考えて」——これだけで、AIのある暮らしが始まります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIは完璧な執事でもなければ、何でも知っている先生でもありません。
            でも、毎日の「ちょっとした困った」に寄り添ってくれる、頼れるパートナーになってくれます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            仕事だけのものだと思っていたAIが、実は一番身近な「暮らし」の中で力を発揮する。
            そのことに気づいたとき、あなたの毎日は少しだけ、でも確実にラクに、楽しくなるはずです。
          </p>
          <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm font-semibold text-orange-800">
              今日の夜、ぜひAIに話しかけてみてください。
            </p>
            <p className="mt-2 text-sm leading-7 text-orange-900">
              「今日の夕飯の献立を考えて。4人家族で、30分以内で作れるものがいいな。」
              ——この一言が、あなたのAIライフの第一歩になります。
            </p>
          </div>
        </motion.section>

        {/* ────────── LINE CTA ────────── */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        {/* ────────── 関連リンク ────────── */}
        <section
          id="related-links"
          className="mt-14 border-t border-slate-200 pb-4 pt-12"
        >
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/ai-mastery-tips-for-beginners"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIを「使えるようになった人」がやっていた5つのこと
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-prompt-templates-50"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                すぐ使える！ChatGPTプロンプトテンプレート50選
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-free-plan-comparison-2026"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-voice-mode-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT音声モード完全ガイド｜スマホで話しかけるだけのAI活用術
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-beginners-guide-over-50"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                50代60代から始めるAI入門｜スマホだけでできるChatGPT活用ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-privacy-safety-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIに個人情報を入れても大丈夫？｜安全に使うための5つのルール
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-prompt-beginner"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型
              </Link>
            </li>
            <li>
              <Link
                href="/academy"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
