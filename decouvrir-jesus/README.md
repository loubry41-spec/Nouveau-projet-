# Découvrir Jésus

Une petite application web pour les personnes qui ne connaissent pas Jésus : en ouvrant la page, elles
choisissent d'aller voir le compte Instagram ou de lire la Bible (Évangile de Jean, version Louis Segond).

## Personnaliser

Dans `index.html`, en bas du fichier, modifie :

```js
const LIEN_INSTAGRAM = "https://www.instagram.com/tonpseudo/";
const LIEN_BIBLE = "https://www.biblegateway.com/passage/?search=Jean+1&version=LSG";
const EGLISE = { nom: "...", infos: "adresse · horaires", lien: "https://..." };
```

Tant que `EGLISE.nom` est vide, la partie « église locale » reste cachée.

## Affiche avec QR code

Ouvre `affiche.html` (une fois l'app en ligne) : le QR code pointe automatiquement vers l'app.
Clique sur « Imprimer l'affiche » pour obtenir une feuille A4 à coller ou distribuer.

## Mettre en ligne (gratuit) avec GitHub Pages

1. Sur GitHub, ouvre le dépôt puis **Settings → Pages**.
2. *Source* : **Deploy from a branch**.
3. *Branch* : choisis la branche qui contient le dossier `decouvrir-jesus` (`main` une fois fusionnée,
   ou directement `claude/vibrant-hamilton-tmxp5l`), dossier **/ (root)**, puis **Save**.
4. Attends 1 à 2 minutes : l'app est en ligne à
   https://loubry41-spec.github.io/Nouveau-projet-/decouvrir-jesus/

C'est cette adresse que contient le QR code de l'affiche.

Partage ce lien (ou un QR code de ce lien) : sur téléphone, on peut l'ajouter à l'écran d'accueil
(« Ajouter à l'écran d'accueil ») et elle s'ouvre comme une vraie application.

## Tester en local

```bash
cd decouvrir-jesus
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```
