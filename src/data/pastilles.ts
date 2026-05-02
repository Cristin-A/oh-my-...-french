export const REGISTERS = {
  courant: { color: "hsl(var(--gold))", label: "Registre courant" },
  familier: { color: "#E27D60", label: "Registre familier" },
  soutenu: { color: "#6B8FB5", label: "Registre soutenu" },
} as const;

export type RegisterKey = keyof typeof REGISTERS;

export const CLOSING_LINES = [
  "Et voilà !",
  "C'est fini... pour aujourd'hui !",
  "Ça y est — tu as gagné le droit de l'utiliser !",
  "La France te tend les bras !",
  "Tu es officiellement moins perdu·e qu'hier !",
  "Un point pour toi, zéro pour la barrière de la langue !",
  "Chapeau l'artiste !",
  "Tu peux passer à table !",
  "La prochaine tournée, c'est pour toi !",
  "Bienvenue dans le club des initiés !",
  "On est bien d'accord — tu assures !",
];

export type Pastille = {
  id: string;
  phrase: string;
  register: RegisterKey;
  phonetic: string;
  literal: string;
  meaning: string;
  category: string;
  hier: string;
  aujourdhui: string;
  demain: string;
  situations: string[];
  invitation?: string;
  bouton?: string;
};

export const PASTILLES: Pastille[] = [
  {
    id: "revenons-a-nos-moutons",
    phrase: "Revenons à nos moutons",
    register: "courant",
    phonetic: "ruh-vuh-NOH ah no moo-TOH",
    literal: "Let's go back to our sheep",
    meaning: "Revenons au sujet, ne perdons pas le fil",
    category: "Expression idiomatique",
    hier:
      "La Farce de Maître Pathelin (1464) — un berger crie au juge qui digresse : « Revenons à nos moutons ! » Première fois qu'on demandait d'aller droit au but — en français.",
    aujourdhui:
      "Pour recentrer une conversation qui part dans tous les sens. Registre courant — parfait en réunion, entre amis. Attention : « revenons », jamais « retournons ».",
    demain:
      "Le contraire ? « Partir dans tous les sens » — ou « il part en live. » Tu te sens prêt·e à l'utiliser pour recentrer une conversation ?",
    situations: [
      "ton beau-père raconte pour la n-ième fois la même histoire,",
      "ta collègue raconte ses histoires de cœur en réunion,",
      "tu as perdu le fil dans une discussion enflammée, etc.",
    ],
  },
  {
    id: "avoir-le-cafard",
    phrase: "Avoir le cafard",
    register: "familier",
    phonetic: "a-VWAR luh ka-FAR",
    literal: "To have the cockroach",
    meaning: "Ne pas avoir le moral",
    category: "Expression idiomatique",
    hier:
      "Baudelaire a popularisé « le cafard » au XIXe siècle pour désigner la mélancolie profonde — ce mal obscur qui ronge sans prévenir. L'insecte qui rampe dans le noir, métaphore parfaite du blues à la française.",
    aujourdhui:
      "Pas une dépression clinique — mais quelque chose de lourd et de gris qui s'installe. Le moral dans les chaussettes, ne plus avoir goût à rien. On le dit à son meilleur ami, pas à son patron.",
    demain:
      "Le contraire ? « Avoir la pêche » ou « avoir la patate » — au top du moral, plein d'énergie.",
    situations: [
      "tu n'as pas envie de sortir du lit un lundi matin (ni mardi ni mercredi)",
      "tu regardes la pluie tomber depuis 4 jours et tu n'as parlé à personne depuis hier",
      "tu relis de vieux messages sans trop savoir pourquoi",
    ],
    invitation: "Ça t'est déjà arrivé — ou tu traverses ça en ce moment ?",
    bouton: "Je raconte quand même !",
  },
  {
    id: "se-prendre-un-rateau",
    phrase: "Se prendre un râteau",
    register: "familier",
    phonetic: "suh PRAHN-druh un RA-toh",
    literal: "To get a rake in the face",
    meaning: "Se faire rejeter",
    category: "Expression idiomatique",
    hier:
      "L'image vient du jardinage — marcher sur un râteau et recevoir le manche dans la figure. Douloureux, humiliant et évitable si on avait regardé où on mettait les pieds. Exactement comme une déclaration ratée.",
    aujourdhui:
      "Quand on tente sa chance et que ça se termine mal. Brutal ou poli, le rejet fait toujours mal. On dit aussi « se prendre un vent » — même douleur, même humiliation.",
    demain:
      "Le contraire ? « Ça a mordu » — quand l'intérêt est réciproque. Entre les deux, toute la poésie du risque à la française.",
    situations: [
      "tu envoies « tu fais quoi ce soir ? » à 23h et tu vois les deux coches bleues... sans réponse",
      "tu invites quelqu'un à dîner et il répond « avec plaisir... on invite qui d'autre ? »",
      "tu fais ta plus belle déclaration et on te répond « t'es tellement sympa, toi »",
    ],
    invitation: "Ça t'est déjà arrivé ?",
    bouton: "Je raconte quand même !",
  },
  {
    id: "poser-un-lapin",
    phrase: "Poser un lapin",
    register: "courant",
    phonetic: "poh-ZAY un la-PAN",
    literal: "To put down a rabbit",
    meaning: "Ne pas se présenter à un rendez-vous",
    category: "Expression idiomatique",
    hier:
      "Au XIXe siècle « poser un lapin » signifiait partir sans payer — comme un lapin qui détale. Avec le temps l'expression a évolué pour désigner le fait de ne pas honorer un rendez-vous.",
    aujourdhui:
      "Universel et courant — amical, professionnel ou amoureux. En français on « pose » un lapin, on ne le « donne » pas. Et poser un lapin à un Français, ça se retient longtemps.",
    demain:
      "Le contraire ? « Être ponctuel comme une horloge suisse » — qualité rare et très appréciée en France... en théorie.",
    situations: [
      "ton collègue confirme le déjeuner par écrit, de vive voix et par SMS... puis disparaît",
      "tu attends 25 minutes devant un restaurant sous la pluie de novembre",
      "le plombier devait passer « dans la matinée ». Il est 16h30.",
    ],
    invitation: "Ça t'est déjà arrivé — ou c'est toi qui l'as fait ?",
    bouton: "J'avoue !",
  },
  {
    id: "cest-pas-la-mer-a-boire",
    phrase: "C'est pas la mer à boire",
    register: "courant",
    phonetic: "say PA la mair a BWAR",
    literal: "It's not like drinking the sea",
    meaning: "Ce n'est pas si difficile que ça",
    category: "Expression idiomatique",
    hier:
      "L'image de boire la mer entière comme métaphore de l'impossible existe depuis l'Antiquité. En la niant on relativise : si ce n'est pas aussi difficile que d'avaler l'océan, on peut y arriver.",
    aujourdhui:
      "Sert à encourager quelqu'un qui catastrophise ou à dédramatiser une situation. À doser avec le sourire — peut sonner condescendant si mal utilisé.",
    demain:
      "Le contraire ? « C'est la croix et la bannière » — quand quelque chose est vraiment laborieux et épuisant.",
    situations: [
      "on te demande de remplir un formulaire administratif français de 4 pages",
      "ton médecin te dit d'arrêter le sucre « juste trois semaines »",
      "tu repousses depuis 6 semaines un appel pour annuler un abonnement",
    ],
    invitation:
      "Il y a quelque chose que tu repousses en ce moment alors que c'est pas la mer à boire ?",
    bouton: "J'avoue !",
  },
  {
    id: "laisse-beton",
    phrase: "Laisse béton",
    register: "familier",
    phonetic: "LESS bay-TON",
    literal: "Leave the concrete",
    meaning: "Renoncer, passer à autre chose",
    category: "Expression idiomatique",
    hier:
      "Verlan de « laisse tomber » — les syllabes s'inversent : « tom-ber » devient « béton ». Né dans les banlieues françaises dans les années 70 popularisé par Renaud dans sa chanson éponyme en 1977.",
    aujourdhui:
      "Entièrement entré dans le langage courant. Peut s'utiliser pour abandonner une idée ou clore un sujet qui tourne en rond.",
    demain:
      "Le contraire ? S'accrocher, insister, ne pas lâcher l'affaire. Mais parfois la sagesse c'est de savoir quand renoncer.",
    situations: [
      "tu expliques ton problème à l'administration française pour la quatrième fois",
      "ton ami te raconte une histoire sans conclusion depuis 20 minutes",
      "tu tentes de convaincre quelqu'un qui a déjà décidé depuis le début",
    ],
    invitation: "Il y a quelque chose que tu aurais dû laisser béton depuis longtemps ?",
    bouton: "J'avoue !",
  },
  {
    id: "avoir-le-coup-de-foudre",
    phrase: "Avoir le coup de foudre",
    register: "courant",
    phonetic: "a-VWAR luh koo duh FOO-druh",
    literal: "To get a lightning strike",
    meaning: "Tomber amoureux instantanément",
    category: "Expression idiomatique",
    hier:
      "La foudre — les dieux grecs la lançaient sur les mortels pour les transformer à jamais. En français l'amour foudroyant reprend cette image : quelque chose de soudain et d'incontrôlable qui vous traverse et vous laisse différent·e.",
    aujourdhui:
      "S'utilise pour l'amour romantique — mais aussi pour un endroit, un plat, une chanson, une paire de chaussures. Les Français tombent amoureux de tout — c'est culturel, c'est assumé.",
    demain:
      "Le contraire ? « Ça ne m'a rien fait » — en français les émotions se sentent autant qu'elles se ressentent. Le corps est toujours dans la conversation.",
    situations: [
      "tu goûtes un plateau de fromages normands pour la première fois de ta vie",
      "tu tournes dans une rue de Paris que tu ne connaissais pas et tu t'arrêtes net",
      "tu rencontres quelqu'un au comptoir d'un café un mardi matin pluvieux",
    ],
    invitation: "Ça t'est déjà arrivé — pour quelqu'un ou pour quelque chose d'inattendu ?",
    bouton: "En effet... !",
  },
  {
    id: "faire-la-grasse-matinee",
    phrase: "Faire la grasse matinée",
    register: "courant",
    phonetic: "fair la grass ma-tee-NAY",
    literal: "To do the fat morning",
    meaning: "Se lever tard, sans contrainte",
    category: "Expression idiomatique",
    hier:
      "« Grasse » ici ne parle pas de nourriture — mais de richesse et d'abondance. Faire une matinée « grasse » c'est s'offrir le luxe du temps qui passe sans obligation. Un privilège longtemps réservé aux aristocrates. Aujourd'hui démocratisé — mais toujours délicieux.",
    aujourdhui:
      "Le dimanche matin, le lendemain d'une fête, les vacances. Règle non écrite en France : ne jamais déranger quelqu'un avant 10h le weekend sauf urgence absolue.",
    demain:
      "Le contraire ? « Se lever aux aurores » — et si en plus on se lève « du pied gauche », la journée s'annonce compliquée.",
    situations: [
      "c'est samedi, il pleut et personne n'attend rien de toi avant midi",
      "les enfants sont chez les grands-parents et tu n'as rien de prévu",
      "tu es en vacances et complètement déconnecté",
    ],
    invitation: "C'était quand ta dernière vraie grasse matinée ?",
    bouton: "J'en rêve !",
  },
  {
    id: "avoir-dautres-chats-a-fouetter",
    phrase: "Avoir d'autres chats à fouetter",
    register: "courant",
    phonetic: "a-VWAR DOH-truh sha a foo-TAY",
    literal: "To have other cats to whip",
    meaning: "Avoir d'autres priorités",
    category: "Expression idiomatique",
    hier:
      "Au XVIIe siècle quand on voulait dire que quelque chose n'était pas grave on disait « il n'y a pas de quoi fouetter un chat ». C'est de là que vient « avoir d'autres chats à fouetter » — j'ai des préoccupations bien plus importantes que ça.",
    aujourdhui:
      "Sert à dire qu'on a des priorités plus importantes. Pour se défiler élégamment ou expliquer qu'on ne peut pas s'occuper d'un détail mineur en ce moment.",
    demain:
      "Le contraire ? « N'avoir rien à faire de ses dix doigts » — être complètement désœuvré. Rare. Enviable.",
    situations: [
      "quelqu'un te raconte ses problèmes alors que tu traverses toi-même une semaine difficile",
      "on insiste pour que tu donnes ton avis sur quelque chose qui t'indiffère complètement",
      "tu cherches une sortie polie dans une conversation qui n'en finit pas",
    ],
    invitation: "C'est quand que tu aurais pu la placer ?",
    bouton: "Trop parlé, j'écris !",
  },
  {
    id: "ca-marche",
    phrase: "Ça marche",
    register: "courant",
    phonetic: "sa MARSH",
    literal: "It walks",
    meaning: "C'est bon, d'accord",
    category: "Expression idiomatique",
    hier:
      "« Marcher » en français a toujours eu ce double sens — avancer physiquement ET fonctionner. Une montre marche, un plan marche, un moteur marche. Cette polyvalence a naturellement glissé vers l'approbation sociale.",
    aujourdhui:
      "Le lubrifiant social de la conversation française quotidienne. On l'entend partout — cafés, réunions, marchés, couloirs. Variantes : « Parfait » (formel) / « Nickel » (familier) / « Impec » (très familier) / « C'est bon » (universel).",
    demain:
      "Le contraire ? « Ça coince » — deux mots qui peuvent signifier une panne, un refus ou toute une situation qui se complique.",
    situations: [
      "le serveur te propose une autre bière et tu réponds « ça marche ! »",
      "ton collègue propose 13h pour déjeuner et tu acceptes sans hésiter",
      "tu finis une conversation avec « ça marche, bonne journée ! » et tu te sens français·e",
    ],
    invitation: "Tu l'as entendu ou utilisé combien de fois aujourd'hui ?",
    bouton: "1, 2, 3...",
  },
];

