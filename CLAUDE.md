# my-site (Cortex) — CLAUDE.md

## 專案定位

個人知識網站，Hugo 靜態網站生成器。  
網址：`https://hangsau.github.io/cortex/`  
Repo：`Hangsau/cortex`，branch：`hugo-source`  
原始書檔（PDF）放在 `C:\claudehome\resources\books\`，不在此專案內。

---

## 架構速查

```
content/
  library/                  # 書庫（每本書一個資料夾）
    essentials-of-strength-training/
      _index.md             # layout: book
      ch01/ ... ch24/       # 每章 layout: chapter，含 8 個 .md
      highlights.md
      notes.md
  notebook/                 # 個人筆記
    coaching/
    ideas/
layouts/
  _default/                 # baseof、list、single
  partials/                 # nav、footer
  library/                  # list（書庫列表）、book（單書頁）、chapter（九宮格）、single
  notebook/                 # list、single
  shortcodes/               # flashcard、highlight-quote、callout
static/
  css/
    variables.css           # 只放 CSS 變數
    base.css                # reset + 基礎排版
    layout.css              # nav/main/footer 結構
    bookshelf.css           # 首頁書架樣式
    library.css             # 書庫 section 樣式
    cscs-chapter.css        # 九宮格 + 閃卡樣式（從 cscs-study 移植）
    notebook.css            # 筆記本樣式
  js/
    flashcard.js            # 閃卡翻轉（單一功能）
  images/
    cscs-cover.jpg
data/
  books.yaml                # 書目索引（slug 對應 content/library/ 資料夾名）
  flashcards/
    ch01.json ... chXX.json # 每章閃卡資料（q / a / tag）
```

---

## 授權範圍

- 此專案內所有檔案可直接修改，不需詢問確認

---

## 工作守則

### Layout 規則
- `baseof.html` 只管 HTML 骨架，不寫任何 section 邏輯
- 每個 section 有自己的 list/single layout，互不干擾
- **CSS/JS/image 路徑用 `{{ .Site.BaseURL }}css/xxx.css`**（不加前綴 `/`）
  - Hugo 的 `absURL`/`relURL` 對以 `/` 開頭的路徑在 subdirectory 部署時失效
  - `.Site.BaseURL` = `https://hangsau.github.io/cortex/`，直接拼接即可
- 頁面連結用 `{{ .RelPermalink }}` 或 `{{ .Permalink }}`（Hugo 自動帶入正確路徑）
- nav menu 連結：`{{ printf "%s%s" $.Site.BaseURL (strings.TrimPrefix "/" .URL) }}`

### CSS 規則
- 改全站外觀 → `variables.css`（改 CSS 變數即可）
- 改排版結構 → `layout.css`
- 加新元件 → 建新的 css 檔，不改 base
- 不寫 inline style，不用 `!important`

### 命名規範
- 檔案名：kebab-case
- CSS class：kebab-case
- Hugo template 變數：PascalCase

### 加新書的流程
1. 在 `content/library/<book-slug>/` 建資料夾與 `_index.md`（`layout: book`）
2. 在 `data/books.yaml` 加一筆（含 slug、color）
3. 封面圖放 `static/images/`

### 加新 CSCS 章節閃卡
- 在 `data/flashcards/chXX.json` 建檔（格式：`[{"q":"","a":"","tag":""}]`）

---

## 部署

```bash
# push 後 GitHub Actions 自動建置部署
git add . && git commit -m "..." && [push 指令見下]
```

Push 指令（Windows credential manager 問題，需繞過）：
```bash
TOKEN=$(gh auth token) && git remote set-url origin "https://$TOKEN@github.com/Hangsau/cortex.git" && GIT_CONFIG_COUNT=1 GIT_CONFIG_KEY_0=credential.helper GIT_CONFIG_VALUE_0= git push origin hugo-source && git remote set-url origin "https://github.com/Hangsau/cortex.git"
```

push 後執行 `gh run list --repo Hangsau/cortex --limit 1` 確認 CI 成功。
