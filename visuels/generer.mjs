// Génère les fiches Markdown des carrousels et toutes les images PNG.
// Usage : node visuels/generer.mjs            (tout)
//         node visuels/generer.mjs C02        (un seul carrousel / une seule couverture)
//
// Nécessite Playwright + Chromium (npm i playwright && npx playwright install chromium
// si ce n'est pas déjà installé sur ta machine) et une connexion pour charger Playfair Display.

import { createRequire } from 'node:module'
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { carrousels, couvertures, compte } from './contenus.mjs'

// require() (et non import) pour trouver aussi une installation globale de Playwright.
const { chromium } = createRequire(import.meta.url)('playwright')

const ici = dirname(fileURLToPath(import.meta.url))
const racine = resolve(ici, '..')
const filtre = process.argv[2]

// ---------- Mise en forme du texte ----------

const echapper = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Typographie française : espaces insécables autour des guillemets et avant ? ! : ;
const typo = (s) =>
  s.replace(/« /g, '«\u00A0').replace(/ »/g, '\u00A0»').replace(/ ([?!:;])/g, '\u202F$1')

const enHtml = (s = '') =>
  echapper(typo(s))
    .replace(/\*\*(.+?)\*\*/g, '<span class="or">$1</span>')
    .replace(/==(.+?)==/g, '<span class="bleu">$1</span>')
    .replace(/\n/g, '<br>')

const enMarkdown = (s = '') => s.replace(/==(.+?)==/g, '***$1***')

// ---------- Gabarit HTML ----------

const css = `
:root{--noir:#050505;--blanc:#ffffff;--or:#E3C27A;--bleu:#3FD8FF}
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:var(--noir)}
body{width:var(--w);height:var(--h);overflow:hidden;color:var(--blanc);
  font-family:'Playfair Display',Didot,'GFS Didot',Georgia,serif;
  -webkit-font-smoothing:antialiased;position:relative}
.photo{position:absolute;inset:0;background-size:cover;background-position:center}
.photo::after{content:'';position:absolute;inset:0;background:rgba(5,5,5,var(--voile,.62))}
.cadre{position:absolute;left:var(--mx);right:var(--mx);top:var(--top);bottom:var(--bas);
  display:flex;align-items:center;justify-content:center}
.contenu{width:100%;text-align:center;text-wrap:balance;--u:calc(var(--s,1) * 1px);font-variant-numeric:lining-nums}
.texte{font-size:calc(60 * var(--u));line-height:1.32;font-weight:400;letter-spacing:-.005em}
.une .texte{font-size:calc(84 * var(--u));line-height:1.2;font-weight:500}
.verset{font-style:italic;font-size:calc(48 * var(--u));line-height:1.4;opacity:.95}
.texte + .verset{margin-top:calc(56 * var(--u))}
.seul .verset{font-size:calc(66 * var(--u))}
.ref{font-size:calc(28 * var(--u));letter-spacing:.22em;text-transform:uppercase;color:var(--or);
  font-family:'Playfair Display SC','Playfair Display',serif;margin-top:calc(34 * var(--u));font-weight:500}
.texte + .ref{margin-top:calc(44 * var(--u))}
.note{font-size:calc(36 * var(--u));color:var(--bleu);margin-top:calc(60 * var(--u));letter-spacing:.02em;font-style:italic}
.or{color:var(--or)}
.bleu{color:var(--bleu)}
.pager{position:absolute;right:64px;bottom:52px;font-size:26px;letter-spacing:.18em;opacity:.4}
.compte{position:absolute;left:0;right:0;bottom:52px;text-align:center;font-size:24px;letter-spacing:.12em;opacity:.5}
.couv .texte{font-size:calc(112 * var(--u));line-height:1.14;font-weight:500}
.couv .sous{font-size:calc(32 * var(--u));letter-spacing:.2em;text-transform:uppercase;color:var(--or);margin-top:calc(64 * var(--u));font-weight:500;line-height:1.5}
`

const page = ({ w, h, mx, top, bas, classe, corps, extra = '', photo }) => `<!doctype html>
<html lang="fr"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display+SC:wght@500&display=block" rel="stylesheet">
<style>${css}</style></head>
<body style="--w:${w}px;--h:${h}px;--mx:${mx}px;--top:${top}px;--bas:${bas}px">
${photo ? `<div class="photo" style="background-image:url('${photo}')"></div>` : ''}
<div class="cadre"><div class="contenu ${classe}">${corps}</div></div>
${extra}
</body></html>`

const diapoHtml = (d, i, total) => {
  const blocs = []
  if (d.texte) blocs.push(`<p class="texte">${enHtml(d.texte)}</p>`)
  if (d.verset) blocs.push(`<p class="verset">${enHtml(`« ${d.verset} »`)}</p>`)
  if (d.ref) blocs.push(`<p class="ref">${echapper(d.ref)}</p>`)
  if (d.note) blocs.push(`<p class="note">${enHtml(d.note)}</p>`)
  const classe = [i === 0 ? 'une' : '', !d.texte && d.verset ? 'seul' : ''].join(' ')
  const extra =
    `<div class="pager">${i + 1} / ${total}</div>` +
    (compte ? `<div class="compte">${echapper(compte)}</div>` : '')
  return page({ w: 1080, h: 1350, mx: 100, top: 110, bas: 130, classe, corps: blocs.join(''), extra, photo: d.photo })
}

const couvertureHtml = (c) =>
  page({
    w: 1080, h: 1920, mx: 90,
    // Carré visible dans la grille du profil : y 285 → 1635. On centre dedans.
    top: 330, bas: 330,
    classe: 'couv',
    corps: `<p class="texte"${c.taille ? ` style="font-size:calc(${112 * c.taille} * var(--u))"` : ''}>${enHtml(c.titre)}</p>${c.sousTitre ? `<p class="sous">${enHtml(c.sousTitre)}</p>` : ''}`,
    extra: compte ? `<div class="compte" style="bottom:300px">${echapper(compte)}</div>` : '',
    photo: c.photo,
  })

// Réduit la taille du texte jusqu'à ce qu'il tienne dans le cadre.
async function ajuster(p) {
  await p.evaluate(async () => {
    await document.fonts.ready
    const cadre = document.querySelector('.cadre')
    const contenu = document.querySelector('.contenu')
    let s = 1
    contenu.style.setProperty('--s', s)
    while (contenu.scrollHeight > cadre.clientHeight && s > 0.5) {
      s -= 0.03
      contenu.style.setProperty('--s', s)
    }
  })
}

// Les photos locales sont intégrées en data URI pour fonctionner partout.
function photoUrl(chemin) {
  if (!chemin) return undefined
  if (/^https?:/.test(chemin)) return chemin
  const abs = resolve(ici, chemin)
  if (!existsSync(abs)) {
    console.warn(`  ⚠ photo introuvable : ${chemin} (fond noir utilisé)`)
    return undefined
  }
  const type = { '.png': 'png', '.webp': 'webp' }[extname(abs).toLowerCase()] || 'jpeg'
  return `data:image/${type};base64,${readFileSync(abs).toString('base64')}`
}

// ---------- Fiches Markdown ----------

function ficheMarkdown(c) {
  const l = []
  l.push(`# CARROUSEL ${c.id.slice(1)} — ${c.theme}`, '')
  l.push(`> Fiche générée depuis \`visuels/contenus.mjs\` : modifie ce fichier-là puis relance \`node visuels/generer.mjs\`.`)
  l.push(`> Images prêtes à publier : \`visuels/rendu/${c.id}-${c.slug}/\`. **Gras** = doré · ***gras italique*** = bleu fluorescent.`, '')
  l.push(`**Cible :** ${c.cible}  `, `**Angle :** ${c.angle}  `, `**Format :** ${c.diapos.length} diapositives · 1080 × 1350`, '')
  l.push('## 1. Thème', '', c.theme, '')
  l.push('## 2–3. Textes des diapositives et suggestions visuelles', '')
  c.diapos.forEach((d, i) => {
    l.push(`### Diapositive ${i + 1}`, '')
    if (d.texte) enMarkdown(d.texte).split('\n').forEach((x) => l.push(x ? `> ${x}  ` : '>'))
    if (d.texte && d.verset) l.push('>')
    if (d.verset) l.push(`> *« ${enMarkdown(d.verset)} »*  `)
    if (d.ref) l.push(`> — ${d.ref.toUpperCase()}  `)
    if (d.note) l.push('>', `> ${enMarkdown(d.note)}`)
    l.push('', `🎞️ **Visuel :** ${d.visuel}`, '')
  })
  l.push('## 4. Légende', '', c.legende, '')
  l.push('## 5. Hashtags', '', c.hashtags.join(' '), '')
  return l.join('\n')
}

// ---------- Rendu ----------

const navigateur = await chromium.launch()
const contexte = await navigateur.newContext({ deviceScaleFactor: 1 })
const p = await contexte.newPage()

async function capturer(html, w, h, fichier) {
  await p.setViewportSize({ width: w, height: h })
  await p.setContent(html, { waitUntil: 'networkidle' })
  await ajuster(p)
  mkdirSync(dirname(fichier), { recursive: true })
  await p.screenshot({ path: fichier, clip: { x: 0, y: 0, width: w, height: h } })
}

for (const c of carrousels) {
  if (filtre && filtre !== c.id) continue
  const dossier = join(ici, 'rendu', `${c.id}-${c.slug}`)
  for (const [i, d] of c.diapos.entries()) {
    const html = diapoHtml({ ...d, photo: photoUrl(d.photo) }, i, c.diapos.length)
    await capturer(html, 1080, 1350, join(dossier, `${String(i + 1).padStart(2, '0')}.png`))
  }
  writeFileSync(join(racine, 'carrousels', `${c.id}-${c.slug}.md`), ficheMarkdown(c))
  console.log(`✓ ${c.id} : ${c.diapos.length} diapositives + fiche`)
}

for (const c of couvertures) {
  if (filtre && filtre !== c.id) continue
  await capturer(couvertureHtml({ ...c, photo: photoUrl(c.photo) }), 1080, 1920, join(ici, 'rendu', 'couvertures-reels', `${c.id}.png`))
  console.log(`✓ couverture ${c.id}`)
}

await navigateur.close()
