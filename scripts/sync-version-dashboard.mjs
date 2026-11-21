#!/usr/bin/env node
/**
 * Rebuild VERSION-DASHBOARD.md (and pin lines in hub docs) from versions.json.
 * When sibling package.json files exist locally, pull versions from them.
 *
 * Usage (from pixellayer7-jpg/):
 *   node scripts/sync-version-dashboard.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const versionsPath = join(root, 'versions.json')

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function badge(repo, workflow) {
  const [owner, name] = repo.split('/')
  const src = `https://github.com/${owner}/${name}/actions/workflows/${workflow}/badge.svg`
  const href = `https://github.com/${owner}/${name}/actions/workflows/${workflow}`
  return `[![CI](${src})](${href})`
}

function versionLine(repos) {
  return (
    '**Versions (update when shipping):** ' +
    repos
      .map((r) => {
        const label =
          r.id === 'landing'
            ? 'Landing'
            : r.id === 'calculator'
              ? 'Calculator'
              : r.id === 'api'
                ? 'API'
                : 'Rongen'
        return `${label} **v${r.version}**`
      })
      .join(' · ')
  )
}

function interviewVersionLine(repos) {
  return (
    '**Versions:** ' +
    repos
      .map((r) => {
        const label =
          r.id === 'landing'
            ? 'Landing'
            : r.id === 'calculator'
              ? 'Calculator'
              : r.id === 'api'
                ? 'API'
                : 'Rongen'
        return `${label} **v${r.version}**`
      })
      .join(' · ')
  )
}

function fleetTable(repos) {
  const header =
    '| Product | Version | CI | Live / docs | Changelog | Latest |\n' +
    '| ------- | ------- | -- | ----------- | --------- | ------ |\n'
  const rows = repos
    .map((r) => {
      const repoLink = `[${r.name}](https://github.com/${r.github})`
      const live = `[open](${r.live})`
      const log = `[notes](${r.changelog})`
      return `| ${repoLink} | **v${r.version}** | ${badge(r.github, r.ciWorkflow)} | ${live} | ${log} | ${r.highlightEn} |`
    })
    .join('\n')
  return header + rows
}

function fleetTableZh(repos) {
  const header =
    '| 产品 | 版本 | CI | 线上 / 文档 | 更新说明 | 最近要点 |\n' +
    '| ---- | ---- | -- | ----------- | -------- | -------- |\n'
  const rows = repos
    .map((r) => {
      const repoLink = `[${r.nameZh}](https://github.com/${r.github})`
      const live = `[打开](${r.live})`
      const log = `[说明](${r.changelog})`
      return `| ${repoLink} | **v${r.version}** | ${badge(r.github, r.ciWorkflow)} | ${live} | ${log} | ${r.highlightZh} |`
    })
    .join('\n')
  return header + rows
}

function buildDashboard(data) {
  const { updated, repos } = data
  return `# PixelLayer version & CI dashboard

> One page for recruiters and interviewers: **four public repos**, pinned versions, CI badges, changelogs.  
> 招聘 / 面试一页看清：四个公开仓库的版本、CI 与更新说明。

**Source of truth:** [\`versions.json\`](./versions.json) · refresh: \`node scripts/sync-version-dashboard.mjs\`  
**Last synced:** ${updated}

## Fleet status

${fleetTable(repos)}

## 舰队状态

${fleetTableZh(repos)}

## How this stays current

1. After shipping a repo, bump its \`package.json\` version and update the matching \`highlightEn\` / \`highlightZh\` in \`versions.json\` (or run the sync script from a sibling checkout — it pulls versions from local \`package.json\` files).
2. Run \`node scripts/sync-version-dashboard.mjs\` from this repo root.
3. Commit \`versions.json\`, \`VERSION-DASHBOARD.md\`, and any hub docs the script rewrites.

## Related

- [Hub Index](./HUB-INDEX.md) — demos + source map
- [Interview one-pager](./INTERVIEW-DEMO.md)
- [Career / job copy](./CAREER-DESCRIPTIONS.md)
- [Profile setup](./GITHUB_PROFILE_SETUP.md)

---

<sub>PixelLayer L.L.C · profile hub · [github.com/pixellayer7-jpg](https://github.com/pixellayer7-jpg)</sub>
`
}

function patchBetweenMarkers(text, start, end, replacement) {
  const re = new RegExp(
    `${start}[\\s\\S]*?${end}`,
    'm',
  )
  if (!re.test(text)) {
    throw new Error(`Markers not found: ${start} … ${end}`)
  }
  return text.replace(re, `${start}\n${replacement}\n${end}`)
}

function patchVersionLine(text, nextLine) {
  return text.replace(
    /\*\*Versions(?: \(update when shipping\))?:\*\*[^\n]*/,
    nextLine,
  )
}

function patchHubIndexVersions(text, repos) {
  const byId = Object.fromEntries(repos.map((r) => [r.id, r.version]))
  let out = text
  out = out.replace(
    /(\*\*Marketing landing\*\*[^\n]*\|\s*)v[\d.]+/,
    `$1v${byId.landing}`,
  )
  out = out.replace(
    /(\*\*Quote calculator\*\*[^\n]*\|\s*)v[\d.]+/,
    `$1v${byId.calculator}`,
  )
  out = out.replace(
    /(\*\*Shareable proposal\*\*[^\n]*\|\s*)v[\d.]+/,
    `$1v${byId.calculator}`,
  )
  out = out.replace(
    /(\*\*Client status portal\*\*[^\n]*\|\s*)v[\d.]+/,
    `$1v${byId.calculator}`,
  )
  out = out.replace(
    /(\*\*Quote API\*\*[^\n]*\|\s*)v[\d.]+/,
    `$1v${byId.api}`,
  )
  out = out.replace(
    /(\*\*Parish WordPress\*\*[^\n]*\|\s*)v[\d.]+/,
    `$1v${byId.rongen}`,
  )
  out = out.replace(
    /(主站演示 )v[\d.]+/,
    `$1v${byId.landing}`,
  )
  out = out.replace(
    /(计算器 )v[\d.]+/,
    `$1v${byId.calculator}`,
  )
  return out
}

function main() {
  const data = readJson(versionsPath)
  let pulled = 0

  for (const repo of data.repos) {
    if (!repo.packagePath) continue
    const pkgPath = join(root, repo.packagePath)
    if (!existsSync(pkgPath)) continue
    const pkg = readJson(pkgPath)
    if (pkg.version && pkg.version !== repo.version) {
      console.log(
        `version pull: ${repo.id} ${repo.version} → ${pkg.version} (${repo.packagePath})`,
      )
      repo.version = pkg.version
      pulled++
    } else if (pkg.version) {
      console.log(`version ok: ${repo.id} v${pkg.version}`)
    }
  }

  data.updated = new Date().toISOString().slice(0, 10)
  writeFileSync(versionsPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')

  const dashboard = buildDashboard(data)
  writeFileSync(join(root, 'VERSION-DASHBOARD.md'), dashboard, 'utf8')
  console.log('wrote VERSION-DASHBOARD.md')

  const careerPath = join(root, 'CAREER-DESCRIPTIONS.md')
  const career = readFileSync(careerPath, 'utf8')
  writeFileSync(
    careerPath,
    patchVersionLine(career, versionLine(data.repos)),
    'utf8',
  )
  console.log('patched CAREER-DESCRIPTIONS.md version line')

  const interviewPath = join(root, 'INTERVIEW-DEMO.md')
  const interview = readFileSync(interviewPath, 'utf8')
  writeFileSync(
    interviewPath,
    patchVersionLine(interview, interviewVersionLine(data.repos)),
    'utf8',
  )
  console.log('patched INTERVIEW-DEMO.md version line')

  const hubPath = join(root, 'HUB-INDEX.md')
  let hub = readFileSync(hubPath, 'utf8')
  hub = patchHubIndexVersions(hub, data.repos)
  const fleetBlock = `## Version & CI fleet

One-page dashboard: **[VERSION-DASHBOARD.md](./VERSION-DASHBOARD.md)** (\`versions.json\` + \`npm\`-free sync script).

${fleetTable(data.repos)}
`
  if (hub.includes('<!-- FLEET:START -->')) {
    hub = patchBetweenMarkers(
      hub,
      '<!-- FLEET:START -->',
      '<!-- FLEET:END -->',
      fleetBlock.trim(),
    )
  } else {
    hub = hub.replace(
      '## Live demos',
      `<!-- FLEET:START -->\n${fleetBlock.trim()}\n<!-- FLEET:END -->\n\n## Live demos`,
    )
  }
  writeFileSync(hubPath, hub, 'utf8')
  console.log('patched HUB-INDEX.md fleet + versions')

  console.log(
    pulled
      ? `done (${pulled} version(s) pulled from local packages)`
      : 'done (versions.json unchanged vs local packages)',
  )
}

main()
