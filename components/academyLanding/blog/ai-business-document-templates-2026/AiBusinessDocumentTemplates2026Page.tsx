"use client";

import { motion } from "framer-motion";
import { AlertCircle, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type TemplateItem = {
  name: string;
  scene: string;
  prompt: string;
  tip: string;
};

type TemplateCategory = {
  id: string;
  title: string;
  description: string;
  templates: readonly TemplateItem[];
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const keywordTags = [
  "AI 議事録 テンプレート",
  "ChatGPT ビジネスメール",
  "AI 報告書 作成",
  "生成AI 文書 テンプレート",
  "AI 企画書 プロンプト",
] as const;

const tocItems = [
  { id: "answer-box", label: "このテンプレート集でできること" },
  { id: "how-to", label: "AI文書作成の基本3ステップ" },
  { id: "category-minutes", label: "カテゴリ1: 議事録・会議メモ" },
  { id: "category-mail", label: "カテゴリ2: ビジネスメール" },
  { id: "category-report", label: "カテゴリ3: 報告書・レポート" },
  { id: "category-proposal", label: "カテゴリ4: 企画書・提案書" },
  { id: "category-others", label: "カテゴリ5: その他便利テンプレート" },
  { id: "security", label: "注意点（個人情報・機密情報）" },
  { id: "faq", label: "FAQ" },
  { id: "summary", label: "まとめ" },
] as const;

const usageSteps = [
  {
    title: "ステップ1: テンプレートをコピペし、[ ]の項目だけ埋める",
    body: "[会社名][会議名][日付][目的]など、変数部分だけ先に入力してから実行します。",
  },
  {
    title: "ステップ2: 元データを貼り、出力形式を固定する",
    body: "議事メモ、箇条書き、売上データなどの素材を貼り、見出し構成を指定すると品質が安定します。",
  },
  {
    title: "ステップ3: 最終確認は人が行う",
    body: "固有名詞、数字、日付、法的表現、機密情報の扱いは必ず人が確認してから提出してください。",
  },
] as const;

const securityPoints = [
  "社外秘や個人情報は、[顧客A][案件B]のように置換してからAIへ入力する",
  "会社の情報セキュリティルール・AI利用ガイドラインを最優先する",
  "謝罪文・契約文・法務関連文書は、AI出力をそのまま送信しない",
  "プロンプト内に認証情報、口座情報、住所、連絡先などを入れない",
] as const;

const templateCategories: readonly TemplateCategory[] = [
  {
    id: "category-minutes",
    title: "カテゴリ1: 議事録・会議メモ（10テンプレート）",
    description: "会議後のメモを、決定事項と次アクションが明確な文書に整えるテンプレートです。",
    templates: [
      {
        name: "定例会議の議事録作成",
        scene: "週次・月次の会議内容を標準フォーマットで残したい時。",
        prompt: `あなたは[会社名]の議事録担当です。以下から議事録を作成してください。
[会議名]: [会議名]
[日時]: [日時]
[参加者]: [参加者]
[会議メモ]: [ここに貼る]
出力: 1.議題 2.主要論点 3.決定事項 4.次回までの宿題`,
        tip: "会議名と目的を先頭に入れると、後から検索しやすい議事録になります。",
      },
      {
        name: "プロジェクト会議の議事録（決定事項・TODO付き）",
        scene: "PJ会議後に担当者と期限まで明確にしたい時。",
        prompt: `次の会議メモを、プロジェクト会議議事録に変換してください。
[プロジェクト名]: [プロジェクト名]
[メモ]: [ここに貼る]
必須: 決定事項 / 未決事項 / TODO(担当者・期限・優先度) / リスク
文体: 実務向けに簡潔`,
        tip: "TODOは「動詞で開始」させると実行率が上がります。",
      },
      {
        name: "会議メモから正式な議事録への整形",
        scene: "箇条書きメモを社内配布可能な文書にしたい時。",
        prompt: `以下のラフメモを正式な議事録に整形してください。
[ラフメモ]: [ここに貼る]
条件:
- です・ます調
- 不明点は「要確認」と明記
- 見出し構成: 概要 / 論点 / 決定事項 / 次アクション`,
        tip: "「不明点は推測しない」と入れると誤情報を抑えられます。",
      },
      {
        name: "オンライン会議の要約",
        scene: "長い文字起こしを短く共有したい時。",
        prompt: `オンライン会議ログを要約してください。
[ログ]: [ここに貼る]
出力条件:
- 300〜500字
- 結論先出し
- 決定事項とアクションを分離
- 最後に「次回確認事項」`,
        tip: "共有先が役員か現場かを指定すると、要約の粒度が最適化されます。",
      },
      {
        name: "社外との打ち合わせ議事録",
        scene: "取引先との協議内容を丁寧に記録したい時。",
        prompt: `社外打ち合わせの議事録を作成してください。
[先方企業]: [企業名]
[議題]: [議題]
[メモ]: [ここに貼る]
出力: 協議内容 / 合意事項 / 双方の宿題 / 次回予定
トーン: 丁寧で誤解のない表現`,
        tip: "社外文書は断定を避け、合意済み事項を明示してください。",
      },
      {
        name: "ブレインストーミング結果の整理",
        scene: "散らばったアイデアを実行可能な案に収束させたい時。",
        prompt: `ブレスト結果を整理してください。
[テーマ]: [テーマ]
[ブレストメモ]: [ここに貼る]
出力:
1. アイデア統合
2. 評価軸(効果/難易度/コスト)
3. 優先度A-B-C
4. 次回までの検証タスク`,
        tip: "評価軸を先に固定すると、会議後の合意形成が速くなります。",
      },
      {
        name: "経営会議の議事録（機密対応版）",
        scene: "機密情報を含む会議を安全に記録したい時。",
        prompt: `経営会議メモを機密対応版の議事録にしてください。
[メモ]: [ここに貼る]
ルール:
- 個人名は役職表記へ置換
- 金額は必要ならレンジ化([金額帯A])
- 冒頭に「社外共有禁止」を追記
- 決裁事項を独立見出しにする`,
        tip: "AIに渡す前に固有名詞を置換すると漏えいリスクをさらに抑えられます。",
      },
      {
        name: "進捗確認会議の議事録",
        scene: "予定と実績の差分を明確に残したい時。",
        prompt: `進捗会議の議事録を作成してください。
[会議メモ]: [ここに貼る]
必須項目:
- 予定 vs 実績
- 遅延要因
- リカバリープラン
- 担当者別の次アクション`,
        tip: "予定vs実績は数値で入れると、次回レビューが容易になります。",
      },
      {
        name: "クレーム・問題解決会議の議事録",
        scene: "トラブル対応の経緯と再発防止策を残したい時。",
        prompt: `問題解決会議の議事録を作成してください。
[事象]: [内容]
[会議メモ]: [ここに貼る]
出力:
1. 事象概要(5W1H)
2. 原因分析(一次原因/根本原因)
3. 即時対応
4. 再発防止策`,
        tip: "感想ではなく事実ベースで分けると、監査・引き継ぎで強い記録になります。",
      },
      {
        name: "年度予算会議の議事録",
        scene: "予算会議の判断内容を部門横断で共有したい時。",
        prompt: `年度予算会議の議事録を作成してください。
[会議メモ]: [ここに貼る]
出力条件:
- 承認/保留/却下を分ける
- 前年比較の要点を記載
- 追加提出データを列挙
- 次回会議までの課題`,
        tip: "承認・保留・却下を分離すると、会議後の調整が大幅に減ります。",
      },
    ],
  },
  {
    id: "category-mail",
    title: "カテゴリ2: ビジネスメール（10テンプレート）",
    description: "初回連絡から謝罪・催促まで、実務で頻出するメールを短時間で作るテンプレートです。",
    templates: [
      {
        name: "初めてのお客様へのご挨拶メール",
        scene: "初回接点で印象良く自己紹介したい時。",
        prompt: `初回挨拶メールを作成してください。
[送信者]: [会社名][部署][氏名]
[宛先]: [お客様名]
[目的]: 連絡窓口の共有
出力: 件名3案 + 本文
トーン: 丁寧で簡潔`,
        tip: "件名を複数生成して、開封率が高い型を社内で蓄積してください。",
      },
      {
        name: "見積もり依頼メール",
        scene: "取引先へ漏れなく見積依頼したい時。",
        prompt: `見積もり依頼メールを作成してください。
[宛先企業]: [企業名]
[依頼内容]: [内容]
[希望納期]: [日付]
[回答期限]: [日付]
不足情報は質問形式で補ってください。`,
        tip: "仕様・数量・納品場所を箇条書きにすると見積精度が上がります。",
      },
      {
        name: "見積もり回答メール",
        scene: "受領見積に対する判断を伝える時。",
        prompt: `見積回答メールを作成してください。
[相手]: [相手名]
[見積番号]: [番号]
[判断]: [承認/再見積依頼/辞退]
[コメント]: [補足]
出力: 件名 + 本文 + 次アクション`,
        tip: "判断結果を冒頭で明示すると、往復回数を減らせます。",
      },
      {
        name: "遅延・謝罪メール",
        scene: "納期遅延を誠実に報告したい時。",
        prompt: `遅延・謝罪メールを作成してください。
[対象]: [案件名]
[当初納期]: [日付]
[新納期案]: [日付]
[原因]: [原因]
[再発防止策]: [内容]
条件: 言い訳調を避け、代替案も提示`,
        tip: "謝罪だけでなく「いつまでに何をするか」を必ず示してください。",
      },
      {
        name: "依頼のお断りメール",
        scene: "丁寧に断りつつ関係維持したい時。",
        prompt: `依頼辞退メールを作成してください。
[依頼元]: [相手名]
[依頼内容]: [内容]
[辞退理由]: [理由]
[代替提案]: [あれば]
トーン: 角が立たず、関係継続を重視`,
        tip: "「次回は検討可能」の一文を入れると関係悪化を防ぎやすいです。",
      },
      {
        name: "商談後のお礼メール",
        scene: "商談後24時間以内にフォローしたい時。",
        prompt: `商談後のお礼メールを作成してください。
[相手]: [会社名/氏名]
[商談日時]: [日時]
[主な話題]: [内容]
[次アクション]: [内容]
出力: 件名 + 本文`,
        tip: "会話で出た具体語を1つ含めるとテンプレ感が減ります。",
      },
      {
        name: "資料送付メール",
        scene: "添付資料の確認ポイントを伝えたい時。",
        prompt: `資料送付メールを作成してください。
[宛先]: [相手名]
[資料名]: [資料名]
[送付目的]: [目的]
[見てほしい点]: [3点]
[返信期限]: [日付]`,
        tip: "見てほしい点を3つまでに絞ると返信精度が上がります。",
      },
      {
        name: "リマインドメール",
        scene: "未返信案件を丁寧に催促したい時。",
        prompt: `リマインドメールを作成してください。
[宛先]: [相手名]
[前回送信日]: [日付]
[依頼内容]: [要点]
[希望返信日]: [日付]
条件: 圧をかけない。返信しやすい選択肢を提示`,
        tip: "「A案/B案で返信ください」とすると回答率が上がります。",
      },
      {
        name: "面識のない方への営業メール",
        scene: "新規開拓の初回連絡を送りたい時。",
        prompt: `初回営業メールを作成してください。
[相手企業]: [企業名]
[担当部署]: [部署]
[自社サービス]: [サービス名]
[相手メリット]: [1-2行]
条件: 150〜250字、売り込み過多を避ける`,
        tip: "相手企業の公開情報を1行入れると反応率が上がります。",
      },
      {
        name: "クレーム対応メール",
        scene: "一次返信を迅速に出したい時。",
        prompt: `クレーム一次返信メールを作成してください。
[顧客名]: [顧客名]
[クレーム内容]: [内容]
[現状]: [調査中/対応済み]
[次回連絡予定]: [日時]
条件: 受領と謝意を先に。未確定情報は断定しない`,
        tip: "一次返信はスピード優先。確定情報と調査中情報を分離してください。",
      },
    ],
  },
  {
    id: "category-report",
    title: "カテゴリ3: 報告書・レポート（10テンプレート）",
    description: "週次・月次報告や調査レポートを、意思決定しやすい形にまとめるテンプレートです。",
    templates: [
      {
        name: "週次業務報告書",
        scene: "毎週の業務内容を定型で共有したい時。",
        prompt: `週次業務報告書を作成してください。
[今週タスク]: [箇条書き]
[成果]: [内容]
[課題]: [内容]
[来週予定]: [内容]
出力: ハイライト / 成果 / 課題と対応 / 来週計画`,
        tip: "最初にハイライトを置くと、上長が短時間で把握できます。",
      },
      {
        name: "プロジェクト進捗報告書",
        scene: "PJの進行状況とリスクを報告したい時。",
        prompt: `プロジェクト進捗報告書を作成してください。
[プロジェクト名]: [名称]
[進捗率]: [数値]
[完了タスク]: [内容]
[未完タスク]: [内容]
[リスク]: [内容]
出力: サマリー / 進捗 / リスク対策 / 次計画`,
        tip: "進捗率の根拠を1行添えると、説明責任が果たしやすくなります。",
      },
      {
        name: "月次営業レポート",
        scene: "月次の売上・案件状況を経営へ共有したい時。",
        prompt: `月次営業レポートを作成してください。
[目標売上]: [金額]
[実績売上]: [金額]
[受注件数]: [件数]
[主要案件]: [内容]
[失注要因]: [内容]
出力: KPI達成状況 / 良かった点 / 改善点 / 翌月施策`,
        tip: "数字に対する原因分析まで書くと次アクションが明確になります。",
      },
      {
        name: "課題・問題報告書（原因と対策付き）",
        scene: "問題報告を原因分析まで含めて提出したい時。",
        prompt: `課題・問題報告書を作成してください。
[発生日]: [日付]
[影響範囲]: [範囲]
[原因候補]: [内容]
[応急対応]: [内容]
[恒久対策]: [内容]
出力: 事象概要 / 原因分析 / 対応状況 / 再発防止`,
        tip: "原因は事実と仮説を分けて記載すると判断しやすくなります。",
      },
      {
        name: "市場調査レポートの要約",
        scene: "調査資料を短くまとめて共有したい時。",
        prompt: `市場調査資料を要約してください。
[調査テキスト]: [ここに貼る]
条件:
- 600字以内
- 市場規模・成長率・主要トレンドを含める
- 機会とリスクを各3点
- 最後に提言`,
        tip: "読者を「経営層」「営業向け」など指定すると精度が上がります。",
      },
      {
        name: "訪問報告書",
        scene: "顧客訪問後の要点を統一フォーマットで残したい時。",
        prompt: `訪問報告書を作成してください。
[訪問先]: [企業名]
[日時]: [日時]
[同席者]: [氏名]
[話題]: [内容]
[顧客反応]: [内容]
出力: 面談要旨 / ニーズ / 次アクション`,
        tip: "顧客反応は主観ではなく発言ベースで記載してください。",
      },
      {
        name: "経費精算報告書",
        scene: "立替経費の説明をまとめたい時。",
        prompt: `経費精算報告書を作成してください。
[期間]: [期間]
[明細]: [日付・項目・金額・目的]
[合計]: [金額]
[備考]: [内容]
出力: サマリー / 明細一覧 / 承認依頼コメント`,
        tip: "目的欄を具体化すると承認が通りやすくなります。",
      },
      {
        name: "事故・インシデント報告書",
        scene: "事故発生時に初報を迅速提出したい時。",
        prompt: `インシデント報告書を作成してください。
[発生日時]: [日時]
[発生場所]: [場所]
[事象]: [内容]
[被害範囲]: [範囲]
[一次対応]: [内容]
出力: 初報 / 原因仮説 / 今後の対応`,
        tip: "初報は確定情報だけで構成し、推測は別枠にしてください。",
      },
      {
        name: "成果報告書（KPI達成状況）",
        scene: "施策の成果をKPIで振り返りたい時。",
        prompt: `成果報告書を作成してください。
[施策名]: [施策名]
[KPI目標]: [数値]
[KPI実績]: [数値]
[成功要因]: [内容]
[失敗要因]: [内容]
出力: KPI評価 / 学び / 次施策への示唆`,
        tip: "再現可能な成功要因を抽出すると次施策の精度が上がります。",
      },
      {
        name: "競合分析レポート",
        scene: "競合比較を整理して戦略検討したい時。",
        prompt: `競合分析レポートを作成してください。
[自社]: [会社名]
[競合]: [A/B/C]
[比較軸]: [価格・機能・実績・サポート]
[収集情報]: [テキスト]
出力: 比較表 / 自社優位性 / 改善点 / 次の打ち手`,
        tip: "比較軸を固定すると、月次で定点観測しやすくなります。",
      },
    ],
  },
  {
    id: "category-proposal",
    title: "カテゴリ4: 企画書・提案書（10テンプレート）",
    description: "新規施策や改善施策を、承認につながる構成で短時間に作るテンプレートです。",
    templates: [
      {
        name: "新規プロジェクト企画書の骨子",
        scene: "企画の最初のたたき台を作りたい時。",
        prompt: `新規プロジェクト企画書の骨子を作成してください。
[企画名]: [企画名]
[背景課題]: [課題]
[目的]: [目的]
[期待効果]: [効果]
[期間・体制]: [内容]
出力: 企画概要 / 実施計画 / KPI / リスク`,
        tip: "背景課題を1文で言える状態にすると全体がぶれません。",
      },
      {
        name: "上司への提案書",
        scene: "社内承認向けに提案をまとめたい時。",
        prompt: `上司向け提案書を作成してください。
[提案テーマ]: [テーマ]
[現状課題]: [課題]
[提案内容]: [内容]
[必要リソース]: [人員・予算]
[想定効果]: [効果]
出力: 1ページ要約 + 詳細`,
        tip: "コスト・効果・リスクを先頭に置くと意思決定が速くなります。",
      },
      {
        name: "社外向けサービス提案書",
        scene: "顧客向け提案の叩き台を短時間で作りたい時。",
        prompt: `社外向けサービス提案書を作成してください。
[顧客業界]: [業界]
[顧客課題]: [課題]
[提案サービス]: [内容]
[導入期間]: [期間]
[費用感]: [費用]
出力: 課題理解 / 提案内容 / 導入ステップ / 効果`,
        tip: "先に顧客課題を言語化すると提案の納得感が高まります。",
      },
      {
        name: "コスト削減提案書",
        scene: "削減施策を経営層に提案したい時。",
        prompt: `コスト削減提案書を作成してください。
[対象業務]: [業務]
[現行コスト]: [金額]
[削減案]: [内容]
[実施コスト]: [金額]
[想定削減額]: [金額]
出力: 現状 / 削減シナリオ / 回収期間 / リスク`,
        tip: "投資回収期間を明記すると承認率が上がります。",
      },
      {
        name: "新製品・新サービス企画書",
        scene: "商品・サービスの新規企画を提案する時。",
        prompt: `新製品/新サービス企画書を作成してください。
[アイデア名]: [名称]
[ターゲット]: [顧客層]
[解決課題]: [課題]
[提供価値]: [価値]
[差別化]: [差別化]
出力: コンセプト / 価値仮説 / 収益モデル / 検証計画`,
        tip: "「何をしないか」まで書くと企画の輪郭が明確になります。",
      },
      {
        name: "マーケティング施策提案書",
        scene: "集客施策を企画して説明したい時。",
        prompt: `マーケティング施策提案書を作成してください。
[目標KPI]: [数値]
[ターゲット]: [ペルソナ]
[施策候補]: [施策]
[予算]: [金額]
[期間]: [期間]
出力: 施策概要 / 実行計画 / KPI設計 / 効果測定`,
        tip: "先行指標と結果指標を分けると運用しやすくなります。",
      },
      {
        name: "業務改善提案書",
        scene: "現場オペレーションの改善提案をしたい時。",
        prompt: `業務改善提案書を作成してください。
[対象業務]: [業務]
[現状問題]: [問題]
[発生頻度]: [頻度]
[影響]: [時間/コスト]
[改善案]: [案]
出力: As-Is / To-Be / 導入手順 / 効果試算`,
        tip: "As-Is/To-Beを表形式で出すと比較が明確になります。",
      },
      {
        name: "AI導入提案書",
        scene: "部門へのAI導入を提案したい時。",
        prompt: `AI導入提案書を作成してください。
[対象部門]: [部門]
[現状課題]: [課題]
[導入候補AI]: [ツール]
[想定ユースケース]: [業務]
[期待効果]: [効果]
出力: 導入目的 / 適用範囲 / ガバナンス / PoC計画`,
        tip: "効果だけでなく情報管理ルールを必ずセットで記載してください。",
      },
      {
        name: "採用計画企画書",
        scene: "採用人数と要件を計画したい時。",
        prompt: `採用計画企画書を作成してください。
[採用目的]: [目的]
[必要人数]: [人数]
[職種]: [職種]
[採用時期]: [時期]
[予算]: [金額]
出力: 背景 / 要件定義 / 採用チャネル / スケジュール`,
        tip: "採用後オンボーディングまで含めると実行可能性が上がります。",
      },
      {
        name: "研修・教育プログラム企画書",
        scene: "社内研修の企画案を作りたい時。",
        prompt: `研修・教育プログラム企画書を作成してください。
[対象者]: [対象]
[研修テーマ]: [テーマ]
[目的]: [目的]
[実施形式]: [オンライン/対面]
[期間]: [期間]
出力: 研修設計 / カリキュラム / 評価方法 / 実施体制`,
        tip: "成果指標（行動変容・業務成果）を先に決めると設計が安定します。",
      },
    ],
  },
  {
    id: "category-others",
    title: "カテゴリ5: その他便利なテンプレート（10テンプレート）",
    description: "日常業務の周辺文書を一括で効率化するテンプレートです。",
    templates: [
      {
        name: "自己紹介文（転職・異動用）",
        scene: "新しい環境向けに自己紹介文を準備したい時。",
        prompt: `自己紹介文を作成してください。
[氏名]: [氏名]
[経歴要約]: [経歴]
[強み]: [強み]
[今後取り組みたいこと]: [内容]
出力: 200字版と400字版`,
        tip: "読み手（採用/社内）を指定すると文面が最適化されます。",
      },
      {
        name: "プレゼンスライドのアウトライン作成",
        scene: "資料作成前に構成だけ先に固めたい時。",
        prompt: `プレゼン構成案を作成してください。
[テーマ]: [テーマ]
[想定聴衆]: [聴衆]
[目的]: [目的]
条件: 10枚構成、各スライドの1行メッセージを付与
最後にCTAスライドを入れる`,
        tip: "先に骨子を作るとスライド制作時間を大きく短縮できます。",
      },
      {
        name: "SNS投稿文（LinkedIn・社内向け）",
        scene: "同テーマで媒体別に投稿文を作りたい時。",
        prompt: `SNS投稿文を作成してください。
[テーマ]: [投稿テーマ]
[目的]: [認知/採用/共有]
出力:
- LinkedIn向け300字
- 社内SNS向け200字
- ハッシュタグ5個`,
        tip: "媒体ごとに語調を分けると反応率が上がります。",
      },
      {
        name: "求人票の作成",
        scene: "採用要件を求人票に落とし込みたい時。",
        prompt: `求人票の下書きを作成してください。
[職種名]: [職種]
[仕事内容]: [内容]
[必須要件]: [要件]
[歓迎要件]: [要件]
[勤務条件]: [条件]
出力: 職務概要 / 応募要件 / 求める人物像`,
        tip: "必須と歓迎を分けると、応募の質を調整しやすくなります。",
      },
      {
        name: "社内アナウンスメント",
        scene: "社内周知を簡潔に伝えたい時。",
        prompt: `社内アナウンス文を作成してください。
[件名]: [件名]
[目的]: [目的]
[対象者]: [対象]
[実施日]: [日付]
[対応事項]: [内容]
条件: 結論先出し、200〜350字`,
        tip: "対応期限を太字で明記すると実行率が上がります。",
      },
      {
        name: "FAQ文書の作成",
        scene: "問い合わせ対応を効率化したい時。",
        prompt: `FAQ文書を作成してください。
[テーマ]: [テーマ]
[想定質問]: [箇条書き]
条件:
- Q&A形式
- 回答は100〜150字
- 最後に問い合わせ窓口`,
        tip: "実際の問い合わせログを入力に使うと現場適合性が高まります。",
      },
      {
        name: "規約・ルール文書の作成",
        scene: "運用ルールを正式文書化したい時。",
        prompt: `規約・ルール文書のドラフトを作成してください。
[ルール名]: [名称]
[適用対象]: [対象]
[禁止事項]: [事項]
[運用手順]: [手順]
[例外/罰則]: [内容]
条件: 定義セクションを含める`,
        tip: "定義を先に書くと解釈ブレを防げます。",
      },
      {
        name: "クライアントへの納品物説明文",
        scene: "納品時に使い方と注意点を明確に伝えたい時。",
        prompt: `納品物説明文を作成してください。
[クライアント名]: [名称]
[納品物]: [納品物]
[主な内容]: [内容]
[利用方法]: [方法]
[注意事項]: [注意]
出力: 納品概要 / 利用ガイド / 問い合わせ先`,
        tip: "想定質問を先回り記載すると、納品後の問い合わせが減ります。",
      },
      {
        name: "インタビュー質問リスト",
        scene: "採用面接・取材・ヒアリング質問を設計したい時。",
        prompt: `インタビュー質問リストを作成してください。
[目的]: [採用/取材/ヒアリング]
[対象者]: [対象]
[確認したい論点]: [論点]
出力: 導入質問 / 深掘り / 事実確認 / クロージング / NG質問`,
        tip: "質問意図を併記すると、面談中の深掘りがしやすくなります。",
      },
      {
        name: "アンケート質問設計",
        scene: "意思決定に使えるアンケートを設計したい時。",
        prompt: `アンケート設計案を作成してください。
[調査テーマ]: [テーマ]
[調査目的]: [目的]
[対象者]: [対象]
条件:
- 10問
- 単一選択/複数選択/自由記述を適切に配置
- 誘導質問を避ける`,
        tip: "分析軸を先に定義すると、不要な設問が減ります。",
      },
    ],
  },
] as const;

export default function AiBusinessDocumentTemplates2026Page({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32">
      <article className="markdown-content mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIビジネス文書テンプレート完全版2026" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <div className="mb-7 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            AIビジネス文書テンプレート完全版2026
            <br className="hidden sm:block" />
            議事録・報告書・メール・企画書をAIで10分で完成させる
          </h1>
          <div className="mt-8 flex flex-col justify-between gap-6 border-b border-slate-100 pb-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <Calendar className="h-5 w-5 text-slate-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Published on</p>
                <time className="text-sm font-semibold text-slate-700">2026年2月23日</time>
              </div>
            </div>
            <CopyAsMarkdownButton
              title="AIビジネス文書テンプレート完全版2026：議事録・報告書・メール・企画書をAIで10分で完成させる"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-16 rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 sm:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="m-0 flex items-center gap-2 border-none pb-0 text-2xl font-bold text-slate-900">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            このテンプレート集でできること
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            このテンプレート集は、会議メモ・報告データ・要件メモを貼るだけで、議事録、報告書、メール、提案書の初稿を短時間で作るための実務用ライブラリです。
            50本すべてがコピペ前提で、[会社名]や[会議名]などの差し替え項目を明示しています。チーム共通で使えば、文書品質のばらつきを減らし、作成時間の短縮と再現性向上を同時に実現できます。
          </p>
        </motion.section>

        <motion.section
          id="how-to"
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="scroll-mt-28">AIで文書作成する時の基本的な使い方（3ステップ）</h2>
          <div className="mt-7 grid gap-4">
            {usageSteps.map((step) => (
              <section key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="m-0 border-none pb-0 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{step.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        {templateCategories.map((category, index) => (
          <motion.section
            key={category.id}
            id={category.id}
            className="mt-20 scroll-mt-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={sectionReveal}
          >
            <h2 className="m-0 border-none pb-0 text-2xl font-bold text-slate-900">{category.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{category.description}</p>

            <div className="mt-8 grid gap-6">
              {category.templates.map((template, templateIndex) => (
                <section key={template.name} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-will-primary">Template {templateIndex + 1}</p>
                  <h3 className="mt-2 border-none pb-0 text-xl font-bold text-slate-900">{template.name}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    <span className="font-semibold text-slate-900">こんな時に使う:</span> {template.scene}
                  </p>
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-950/95 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-300">プロンプトテンプレート</p>
                    <pre className="overflow-x-auto whitespace-pre-wrap text-[13px] leading-6 text-slate-100">
                      <code>{template.prompt}</code>
                    </pre>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    <span className="font-semibold text-slate-900">ポイント:</span> {template.tip}
                  </p>
                </section>
              ))}
            </div>

            {index === 1 ? (
              <motion.section
                className="mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionReveal}
              >
                <MidArticleCtaBox slug="ai-business-document-templates-2026" />
              </motion.section>
            ) : null}
          </motion.section>
        ))}

        <motion.section
          id="security"
          className="mt-24 rounded-3xl border border-orange-200 bg-orange-50/50 p-8 sm:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="m-0 flex items-center gap-2 border-none pb-0 text-2xl font-bold text-slate-900">
            <AlertCircle className="h-6 w-6 text-orange-600" />
            AIで文書作成する際の注意点（個人情報・機密情報）
          </h2>
          <ul className="mt-6 space-y-3">
            {securityPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base leading-7 text-slate-700">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="scroll-mt-28">よくある質問（FAQ）</h2>
          <div className="mt-8 divide-y divide-slate-100 border-t border-slate-100">
            {faqItems.map((item) => (
              <div key={item.question} className="py-8">
                <dt className="flex items-start gap-4 text-lg font-bold leading-relaxed text-slate-900">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-black text-slate-500">
                    Q
                  </span>
                  {item.question}
                </dt>
                <dd className="mt-4 pl-11 text-base leading-8 text-slate-700">{item.answer}</dd>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="summary"
          className="mt-24 rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-10 sm:p-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="m-0 flex items-center gap-2 border-none pb-0 text-2xl font-black text-slate-900">
            <Sparkles className="h-6 w-6 text-will-primary" />
            まとめ
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-700">
            50テンプレートを全部使う必要はありません。まずは頻度が高い3種類を固定し、社内共通テンプレートとして運用してください。
            「毎回ゼロから書く」状態をやめるだけで、文書作成の時間と心理負荷は大きく下がります。
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            AIリブートアカデミーは、<strong>生成AI活用力</strong>だけでなく、<strong>自己理解・キャリアデザイン</strong>、<strong>仲間と共に学ぶ環境</strong>の3本柱で、継続的な実践を支援します。
          </p>
        </motion.section>

        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <LineCtaBox
            title="テンプレートを使いこなして、AIを仕事の武器にしませんか"
            description="テンプレートをコピペするだけでなく、自分の業務に合わせてカスタマイズできるようになると、AIの効果は10倍に。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラム。LINEで無料相談受付中。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
        </motion.section>
      </article>
    </main>
  );
}
