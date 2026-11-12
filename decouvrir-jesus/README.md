# Découvrir Jésus

Une petite application web pour les personnes qui ne connaissent pas Jésus : en ouvrant la page, elles
choisissent d'aller voir le compte Instagram ou de lire la Bible (Évangile de Jean, version Louis Segond).

## Personnaliser

Dans `index.html`, en bas du fichier, modifie :

```js
const LIEN_INSTAGRAM = "https://www.instagram.com/tonpseudo/";
const LIEN_BIBLE = "https://www.biblegateway.com/passage/?search=Jean+1&version=LSG";
```

## Mettre en ligne (gratuit) avec GitHub Pages

1. Sur GitHub : **Settings → Pages**.
2. Source : *Deploy from a branch*, branche `main`, dossier `/ (root)`.
3. L'app sera accessible à `https://<ton-compte>.github.io/<nom-du-depot>/decouvrir-jesus/`.

Partage ce lien (ou un QR code de ce lien) : sur téléphone, on peut l'ajouter à l'écran d'accueil
(« Ajouter à l'écran d'accueil ») et elle s'ouvre comme une vraie application.

## Tester en local

```bash
cd decouvrir-jesus
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```
