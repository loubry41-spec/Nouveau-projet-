# Carrousel Instagram — « Viens à Jésus »

Carrousel chrétien de 6 slides au format 4:5 (1080 × 1350 px). Univers noir profond, bleu électrique et blanc, typographie massive.

## Slides prêtes à publier

Dossier `export/` : `slide-1.png` → `slide-6.png`, à publier dans cet ordre.

| # | Thème | Référence |
|---|-------|-----------|
| 1 | Il vient briser tes chaînes | Jean 8:36 |
| 2 | Il restaure ce qui est brisé | Psaume 147:3 |
| 3 | Il vient guérir | Ésaïe 53:5 |
| 4 | Son Esprit redonne la vie | Romains 8:11 |
| 5 | Il relève celui qui est fatigué | Matthieu 11:28 |
| 6 | Viens à Jésus | Matthieu 11:28 |

## Légende proposée

> Tu n’es pas né pour vivre enchaîné. 🔗✨
>
> Ce que la vie a brisé, Jésus peut le restaurer. Tes blessures ne sont pas plus grandes que sa puissance. Et là où tu n’as plus de force, son Esprit agit encore.
>
> Il n’est pas trop tard. Jésus est vivant, il t’aime et il t’appelle aujourd’hui.
>
> « Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos. » — Matthieu 11:28
>
> 💬 Écris « AMEN » si tu veux venir à lui aujourd’hui.
> 📤 Partage ce message à quelqu’un qui en a besoin.
>
> #Jésus #Foi #Espérance #Liberté #Guérison #SaintEsprit #Évangile #Dieu #Chrétien #Bible

## Modifier les slides

- **Textes** : `slides.js`. Les mots entre `[crochets]` passent en bleu électrique et `|` force un retour à la ligne.
- **Style** : `slide.html` (couleurs, polices, dégradés, mise en page).
- **Visuels** : `visuels/slide-N.jpg` (générés avec Canva IA, 2160 × 2700).
- **Régénérer les PNG** : `node render.js` (ou `node render.js 3` pour une seule slide). Nécessite Playwright.

Polices (licence SIL OFL) : Anton (titres), Inter (textes) et Cormorant Garamond italique (citation), incluses dans `fonts/`.
