// Source unique des carrousels et des couvertures de Reels.
// `node visuels/generer.mjs` produit :
//   - carrousels/Cxx-*.md   (fiches lisibles)
//   - visuels/rendu/...png  (images prêtes à publier)
//
// Mise en valeur dans les textes :
//   **mot**  → doré
//   ==mot==  → bleu fluorescent
//   \n       → retour à la ligne
//
// Versets : Louis Segond 1910 (domaine public). Voir references-bibliques.md.

export const compte = '' // ex. '@ton.compte' : s'affiche en bas des visuels si renseigné

export const carrousels = [
  {
    id: 'C01',
    slug: 'connu-et-aime',
    theme: 'Être connu entièrement… et aimé quand même',
    cible: 'Les personnes qui vivent derrière un masque, qui ont peur d\'être rejetées si on les connaissait vraiment.',
    angle: 'La femme samaritaine au puits (Jean 4).',
    diapos: [
      {
        texte: 'Et si quelqu\'un savait\n**tout** de toi…\net restait quand même ?',
        visuel: 'Portrait en clair-obscur, visage à moitié dans l\'ombre, regard vers l\'objectif. Assombri à 65 %.',
      },
      {
        texte: 'On montre une version de nous.\nFiltrée. Retouchée.\nCelle qu\'on pense\npouvoir être aimée.',
        visuel: 'Reflet d\'un visage dans un miroir embué, contours flous.',
      },
      {
        texte: 'Et on vit avec une peur silencieuse :\n« Si on me connaissait ==vraiment==,\non partirait. »',
        visuel: 'Fond noir seul. Le texte suffit.',
      },
      {
        texte: 'Un jour, en plein midi,\nune femme vient puiser de l\'eau.\nUn homme l\'attend au puits.\nC\'est **Jésus**.',
        ref: 'Jean 4:6-7',
        visuel: 'Vieux puits de pierre sous un soleil écrasant, paysage aride. Aucun personnage visible.',
      },
      {
        texte: 'Il lui parle de sa vie.\nDe ce qu\'elle cache.\nIl sait **tout**.',
        verset: 'Tu as eu cinq maris, et celui que tu as maintenant n\'est pas ton mari.',
        ref: 'Jean 4:18',
        visuel: 'Gros plan sur une cruche d\'argile posée au bord du puits.',
      },
      {
        texte: 'Mais il ne s\'en va pas.\nIl lui offre une eau\nqui étanche une autre soif.',
        verset: 'Celui qui boira de l\'eau que je lui donnerai n\'aura jamais soif.',
        ref: 'Jean 4:14',
        visuel: 'Eau claire versée dans des mains en coupe, lumière rasante.',
      },
      {
        texte: 'Sa honte devient son message.\nElle court au village :',
        verset: 'Venez voir un homme qui m\'a dit tout ce que j\'ai fait ; ne serait-ce point le Christ ?',
        ref: 'Jean 4:29',
        visuel: 'Chemin de terre vers un village au loin, poussière soulevée, contre-jour.',
      },
      {
        texte: 'Jésus te connaît entièrement.\nEt il a donné sa vie pour toi\nsur la **croix**.',
        verset: 'Dieu prouve son amour envers nous, en ce que, lorsque nous étions encore des pécheurs, Christ est mort pour nous.',
        ref: 'Romains 5:8',
        visuel: 'Fond noir seul (pas de croix ajoutée).',
      },
      {
        texte: 'Tu n\'as plus besoin\nde te cacher.\nViens à lui ==tel que tu es==.',
        note: 'Ce soir, lis Jean 4.',
        visuel: 'Aube sur une étendue d\'eau calme. Assombri à 55 %.',
      },
    ],
    legende: `On passe beaucoup d'énergie à montrer la meilleure version de nous-mêmes. Et au fond, une peur reste : « Si on savait vraiment qui je suis, on ne m'aimerait plus. »

Dans l'Évangile de Jean, Jésus rencontre une femme au bord d'un puits. Il connaît toute sa vie, même ce qu'elle préfère taire (Jean 4:18). Pourtant, il ne la rejette pas : il lui parle d'une « eau » qui comble une soif plus profonde (Jean 4:14). Elle repart en courant dire à tout le village : « Venez voir un homme qui m'a dit tout ce que j'ai fait » (Jean 4:29).

Jésus nous connaît entièrement, et c'est pourtant pour nous qu'il est mort : « lorsque nous étions encore des pécheurs, Christ est mort pour nous » (Romains 5:8).

📖 Lis Jean 4 ce soir. Dix minutes suffisent.
📌 Partage à quelqu'un qui porte un masque depuis trop longtemps.`,
    hashtags: ['#Jésus', '#AmourDeDieu', '#Évangile', '#Identité', '#FemmeSamaritaine'],
  },

  {
    id: 'C02',
    slug: 'pourquoi-la-croix',
    theme: 'Pourquoi Jésus devait-il mourir ?',
    cible: 'Les non-croyants qui trouvent la croix incompréhensible ou choquante.',
    angle: 'La justice et l\'amour de Dieu qui se rencontrent à la croix.',
    diapos: [
      {
        texte: 'Si Dieu est ==amour==,\npourquoi ne pas simplement\npardonner ?\nPourquoi la **croix** ?',
        visuel: 'Fond noir seul. Typographie grande.',
      },
      {
        texte: 'Imagine un juge\nqui laisse partir un coupable\n« parce qu\'il l\'aime bien ».\n\nTu dirais qu\'il est bon…\nou ==injuste== ?',
        visuel: 'Marteau de juge posé sur un bureau en bois sombre, lumière latérale.',
      },
      {
        texte: 'Dieu est amour.\nMais il est aussi **juste**.\nLe mal n\'est jamais un détail pour lui.',
        visuel: 'Balance ancienne en laiton, gros plan, fond noir.',
      },
      {
        texte: 'Et la Bible est honnête sur nous.\nPas seulement\nsur « les autres ».',
        verset: 'Car tous ont péché et sont privés de la gloire de Dieu.',
        ref: 'Romains 3:23',
        visuel: 'Foule floue dans une gare, personne n\'est net. Désaturé.',
      },
      {
        texte: 'Le péché nous sépare de Dieu,\nla source de la vie.',
        verset: 'Car le salaire du péché, c\'est la mort ; mais le don gratuit de Dieu, c\'est la vie éternelle en Jésus-Christ notre Seigneur.',
        ref: 'Romains 6:23',
        visuel: 'Fond noir seul.',
      },
      {
        texte: 'À la croix, la justice et l\'amour\nse rencontrent.\n\nLe juge descend de son siège\net prend la peine\n**à la place** du coupable.',
        visuel: 'Silhouette de colline sous un ciel d\'orage, plan très large, sans croix visible.',
      },
      {
        texte: 'Écrit environ 700 ans avant Jésus :',
        verset: 'Il était blessé pour nos péchés, brisé pour nos iniquités ; le châtiment qui nous donne la paix est tombé sur lui.',
        ref: 'Ésaïe 53:5',
        visuel: 'Rouleau de parchemin ancien, lumière de bougie.',
      },
      {
        texte: 'Ses derniers mots :\n« **Tout est accompli.** »\n\nTrois jours plus tard,\nle tombeau était ==vide==.',
        ref: 'Jean 19:30 · Luc 24:1-6',
        visuel: 'Entrée d\'un tombeau taillé dans la roche, pierre roulée, lumière de l\'aube.',
      },
      {
        texte: 'Le pardon est offert.\n**Gratuitement.**\nIl reste à le ==recevoir==.',
        verset: 'Si tu confesses de ta bouche le Seigneur Jésus, et si tu crois dans ton cœur que Dieu l\'a ressuscité des morts, tu seras sauvé.',
        ref: 'Romains 10:9',
        visuel: 'Lever de soleil sur la mer. Assombri à 60 %.',
      },
    ],
    legende: `« Pourquoi Dieu ne pardonne-t-il pas simplement ? » C'est une vraie question, et elle mérite une vraie réponse.

Un juge qui fermerait les yeux sur le mal ne serait pas bon, il serait injuste. Dieu est amour, mais il est aussi juste. Et la Bible ne nous flatte pas : « tous ont péché et sont privés de la gloire de Dieu » (Romains 3:23).

À la croix, Dieu ne fait pas semblant que le mal n'existe pas. En Jésus, il prend lui-même la peine sur lui. Le prophète Ésaïe l'avait annoncé des siècles plus tôt : « le châtiment qui nous donne la paix est tombé sur lui » (Ésaïe 53:5).

Puis Jésus est ressuscité. Le pardon n'est pas un salaire, c'est un cadeau : « le don gratuit de Dieu, c'est la vie éternelle en Jésus-Christ notre Seigneur » (Romains 6:23).

💬 Une question sur la croix ? Pose-la en commentaire, sans filtre.
📌 Enregistre ce carrousel pour pouvoir l'expliquer à quelqu'un.`,
    hashtags: ['#Croix', '#Évangile', '#Jésus', '#Pardon', '#Questions'],
  },

  {
    id: 'C03',
    slug: 'quelqu-un-de-bien',
    theme: '« Je suis quelqu\'un de bien. » Est-ce que ça suffit ?',
    cible: 'Les personnes qui pensent que Dieu « note » la vie et que leurs bonnes actions suffiront.',
    angle: 'Question de non-croyant + image du ravin et du pont.',
    diapos: [
      {
        texte: '« Je suis quelqu\'un de **bien**.\nJe n\'ai tué personne.\nDieu ne peut pas me reprocher\ngrand-chose. »',
        visuel: 'Portrait d\'une personne ordinaire, sereine, en lumière de fin de journée.',
      },
      {
        texte: 'Beaucoup pensent ça.\nEt comparé à d\'autres…\nc\'est peut-être vrai.',
        visuel: 'Foule traversant un passage piéton, vue du dessus.',
      },
      {
        texte: 'Le problème, c\'est la ==référence==.\n\nÀ côté des autres,\non se trouve bien.\nÀ côté d\'un Dieu\nparfaitement saint ?',
        visuel: 'Fond noir seul.',
      },
      {
        texte: 'Imagine un ravin de 10 mètres.\nTu sautes 2 mètres. Un autre, 6.\n\nL\'un a fait mieux que l\'autre.\nMais personne n\'arrive\n==de l\'autre côté==.',
        visuel: 'Gorge profonde entre deux falaises, plan large, brume.',
      },
      {
        texte: 'La Bible le dit sans détour :',
        verset: 'Il n\'y a point de juste, pas même un seul.',
        ref: 'Romains 3:10',
        visuel: 'Fond noir seul.',
      },
      {
        texte: 'C\'est pour ça que Jésus est venu.\nPas pour rendre les gens bien\nun peu meilleurs.\nMais pour ==sauver== ceux\nqui ne pouvaient pas\nse sauver eux-mêmes.',
        verset: 'Je ne suis pas venu appeler des justes, mais des pécheurs.',
        ref: 'Marc 2:17',
        visuel: 'Main tendue vers une autre main, au-dessus du vide, gros plan.',
      },
      {
        texte: 'Sur la croix, Jésus a jeté\nle **pont** que personne\nne pouvait construire.\nEt il est ressuscité.',
        visuel: 'Vieux pont de pierre au-dessus d\'une gorge, lumière du matin.',
      },
      {
        verset: 'Car c\'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c\'est le don de Dieu.',
        ref: 'Éphésiens 2:8',
        visuel: 'Fond noir seul, verset en grand.',
      },
      {
        texte: 'La bonne nouvelle n\'est pas\n« fais mieux ».\nC\'est « **c\'est fait** ».\n\nLa question est :\nle ==reçois==-tu ?',
        visuel: 'Silhouette marchant sur le pont vers la lumière. Assombri à 60 %.',
      },
    ],
    legende: `« Je suis quelqu'un de bien. » C'est sans doute la phrase la plus courante quand on parle de Dieu.

Comparés aux autres, beaucoup d'entre nous s'en sortent plutôt bien. Mais Dieu ne nous compare pas aux autres. Face à sa sainteté, la Bible dit : « Il n'y a point de juste, pas même un seul » (Romains 3:10). C'est comme un ravin trop large : sauter un peu plus loin que son voisin ne suffit pas pour arriver de l'autre côté.

C'est pour cela que Jésus est venu. Il est mort sur la croix pour payer ce que nous ne pouvions pas payer, et il est ressuscité. « C'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu » (Éphésiens 2:8).

Les bonnes actions ne sont pas le prix du salut, elles en sont le fruit (Éphésiens 2:10).

💬 Tu n'es pas d'accord ? Dis-le en commentaire, on en parle avec respect.`,
    hashtags: ['#Grâce', '#Salut', '#Jésus', '#FoiChrétienne', '#QuestionsSurDieu'],
  },

  {
    id: 'C04',
    slug: 'quand-dieu-se-tait',
    theme: '« Si Dieu existe, pourquoi il ne fait rien ? »',
    cible: 'Les personnes en deuil, malades, révoltées par la souffrance.',
    angle: 'Jésus qui pleure devant la tombe de Lazare, puis qui entre lui-même dans la souffrance et la mort.',
    diapos: [
      {
        texte: '« Si Dieu existe,\npourquoi il ne fait ==rien== ? »',
        visuel: 'Couloir d\'hôpital la nuit, lumière froide, vide.',
      },
      {
        texte: 'Peut-être que tu l\'as crié\ndans une chambre d\'hôpital.\nOu murmuré\ndevant une tombe.',
        visuel: 'Fleurs fanées posées sur une pierre tombale, pluie fine.',
      },
      {
        texte: 'La Bible ne t\'interdit pas\ncette question.\nJésus lui-même a crié\nsur la croix :',
        verset: 'Mon Dieu, mon Dieu, pourquoi m\'as-tu abandonné ?',
        ref: 'Matthieu 27:46',
        visuel: 'Ciel noir d\'orage, éclair lointain.',
      },
      {
        texte: 'Quand son ami Lazare est mort,\nJésus est venu devant sa tombe.\nEt la Bible dit simplement :',
        verset: 'Jésus pleura.',
        ref: 'Jean 11:35',
        visuel: 'Gros plan sur une larme sur une joue, lumière douce. Visage non identifiable.',
      },
      {
        texte: 'Dieu n\'est pas indifférent\nà ta douleur.\n\nEn Jésus, il ne l\'a pas\nregardée de loin.\nIl y est **entré** :\ntrahison, torture, mort.',
        visuel: 'Fond noir seul.',
      },
      {
        texte: 'Et il a fait ce qu\'aucun de nous\nne peut faire :\nil a ==vaincu la mort==.',
        verset: 'Je suis la résurrection et la vie. Celui qui croit en moi vivra, quand même il serait mort.',
        ref: 'Jean 11:25',
        visuel: 'Lumière de l\'aube qui perce entre des arbres sombres.',
      },
      {
        texte: 'Il ne promet pas une vie sans larmes.\nIl promet un jour où…',
        verset: 'Il essuiera toute larme de leurs yeux, et la mort ne sera plus.',
        ref: 'Apocalypse 21:4',
        visuel: 'Mer calme au lever du soleil, horizon dégagé.',
      },
      {
        verset: 'L\'Éternel est près de ceux qui ont le cœur brisé.',
        ref: 'Psaume 34:19',
        visuel: 'Fond noir seul, verset en grand.',
      },
      {
        texte: 'Tu n\'as pas besoin\nde tout comprendre\npour venir à lui.\n\nApporte-lui ta question.\nApporte-lui tes **larmes**.',
        visuel: 'Mains ouvertes posées sur les genoux, lumière douce. Assombri à 60 %.',
      },
    ],
    legende: `Quand la souffrance frappe, la question surgit : « Si Dieu existe, pourquoi il ne fait rien ? »

La Bible n'interdit pas cette question. Les Psaumes en sont remplis, et sur la croix, Jésus a lui-même repris le cri du Psaume 22 : « Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné ? » (Matthieu 27:46).

Devant la tombe de son ami Lazare, Jésus a pleuré (Jean 11:35), alors qu'il savait qu'il allait le ramener à la vie. Dieu n'est pas un spectateur froid. En Jésus, il est entré dans notre souffrance jusqu'à la mort, et il en est ressorti vivant : « Je suis la résurrection et la vie » (Jean 11:25).

Il ne promet pas une vie sans épreuves, mais il promet à ceux qui se confient en lui un avenir où « la mort ne sera plus » (Apocalypse 21:4).

Si tu traverses un deuil en ce moment, nous sommes de tout cœur avec toi. Tu peux nous écrire en privé.

📌 Partage ce carrousel à quelqu'un qui souffre, avec un simple « je pense à toi ».`,
    hashtags: ['#Deuil', '#Souffrance', '#Jésus', '#Espérance', '#Résurrection'],
  },
]

// Couvertures de Reels (1080 × 1920). Le titre est placé dans le carré central
// pour rester lisible dans la grille du profil.
export const couvertures = [
  { id: 'R01', titre: '**3h17**', taille: 2.2, sousTitre: 'Pour ceux qui ne dorment plus' },
  { id: 'R02', titre: 'Ce que tu supprimes\nrevient ==toujours==', sousTitre: 'La honte, le secret, le pardon' },
  { id: 'R03', titre: 'Tu as arrêté\nde **prier** quand ?', sousTitre: 'Le Père qui court' },
  { id: 'R04', titre: 'Il avait **juré**\nde ne jamais le trahir', sousTitre: 'L\'histoire de Pierre' },
  { id: 'R05', titre: 'Tout repose sur\nun tombeau ==vide==', sousTitre: 'Jésus est-il vraiment ressuscité ?' },
  { id: 'R06', titre: 'Une seule\n**phrase**', sousTitre: 'L\'homme crucifié à côté de Jésus' },
]
