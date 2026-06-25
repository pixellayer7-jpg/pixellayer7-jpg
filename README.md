# Hi, I'm He Zhang (PixelLayer) 👋

**React / Frontend developer** building **bilingual, test-backed** product demos — not mockups.  
**React / 前端开发者** — 可演示、可测试的双语 Web 产品，而非静态原型。

[![Landing CI](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml)
[![Calculator CI](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml)
[![API CI](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml)

📫 **pixellayer7@gmail.com** · **Available for frontend / full-stack roles** (remote OK)

🌐 **Live:** [Landing v1.7](https://pixellayer7-jpg.github.io/1/) · [Quote calculator v1.27](https://pixellayer7-jpg.github.io/project-estimator/)

---

## Architecture (open-source product loop)

```mermaid
flowchart LR
  A[Landing v1.7] -->|Pricing cards ?type=| B[Calculator v1.27]
  B -->|sessionStorage handoff| A
  B -->|Email / share link| C[Client]
  B -->|optional POST| D[estimator-api v0.7]
  D -->|GET ?load=uuid| B
  A --> C
```

| Layer | Repo | Live | Highlights |
|-------|------|------|------------|
| **Marketing** | [1](https://github.com/pixellayer7-jpg/1) | [Demo](https://pixellayer7-jpg.github.io/1/) | Pricing preview, client types, CTA band, commercial flow doc |
| **Calculator** | [project-estimator](https://github.com/pixellayer7-jpg/project-estimator) | [Demo](https://pixellayer7-jpg.github.io/project-estimator/) | Tier overview, `?type=` deep links, handoff + UTM |
| **API** | [estimator-api](https://github.com/pixellayer7-jpg/estimator-api) | Docker / Render | Rate limit, OpenAPI, atomic store |

**Interview walkthrough (5 min):** [Landing](https://pixellayer7-jpg.github.io/1/) → [Calculator](https://pixellayer7-jpg.github.io/project-estimator/) → pick options → email prefill or (with API) save & `?load=` restore.

---

## 🛠 Stack

`React 18` · `Vite 5` · `Vitest` · `Testing Library` · `Node 20` · `Fastify` · `GitHub Actions` · `GitHub Pages` · `Docker` · `i18n` · `a11y`

---

## 💼 What I bring

- **End-to-end thinking** — landing → tool → API → deploy docs  
- **Engineering quality** — CI, tests, schema validation, security headers  
- **Bilingual UX** — EN / 中文 across public demos  

---

## 📊 GitHub activity

![GitHub stats](https://github-readme-stats.vercel.app/api?username=pixellayer7-jpg&show_icons=true&theme=dark&hide_border=true)

![Top langs](https://github-readme-stats.vercel.app/api/top-langs/?username=pixellayer7-jpg&layout=compact&theme=dark&hide_border=true)

---

<sub>PixelLayer L.L.C · MIT-licensed portfolio · [All repos](https://github.com/pixellayer7-jpg?tab=repositories)</sub>
