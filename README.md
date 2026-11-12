# Page Instagram chrétienne : kit de contenus

Faire connaître Jésus à ceux qui ne croient pas, qui doutent, qui souffrent ou qui se sont éloignés de Dieu.

Ce dépôt contient **deux semaines de publications prêtes à produire**, la charte graphique, la stratégie, et un générateur qui fabrique les visuels au bon format.

## Contenu

| Dossier / fichier | Ce que tu y trouves |
|---|---|
| `00-prompt-maitre.md` | Le prompt maître, à coller dans une IA pour créer de nouveaux contenus dans le même esprit. |
| `01-charte-graphique.md` | Formats, couleurs, typographie, photo, montage, et comment reproduire la charte dans Canva. |
| `02-strategie-editoriale.md` | Rythme de publication, calendrier des 4 premières semaines, indicateurs, réponses aux messages, registre anti-répétition. |
| `reels/` | **6 Reels** complets : titre, accroche, voix off, découpage scène par scène, visuels, textes à l'écran, légende, hashtags. |
| `carrousels/` | **4 carrousels** de 9 diapositives : textes exacts, visuels, légende, hashtags. |
| `temoignages/guide-temoignage.md` | Comment recueillir de **vrais** témoignages (consentement, questions, formats). |
| `references-bibliques.md` | Le texte exact de chaque verset cité (Louis Segond 1910), pour vérifier avant publication. |
| `visuels/rendu/` | **Les images prêtes à publier** : 36 diapositives de carrousel (1080 × 1350) et 6 couvertures de Reels (1080 × 1920). |

### Les 6 Reels

| Code | Titre | Thème | Passage |
|---|---|---|---|
| R01 | 3h17 | Insomnie, anxiété | Matthieu 11:28 |
| R02 | Ce que tu supprimes revient toujours | Honte, secret | Colossiens 2:14 · 1 Jean 1:9 |
| R03 | Le Père qui court | S'être éloigné de Dieu | Luc 15 |
| R04 | Il avait juré de ne jamais le trahir | Échec, restauration (Pierre) | Luc 22 · Jean 21 |
| R05 | Tout repose sur un tombeau vide | Doute : la résurrection | 1 Corinthiens 15 |
| R06 | Une seule phrase | Grâce (le malfaiteur sur la croix) | Luc 23:39-43 |

### Les 4 carrousels

| Code | Thème | Passage |
|---|---|---|
| C01 | Être connu entièrement… et aimé quand même | Jean 4 (la Samaritaine) |
| C02 | Pourquoi Jésus devait-il mourir ? | Romains 3 et 6 · Ésaïe 53 |
| C03 | « Je suis quelqu'un de bien », est-ce que ça suffit ? | Romains 3:10 · Éphésiens 2:8-9 |
| C04 | « Si Dieu existe, pourquoi il ne fait rien ? » | Jean 11 · Apocalypse 21:4 |

## Publier un carrousel

1. Ouvre `visuels/rendu/C0X-…/` : les images `01.png` à `09.png` sont dans l'ordre.
2. Copie la légende et les hashtags depuis `carrousels/C0X-….md`.
3. (Facultatif) Ajoute des photos en fond, voir plus bas.

## Produire un Reel

1. Enregistre la voix off (section 3 de la fiche) au téléphone, dans une pièce calme, près du micro.
2. Récupère les plans suggérés (Pexels / Mixkit, mots-clés dans la charte) ou filme-les toi-même.
3. Monte dans CapCut ou InShot en suivant le tableau scène par scène ; ajoute les textes à l'écran en Playfair Display.
4. Utilise `visuels/rendu/couvertures-reels/R0X.png` comme couverture.

## Modifier ou créer des visuels

Toutes les diapositives et couvertures viennent d'un seul fichier : `visuels/contenus.mjs`.

* `**mot**` affiche le mot en **doré**, `==mot==` en **bleu fluorescent**, `\n` fait un retour à la ligne.
* Pour ajouter une photo de fond à une diapositive : place l'image dans `visuels/photos/` et ajoute `photo: 'photos/mon-image.jpg'` à la diapositive (elle sera assombrie automatiquement).
* Pour afficher ton nom de compte en bas des visuels : renseigne `compte` en haut du fichier.

Puis régénère (nécessite Node.js et Playwright) :

```bash
npm install playwright && npx playwright install chromium   # une seule fois
node visuels/generer.mjs          # tout régénérer
node visuels/generer.mjs C02      # un seul carrousel
```

Les fiches `carrousels/*.md` sont régénérées en même temps : modifie `contenus.mjs`, pas les fiches.

## Créer la suite

Colle `00-prompt-maitre.md` dans une IA, ajoute le **registre** de `02-strategie-editoriale.md`, puis demande par exemple :

> « Fais-moi le REEL du lundi de la semaine 3 : "Tu as 400 amis et personne à appeler". »

Vérifie toujours chaque verset dans `references-bibliques.md` ou dans ta Bible avant de publier.
