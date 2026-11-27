# English Daily Lab

Application web personnelle pour passer de l'anglais B2 au C2, pensée pour un ingénieur CQV/CSV francophone.

- **10 mots + 10 expressions par jour** : Pharma/BPF, CQV·CSV, ingénierie, anglais pro général, voyage.
- **L'oreille d'abord** : on écoute avant de lire, quiz audio et dictées corrigées mot à mot.
- **Prononciation** : transcription IPA, astuces pour francophones, shadowing avec reconnaissance vocale.
- **Répétition espacée** (1, 2, 4, 7, 15, 30, 60, 120 jours) et rappel actif.

## Utilisation

Ouvrez `index.html` dans Chrome ou Edge (voix et micro du navigateur), ou la version GitHub Pages du dépôt.
La progression est enregistrée dans le navigateur (`localStorage`) ; la page Progrès permet de copier/restaurer une sauvegarde.

Dans Claude (artifact), l'app utilise en plus la voix Claude, la dictée Claude, la synchronisation du compte et la génération de nouvelles cartes.

## Fichiers

- `index.html` : l'application (HTML, CSS, JS sans dépendance).
- `data.js` : la banque de mots et d'expressions. Pour ajouter du contenu, ajoutez des lignes dans `EN_WORDS` ou `EN_EXPR`.
