export type Lang = "fr" | "en" | "es" | "it" | "ro";

export const langLabels: Record<Lang, string> = {
  fr: "FR",
  en: "EN",
  es: "ES",
  it: "IT",
  ro: "RO",
};

export type Translations = typeof fr;

const fr = {
  nav: {
    home: "Accueil",
    workshops: "Ateliers",
    capsules: "Pastilles",
    pricing: "Tarifs",
    contact: "Contact",
    book: "Réserver",
  },
  hero: {
    subtitle: "",
    tagline: "De point en point, le français se dessine",
    taglineSub: "",
    headline: "Débloquez votre français à l'oral.",
    description: "Des ateliers vivants pour progresser à votre rythme.",
    ctaWorkshops: "Découvrir les ateliers",
    ctaCapsules: "Explorer les pastilles",
  },
  workshops: {
    label: "Conversation",
    title: "Ateliers de conversation",
    description:
      "Rejoignez un atelier ou proposez votre propre thème de discussion. D'autres apprenants intéressés s'inscriront pour former un groupe dynamique de 5 à 10 personnes.",
    features: [
      {
        title: "Proposez un thème",
        description:
          "Vous avez une idée de sujet ? Proposez-la à la communauté et lancez la discussion autour d'un thème qui vous passionne.",
      },
      {
        title: "5 à 10 participants",
        description:
          "Chaque atelier s'ouvre à partir de 5 inscrits et accueille au maximum 10 personnes pour garantir la qualité des échanges.",
      },
      {
        title: "Sessions régulières",
        description:
          "Des créneaux flexibles, en présentiel ou en ligne, pour s'adapter à votre emploi du temps et maintenir une pratique régulière.",
      },
      {
        title: "À partir du niveau B1",
        description:
          "Les ateliers de conversation sont conçus pour les apprenants de niveau B1 et au-delà, afin de favoriser des échanges riches.",
      },
    ],
    communityTitle: "Thèmes proposés par la communauté",
    topics: [
      { theme: "L'art de vivre à la française", votes: 8, status: "Complet" },
      { theme: "Débattre sur l'actualité", votes: 6, status: "Places disponibles" },
      { theme: "Cuisine et gastronomie", votes: 4, status: "En attente (5 min.)" },
      { theme: "Voyages et découvertes culturelles", votes: 7, status: "Complet" },
    ],
    participantLabel: (n: number) => `${n} participant${n > 1 ? "s" : ""} inscrit${n > 1 ? "s" : ""}`,
  },
  capsules: {
    label: "Apprentissage ciblé",
    title: "Pastilles thématiques",
    description:
      "Des modules courts et ciblés, organisés par niveau et vos envies, pour travailler un point précis de la langue. Choisissez votre niveau et explorez les thématiques qui vous correspondent.",
    categories: [
      { title: "Grammaire", description: "Maîtrisez les structures essentielles de la langue française." },
      { title: "Lexique", description: "Enrichissez votre vocabulaire thématique au quotidien." },
      { title: "Mises en situation", description: "Pratiquez dans des contextes réels : travail, voyage, vie sociale." },
      { title: "Culture & Civilisation", description: "Découvrez la francophonie à travers sa culture et ses traditions." },
    ],
    levelLabel: "Niveau",
    available: "3 à 5 pastilles disponibles",
  },
  pricing: {
    label: "Tarifs",
    title: "Formules & tarifs",
    description: "Des formules transparentes, adaptées à vos besoins et à votre rythme d'apprentissage.",
    popular: "Populaire",
    cta: "Choisir cette formule",
    plans: [
      {
        name: "Pastille unique",
        price: "15",
        unit: "par pastille",
        description: "Accédez à une pastille thématique de votre choix.",
        features: ["1 pastille thématique", "Exercices interactifs", "Corrections détaillées", "Accès pendant 30 jours"],
      },
      {
        name: "Atelier conversation",
        price: "25",
        unit: "par session",
        description: "Participez à un atelier de conversation en petit groupe.",
        features: ["1 session de 90 minutes", "Groupe de 5 à 10 personnes", "Thème au choix", "Feedback personnalisé", "Support après la session"],
      },
      {
        name: "Forfait mensuel",
        price: "89",
        unit: "par mois",
        description: "Accès illimité aux pastilles et 4 ateliers par mois.",
        features: ["Pastilles illimitées", "4 ateliers de conversation", "Proposer vos thèmes", "Suivi de progression", "Communauté d'apprenants", "Priorité d'inscription"],
      },
    ],
  },
  footer: {
    brand: "Formation en Français Langue Étrangère. Ateliers de conversation et pastilles thématiques pour tous les niveaux — avec passion et plaisir.",
    tagline: "De point en point, le français se dessine",
    taglineSub: "",
    navigation: "Navigation",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
  },
};

const en: Translations = {
  nav: {
    home: "Home",
    workshops: "Workshops",
    capsules: "Capsules",
    pricing: "Pricing",
    contact: "Contact",
    book: "Book now",
  },
  hero: {
    subtitle: "",
    tagline: "Dot by dot, your French unfolds",
    taglineSub: "",
    headline: "Unlock your spoken French.",
    description: "Lively workshops to progress at your own pace.",
    ctaWorkshops: "Discover workshops",
    ctaCapsules: "Explore capsules",
  },
  workshops: {
    label: "Conversation",
    title: "Conversation workshops",
    description:
      "Join a workshop or suggest your own discussion topic. Other interested learners will sign up to form a dynamic group of 5 to 10 people.",
    features: [
      { title: "Suggest a topic", description: "Have an idea? Suggest it to the community and spark a discussion around a topic you're passionate about." },
      { title: "5 to 10 participants", description: "Each workshop opens from 5 sign-ups and welcomes up to 10 people to ensure quality exchanges." },
      { title: "Regular sessions", description: "Flexible time slots, in person or online, to fit your schedule and maintain regular practice." },
      { title: "From B1 level", description: "Conversation workshops are designed for B1+ learners to foster rich exchanges." },
    ],
    communityTitle: "Topics suggested by the community",
    topics: [
      { theme: "The French art of living", votes: 8, status: "Full" },
      { theme: "Debating current events", votes: 6, status: "Spots available" },
      { theme: "Cooking & gastronomy", votes: 4, status: "Pending (5 min.)" },
      { theme: "Travel & cultural discoveries", votes: 7, status: "Full" },
    ],
    participantLabel: (n: number) => `${n} participant${n > 1 ? "s" : ""} registered`,
  },
  capsules: {
    label: "Targeted learning",
    title: "Thematic capsules",
    description:
      "Short, focused modules organised by level and your interests, to work on a specific point of the language. Choose your level and explore the themes that suit you.",
    categories: [
      { title: "Grammar", description: "Master the essential structures of the French language." },
      { title: "Vocabulary", description: "Enrich your thematic vocabulary for everyday use." },
      { title: "Role-playing", description: "Practise in real-life contexts: work, travel, social life." },
      { title: "Culture & Civilisation", description: "Discover the French-speaking world through its culture and traditions." },
    ],
    levelLabel: "Level",
    available: "3 to 5 capsules available",
  },
  pricing: {
    label: "Pricing",
    title: "Plans & pricing",
    description: "Transparent plans, tailored to your needs and learning pace.",
    popular: "Popular",
    cta: "Choose this plan",
    plans: [
      {
        name: "Single capsule",
        price: "15",
        unit: "per capsule",
        description: "Access a thematic capsule of your choice.",
        features: ["1 thematic capsule", "Interactive exercises", "Detailed corrections", "30-day access"],
      },
      {
        name: "Conversation workshop",
        price: "25",
        unit: "per session",
        description: "Join a small-group conversation workshop.",
        features: ["1 × 90-minute session", "Group of 5 to 10", "Topic of your choice", "Personalised feedback", "Post-session support"],
      },
      {
        name: "Monthly plan",
        price: "89",
        unit: "per month",
        description: "Unlimited capsules and 4 workshops per month.",
        features: ["Unlimited capsules", "4 conversation workshops", "Suggest your topics", "Progress tracking", "Learner community", "Priority enrolment"],
      },
    ],
  },
  footer: {
    brand: "French as a Foreign Language. Conversation workshops and thematic capsules for all levels — with passion and pleasure.",
    tagline: "Dot by dot, your French unfolds",
    taglineSub: "",
    navigation: "Navigation",
    contactTitle: "Contact",
    rights: "All rights reserved.",
  },
};

const es: Translations = {
  nav: {
    home: "Inicio",
    workshops: "Talleres",
    capsules: "Cápsulas",
    pricing: "Tarifas",
    contact: "Contacto",
    book: "Reservar",
  },
  hero: {
    subtitle: "",
    tagline: "Punto a punto, el francés toma forma",
    taglineSub: "De point en point, le français se dessine",
    headline: "Desbloquea tu francés oral.",
    description: "Talleres dinámicos para progresar a tu ritmo.",
    ctaWorkshops: "Descubrir los talleres",
    ctaCapsules: "Explorar las cápsulas",
  },
  workshops: {
    label: "Conversación",
    title: "Talleres de conversación",
    description:
      "Únete a un taller o propón tu propio tema de discusión. Otros estudiantes interesados se inscribirán para formar un grupo dinámico de 5 a 10 personas.",
    features: [
      { title: "Propón un tema", description: "¿Tienes una idea? Proponla a la comunidad y lanza la discusión sobre un tema que te apasione." },
      { title: "5 a 10 participantes", description: "Cada taller se abre a partir de 5 inscritos y acoge hasta 10 personas para garantizar la calidad de los intercambios." },
      { title: "Sesiones regulares", description: "Horarios flexibles, presenciales u online, para adaptarse a tu agenda y mantener una práctica regular." },
      { title: "Desde el nivel B1", description: "Los talleres de conversación están diseñados para estudiantes de nivel B1 en adelante." },
    ],
    communityTitle: "Temas propuestos por la comunidad",
    topics: [
      { theme: "El arte de vivir a la francesa", votes: 8, status: "Completo" },
      { theme: "Debatir sobre la actualidad", votes: 6, status: "Plazas disponibles" },
      { theme: "Cocina y gastronomía", votes: 4, status: "En espera (5 mín.)" },
      { theme: "Viajes y descubrimientos culturales", votes: 7, status: "Completo" },
    ],
    participantLabel: (n: number) => `${n} participante${n > 1 ? "s" : ""} inscrito${n > 1 ? "s" : ""}`,
  },
  capsules: {
    label: "Aprendizaje específico",
    title: "Cápsulas temáticas",
    description:
      "Módulos cortos y específicos, organizados por nivel y tus intereses, para trabajar un punto preciso del idioma.",
    categories: [
      { title: "Gramática", description: "Domina las estructuras esenciales de la lengua francesa." },
      { title: "Léxico", description: "Enriquece tu vocabulario temático en el día a día." },
      { title: "Situaciones reales", description: "Practica en contextos reales: trabajo, viajes, vida social." },
      { title: "Cultura y civilización", description: "Descubre la francofonía a través de su cultura y tradiciones." },
    ],
    levelLabel: "Nivel",
    available: "3 a 5 cápsulas disponibles",
  },
  pricing: {
    label: "Tarifas",
    title: "Fórmulas y tarifas",
    description: "Fórmulas transparentes, adaptadas a tus necesidades y a tu ritmo de aprendizaje.",
    popular: "Popular",
    cta: "Elegir esta fórmula",
    plans: [
      {
        name: "Cápsula única",
        price: "15",
        unit: "por cápsula",
        description: "Accede a una cápsula temática a tu elección.",
        features: ["1 cápsula temática", "Ejercicios interactivos", "Correcciones detalladas", "Acceso durante 30 días"],
      },
      {
        name: "Taller de conversación",
        price: "25",
        unit: "por sesión",
        description: "Participa en un taller de conversación en grupo reducido.",
        features: ["1 sesión de 90 minutos", "Grupo de 5 a 10 personas", "Tema a elegir", "Feedback personalizado", "Soporte tras la sesión"],
      },
      {
        name: "Forfait mensual",
        price: "89",
        unit: "por mes",
        description: "Acceso ilimitado a cápsulas y 4 talleres al mes.",
        features: ["Cápsulas ilimitadas", "4 talleres de conversación", "Propón tus temas", "Seguimiento de progreso", "Comunidad de estudiantes", "Inscripción prioritaria"],
      },
    ],
  },
  footer: {
    brand: "Formación en Francés como Lengua Extranjera. Talleres de conversación y cápsulas temáticas para todos los niveles — con pasión y placer.",
    tagline: "Punto a punto, el francés toma forma",
    taglineSub: "De point en point, le français se dessine",
    navigation: "Navegación",
    contactTitle: "Contacto",
    rights: "Todos los derechos reservados.",
  },
};

const it: Translations = {
  nav: {
    home: "Home",
    workshops: "Laboratori",
    capsules: "Capsule",
    pricing: "Tariffe",
    contact: "Contatto",
    book: "Prenota",
  },
  hero: {
    subtitle: "",
    tagline: "Punto dopo punto, il francese prende forma",
    taglineSub: "De point en point, le français se dessine",
    headline: "Sblocca il tuo francese parlato.",
    description: "Laboratori vivaci per progredire al tuo ritmo.",
    ctaWorkshops: "Scopri i laboratori",
    ctaCapsules: "Esplora le capsule",
  },
  workshops: {
    label: "Conversazione",
    title: "Laboratori di conversazione",
    description:
      "Unisciti a un laboratorio o proponi il tuo tema di discussione. Altri studenti interessati si iscriveranno per formare un gruppo dinamico da 5 a 10 persone.",
    features: [
      { title: "Proponi un tema", description: "Hai un'idea? Proponila alla comunità e avvia la discussione su un tema che ti appassiona." },
      { title: "Da 5 a 10 partecipanti", description: "Ogni laboratorio si apre da 5 iscritti e accoglie fino a 10 persone per garantire la qualità degli scambi." },
      { title: "Sessioni regolari", description: "Orari flessibili, in presenza o online, per adattarsi al tuo programma e mantenere una pratica regolare." },
      { title: "Dal livello B1", description: "I laboratori di conversazione sono pensati per studenti di livello B1 e oltre." },
    ],
    communityTitle: "Temi proposti dalla comunità",
    topics: [
      { theme: "L'arte di vivere alla francese", votes: 8, status: "Completo" },
      { theme: "Dibattere sull'attualità", votes: 6, status: "Posti disponibili" },
      { theme: "Cucina e gastronomia", votes: 4, status: "In attesa (5 min.)" },
      { theme: "Viaggi e scoperte culturali", votes: 7, status: "Completo" },
    ],
    participantLabel: (n: number) => `${n} partecipant${n > 1 ? "i" : "e"} iscritt${n > 1 ? "i" : "o"}`,
  },
  capsules: {
    label: "Apprendimento mirato",
    title: "Capsule tematiche",
    description:
      "Moduli brevi e mirati, organizzati per livello e i tuoi interessi, per lavorare su un punto preciso della lingua.",
    categories: [
      { title: "Grammatica", description: "Padroneggia le strutture essenziali della lingua francese." },
      { title: "Lessico", description: "Arricchisci il tuo vocabolario tematico quotidiano." },
      { title: "Situazioni reali", description: "Pratica in contesti reali: lavoro, viaggio, vita sociale." },
      { title: "Cultura e civiltà", description: "Scopri la francofonia attraverso la sua cultura e le sue tradizioni." },
    ],
    levelLabel: "Livello",
    available: "3-5 capsule disponibili",
  },
  pricing: {
    label: "Tariffe",
    title: "Formule e tariffe",
    description: "Formule trasparenti, adattate alle tue esigenze e al tuo ritmo di apprendimento.",
    popular: "Popolare",
    cta: "Scegli questa formula",
    plans: [
      {
        name: "Capsula singola",
        price: "15",
        unit: "per capsula",
        description: "Accedi a una capsula tematica a tua scelta.",
        features: ["1 capsula tematica", "Esercizi interattivi", "Correzioni dettagliate", "Accesso per 30 giorni"],
      },
      {
        name: "Laboratorio conversazione",
        price: "25",
        unit: "per sessione",
        description: "Partecipa a un laboratorio di conversazione in piccolo gruppo.",
        features: ["1 sessione di 90 minuti", "Gruppo da 5 a 10 persone", "Tema a scelta", "Feedback personalizzato", "Supporto post-sessione"],
      },
      {
        name: "Abbonamento mensile",
        price: "89",
        unit: "al mese",
        description: "Accesso illimitato alle capsule e 4 laboratori al mese.",
        features: ["Capsule illimitate", "4 laboratori di conversazione", "Proponi i tuoi temi", "Monitoraggio progressi", "Comunità di studenti", "Iscrizione prioritaria"],
      },
    ],
  },
  footer: {
    brand: "Formazione in Francese Lingua Straniera. Laboratori di conversazione e capsule tematiche per tutti i livelli — con passione e piacere.",
    tagline: "Punto dopo punto, il francese prende forma",
    taglineSub: "De point en point, le français se dessine",
    navigation: "Navigazione",
    contactTitle: "Contatto",
    rights: "Tutti i diritti riservati.",
  },
};

const ro: Translations = {
  nav: {
    home: "Acasă",
    workshops: "Ateliere",
    capsules: "Capsule",
    pricing: "Tarife",
    contact: "Contact",
    book: "Rezervă",
  },
  hero: {
    subtitle: "",
    tagline: "Punct cu punct, franceza prinde contur",
    taglineSub: "De point en point, le français se dessine",
    headline: "Deblocați-vă franceza orală.",
    description: "Ateliere dinamice pentru a progresa în ritmul tău.",
    ctaWorkshops: "Descoperă atelierele",
    ctaCapsules: "Explorează capsulele",
  },
  workshops: {
    label: "Conversație",
    title: "Ateliere de conversație",
    description:
      "Participă la un atelier sau propune propria ta temă de discuție. Alți cursanți interesați se vor înscrie pentru a forma un grup dinamic de 5-10 persoane.",
    features: [
      { title: "Propune o temă", description: "Ai o idee? Propune-o comunității și lansează discuția pe un subiect care te pasionează." },
      { title: "5-10 participanți", description: "Fiecare atelier se deschide de la 5 înscriși și primește maximum 10 persoane pentru calitatea schimburilor." },
      { title: "Sesiuni regulate", description: "Intervale flexibile, față în față sau online, pentru a se adapta programului tău." },
      { title: "De la nivelul B1", description: "Atelierele de conversație sunt concepute pentru cursanții de nivel B1 și peste." },
    ],
    communityTitle: "Teme propuse de comunitate",
    topics: [
      { theme: "Arta de a trăi à la française", votes: 8, status: "Complet" },
      { theme: "Dezbateri pe teme de actualitate", votes: 6, status: "Locuri disponibile" },
      { theme: "Bucătărie și gastronomie", votes: 4, status: "În așteptare (5 min.)" },
      { theme: "Călătorii și descoperiri culturale", votes: 7, status: "Complet" },
    ],
    participantLabel: (n: number) => `${n} participant${n > 1 ? "i" : ""} înscri${n > 1 ? "și" : "s"}`,
  },
  capsules: {
    label: "Învățare țintită",
    title: "Capsule tematice",
    description:
      "Module scurte și țintite, organizate pe nivel și interesele tale, pentru a lucra pe un punct precis al limbii.",
    categories: [
      { title: "Gramatică", description: "Stăpânește structurile esențiale ale limbii franceze." },
      { title: "Lexic", description: "Îmbogățește-ți vocabularul tematic zilnic." },
      { title: "Situații reale", description: "Exersează în contexte reale: muncă, călătorii, viață socială." },
      { title: "Cultură și civilizație", description: "Descoperă francofonia prin cultura și tradițiile sale." },
    ],
    levelLabel: "Nivel",
    available: "3-5 capsule disponibile",
  },
  pricing: {
    label: "Tarife",
    title: "Formule și tarife",
    description: "Formule transparente, adaptate nevoilor tale și ritmului tău de învățare.",
    popular: "Popular",
    cta: "Alege această formulă",
    plans: [
      {
        name: "Capsulă unică",
        price: "15",
        unit: "per capsulă",
        description: "Accesează o capsulă tematică la alegere.",
        features: ["1 capsulă tematică", "Exerciții interactive", "Corecturi detaliate", "Acces 30 de zile"],
      },
      {
        name: "Atelier de conversație",
        price: "25",
        unit: "per sesiune",
        description: "Participă la un atelier de conversație în grup mic.",
        features: ["1 sesiune de 90 minute", "Grup de 5-10 persoane", "Temă la alegere", "Feedback personalizat", "Suport post-sesiune"],
      },
      {
        name: "Abonament lunar",
        price: "89",
        unit: "pe lună",
        description: "Acces nelimitat la capsule și 4 ateliere pe lună.",
        features: ["Capsule nelimitate", "4 ateliere de conversație", "Propune temele tale", "Urmărire progres", "Comunitate de cursanți", "Înscriere prioritară"],
      },
    ],
  },
  footer: {
    brand: "Formare în Franceza ca Limbă Străină. Ateliere de conversație și capsule tematice pentru toate nivelurile — cu pasiune și plăcere.",
    tagline: "Punct cu punct, franceza prinde contur",
    taglineSub: "De point en point, le français se dessine",
    navigation: "Navigare",
    contactTitle: "Contact",
    rights: "Toate drepturile rezervate.",
  },
};

export const translations: Record<Lang, Translations> = { fr, en, es, it, ro };
