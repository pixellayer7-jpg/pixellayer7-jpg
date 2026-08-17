# GitHub 求职优化清单 · Job-search profile checklist

完成下面步骤后，你的主页会对招聘方更友好。代码仓库侧已准备好 **Profile README**、**Hub Index**（`HUB-INDEX.md`）与各项目 README。

---

## 1. Profile README 仓库（必做）

仓库名必须与用户名一致：`pixellayer7-jpg`

- 主页 README：`README.md`
- 产品索引：`HUB-INDEX.md`
- 本地 dev：`estimator-api/docs/LOCAL-DEV.md`

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

个人主页 → **Customize your pins** → 选 3 个：

1. `1`（Landing v2.1.1）
2. `project-estimator`（Calculator v2.1.1）
3. `estimator-api`（API v1.1.1）

---

## 4. 各仓库 Description & Topics（建议）

| 仓库                  | Description                                                                     | Topics                                     |
| --------------------- | ------------------------------------------------------------------------------- | ------------------------------------------ |
| **1**                 | PixelLayer marketing landing v2.1.8 — case studies, changelog, proposal link     | `react` `vite` `landing-page` `portfolio`  |
| **project-estimator** | Bilingual quote calculator v2.5.0 — shareable proposal, quote-hydrated portal, CRM demo | `react` `vite` `portfolio` `i18n` `vitest` |
| **estimator-api**     | Fastify API v1.1.1 — quotes, leads, share links                                 | `nodejs` `fastify` `rest-api` `portfolio`  |

---

## 5. GitHub Pages（演示站）

Settings → Pages → **Source: GitHub Actions**

| 仓库                                                                                     | 线上                                                             |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [1](https://github.com/pixellayer7-jpg/1/settings/pages)                                 | https://pixellayer7-jpg.github.io/1/                             |
| [project-estimator](https://github.com/pixellayer7-jpg/project-estimator/settings/pages) | https://pixellayer7-jpg.github.io/project-estimator/             |
| CRM admin                                                                                | https://pixellayer7-jpg.github.io/project-estimator/?admin=1     |
| Client status portal                                                                     | https://pixellayer7-jpg.github.io/project-estimator/?portal=quote |

---

## 6. 可选：Formspree + API secrets

| Secret / env                               | 仓库                             |
| ------------------------------------------ | -------------------------------- |
| `VITE_FORMSPREE_FORM_ID`                   | `1`, `project-estimator`         |
| `VITE_QUOTE_API_URL` / `VITE_LEAD_API_URL` | `project-estimator`, `1`         |
| `LIST_QUOTES_TOKEN`                        | `estimator-api`（Render/Docker） |

---

## 7. 简历 / 投递

> Portfolio: https://github.com/pixellayer7-jpg  
> Live: https://pixellayer7-jpg.github.io/1/ · https://pixellayer7-jpg.github.io/project-estimator/
