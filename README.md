# Portfolio - Antoine Dot

Code source de mon portfolio, publié sur **[fingollfinn.github.io](https://fingollfinn.github.io)**.

Étudiant en BUT Science des Données à l'IUT2 de Grenoble-Alpes, je recherche une alternance d'un an.
Le site présente mes projets personnels et mes travaux académiques (SAE).

## Stack

HTML et CSS écrits à la main, avec un peu de JavaScript natif. Pas de framework, pas d'étape de build :
le dépôt est servi tel quel par GitHub Pages.

- Typographie : IBM Plex Sans / IBM Plex Mono (Google Fonts)
- Palette : Solarized dark, définie par des variables CSS dans `styles/base.css`

## Structure

```
index.html                  Page d'accueil
academic/
  academic.html             Index des travaux académiques
  sae_pages/                Une fiche par SAE (ETL, séries temporelles, RGPD, R Shiny, ArcGIS)
styles/
  base.css                  Variables (couleurs, typo, espacements) et règles communes
  style.css                 Styles de l'accueil
  style_academic.css        Styles des pages académiques
scripts/
  zoomin.js                 Agrandissement des images des galeries (modale <dialog>)
assets/                     Captures, vignettes WebP (thumbs/) et CV
```

## Lancer en local

Aucune dépendance ni étape de build : il suffit de cloner le dépôt et d'ouvrir `index.html` dans un navigateur.
