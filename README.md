# Hi, I'm He Zhang (PixelLayer) 👋

**React / Frontend developer** building **bilingual, test-backed** product demos — not mockups.  
**React / 前端开发者** — 可演示、可测试的双语 Web 产品，而非静态原型。

[![Landing CI](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml)
[![Calculator CI](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/project-estimator/actions/workflows/ci.yml)
[![API CI](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/estimator-api/actions/workflows/ci.yml)

📫 **pixellayer7@gmail.com** · **Available for frontend / full-stack roles** (remote OK)

🌐 **Live:** [Landing v2.1.13](https://pixellayer7-jpg.github.io/1/) · [Quote calculator v2.7.0](https://pixellayer7-jpg.github.io/project-estimator/) · [CRM admin](https://pixellayer7-jpg.github.io/project-estimator/?admin=1) · [Proposal](https://pixellayer7-jpg.github.io/project-estimator/?proposal=sow) · [Client portal](https://pixellayer7-jpg.github.io/project-estimator/?portal=quote) · [Rongen Church](https://pixellayer7-jpg.github.io/rongen-church/) · [EN](https://pixellayer7-jpg.github.io/rongen-church/en/)

---

## Architecture (open-source product loop)

```mermaid
flowchart LR
  A[Landing v2.1.13] -->|?quote= hydrate| B[Calculator v2.7.0]
  B -->|Save & ?quote= contact| A
  B -->|?proposal=sow same price| R[Shareable proposal]
  R -->|Typed name to accept| P[Client status portal]
  P -->|Mark deposit + kickoff| K[Kickoff]
  K -->|Engagement JSON/MD| X[Evidence pack]
  B -->|?portal=quote same price| P
  B -->|POST quote + lead| D[estimator-api v1.1.1]
  D -->|CRM admin ?admin=1| E[Stats · Quotes · Leads]
  B -->|Demo CRM no secrets| E
  E -->|This browser signed quote| X
  E -->|Per-quote proposal + portal| R
  K --> F[Client]
  D -->|GET ?load=uuid| B
  A --> F[Client]
```

| Layer          | Repo                                                                      | Live                                                         | Highlights                                              |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| **Marketing**  | [1](https://github.com/pixellayer7-jpg/1)                                 | [Demo](https://pixellayer7-jpg.github.io/1/)                 | Case studies, changelog, proposal link, mailto-first    |
| **Calculator** | [project-estimator](https://github.com/pixellayer7-jpg/project-estimator) | [Demo](https://pixellayer7-jpg.github.io/project-estimator/) | Engagement record, CRM this-browser status, kickoff |
| **API**        | [estimator-api](https://github.com/pixellayer7-jpg/estimator-api)         | Docker / Render                                              | Lead status CRM, stats breakdown, local dev compose     |
| **Client**     | [rongen-church](https://github.com/pixellayer7-jpg/rongen-church)         | [Live preview](https://pixellayer7-jpg.github.io/rongen-church/) · [EN](https://pixellayer7-jpg.github.io/rongen-church/en/) | Parish WordPress + bilingual Pages preview                  |

**Interview walkthrough (5 min):** [Landing](https://pixellayer7-jpg.github.io/1/) → [Calculator](https://pixellayer7-jpg.github.io/project-estimator/) → **Open proposal** → **type name to accept** → portal kickoff → [CRM admin](https://pixellayer7-jpg.github.io/project-estimator/?admin=1) **This browser** + download engagement record. No API secrets required.

---

## 🛠 Stack

`React 18` · `Vite 5` · `Vitest` · `Testing Library` · `Node 20` · `Fastify` · `WordPress` · `PHP` · `GitHub Actions` · `GitHub Pages` · `Docker` · `i18n` · `a11y`

---

## 💼 What I bring

- **End-to-end thinking** — landing → tool → API → CRM admin → client WordPress delivery
- **Engineering quality** — CI, tests, schema validation, security headers
- **Bilingual UX** — EN / 中文 across public demos
- **Real client work** — liturgical parish site (custom theme + zero-PHP preview tools)

---

## 📊 GitHub activity

![GitHub stats](https://github-readme-stats.vercel.app/api?username=pixellayer7-jpg&show_icons=true&theme=dark&hide_border=true)

![Top langs](https://github-readme-stats.vercel.app/api/top-langs/?username=pixellayer7-jpg&layout=compact&theme=dark&hide_border=true)

---

## 🔗 Hub Index

- [PixelLayer Hub Index](./HUB-INDEX.md)
- [Profile setup checklist](./GITHUB_PROFILE_SETUP.md)
- [Career / job description copy](./CAREER-DESCRIPTIONS.md)

---

<sub>PixelLayer L.L.C · MIT-licensed portfolio · [All repos](https://github.com/pixellayer7-jpg?tab=repositories)</sub>
