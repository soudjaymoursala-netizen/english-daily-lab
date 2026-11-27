# English Daily Lab

Application web personnelle pour passer de l'anglais B2 au C2, pensée pour un ingénieur CQV/CSV francophone.

- **10 mots + 10 expressions par jour** : Pharma/BPF, CQV·CSV, ingénierie, anglais pro général, voyage.
- **L'oreille d'abord** : on écoute avant de lire, quiz audio et dictées corrigées mot à mot.
- **Prononciation** : transcription IPA, astuces pour francophones, shadowing avec reconnaissance vocale.
- **Répétition espacée** (1, 2, 4, 7, 15, 30, 60, 120 jours) et rappel actif.
- **Profil et test de positionnement** A2 → C2 (vocabulaire, grammaire, écoute, dictée), leçons adaptées au niveau.
- **Anglais général + métier** : 180 mots et 110 expressions généraux par niveau (phrasal verbs, idiomes), en plus des cartes métier.
- **Dialogues à deux voix** (12 scénarios : audit, QI, déviation, entretien, voyage…) avec questions de compréhension et **jeux de rôle oraux** corrigés par la reconnaissance vocale.
- **Entraînement rejouable** (écoute, dictée, vocabulaire, grammaire, mélange) et **examens de passage** au niveau supérieur.

## Utilisation

Ouvrez `index.html` dans Chrome ou Edge (voix et micro du navigateur), ou la version GitHub Pages du dépôt.
La progression est enregistrée dans le navigateur (`localStorage`) ; la page Progrès permet de copier/restaurer une sauvegarde.

L'app est 100 % statique et gratuite : aucune IA ni clé d'API à l'exécution, aucun compte. Tout le contenu est écrit à l'avance ; l'audio et le micro passent par les API du navigateur (`speechSynthesis`, `SpeechRecognition`). Pour les voix les plus naturelles, utilisez Edge (voix « Natural ») ou Chrome (voix « Google »).

## Fichiers

- `index.html` : l'application (HTML, CSS, JS sans dépendance).
- `data.js` : cartes métier (pharma, CQV/CSV, ingénierie, pro, voyage).
- `data-general.js` : anglais général par niveau CECRL et banque de grammaire.
- `data-dialogues.js` : dialogues, questions de compréhension et grammaire supplémentaire.
