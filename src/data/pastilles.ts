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
];
