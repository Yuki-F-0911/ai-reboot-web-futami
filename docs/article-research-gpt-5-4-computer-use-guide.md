# リサーチ記録: gpt-5-4-computer-use-guide
作成日: 2026-03-06

## 0-A: SEOキーワード調査

### 検索意図

| KW | 意図タイプ | 主軸 |
|---|---|---|
| GPT-5.4 Computer Use | Know + Do | ✅ |
| GPT-5.4 コンピュータ操作 使い方 | Do | ✅ |
| ChatGPT PC操作 自動化 | Do + Compare | ✅ |
| AI PC自動化 2026 | Know + Compare | 副軸 |
| OSWorld-Verified 75.0% 意味 | Know | 副軸 |
| GPT-5.4 computer use security | Fix + Risk | 副軸 |

**主軸判定**: Know（何が変わったか）と Do（どう始めるか）の複合検索。  
ただし本KWは「PCをAIに触らせて大丈夫か」という高リスク判断も同時に含むため、一般的な速報記事よりもセキュリティ・運用条件まで踏み込む必要がある。

### 競合上位5記事の分析

| 記事 | H2構成の傾向 | 差別化余地 |
|---|---|---|
| OpenAI: Introducing GPT-5.4 | ベンチマーク・顧客事例・提供面の要約 | 強い一次情報だが、ChatGPT手順/API手順/運用注意点までは踏み込まない |
| OpenAI: Computer use guide | Responses APIの実装ループ、`computer_use_preview`、安全策 | 実装は具体的だが、GPT-5.4の歴史的意義やChatGPT側の導線は薄い |
| OpenAI Help: ChatGPT agent FAQ | agent modeの起動方法、安全/プライバシー、Workspace controls | GPT-5.4 Computer Useそのものの背景やベンチマーク解説はない |
| 9to5Mac: GPT-5.4 key improvements | リリース要点、6つの改善点、プラン対応 | コンピュータ操作の意味や企業ガードレールの深掘りが薄い |
| Digital Applied: OpenAI Launches GPT-5.4 | ベンチマーク、ビジネスインパクト、概要整理 | 手順の具体性が弱く、ChatGPTとAPIの使い分けが曖昧 |

### AIリブートの差別化ポイント

1. **「汎用モデルとして初めて native Computer Use を持った」意味**を、Operator/preview系との違い込みで説明する  
2. **OSWorld 75.0% の読み方**を、human 72.4% と current public preview docs の 38.1% と対比して整理する  
3. **ChatGPT経由とAPI経由の導線を分けて**、エンジニア・パワーユーザーが迷わない手順にする  
4. **X/Grokで拾った初期実験例**（STL前処理、大量フォーム入力、複数アプリ連携）を使い、机上の説明で終わらせない  
5. **セキュリティ・プライバシーを本文の中心に置く**。特に screenshots、secrets、承認ポイント、企業データの扱いを明文化する  

### サジェスト・関連KW

- GPT-5.4 computer use api
- GPT-5.4 computer use chatgpt
- GPT-5.4 computer use security
- GPT-5.4 form automation
- GPT-5.4 osworld meaning
- ChatGPT agent pc automation
- GPT-5.4 local app workflow
- AI desktop automation 2026

## 0-B: 一次情報ソース

| # | 内容要約 | URL | 確認日 |
|---|---|---|---|
| 1 | GPT-5.4公式発表。native computer use、OSWorld-Verified 75.0%、human 72.4%、顧客事例を含む | https://openai.com/index/introducing-gpt-5-4/ | 2026-03-06 |
| 2 | OpenAI Computer use guide。Responses API、`computer-use-preview`、`computer_call_output`、`current_url`、安全策 | https://platform.openai.com/docs/guides/tools-computer-use | 2026-03-06 |
| 3 | ChatGPT agent FAQ。`/agent` 起動、visual browser、take over、screenshots、data retention、workspace controls | https://help.openai.com/en/articles/11752874-chatgpt-agent-faq | 2026-03-06 |
| 4 | ChatGPT release notes。agent mode の提供開始履歴と対象プラン拡大 | https://help.openai.com/en/articles/6825453-chatgpt-release-notes | 2026-03-06 |
| 5 | `computer-use-preview` モデル詳細。Input $3 / Output $12、OSWorld 38.1%、Responses API限定 | https://platform.openai.com/docs/models/computer-use-preview | 2026-03-06 |
| 6 | 9to5Mac: GPT-5.4の主要改善点。Computer Useを mainline に統合した点を整理 | https://9to5mac.com/2026/03/05/openai-gpt-5-4-key-improvements/ | 2026-03-06 |
| 7 | Digital Applied: GPT-5.4 launch summary。OSWorld数値と business impact を整理 | https://www.digitalapplied.com/blog/gpt-5-4-openai-launch/ | 2026-03-06 |

### 確認済み主要事実

- **発表日**: OpenAIは 2026-03-05 に GPT-5.4 を発表
- **中核変化**: GPT-5.4 は汎用モデルとして初めて native computer use capabilities を搭載
- **ベンチマーク**: OSWorld-Verified 75.0%、human baseline 72.4%、previous SOTA 46.6%
- **顧客事例**: Mainstay は custom confirmation policies を使い、3万超の property tax portals をまたぐ処理で活用
- **ChatGPT導線**: agent mode は tools menu または `/agent` で開始
- **API導線**: 現時点で一般公開されている詳細実装ガイドは `computer-use-preview` / `computer_use_preview` ループ

## 0-C: X調査結果

### 実施方法

- APIキー取得: `.env.local` の `XAI_API_KEY`
- モデル: `grok-4-fast`
- `tools` パラメータ: 使っていない
- 実行日: 2026-03-06

### 使用クエリ

1. `Summarize discussion patterns on X about GPT-5.4 Computer Use for DIY and maker workflows...`
2. `Summarize discussion patterns on X about GPT-5.4 Computer Use for large-scale form filling and portal automation...`
3. `Summarize discussion patterns on X about GPT-5.4 Computer Use running multi-app workflows...`
4. `Summarize discussion patterns on X about GPT-5.4 Computer Use security, privacy, and enterprise governance...`

### X調査メモ（構成案への活用）

#### 盛り上がっているトピック

- 3Dプリンタ部品案、STL修正、CAD前段の叩き台づくり
- 固定資産税ポータルや公的フォームの大量入力
- ブラウザ、スプレッドシート、ターミナル、メールをまたぐ multi-app workflow
- screenshots と secrets の扱い、prompt injection、sandbox の必要性

#### 利用者の言葉・文脈（手触り感）

- 「単なるブラウザ自動化ではなく、PCをまたぐ代理実行に近い」
- 「最初の80%は任せられるが、最後の20%は人が握るべき」
- 「login、MFA、CAPTCHA、送信確定はまだ人間の仕事」
- 「maker用途では rough draft が速いが、寸法と公差は手で詰める」

#### 見落とされている切り口

- `Operator` と `GPT-5.4 Computer Use` を同一視して混乱している検索者が多い
- API実装ガイドは preview naming のままで、GPT-5.4 announcement との差を説明する記事が少ない
- 一般ユーザー向け速報は多いが、企業での screenshots / data retention / training settings まで書いた記事が少ない

#### 取得結果の扱い

- 特定の投稿本文、アカウント名、ユーザー名は記事本文に引用しない
- 実験例・語り口・差別化のインプットとしてのみ使用

## 0-D: ファクトチェック

| Claim | ソース1 | ソース2 | 判定 |
|---|---|---|---|
| GPT-5.4は汎用モデルとして初めて native computer use capabilities を搭載 | OpenAI: Introducing GPT-5.4 | 9to5Mac launch summary | ✅ 確認済 |
| OSWorld-Verified は 75.0%、human baseline は 72.4% | OpenAI: Introducing GPT-5.4 | Digital Applied launch summary | ✅ 確認済 |
| previous SOTA は 46.6% で、GPT-5.4が大きく更新 | OpenAI: Introducing GPT-5.4 | Digital Applied launch summary | ✅ 確認済 |
| Mainstay は 30k超の property tax portals にまたがる処理で custom confirmation policies を活用 | OpenAI: Introducing GPT-5.4 | 9to5Mac launch summary | ✅ 確認済 |
| ChatGPT agent は tools menu または `/agent` から開始できる | ChatGPT agent FAQ | ChatGPT release notes | ✅ 確認済 |
| task中の login では Take over browser が必要で、その間は screenshots を取得しない | ChatGPT agent FAQ | — | ⚠️ 1ソース。本文では OpenAI Help Center による説明として記述 |
| Computer use guide は Responses API + `computer_use_preview` の実装ループを公開している | OpenAI Computer use guide | computer-use-preview model detail | ✅ 確認済 |
| Computer use guide は sandboxed / isolated environment と human-in-the-loop を推奨 | OpenAI Computer use guide | ChatGPT agent FAQ safety section | ✅ 確認済 |
| `computer-use-preview` の public guide上の OSWorld は 38.1% | OpenAI Computer use guide | computer-use-preview model detail | ✅ 確認済 |
| Operator website は終了し、機能は ChatGPT agent mode に統合 | ChatGPT agent FAQ | ChatGPT release notes | ✅ 確認済 |

## 構成案への反映メモ

### ペルソナ

- OpenAIの新機能をすぐ試したいエンジニア
- SaaS運用、営業企画、オペレーション設計などで「PC作業をどこまでAIに任せられるか」を見極めたいパワーユーザー
- 企業利用前に secrets / screenshots / approvals の論点を短時間で整理したいIT系ビジネスパーソン

### 記事の核心

1. **Computer Useは何か**を3行で理解させる
2. **できる作業と危険な作業**を同じ表で見せる
3. **OSWorld 75.0% の意味**を benchmark literacy として解説する
4. **ChatGPTとAPIの使い方を分ける**
5. **security / privacy / governance** を末尾ではなく主要セクションとして扱う

### 本文で必ず入れる要素

- `gpt-5-4`
- `ai-agent-landscape-2026`
- `openai-operator-guide`
- LINE CTA 3回
- 末尾CTAは「生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境」の3本柱のみ
