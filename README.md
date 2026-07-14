# Hi, I'm He Zhang (PixelLayer) 👋

**React / Frontend developer** building **bilingual, test-backed** product demos — not mockups.  
**React / 前端开发者** — 可演示、可测试的双语 Web 产品，而非静态原型。

[![Landing CI](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml)
[![Calculator CI](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml)
[![API CI](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml)

📫 **pixellayer7@gmail.com** · **Available for frontend / full-stack roles** (remote OK)

🌐 **Live:** [Landing v2.1.4](https://pixellayer7-jpg.github.io/1/) · [Quote calculator v2.2.0](https://pixellayer7-jpg.github.io/project-estimator/) · [CRM admin (demo OK)](https://pixellayer7-jpg.github.io/project-estimator/?admin=1)

---

## Architecture (open-source product loop)

```mermaid
flowchart LR
  A[Landing v2.1.4] -->|?quote= hydrate| B[Calculator v2.2.0]
  B -->|Save & ?quote= contact| A
  B -->|Print SOW + deposit invoice| C[Client PDF]
  B -->|POST quote + lead| D[estimator-api v1.1.1]
  D -->|CRM admin ?admin=1| E[Stats · Quotes · Leads]
  B -->|Demo CRM no secrets| E
  D -->|GET ?load=uuid| B
  A --> F[Client]
```

| Layer | Repo | Live | Highlights |
|-------|------|------|------------|
| **Marketing** | [1](https://github.com/pixellayer7-jpg/1) | [Demo](https://pixellayer7-jpg.github.io/1/) | Changelog, mailto-first contact, reply templates |
| **Calculator** | [project-estimator](https://github.com/pixellayer7-jpg/project-estimator) | [Demo](https://pixellayer7-jpg.github.io/project-estimator/) | Print SOW / deposit invoice, **CRM demo mode**, handoff |
| **API** | [estimator-api](https://github.com/pixellayer7-jpg/estimator-api) | Docker / Render | Lead status CRM, stats breakdown, local dev compose |

**Interview walkthrough (5 min):** [Landing](https://pixellayer7-jpg.github.io/1/) → [Calculator](https://pixellayer7-jpg.github.io/project-estimator/) → **Print proposal + deposit invoice** → [CRM admin](https://pixellayer7-jpg.github.io/project-estimator/?admin=1) (**works without API secrets** in demo mode).

---

## 🛠 Stack

`React 18` · `Vite 5` · `Vitest` · `Testing Library` · `Node 20` · `Fastify` · `GitHub Actions` · `GitHub Pages` · `Docker` · `i18n` · `a11y`

---

## 💼 What I bring

- **End-to-end thinking** — landing → tool → API → CRM admin → deploy docs  
- **Engineering quality** — CI, tests, schema validation, security headers  
- **Bilingual UX** — EN / 中文 across public demos  

---

## 📊 GitHub activity

![GitHub stats](https://github-readme-stats.vercel.app/api?username=pixellayer7-jpg&show_icons=true&theme=dark&hide_border=true)

![Top langs](https://github-readme-stats.vercel.app/api/top-langs/?username=pixellayer7-jpg&layout=compact&theme=dark&hide_border=true)

---

## 🔗 Hub Index

- [PixelLayer Hub Index](./HUB-INDEX.md)
- [Profile setup checklist](./GITHUB_PROFILE_SETUP.md)

---

<sub>PixelLayer L.L.C · MIT-licensed portfolio · [All repos](https://github.com/pixellayer7-jpg?tab=repositories)</sub>
