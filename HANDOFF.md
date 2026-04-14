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
- [x] 閃卡資料（ch01.json）正常，閃卡模式可用
- [x] CSS 路徑問題修正（改用 `.Site.BaseURL` 拼接，absURL/relURL 在 subdirectory 無效）
- [x] GitHub Actions 自動部署完成

## 尚未完成

- [ ] cscs-study repo（本地 `C:\claudehome\projects\cscs-study\`）確認可歸檔或刪除
- [ ] 書庫內容填充：Essentials of Strength Training 書摘 / highlights
- [ ] 筆記本內容：coaching、ideas 目前是空資料夾
- [ ] ch02–ch24 閃卡資料（目前只有 ch01.json）
- [ ] 書庫樣式：`library/list.html` 目前沿用 default，可考慮加書架風格

## 下一步建議

1. 繼續補 CSCS 閃卡（ch02.json 開始，格式見 data/flashcards/ch01.json）
2. 或先寫書摘 highlights.md / notes.md 填充書庫內容
3. 未來加第二本書時：按 CLAUDE.md「加新書的流程」操作
