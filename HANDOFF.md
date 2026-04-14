# HANDOFF — my-site

## 目前狀態

骨架完整建立，可以本地執行 `hugo server -D` 預覽。

## 已完成

- [x] CLAUDE.md 行為規範
- [x] hugo.toml（無 theme，完全自訂）
- [x] content 骨架：cscs/、library/、notebook/
- [x] layouts：baseof、list、single、partials（nav/footer）
- [x] Section layouts：cscs/、library/、notebook/ 各自獨立
- [x] Shortcodes：flashcard、highlight-quote、callout
- [x] CSS：variables.css、base.css、layout.css、cscs.css、flashcard.css、library.css、notebook.css
- [x] JS：flashcard.js
- [x] data/books.yaml（書目索引）

## 尚未完成

- [ ] 設定 GitHub Actions 自動部署（cortex repo，branch: hugo-source → gh-pages）
- [ ] 本地 `hugo server -D` 確認畫面正常
- [ ] 實際填入書庫內容（Essentials of Strength Training 筆記）
- [ ] 決定 cscs-study 是否歸檔

## 下一步建議

1. 本地跑 `hugo server -D` 確認九宮格、閃卡正常
2. 設定 GitHub Actions（可沿用 cscs-study 的 workflow，改 branch 名稱）
3. Push 到 `Hangsau/cortex` 的 `hugo-source` branch

## 技術備注

- 不用任何 theme，完全自訂 layout
- 改樣式只動 `static/css/`，不碰 layout
- 加新 section：建 `content/<名稱>/`、`layouts/<名稱>/list.html`、`layouts/<名稱>/single.html`、`static/css/<名稱>.css`，在 hugo.toml menu 加入即可
- Hugo 版本：需確認本機安裝版本（`hugo version`）
