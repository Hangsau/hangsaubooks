# HANDOFF — my-site (Cortex)

## 目前狀態（2026-04-14）

網站已上線並完全正常：https://hangsau.github.io/cortex/  
CI/CD 正常運作，push hugo-source 自動部署。

## 已完成

- [x] Hugo 專案骨架（無 theme，完全自訂 layout）
- [x] 首頁書架設計（書本卡片，hover 浮起效果）
- [x] 書庫 section（library/list、library/book、library/chapter）
- [x] 筆記本 section（notebook/list、notebook/single）
- [x] Shortcodes：flashcard、highlight-quote、callout
- [x] CSS 分層：variables / base / layout / bookshelf / library / cscs-chapter / notebook
- [x] CSCS 24 章搬入 `library/essentials-of-strength-training/`，九宮格正常
- [x] 閃卡資料（ch01）正常，閃卡模式可用
- [x] CSS 路徑問題修正（改用 `.Site.BaseURL` 拼接）
- [x] GitHub Actions 自動部署完成
- [x] 封面圖統一放 `static/images/covers/`
- [x] Hugo 串接 Google Sheets CSV（閃卡資料源，data/flashcards/ 已刪除）
- [x] CLAUDE.md 閃卡說明更新（Google Sheets appendRows 取代舊 JSON）
- [x] **ADM 第二本書上線（Batch 1 + Batch 2 完成）**

## ADM 進度

**Athlete Development Matrix**（Swimming Canada）已完整上線：
- [x] 書架首頁顯示新書卡片
- [x] 書本頁：封面 + 兩張導航卡（背景頁、矩陣頁）
- [x] 背景閱讀頁（Part 1–3 全文）：LTD 模型、獎牌台路徑、四大支柱、八大考量
- [x] 互動矩陣頁：4 支柱 × 4 階段，全部 16 格有摘要 + 詳細要點（點擊展開）
- [x] 附錄尚未加入（見下方「尚未完成」）

## 尚未完成

### CSCS
- [ ] ch02–ch24 筆記內容（目前只有 ch01 有完整 8 個子主題 .md）
- [ ] ch02–ch24 閃卡（目前只有 ch01 在 Google Sheets）
- [ ] 章節頁新增「完整重點整理」區塊（九宮格下方補充完整學習內容）
- [ ] 書庫列表樣式優化（`library/list.html`）

### ADM
- [ ] Appendix A：各發展階段技術基準數字表（`part1_background.md` 有部分，`appendix_a_technical_benchmarks.md` 有完整資料）
- [ ] Appendix B：帕拉游泳分類（`appendix_b_para_swimming_classification.md`）

## Google Sheets 閃卡資料來源

- CSCS Sheet ID：`1-e_n_aCaR-ZCIVODJ4GZ1jPQL8aUkcwCLyxND2e7qhk`
- 欄位：`chapter | question | answer | tag`
- hugo.toml `params.cscsFlashcardsCSV` 指向已發布的 CSV URL
- 新增閃卡：用 `google-docs-mcp` 的 `appendRows` 寫入

## 內容製作流程（已確認）

```
Claude Code 讀 PDF / 已整理的 .md
  → 整理成章節 .md 筆記（供人閱讀的教材）
  → 使用者確認內容
  → Claude Code 從 .md 製作閃卡 → 寫進 Google Sheets
```

## 下一步建議

1. 看 ADM 矩陣頁，確認設計方向與內容是否滿意
2. 若需要加 Appendix A（技術基準），可繼續 Batch 3
3. 繼續 CSCS ch02 筆記
