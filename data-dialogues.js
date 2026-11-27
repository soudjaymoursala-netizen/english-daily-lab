/* Dialogues audio à deux voix + jeux de rôle.
   Chaque réplique : [locuteur "A" ou "B", anglais, français]. Dans le jeu de rôle, vous jouez B.
   Questions : [question en français, [options], index de la bonne réponse]. */
window.EN_DIALOGUES = [
  {
    id: "audit-opening", lvl: "B2", dom: "pharma", title: "Ouverture d'un audit fournisseur",
    ctx: "Un auditeur client (A) arrive sur votre site. Vous (B) l'accueillez et présentez le programme.",
    names: ["Sarah, auditrice", "Vous"],
    lines: [
      ["A", "Good morning. Thanks for having us. Shall we start with a quick overview of the site?", "Bonjour. Merci de nous recevoir. On commence par une rapide présentation du site ?"],
      ["B", "Of course. We manufacture sterile injectables and we have three filling lines.", "Bien sûr. Nous fabriquons des injectables stériles et nous avons trois lignes de remplissage."],
      ["A", "Great. I'd also like to look at your deviation and CAPA system this afternoon.", "Très bien. J'aimerais aussi examiner votre système de déviations et de CAPA cet après-midi."],
      ["B", "No problem. Our QA manager will walk you through the open deviations.", "Pas de problème. Notre responsable AQ vous présentera les déviations ouvertes."],
      ["A", "How many deviations did you raise last year?", "Combien de déviations avez-vous ouvertes l'an dernier ?"],
      ["B", "Around one hundred and twenty, and ninety percent were closed on time.", "Environ cent vingt, et quatre-vingt-dix pour cent ont été clôturées dans les délais."],
      ["A", "That sounds reasonable. Could I also see the audit trail review records?", "Ça semble raisonnable. Pourrais-je aussi voir les enregistrements de revue de piste d'audit ?"],
      ["B", "Certainly. I'll have them ready in the meeting room by eleven.", "Certainement. Je les ferai préparer en salle de réunion pour onze heures."]
    ],
    qs: [
      ["Que fabrique le site ?", ["Des comprimés", "Des injectables stériles", "Des dispositifs médicaux", "Des crèmes"], 1],
      ["Combien de déviations ont été ouvertes l'an dernier ?", ["Environ 20", "Environ 90", "Environ 120", "Environ 200"], 2],
      ["Quel document l'auditrice veut-elle voir à la fin ?", ["Les certificats d'étalonnage", "Les revues de piste d'audit", "Le plan de validation", "Les fiches de formation"], 1]
    ]
  },
  {
    id: "iq-review", lvl: "B2", dom: "cqv", title: "Revue d'un protocole de QI",
    ctx: "Un collègue de l'AQ (A) relit votre protocole de qualification d'installation. Vous (B) êtes l'ingénieur validation.",
    names: ["Tom, AQ", "Vous"],
    lines: [
      ["A", "I've gone through your IQ protocol. Overall it looks good, but I have a few comments.", "J'ai relu ton protocole de QI. Dans l'ensemble c'est bien, mais j'ai quelques remarques."],
      ["B", "Sure, go ahead. I'd rather fix them before we execute.", "Bien sûr, vas-y. Je préfère les corriger avant l'exécution."],
      ["A", "Section five doesn't trace back to the user requirements. Can you add the URS references?", "La section cinq n'est pas tracée vers les exigences utilisateur. Peux-tu ajouter les références URS ?"],
      ["B", "Good catch. I'll update the traceability matrix as well.", "Bien vu. Je mettrai aussi à jour la matrice de traçabilité."],
      ["A", "Also, the acceptance criteria for the calibration check are a bit vague.", "Aussi, les critères d'acceptation pour la vérification d'étalonnage sont un peu vagues."],
      ["B", "Agreed. I'll state that every instrument must be within its calibration date.", "D'accord. J'indiquerai que chaque instrument doit être dans sa date d'étalonnage."],
      ["A", "Perfect. Once that's done, send it back and I'll sign it off.", "Parfait. Une fois fait, renvoie-le et je l'approuverai."],
      ["B", "Thanks. You'll have the updated version by tomorrow morning.", "Merci. Tu auras la version à jour demain matin."]
    ],
    qs: [
      ["Quel est le problème de la section cinq ?", ["Elle est trop longue", "Elle n'est pas tracée vers l'URS", "Elle contient une erreur de calcul", "Elle manque de signatures"], 1],
      ["Qu'est-ce qui est jugé trop vague ?", ["Le plan de test", "Les critères d'acceptation d'étalonnage", "La liste des instruments", "Le résumé"], 1],
      ["Quand la nouvelle version sera-t-elle envoyée ?", ["Ce soir", "Demain matin", "La semaine prochaine", "Dans une heure"], 1]
    ]
  },
  {
    id: "pump-failure", lvl: "B1", dom: "eng", title: "Panne sur la ligne",
    ctx: "Le technicien de maintenance (A) vous appelle : une pompe s'est arrêtée. Vous (B) êtes l'ingénieur de permanence.",
    names: ["Mike, maintenance", "Vous"],
    lines: [
      ["A", "Hi, it's Mike from maintenance. The transfer pump on line two has just tripped.", "Salut, c'est Mike de la maintenance. La pompe de transfert de la ligne deux vient de disjoncter."],
      ["B", "Okay. Is the line still running, or have you stopped it?", "D'accord. La ligne tourne encore ou tu l'as arrêtée ?"],
      ["A", "We've stopped it and isolated the pump. It's making a strange noise.", "On l'a arrêtée et on a consigné la pompe. Elle fait un bruit bizarre."],
      ["B", "It might be a worn bearing. Do we have a spare pump in stock?", "C'est peut-être un roulement usé. Est-ce qu'on a une pompe de rechange en stock ?"],
      ["A", "Yes, we have one. We can swap it in about two hours.", "Oui, on en a une. On peut la remplacer en deux heures environ."],
      ["B", "Great. Please raise a work order, and I'll inform production and QA.", "Super. Merci d'ouvrir un ordre de travail, et je préviens la production et l'AQ."],
      ["A", "Will do. I'll call you once it's up and running again.", "Entendu. Je te rappelle dès que ça tourne à nouveau."]
    ],
    qs: [
      ["Quel équipement est en panne ?", ["Une vanne", "La pompe de transfert", "Le capteur de température", "Le système CVC"], 1],
      ["Combien de temps pour le remplacement ?", ["30 minutes", "Environ deux heures", "Une journée", "Une semaine"], 1],
      ["Qui l'ingénieur va-t-il prévenir ?", ["Le fournisseur", "La production et l'AQ", "Le directeur du site", "Les pompiers"], 1]
    ]
  },
  {
    id: "deviation-meeting", lvl: "C1", dom: "pharma", title: "Réunion de déviation",
    ctx: "La responsable qualité (A) anime une réunion sur un dépassement de température. Vous (B) présentez l'analyse.",
    names: ["Linda, responsable qualité", "Vous"],
    lines: [
      ["A", "Let's get started. Can you summarise what happened on Tuesday night?", "Commençons. Peux-tu résumer ce qui s'est passé mardi soir ?"],
      ["B", "The cold room went above eight degrees for about forty minutes after a power cut.", "La chambre froide est montée au-dessus de huit degrés pendant environ quarante minutes après une coupure de courant."],
      ["A", "Was any product stored in there at the time?", "Y avait-il du produit stocké à ce moment-là ?"],
      ["B", "Yes, two batches. Based on the stability data, we don't expect any impact on quality.", "Oui, deux lots. D'après les données de stabilité, nous n'attendons aucun impact sur la qualité."],
      ["A", "And why didn't the backup generator kick in?", "Et pourquoi le groupe électrogène ne s'est-il pas déclenché ?"],
      ["B", "The transfer switch failed. That's our root cause, and it hadn't been tested since commissioning.", "L'inverseur de source a lâché. C'est notre cause racine, et il n'avait pas été testé depuis la mise en service."],
      ["A", "So the CAPA should include a periodic test of the switch, right?", "Donc la CAPA devrait inclure un test périodique de l'inverseur, c'est bien ça ?"],
      ["B", "Exactly. We'll add it to the preventive maintenance plan, every six months.", "Exactement. Nous l'ajouterons au plan de maintenance préventive, tous les six mois."]
    ],
    qs: [
      ["Combien de temps a duré le dépassement ?", ["Environ 4 minutes", "Environ 40 minutes", "Environ 4 heures", "Toute la nuit"], 1],
      ["Quelle est la cause racine ?", ["Une porte restée ouverte", "L'inverseur de source défaillant", "Un capteur mal étalonné", "Une erreur humaine"], 1],
      ["À quelle fréquence l'inverseur sera-t-il testé ?", ["Chaque mois", "Tous les six mois", "Chaque année", "Après chaque coupure"], 1]
    ]
  },
  {
    id: "supplier-call", lvl: "B2", dom: "pro", title: "Appel à un fournisseur en retard",
    ctx: "Vous (B) appelez un fournisseur (A) dont la livraison est en retard.",
    names: ["Jenny, fournisseur", "Vous"],
    lines: [
      ["A", "Good afternoon, Jenny speaking. How can I help?", "Bon après-midi, Jenny à l'appareil. Que puis-je pour vous ?"],
      ["B", "Hi Jenny, I'm calling about our order of filters. It was due last Friday.", "Bonjour Jenny, j'appelle au sujet de notre commande de filtres. Elle était prévue vendredi dernier."],
      ["A", "Let me check. I'm afraid there's a delay at our factory. It should ship next Wednesday.", "Je vérifie. Je crains qu'il y ait un retard à notre usine. L'expédition devrait se faire mercredi prochain."],
      ["B", "That's a problem for us. Our shutdown starts on Monday. Is there any way to speed it up?", "C'est un problème pour nous. Notre arrêt commence lundi. Y a-t-il un moyen d'accélérer ?"],
      ["A", "We could send part of the order by express, but there would be an extra charge.", "Nous pourrions envoyer une partie de la commande en express, mais avec un supplément."],
      ["B", "How much would that be?", "Combien cela coûterait-il ?"],
      ["A", "Around three hundred euros for twenty filters.", "Environ trois cents euros pour vingt filtres."],
      ["B", "Okay, let's do that. Please send me a confirmation by email.", "D'accord, faisons comme ça. Merci de m'envoyer une confirmation par e-mail."]
    ],
    qs: [
      ["Quand la commande était-elle prévue ?", ["Lundi", "Vendredi dernier", "Mercredi prochain", "Hier"], 1],
      ["Pourquoi le retard pose-t-il problème ?", ["Le budget est dépassé", "L'arrêt technique commence lundi", "Le fournisseur change", "Un audit approche"], 1],
      ["Que coûte l'envoi express ?", ["30 euros", "300 euros", "3 000 euros", "C'est gratuit"], 1]
    ]
  },
  {
    id: "project-update", lvl: "B2", dom: "pro", title: "Point d'avancement projet",
    ctx: "Votre manager (A) vous demande où en est le projet de validation. Vous (B) faites le point.",
    names: ["David, manager", "Vous"],
    lines: [
      ["A", "Could you give me a quick update on the new packaging line?", "Tu peux me faire un point rapide sur la nouvelle ligne de conditionnement ?"],
      ["B", "Sure. Commissioning is done, and we started the OQ yesterday.", "Bien sûr. La mise en service est terminée et nous avons commencé la QO hier."],
      ["A", "Are we still on track for the go-live at the end of the month?", "Sommes-nous toujours dans les temps pour le démarrage à la fin du mois ?"],
      ["B", "Mostly, but we're waiting for the vendor's software patch. That's our main risk.", "Globalement oui, mais nous attendons le correctif logiciel du fournisseur. C'est notre principal risque."],
      ["A", "What's the worst-case scenario?", "Quel est le pire scénario ?"],
      ["B", "If the patch arrives late, we'll slip by one week.", "Si le correctif arrive en retard, nous glisserons d'une semaine."],
      ["A", "Okay, keep me in the loop and let me know if you need me to escalate.", "D'accord, tiens-moi informé et dis-moi si tu as besoin que je fasse remonter."]
    ],
    qs: [
      ["Quelle étape a commencé hier ?", ["La mise en service", "La QO", "La QP", "La formation"], 1],
      ["Quel est le principal risque ?", ["Un manque de personnel", "Le correctif logiciel du fournisseur", "Une panne de machine", "Le budget"], 1],
      ["Quel serait le retard dans le pire cas ?", ["Un jour", "Une semaine", "Un mois", "Aucun"], 1]
    ]
  },
  {
    id: "job-interview", lvl: "B2", dom: "pro", title: "Entretien d'embauche",
    ctx: "Une recruteuse (A) vous interroge pour un poste d'ingénieur validation à l'international. Vous (B) répondez.",
    names: ["Emma, recruteuse", "Vous"],
    lines: [
      ["A", "Tell me a bit about yourself and your current role.", "Parlez-moi un peu de vous et de votre poste actuel."],
      ["B", "I'm a CQV engineer. I qualify equipment and validate computerized systems in a pharmaceutical plant.", "Je suis ingénieur CQV. Je qualifie des équipements et je valide des systèmes informatisés dans une usine pharmaceutique."],
      ["A", "What's the most challenging project you've worked on?", "Quel est le projet le plus difficile sur lequel vous avez travaillé ?"],
      ["B", "Validating a new MES system under a very tight deadline, with several vendors involved.", "La validation d'un nouveau MES avec un délai très serré et plusieurs fournisseurs impliqués."],
      ["A", "How did you handle the pressure?", "Comment avez-vous géré la pression ?"],
      ["B", "I used a risk-based approach to focus on critical functions, and I kept stakeholders informed every week.", "J'ai utilisé une approche basée sur le risque pour me concentrer sur les fonctions critiques, et j'ai informé les parties prenantes chaque semaine."],
      ["A", "Why do you want to work abroad?", "Pourquoi voulez-vous travailler à l'étranger ?"],
      ["B", "I want to broaden my experience and work in an international team.", "Je veux élargir mon expérience et travailler dans une équipe internationale."]
    ],
    qs: [
      ["Quel système le candidat a-t-il validé ?", ["Un ERP", "Un MES", "Un LIMS", "Un SCADA"], 1],
      ["Comment a-t-il priorisé son travail ?", ["En travaillant le week-end", "Avec une approche basée sur le risque", "En embauchant des consultants", "En reportant le projet"], 1],
      ["Pourquoi veut-il partir à l'étranger ?", ["Pour le salaire", "Pour élargir son expérience", "Pour apprendre l'espagnol", "Pour sa famille"], 1]
    ]
  },
  {
    id: "small-talk", lvl: "B1", dom: "gen", title: "Discussion à la machine à café",
    ctx: "Un collègue américain (A) discute avec vous (B) le lundi matin.",
    names: ["Jake, collègue", "Vous"],
    lines: [
      ["A", "Hey, how was your weekend?", "Salut, ton week-end s'est bien passé ?"],
      ["B", "Pretty good, thanks. I went hiking in the mountains with my family.", "Plutôt bien, merci. Je suis allé faire de la randonnée en montagne avec ma famille."],
      ["A", "Nice! The weather was great, wasn't it?", "Sympa ! Il a fait super beau, non ?"],
      ["B", "Yes, it was perfect. How about you?", "Oui, c'était parfait. Et toi ?"],
      ["A", "Not much. I mostly caught up on sleep and watched the game.", "Pas grand-chose. J'ai surtout rattrapé mon sommeil et regardé le match."],
      ["B", "Sounds relaxing. Did your team win?", "Ça a l'air reposant. Ton équipe a gagné ?"],
      ["A", "No, they lost in the last minute. I'm still upset about it!", "Non, ils ont perdu à la dernière minute. J'en suis encore contrarié !"],
      ["B", "Oh no, better luck next time. Anyway, I'd better get to my meeting.", "Oh non, ce sera pour la prochaine fois. Bon, je ferais mieux d'aller à ma réunion."]
    ],
    qs: [
      ["Qu'avez-vous fait ce week-end ?", ["Du vélo", "De la randonnée en montagne", "Du shopping", "Rien de spécial"], 1],
      ["Qu'a fait Jake ?", ["Il a voyagé", "Il a dormi et regardé un match", "Il a travaillé", "Il a déménagé"], 1],
      ["Comment s'est terminé le match ?", ["Victoire", "Match nul", "Défaite à la dernière minute", "Annulé"], 2]
    ]
  },
  {
    id: "hotel-checkin", lvl: "B1", dom: "travel", title: "Arrivée à l'hôtel",
    ctx: "Vous (B) arrivez dans un hôtel à Boston pour un déplacement professionnel. Le réceptionniste (A) vous accueille.",
    names: ["Réceptionniste", "Vous"],
    lines: [
      ["A", "Good evening, welcome to the Harbor Hotel. Do you have a reservation?", "Bonsoir, bienvenue au Harbor Hotel. Vous avez une réservation ?"],
      ["B", "Yes, I have a reservation under the name Martin, for three nights.", "Oui, j'ai une réservation au nom de Martin, pour trois nuits."],
      ["A", "Let me see. Yes, a king room. Can I have your passport and a credit card, please?", "Voyons. Oui, une chambre avec grand lit. Puis-je avoir votre passeport et une carte de crédit ?"],
      ["B", "Here you go. Is breakfast included?", "Voici. Le petit-déjeuner est-il inclus ?"],
      ["A", "It is. It's served from six thirty to ten in the restaurant on the ground floor.", "Oui. Il est servi de six heures trente à dix heures au restaurant du rez-de-chaussée."],
      ["B", "Great. And what's the Wi-Fi password?", "Parfait. Et quel est le mot de passe du Wi-Fi ?"],
      ["A", "It's on the card with your key. You're in room four twelve. Enjoy your stay!", "Il est sur la carte avec votre clé. Vous êtes en chambre quatre cent douze. Bon séjour !"]
    ],
    qs: [
      ["Pour combien de nuits ?", ["Deux", "Trois", "Quatre", "Une semaine"], 1],
      ["À quelle heure finit le petit-déjeuner ?", ["9 h", "9 h 30", "10 h", "10 h 30"], 2],
      ["Quel est le numéro de chambre ?", ["214", "412", "421", "40"], 1]
    ]
  },
  {
    id: "flight-delay", lvl: "B2", dom: "travel", title: "Vol annulé à l'aéroport",
    ctx: "Votre vol de correspondance est annulé. Vous (B) parlez à l'agent de la compagnie (A).",
    names: ["Agent de la compagnie", "Vous"],
    lines: [
      ["A", "Next, please. How can I help you?", "Suivant, s'il vous plaît. Que puis-je pour vous ?"],
      ["B", "My connecting flight to Chicago has been cancelled. I have a meeting there tomorrow morning.", "Mon vol de correspondance pour Chicago a été annulé. J'ai une réunion là-bas demain matin."],
      ["A", "I'm sorry about that. The next available flight leaves at six fifteen tomorrow morning.", "J'en suis désolé. Le prochain vol disponible part demain à six heures quinze."],
      ["B", "That's too late for my meeting. Is there anything tonight, even with another airline?", "C'est trop tard pour ma réunion. Y a-t-il quelque chose ce soir, même avec une autre compagnie ?"],
      ["A", "Let me check. There's a flight with a partner airline at nine forty tonight, but it's an aisle seat at the back.", "Je regarde. Il y a un vol avec une compagnie partenaire ce soir à vingt et une heures quarante, mais c'est un siège côté couloir à l'arrière."],
      ["B", "That's fine. I'll take it. What about my checked luggage?", "Ça me va. Je le prends. Et mon bagage en soute ?"],
      ["A", "It will be transferred automatically. Here's your new boarding pass.", "Il sera transféré automatiquement. Voici votre nouvelle carte d'embarquement."]
    ],
    qs: [
      ["Quelle est la destination ?", ["New York", "Chicago", "Boston", "Denver"], 1],
      ["À quelle heure part le vol de remplacement choisi ?", ["6 h 15 demain", "19 h 40 ce soir", "21 h 40 ce soir", "Midi demain"], 2],
      ["Que devient le bagage ?", ["Il faut le récupérer", "Il est transféré automatiquement", "Il est perdu", "Il part le lendemain"], 1]
    ]
  },
  {
    id: "restaurant", lvl: "A2", dom: "travel", title: "Au restaurant",
    ctx: "Vous (B) dînez avec un collègue. Le serveur (A) prend la commande.",
    names: ["Serveur", "Vous"],
    lines: [
      ["A", "Hi there, are you ready to order?", "Bonjour, vous êtes prêts à commander ?"],
      ["B", "Yes, I'd like the grilled salmon, please.", "Oui, je voudrais le saumon grillé, s'il vous plaît."],
      ["A", "Sure. Would you like fries or a salad with that?", "Bien sûr. Avec des frites ou une salade ?"],
      ["B", "A salad, please. And a sparkling water.", "Une salade, s'il vous plaît. Et une eau pétillante."],
      ["A", "Anything else?", "Autre chose ?"],
      ["B", "No, that's all, thank you. Could we have the check together at the end?", "Non, ce sera tout, merci. Pourrions-nous avoir l'addition ensemble à la fin ?"],
      ["A", "Of course. I'll be right back with your drinks.", "Bien sûr. Je reviens tout de suite avec vos boissons."]
    ],
    qs: [
      ["Qu'est-ce que vous commandez ?", ["Un steak", "Du saumon grillé", "Des pâtes", "Un burger"], 1],
      ["Avec quel accompagnement ?", ["Des frites", "Une salade", "Du riz", "Des légumes"], 1],
      ["Quelle boisson ?", ["Un soda", "Une eau pétillante", "Un vin rouge", "Un café"], 1]
    ]
  },
  {
    id: "negotiation", lvl: "C1", dom: "pro", title: "Négociation d'un contrat",
    ctx: "Vous (B) négociez un contrat de prestation de validation avec un prestataire (A).",
    names: ["Richard, prestataire", "Vous"],
    lines: [
      ["A", "We've reviewed your scope, and our quote comes to eighty-five thousand euros.", "Nous avons étudié votre périmètre, et notre devis s'élève à quatre-vingt-cinq mille euros."],
      ["B", "Thank you. To be candid, that's well above our budget. We were expecting something closer to seventy.", "Merci. Pour être franc, c'est bien au-dessus de notre budget. Nous attendions plutôt autour de soixante-dix."],
      ["A", "I understand. The main cost driver is the computer system validation, which is quite labour-intensive.", "Je comprends. Le principal poste de coût est la validation du système informatisé, qui demande beaucoup de main-d'œuvre."],
      ["B", "What if we leverage the vendor's test documentation instead of writing everything from scratch?", "Et si nous nous appuyions sur la documentation de test du fournisseur au lieu de tout écrire de zéro ?"],
      ["A", "That would reduce the effort significantly. We could bring it down to seventy-six.", "Ça réduirait nettement l'effort. Nous pourrions descendre à soixante-seize."],
      ["B", "If you can commit to finishing by the end of March, we have a deal at seventy-five.", "Si vous vous engagez à finir d'ici fin mars, nous sommes d'accord à soixante-quinze."],
      ["A", "That's a fair compromise. I'll send you the revised proposal today.", "C'est un compromis équitable. Je vous envoie la proposition révisée aujourd'hui."]
    ],
    qs: [
      ["Quel était le devis initial ?", ["70 000 €", "75 000 €", "85 000 €", "95 000 €"], 2],
      ["Quelle idée réduit le coût ?", ["Réduire le périmètre", "S'appuyer sur la documentation du fournisseur", "Allonger le délai", "Changer de prestataire"], 1],
      ["À quel prix l'accord est-il conclu ?", ["70 000 €", "75 000 €", "76 000 €", "80 000 €"], 1]
    ]
  }
];

/* Grammaire supplémentaire : 10 questions de plus par niveau. */
(function () {
  const more = {
    A2: [
      ["We ___ dinner when the phone rang.", ["had", "were having", "have", "are having"], 1, "Action en cours interrompue dans le passé : was/were + -ing."],
      ["Can you tell me where ___?", ["is the station", "the station is", "does the station", "station is"], 1, "Question indirecte : sujet + verbe, sans inversion."],
      ["I ___ never been to Canada.", ["have", "has", "am", "did"], 0, "Present perfect avec « never » : have + participe passé."],
      ["She doesn't ___ coffee.", ["likes", "like", "liking", "liked"], 1, "Après « doesn't », base verbale sans -s."],
      ["There is ___ milk in the fridge.", ["a few", "many", "some", "any"], 2, "« some » dans une phrase affirmative, avec un indénombrable."],
      ["I'm going ___ my parents this weekend.", ["visit", "to visit", "visiting", "visited"], 1, "« be going to » + base verbale pour un projet."],
      ["He works ___ Monday to Friday.", ["since", "from", "at", "on"], 1, "« from … to … » = du … au …"],
      ["Whose bag is this? It's ___.", ["my", "mine", "me", "I"], 1, "Pronom possessif : mine, yours, his, hers…"],
      ["You ___ smoke here. It's forbidden.", ["mustn't", "don't have to", "needn't", "can"], 0, "Interdiction : mustn't. « don't have to » = pas obligé."],
      ["It's the first time I ___ sushi.", ["eat", "ate", "have eaten", "am eating"], 2, "« It's the first time » + present perfect."]
    ],
    B1: [
      ["I used to ___ in Paris.", ["live", "living", "lived", "lives"], 0, "« used to » + base verbale : habitude passée révolue."],
      ["If I ___ you, I would accept the offer.", ["am", "was", "were", "be"], 2, "2e conditionnel : « If I were you » est la forme correcte."],
      ["She's been waiting ___ 9 o'clock.", ["for", "since", "from", "during"], 1, "« since » + point de départ."],
      ["The documents ___ be signed by Friday.", ["have to", "has to", "must to", "should to"], 0, "Sujet pluriel : have to. Pas de « to » après must ou should."],
      ["I'm interested ___ learning more.", ["on", "in", "at", "for"], 1, "« interested in » + -ing."],
      ["He told me ___ late.", ["not be", "to not be", "not to be", "don't be"], 2, "Ordre au discours indirect : tell someone not to + verbe."],
      ["This is the place ___ we met.", ["which", "where", "who", "what"], 1, "Relatif de lieu : where."],
      ["I'll call you as soon as I ___.", ["arrive", "will arrive", "arrived", "am arriving"], 0, "Après « as soon as / when » au futur : présent simple."],
      ["We ___ finished the report yet.", ["didn't", "haven't", "don't", "aren't"], 1, "« yet » en négation : present perfect."],
      ["The meeting was ___ boring that I fell asleep.", ["such", "so", "too", "very"], 1, "« so + adjectif + that » ; « such + nom »."]
    ],
    B2: [
      ["You ___ have told me earlier! Now it's too late.", ["should", "must", "can", "would"], 0, "Reproche sur le passé : should have + participe."],
      ["I'd rather you ___ smoke in the car.", ["don't", "didn't", "won't", "not"], 1, "« would rather + sujet » + prétérit."],
      ["She got her laptop ___ by IT.", ["repair", "repaired", "repairing", "to repair"], 1, "Forme causative : get/have something + participe passé."],
      ["Unless we ___ now, we'll miss the deadline.", ["start", "don't start", "will start", "started"], 0, "« unless » = if not, suivi d'un verbe affirmatif au présent."],
      ["He's used to ___ early.", ["get up", "getting up", "got up", "gets up"], 1, "« be used to » + -ing = être habitué à."],
      ["The engineer ___ the valve forgot to close it.", ["who installed", "which installed", "installing it", "installed by"], 0, "Relative pour une personne : who."],
      ["By the time we arrived, the train ___.", ["left", "has left", "had left", "was leaving"], 2, "Antériorité dans le passé : past perfect."],
      ["I regret ___ you that the test failed.", ["to inform", "informing", "inform", "informed"], 0, "« regret to » + verbe = annoncer à regret. « regret + -ing » = regretter un acte passé."],
      ["No matter ___ hard I try, I can't understand him on the phone.", ["what", "how", "however", "so"], 1, "« No matter how + adjectif »."],
      ["She suggested that he ___ a doctor.", ["sees", "see", "to see", "seeing"], 1, "« suggest that » + base verbale (subjonctif), ou « should see »."]
    ],
    C1: [
      ["Rarely ___ such a well-documented batch record.", ["I have seen", "have I seen", "I saw", "did I saw"], 1, "Inversion après « rarely » en tête de phrase."],
      ["The audit, ___ outcome was positive, lasted three days.", ["which", "whose", "that", "its"], 1, "« whose » s'emploie aussi pour les choses."],
      ["It's high time the procedure ___ updated.", ["is", "was", "has been", "be"], 1, "« It's high time » + prétérit."],
      ["___ to the specification, the tablets would have been released.", ["Had they conformed", "If they conformed", "Were they conform", "Should they conformed"], 0, "Conditionnel passé inversé : Had + sujet + participe."],
      ["Only when the CAPA was implemented ___ the deviation rate drop.", ["did", "does", "has", "was"], 0, "Inversion après « only when » avec l'auxiliaire do."],
      ["She denied ___ the data, but the audit trail showed otherwise.", ["having modified", "to have modified", "modify", "to modify"], 0, "« deny » + -ing (forme parfaite pour l'antériorité)."],
      ["Not until the inspector left ___ relax.", ["we could", "could we", "we can", "can we"], 1, "Inversion après « not until » dans la proposition principale."],
      ["The new line, ___ in 2024, is fully automated.", ["commissioned", "commissioning", "which commissioned", "was commissioned"], 0, "Participe passé à valeur passive (= which was commissioned)."],
      ["I'd have called you if I ___ your number.", ["had", "would have had", "had had", "have had"], 2, "3e conditionnel : if + past perfect (had had)."],
      ["So ___ was the presentation that nobody asked a question.", ["clear", "clearly", "clearness", "much clear"], 0, "« So + adjectif + verbe + sujet » : inversion emphatique."]
    ],
    C2: [
      ["Were the results ___ invalid, the batch would be rejected.", ["to be found", "found", "finding", "be found"], 0, "Conditionnel inversé : Were + sujet + to + infinitif."],
      ["Scarcely ___ the system gone live when the first incident occurred.", ["had", "has", "did", "was"], 0, "« Scarcely had … when » : inversion au past perfect."],
      ["Such ___ the pressure that the seal failed.", ["is", "was", "were", "had"], 1, "« Such + be + nom + that » : inversion emphatique."],
      ["Try ___ he might, he couldn't convince the board.", ["as", "though", "if", "so"], 0, "Expression concessive figée : try as he might = malgré tous ses efforts."],
      ["It is imperative that the line ___ cleared before the next batch.", ["is", "be", "was", "will be"], 1, "Subjonctif après « imperative that » : base verbale."],
      ["I'd sooner have resigned than ___ to falsify the records.", ["agreed", "agree", "agreeing", "to agree"], 0, "Parallélisme : would sooner have resigned than (have) agreed."],
      ["Not a single deviation ___ recorded last year.", ["was", "were", "has", "did"], 0, "« Not a single » + nom singulier : verbe au singulier."],
      ["The report, ___ I had expected, was incomplete.", ["as", "which", "what", "like"], 0, "« as I had expected » = comme je m'y attendais."],
      ["Had it not been for the backup, all the data ___ lost.", ["would be", "would have been", "had been", "will be"], 1, "Conditionnel passé : would have + participe."],
      ["She is nothing ___ meticulous.", ["if not", "but", "than", "as"], 0, "« nothing if not » = extrêmement, avant tout."]
    ]
  };
  for (const l of Object.keys(more)) window.EN_GRAMMAR[l].push(...more[l]);
})();
