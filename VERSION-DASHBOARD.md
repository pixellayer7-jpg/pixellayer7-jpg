# PixelLayer version & CI dashboard

> One page for recruiters and interviewers: **four public repos**, pinned versions, CI badges, changelogs.  
> 招聘 / 面试一页看清：四个公开仓库的版本、CI 与更新说明。

**Source of truth:** [`versions.json`](./versions.json) · refresh: `node scripts/sync-version-dashboard.mjs`  
**Last synced:** 2026-11-25

## Fleet status

| Product | Version | CI | Live / docs | Changelog | Latest |
| ------- | ------- | -- | ----------- | --------- | ------ |
| [Landing](https://github.com/pixellayer7-jpg/1) | **v2.1.27** | [![CI](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml) | [open](https://pixellayer7-jpg.github.io/1/) | [notes](https://pixellayer7-jpg.github.io/1/?section=changelog) | Live stats figures covered; interview ?section=walkthrough |
| [Calculator](https://github.com/pixellayer7-jpg/project-estimator) | **v2.7.20** | [![CI](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml) | [open](https://pixellayer7-jpg.github.io/project-estimator/) | [notes](https://pixellayer7-jpg.github.io/project-estimator/?section=changelog) | CRM search box (quoteRef/id · name/email) via API `q` |
| [Quote API](https://github.com/pixellayer7-jpg/estimator-api) | **v2.5.0** | [![CI](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml) | [open](https://github.com/pixellayer7-jpg/estimator-api/blob/main/docs/openapi.json) | [notes](https://github.com/pixellayer7-jpg/estimator-api/blob/main/CHANGELOG.md) | Audit log for PATCH/backup + admin GET /audit |
| [Rongen Church](https://github.com/pixellayer7-jpg/rongen-church) | **v1.2.5** | [![CI](https://github.com/pixellayer7-jpg/rongen-church/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/rongen-church/actions/workflows/ci.yml) | [open](https://pixellayer7-jpg.github.io/rongen-church/) | [notes](https://github.com/pixellayer7-jpg/rongen-church) | Bilingual WP theme + Pages preview (zh/en), print, og:image |

## 舰队状态

| 产品 | 版本 | CI | 线上 / 文档 | 更新说明 | 最近要点 |
| ---- | ---- | -- | ----------- | -------- | -------- |
| [营销主站](https://github.com/pixellayer7-jpg/1) | **v2.1.27** | [![CI](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml) | [打开](https://pixellayer7-jpg.github.io/1/) | [说明](https://pixellayer7-jpg.github.io/1/?section=changelog) | 数据一览补齐测试；面试 ?section=walkthrough |
| [报价计算器](https://github.com/pixellayer7-jpg/project-estimator) | **v2.7.20** | [![CI](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml) | [打开](https://pixellayer7-jpg.github.io/project-estimator/) | [说明](https://pixellayer7-jpg.github.io/project-estimator/?section=changelog) | CRM 搜索框（quoteRef/id · 姓名/邮箱）对接 API `q` |
| [报价 API](https://github.com/pixellayer7-jpg/estimator-api) | **v2.5.0** | [![CI](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml) | [打开](https://github.com/pixellayer7-jpg/estimator-api/blob/main/docs/openapi.json) | [说明](https://github.com/pixellayer7-jpg/estimator-api/blob/main/CHANGELOG.md) | PATCH/backup 审计日志 + admin GET /audit |
| [荣恩堂](https://github.com/pixellayer7-jpg/rongen-church) | **v1.2.5** | [![CI](https://github.com/pixellayer7-jpg/rongen-church/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/rongen-church/actions/workflows/ci.yml) | [打开](https://pixellayer7-jpg.github.io/rongen-church/) | [说明](https://github.com/pixellayer7-jpg/rongen-church) | 双语 WP 主题 + Pages 预览（中/英）、打印、og:image |

## How this stays current

1. After shipping a repo, bump its `package.json` version and update the matching `highlightEn` / `highlightZh` in `versions.json` (or run the sync script from a sibling checkout — it pulls versions from local `package.json` files).
2. Run `node scripts/sync-version-dashboard.mjs` from this repo root.
3. Commit `versions.json`, `VERSION-DASHBOARD.md`, and any hub docs the script rewrites.

## Related

- [Hub Index](./HUB-INDEX.md) — demos + source map
- [Interview one-pager](./INTERVIEW-DEMO.md)
- [Career / job copy](./CAREER-DESCRIPTIONS.md)
- [Profile setup](./GITHUB_PROFILE_SETUP.md)

---

<sub>PixelLayer L.L.C · profile hub · [github.com/pixellayer7-jpg](https://github.com/pixellayer7-jpg)</sub>
