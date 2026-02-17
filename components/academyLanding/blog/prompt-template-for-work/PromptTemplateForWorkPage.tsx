"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type PromptTemplateForWorkPageProps = {
  faqItems: readonly FAQItem[];
};

type PromptTemplate = {
  title: string;
  canDo: string;
  before: string;
  after: string;
  prompt: string;
};

type TemplateGroup = {
  id: string;
  title: string;
  description: string;
  templates: readonly PromptTemplate[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const promptStructureItems = [
  {
    label: "役割指定（Role）",
    detail:
      "誰として回答するかを指定します。例: 「あなたは法人営業のマネージャーです」。判断基準が揃い、回答のぶれを減らせます。",
  },
  {
    label: "目的・依頼内容（Task）",
    detail:
      "何を達成したいか（目的）と、何を出してほしいか（依頼内容）を1〜2文で固定します。例: 「打ち合わせ日程を再調整したい。候補日を3つ提示する返信メールを作る」。",
  },
  {
    label: "文脈（Context）",
    detail:
      "対象読者、期限、前提情報、制約を書きます。例: 「取締役会向け、3分で読める長さ、数値は3つまで」。実務で使える精度になります。",
  },
  {
    label: "出力形式指定（Format）",
    detail:
      "提出形式を固定します。例: 「件名 + 本文」「表形式」「箇条書き」。レビュー工数を減らし、再利用しやすくなります。",
  },
] as const;

const promptComparison = {
  bad: "取引先に返信して",
  good:
    "あなたは営業アシスタントです。以下の要件で取引先への返信メールを作成してください。\n- 目的: 打ち合わせ日程の再調整\n- 条件: 候補日を3つ提示、謝意を入れる、250文字以内\n- 出力形式: 件名 / 本文",
} as const;

const templateGroups: readonly TemplateGroup[] = [
  {
    id: "email-templates",
    title: "メール作成テンプレート",
    description: "依頼・お詫び・日程調整・英訳まで、実務で頻出するメール業務を短時間で処理するための型です。",
    templates: [
      {
        title: "依頼メール（社内向け）",
        canDo: "依頼背景と期限を明確にした社内依頼メールを、敬意を保って作成できます。",
        before: "資料作成お願い。金曜までにお願いします。",
        after:
          "件名: 【依頼】営業提案資料の更新（2/21 金 17:00まで）\n本文: 背景・依頼内容・提出形式・期限・不明点連絡先が整理され、受け手がすぐ着手できる。",
        prompt:
          "あなたは営業部のチームリーダーです。社内メンバーに依頼メールを作成してください。\n\n【依頼先】{部署・氏名}\n【依頼内容】{依頼したい作業}\n【背景】{依頼理由}\n【期限】{YYYY/MM/DD HH:mm}\n【提出形式】{スライド/Excel/メモ など}\n\n条件:\n- 冒頭で依頼の目的を1文で伝える\n- 本文は「依頼内容」「期限」「補足情報」の順に整理\n- 相手への配慮を入れ、命令口調は避ける\n- 250〜350文字\n\n出力形式:\n件名:\n本文:",
      },
      {
        title: "お詫びメール（納期遅延）",
        canDo: "遅延理由・再提出日・再発防止策を含むお詫びメールを、信頼を損なわずに作成できます。",
        before: "遅れてすみません。来週出します。",
        after:
          "件名: 【お詫び】ご依頼資料の提出遅延について\n本文: 遅延理由、現状、再提出日時、再発防止策、謝意が順序立てて記載される。",
        prompt:
          "あなたは法人営業担当です。納期遅延のお詫びメールを作成してください。\n\n【宛先】{会社名・氏名}\n【遅延対象】{資料名/成果物名}\n【遅延理由】{事実ベースで記載}\n【新しい提出予定】{YYYY/MM/DD HH:mm}\n【再発防止策】{1〜2点}\n\n条件:\n- 言い訳調にしない\n- 事実と謝罪を分けて書く\n- 相手に必要な次アクションがあれば明記\n\n出力形式:\n件名:\n本文:",
      },
      {
        title: "日程調整メール（候補日提示）",
        canDo: "候補日を複数提示しながら、相手が返信しやすい日程調整メールを作成できます。",
        before: "打ち合わせ日程どうしましょうか？",
        after:
          "件名: 【日程調整】次回お打ち合わせのお願い\n本文: 候補日時3つ、所要時間、実施方法（オンライン/対面）、返信依頼が明確になる。",
        prompt:
          "あなたはカスタマーサクセス担当です。商談の日程調整メールを作成してください。\n\n【宛先】{会社名・氏名}\n【打ち合わせ目的】{議題}\n【候補日時】{候補1/候補2/候補3}\n【所要時間】{30分など}\n【実施形式】{Zoom/対面}\n\n条件:\n- 候補日時は箇条書きで見やすく提示\n- 相手に選択してもらう文面にする\n- 丁寧で簡潔な日本語\n\n出力形式:\n件名:\n本文:",
      },
      {
        title: "メール英訳（日本語→英語）",
        canDo: "日本語の社外メールを、丁寧で自然なビジネス英語に変換できます。",
        before: "英語にして: 先日はありがとうございました。資料を添付します。",
        after:
          "Subject と本文がビジネス英語で自然に整い、過度に直訳的な表現を避けた文面になる。",
        prompt:
          "あなたはバイリンガルのビジネスコミュニケーション担当です。次の日本語メールを、自然なビジネス英語に翻訳してください。\n\n【日本語原文】\n{ここに本文}\n\n条件:\n- 直訳ではなく、英語圏のビジネス文脈で自然な表現にする\n- 丁寧さは維持する\n- 専門用語は意味を変えずに翻訳する\n\n出力形式:\nSubject:\nBody:\n\n補足:\n- 言い換え候補があれば2案まで提示",
      },
    ],
  },
  {
    id: "minutes-summary-templates",
    title: "議事録・要約テンプレート",
    description: "会議メモや報告文を、意思決定と実行に直結する形式へ整えるためのテンプレートです。",
    templates: [
      {
        title: "会議メモ→議事録（構造化）",
        canDo: "ラフな会議メモを、決定事項・未決事項・アクションに整理した議事録へ変換できます。",
        before: "会議メモを貼るのでまとめてください。",
        after:
          "「決定事項」「未決事項」「アクション（担当者・期限）」が明確な議事録に整理され、共有しやすくなる。",
        prompt:
          "あなたはPMO担当です。以下の会議メモを議事録に整形してください。\n\n【会議メモ】\n{ここにメモを貼る}\n\n条件:\n- 決定事項と未決事項を分ける\n- アクションは担当者と期限を明記\n- 事実ベースで記載し、憶測は入れない\n\n出力形式:\n# 会議概要\n# 決定事項\n# 未決事項\n# アクションアイテム（担当者/期限）",
      },
      {
        title: "1on1メモ要約",
        canDo: "1on1の会話ログを、フォローアップしやすい要点メモへ変換できます。",
        before: "1on1ログを短くして。",
        after:
          "本人課題、上司支援事項、次回確認ポイントが3ブロックでまとまり、面談後の対応が明確になる。",
        prompt:
          "あなたは人材開発担当です。次の1on1メモを要約してください。\n\n【1on1ログ】\n{ここにログを貼る}\n\n条件:\n- 発言内容を事実ベースで整理\n- 「本人の課題」「上司の支援」「次回確認事項」に分ける\n- 各項目は3行以内\n\n出力形式:\n# 本人の課題\n# 上司の支援\n# 次回確認事項",
      },
      {
        title: "週報要約（チーム共有用）",
        canDo: "長めの週報を、チームが把握しやすい進捗サマリーに圧縮できます。",
        before: "今週の報告を見やすくまとめて。",
        after:
          "成果・課題・来週計画の3要素で整ったサマリーとなり、朝会でそのまま共有できる。",
        prompt:
          "あなたはプロジェクトマネージャーです。以下の週報をチーム共有用に要約してください。\n\n【週報本文】\n{ここに本文を貼る}\n\n条件:\n- 成果、課題、来週の計画を分ける\n- 数値や期限は優先して残す\n- 200〜300文字で簡潔に\n\n出力形式:\n# 今週の成果\n# 課題\n# 来週の計画",
      },
      {
        title: "報告書要約（役員向け）",
        canDo: "詳細な報告書を、役員向けに短時間で読める要約へ変換できます。",
        before: "この報告書を短くして。",
        after:
          "要点3つ、重要数値、意思決定が必要な論点が分離され、3分で読める構成になる。",
        prompt:
          "あなたは経営企画担当です。次の報告書を役員向けに要約してください。\n\n【報告書本文】\n{ここに本文を貼る}\n\n条件:\n- 要点は最大3つ\n- 重要数値は原文どおりに引用\n- 意思決定が必要な論点を明示\n\n出力形式:\n# エグゼクティブサマリー（3分で読める）\n# 重要数値\n# 意思決定が必要な論点",
      },
    ],
  },
  {
    id: "document-templates",
    title: "資料作成テンプレート",
    description: "企画書・提案書・プレゼン資料の下書きを高速化し、検討すべきポイントを先に可視化します。",
    templates: [
      {
        title: "企画書の骨子作成",
        canDo: "企画書の章立てと論点を短時間で作成し、検討漏れを減らせます。",
        before: "新規企画の資料を作って。",
        after:
          "背景、課題、提案、実行計画、KPIが揃った骨子が出力され、そのまま資料化しやすい。",
        prompt:
          "あなたは事業企画担当です。次の条件で企画書骨子を作成してください。\n\n【テーマ】{企画テーマ}\n【対象者】{経営層/部門責任者/現場}\n【目的】{達成したい成果}\n【制約】{予算/期間/体制}\n\n条件:\n- 背景、課題、提案、実行計画、KPIを含める\n- 読み手が意思決定しやすい順序にする\n- 各項目は2〜3行で簡潔に\n\n出力形式:\n1. 背景\n2. 現状課題\n3. 提案概要\n4. 実行計画\n5. KPI",
      },
      {
        title: "プレゼン構成案（10枚）",
        canDo: "発表目的に沿ったスライド構成案を、聞き手に合わせて設計できます。",
        before: "プレゼン資料の流れを作って。",
        after:
          "導入から結論までの10枚構成が出力され、各スライドの狙いとメッセージが明確になる。",
        prompt:
          "あなたはプレゼン設計の専門家です。次の条件でスライド構成案を作成してください。\n\n【テーマ】{発表テーマ}\n【対象者】{取締役会/顧客/社内}\n【持ち時間】{分}\n【最終ゴール】{承認獲得/理解促進/合意形成}\n\n条件:\n- 10枚構成を基本とする\n- 各スライドに「狙い」と「話す要点」を付ける\n- 結論は冒頭で先出しする\n\n出力形式:\n| No | スライドタイトル | 狙い | 話す要点 |",
      },
      {
        title: "提案書ドラフト（顧客向け）",
        canDo: "顧客課題に合わせた提案書の初稿を、論理的な流れで作成できます。",
        before: "提案書のたたきを作って。",
        after:
          "顧客課題、提案内容、導入効果、スケジュール、費用の章立てで、レビュー可能な初稿が整う。",
        prompt:
          "あなたはコンサルタントです。顧客向け提案書のドラフトを作成してください。\n\n【顧客業種】{業種}\n【課題】{顧客の課題}\n【提案範囲】{提供するサービス}\n【期待成果】{改善したい指標}\n\n条件:\n- 課題と提案の対応関係を明示\n- 効果は定量・定性で分ける\n- 読み手が次の判断をしやすいように構成\n\n出力形式:\n# 背景と課題\n# 提案内容\n# 導入効果\n# 実施スケジュール\n# 費用と前提",
      },
      {
        title: "稟議書下書き",
        canDo: "社内承認に必要な観点を押さえた稟議書の下書きを作成できます。",
        before: "稟議用に文章作って。",
        after:
          "目的・費用対効果・リスク・実施計画が揃った稟議文案になり、承認フローに回しやすい。",
        prompt:
          "あなたは経営管理部門の担当者です。次の情報をもとに稟議書の下書きを作成してください。\n\n【施策名】{施策名}\n【目的】{導入目的}\n【費用】{初期/運用}\n【期待効果】{定量・定性}\n【リスク】{想定リスク}\n\n条件:\n- 承認者が確認しやすい順に整理\n- 効果と費用の関係を明確にする\n- 前提条件があれば明示する\n\n出力形式:\n# 目的\n# 施策概要\n# 費用\n# 期待効果\n# リスクと対応策",
      },
    ],
  },
  {
    id: "data-analysis-templates",
    title: "データ分析テンプレート",
    description: "ExcelやCSVの数字から傾向・示唆を抽出し、報告まで一気通貫で進めるための型です。",
    templates: [
      {
        title: "Excelデータの傾向分析",
        canDo: "Excel/CSVの集計結果から増減トレンドと要因仮説を整理できます。",
        before: "この売上データを分析して。",
        after:
          "主要トレンド、増減要因仮説、追加で確認すべき指標が分かれ、次の分析アクションが明確になる。",
        prompt:
          "あなたはデータアナリストです。以下のExcel/CSV集計結果から傾向分析を行ってください。\n\n【データ概要】{列名・期間・件数}\n【データ本文】\n{ここに貼る}\n\n条件:\n- 主要トレンドを3点抽出\n- トレンドごとに要因仮説を1つ以上提示\n- 分析の限界や不足データを明記\n\n出力形式:\n# 主要トレンド\n# 要因仮説\n# 追加で確認すべきデータ",
      },
      {
        title: "定例レポート生成（月次）",
        canDo: "月次データを経営会議向けのレポート文面に整えられます。",
        before: "先月の数字をレポートにして。",
        after:
          "サマリー、主要数値、変動理由、次月アクションが揃い、会議資料へ転記しやすくなる。",
        prompt:
          "あなたは経営企画のアナリストです。以下の月次データをもとに定例レポートを作成してください。\n\n【対象期間】{YYYY/MM}\n【KPI】{売上・CVR・解約率 など}\n【データ】\n{ここに数値を貼る}\n\n条件:\n- 先月比/前年同月比を明記\n- 良化要因と悪化要因を分ける\n- 来月の打ち手を3点提案\n\n出力形式:\n# 月次サマリー\n# 主要KPI\n# 要因分析\n# 来月アクション",
      },
      {
        title: "異常値の一次切り分け",
        canDo: "急な数値変動を検知したときに、確認順序を整理して原因調査を始められます。",
        before: "CVRが下がった。原因見て。",
        after:
          "データ欠損・計測不具合・施策影響・季節性の観点で確認項目が整理され、調査が止まらない。",
        prompt:
          "あなたはWebアナリストです。次の異常値について一次切り分けをしてください。\n\n【異常内容】{例: CVRが前週比-35%}\n【対象期間】{期間}\n【関連施策】{配信/LP改修/価格変更など}\n\n条件:\n- まず計測不具合の可能性を確認\n- 次に施策・外部要因・季節性を整理\n- 追加取得すべきデータを提示\n\n出力形式:\n# 可能性の高い原因\n# 確認手順\n# 追加データ",
      },
      {
        title: "セグメント別比較分析",
        canDo: "顧客セグメントごとの差分を分析し、優先施策を判断できます。",
        before: "顧客データを比較して。",
        after:
          "セグメント別の強み・弱みが表で整理され、どの層に施策を打つべきか判断しやすくなる。",
        prompt:
          "あなたはマーケティングアナリストです。セグメント別比較分析を行ってください。\n\n【セグメント定義】{新規/既存、企業規模、業種など}\n【比較指標】{売上、継続率、LTV、CVR など}\n【データ】\n{ここに貼る}\n\n条件:\n- 指標ごとの差分を明示\n- 成果が高いセグメントの特徴を言語化\n- 次の優先施策を2〜3点提案\n\n出力形式:\n| セグメント | 主要指標 | 傾向 | 優先施策 |",
      },
    ],
  },
  {
    id: "idea-generation-templates",
    title: "アイデア出しテンプレート",
    description: "発散と収束を分けて進めることで、実行可能な施策までつなげるためのテンプレートです。",
    templates: [
      {
        title: "ブレスト（20案）",
        canDo: "短時間で量を出し、検討の土台になるアイデア候補を広く集められます。",
        before: "新しい施策を考えて。",
        after:
          "視点の異なる20案が並び、既存施策の延長だけでなく新規案も比較しやすくなる。",
        prompt:
          "あなたは新規事業のファシリテーターです。次のテーマでブレスト案を出してください。\n\n【テーマ】{例: 既存顧客の継続率向上}\n【制約】{予算・人員・期間}\n【対象顧客】{対象セグメント}\n\n条件:\n- 20案を列挙\n- 既存案の延長以外の観点を最低5案入れる\n- 1案1行、40文字以内\n\n出力形式:\n1. ...\n2. ...",
      },
      {
        title: "SWOT分析",
        canDo: "強み・弱み・機会・脅威を整理し、戦略の優先度を明確にできます。",
        before: "SWOTを作って。",
        after:
          "SWOT4象限と、そこから導く戦略案（攻め/守り）がセットで出力される。",
        prompt:
          "あなたは事業戦略コンサルタントです。次の情報からSWOT分析を実施してください。\n\n【対象事業】{事業名}\n【現状】{市場・競合・社内状況}\n【目標】{達成したい状態}\n\n条件:\n- SWOTを4象限で整理\n- 各象限は3項目以上\n- SWOTを踏まえた優先戦略を3つ提案\n\n出力形式:\n# Strength\n# Weakness\n# Opportunity\n# Threat\n# 優先戦略",
      },
      {
        title: "ペルソナ作成",
        canDo: "施策設計に使える具体的なターゲット像を短時間で作成できます。",
        before: "ターゲット像を作って。",
        after:
          "属性・課題・意思決定要因・情報収集行動まで定義されたペルソナが作成される。",
        prompt:
          "あなたはマーケティングプランナーです。次の商材向けにペルソナを作成してください。\n\n【商材】{サービス名}\n【想定顧客】{業種/役職/年齢層}\n【解決したい課題】{課題}\n\n条件:\n- 1人の具体的な人物像として記述\n- 日常業務、課題、意思決定基準を含める\n- 施策に使えるインサイトを最後に3点まとめる\n\n出力形式:\n# ペルソナ概要\n# 業務と課題\n# 情報収集行動\n# 意思決定基準\n# 施策インサイト",
      },
      {
        title: "施策優先順位づけ（Impact × Effort）",
        canDo: "複数アイデアを実行優先度で並べ替え、着手順を決められます。",
        before: "案が多いので優先順位を付けて。",
        after:
          "Impact/Effortの4象限で分類され、今すぐ着手すべき施策が明確になる。",
        prompt:
          "あなたはプロジェクトマネージャーです。以下の施策案をImpact × Effortで評価し、優先順位をつけてください。\n\n【施策案】\n{案を箇条書きで貼る}\n【評価軸】{売上影響、実装工数、リスクなど}\n\n条件:\n- 各施策を4象限に分類\n- 優先順位の理由を1行で記載\n- 直近30日で着手すべき施策を明示\n\n出力形式:\n| 施策 | Impact | Effort | 優先順位 | 理由 |",
      },
    ],
  },
] as const;

const improvementTips = [
  "対象読者を明示する: 「社外顧客向け」「役員向け」など読み手を指定すると文体が安定します。",
  "制約条件を先に置く: 文字数、期限、禁止表現を先に書くと無駄な修正が減ります。",
  "評価観点を入れる: 「漏れなく」「誤解なく」「意思決定しやすく」など品質基準を明記します。",
  "再利用前提で変数化する: {宛先} {期限} {目的} のようにし、チームで共有しやすくします。",
  "1回で決めずに2回回す: 初稿→改善指示の2段階にすると実務品質に近づきます。",
] as const;

const keywordTags = ["仕事用プロンプト", "AIメール作成", "AI議事録作成", "資料作成テンプレート"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "prompt-basics", label: "プロンプトの基本原則" },
  { id: "email-templates", label: "メール作成テンプレート" },
  { id: "minutes-summary-templates", label: "議事録・要約テンプレート" },
  { id: "document-templates", label: "資料作成テンプレート" },
  { id: "data-analysis-templates", label: "データ分析テンプレート" },
  { id: "idea-generation-templates", label: "アイデア出しテンプレート" },
  { id: "improvement-tips", label: "プロンプト改善のコツ5選" },
  { id: "faq", label: "FAQ" },
] as const;

export default function PromptTemplateForWorkPage({ faqItems }: PromptTemplateForWorkPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-4xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "仕事用プロンプト" },
          ]}
        />
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成を最短で回す
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            毎回プロンプトを考えていると、品質がぶれたり、修正指示が増えたりして「結局時間がかかる」状態になりがちです。
            この記事では、業務カテゴリ別のテンプレートと、Role/Task/Context/Formatで最短で整えるコツをまとめました。
            筆者はまず「日程調整メール」と「月次レポートのコメント下書き」を型にすると、手戻りが一気に減ると感じています。基礎から学びたい方は
            <Link href="/academy" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIリブートアカデミー
            </Link>
            や
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              学習ロードマップ
            </Link>
            もあわせて確認してください。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            まずは自分の業務で頻度が高いカテゴリから1つ選び、テンプレートをそのままコピーして使ってみてください。1回使って不足点を追記するだけで、
            明日から使える自分専用テンプレートに育てられます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="prompt-basics" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プロンプトの基本原則
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 実務のプロンプトは「Role/Task/Context/Format」を先に固定すると、ツールが変わっても品質が安定します。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            まずは以下の4点を最初に入れ、そのうえで「期限」「文字数」「相手」「禁止事項」など業務ごとの条件を足してください。
          </p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-gray-700">
            {promptStructureItems.map((item) => (
              <li key={item.label} className="rounded-lg border border-gray-200 p-4">
                <h3 className="text-base font-semibold text-gray-900">{item.label}</h3>
                <p className="mt-2">{item.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <section className="rounded-lg border border-rose-200 bg-rose-50 p-4">
              <h3 className="text-sm font-semibold text-rose-900">Before（曖昧な指示）</h3>
              <pre className="mt-3 overflow-x-auto rounded-md bg-rose-900/90 p-3 text-xs leading-6 text-rose-50">
                <code>{promptComparison.bad}</code>
              </pre>
            </section>
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-900">After（改善された指示）</h3>
              <pre className="mt-3 overflow-x-auto rounded-md bg-emerald-900/90 p-3 text-xs leading-6 text-emerald-50">
                <code>{promptComparison.good}</code>
              </pre>
            </section>
          </div>
        </motion.section>

        {templateGroups.map((group, groupIndex) => (
          <motion.section
            key={group.title}
            className="mt-14 rounded-lg border border-gray-200 p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionReveal}
            transition={{ duration: 0.45, delay: groupIndex * 0.03, ease: "easeOut" }}
          >
            <h2 id={group.id} className="scroll-mt-28 text-2xl font-bold text-gray-900">
              {group.title}
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-gray-900">
              結論: まずはテンプレートをコピペして{`{変数}` }だけ差し替えるのが最短です。出力を1回見て不足条件を追記すると、すぐ実務で回せる形になります。
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-700">{group.description}</p>
            <div className="mt-6 space-y-6">
              {group.templates.map((template) => (
                <section key={template.title} className="rounded-lg border border-gray-100 bg-gray-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{template.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700">
                    <span className="font-semibold text-gray-900">このプロンプトでできること:</span> {template.canDo}
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <section className="rounded-md border border-rose-200 bg-rose-50 p-3">
                      <p className="text-xs font-semibold text-rose-900">Before（よくある曖昧な依頼）</p>
                      <pre className="mt-2 overflow-x-auto whitespace-pre-wrap text-xs leading-6 text-rose-900">
                        <code>{template.before}</code>
                      </pre>
                    </section>
                    <section className="rounded-md border border-emerald-200 bg-emerald-50 p-3">
                      <p className="text-xs font-semibold text-emerald-900">After（テンプレート適用後のイメージ）</p>
                      <pre className="mt-2 overflow-x-auto whitespace-pre-wrap text-xs leading-6 text-emerald-900">
                        <code>{template.after}</code>
                      </pre>
                    </section>
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-gray-500">コピペ用プロンプト</p>
                  <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                    <code>{template.prompt}</code>
                  </pre>
                </section>
              ))}
            </div>
          </motion.section>
        ))}

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="improvement-tips" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プロンプト改善のコツ5選
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: うまくいかないときは「条件が曖昧」「出力形式が未固定」「前提が不足」のどれかです。直し方を型で覚えると再現性が上がります。
          </p>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-gray-700">
            {improvementTips.map((tip, index) => (
              <li key={tip} className="rounded-lg border border-gray-200 p-4">
                <h3 className="text-base font-semibold text-gray-900">コツ {index + 1}</h3>
                <p className="mt-2">{tip}</p>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="advanced-usage" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            さらに効果的に使いこなすには
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 個人で完結させず、チームで「テンプレ・レビュー観点・禁止事項」を共通化すると効果が最大化します。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            アカデミーでは業務別テンプレートの設計、評価観点の作り方、社内展開まで実務ベースで学べます。
          </p>
          <ul className="mt-6 space-y-2 text-sm leading-7 text-gray-700">
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミーの講座一覧を見る
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AI学習ロードマップを読む
              </Link>
            </li>
            <li>
              <Link href="/briefing" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                無料説明会で業務別の活用プランを相談する
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: よくあるつまずきは「情報不足」と「出力条件の未固定」です。Q&Aで解決の近道を整理します。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/corporate-ai-adoption-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                中小企業の生成AI導入ガイド｜失敗しない進め方と費用感 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集｜営業・マーケ・管理部門の活用ポイントを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-coding-for-beginners"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/github-copilot-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                GitHub Copilotの使い方｜導入・設定・効率化のコツを初心者向けに解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/briefing" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                無料説明会ページ
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="mastering-next" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            もっと使いこなしたい方へ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 自分の業務フローに最適化するなら、テンプレを「入力フォーム化」して運用ルールまでセットで作るのが近道です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            無料説明会では、実務フローに合わせた活用方法を確認し、現場で定着させる運用設計まで具体化できます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/briefing"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料説明会に参加する
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              講座ラインナップを見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
