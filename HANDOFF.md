# HANDOFF — my-site (Cortex)

## 目前狀態（2026-04-16）

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
- [x] ch02 閃卡（40 張，Google Sheets row 54–93）
- [ ] ch03–ch24 筆記內容
- [ ] ch03–ch24 閃卡
- [ ] 章節頁新增「完整重點整理」區塊（九宮格下方補充完整學習內容）
- [ ] 書庫列表樣式優化（`library/list.html`）

### ADM
- [ ] Appendix B：帕拉游泳分類（若有需要才做，原始檔在 `resources/books/Athlete-development-matrix/appendix_b_para_swimming_classification.md`）

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

1. 繼續 CSCS ch03 筆記與閃卡
2. 若需要 ADM Appendix B，直接用 adm-single layout 加一頁即可
