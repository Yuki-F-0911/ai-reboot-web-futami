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

const keywordTags = ["ChatGPT プロンプト テンプレート", "ChatGPT 使い方 例文", "AI プロンプト 便利", "ChatGPT 活用 仕事"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "how-to-use", label: "テンプレートの使い方" },
  { id: "cat-work", label: "カテゴリ1：仕事効率化（10選）" },
  { id: "cat-writing", label: "カテゴリ2：文章作成（10選）" },
  { id: "cat-study", label: "カテゴリ3：勉強・学習（10選）" },
  { id: "cat-life", label: "カテゴリ4：日常生活（10選）" },
  { id: "cat-creative", label: "カテゴリ5：クリエイティブ（10選）" },
  { id: "tips", label: "プロンプトをさらに磨く5つのコツ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

type PromptTemplate = {
  title: string;
  prompt: string;
  tip: string;
};

type CategoryData = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  borderColor: string;
  bgColor: string;
  badgeColor: string;
  badgeText: string;
  ngExample: { label: string; prompt: string };
  okExample: { label: string; prompt: string; why: string };
  templates: PromptTemplate[];
};

const categories: CategoryData[] = [
  {
    id: "cat-work",
    name: "仕事効率化",
    emoji: "1",
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-200",
    bgColor: "bg-orange-50",
    badgeColor: "bg-orange-100 text-orange-700",
    badgeText: "border-orange-200 bg-orange-50 text-orange-800",
    ngExample: {
      label: "NG：メール書いて",
      prompt: "取引先にメールを書いて",
    },
    okExample: {
      label: "OK：条件を具体的に指定",
      prompt:
        "{会社名}の{担当者名}様へ、{案件名}の打ち合わせ日程を調整するメールを書いてください。候補日は{日程候補}の3つ。丁寧だけど堅すぎないビジネス敬語で、200文字以内でお願いします。",
      why: "宛先・目的・候補日・トーン・文字数を指定することで、すぐ送れるメールが生成される",
    },
    templates: [
      {
        title: "日程調整メール",
        prompt:
          "{相手の会社名}の{担当者名}様へ、{目的}の日程調整メールを書いてください。候補日は{日程候補3つ}。丁寧だけど堅すぎないトーンで、200文字以内で。",
        tip: "{目的}を「初回商談」「定例MTG」など具体的にするとトーンが自動調整されます",
      },
      {
        title: "議事録の要約",
        prompt:
          "以下の会議メモを議事録として整理してください。フォーマットは「参加者／議題／決定事項／次のアクション（担当・期限つき）」で。\n\n{会議メモをここに貼り付け}",
        tip: "メモは箇条書きでも走り書きでもOK。AIが構造化してくれます",
      },
      {
        title: "企画書アウトライン",
        prompt:
          "{企画テーマ}について企画書のアウトラインを作ってください。背景・目的・ターゲット・施策概要・スケジュール・予算概算・KPIの7項目で構成。想定読者は{決裁者の役職}です。",
        tip: "「想定読者」を指定すると、その人が気にするポイント（ROIなど）が自動で強調されます",
      },
      {
        title: "日報・週報の作成",
        prompt:
          "以下の作業メモから{日報/週報}を作成してください。フォーマットは「本日の成果（3行）／明日の予定（3行）／課題・相談事項（あれば）」で。\n\n{作業メモをここに貼り付け}",
        tip: "毎回同じフォーマットで依頼すると、AIが文体を学習して品質が安定します",
      },
      {
        title: "Excel関数の作成",
        prompt:
          "Excelで{やりたいこと}を実現する関数を教えてください。データの形式は{データの説明}です。関数だけでなく「どのセルにどう入力するか」を手順で示してください。",
        tip: "スクリーンショットの代わりに「A列に名前、B列に売上、C列に日付」のようにデータ構造を説明するだけでOK",
      },
      {
        title: "プレゼン構成案",
        prompt:
          "{テーマ}についてプレゼン資料の構成案を作ってください。スライド{枚数}枚構成、持ち時間{分数}分、聴衆は{対象者}。各スライドのタイトルと要点（2〜3行）を書いてください。",
        tip: "「聴衆は技術に詳しくない経営層」のように指定すると、専門用語が自動で噛み砕かれます",
      },
      {
        title: "タスクの分解・優先順位づけ",
        prompt:
          "以下のタスクを緊急度×重要度のマトリクスで分類し、今日やるべき順に並べてください。各タスクの所要時間の目安もつけてください。\n\n{タスク一覧をここに貼り付け}",
        tip: "「午前中に集中力が必要な仕事を終わらせたい」などの制約を追加するとさらに実用的に",
      },
      {
        title: "報告書のドラフト",
        prompt:
          "{報告テーマ}について{報告先}向けの報告書ドラフトを作ってください。構成は「概要（3行）→ 背景 → 調査・分析結果 → 考察 → 提案（3つ）」で。A4で{枚数}枚程度の分量で。",
        tip: "「数字やデータは[要確認]として空欄にして」と追加すると、ファクトチェックが楽になります",
      },
      {
        title: "交渉・依頼メール",
        prompt:
          "{相手}に{依頼内容}をお願いするメールを書いてください。相手にとってのメリットも1つ含めて。断られた場合の代替案も文末に添えて。トーンは{フォーマル/カジュアル}で。",
        tip: "「相手にとってのメリット」を指定するだけで、一方的なお願いメールにならなくなります",
      },
      {
        title: "フィードバック・レビュー文",
        prompt:
          "以下の{成果物の種類}にフィードバックを書いてください。「良い点3つ → 改善提案2つ → 次のアクション」の構成で、建設的かつ具体的に。相手は{部下/同僚/外部パートナー}です。\n\n{成果物をここに貼り付け}",
        tip: "「相手のモチベーションを下げない書き方で」と追加すると、伝え方がグッと柔らかくなります",
      },
    ],
  },
  {
    id: "cat-writing",
    name: "文章作成",
    emoji: "2",
    color: "from-amber-500 to-yellow-500",
    borderColor: "border-amber-200",
    bgColor: "bg-amber-50",
    badgeColor: "bg-amber-100 text-amber-700",
    badgeText: "border-amber-200 bg-amber-50 text-amber-800",
    ngExample: {
      label: "NG：ブログ記事書いて",
      prompt: "AIについてブログ記事を書いて",
    },
    okExample: {
      label: "OK：読者・構成・トーンを指定",
      prompt:
        "{テーマ}について、{ターゲット読者}向けのブログ記事の構成案を作ってください。見出しは5〜7個、各見出しに要点を2行ずつ。トーンは{友達に教えるような/専門的な}感じで。SEOキーワード「{キーワード}」を自然に含めて。",
      why: "読者・構成・トーン・SEOを指定することで、そのまま執筆に使える構成案が出る",
    },
    templates: [
      {
        title: "ブログ記事の構成案",
        prompt:
          "{テーマ}について{ターゲット読者}向けのブログ記事の構成案を作ってください。見出し5〜7個、各見出しに要点を2〜3行ずつ。トーンは{友達に教えるような/専門的な}で。SEOキーワード「{キーワード}」を含めて。",
        tip: "「読者がこの記事を読んだ後にとる行動」を追加指定すると、結論が明確になります",
      },
      {
        title: "SNS投稿文の作成",
        prompt:
          "{商品・サービス・トピック}について{X(Twitter)/Instagram/LinkedIn}の投稿文を{3}パターン作ってください。{ターゲット層}に刺さる内容で、文字数は{文字数}文字以内。ハッシュタグも{3}個つけて。",
        tip: "「バズるよりも共感を重視」「データを入れて信頼性重視」などトーン指定が効果的",
      },
      {
        title: "キャッチコピー案",
        prompt:
          "{商品名}の{ターゲット層}向けキャッチコピーを{10}案出してください。商品の特徴は{特徴}。「機能訴求型」「感情訴求型」「問いかけ型」を混ぜて。各案に狙いを1行で添えて。",
        tip: "「既存の競合コピーは〇〇なので、差別化したい」と追加すると独自性が上がります",
      },
      {
        title: "レビュー・感想文",
        prompt:
          "{商品名/サービス名/書籍名}のレビューを書いてください。構成は「結論 → 良かった点3つ → 気になった点1つ → こんな人におすすめ」で。{自分の立場}の視点で、{文字数}文字程度。",
        tip: "「買おうか迷っている人が読む想定で」と追加すると、実用的なレビューになります",
      },
      {
        title: "自己紹介文",
        prompt:
          "{場面}で使う自己紹介文を作ってください。職業は{職業}、アピールポイントは{強み・実績}。{フォーマル/カジュアル}なトーンで、{文字数}文字以内。相手に「もっと話を聞きたい」と思わせる終わり方にして。",
        tip: "{場面}を「転職面接」「異業種交流会」「社内Slack」などに変えるだけで最適な文体になります",
      },
      {
        title: "お礼メール",
        prompt:
          "{場面}のお礼メールを書いてください。相手は{相手の情報}。具体的に感謝したい点は{感謝ポイント}。今後につながる一言も入れて。{フォーマル/カジュアル}で{200}文字以内。",
        tip: "「当日の会話で印象的だった一言を引用して」と追加すると特別感が出ます",
      },
      {
        title: "謝罪・お詫び文",
        prompt:
          "{状況}についてお詫びの文章を書いてください。原因の説明 → 対応策 → 再発防止策の構成で。言い訳がましくならず、誠意が伝わるトーンで。相手は{相手}、{メール/チャット/手紙}形式で。",
        tip: "「過度にへりくだりすぎない」と追加すると、媚びない誠実な文面になります",
      },
      {
        title: "推薦文・紹介文",
        prompt:
          "{対象者}の{目的}向け推薦文を書いてください。{対象者}の強みは{具体的な実績・特徴}。推薦者の立場は{あなたの立場}。{300}文字程度で、客観性と熱意のバランスを取って。",
        tip: "「具体的なエピソードを1つ入れて」と追加すると説得力が格段に上がります",
      },
      {
        title: "商品説明文",
        prompt:
          "{商品名}の商品説明文を書いてください。ターゲットは{ターゲット}、主な特徴は{特徴3つ}。「課題 → 解決策 → ベネフィット → 行動喚起」の構成で。{ECサイト/LP/カタログ}向け、{文字数}文字程度。",
        tip: "「スペックではなくベネフィット（使うとどう嬉しいか）中心で」と追加すると購買意欲に刺さります",
      },
      {
        title: "スピーチ・挨拶原稿",
        prompt:
          "{場面}でのスピーチ原稿を作ってください。持ち時間は{分数}分（{文字数}文字目安）。聴衆は{聴衆}。つかみ → 本題 → 締めの構成で。{ユーモアを交えた/格調高い/親しみやすい}トーンで。",
        tip: "「冒頭で聴衆の共感を得る問いかけを入れて」と追加すると注目を集めやすくなります",
      },
    ],
  },
  {
    id: "cat-study",
    name: "勉強・学習",
    emoji: "3",
    color: "from-yellow-500 to-orange-400",
    borderColor: "border-yellow-200",
    bgColor: "bg-yellow-50",
    badgeColor: "bg-yellow-100 text-yellow-700",
    badgeText: "border-yellow-200 bg-yellow-50 text-yellow-800",
    ngExample: {
      label: "NG：〇〇について教えて",
      prompt: "量子コンピュータについて教えて",
    },
    okExample: {
      label: "OK：レベル・形式・例を指定",
      prompt:
        "{概念}について、{小学6年生/大学1年生/専門外の社会人}にもわかるように説明してください。身近な例え話を使い、専門用語には必ず（）で簡単な説明をつけて。300文字以内で。",
      why: "理解レベル・説明形式・文字数を指定することで、自分に合った解説が得られる",
    },
    templates: [
      {
        title: "概念をわかりやすく説明",
        prompt:
          "{概念・用語}について、{理解レベル}にもわかるように説明してください。身近な例え話を1つ使い、専門用語には（）で説明をつけて。{300}文字以内で。",
        tip: "{理解レベル}を「小学生」「文系大学生」「IT企業の非エンジニア」など具体的にすると精度UP",
      },
      {
        title: "練習問題の作成",
        prompt:
          "{科目・トピック}の練習問題を{5}問作ってください。難易度は{初級/中級/上級}。各問題に解答と解説（なぜその答えになるか）もつけて。出題形式は{選択式/記述式/穴埋め}で。",
        tip: "「間違えやすいポイントを重点的に出題して」と追加すると弱点克服に効果的",
      },
      {
        title: "暗記カード（フラッシュカード）",
        prompt:
          "{科目・テーマ}の重要用語を{20}個、暗記カード形式で作ってください。「表：用語」「裏：定義（30文字以内）＋覚え方のコツ」のペアで。重要度順に並べて。",
        tip: "「語呂合わせやイメージで覚えやすい工夫を入れて」と追加すると記憶に残りやすくなります",
      },
      {
        title: "長文の要約",
        prompt:
          "以下の文章を{3}つのポイントに要約してください。各ポイントは2行以内で。最後に「この文章の結論を一言で言うと」を1行で追加して。\n\n{テキストをここに貼り付け}",
        tip: "「要約後に、理解度チェックの質問を2つ出して」と追加すると学習効果が倍増します",
      },
      {
        title: "英語学習（添削・表現）",
        prompt:
          "以下の英文を添削してください。文法ミスを修正し、より自然な表現に書き換えて。変更箇所ごとに「変更前 → 変更後」と理由を示して。レベルは{TOEIC 600/ビジネス英語/日常会話}想定で。\n\n{英文をここに貼り付け}",
        tip: "「この表現のフォーマル度を5段階で教えて」と追加すると、場面に合った使い分けが学べます",
      },
      {
        title: "試験対策・出題予想",
        prompt:
          "{試験名}の{科目・分野}で出題されやすいテーマを{5}つ挙げてください。各テーマについて「過去の出題傾向」「押さえるべきポイント」「1分で復習できるまとめ」を書いて。",
        tip: "「残り{日数}日で優先的に勉強すべき順番もつけて」と追加すると学習計画になります",
      },
      {
        title: "レポート・論文の構成",
        prompt:
          "{テーマ}についてレポートの構成案を作ってください。「序論 → 本論（3章構成）→ 結論 → 参考文献の探し方のヒント」で。各章に書くべき内容を3行ずつ。字数は{文字数}文字想定。",
        tip: "「教授が評価するポイントは〇〇」と追加すると、評価基準に合わせた構成になります",
      },
      {
        title: "調査リサーチの整理",
        prompt:
          "{テーマ}について調査した以下の情報を整理してください。「主張→根拠→出典」の形式で、賛成派・反対派・中立の3つの立場に分類して。矛盾する情報があれば指摘して。\n\n{調査メモをここに貼り付け}",
        tip: "「この分野で信頼性の高い情報源も3つ教えて」と追加すると、さらに深い調査ができます",
      },
      {
        title: "2つの概念の比較分析",
        prompt:
          "{概念A}と{概念B}を比較してください。「共通点3つ → 相違点5つ → それぞれが適している場面」の構成で。表形式でまとめた後、初心者向けに「結局どっちを選ぶべきか」を1行で。",
        tip: "「自分は{状況}なのですが、どちらが向いていますか？」と追加するとパーソナライズされた回答に",
      },
      {
        title: "学習計画の作成",
        prompt:
          "{目標}を{期間}で達成するための学習計画を作ってください。現在のレベルは{現在のレベル}。週{時間}時間使えます。週ごとのマイルストーンと、毎日の具体的なアクション、おすすめの教材も含めて。",
        tip: "「挫折しやすいポイントと対策も入れて」と追加すると、現実的で続けやすい計画になります",
      },
    ],
  },
  {
    id: "cat-life",
    name: "日常生活",
    emoji: "4",
    color: "from-orange-400 to-red-400",
    borderColor: "border-orange-200",
    bgColor: "bg-orange-50/70",
    badgeColor: "bg-red-100 text-red-700",
    badgeText: "border-red-200 bg-red-50 text-red-800",
    ngExample: {
      label: "NG：献立考えて",
      prompt: "今週の献立を考えて",
    },
    okExample: {
      label: "OK：条件・制約を具体的に",
      prompt:
        "{人数}人家族の1週間の夕食献立を考えてください。条件：予算は1食{金額}円以内、調理時間{分数}分以内、{アレルギー・苦手なもの}は除外。買い物リストも曜日ごとにまとめて。",
      why: "人数・予算・時間・制約を指定すると、そのまま使える実用的な献立が出る",
    },
    templates: [
      {
        title: "レシピ提案（条件つき）",
        prompt:
          "{冷蔵庫にある食材}を使って{人数}人分の{和食/洋食/中華}レシピを{3}つ提案してください。調理時間{分数}分以内、カロリーは{目安}kcal程度。手順は5ステップ以内でシンプルに。",
        tip: "「料理初心者でも失敗しないコツも各レシピに1つ入れて」と追加すると安心",
      },
      {
        title: "旅行プランの作成",
        prompt:
          "{目的地}への{日数}泊{日数+1}日の旅行プランを作ってください。予算は{予算}円、メンバーは{メンバー構成}。移動手段・観光スポット・食事・宿泊の提案をタイムテーブル形式で。{のんびり/アクティブ}志向で。",
        tip: "「雨天時の代替プランもDay1分だけ作って」と追加すると実用度が上がります",
      },
      {
        title: "家計の見直し相談",
        prompt:
          "以下の月の支出内訳を見て、節約できそうなポイントを{3}つ教えてください。各ポイントに「節約額の目安」と「具体的な行動」を添えて。生活の質はなるべく下げない方針で。\n\n{支出内訳をここに貼り付け}",
        tip: "「固定費の見直しを優先して」と追加すると、効果が大きい順に提案されます",
      },
      {
        title: "買い物の比較検討",
        prompt:
          "{商品カテゴリ}の購入を検討しています。{候補A}と{候補B}と{候補C}を比較してください。比較軸は「価格・性能・口コミ評価・こんな人向き」で表にまとめて。予算は{予算}円、用途は{用途}です。",
        tip: "「〇〇を最優先する場合のおすすめと理由を1行で」と追加すると意思決定が楽に",
      },
      {
        title: "健康・運動の相談",
        prompt:
          "{目標}を達成するための{期間}のプランを提案してください。現状は{現在の状態}、週に使える時間は{時間}時間、{制約条件}あり。食事・運動・生活習慣の3つの観点からアドバイスして。\n\n※医療的なアドバイスではなく一般的な健康情報として教えてください。",
        tip: "「初日から始められる最も簡単なアクションを1つだけ教えて」と追加すると行動に移しやすい",
      },
      {
        title: "引っ越し準備チェックリスト",
        prompt:
          "{現住所の種類}から{新居の種類}へ、{時期}に引っ越します。{家族構成}です。やることを時系列（{2か月前/1か月前/2週間前/1週間前/当日/翌日以降}）で整理したチェックリストを作ってください。",
        tip: "「手続き関連（転出届・ライフラインなど）を特に詳しく」と追加すると漏れを防げます",
      },
      {
        title: "プレゼント選び",
        prompt:
          "{相手の属性}（{年齢}歳、{趣味・好み}）へのプレゼントを{5}案提案してください。予算は{金額}円、シーンは{誕生日/クリスマス/お礼}。各案に「喜ばれるポイント」と「購入できる場所」を1行ずつ添えて。",
        tip: "「{相手}が絶対持っていなさそうなもの」と追加するとサプライズ感が増します",
      },
      {
        title: "イベント企画",
        prompt:
          "{イベント名}を企画しています。参加者{人数}人、予算{金額}円、場所は{場所の条件}。タイムスケジュール・必要な準備物・役割分担・盛り上げる工夫を含めた企画書を作ってください。",
        tip: "「参加者の年齢層は{年齢層}」と追加すると、世代に合った企画内容になります",
      },
      {
        title: "断捨離・片付け計画",
        prompt:
          "{部屋/場所}の断捨離計画を作ってください。{週末2日間/1週間}で完了する想定。「エリアごとの優先順位 → 捨てる基準 → 残すものの収納方法」の構成で。{ミニマリスト志向/適度にモノがある暮らし}で。",
        tip: "「判断に迷ったときの3秒ルール」など判断基準を追加するとサクサク進みます",
      },
      {
        title: "DIY・修理の手順",
        prompt:
          "{やりたいDIY/修理内容}の手順を教えてください。DIY経験は{初心者/中級者}レベルです。必要な道具・材料・手順（写真がなくてもわかるくらい詳しく）・所要時間・失敗しやすいポイントと対策を含めて。",
        tip: "「100均で代用できる道具があれば教えて」と追加するとコストを抑えられます",
      },
    ],
  },
  {
    id: "cat-creative",
    name: "クリエイティブ",
    emoji: "5",
    color: "from-red-400 to-orange-500",
    borderColor: "border-red-200",
    bgColor: "bg-red-50/60",
    badgeColor: "bg-red-100 text-red-700",
    badgeText: "border-red-200 bg-red-50 text-red-800",
    ngExample: {
      label: "NG：物語を書いて",
      prompt: "面白い物語を書いて",
    },
    okExample: {
      label: "OK：ジャンル・設定・制約を指定",
      prompt:
        "{ジャンル}の短編小説のプロットを作ってください。主人公は{主人公の設定}、舞台は{舞台}。「日常 → 事件 → 葛藤 → 転機 → 結末」の5幕構成で。読後感は{爽快/切ない/考えさせられる}。",
      why: "ジャンル・キャラ・構成・読後感を指定すると、完成度の高いプロットが得られる",
    },
    templates: [
      {
        title: "物語・小説のプロット",
        prompt:
          "{ジャンル}の短編小説のプロットを作ってください。主人公は{設定}、舞台は{舞台}、テーマは{テーマ}。「日常 → 事件 → 葛藤 → 転機 → 結末」の5幕構成で。読後感は{爽快/切ない/考えさせられる}。",
        tip: "「意外なオチ」「伏線を1つ入れて」と追加すると物語に深みが出ます",
      },
      {
        title: "ネーミング・名前のアイデア",
        prompt:
          "{対象}の名前を{10}案考えてください。コンセプトは{コンセプト}、ターゲットは{ターゲット}。「日本語」「英語」「造語」のバリエーションを混ぜて。各案に込めた意味も1行で。",
        tip: "「既に使われていないか確認するためのGoogle検索ワード」も追加で聞くと実用的",
      },
      {
        title: "デザインアイデア・コンセプト",
        prompt:
          "{デザイン対象}のデザインアイデアを{5}案出してください。ターゲットユーザーは{ターゲット}、伝えたいイメージは{印象}。各案にカラーパレット（メイン色＋アクセント色）、フォントの雰囲気、レイアウトの特徴を含めて。",
        tip: "「参考にしたいブランドは{ブランド名}の雰囲気」と追加すると方向性が定まります",
      },
      {
        title: "動画・コンテンツの構成",
        prompt:
          "{テーマ}のYouTube動画の構成案を作ってください。尺は{分数}分、ターゲットは{視聴者層}。「フック（冒頭15秒）→ 導入 → 本編{セクション数}パート → まとめ → CTA」の構成で。各パートのセリフ例も簡単に。",
        tip: "「冒頭で視聴者の離脱を防ぐフックを3パターン」と追加すると再生維持率UPに",
      },
      {
        title: "歌詞・ポエムの作成",
        prompt:
          "{テーマ}をテーマにした歌詞を書いてください。ジャンルは{ポップ/ロック/バラード}、曲の雰囲気は{明るい/切ない/力強い}。Aメロ・Bメロ・サビの構成で。韻を踏む箇所を{多め/少なめ}に。",
        tip: "「サビの1行目は{フレーズ}で始めて」と指定すると、イメージ通りの歌詞に近づきます",
      },
      {
        title: "ゲーム・企画のアイデア",
        prompt:
          "{ジャンル}のゲームアイデアを{3}つ提案してください。プラットフォームは{スマホ/PC/ボードゲーム}、ターゲットは{ターゲット}。各案に「コンセプト（1行）→ 基本ルール → ユニークな仕組み → 面白さのポイント」を含めて。",
        tip: "「既存のヒット作{タイトル名}とは違う切り口で」と追加すると独自性が出ます",
      },
      {
        title: "写真・撮影のアイデア",
        prompt:
          "{被写体}を{場所/シーン}で魅力的に撮影するアイデアを{5}つ提案してください。使用機材は{カメラ/スマホ}。各アイデアに「構図のポイント」「おすすめの時間帯・光の使い方」「編集のコツ」を1行ずつ。",
        tip: "「SNS映えするアングル」と追加するとインスタ向け、「自然な雰囲気」と追加するとナチュラルフォトに",
      },
      {
        title: "インテリア・部屋づくり提案",
        prompt:
          "{部屋の広さ}の{部屋タイプ}のインテリアコーディネートを提案してください。テイストは{北欧/和モダン/インダストリアル}、予算は{金額}円。カラースキーム・おすすめ家具{3}点・レイアウトのポイントを含めて。",
        tip: "「今持っている家具は{リスト}」と追加すると、既存の家具を活かした提案になります",
      },
      {
        title: "ロゴ・ブランドコンセプト",
        prompt:
          "{ブランド名}のロゴコンセプトを{5}案考えてください。業種は{業種}、ブランドの価値観は{価値観}、ターゲットは{ターゲット}。各案に「ビジュアルイメージの説明」「カラー提案」「タグラインのアイデア」を含めて。",
        tip: "AIは画像生成できないツールもあるため「デザイナーへの指示書として使える詳しさで」と追加",
      },
      {
        title: "料理アレンジ・創作レシピ",
        prompt:
          "{定番料理}を{テーマ}でアレンジしたレシピを{3}つ考えてください。「何を変えるか → 材料 → 手順 → 味のイメージ」の構成で。難易度は{簡単/中級/チャレンジ}。家にある調味料で作れる範囲で。",
        tip: "「SNSに載せたくなる盛り付けのコツも1行で」と追加すると見た目もレベルアップ",
      },
    ],
  },
];

const proTips = [
  {
    title: "役割を与える",
    body: "「あなたはマーケティングの専門家です」「あなたは優しい家庭教師です」のように役割を指定すると、回答の専門性やトーンが変わります。",
    example: "あなたは10年経験のあるコピーライターです。以下の商品のキャッチコピーを...",
  },
  {
    title: "出力形式を指定する",
    body: "「表形式で」「箇条書きで」「ステップバイステップで」など、出力形式を明示すると整理された回答が返ってきます。",
    example: "以下の情報を「項目｜内容｜補足」の3列の表にまとめてください",
  },
  {
    title: "制約条件を入れる",
    body: "「300文字以内で」「専門用語を使わずに」「3つに絞って」など制約をつけると、焦点の定まった回答が得られます。",
    example: "中学生にもわかる言葉で、200文字以内で説明してください",
  },
  {
    title: "良い例・悪い例を示す",
    body: "「こういう文章が好き：{例文}」「こういうトーンは避けて：{例文}」のように例を示すと、好みに合った回答に近づきます。",
    example: "好きなトーン例：「忙しい朝でも3分でできる」 / 避けたいトーン：「画期的なソリューションを...」",
  },
  {
    title: "段階的に依頼する",
    body: "一度に全部頼むより、「まず構成案 → 次に各章の詳細 → 最後に推敲」のように段階を分けると品質が上がります。",
    example: "まずはアウトラインだけ出してください。内容はそのあと一緒に詰めましょう。",
  },
] as const;

function PromptCard({ template, index, category }: { template: PromptTemplate; index: number; category: CategoryData }) {
  return (
    <div className={`rounded-xl border ${category.borderColor} bg-white p-5 transition-shadow hover:shadow-md`}>
      <div className="flex items-start gap-3">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${category.badgeColor}`}
        >
          {index + 1}
        </span>
        <h4 className="text-base font-bold text-gray-900">{template.title}</h4>
      </div>
      <div className="mt-3 rounded-lg bg-gray-50 p-4">
        <p className="whitespace-pre-line font-mono text-sm leading-7 text-gray-800">{template.prompt}</p>
      </div>
      <p className="mt-3 text-xs leading-6 text-gray-500">
        <span className="font-semibold text-gray-600">Tip：</span>
        {template.tip}
      </p>
    </div>
  );
}

function NgOkComparison({ category }: { category: CategoryData }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border-2 border-red-200 bg-red-50/60 p-5">
        <p className="text-xs font-bold text-red-600">{category.ngExample.label}</p>
        <p className="mt-2 font-mono text-sm leading-7 text-red-800">{category.ngExample.prompt}</p>
        <p className="mt-2 text-xs text-red-500">→ 曖昧すぎて、AIが何を書けばいいか判断できない</p>
      </div>
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/60 p-5">
        <p className="text-xs font-bold text-emerald-600">{category.okExample.label}</p>
        <p className="mt-2 font-mono text-sm leading-7 text-emerald-800">{category.okExample.prompt}</p>
        <p className="mt-2 text-xs text-emerald-600">→ {category.okExample.why}</p>
      </div>
    </div>
  );
}

function CategorySection({ category, children }: { category: CategoryData; children?: React.ReactNode }) {
  return (
    <motion.section
      className="mt-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-lg font-bold text-white`}>
          {category.emoji}
        </div>
        <h2 id={category.id} className="scroll-mt-28 text-2xl font-bold text-gray-900">
          {category.name}のプロンプトテンプレート（10選）
        </h2>
      </div>

      <NgOkComparison category={category} />

      <div className="mt-8 space-y-4">
        {category.templates.map((template, i) => (
          <PromptCard key={template.title} template={template} index={i} category={category} />
        ))}
      </div>

      {children}
    </motion.section>
  );
}

export default function ChatgptPromptTemplates50Page({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTプロンプトテンプレート50選" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="ChatGPTプロンプトテンプレート50選"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            すぐ使える！ChatGPTプロンプトテンプレート50選
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            仕事・勉強・日常のAI活用集【2026年版】
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTを使ってみたけど、何を聞けばいいかわからない」「いつも同じ質問ばかりしてしまう」——そんな悩みをお持ちではありませんか？
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            実は、AIから良い回答を引き出すカギは<strong>「プロンプト（指示文）の書き方」</strong>にあります。
            同じAIでも、聞き方を変えるだけで回答の質がまったく違ってきます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、<strong>コピペしてそのまま使えるプロンプトテンプレートを50個</strong>、5つのカテゴリに分けて紹介します。
            すべてのテンプレートはChatGPT・Claude・Geminiのどれでも使えます。
            {"{"}...{"}"}の部分をあなたの状況に合わせて書き換えるだけで、すぐに実践できます。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT実践テクニック
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-voice-mode-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT音声モード活用ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-english-learning-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI英語学習ガイド
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
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
            <li className="pl-1 marker:text-gray-500">
              AIに「〇〇について教えて」は<strong>NG</strong>。「誰向けに・何を・どんな形式で」を指定するだけで回答の質が劇的に上がる
            </li>
            <li className="pl-1 marker:text-gray-500">
              50個のテンプレートは仕事効率化・文章作成・勉強・日常生活・クリエイティブの5カテゴリに分類
            </li>
            <li className="pl-1 marker:text-gray-500">
              すべて{"{"}...{"}"}で置換箇所を明示。コピペして書き換えるだけで即使える
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPT・Claude・Geminiの3ツールすべてで動作確認済み
            </li>
            <li className="pl-1 marker:text-gray-500">
              まずは自分の「毎週やっている面倒な作業」に近いテンプレートから1つ試すのがおすすめ
            </li>
          </ul>
        </motion.section>

        {/* テンプレートの使い方 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="how-to-use" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            テンプレートの使い方（3ステップ）
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                step: "1",
                title: "テンプレートをコピー",
                body: "気になるテンプレートをそのままコピーします。プロンプト欄のテキストは全文コピー可能です。",
              },
              {
                step: "2",
                title: "{...}を自分の情報に書き換え",
                body: "{商品名}や{ターゲット層}などの部分を、あなたの状況に合った具体的な言葉に置き換えてください。具体的に書くほど良い回答が返ってきます。",
              },
              {
                step: "3",
                title: "AIに送信して、追加指示で磨く",
                body: "ChatGPT・Claude・Geminiのいずれかに貼り付けて送信。最初の回答が完璧でなくても「もう少し○○して」と追加指示を出せば、回答がどんどん良くなります。",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500">
                  <span className="text-sm font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">対応ツール</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              すべてのテンプレートは<strong>ChatGPT（無料プラン含む）・Claude・Gemini</strong>で使えます。
              ツールによって回答のニュアンスが異なるので、同じテンプレートを複数ツールに投げて比較するのもおすすめです。
            </p>
          </div>
        </motion.section>

        {/* カテゴリ1：仕事効率化 */}
        <CategorySection category={categories[0]} />

        {/* カテゴリ2：文章作成 */}
        <CategorySection category={categories[1]} />

        {/* CTA：カテゴリ2と3の間 */}
        <motion.div
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="chatgpt-prompt-templates-50" />
        </motion.div>

        {/* カテゴリ3：勉強・学習 */}
        <CategorySection category={categories[2]} />

        {/* カテゴリ4：日常生活 */}
        <CategorySection category={categories[3]} />

        {/* カテゴリ5：クリエイティブ */}
        <CategorySection category={categories[4]} />

        {/* プロンプトをさらに磨く5つのコツ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="tips" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プロンプトをさらに磨く5つのコツ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            テンプレートをそのまま使うだけでも十分ですが、以下の5つのコツを知っておくと、
            自分でオリジナルのプロンプトを作れるようになります。
          </p>
          <div className="mt-6 space-y-4">
            {proTips.map((tip, i) => (
              <div key={tip.title} className="rounded-xl border-2 border-will-primary/15 bg-white p-6">
                <div className="flex items-start gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                    <p className="mt-2 text-sm leading-8 text-gray-700">{tip.body}</p>
                    <div className="mt-3 rounded-lg bg-gray-50 p-3">
                      <p className="text-xs font-semibold text-gray-500">例</p>
                      <p className="mt-1 font-mono text-sm leading-7 text-gray-700">{tip.example}</p>
                    </div>
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
          className="mt-14 rounded-lg border border-gray-200 bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：「何を聞けばいいかわからない」はもう終わり
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事では、コピペで使えるプロンプトテンプレートを50個紹介しました。
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-5">
            {[
              { name: "仕事効率化", count: "10", color: "bg-orange-100 text-orange-700" },
              { name: "文章作成", count: "10", color: "bg-amber-100 text-amber-700" },
              { name: "勉強・学習", count: "10", color: "bg-yellow-100 text-yellow-700" },
              { name: "日常生活", count: "10", color: "bg-red-100 text-red-700" },
              { name: "クリエイティブ", count: "10", color: "bg-red-100 text-red-700" },
            ].map((cat) => (
              <div key={cat.name} className={`rounded-lg ${cat.color} p-3 text-center`}>
                <p className="text-lg font-bold">{cat.count}個</p>
                <p className="text-xs font-semibold">{cat.name}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            大切なのは、<strong>50個すべてを使いこなす必要はない</strong>ということです。
            まずは1つ、自分の「毎週やっている面倒な作業」に近いテンプレートを試してみてください。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「こんなに楽になるんだ」という体験をすると、自然と「次はこれにも使ってみよう」とAI活用の幅が広がっていきます。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            今日から1つ、コピペして試してみましょう。あなたのAI活用が、ここから始まります。
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
          <LineCtaBox />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを「使えるようになった人」がやっていた5つのこと
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級テクニック｜仕事の質を上げる使い方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを仕事で使い始めた人の「最初の30日」完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                プログラミング未経験でも安心！AIコーディング入門
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-voice-mode-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT音声モード活用ガイド｜話して使う実践ワークフロー
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-english-learning-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI英語学習ガイド｜スピーキング練習と添削の回し方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIのハルシネーション対策ガイド｜回答検証の手順
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-beginners-guide-over-50" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                50代からのAI初心者ガイド｜スマホで続ける学習法
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
