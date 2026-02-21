---
title: "Sprint 10-2 実装対象リスト（Answer Box / FAQ）"
version: "1.0"
last_updated: "2026-02-21"
author: "さかもと"
status: "draft"
---

# Sprint 10-2 実装対象リスト

## 1. 調査サマリ

- 調査対象: `components/academyLanding/blog/**/*Page.tsx` 139本、`app/academy/blog/**/page.tsx` 139本
- Answer Box判定（厳密）: `answer-box` / `AnswerBox` / `answerBox` / `concept-answer-box`
- Answer Box判定（今回確認分）: `id="summary"` または `id="conclusion"` 近傍に `bg-blue-50` / `bg-slate-50` の冒頭要約ブロック
- 厳密実装率: 9/139 (6.5%)
- 厳密 + 今回確認分: 43/139 (30.9%)
- FAQ 8問未満: 136/139 (97.8%)

## 2. Answer Box実装済み記事リスト

### 2-1. 現在の9本（厳密判定）

1. ai-pc-copilot-plus-guide
2. github-copilot-agent-hq-guide
3. llm-cost-optimization-guide
4. make-automation-guide
5. n8n-vs-make-comparison
6. openai-codex-app-guide
7. openai-o3-o4mini-guide
8. perplexity-pages-guide
9. what-is-ai-agent

### 2-2. 今回確認分（冒頭要約ブロック候補）

1. adobe-firefly-guide
2. ai-document-ocr-guide
3. ai-english-learning-guide
4. ai-meeting-tools-comparison
5. ai-notion-guide
6. ai-real-estate-guide
7. ai-research-tool-2026
8. ai-side-business-2026
9. ai-slide-creation
10. ai-transcription-guide
11. ai-video-editing-guide
12. aio-seo-strategy-guide
13. claude-code-beginners-guide
14. claude-code-intro
15. deepseek-guide
16. elevenlabs-guide
17. freelancer-ai-checklist
18. gemini-3-practical-guide
19. gemini-deep-think-guide
20. gemini-workspace-guide
21. genspark-guide
22. google-ai-studio-app-build-guide
23. google-ai-studio-guide
24. microsoft-copilot-guide
25. midjourney-guide
26. midjourney-video-guide
27. openai-atlas-guide
28. openai-deep-research-guide
29. openai-operator-guide
30. openai-responses-api-guide
31. perplexity-ai-guide
32. power-automate-ai-guide
33. vibe-coding-beginner-guide
34. workflow-automation-comparison

## 3. FAQ 8問未満の記事リスト

- FAQ 7問: 18本
- FAQ 6問: 112本
- FAQ 5問: 4本
- FAQ 4問: 2本

### 3-1. 詳細（slug・FAQ現在数）

```csv
slug,faq_count
adobe-firefly-guide,6
ai-accounting-guide,7
ai-adoption-cost-roi,7
ai-adoption-proposal-template,6
ai-agent-build-guide,6
ai-agent-deployment-checklist,7
ai-agent-landscape-2026,6
ai-agent-operations-guide,6
ai-business-efficiency-cases,6
ai-career-change-cases,4
ai-certification-guide,6
ai-coding-for-beginners,6
ai-coding-tool-comparison-2026,6
ai-content-sns-guide,6
ai-copyright-commercial-guide,7
ai-course-ranking,6
ai-customer-support-guide,6
ai-data-leak-patterns,7
ai-document-ocr-guide,6
ai-engineer-career-change,6
ai-english-learning-guide,6
ai-for-non-engineers,6
ai-freelance-work-guide,6
ai-guideline-template,7
ai-hr-recruiting,6
ai-image-generation-guide,6
ai-job-hunting-guide,6
ai-legal-guide,6
ai-medical-nursing-guide,6
ai-meeting-tools-comparison,7
ai-music-generation-2026,6
ai-notion-guide,6
ai-pc-copilot-plus-guide,6
ai-pm-tools-guide,6
ai-poc-guide,7
ai-portfolio-guide,7
ai-real-estate-guide,6
ai-research-tool-2026,6
ai-sales-prompt-templates,6
ai-school-for-working-adults,6
ai-side-business-2026,6
ai-side-business-guide,6
ai-slide-creation,6
ai-smartphone-apps,6
ai-study-learning-guide,6
ai-tax-accounting-guide,6
ai-teacher-education-guide,6
ai-training-curriculum,7
ai-training-kpi,7
ai-training-subsidy-guide,6
ai-transcription-guide,6
ai-video-editing-guide,6
ai-video-generation-comparison,7
ai-video-tool-comparison,6
ai-writing-tool,6
ai-youtube-content-guide,6
aio-seo-strategy-guide,6
aireboot-academy-reviews,6
anthropic-cowork-guide,6
canva-ai-guide,6
chatgpt-advanced-tips,6
chatgpt-claude-beginners-guide,6
chatgpt-gpt5-guide,6
chatgpt-plan-comparison,6
chatgpt-prompt-beginner,6
chatgpt-start-guide-smartphone,6
claude-beginner-guide,6
claude-code-beginners-guide,6
claude-code-intro,7
claude-opus-4-6-guide,6
context-engineering-guide,6
corporate-ai-adoption-guide,5
corporate-ai-training,5
corporate-ai-training-internal,6
cursor-ai-coding-guide,6
deepseek-guide,6
dify-beginner-guide,7
dx-reskilling-subsidy-guide,6
education-training-benefit-ai,6
elevenlabs-guide,6
flux-image-generation-guide,6
freelancer-ai-checklist,6
g-e-certification-comparison,6
gemini-3-practical-guide,6
gemini-beginners-guide,6
gemini-deep-think-guide,6
gemini-workspace-guide,6
generative-ai-passport-guide,6
generative-ai-skills-checklist,6
genspark-guide,6
github-copilot-agent-hq-guide,6
github-copilot-guide,5
google-ai-studio-app-build-guide,6
google-ai-studio-guide,6
gpt-5-3-guide,6
gpt-vs-claude-2026,6
gpt-vs-claude-comparison,6
how-to-learn-generative-ai,6
kling-ai-guide,6
llm-cost-optimization-guide,6
llm-evaluation-guide,6
make-automation-guide,6
manus-ai-guide,6
mcp-tool-integration-guide,6
microsoft-copilot-guide,6
midjourney-guide,6
midjourney-video-guide,6
multimodal-ai-intro,6
n8n-beginner-guide,6
n8n-vs-make-comparison,6
new-employee-ai-starter-guide,7
notebooklm-guide,6
ollama-local-llm-guide,6
openai-atlas-guide,6
openai-codex-app-guide,6
openai-deep-research-guide,6
openai-o3-o4mini-guide,6
openai-operator-guide,6
openai-responses-api-guide,6
perplexity-ai-guide,6
perplexity-pages-guide,6
power-automate-ai-guide,6
prompt-template-for-work,5
python-ai-intro,6
rag-use-cases,6
rag-vs-finetuning-guide,6
reskilling-over-40,6
shadow-ai-countermeasures,7
skills-for-ai-era-career,4
suno-ai-music-guide,6
vector-db-intro,6
vibe-coding-beginner-guide,6
what-is-generative-ai,6
what-is-mcp,7
what-is-rag,6
workflow-automation-comparison,7
```

## 4. 実装優先Top 20リスト（batch10 Sprint 10-2）

| 優先 | slug | カテゴリ | Answer Box要否 | FAQ現在数 | 目標数 | 両条件一致（未実装かつFAQ<8） |
|---|---|---|---|---|---|---|
| 1 | n8n-vs-make-comparison | 比較系 | 不要 | 6 | 8 | - |
| 2 | ai-coding-tool-comparison-2026 | 比較系 | 要 | 6 | 8 | 対象 |
| 3 | gpt-vs-claude-2026 | 比較系 | 要 | 6 | 8 | 対象 |
| 4 | workflow-automation-comparison | 比較系 | 要 | 7 | 8 | 対象 |
| 5 | rag-vs-finetuning-guide | 比較系 | 要 | 6 | 8 | 対象 |
| 6 | g-e-certification-comparison | 比較系 | 要 | 6 | 8 | 対象 |
| 7 | chatgpt-plan-comparison | 比較系 | 要 | 6 | 8 | 対象 |
| 8 | gpt-vs-claude-comparison | 比較系 | 要 | 6 | 8 | 対象 |
| 9 | ai-video-tool-comparison | 比較系 | 要 | 6 | 8 | 対象 |
| 10 | ai-video-generation-comparison | 比較系 | 要 | 7 | 8 | 対象 |
| 11 | ai-meeting-tools-comparison | 比較系 | 要 | 7 | 8 | 対象 |
| 12 | dx-reskilling-subsidy-guide | 補助金・資格系 | 要 | 6 | 8 | 対象 |
| 13 | ai-certification-guide | 補助金・資格系 | 要 | 6 | 8 | 対象 |
| 14 | ai-training-subsidy-guide | 補助金・資格系 | 要 | 6 | 8 | 対象 |
| 15 | education-training-benefit-ai | 補助金・資格系 | 要 | 6 | 8 | 対象 |
| 16 | github-copilot-agent-hq-guide | ガイド系 | 不要 | 6 | 8 | - |
| 17 | openai-codex-app-guide | ガイド系 | 不要 | 6 | 8 | - |
| 18 | ai-pc-copilot-plus-guide | ガイド系 | 不要 | 6 | 8 | - |
| 19 | gpt-5-3-guide | ガイド系 | 要 | 6 | 8 | 対象 |
| 20 | claude-code-beginners-guide | ガイド系 | 要 | 6 | 8 | 対象 |

### 4-1. Sprint 10-2 実装対象（両条件一致）

1. ai-coding-tool-comparison-2026
2. gpt-vs-claude-2026
3. workflow-automation-comparison
4. rag-vs-finetuning-guide
5. g-e-certification-comparison
6. chatgpt-plan-comparison
7. gpt-vs-claude-comparison
8. ai-video-tool-comparison
9. ai-video-generation-comparison
10. ai-meeting-tools-comparison
11. dx-reskilling-subsidy-guide
12. ai-certification-guide
13. ai-training-subsidy-guide
14. education-training-benefit-ai
15. gpt-5-3-guide
16. claude-code-beginners-guide

### 4-2. 優先Top 10（実装着手順）

1. ai-coding-tool-comparison-2026
2. gpt-vs-claude-2026
3. workflow-automation-comparison
4. rag-vs-finetuning-guide
5. g-e-certification-comparison
6. chatgpt-plan-comparison
7. gpt-vs-claude-comparison
8. ai-video-tool-comparison
9. ai-video-generation-comparison
10. ai-meeting-tools-comparison

## 更新履歴

| バージョン | 更新日 | 更新者 | 更新内容 | 影響ドキュメント |
|---|---|---|---|---|
| 1.0 | 2026-02-21 | さかもと | Sprint 10-2のAnswer Box/FAQ調査結果を作成 | docs/sprint10-2-targets.md |
