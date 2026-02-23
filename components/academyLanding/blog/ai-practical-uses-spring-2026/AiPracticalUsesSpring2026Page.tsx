"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ } from "@/components/blog/ArticleBody";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiPracticalUsesSpring2026PageProps = {
  faqItems: readonly FAQItem[];
};

type UseCase = {
  id: string;
  number: number;
  title: string;
  scene: string;
  description: string;
  prompt: string;
  tools: string;
  caution: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI 使い方 仕事", "ChatGPT 活用法 初心者", "AI 業務効率化 例", "生成AI 活用術 2026"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "business", label: "仕事・ビジネス系（5選）" },
  { id: "learning", label: "学習・情報収集系（4選）" },
  { id: "daily", label: "日常生活系（3選）" },
  { id: "creative", label: "創作・趣味系（3選）" },
  { id: "summary", label: "まとめ：1つずつ試すだけでいい" },
  { id: "faq", label: "よくある質問" },
] as const;

const businessUseCases: readonly UseCase[] = [
  {
    id: "email-reply",
    number: 1,
    title: "ビジネスメールの返信を3分で作成",
    scene: "「急ぎで返信しなきゃいけないけど、文面が思い浮かばない」という場面",
    description:
      "受け取ったメールの状況をAIに説明するだけで、返信文の初稿を数秒で生成できます。社内メール・顧客メール・クレーム対応など、場面を指定するほど品質が上がります。最終的な送信前は必ず人の目で確認することが前提ですが、「0→1の下書き」にかかる時間を大幅に削減できます。長年のビジネスマナーが詰まった文面を、状況に合わせて引き出せるのが最大の強みです。",
    prompt:
      "あなたは丁寧なビジネスメールを書くアシスタントです。\n以下の状況で返信メールを作成してください。\n\n【状況】\n送信者: 取引先の田中様\n内容: 先日の打ち合わせのお礼と、次回の日程調整の依頼\n\n【私の返信意図】\n・お礼を伝える\n・来週の候補日を3つ提示する（月・水・金の午後）\n・件名も作成してください\n\n出力: 件名→本文（300字程度、丁寧語）",
    tools: "ChatGPT / Claude / Gemini どれでも使えます",
    caution:
      "会社名・個人名・機密情報は入力しないこと。「株式会社◯◯の田中様」ではなく「取引先の田中様」のように抽象化してから使いましょう。",
  },
  {
    id: "meeting-minutes",
    number: 2,
    title: "会議の議事録を音声テキストから5分で整形",
    scene: "「会議後に議事録を書く時間がない」「音声をテキスト化したけど整理できていない」という場面",
    description:
      "スマートフォンのボイスメモやMicrosoftの自動文字起こし機能で録音した会議内容を、AIに貼り付けるだけで「決定事項・未決事項・次アクション」に整理してくれます。長い会議でも要点を抽出して構造化するため、後で見返したときに情報が探しやすくなります。Zoom・Teams・Google Meetの自動文字起こし機能と組み合わせると、さらに効率が上がります。",
    prompt:
      "次の会議の音声テキストを議事録に整理してください。\n\n【会議テキスト（ここに音声テキストを貼り付け）】\n\n【出力形式】\n■ 決定事項（箇条書き）\n■ 未決事項・検討中（箇条書き）\n■ 次アクション（担当者・期限・内容の形式）\n■ 補足・背景情報\n\n事実のみ書いてください。推測や補足は「★確認」と明記してください。",
    tools: "Claude（長文が得意） / ChatGPT（汎用性高い）を推奨",
    caution:
      "個人名・プロジェクト名・数値目標など、外部に漏れると困る情報が含まれる場合は、社内のプライベートな環境（API経由）で使うか、匿名化してから入力しましょう。",
  },
  {
    id: "weekly-report",
    number: 3,
    title: "週次報告書を箇条書きメモから5分で完成",
    scene: "「週報を書く時間がもったいない」「何を書けばいいかいつも迷う」という場面",
    description:
      "1週間にやったことをメモ帳やSlackに断片的に書き残し、それをAIに渡すだけで読みやすい週報が完成します。「成果・課題・来週の計画」という構成を指定すると、上司が読みやすい形式になります。毎週同じプロンプトを使い回すことで、月末の振り返りや業績評価の際にも一貫した記録が残ります。",
    prompt:
      "以下の1週間のメモから週次報告書を作成してください。\n\n【今週のメモ】\n・月曜: ○○の打ち合わせ、◻◻の調査\n・火曜: ××レポートの初稿作成\n・水曜: △△の修正対応\n・木〜金: ○○プロジェクトの準備\n\n【出力形式】\n■ 今週の主な成果（3〜5点、箇条書き）\n■ 課題・対処中の事項（2〜3点）\n■ 来週の計画（3〜5点、優先順）\n\n350字程度にまとめてください。",
    tools: "ChatGPT / Claude / Gemini どれでも使えます",
    caution:
      "数値目標やKPIを含める場合は、具体的な社内数値ではなく「達成率◯%」のように相対表現にするか、入力前に数値を伏せましょう。",
  },
  {
    id: "proposal-outline",
    number: 4,
    title: "提案書・企画書のアウトライン作成",
    scene: "「新しい企画を考えたいけど、何から始めればいいかわからない」という場面",
    description:
      "「何を提案したいか」「誰に向けてか」「目的は何か」の3点をAIに伝えるだけで、提案書の骨格を作ってくれます。ゼロから考えると時間がかかる構成を、数分で叩き台にできます。AIが出した骨格に対して「この部分をもっと詳しく」「ここは削除して」とやり取りしながら精度を上げる使い方が実務的です。",
    prompt:
      "以下の条件で提案書のアウトラインを作成してください。\n\n【提案内容】: 社内のリモートワーク環境整備\n【提案対象】: 経営層・上司への承認申請\n【目的】: 交通費削減とエンゲージメント向上\n【予算感】: 年間100万円以内\n\n【出力形式】\n提案書の見出し構成（H1〜H3）と、各セクションに入れるべきポイントを箇条書きで提示してください。",
    tools: "Claude（構成力が高い） / ChatGPT を推奨",
    caution:
      "アウトラインはあくまで叩き台です。数値根拠・競合比較・実施スケジュールは必ず自分で調べて肉付けする必要があります。AIが出した構成をそのまま使わず、状況に合わせて取捨選択しましょう。",
  },
  {
    id: "complaint-reply",
    number: 5,
    title: "クレームメールへの丁寧な返信文",
    scene: "「クレームが来た。どう返せばいいかわからない」という緊張する場面",
    description:
      "クレーム対応は言葉の選び方ひとつで状況が変わります。AIに状況とクレームの内容を伝えると、感情的にならず誠実で丁寧な返信文の初稿を作ってくれます。「謝罪・原因説明・対応策・再発防止」という構成で書くと、相手の怒りを和らげやすくなります。送信前に必ず上司や担当者が確認することを前提に使いましょう。",
    prompt:
      "次のクレームメールに対する返信文を作成してください。\n\n【クレーム内容の概要】\n・注文した商品が指定日に届かなかった\n・追跡番号で確認したが更新されていない\n・先週も同じ件でメールしたが返信がなかった\n\n【返信の方針】\n・まず真摯にお詫びする\n・現状を正直に説明する\n・具体的な対応策と期限を伝える\n・再発防止の意思を示す\n\n出力: 件名 → 本文（350字程度）。断定的な補償約束は含めないでください。",
    tools: "Claude（繊細なトーン調整が得意） / ChatGPT どちらでも可",
    caution:
      "AIの文章はあくまで初稿です。クレーム対応は状況に応じて判断が必要なため、必ず担当者・上司が内容を確認・修正した上で送信してください。謝罪の範囲や補償の約束はAIに決めさせないことが原則です。",
  },
] as const;

const learningUseCases: readonly UseCase[] = [
  {
    id: "explain-terms",
    number: 6,
    title: "難しい専門用語をわかりやすく説明させる",
    scene: "「会議で知らない言葉が出てきた」「資料に専門用語が多くて読み進められない」という場面",
    description:
      "「小学生でもわかるように説明してください」という一言を加えるだけで、AIは専門用語を平易な言葉に言い換えてくれます。さらに「例えを使って」「具体的な事例で」と追加指示すると、より理解が深まります。法律・医療・IT・金融など、普段触れない分野の情報を素早く理解する際に特に有効です。",
    prompt:
      "「機械学習」という言葉を、ITについて全く知識がない人に伝わるように説明してください。\n\n条件:\n・中学生でもわかる言葉を使う\n・日常生活に置き換えた具体例を1つ含める\n・150字以内でまとめる",
    tools: "ChatGPT / Claude / Gemini どれでも使えます",
    caution:
      "AIの説明は入門レベルの理解を助けるものです。医療・法律・財務など専門的な判断が必要な分野では、AIの説明を鵜呑みにせず、必ず専門家に確認してください。",
  },
  {
    id: "translate-summarize",
    number: 7,
    title: "英語の文章を自然な日本語に翻訳＋要約",
    scene: "「英語の論文やレポートを読まなきゃいけない」「海外メディアの記事を素早く把握したい」という場面",
    description:
      "英語の文章をAIに貼り付けて「自然な日本語に翻訳して、200字で要約してください」と伝えるだけで、翻訳と要約が同時にできます。DeepLが直訳寄りなのに対し、ChatGPTやClaudeは文脈を踏まえた訳が得意です。英語が苦手な方でも、最新の海外情報を素早く取り込む際に役立ちます。ニュース記事・英語メール・論文の概要把握など、幅広く使えます。",
    prompt:
      "次の英語の文章を自然な日本語に翻訳した後、200字以内で要約してください。\n\n【英語の文章をここに貼り付け】\n\n出力形式:\n【翻訳】（全文）\n【要約】（200字以内）\n【重要なポイント】（箇条書き3点）",
    tools: "ChatGPT / Claude（長文翻訳が得意）を推奨。DeepLより文脈を踏まえた訳が得やすい場面もある",
    caution:
      "翻訳精度は完璧ではありません。契約書・法的文書・医療記録など、正確性が求められる文書はプロの翻訳者に依頼してください。AIの翻訳は「大意を掴む」用途に留めましょう。",
  },
  {
    id: "deep-dive",
    number: 8,
    title: "調べたいことを壁打ちしながら理解を深める",
    scene: "「Googleで調べても答えが散らばっていてよくわからない」「自分の理解が正しいか確認したい」という場面",
    description:
      "AIに「〜について教えてください」と聞いた後、「それはなぜですか？」「具体例を教えてください」「私の理解は〜ですが合っていますか？」と対話を続けることで、理解が格段に深まります。一方向に情報を受け取るだけでなく、自分の疑問に合わせて掘り下げられるのがAIの強みです。教科書や動画では得られないパーソナルな「個別授業」のような使い方です。",
    prompt:
      "「インフレ」について教えてください。\n私は経済に詳しくないので、わかりやすくお願いします。\n最初に100字程度で概要を教えてから、私の質問に答えてください。\n\n（AIの回答を受けた後、次のように続ける）\n「なぜインフレになると物価が上がるのですか？具体例で教えてください」",
    tools: "ChatGPT / Claude / Gemini どれでも使えます",
    caution:
      "AIは自信を持って間違いを述べることがあります（ハルシネーション）。重要な情報はWikipediaや公式サイト・書籍で裏付けを取る習慣をつけましょう。",
  },
  {
    id: "book-summary",
    number: 9,
    title: "本・記事の要約と自分へのアクション整理",
    scene: "「本を読んだけど、内容が頭に残らない」「記事を読んだが行動に結びつけられない」という場面",
    description:
      "本や記事の重要な部分を抜粋してAIに貼り付け、「要約して、私がすぐ実践できるアクションを3つ提案してください」と指示します。インプットをアウトプットに変換するプロセスをAIが手伝ってくれます。読んだ内容を「自分の仕事にどう活かすか」という視点で整理させると、知識が行動につながりやすくなります。",
    prompt:
      "次の本・記事の内容を読んで、以下の3点を教えてください。\n\n【内容（ここに本の一部や記事を貼り付け）】\n\n1. この内容の要点を200字でまとめてください\n2. 私（会社員・営業職）がすぐ実践できるアクションを3つ提案してください\n3. この内容と関連して、さらに調べると良いテーマを2つ教えてください",
    tools: "Claude（長文理解が得意） / ChatGPT を推奨",
    caution:
      "著作権のある書籍の大量の文章をそのまま入力することは避けましょう。要点を自分でメモしたものや、数段落程度の抜粋にとどめる使い方が適切です。",
  },
] as const;

const dailyUseCases: readonly UseCase[] = [
  {
    id: "recipe",
    number: 10,
    title: "夕食の献立を冷蔵庫の食材から提案してもらう",
    scene: "「冷蔵庫に何かあるけど、今夜何を作ればいいかわからない」という夕方の場面",
    description:
      "冷蔵庫にある食材を羅列してAIに渡すだけで、具体的なレシピを提案してくれます。「調理時間20分以内」「子どもが食べられるもの」「できるだけ食材を使い切る」といった条件を追加するほど、現実的な提案になります。スーパーで食材を買う前に「今ある食材で何が作れるか確認してから足りないものだけ買う」という使い方も便利です。",
    prompt:
      "冷蔵庫にある食材から夕食の献立を3つ提案してください。\n\n【今ある食材】\n・鶏もも肉（200g）\n・卵（3個）\n・にんじん（1本）\n・キャベツ（半玉）\n・じゃがいも（2個）\n・豆腐（1丁）\n\n【条件】\n・調理時間：30分以内\n・2〜3人分\n・日本の家庭料理\n\n各レシピに「材料リスト」と「手順（3〜5ステップ）」を付けてください。",
    tools: "ChatGPT / Claude / Gemini どれでも使えます",
    caution:
      "食材の賞味期限や鮮度の確認はAIにはできません。また、食物アレルギーがある場合は条件に必ず追記してください。AIが提案したレシピは参考程度に、調理時は自己判断で対応してください。",
  },
  {
    id: "travel-plan",
    number: 11,
    title: "旅行の行程表を条件指定して作ってもらう",
    scene: "「旅行に行きたいけど、計画を立てる時間がない」「どう回ればいいかわからない」という場面",
    description:
      "旅行先・日程・同行者・予算・好みのスタイルを伝えるだけで、旅行の行程表を作ってくれます。「観光より食事重視」「子どもが楽しめるスポットを優先」「移動は電車のみ」などの条件を細かく指定するほど、自分に合った行程になります。さらに「この行程で費用の目安は？」「この観光地の混雑する時間帯は？」と続けて聞くことで、計画の精度が上がります。",
    prompt:
      "次の条件で2泊3日の京都旅行の行程表を作ってください。\n\n【条件】\n・旅行者: 大人2人（30代カップル）\n・移動: 公共交通機関のみ\n・予算: 1人あたり5〜7万円（宿泊含む）\n・好み: 歴史スポット中心、混雑している場所は避けたい\n・宿泊エリア: 四条・河原町近辺希望\n\n【出力形式】\n各日の朝〜夜の行程を時間軸で表示し、各スポットに「移動時間の目安」を追記してください。",
    tools: "ChatGPT / Claude / Gemini（Google マップとの連携が得意）を推奨",
    caution:
      "観光施設の営業時間・定休日・予約要否は変更される場合があります。実際の旅行前には各施設の公式サイトで確認してください。AIの情報は最新でない場合があります。",
  },
  {
    id: "coaching",
    number: 12,
    title: "悩みを聞いてもらい、自分で答えを見つける",
    scene: "「誰かに相談したいけど、迷惑をかけたくない」「頭の中が整理できていない」という場面",
    description:
      "AIは判断を押し付けずに話を聞き、質問を投げかけてくれます。「コーチングをしてください。私の答えを引き出す質問だけをしてください」と指示すると、答えを与えるのではなく自分が気づくための問いかけをしてくれます。仕事の悩み・キャリアの迷い・日常の小さな決断など、「声に出して整理する」ことで頭がクリアになる体験ができます。",
    prompt:
      "私の悩みを一緒に整理するコーチングをしてください。\nあなたは答えを出すのではなく、私が自分で答えを見つけられるよう、質問だけをしてください。\n一度に1〜2問だけ質問してください。\n\n【今の悩み】\n転職を考えているが、現職を続けるべきかどうかの判断ができない。",
    tools: "Claude（対話の自然さが高い） / ChatGPT どちらでも可",
    caution:
      "AIはカウンセラーや心理士の代替ではありません。精神的に辛い状態にある場合や、専門的なサポートが必要な場合は、信頼できる人や専門家に相談してください。AIとの対話は「思考整理」の補助ツールとして使いましょう。",
  },
] as const;

const creativeUseCases: readonly UseCase[] = [
  {
    id: "sns-polish",
    number: 13,
    title: "SNS投稿の文章をAIに磨いてもらう",
    scene: "「伝えたいことはあるけど、文章がうまくまとまらない」「もっと読まれる投稿にしたい」という場面",
    description:
      "書きたい内容のメモをAIに渡し、「Twitterらしい文体で140字以内に」「Instagramキャプションとして読みやすく」など、プラットフォームと文字数を指定して磨いてもらいます。自分の言葉のトーンを保ちながら読みやすく整える使い方が最も自然です。複数パターンを出してもらい、自分に合ったものを選ぶ方法がおすすめです。",
    prompt:
      "次のメモをTwitter（X）の投稿として磨いてください。\n\n【伝えたいこと】\n今日から生成AIを使い始めた。最初は難しそうと思っていたが、メールの返信を頼んだら3分でできた。もっと早く使えばよかった。\n\n【条件】\n・140字以内\n・3パターン出してください\n・押し付けがましくならず、読んだ人がやってみたくなるトーンで\n・絵文字は1〜2個程度",
    tools: "ChatGPT / Claude / Gemini どれでも使えます",
    caution:
      "AIが作った文章をそのまま使うより、自分の言葉に直してから使う方が読者に伝わりやすいです。「AIが書いた感」が残ると、フォロワーとの距離が生まれることがあります。",
  },
  {
    id: "writing-assist",
    number: 14,
    title: "趣味の情報をまとめた記事・日記を書く補助",
    scene: "「文章を書くのが苦手だけど、記録を残したい」「趣味のことをブログに書きたいが続かない」という場面",
    description:
      "「何を伝えたいか」のメモさえあれば、AIが文章の骨格を作ってくれます。箇条書きのメモを渡して「ブログ記事らしく書いてください」と伝えるだけで、読みやすい文章になります。完成した文章を「もっとカジュアルに」「もっと具体的に」と修正していくことで、自分らしい文章に近づけていけます。文章が苦手でも「書いて記録する」ことのハードルが下がります。",
    prompt:
      "次のメモを、趣味ブログの記事として書いてください。\n\n【メモ】\n・先週末にキャンプに行った\n・場所: 山梨の◯◯キャンプ場\n・天気: 初日曇り、2日目晴れ\n・良かったこと: 焚き火が楽しかった、星がきれいだった\n・失敗: テント設営に1時間かかった、虫除けを忘れた\n・次回への反省: 設営の予行練習をしておく\n\n【条件】\n・600字程度\n・読んでいて楽しい、体験談らしい文体で\n・失敗も正直に書く",
    tools: "ChatGPT / Claude / Gemini どれでも使えます",
    caution:
      "AIが作った文章は骨格です。自分だけが知っている感情・色・匂い・細かいエピソードを追加することで、読者の記憶に残る文章になります。",
  },
  {
    id: "message-assist",
    number: 15,
    title: "誕生日メッセージやお礼の言葉を一緒に考える",
    scene: "「気持ちはあるのに、うまく言葉が出てこない」「ありきたりな文章にしたくない」という場面",
    description:
      "相手との関係・伝えたいエピソード・普段の口調をAIに伝えると、その人らしさを活かした文章の候補を出してくれます。「雛形を出してもらい、自分の言葉に直す」という使い方が最も自然な仕上がりになります。SNS投稿・手書きカード・メッセージアプリなど、媒体に合わせた文体も指定できます。",
    prompt:
      "友人への誕生日メッセージを一緒に考えてください。\n\n【友人との関係】\n・5年来の仕事の友人\n・いつも悩んだときに相談に乗ってくれる\n・去年、転職を応援してくれた\n・普段はタメ口でやり取りしている\n\n【伝えたいこと】\n・いつも支えてくれてありがとう\n・去年の転職の時も助かった\n・これからもよろしく\n\n【条件】\n・LINEで送る\n・自然なタメ口\n・感謝が伝わるが、大げさすぎない\n・3パターン出してください",
    tools: "ChatGPT / Claude / Gemini どれでも使えます",
    caution:
      "AIが出した文章はそのまま送らず、必ず自分の言葉で一部でも書き直しましょう。相手が「AIっぽい」と感じると、気持ちが伝わりにくくなることがあります。",
  },
] as const;

const categoryGroups = [
  {
    id: "business",
    title: "仕事・ビジネス系（5選）",
    subtitle: "毎日の定型業務から削れる時間を探す",
    cases: businessUseCases,
  },
  {
    id: "learning",
    title: "学習・情報収集系（4選）",
    subtitle: "インプットをアウトプットに変換する",
    cases: learningUseCases,
  },
  {
    id: "daily",
    title: "日常生活系（3選）",
    subtitle: "生活の中の「ちょっと面倒」を減らす",
    cases: dailyUseCases,
  },
  {
    id: "creative",
    title: "創作・趣味系（3選）",
    subtitle: "表現することのハードルを下げる",
    cases: creativeUseCases,
  },
] as const;

export default function AiPracticalUsesSpring2026Page({ faqItems }: AiPracticalUsesSpring2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIの仕事に役立つ使い方15選" },
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
                title="今すぐ試せる！生成AIが仕事と日常で本当に役立った使い方15選【2026年春版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            今すぐ試せる！生成AIが仕事と日常で本当に役立った使い方15選【2026年春版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月23日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「生成AIが便利らしいけど、具体的に何に使えばいいの？」という疑問に、このページで答えます。ChatGPT・Claude・Gemini を使って実際に業務が変わった15の活用場面を、プロンプト例と注意点つきで紹介します。すべて今日から試せる内容です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            初めてAIツールを使う方は、先に
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
            を読んでから戻ってくると、この記事の使い方がより実感しやすくなります。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマ:
          <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            仕事で使えるプロンプトテンプレート集
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT実践テクニック50
          </Link>
          ・
          <Link href="/academy/blog/ai-study-learning-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI勉強法ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ入門
          </Link>
        </p>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          id="conclusion"
          className="scroll-mt-28 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ"
            items={[
              "生成AIは「メール・議事録・報告書・翻訳・レシピ提案」など、繰り返し発生する定型タスクと相性がよい。",
              "各ツール（ChatGPT/Claude/Gemini）はどれでも使えるが、「長文・構成力」はClaude、「汎用・対話」はChatGPT、「Google連携」はGeminiが得意な場面が多い（2026年2月時点）。",
              "AIの出力は初稿・叩き台として使う。最終判断・送信・公開は必ず人が行う。特に機密情報・クレーム・法的文書は注意が必要。",
              "15個すべてをいきなりやろうとしない。今の仕事で1番時間を取られている作業から1つ試すだけで十分。",
            ]}
          />
        </motion.section>

        <LineCtaBox />

        {/* カテゴリ別 活用例 */}
        {categoryGroups.map((group) => (
          <motion.section
            key={group.id}
            id={group.id}
            className="scroll-mt-28 mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ArticleH2 id={group.id}>{group.title}</ArticleH2>
            <p className="mt-3 text-sm font-medium text-gray-600">{group.subtitle}</p>

            <div className="mt-6 space-y-8">
              {group.cases.map((useCase) => (
                <section
                  key={useCase.id}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow"
                >
                  <ArticleH3>
                    {String(useCase.number).padStart(2, "0")}. {useCase.title}
                  </ArticleH3>

                  <p className="mt-3 text-sm font-semibold text-gray-700">
                    📍 こんな場面で使える
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600">{useCase.scene}</p>

                  <p className="mt-4 text-sm leading-7 text-gray-700">{useCase.description}</p>

                  <p className="mt-5 text-xs font-semibold tracking-wide text-gray-500">
                    実際のプロンプト例（コピペして使えます）
                  </p>
                  <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                    <code>{useCase.prompt}</code>
                  </pre>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">使えるツール: </span>
                      {useCase.tools}
                    </p>
                  </div>

                  <div className="mt-3 rounded-md bg-amber-50 border border-amber-200 px-4 py-3">
                    <p className="text-xs font-semibold text-amber-800">⚠ 使うときの注意点</p>
                    <p className="mt-1 text-xs leading-6 text-amber-700">{useCase.caution}</p>
                  </div>
                </section>
              ))}
            </div>

            {group.id === "learning" && <LineCtaBox />}
          </motion.section>
        ))}

        {/* まとめ */}
        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="summary">まとめ：1つずつ試すだけでいい</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この15個をすべてマスターするには時間がかかります。でも、1つ試すだけでいい。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            今日の仕事で「これ、時間かかるな」と感じた瞬間に、この記事のプロンプトを1つコピーして使ってみてください。
            完璧な使い方でなくても構いません。AIに任せた方が早く終わる場面を1つ見つけることが、生成AIを本当に使い始める最初の一歩です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            最初の1週間で試す順番を迷っている方は、
            <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT・Claude初心者ガイド
            </Link>
            の「最初の1週間でやること」が参考になります。ビジネスメールの返信（No.1）か、週次報告書（No.3）から始めると、効果を感じやすいです。
          </p>

          <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <p className="text-sm font-semibold text-gray-900">各ツールで迷っている方へ</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-gray-700">
              <li>
                <span className="font-semibold">ChatGPT</span>: 最も広く使われており、情報・プラグイン連携が豊富。まず試すならここから（有料プランはPlus/Pro）
              </li>
              <li>
                <span className="font-semibold">Claude</span>: 長い文章の理解・構成力・繊細なトーン調整が得意。文章作成やメール対応に強み
              </li>
              <li>
                <span className="font-semibold">Gemini</span>: GmailやGoogleドキュメントとの連携が便利。Googleツールを日常的に使っている方に
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※ 各ツールの機能・料金は更新されます。確認日: 2026年2月23日時点</p>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          className="scroll-mt-28 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            「試してみたい」と思ったときに出てくる疑問を先にまとめました。
          </p>
          <RichFAQ items={faqItems} />
        </motion.section>

        <LineCtaBox />

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <p className="mb-4 text-sm leading-7 text-gray-700">
            この記事の内容をさらに深掘りしたい方向けの関連記事です。
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-start-guide-smartphone"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/prompt-template-for-work"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-advanced-tips"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-work-with-ai-180days-diary"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIと仕事して180日：失ったもの・得たもの・気づいたことをすべて話します
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-study-learning-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI時代の勉強法ガイド｜効率的な学習方法と継続のコツ
              </Link>
            </li>
          </ul>
        </section>

        {/* アカデミーCTA */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="next-step">AI活用力とキャリアを同時に設計する</ArticleH2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事の15選は「今日から試せる入口」です。その先、AIを使って何を成し遂げたいか——仕事の質を上げる、キャリアを変える、自分の強みを見直す——という問いに向き合うには、ツールの操作を超えた思考が必要になります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートアカデミーでは、
            <span className="font-semibold text-gray-900">生成AI活用力の習得</span>
            に加え、
            <span className="font-semibold text-gray-900">AIを鏡にした自己理解・キャリアデザイン</span>
            と
            <span className="font-semibold text-gray-900">仲間と共に学ぶ環境</span>
            を一体で設計しています。「どのツールを使うか」より「どんな課題に当てるか」の判断軸を育てたい方は、学習プロセス全体を見直すことが有効です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              他の記事も読む
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
