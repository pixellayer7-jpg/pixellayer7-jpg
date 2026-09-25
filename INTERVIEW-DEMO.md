# Interview demo one-pager · PixelLayer

**Goal:** In ~10 minutes, show end-to-end ownership — bilingual product UI **and** a small Fastify API — with zero paid services.

**Versions:** Landing **v2.1.18** · Calculator **v2.7.5** · API **v1.1.3** · Rongen **v1.2.4**

---

## Part A — Frontend walkthrough (~5 min, zero secrets)

Open: https://pixellayer7-jpg.github.io/1/?section=walkthrough  
(Or click **Copy full path** on that page and paste into chat.)

| Min | Open | Say |
| --- | --- | --- |
| 0–1 | Landing `?section=walkthrough` | Presales loop: landing → quote → proposal → CRM → client site |
| 1–2 | [Calculator](https://pixellayer7-jpg.github.io/project-estimator/) | Adjust scope; bilingual; estimate is indicative |
| 2–3 | [`?proposal=sow`](https://pixellayer7-jpg.github.io/project-estimator/?proposal=sow) | Same price/scope; type name to accept |
| 3–4 | [`?admin=1`](https://pixellayer7-jpg.github.io/project-estimator/?admin=1) | CRM demo + **This browser** status; no API token needed |
| 4–5 | [Rongen](https://pixellayer7-jpg.github.io/rongen-church/) · [EN](https://pixellayer7-jpg.github.io/rongen-church/en/) | Real client WP theme; print / og:image |

**Optional 30s:** Calculator [`?section=changelog`](https://pixellayer7-jpg.github.io/project-estimator/?section=changelog) — release cadence without opening GitHub.

---

## Part B — API curl walkthrough (~5 min)

Needs Node 20 + local API (not required for Part A).

```bash
cd estimator-api
# Terminal 1
set LIST_QUOTES_TOKEN=dev-token
npm start
# Terminal 2
npm run demo:curl
```

PowerShell:

```powershell
cd estimator-api
$env:LIST_QUOTES_TOKEN = "dev-token"
npm start
# other terminal:
npm run demo:curl
```

Script covers: health → create quote (public `GET` by UUID) → Bearer list/PATCH → lead lifecycle → stats.

Full notes: [estimator-api/docs/CURL-WALKTHROUGH.md](https://github.com/pixellayer7-jpg/estimator-api/blob/main/docs/CURL-WALKTHROUGH.md)  
Static OpenAPI (no server): [docs/openapi.json](https://github.com/pixellayer7-jpg/estimator-api/blob/main/docs/openapi.json)

**Talking points:** public share link vs Bearer CRM · JSON Schema validation · file store for demos · `links.calculator` / `links.contact`

---

## One-sentence close

> I ship the same funnel clients use — UI, proposal ops, and an optional API — with CI, bilingual UX, and a live parish WordPress delivery.

---

## Quick links

| Asset | URL |
| --- | --- |
| Landing walkthrough | https://pixellayer7-jpg.github.io/1/?section=walkthrough |
| Calculator + changelog | https://pixellayer7-jpg.github.io/project-estimator/?section=changelog |
| Career copy | [CAREER-DESCRIPTIONS.md](./CAREER-DESCRIPTIONS.md) |
| Profile setup | [GITHUB_PROFILE_SETUP.md](./GITHUB_PROFILE_SETUP.md) |
| Hub index | [HUB-INDEX.md](./HUB-INDEX.md) |

Update this file when demo URLs or versions change.
