# YAMANAWA 作品索引

基準：桌面「yamanawa - 網站資料」的 Next.js 16.3.5 / React / 雙語路由與現有黑銀設計。

## 新增作品

在 `src/data/projects.ts` 的 `projects` 尾端追加一筆。編號永久保留，不按陣列位置重編，也不因刪除作品而重新編號。例如 `code: "YMW-004"`、`slug: "ymw-004-project-name"`。編號超過 999 時可直接延長。

提供名稱、類別的中英文、年份、封面路徑、封面替代文字、簡介。作品列表、總數、獨立頁、下一專案與首頁精選皆從同一份資料取得。中文網址 `/work/…`，英文 `/en/work/…`。

將可公開的照片存入 `public/work/`，更新 `cover` 與 `coverAlt`。目前三張 SVG 均為示意封面，不代表實際交付成果；名稱與 2026 年份依需求示例建立，類別待正式內容確認。正式素材與描述就緒時改 `previewOnly: false`，即可解除案例頁 noindex，並自動納入 sitemap。

`legacySlugs` 可保留舊網址並永久轉址至新網址；IBITSU 已保留 `/work/ibitsu`。不存在的專案回傳 404。

## 互動

桌機整列連結，滑入或鍵盤聚焦切換右側預覽，其餘列降透明度。離開恢復索引。只掛載目前預覽，不預先載入整個作品庫的圖片。1024px 以下隱藏右側預覽；640px 以下隱藏分類，編號與名稱分行。尊重減少動態偏好。

## 驗證

執行 `node --test tests/work-archive.test.mjs`、`npm run lint`、`npm run build -- --webpack`。實際使用正式建置預覽檢查中文／英文、桌機／手機、三個專案與前後導覽。

現有開發模式的中文 proxy rewrite 有循環轉址；正式建置不受影響，可用 `npm run start -- --port 3101` 檢查。未修改全站語系 proxy。

既有 `services-route-removal.test.mjs` 會把 `@/data/services` 的 import 誤判為舊頁面連結；原專案同樣失敗，與這次作品頁無關。
