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
  "AI 子育て 活用",
  "ChatGPT 育児",
  "AI 子育て 便利",
  "生成AI ママ パパ 使い方",
] as const;

/* ------------------------------------------------------------------ */
/*  TOC                                                                */
/* ------------------------------------------------------------------ */

const tocItems = [
  { id: "key-points", label: "要点まとめ" },
  { id: "why-ai-parenting", label: "なぜ今「子育て×AI」が注目されるのか" },
  { id: "cat-morning", label: "朝の時短編 — バタバタ朝を救う5つのAI術" },
  { id: "cat-learning", label: "子どもの学び編 — 答えを教えず考える力を伸ばす" },
  { id: "cat-housework", label: "家事効率化編 — 名もなき家事をAIに任せる" },
  { id: "cat-selfcare", label: "親自身のケア編 — あなた自身を大切にするために" },
  { id: "caution", label: "AI×子育てで気をつけること" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

/* ------------------------------------------------------------------ */
/*  Category & tips data                                               */
/* ------------------------------------------------------------------ */

const categories: readonly Category[] = [
  {
    id: "cat-morning",
    title: "朝の時短編",
    emoji: "☀️",
    subtitle: "バタバタ朝を救う5つのAI術",
    intro:
      "朝の30分は、夜の1時間に匹敵するほど貴重ですよね。お弁当作り、子どもの準備、自分の支度……全部を完璧にこなすのは無理。でもAIに「考える部分」だけ任せれば、朝のバタバタがグッとラクになります。",
    badge: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    bg: "bg-amber-50",
    numBg: "bg-amber-500",
    tips: [
      {
        num: 1,
        title: "献立の自動提案（アレルギー・好き嫌い対応）",
        description:
          "「今日の夕飯、何にしよう……」と毎日悩んでいませんか？ AIに家族の人数・好き嫌い・アレルギーを伝えれば、条件にぴったりの献立を提案してくれます。卵アレルギーの子がいても、野菜嫌いの子がいても大丈夫。",
        prompt:
          "4人家族（大人2人、5歳・3歳）の1週間分の夕飯の献立を考えてください。\n\n条件：\n・5歳の子が卵アレルギー（加熱すればOK、生卵NG）\n・3歳の子がピーマン・トマト嫌い\n・調理時間は1品30分以内\n・予算は1食あたり1,000円くらい\n・冷凍食品やレトルトを組み合わせてもOK\n\n月〜金の5日分を、主菜と副菜のセットで提案してください。買い物リストも一緒にお願いします。",
        conversationTitle: "アレルギー対応の献立をAIに相談してみた",
        conversation: [
          {
            role: "user",
            text: "5歳が卵アレルギーで、3歳がピーマン嫌い。30分以内で作れる夕飯を3日分考えて。",
          },
          {
            role: "ai",
            text: "お子さんの条件を踏まえた3日分の献立です！\n\n【月曜】鶏むね肉のやわらか照り焼き＋かぼちゃの甘煮\n→ 卵不使用。かぼちゃは甘みがあるので野菜嫌いさんも食べやすいです。\n\n【火曜】豚こまとキャベツの味噌炒め＋コーンスープ（牛乳ベース）\n→ コーンスープは卵なしで作れます。市販の粉末でもOK。\n\n【水曜】鮭のホイル焼き＋さつまいもスティック\n→ ホイル焼きはレモン＋バター醤油で。さつまいもはフライドポテト風にするとお子さんウケ◎\n\n買い物リストも作りましょうか？",
          },
          {
            role: "user",
            text: "ありがとう！買い物リストをスーパーの売り場別に分けてほしい。",
          },
          {
            role: "ai",
            text: "もちろん！売り場別に整理しますね。\n\n【お肉コーナー】鶏むね肉300g・豚こま200g\n【お魚コーナー】生鮭2切れ\n【野菜コーナー】キャベツ1/2個・かぼちゃ1/4個・さつまいも2本\n【乳製品】牛乳500ml・バター\n【調味料・乾物】コーンスープの素（卵不使用を確認）・レモン\n\n💡 卵不使用のコーンスープは、クノールの「たっぷりコーン」が該当します。パッケージ裏のアレルギー表示を確認してくださいね。",
          },
        ],
      },
      {
        num: 2,
        title: "お弁当のアイデア出し",
        description:
          "毎朝のお弁当づくり、ネタ切れしませんか？ 冷蔵庫にあるものや前日の残り物を伝えるだけで、彩りも栄養バランスも考えたお弁当メニューを提案してくれます。",
        prompt:
          "幼稚園の年中さん（5歳）のお弁当を考えてください。\n\n条件：\n・朝15分で作れるもの\n・前日の残り物：肉じゃが、きんぴらごぼう\n・冷凍食品を1〜2品使ってOK\n・キャラ弁ではなく、食べやすさ重視\n・赤・緑・黄色の彩りを入れたい\n\n具体的な詰め方のコツと、前日夜に準備しておくことも教えてください。",
      },
      {
        num: 3,
        title: "天気に合わせた服装アドバイス",
        description:
          "「今日は何を着せよう？」と迷う朝、天気予報の気温を伝えるだけでOK。子どもの年齢に合わせた服装を提案してくれます。保育園の「着替えが多い日」の対策にも。",
        prompt:
          "明日の天気予報を見て子どもの服装を相談したいです。\n\n条件：\n・3歳の男の子、保育園に通園\n・明日の天気：晴れのち曇り、最高気温12℃/最低気温5℃\n・午前中は外遊びの時間がある\n・保育園には着替え一式を持っていく\n\n登園時の服装と、ロッカーに入れておく着替えの内容を提案してください。暑がりなのでアウターの選び方も教えて。",
      },
      {
        num: 4,
        title: "持ち物リストの自動生成",
        description:
          "遠足、運動会、プール開き、お泊まり保育……。行事のたびに「何を持っていくんだっけ？」と慌てませんか？ 行事名を伝えるだけで、忘れ物ゼロのチェックリストが完成します。",
        prompt:
          "来週の金曜日、保育園の遠足があります。持ち物チェックリストを作ってください。\n\n情報：\n・4歳の男の子（年中クラス）\n・行き先：近くの公園（徒歩20分）\n・お弁当持参、おやつ200円まで\n・天気予報は晴れ、気温18℃\n\n「園からのお知らせに書いてありそうなもの」と「書いてないけどあると便利なもの」に分けてリストアップしてください。",
      },
      {
        num: 5,
        title: "朝のスケジュール最適化",
        description:
          "「あと5分で出発なのに靴下が見つからない！」——そんな朝をなくすために、家族の行動スケジュールをAIに組んでもらいましょう。何時に何をするか、可視化するだけで朝が激変します。",
        prompt:
          "共働き夫婦の朝のスケジュールを最適化してほしいです。\n\n家族構成：夫婦＋4歳（保育園）＋小学1年生\n起床時間：6:00\n出発時間：7:30（保育園→小学校→通勤の順）\n\n朝やること：\n・朝ごはん準備＋片付け\n・子ども2人の着替え・歯磨きの見守り\n・保育園の連絡帳記入\n・小学生の宿題チェック\n・洗濯機を回す\n\n夫婦で分担できるように、2人のタイムスケジュールを並列で作ってください。「この5分でコレを済ませる」くらい具体的にお願いします。",
        conversationTitle: "朝のスケジュールをAIに最適化してもらった",
        conversation: [
          {
            role: "user",
            text: "共働きで朝が地獄です。6時起き、7時半出発。4歳と小1の準備を夫婦で分担したい。",
          },
          {
            role: "ai",
            text: "朝の90分、しっかり使い切りましょう！ご夫婦の並行タイムスケジュールです。\n\n【6:00〜6:10】\nパパ：起床→洗濯機スタート→自分の身支度\nママ：起床→朝ごはん準備（前日夜に下準備済みのもの）\n\n【6:10〜6:30】\nパパ：子ども2人を起こす→着替え手伝い（4歳優先）\nママ：朝ごはん配膳→保育園の連絡帳記入\n\n【6:30〜6:50】\nパパ：小1の宿題チェック→自分の朝食\nママ：子どもと一緒に朝食→4歳の歯磨き\n\n【6:50〜7:10】\nパパ：食器を食洗機へ→洗濯物を干す\nママ：小1の歯磨き→持ち物最終チェック\n\n【7:10〜7:30】\nパパ：4歳の保育園準備（靴・帽子）→玄関集合\nママ：自分の最終身支度→戸締まり\n\n💡 前日夜にやっておくとラクなこと：朝ごはんの下準備、子どもの服を枕元にセット、保育園バッグの中身チェック",
          },
        ],
      },
    ],
  },
  {
    id: "cat-learning",
    title: "子どもの学び編",
    emoji: "📚",
    subtitle: "答えを教えず考える力を伸ばす",
    intro:
      "「ねえ、これ教えて」と聞かれたとき、答えをそのまま教えてしまうのは簡単。でもAIを使えば、子ども自身が「わかった！」にたどり着けるサポートができます。親の負担も減って、子どもの考える力も伸びる——いいとこ取りの学びの形です。",
    badge: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    bg: "bg-blue-50",
    numBg: "bg-blue-500",
    tips: [
      {
        num: 6,
        title: "宿題のサポート（答えを教えず考え方を導く）",
        description:
          "AIに「答えは教えないで、ヒントだけ出して」とお願いすると、子どもの考える力を引き出すサポーターに変身します。算数の文章題から理科の実験レポートまで対応可能。",
        prompt:
          "小学3年生の子どもが算数の宿題で困っています。\n\n問題：「りんごが23個あります。5人で同じ数ずつ分けると、1人何個もらえて、何個余りますか？」\n\n答えは教えないでください。\n小学3年生がわかる言葉で、自分で答えにたどり着けるヒントを3段階で出してください。\n最初は大きなヒント、つまったら少しずつ具体的にしていく形で。",
        conversationTitle: "割り算の宿題をAIにヒントだけ出してもらった",
        conversation: [
          {
            role: "user",
            text: "小3の子が「23÷5」がわからないって。答えは教えないで、ヒントだけお願い。",
          },
          {
            role: "ai",
            text: "わかりました！お子さんに伝えてあげてください。\n\n【ヒント1】\n「5人に配るってことは、1人に1個ずつあげていくよね。5個配ったら、残りは何個かな？」\n→ まず5×1=5を23から引いてみよう\n\nこれでピンとこなかったら、次のヒントを出しますね。お子さんの反応を教えてください！",
          },
          {
            role: "user",
            text: "「18個！」って言ってる。",
          },
          {
            role: "ai",
            text: "すごい、正解！18個残ったね。\n\n【ヒント2】\n「じゃあ、また5人に1個ずつ配ってみよう。残りは？」\n「それをくり返して、もう配れなくなったら何回配れたか数えてみよう」\n\nブロックやおはじきがあれば、実際に並べてみるとわかりやすいですよ。",
          },
        ],
      },
      {
        num: 7,
        title: "自由研究のテーマ出し",
        description:
          "夏休みの自由研究、毎年テーマ決めで1週間が過ぎていませんか？ 子どもの興味や学年を伝えれば、「やりたい！」と思えるテーマをいくつも提案してくれます。",
        prompt:
          "小学4年生の子どもの自由研究のテーマを5つ提案してください。\n\n子どもの興味：\n・虫が好き（特にカブトムシ）\n・料理の手伝いが好き\n・YouTubeの科学実験動画をよく見る\n\n条件：\n・特別な道具がなくても家でできる\n・1〜2週間で完成する規模\n・「調べて終わり」ではなく、実験や観察を含む\n\nそれぞれのテーマについて、具体的な進め方のステップと必要な材料も教えてください。",
      },
      {
        num: 8,
        title: "読書感想文の構成アドバイス",
        description:
          "読書感想文で一番つらいのは「何を書けばいいかわからない」こと。AIに本の内容を伝えると、子ども自身の感想を引き出す質問をしてくれます。",
        prompt:
          "小学5年生の子どもが読書感想文を書きます。構成を一緒に考えてほしいです。\n\n読んだ本：『モモ』（ミヒャエル・エンデ）\n\nルール：\n・子どもの代わりに感想文を書かないでください\n・構成のアドバイスと、感想を引き出す質問をしてください\n・「はじめ・なか・おわり」の3部構成で\n・原稿用紙3枚（1,200字）くらいの分量\n\n子どもは「モモが時間どろぼうと戦うところがかっこよかった」と言っています。",
      },
      {
        num: 9,
        title: "英語学習のパートナー",
        description:
          "英会話教室に通わなくても、AIと一緒に英語の冒険ができます。子どもの好きなテーマ（恐竜、お菓子、サッカー等）で話せるから、「もっとやりたい！」が続きます。",
        prompt:
          "小学3年生の子どもと一緒に英語を練習したいです。\n\nレベル：英語はほぼ初めて（ABCは書ける、簡単な挨拶は知ってる）\nテーマ：動物園に行く場面\n\nやってほしいこと：\n・簡単な英語フレーズを5つ教えて（カタカナ読みつき）\n・動物の名前を英語でクイズにして（ヒントつき）\n・最後に「動物園ごっこ」の簡単な会話スクリプトを作って\n\n子どもが「できた！」と感じられるくらい簡単なレベルでお願いします。",
      },
      {
        num: 10,
        title: "プログラミング入門のサポート",
        description:
          "2025年度から小学校のプログラミング教育がさらに充実。でも親が教えるのは大変……。AIならScratchやViscuitの使い方を、子どもの「作りたい！」に合わせてガイドしてくれます。",
        prompt:
          "小学2年生の子どもがScratch（スクラッチ）でゲームを作りたいと言っています。\n\n作りたいもの：ネコがリンゴをキャッチするゲーム\nレベル：Scratchを触ったことはあるけど、自分でゲームを作るのは初めて\n\nお願い：\n・完成したコードを教えるのではなく、ステップバイステップで進めたい\n・まず最初の3ステップだけ教えて\n・「次はどうする？」と子どもに考えさせるポイントを入れて\n・スクリーンショットがなくても理解できるように、ブロックの名前を正確に書いて",
      },
    ],
  },
  {
    id: "cat-housework",
    title: "家事効率化編",
    emoji: "🏠",
    subtitle: "名もなき家事をAIに任せる",
    intro:
      "「名もなき家事」という言葉が流行りましたが、子育て中はその量が倍増しますよね。買い物、家計管理、トラブル対応……。判断や情報整理が必要な家事こそ、AIの得意分野です。",
    badge: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    numBg: "bg-emerald-500",
    tips: [
      {
        num: 11,
        title: "買い物リストの自動最適化",
        description:
          "「あ、牛乳買い忘れた！」を防ぐだけでなく、売り場順に整理したリストを作ってくれます。冷蔵庫の在庫を伝えれば、無駄買いも防止。",
        prompt:
          "今週の買い物リストを作ってください。\n\n家族：大人2人、子ども2人（5歳・3歳）\n今週の献立：\n月：カレー、火：鮭の塩焼き+味噌汁、水：パスタ、木：肉じゃが、金：焼きそば\n\n冷蔵庫にあるもの：\n・卵10個、牛乳1L、玉ねぎ3個、にんじん2本\n\n条件：\n・スーパーの売り場別（野菜、肉・魚、乳製品、調味料、その他）に分けて\n・子ども用のおやつも3日分追加して（200円/日の予算で）\n・合計の概算金額も出して",
      },
      {
        num: 12,
        title: "家電トラブルの解決方法",
        description:
          "洗濯機のエラーコード、食洗機の水漏れ、エアコンの異音……。取扱説明書を探すより、AIに症状を伝えるほうがずっと早いです。",
        prompt:
          "洗濯機がエラーで止まりました。助けてください。\n\n状況：\n・メーカー：パナソニック\n・型番：NA-VX800C（ドラム式）\n・エラー表示：U11\n・症状：脱水の途中で止まる。排水できていない感じ\n\nまず考えられる原因と、自分でできる対処法を教えてください。\n「それでもダメなら」の場合の修理の目安費用も知りたいです。",
      },
      {
        num: 13,
        title: "家計簿分析と節約アドバイス",
        description:
          "家計簿アプリのデータをAIに見せるだけで、「削れるポイント」を教えてくれます。子育て世帯の平均支出との比較も一目瞭然。",
        prompt:
          "先月の家計簿を分析してください。4人家族（夫婦＋5歳＋3歳）、世帯手取り月収40万円です。\n\n・住居費：10万（賃貸）\n・食費：7万\n・外食：2万\n・日用品：1.5万\n・子ども関連（おむつ・服・おもちゃ）：2万\n・教育費（保育料）：3万\n・通信費：1.5万\n・保険：2万\n・交通費：1万\n・レジャー：1.5万\n・その他：2万\n\n同じ家族構成の平均支出と比較して、見直せるポイントを3つ教えてください。\n※資産運用の具体的なアドバイスは不要です。",
        conversationTitle: "子育て家庭の家計をAIに分析してもらった",
        conversation: [
          {
            role: "user",
            text: "4人家族、手取り40万。食費7万＋外食2万で合計9万って多い？",
          },
          {
            role: "ai",
            text: "4人家族（未就学児2人）の食費平均は約7〜8万円なので、食費7万円は適正範囲です。ただ外食2万円を合わせた9万円は少し高めですね。\n\n見直しのアイデア：\n① 外食を月2回→月1回にして、代わりに「おうちレストランごっこ」を取り入れる（子どもも楽しめます）\n② 食材の週1まとめ買い＋冷凍ストック作戦で平日の「疲れたから外食」を防止\n\nこれだけで月5,000〜1万円の効果が見込めます。\n\nちなみに、一番見直し効果が大きいのは通信費1.5万円です。格安SIMへの乗り換えで月5,000〜8,000円削減できる可能性があります。",
          },
        ],
      },
      {
        num: 14,
        title: "掃除・片付けの優先順位",
        description:
          "子育て中は家が散らかるのが当たり前。でも「どこから手をつけよう……」と途方に暮れたとき、AIに15分でできるプランを作ってもらいましょう。",
        prompt:
          "子ども2人（5歳・3歳）がいる家庭のリビングが散らかっています。\n\n状況：\n・おもちゃが床に散乱\n・洗濯物が取り込んだまま放置\n・テーブルの上に子どもの工作やプリントが山積み\n・掃除機は3日かけていない\n\n使える時間は子どもの昼寝中の30分だけです。\n\n「完璧にきれいにする」のではなく「一番スッキリ感が出る順番」で、30分のタイムスケジュールを作ってください。子どもが起きたらすぐ中断できるように、区切りを明確にして。",
      },
      {
        num: 15,
        title: "保険・サービスの比較検討",
        description:
          "子どもが生まれると保険の見直しや新しいサービスの加入を検討する機会が増えますよね。AIに条件を整理してもらえば、専門家に相談する前の「予習」ができます。",
        prompt:
          "子どもの医療保険に加入すべきか迷っています。考え方の整理を手伝ってください。\n\n状況：\n・子ども：3歳（1人）\n・住んでいる自治体：東京都○○区（中学生まで医療費無料）\n・世帯年収：650万円\n・現在の保険：夫婦の生命保険と医療保険のみ\n\n検討ポイント：\n・自治体の医療費助成がある中で、子ども医療保険は必要？\n・入るなら月いくらくらいの保障が妥当？\n・他に子育て世帯が検討すべき保険はある？\n\n※最終判断はFPに相談しますが、まず考え方を整理したいです。",
      },
    ],
  },
  {
    id: "cat-selfcare",
    title: "親自身のケア編",
    emoji: "💛",
    subtitle: "あなた自身を大切にするために",
    intro:
      "子育てに一生懸命な人ほど、自分のことは後回しにしがち。でも、パパ・ママが元気でいることが、子どもにとって一番大切なこと。AIは24時間いつでも、疲れた夜でも、あなたの話を聞いてくれます。",
    badge: "bg-rose-100 text-rose-700",
    border: "border-rose-200",
    bg: "bg-rose-50",
    numBg: "bg-rose-500",
    tips: [
      {
        num: 16,
        title: "育児の悩み相談（夜泣き、イヤイヤ期等）",
        description:
          "深夜2時の夜泣き対応、イヤイヤ期の爆発、兄弟喧嘩の仲裁……。誰にも言えない「もう限界」の気持ちを、AIに打ち明けてみませんか。答えが欲しいときも、ただ聞いてほしいときも。",
        prompt:
          "2歳の子のイヤイヤ期がひどくて、正直つらいです。話を聞いてもらえますか。\n\n最近の状況：\n・着替えもご飯も「イヤ！」で30分かかる\n・スーパーで寝転がって大泣きされた\n・「ママ嫌い！」と言われて泣きそうになった\n・夫は帰りが遅くて、平日はほぼワンオペ\n\nまずは気持ちの整理を手伝ってください。\nそのあとで、イヤイヤ期の一般的な対処法を3つくらい教えてもらえると嬉しいです。\n「頑張ってますね」みたいな上から目線ではなく、同じ目線で話してほしいです。",
        conversationTitle: "夜中にAIにイヤイヤ期の愚痴を聞いてもらった",
        conversation: [
          {
            role: "user",
            text: "2歳のイヤイヤ期がひどい。スーパーで大泣きされて周りの視線がつらかった。もう限界かも。",
          },
          {
            role: "ai",
            text: "それはつらかったですよね。周りの目が気になる中でのイヤイヤ対応って、本当に消耗しますよね。\n\n「もう限界かも」って思えてるのは、それだけ毎日ちゃんと向き合ってる証拠だと思います。限界じゃない人はそもそも「限界」って言葉が出てこないので。\n\nちょっと聞いてもいいですか？\n今一番しんどいのは、イヤイヤ自体？それとも一人で対応してること？それとも周りの目？\n\n全部でもいいです。整理するだけでも少しラクになるかもしれません。",
          },
          {
            role: "user",
            text: "全部だけど……一番は、一人で抱えてることかな。夫に話しても「そんなもんでしょ」って。",
          },
          {
            role: "ai",
            text: "「そんなもんでしょ」って言われると、余計にしんどくなりますよね。気持ちをわかってほしいだけなのに。\n\n一つだけ言わせてください。イヤイヤ期は「子どもが自分の意思を持ち始めた証」なんですが、それと「親がつらい」は全然別の話です。発達の正常な過程だからって、親がラクなわけがない。\n\n今すぐできる小さな対策を3つだけ：\n\n① 「選ばせる作戦」：「着替えて」→「赤い服と青い服、どっちにする？」\n② 「実況中継作戦」：「イヤなんだね。○○がしたかったんだよね」と気持ちを言葉にしてあげる\n③ 「撤退OK作戦」：スーパーで泣いたら、買い物を中断して出てもいい。誰も困りません\n\n完璧にやろうとしなくて大丈夫。今日も生きてるだけで100点です。",
          },
        ],
      },
      {
        num: 17,
        title: "ストレス発散のアイデア提案",
        description:
          "「自分の時間がほしい」と思っても、何をすればいいかわからない……。限られた時間と予算で、あなたに合ったリフレッシュ方法をAIが提案します。",
        prompt:
          "子育て中の自分だけのリフレッシュ方法を提案してください。\n\n状況：\n・1歳と4歳の子どもがいるママ\n・自分の時間は子どもの昼寝中の1時間と、寝かしつけ後の30分くらい\n・予算はあまりかけたくない（月3,000円以内）\n・体を動かすのは好きだけど外出は難しい\n・「趣味を作らなきゃ」というプレッシャーは感じたくない\n\n「やらなきゃいけないこと」ではなく「やりたいからやる」という気持ちになれるアイデアを5つお願いします。",
      },
      {
        num: 18,
        title: "復職・キャリア相談",
        description:
          "育休明けの復職、時短勤務からフルタイムへの切り替え、転職……。キャリアの悩みをAIに壁打ちすれば、頭の中がすっきり整理されます。",
        prompt:
          "育休明けの復職に不安があります。考えを整理するのを手伝ってください。\n\n状況：\n・1歳の子どもがいて、来月から復職予定\n・復職先：IT企業のマーケティング部門\n・育休前はフルタイム、復職後は時短勤務（9:30〜16:30）\n・不安なこと：\n  - 1年間離れていて、ついていけるか\n  - 時短で周りに迷惑をかけないか\n  - 子どもの急な発熱で休むときの罪悪感\n  - キャリアが停滞しないか\n\nまず不安を整理して、それぞれに対する具体的な備え方を教えてください。\n精神論ではなく、実際にやれることベースで。",
      },
      {
        num: 19,
        title: "PTA文書・学校への連絡文の作成",
        description:
          "PTA役員、学校への欠席連絡、保育園への要望書……。「この文面で失礼じゃないかな」と悩む時間をゼロにできます。",
        prompt:
          "保育園の先生に連絡帳で相談したいことがあります。文面を一緒に考えてください。\n\n相談内容：\n・4歳の子が最近「保育園に行きたくない」と朝泣く\n・お友達とのトラブルがあったらしい（本人の話では「○○くんに叩かれた」）\n・家ではいつも通り元気\n・モンスターペアレントと思われたくないが、状況を知りたい\n\n書いてほしい文面の条件：\n・相手を責める感じではなく、「状況を教えてほしい」というニュアンス\n・感謝の気持ちも伝える\n・連絡帳に手書きで収まる長さ（200字くらい）",
      },
      {
        num: 20,
        title: "家族旅行プランの立案",
        description:
          "「子連れ旅行は準備が大変で……」という声をよく聞きます。行き先選びからタイムスケジュール、持ち物リストまで、AIにまるごとプランニングしてもらいましょう。",
        prompt:
          "家族旅行のプランを考えてください。\n\n家族構成：夫婦＋4歳＋1歳\n日程：GWの2泊3日（5/3〜5/5）\n予算：8万円くらい（交通費・宿泊費込み）\n出発地：東京\n\n条件：\n・1歳がいるのでベビーカー移動可能な場所\n・4歳が楽しめるアクティビティがある\n・授乳室やおむつ替えスペースがある施設\n・移動時間は片道2時間以内\n・大人もリラックスできる温泉があると嬉しい\n\n3つの候補を出して、それぞれ1日ごとのスケジュールと予算内訳も教えてください。子連れならではの注意点やコツも添えて。",
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
    title: "子どもの個人情報は入力しない",
    body: "AIに相談するとき、子どもの名前・学校名・顔写真などの個人情報を入力する必要はありません。「5歳の男の子」「都内の保育園」のように、特定できない範囲の情報で十分な回答が得られます。成績表や通知表の内容もそのまま入力するのは避けましょう。",
  },
  {
    num: 2,
    title: "AIに「依存」せず「活用」する",
    body: "子どもが何でもAIに頼る習慣がつかないよう、「まず自分で考える→つまったらAIにヒントをもらう」の順番を大切にしましょう。AIは「考える力を伸ばす道具」であって、「考えなくて済む道具」ではありません。親がAIと上手に付き合う姿を見せることが、最高のデジタル教育になります。",
  },
  {
    num: 3,
    title: "年齢に応じた関わり方を意識する",
    body: "未就学児：保護者が操作し、結果を一緒に楽しむ。小学校低学年：保護者と一緒にAIに質問し、回答を一緒に読む。小学校高学年以降：使い方のルール（利用時間、入力していいことの範囲）を決めた上で、徐々に自分で使わせる。いずれの年齢でも「AIの回答が間違っていることもある」と伝えることが大切です。",
  },
  {
    num: 4,
    title: "医療・健康の判断は必ず専門家に",
    body: "子どもの体調不良についてAIに相談することは、受診前の情報整理には役立ちます。ただし、AIは医療行為はできません。「発熱が続く」「嘔吐が止まらない」などの症状は、AIに相談する前にかかりつけ医や#8000（小児救急電話相談）に連絡してください。",
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
        <p className="text-xs font-semibold text-gray-500">{title}</p>
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

export default function AiParentingGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI×子育て・育児活用ガイド" },
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
                title="AI×子育て・育児活用ガイド｜忙しいパパ・ママのためのChatGPT実践術20選【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            AI×子育て・育児活用ガイド｜忙しいパパ・ママのためのChatGPT実践術20選
          </h1>
          <p
            className="mt-2 text-lg text-gray-600"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            朝の時短・子どもの学び・家事・親のケア——無料で今日から使える
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            朝6時。アラームが鳴る前に子どもの泣き声で目が覚める。
            朝ごはんを作りながらお弁当の準備、着替えを嫌がる子をなだめて、連絡帳に記入して、洗濯機を回して——
            <strong>気がつけば自分の朝食を食べる時間がない。</strong>
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            子育ては楽しいけれど、「毎日がバタバタすぎて、考える余裕がない」というのが本音ではありませんか？
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、そんな忙しいパパ・ママに向けて、
            <strong>AIを「もう一人の育児パートナー」として活用する20の実践術</strong>を
            そのまま使えるプロンプト例つきで紹介します。
            完璧じゃなくていい。AIをちょっと使うだけで、
            <strong>毎日の「考える・調べる・悩む」時間がグッと減ります。</strong>
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
              献立提案、お弁当アイデア、服装選び——<strong>朝のバタバタ時間をAIで15分短縮</strong>
            </li>
            <li className="pl-1 marker:text-gray-500">
              宿題のヒント出し、自由研究、読書感想文——<strong>答えを教えず考える力を伸ばす</strong>
            </li>
            <li className="pl-1 marker:text-gray-500">
              買い物最適化、家計分析、家電トラブル——<strong>名もなき家事の「調べる時間」をゼロに</strong>
            </li>
            <li className="pl-1 marker:text-gray-500">
              育児の悩み相談、復職準備、PTA文書——<strong>親自身のストレスケアにもAIが寄り添う</strong>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>すべてChatGPT・Claude・Geminiの無料プランで今日から使える</strong>
            </li>
          </ul>
        </motion.section>

        {/* ────────── なぜ子育て×AIが注目されるのか ────────── */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            id="why-ai-parenting"
            className="scroll-mt-28 text-2xl font-bold text-gray-900"
          >
            なぜ今「子育て×AI」が注目されるのか
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2026年現在、共働き世帯は日本の子育て世帯の約7割を占めています。
            夫婦ともに働きながら子育てをする——その大変さは年々増しています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            一方で、ChatGPTをはじめとするAIツールは、2025年後半から
            <strong>無料プランでも驚くほど高機能</strong>になりました。
            難しい設定は不要、スマホに話しかけるだけ。
            この「手軽さ」が、忙しい子育て世代とAIの相性を最高にしています。
          </p>
          <div className="mt-6 space-y-3">
            {[
              "共働き世帯の増加：夫婦で分担しても「考える家事」は増え続ける",
              "AI無料プランの進化：ChatGPT・Claude・Geminiが無料で高機能に",
              "スマホ音声入力の普及：料理中も子どもの世話中もハンズフリーで相談できる",
              "教育現場のAI導入：学校でのプログラミング教育拡充に伴い、家庭でのAI活用も重要に",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <span className="mt-0.5 text-lg">
                  {["📊", "🤖", "📱", "🎓"][i]}
                </span>
                <p className="text-sm leading-7 text-gray-700">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIは子育てを「代わりにやってくれる」のではなく、
            <strong>「考える・調べる・悩む」時間を大幅に減らしてくれる</strong>存在です。
            その分だけ、子どもと向き合う時間が増える。
            それが「子育て×AI」の本当の価値です。
          </p>
          <p className="mt-3 text-xs text-gray-500">
            ※ 2026年2月時点の情報です。ChatGPT（GPT-5.2が5時間10回まで→GPT-5 miniで継続利用可）、Claude（Sonnet 4.6）、Gemini（3 Flashが回数無制限）はすべて無料で使えます。
          </p>
        </motion.section>

        {/* ────────── カテゴリ 1〜4 ────────── */}
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

            {/* カテゴリ2（学び）の後にCTA */}
            {catIndex === 1 && (
              <motion.section
                className="mt-14"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={sectionReveal}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <MidArticleCtaBox slug="ai-parenting-guide" />
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
            AI×子育てで気をつけること
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIは頼れるパートナーですが、万能ではありません。
            子どもに関わる使い方だからこそ、この4つのポイントは必ず押さえておきましょう。
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
            まとめ：完璧じゃなくていい。AIで「余白」を作ろう
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            20の実践術を紹介しましたが、全部やる必要はまったくありません。
            <strong>今日、この中から1つだけ試してみてください。</strong>
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            おすすめは、<strong>「今日の夕飯の献立を考えて。4人家族で、子どもの好き嫌いも考慮して」</strong>
            ——この一言からスタートすること。
            献立に悩む15分がなくなるだけで、その15分を子どもと遊ぶ時間に使えます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            子育てに「正解」はありません。でも、AIという相棒がいれば、
            「考える・調べる・悩む」にかかっていた時間を減らして、
            <strong>子どもと笑い合う時間を増やすことはできます。</strong>
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            完璧な親である必要はない。完璧な食事を作る必要もない。
            あなたがちょっとラクになって、ちょっと笑顔が増えること——
            それが子どもにとって一番うれしいことなんだと思います。
          </p>
          <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm font-semibold text-orange-800">
              今日の夜、ぜひAIに話しかけてみてください。
            </p>
            <p className="mt-2 text-sm leading-7 text-orange-900">
              「明日のお弁当、冷蔵庫にあるもので15分で作れるメニューを教えて」
              ——この一言が、あなたとAIの子育てパートナーシップの第一歩になります。
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
                href="/academy/blog/ai-daily-life-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIで暮らしが変わる｜日常生活×生成AI活用術20選【2026年版】
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-start-guide-smartphone"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTの始め方｜スマホで3分で使えるようになる完全ガイド
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
                href="/academy/blog/ai-english-learning-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI×英語学習の完全ガイド｜ChatGPTで英会話力を伸ばす方法
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
                href="/academy/blog/chatgpt-prompt-templates-50"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                すぐ使える！ChatGPTプロンプトテンプレート50選
              </Link>
            </li>
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
