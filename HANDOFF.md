# HANDOFF — my-site (Cortex)

## 目前狀態（2026-04-23，ch10 完成）

網站已上線並完全正常：https://hangsau.github.io/cortex/  
CI/CD 正常運作，push hugo-source 自動部署。

## 已完成

- [x] Hugo 專案骨架（無 theme，完全自訂 layout）
- [x] 首頁書架設計（書本卡片，hover 浮起效果）
- [x] 書庫 section（library/list、library/book、library/chapter）
- [x] 筆記本 section（notebook/list、notebook/single）
- [x] Shortcodes：flashcard、highlight-quote、callout
- [x] CSS 分層：variables / base / layout / bookshelf / library / cscs-chapter / notebook / adm
- [x] CSCS 24 章搬入 `library/essentials-of-strength-training/`，九宮格正常
- [x] 閃卡資料（ch01）正常，閃卡模式可用
- [x] GitHub Actions 自動部署完成
- [x] Hugo 串接 Google Sheets CSV（閃卡資料源）
- [x] **ADM 完整上線**（書架 + 背景頁 + 互動矩陣 + 附錄 A）
- [x] **大腦喜歡這樣學上線**（書架 + 技法工具箱，田野筆記風格）

## ADM 架構（新增，本次對話完成）

四個頁面，皆在 `content/library/athlete-development-matrix/`：

| 頁面 | layout | 說明 |
|------|--------|------|
| `_index.md` | adm-book | 書本封面 + 導航卡（icon/description 從 front matter 讀） |
| `background.md` | adm-single | Part 1–3 全文：LTD 模型、四大支柱、八大考量 |
| `matrix.md` | adm-matrix | 互動矩陣：4 支柱 × 4 階段，篩選 + 點擊展開 |
| `appendix-a.md` | adm-single | 四泳式划水 + 起跳 + 轉身（6 種）技術基準 |

矩陣內容在 `data/adm/matrix.yaml`，要修改直接編輯這個檔案即可。

## 尚未完成

### CSCS
- [x] ch02 筆記（8 個子主題 .md 完成）
- [x] ch02 閃卡（52 張，row 54–93 + 134–145，補力矩/等速/可變阻力等）
- [x] ch03 筆記（8 個子主題 .md，已在前次 commit 完成）
- [x] ch03 閃卡（52 張，row 94–133 + 146–157，補乳酸濃度/糖原速率/BCAA等）
- [x] ch04 筆記（8 個子主題 .md，已完成）
- [x] ch04 閃卡（52 張，row 158–209，涵蓋內分泌基礎/睾固酮/GH/IGF/皮質醇/兒茶酚胺/受器/訓練處方）
- [x] ch05 筆記（8 個子主題 .md 完成：neural/hypertrophy/fiber-type-transitions/connective-tissue/endocrine/cardiovascular/overtraining/detraining）
- [x] ch05 閃卡（52 張，row 210–261，涵蓋神經適應/肌肉肥大/纖維轉換/結締組織/內分泌/心血管/混合訓練/過度訓練去訓練）
- [x] ch06 筆記（8 個子主題 .md 完成：acute-cardiovascular/acute-respiratory/chronic-cardiovascular/chronic-muscular/connective-endocrine/external-factors/overtraining/detraining）
- [x] ch06 閃卡（52 張，row 262–313，涵蓋急性心血管/呼吸反應/血液運輸/慢性適應/外在因素/OTS/去訓練）
- [x] ch07 筆記（8 個子主題 .md 完成）
- [x] ch07 閃卡（53 張，row 314–366，涵蓋兒童生長/訓練/女性生理/ACL/老年人訓練/肌骨變化/處方設計）
- [x] ch08 筆記（8 個子主題 .md 完成）
- [x] ch08 閃卡（53 張，row 367–419，涵蓋喚醒/焦慮/理論/注意力/目標設定/IPS/動機/動作學習/心理技巧）
- [x] ch09 筆記（8 個子主題 .md 完成）
- [x] ch09 閃卡（52 張，row 420–471，涵蓋碳水/DRI/電解質/脂肪/水分/蛋白質/營養師角色/維生素礦物質）
- [x] ch10 筆記（8 個子主題 .md 完成：pre-competition/carb-loading/during-event/post-competition/energy-needs/weight-gain/weight-loss/eating-disorders）
- [x] ch10 閃卡（53 張，row 472–524，涵蓋賽前/賽中/賽後/碳水超補/能量需求/增減重/飲食失調）
- [ ] ch11–ch24 筆記內容
- [ ] ch11–ch24 閃卡
- [ ] 章節頁新增「完整重點整理」區塊（九宮格下方補充完整學習內容）
- [ ] 書庫列表樣式優化（`library/list.html`）

### ADM
- [ ] Appendix B：帕拉游泳分類（若有需要才做，原始檔在 `resources/books/Athlete-development-matrix/appendix_b_para_swimming_classification.md`）

### 大腦喜歡這樣學
- [x] 書本封面頁（mnfl-book layout）
- [x] 技法工具箱（mnfl-toolkit layout）—— 20 個技法，5 主題，可篩選可展開
- [x] **Uncommon Sense Teaching 上線**（書封 + 教師手冊 + 策略查找）
  - 田野筆記風格變體，深藍綠（#1B5E69）強調色
  - `data/ust/chapters.yaml`：10 章摘要
  - `data/ust/strategies.yaml`：18 個策略，6 個教學問題分類
  - slug: `uncommon-sense-teaching`，layout 前綴 `ust-`
- [ ] 與渦流計劃的連結（wiki 連結，使用者確認需求後再設計）

## Google Sheets 閃卡資料來源

- CSCS Sheet ID：`1-e_n_aCaR-ZCIVODJ4GZ1jPQL8aUkcwCLyxND2e7qhk`
- 欄位：`chapter | question | answer | tag`
- hugo.toml `params.cscsFlashcardsCSV` 指向已發布的 CSV URL
- 新增閃卡：用 `google-docs-mcp` 的 `appendRows` 寫入

## 內容製作流程（已確認）

```
Claude Code 讀 `resources/books/Essentials_of_Strength_Training_and_Conditioning,_Fourth_Edition/` 內的 .md
  → 整理成章節 .md 筆記（供人閱讀的教材）
  → 使用者確認內容
  → Claude Code 從 .md 製作閃卡 → 寫進 Google Sheets
```

## 下一步建議

1. 繼續 CSCS ch11 筆記與閃卡
2. 若需要 ADM Appendix B，直接用 adm-single layout 加一頁即可
3. 大腦喜歡這樣學 × 渦流計劃連結：使用者確認 wiki 需求後再設計（可在技法卡新增「在游泳教學中的應用」欄位）
