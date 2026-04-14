# my-site — CLAUDE.md

## 專案定位

個人知識網站，Hugo 靜態網站生成器。三個功能區塊：
- **cscs/** — CSCS 備考內容（flashcard、重點整理）
- **library/** — 書摘筆記（每本書一個資料夾）
- **notebook/** — 個人筆記、教練方法論、想法記錄

原始書檔（PDF）放在 `C:\claudehome\resources\books\`，不在此專案內。

---

## 架構速查

```
content/        # 所有內容（markdown）
layouts/        # HTML 模板
  _default/     # 通用 layout
  cscs/         # CSCS 專用 layout
  library/      # 書庫專用 layout
  notebook/     # 筆記本專用 layout
  shortcodes/   # 可重用元件，每個單一功能
static/
  css/          # 樣式（拆檔，見下方規範）
  js/           # 腳本（每個功能一個檔案）
data/           # 結構化資料（YAML）
```

---

## 授權範圍

- 此專案內所有檔案（內容、layout、CSS、設定）可直接修改，不需詢問確認
- 包含 CLAUDE.md、HANDOFF.md、hugo.toml、所有 content/layouts/static 下的檔案

---

## 工作守則

### 程式規範
- **單一功能原則**：每個 shortcode / JS 檔案只做一件事
- **命名統一**：
  - 檔案名：kebab-case（`flashcard.html`、`highlight-quote.html`）
  - CSS class：kebab-case（`.card-front`、`.section-header`）
  - Hugo template 變數：PascalCase（`{{ .Title }}`）
- **Layout 分層**：`baseof.html` 只管結構骨架，section layout 管區塊邏輯，不混用

### CSS 規範
- 樣式分三個檔案，職責不重疊：
  - `variables.css` — CSS 變數（顏色、字體、間距），只放變數
  - `base.css` — reset + 基礎排版，不放元件樣式
  - `layout.css` — 結構（nav、main、footer、grid）
  - 各 section 或元件可有自己的 css（`flashcard.css`、`library.css`）
- 不寫 inline style，不用 `!important`

### 禁忌
- 不在 `baseof.html` 寫 section 專用邏輯
- 不在 `static/css/` 直接改 base 來遷就單一頁面，應新增獨立 css
- 不把書籍原始檔案放入此專案

---

## 部署

Hugo 生成靜態檔 → GitHub Pages 或 Netlify（待設定）。  
本地預覽：`hugo server -D`
