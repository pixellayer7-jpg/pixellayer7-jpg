# GitHub 求职优化清单 · Job-search profile checklist

完成下面步骤后，你的主页会对招聘方更友好。代码仓库侧已准备好 **Profile README**、**Hub Index**（`HUB-INDEX.md`）与各项目 README。

---

## 1. Profile README 仓库（必做）

仓库名必须与用户名一致：`pixellayer7-jpg`

- 主页 README：`README.md`
- 产品索引：`HUB-INDEX.md`
- 本地 dev：`estimator-api/docs/LOCAL-DEV.md`
- 自雇/求职文案：`CAREER-DESCRIPTIONS.md`

---

## 2. 编辑 GitHub 个人资料（必做 · 网页）

https://github.com/settings/profile

| 字段                   | 建议填写                                           |
| ---------------------- | -------------------------------------------------- |
| **Name**               | He Zhang                                           |
| **Bio**                | `React frontend · Bilingual web apps · Tests & CI` |
| **Website**            | `https://pixellayer7-jpg.github.io/1/`             |
| **Available for hire** | **勾选**                                           |

---

## 3. 置顶仓库（必做）

个人主页 → **Customize your pins** → 选 4 个（或至少 3 个）：

1. `1`（Landing **v2.1.15**）
2. `project-estimator`（Calculator **v2.7.0**）
3. `rongen-church`（Client parish site **v1.2.2**）
4. `estimator-api`（API **v1.1.1**）— 可选第四个

---

## 4. 各仓库 Description & Topics（建议）

| 仓库                  | Description                                                                              | Topics                                              |
| --------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **1**                 | PixelLayer marketing landing v2.1.15 — walkthrough, changelog, Rongen case               | `react` `vite` `landing-page` `portfolio`           |
| **project-estimator** | Bilingual quote calculator v2.7.0 — engagement record, CRM this-browser status           | `react` `vite` `portfolio` `i18n` `vitest`          |
| **estimator-api**     | Fastify API v1.1.1 — quotes, leads, share links                                          | `nodejs` `fastify` `rest-api` `portfolio`           |
| **rongen-church**     | Rongen Lutheran Church WP theme + bilingual Pages preview v1.2.2 (og:image)              | `wordpress` `php` `church` `portfolio` `i18n`       |

---

## 5. GitHub Pages（演示站）

Settings → Pages → **Source: GitHub Actions**

| 仓库                                                                                     | 线上                                                               |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [1](https://github.com/pixellayer7-jpg/1/settings/pages)                                 | https://pixellayer7-jpg.github.io/1/                               |
| [project-estimator](https://github.com/pixellayer7-jpg/project-estimator/settings/pages) | https://pixellayer7-jpg.github.io/project-estimator/               |
| CRM admin                                                                                | https://pixellayer7-jpg.github.io/project-estimator/?admin=1       |
| Shareable proposal                                                                       | https://pixellayer7-jpg.github.io/project-estimator/?proposal=sow  |
| Client status portal                                                                     | https://pixellayer7-jpg.github.io/project-estimator/?portal=quote  |
| [rongen-church](https://github.com/pixellayer7-jpg/rongen-church/settings/pages)         | https://pixellayer7-jpg.github.io/rongen-church/ · [/en/](https://pixellayer7-jpg.github.io/rongen-church/en/) |

**面试 5 分钟走查：** https://pixellayer7-jpg.github.io/1/#walkthrough

---

## 6. 可选：Formspree + API secrets

| Secret / env                               | 仓库                             |
| ------------------------------------------ | -------------------------------- |
| `VITE_FORMSPREE_FORM_ID`                   | `1`, `project-estimator`         |
| `VITE_QUOTE_API_URL` / `VITE_LEAD_API_URL` | `project-estimator`, `1`         |
| `LIST_QUOTES_TOKEN`                        | `estimator-api`（Render/Docker） |

> 默认演示路径为零配置（mailto + 本机 CRM），可不配置以上项。

---

## 7. 简历 / 投递

> Portfolio: https://github.com/pixellayer7-jpg  
> Live: https://pixellayer7-jpg.github.io/1/ · https://pixellayer7-jpg.github.io/project-estimator/ · https://pixellayer7-jpg.github.io/rongen-church/  
> Walkthrough: https://pixellayer7-jpg.github.io/1/#walkthrough
