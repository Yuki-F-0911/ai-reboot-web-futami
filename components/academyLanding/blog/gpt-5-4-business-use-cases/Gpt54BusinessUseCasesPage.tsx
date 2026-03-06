"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";
import { ArticleH2, ArticleH3, Callout, RichFAQ, RichTable, SummaryBox } from "@/components/blog/ArticleBody";

type FAQItem = {
  question: string;
  answer: string;
};

type SourceLink = {
  label: string;
  href: string;
};

type ReasonItem = {
  title: string;
  body: string;
  metric: string;
  sources: readonly SourceLink[];
};

type UseCaseItem = {
  id: string;
  role: string;
  title: string;
  summary: string;
  before: string;
  after: string;
  steps: readonly string[];
  kpi: string;
  caution: string;
  sources: readonly SourceLink[];
};

type CostRow = {
  option: string;
  fee: string;
  fit: string;
  breakEven: string;
};

type ApiCostRow = {
  scenario: string;
  input: string;
  output: string;
  estimate: string;
};

type StepItem = {
  title: string;
  body: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;

const keywordTags = [
  "GPT-5.4 ビジネス活用",
  "ChatGPT 仕事 使い方 2026",
  "GPT-5.4 業務効率化",
  "GPT-5.4 実例",
] as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ" },
  { id: "change-reasons", label: "GPT-5.4がビジネスを変える3つの理由" },
  { id: "use-cases", label: "職種別活用10選" },
  { id: "steps", label: "今週から使える具体的な手順" },
  { id: "cost", label: "コスト試算" },
  { id: "limits", label: "注意点・限界" },
  { id: "faq", label: "FAQ" },
] as const;

const answerPoints = [
  "GPT-5.4で大きく変わったのは、回答の賢さそのものよりも、スプレッドシート・長文資料・Web調査・PC操作をまたぐ仕事の往復回数が減ったことです。",
  "公式発表では、GPT-5.4は GPT-5.2 比で個別主張の誤りが33%少なく、全体回答の誤りが18%少ないとされます。レビュー回数を減らしやすくなった点が、実務では一番効きます。",
  "最初に試すべきなのは『毎週くり返す1業務』です。会議録、メール、顧客対応、Excel分析のどれか1つに絞って Before/After を測ると、導入判断が速くなります。",
] as const;

const changeReasons: readonly ReasonItem[] = [
  {
    title: "誤りが減り、レビュー前提の仕事でも回しやすくなった",
    body:
      "GPT-5.4は、知識労働ベンチマーク GDPval で 83.0% の勝ち/同等評価を取り、個別主張の誤りを GPT-5.2 比で 33% 減らしました。仕事で効くのは『一発で正しい』ことより、『1回目の下書きがレビューに耐える水準へ近づいた』ことです。会議録、要約、企画骨子、提案メールのようなレビュー前提の業務で手戻りが減りやすくなります。",
    metric: "GDPval 83.0%、個別主張の誤り 33%減、全体回答の誤り 18%減",
    sources: [
      { label: "OpenAI: Introducing GPT-5.4", href: "https://openai.com/index/introducing-gpt-5-4/" },
      { label: "GPT-5.4 System Card", href: "https://openai.com/index/gpt-5-4-system-card/" },
    ],
  },
  {
    title: "長文を小分けせず、まとめて扱える場面が増えた",
    body:
      "API/Codex では 1M context をサポートし、契約書、仕様書、会議録、リサーチメモを分割しないで比較しやすくなりました。法務向けには Harvey が BigLaw Bench で 91% を報告しており、長い文書の論点整理・差分比較・リスク抽出に向く流れがはっきりしています。『分けて貼る作業』が減るだけでも、管理職や法務の体感は大きく変わります。",
    metric: "1M context、Harvey BigLaw Bench 91%",
    sources: [
      { label: "OpenAI: Introducing GPT-5.4", href: "https://openai.com/index/introducing-gpt-5-4/" },
      { label: "Harvey on OpenAI", href: "https://openai.com/index/introducing-gpt-5-4/" },
    ],
  },
  {
    title: "Web・PC・Excelまでつながり、業務の単位で置き換えやすくなった",
    body:
      "GPT-5.4は computer use を備え、OSWorld-Verified で 75.0% を記録しました。さらに BrowseComp では 82.7% まで伸び、粘り強い情報探索が改善しています。加えてスプレッドシートモデリングは 87.3% とされ、Excel/Google Sheets 向け add-in も同日公開されました。結果として『調べる → まとめる → 表にする』までを1つの流れとして設計しやすくなっています。",
    metric: "OSWorld 75.0%、BrowseComp 82.7%、スプレッドシート 87.3%",
    sources: [
      { label: "OpenAI: Introducing GPT-5.4", href: "https://openai.com/index/introducing-gpt-5-4/" },
      {
        label: "ChatGPT for Excel and Google Sheets",
        href: "https://openai.com/index/introducing-chatgpt-for-excel-and-google-sheets/",
      },
    ],
  },
] as const;

const useCases: readonly UseCaseItem[] = [
  {
    id: "support",
    role: "顧客対応",
    title: "CRMサポートチケットの一次対応を7割前後まで自動化しやすくなった",
    summary:
      "FAQ bot のように決まりきった返答だけ返す段階から、分類・回答草案・追加質問・エスカレーション判断まで一連で任せやすくなったのが変化です。",
    before:
      "受信箱を開いてカテゴリを判断し、過去FAQを探し、下書きを書き、難しい案件だけ人に回す。1件ごとに5〜8分かかり、担当者ごとに文面の品質もぶれやすい状態でした。",
    after:
      "AIが『問い合わせ分類』『回答草案』『不足情報』『人に回すべきか』を同時に出し、返金・解約・契約変更だけ人が握る形に寄せられます。Zendesk は 80% automation を見据え、MavenAGI は 93% の問い合わせ自律回答を報告しています。",
    steps: [
      "代表的な過去チケットを 30〜50 件集め、『FAQで返せる案件』『人判断が必要な案件』に分ける",
      "出力形式を『分類 / 回答案 / 追加質問 / エスカレーション要否』で固定する",
      "最初の1週間は人が必ず採点し、一次解決率と誤送信ゼロを優先する",
    ],
    kpi: "一次解決率、平均処理時間、エスカレーション率",
    caution: "返金・解約・法的クレーム・炎上案件は最初から人に回す運用にする",
    sources: [
      { label: "OpenAI × Zendesk", href: "https://openai.com/index/zendesk/" },
      { label: "OpenAI × MavenAGI", href: "https://openai.com/index/mavenagi/" },
    ],
  },
  {
    id: "marketing",
    role: "マーケティング",
    title: "1時間で広告キャンペーン初稿一式を揃えやすくなった",
    summary:
      "GPT-5.4で変わるのは、広告文を1本作ることではなく、訴求角度、見出し、クリエイティブ指示、LP構成、ABテスト表まで同じブリーフから一気に起こせることです。",
    before:
      "担当者が訴求を考え、コピーを書き、デザイナー向けブリーフをまとめ、テスト表を別のシートで作る。初稿を揃えるまで半日から1日かかることも珍しくありませんでした。",
    after:
      "商品・ターゲット・オファー・禁止表現を一枚で渡せば、AIが複数の訴求軸とABテスト仮説をまとめて返します。Zenken では知識労働で平均30〜50%の時短が報告されており、OpenAI の sales and marketing 向け調査でも 88% が週2時間以上の節約を回答しています。",
    steps: [
      "1枚のブリーフに『誰に / 何を / なぜ今 / 禁止表現 / CTA』をまとめる",
      "出力を『コピー3案 / ビジュアル指示3案 / LP見出し / ABテスト表』で固定する",
      "ブランドトーンと法務表現だけ人が調整し、そのまま制作へ渡す",
    ],
    kpi: "企画着手から初稿完成までの時間、ABテスト本数、差し戻し回数",
    caution: "金融・医療・比較広告は誇張や断定が出やすいので、公開前レビューを必須にする",
    sources: [
      { label: "OpenAI Sales & Marketing", href: "https://openai.com/business/sales-and-marketing/" },
      { label: "OpenAI × Zenken", href: "https://openai.com/index/zenken/" },
      { label: "OpenAI Academy: Canvas", href: "https://academy.openai.com/public/clubs/work-users-ynjqu/resources/canvas" },
    ],
  },
  {
    id: "meetings",
    role: "管理職・PM",
    title: "会議録や長文資料を5行サマリーに圧縮しやすくなった",
    summary:
      "管理職が欲しいのは全文の要約ではなく、5行で読める『結論・決定事項・誰がいつ何をするか』です。GPT-5.4はこの圧縮の精度が上がり、長い原文を残したまま要約しやすくなりました。",
    before:
      "1時間会議の文字起こしをそのまま共有し、読む人ごとに解釈がずれる。共有文を整える担当者も、毎回同じ編集をしていました。",
    after:
      "会議ログや長文メモを渡すと、5行のエグゼクティブサマリー、決定事項、未決事項、次アクションを固定フォーマットで出せます。OpenAI Academy の Canvas 解説では、会議メモから first draft まで 2分未満を掲げています。",
    steps: [
      "テンプレートを『5行要約 / 決定事項 / 未決事項 / 次アクション』で固定する",
      "会議ログはそのまま貼り、推測禁止・人名と期限は必ず残すと指定する",
      "共有前に、担当者名・締切・金額だけ原文照合する",
    ],
    kpi: "会議後共有までの時間、宿題漏れ件数、再説明回数",
    caution: "意見の対立や責任分界がある会議は、要約だけでなく原文リンクも残す",
    sources: [
      {
        label: "OpenAI Academy: Writing with canvas in ChatGPT",
        href: "https://academy.openai.com/public/videos/writing-with-canvas-in-chatgpt-2025-04-11",
      },
      { label: "OpenAI: Introducing GPT-5.4", href: "https://openai.com/index/introducing-gpt-5-4/" },
    ],
  },
  {
    id: "excel",
    role: "財務・経営企画",
    title: "Excelモデリングを『数式作成』ではなく『判断材料作成』に寄せられる",
    summary:
      "GPT-5.4は、表を作るだけでなく『何の前提で、どの変数を置けば判断に使えるか』を自然言語から組み立てやすくなりました。",
    before:
      "アナリストがシート構造を手で作り、数式の意味を別途説明し、シナリオ比較表も手動で整える。初稿に時間がかかり、レビュー側もロジックを追いにくい状態でした。",
    after:
      "目的を言葉で渡せば、シート構造、主要前提、感度分析、注記コメントまでまとめて起こしやすくなります。公式発表では、投資銀行アナリスト相当のスプレッドシートモデリングで GPT-5.4 が 87.3% を記録しています。",
    steps: [
      "『売上予測』『採算分岐』『人員計画』など、求める判断を1つに絞る",
      "必要な入力項目、前提、出したいグラフを自然言語で明示する",
      "初稿シートの後に『この式の意味を経営会議向けに説明して』までセットで依頼する",
    ],
    kpi: "モデル初稿時間、レビュー差し戻し回数、シナリオ比較の作成時間",
    caution: "IRR、税率、会計ルール、資金繰り前提は人が最終確認する",
    sources: [
      { label: "OpenAI: Introducing GPT-5.4", href: "https://openai.com/index/introducing-gpt-5-4/" },
      {
        label: "OpenAI: ChatGPT for Excel and Google Sheets",
        href: "https://openai.com/index/introducing-chatgpt-for-excel-and-google-sheets/",
      },
      {
        label: "OpenAI Help: Data analysis with ChatGPT",
        href: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt",
      },
    ],
  },
  {
    id: "contracts",
    role: "法務・調達",
    title: "数百ページの契約書・仕様書を一括で要約・比較しやすくなった",
    summary:
      "長文の分割作業が減り、『どこが違うか』『どの条項が重いか』を表形式で抜き出す仕事に寄せやすくなりました。ここは 1M context の恩恵が大きい領域です。",
    before:
      "契約書と仕様書を何回にも分けて貼り、比較表を手で作り、見落としがないか何度も往復していました。",
    after:
      "複数資料をまとめて渡し、『差分一覧』『リスク条項』『確認が必要な論点』まで一気に起こせます。Harvey は GPT-5.4 について、長い契約書でも精度を保ちやすいと評価しています。",
    steps: [
      "依頼前に『比較したい観点』を決める。例: 責任範囲、支払条件、解約条件、再委託、SLA",
      "出力を『条項差分 / リスク評価 / 未確定事項 / 担当部門への確認事項』に固定する",
      "法的解釈と最終判断は法務が持ち、AIはたたき台に限定する",
    ],
    kpi: "比較表初稿時間、見落とし指摘数、関係部署への確認往復数",
    caution: "AIの要約をそのまま契約判断に使わない。法的助言は必ず専門家に戻す",
    sources: [
      { label: "OpenAI: Introducing GPT-5.4", href: "https://openai.com/index/introducing-gpt-5-4/" },
      { label: "GPT-5.4 System Card", href: "https://openai.com/index/gpt-5-4-system-card/" },
    ],
  },
  {
    id: "emails",
    role: "営業・管理職",
    title: "ビジネスメール下書きと報告書の敬語調整が安定した",
    summary:
      "日々の実務では『ゼロから書く』時間より、『相手に合わせて言い換える』時間のほうが長くなりがちです。GPT-5.4はこの変換作業の品質が上がり、社内・顧客・役員向けの書き分けがしやすくなりました。",
    before:
      "同じ内容を相手ごとに書き換え、言い回しやトーンを毎回調整する。特に報告書やお詫び文、リマインド文は心理的な負荷も高い状態でした。",
    after:
      "事実メモだけ用意すれば、『顧客向け丁寧版』『社内共有版』『役員向け短縮版』を並列で作れます。OpenAI Academy でも、仕事向けの基本ユースケースとしてメール・フォローアップ・文章改善が前面に出ています。",
    steps: [
      "元情報を箇条書きで整理し、感情表現ではなく事実を先に渡す",
      "『社内向け / 顧客向け / 役員向け』の3パターンを同時出力させる",
      "最終版では固有名詞、数字、謝罪表現だけを人が確認する",
    ],
    kpi: "下書き時間、文面の修正往復回数、送信前レビュー時間",
    caution: "謝罪・評価・人事連絡など感情と法的配慮が絡む文面は必ず人が最終責任を持つ",
    sources: [
      {
        label: "OpenAI Academy: ChatGPT for any role",
        href: "https://academy.openai.com/home/clubs/work-users-ynjqu/resources/chatgpt-for-any-role",
      },
      {
        label: "OpenAI Academy: Customizing ChatGPT",
        href: "https://academy.openai.com/public/clubs/work-users-ynjqu/resources/customizing-chatgpt/",
      },
    ],
  },
  {
    id: "localization",
    role: "海外営業・人事",
    title: "海外クライアント向け英訳・ローカライズの初稿が速くなった",
    summary:
      "翻訳だけでなく、相手の立場に合わせて『何を強調し、何を避けるか』まで含めたローカライズ初稿に寄せやすくなりました。",
    before:
      "日本語の資料やメールをそのまま英訳し、不自然な言い回しや説明不足をあとで直していました。採用文面や営業文面では、文化差の調整に時間がかかります。",
    after:
      "目的、相手、残したいニュアンス、避けたい表現を指定すると、英訳ではなくローカライズの初稿に近づきます。Zenken でも翻訳・要約・市場分析が主要な活用領域として明示されています。",
    steps: [
      "元文の目的を先に明示する。例: 提案、交渉、採用案内、会議後フォロー",
      "『直訳禁止』『相手が理解しやすい順で再構成』を条件に入れる",
      "送付前に、価格条件・納期・契約条件だけは人が照合する",
    ],
    kpi: "英訳初稿時間、ネイティブ修正点数、返信までのリードタイム",
    caution: "契約、価格、評価、採用関連の文面はネイティブまたは担当部門が確認する",
    sources: [
      { label: "OpenAI × Zenken", href: "https://openai.com/index/zenken/" },
      { label: "OpenAI: Introducing GPT-5.4", href: "https://openai.com/index/introducing-gpt-5-4/" },
    ],
  },
  {
    id: "planning",
    role: "企画・新規事業",
    title: "アイデア出しと企画書の骨格生成を『白紙』から始めなくてよくなった",
    summary:
      "GPT-5.4で変わるのは、発想そのものより『比較可能な案を短時間で並べられる』ことです。企画会議の前に、複数案と評価軸を出しておく運用と相性が良いです。",
    before:
      "白紙のスライドに悩み、方向性が出るまで会議時間を使ってしまう。案の比較軸も後から足すので、議論が感覚に寄りやすい状態でした。",
    after:
      "1つのテーマから『案A/B/C』『狙う顧客』『成功指標』『リスク』『次に取る検証』を同時に出し、会議を選ぶ場に変えられます。Canvas を使うと、そのまま企画骨子の共同編集に移りやすいです。",
    steps: [
      "テーマ、対象顧客、成功条件、避けたいリスクを4行で整理する",
      "『3案 / 仮説 / KPI / 反対意見 / 次の実験』で出力させる",
      "会議では生成物を読むのではなく、採用する案と捨てる案の理由だけを議論する",
    ],
    kpi: "企画初稿時間、提案本数、会議あたりの意思決定数",
    caution: "差別化仮説、市場性、採算は人が判断する。AIは案出し補助と割り切る",
    sources: [
      { label: "OpenAI Academy: Canvas", href: "https://academy.openai.com/public/clubs/work-users-ynjqu/resources/canvas" },
      { label: "OpenAI: Introducing GPT-5.4", href: "https://openai.com/index/introducing-gpt-5-4/" },
    ],
  },
  {
    id: "research",
    role: "経営企画・マーケティング",
    title: "競合調査・市場リサーチが『探す作業』から『判断する作業』へ寄りやすくなった",
    summary:
      "GPT-5.4 の BrowseComp 改善と deep research / web search の組み合わせで、情報収集の網羅性を保ちながら、比較表や論点整理まで短時間で進めやすくなりました。",
    before:
      "タブを大量に開き、記事やプレスリリースを読み、要点をコピペしてまとめる。資料化の前に疲れてしまい、肝心の判断に時間を使えないことが多い状態でした。",
    after:
      "AIに一次情報優先で調査させ、ソース付きの比較表、論点、追加確認項目まで出させることで、人は『この市場に入るか』『この競合をどう見るか』に集中できます。",
    steps: [
      "最初に『何を決めるための調査か』を一文で決める",
      "出力を『事実 / 解釈 / 不確実性 / 次に確認すべきこと』に分ける",
      "市場調査の最後に、必ず一次情報のURLだけを人が目視確認する",
    ],
    kpi: "調査メモ完成までの時間、引用ソース数、意思決定会議までの準備時間",
    caution: "ブログやSNSだけで結論を出さない。一次情報優先は崩さない",
    sources: [
      {
        label: "OpenAI Academy: Market research with ChatGPT",
        href: "https://academy.openai.com/en/public/videos/market-research-with-chatgpt-2025-04-11",
      },
      {
        label: "OpenAI Academy: Deep research",
        href: "https://academy.openai.com/public/clubs/work-users-ynjqu/resources/deep-research",
      },
      {
        label: "OpenAI Academy: Web search",
        href: "https://academy.openai.com/public/clubs/work-users-ynjqu/resources/web-search/",
      },
    ],
  },
  {
    id: "analysis",
    role: "非エンジニア部門",
    title: "プログラミング不要のデータ分析を、待ち行列なしで始めやすくなった",
    summary:
      "ChatGPT に xlsx や CSV を渡し、自然言語で『異常値を見つけて』『部門別に比較して』『グラフにして』と依頼できるため、分析の着手速度が上がります。",
    before:
      "分析担当に依頼して順番待ちになるか、Excel で手作業の集計をして終わる。仮説を試すまでに時間がかかり、質問そのものが浅くなりがちでした。",
    after:
      "その場でファイルを渡し、Python 実行込みで集計・可視化・要約まで進められます。最初の仮説検証を自分で回せるので、分析担当へ依頼するときの問いの精度も上がります。",
    steps: [
      "最初は 1 ファイルだけで始め、『何を比較したいか』を日本語で明示する",
      "出力を『要点3つ / グラフ / 次に見るべき切り口』に固定する",
      "最後に集計定義と欠損値処理だけを人が確認する",
    ],
    kpi: "分析着手までの待ち時間、レポート初稿時間、追加依頼回数",
    caution: "定義が曖昧なKPIや欠損データは誤解を生みやすい。集計ルールを先に固定する",
    sources: [
      {
        label: "OpenAI Help: Data analysis with ChatGPT",
        href: "https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt",
      },
      {
        label: "OpenAI: ChatGPT for Excel and Google Sheets",
        href: "https://openai.com/index/introducing-chatgpt-for-excel-and-google-sheets/",
      },
    ],
  },
] as const;

const stepItems: readonly StepItem[] = [
  {
    title: "1. 毎週くり返す1業務だけ選ぶ",
    body:
      "最初から全部門に広げないことが重要です。会議録、メール、顧客対応、Excel分析のように、毎週発生して成果を測りやすいものだけを選びます。",
  },
  {
    title: "2. Before の時間と品質を10件だけ測る",
    body:
      "1件あたりの処理時間、レビュー回数、差し戻し理由を10件だけ取ります。これがないと、導入後に『便利そうだった』で終わります。",
  },
  {
    title: "3. プロンプトを4ブロックで固定する",
    body:
      "役割、入力、出力形式、禁止事項の4ブロックに分けると、担当者が変わっても品質を揃えやすくなります。詳細は既存記事のプロンプト入門に内部リンクします。",
  },
  {
    title: "4. 人が確認すべき観点を最初に決める",
    body:
      "数字、日付、固有名詞、契約条件、対外送信の可否など、人が見るべきポイントを先に固定します。『何をAIに任せないか』を明文化した方が定着します。",
  },
  {
    title: "5. 1週間で残すか捨てるかを決める",
    body:
      "1週間だけ運用し、時短と品質の両方を見る。時間は減っても事故が増えるなら捨てる、時間が減って品質も維持できるならテンプレート化する、の判断で十分です。",
  },
] as const;

const costRows: readonly CostRow[] = [
  {
    option: "Free",
    fee: "$0",
    fit: "まず1業務だけ試す人。会議録やメールの単発利用。",
    breakEven: "時短の見積もりより、入力してよい情報範囲と出力品質の確認が目的。",
  },
  {
    option: "Plus",
    fee: "$20/月",
    fit: "個人の実務利用の標準。会議録、提案メール、要約、企画骨子、日常リサーチ。",
    breakEven: "1日15分短縮で月5時間。多くのビジネスパーソンはここから十分回収しやすい。",
  },
  {
    option: "Pro",
    fee: "$200/月",
    fit: "長文・高頻度・高単価業務を毎日回す人。法務、経営企画、コンサル、投資、重い調査。",
    breakEven: "週2〜3時間以上の高付加価値作業を圧縮できるかが目安。個人よりヘビーユーザー向け。",
  },
] as const;

const apiCostRows: readonly ApiCostRow[] = [
  {
    scenario: "会議録・メール・軽い要約を自動化",
    input: "2M tokens",
    output: "0.3M tokens",
    estimate: "$9.5/月",
  },
  {
    scenario: "契約書比較・市場調査を毎日まわす",
    input: "10M tokens",
    output: "1M tokens",
    estimate: "$40/月",
  },
] as const;

function SourceLinks({ items }: { items: readonly SourceLink[] }) {
  return (
    <>
      {items.map((item, index) => (
        <span key={item.href}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="blog-link">
            {item.label}
          </a>
          {index < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </>
  );
}

export default function Gpt54BusinessUseCasesPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "GPT-5.4のビジネス活用10選" },
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
                title="GPT-5.4のビジネス活用10選｜何が変わったかを実例で解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            GPT-5.4のビジネス活用10選｜何が変わったかを実例で解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年3月6日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            GPT-5.4で仕事が変わる理由は、単に回答が賢くなったことではありません。スプレッドシート、長文資料、
            Web調査、PC操作までまたいだ仕事で、往復回数が減ったことが実務上の変化です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            OpenAI 公式の
            {" "}
            <a href="https://openai.com/index/introducing-gpt-5-4/" target="_blank" rel="noopener noreferrer" className="blog-link">
              GPT-5.4 リリース
            </a>
            {" "}
            では、GDPval 83.0%、OSWorld-Verified 75.0%、個別主張の誤り 33%減などが示されました。本記事では、この数字を
            日本のビジネス文脈に翻訳し、顧客対応、広告、会議録、Excel、契約書、英訳、市場調査まで10の業務単位で整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox title="要点まとめ" items={[...answerPoints]} />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="change-reasons">GPT-5.4がビジネスを変える3つの理由</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            GPT-5.4の価値は、`できることが増えた` ではなく、`今まで人がつないでいた工程が1回で返りやすくなった`
            ことにあります。特に管理職や実務担当が体感しやすい変化は、次の3つです。
          </p>
          <div className="mt-8 space-y-6">
            {changeReasons.map((reason) => (
              <section key={reason.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <ArticleH3>{reason.title}</ArticleH3>
                <p className="text-sm font-semibold text-will-primary">{reason.metric}</p>
                <p className="mt-4 text-base leading-8 text-gray-700">{reason.body}</p>
                <p className="mt-4 text-sm leading-7 text-gray-500">
                  根拠: <SourceLinks items={reason.sources} />
                </p>
              </section>
            ))}
          </div>
          <Callout type="tip" title="仕事目線で見るべき指標">
            ベンチマークの勝ち負けより、`下書きまでに必要な往復回数が何回減るか` を見ると判断しやすくなります。
            エラー率の低下、長文処理、ツール横断の3つが揃うと、会議録、契約比較、Excel分析、サポート対応のような
            反復業務で差が出やすくなります。
          </Callout>
        </motion.section>

        <motion.section
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox analyticsSource="gpt54_business_use_cases_top" />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="use-cases">職種別活用10選</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            ここでは、Xやコミュニティで話題化しやすい使い方を、そのまま日本の実務に落とした形で紹介します。
            重要なのは、ツール名より `どの工程を減らすか` を決めることです。
          </p>
          <div className="mt-8 space-y-8">
            {useCases.map((item, index) => (
              <section key={item.id} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold tracking-wide text-will-primary">
                  {String(index + 1).padStart(2, "0")}. {item.role}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight text-gray-900">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-gray-700">{item.summary}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-sm font-semibold text-gray-900">これまで</p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.before}</p>
                  </div>
                  <div className="rounded-2xl bg-orange-50 p-5">
                    <p className="text-sm font-semibold text-gray-900">GPT-5.4以後</p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.after}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-900">今週やる手順</p>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
                    {item.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <p className="mt-5 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">見るべきKPI:</span> {item.kpi}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">注意:</span> {item.caution}
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-500">
                  根拠: <SourceLinks items={item.sources} />
                </p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox analyticsSource="gpt54_business_use_cases_middle" />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="steps">今週から使える具体的な手順</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            成功しやすい進め方は、`ツールを学ぶ` より先に `対象業務を固定する` ことです。特に初週は、
            正答率よりも「残す運用か、捨てる運用か」を判断できるだけの比較材料を集めると速く進みます。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {stepItems.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <Callout type="info" title="内部リンク">
            プロンプトの基本は
            {" "}
            <Link href="/academy/blog/ai-prompt-writing-basics" className="blog-link">
              AIプロンプトの書き方入門
            </Link>
            、GPT-5.4 の仕様差分は
            {" "}
            <Link href="/academy/blog/gpt-5-4" className="blog-link">
              GPT-5.4速報記事
            </Link>
            、部門横断の導入観点は
            {" "}
            <Link href="/academy/blog/ai-business-efficiency-cases" className="blog-link">
              AI業務効率化事例集
            </Link>
            を合わせて読むと理解が深まります。
          </Callout>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="cost">コスト試算</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            為替のぶれが大きいため、ここではドル建てで見ます。個人で始めるなら Plus の $20/月 が基準です。
            API は heavy use でも思ったより安く、運用対象を限定すれば月額数十ドルで回るケースもあります。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-900">選択肢</th>
                <th className="px-4 py-3 font-semibold text-gray-900">目安費用</th>
                <th className="px-4 py-3 font-semibold text-gray-900">向いている使い方</th>
                <th className="px-4 py-3 font-semibold text-gray-900">元が取りやすい条件</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((row) => (
                <tr key={row.option} className="border-t border-gray-200 align-top">
                  <th className="px-4 py-4 font-semibold text-gray-900">{row.option}</th>
                  <td className="px-4 py-4">{row.fee}</td>
                  <td className="px-4 py-4">{row.fit}</td>
                  <td className="px-4 py-4">{row.breakEven}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>

          <p className="mt-8 text-base leading-8 text-gray-700">
            API 料金は OpenAI 公式で GPT-5.4 の input が $2.50 / 1M tokens、output が $15.00 / 1M tokens
            （確認日: 2026-03-06）です。月額イメージにすると次のくらいです。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-900">運用シナリオ</th>
                <th className="px-4 py-3 font-semibold text-gray-900">月間 input</th>
                <th className="px-4 py-3 font-semibold text-gray-900">月間 output</th>
                <th className="px-4 py-3 font-semibold text-gray-900">概算</th>
              </tr>
            </thead>
            <tbody>
              {apiCostRows.map((row) => (
                <tr key={row.scenario} className="border-t border-gray-200 align-top">
                  <th className="px-4 py-4 font-semibold text-gray-900">{row.scenario}</th>
                  <td className="px-4 py-4">{row.input}</td>
                  <td className="px-4 py-4">{row.output}</td>
                  <td className="px-4 py-4">{row.estimate}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <Callout type="tip" title="コストより先に見るもの">
            まずは `月いくらか` ではなく、`月に何時間戻るか` で見た方が判断しやすくなります。会議録、
            メール、Excel の3つだけでも、1日15分戻れば Plus の回収ラインは超えやすいです。
          </Callout>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="limits">注意点・限界</ArticleH2>
          <div className="space-y-5 text-base leading-8 text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">1. 機密情報はそのまま入れない。</span>
              業務で一番先に決めるべきなのは、`何をAIに渡してよいか` です。顧客名、個人情報、未公開の条件、
              人事評価、契約の原本は、社内ルールに従って匿名化や利用プランを選びます。
            </p>
            <p>
              <span className="font-semibold text-gray-900">2. 数字・日付・契約文言は必ず人が見る。</span>
              GPT-5.4は誤りが減っていますが、ゼロにはなりません。特に金額、締切、数式、責任範囲は最後に人が持つ前提で設計します。
            </p>
            <p>
              <span className="font-semibold text-gray-900">3. 1M context を ChatGPT Web と同一視しない。</span>
              1M context は主に API / Codex 文脈での強みです。Web版で同じ感覚になるとは限らないので、長文案件は実運用前に検証が必要です。
            </p>
            <p>
              <span className="font-semibold text-gray-900">4. 自動化率はモデルよりナレッジ整備に左右される。</span>
              サポート対応で 70〜80% に近づけるかは、FAQ の整備、エスカレーション基準、ログの品質に大きく依存します。モデルだけ入れても再現しません。
            </p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">FAQ</ArticleH2>
          <RichFAQ items={[...faqItems]} />
        </motion.section>

        <motion.section
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox analyticsSource="gpt54_business_use_cases_bottom" />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 rounded-3xl bg-slate-900 p-8 text-white sm:p-10"
        >
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            AI活用の判断軸とキャリアを同時に整えたい方へ
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base">
            GPT-5.4のような新しいモデルは、触るだけでも価値があります。ただ、実務で続く差を作るのは、
            `どの業務に当てるかを判断する力` と `続けて改善できる学習設計` です。AIリブートアカデミーでは、
            特定ツールの操作習得ではなく、生成AI活用力、自己理解・キャリアデザイン、仲間と共に学ぶ環境の3本柱を一体で設計しています。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">生成AI活用力</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                仕事でAIをどこに当てると効果が出るかを、業務単位で判断できる力を育てます。
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">自己理解・キャリアデザイン</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                AIを使って自分の強みや価値観を言語化し、次の役割やキャリアの方向性を整理します。
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">仲間と共に学ぶ環境</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                一人で試して終わらせず、対話と共有を通じて実務定着まで続ける環境を整えます。
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/academy"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
