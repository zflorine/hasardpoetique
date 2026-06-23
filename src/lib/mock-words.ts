export type Category = "nom" | "verbe" | "adjectif" | "adverbe" | "conjonction";

type BankCategory = Exclude<Category, "conjonction">;

export type Theme =
  | "romantisme"
  | "amour"
  | "nature"
  | "spleen"
  | "musique"
  | "mythologie"
  | "surrealisme"
  | "hugo"
  | "gide"
  | "rimbaud"
  | "surprise";

export type ThemeKey = Exclude<Theme, "surprise">;

export const THEMES: { key: Theme; label: string }[] = [
  { key: "romantisme", label: "Romantisme" },
  { key: "amour", label: "Amour" },
  { key: "nature", label: "Nature" },
  { key: "spleen", label: "Spleen" },
  { key: "musique", label: "Musique" },
  { key: "mythologie", label: "Mythologie" },
  { key: "surrealisme", label: "Surréalisme" },
  { key: "hugo", label: "Victor Hugo" },
  { key: "gide", label: "André Gide" },
  { key: "rimbaud", label: "Arthur Rimbaud" },
  { key: "surprise", label: "Surprise" },
];

type WordBank = Record<BankCategory, string[]>;

export const WORDS: Record<ThemeKey, WordBank> = {
  romantisme: {
    nom: ["âme", "soupir", "lune", "chimère", "passion", "ombre", "rêve", "destin", "abîme", "étoile", "souvenir", "larme", "horizon", "tourment", "sérénade"],
    verbe: ["soupirer", "languir", "contempler", "frémir", "errer", "aimer", "pleurer", "rêver", "chanter", "trembler", "consumer", "exalter", "implorer", "embraser", "veiller"],
    adjectif: ["mélancolique", "pâle", "infini", "céleste", "tendre", "vaporeux", "éperdu", "sublime", "ardent", "fatal", "doux", "secret", "lointain", "fragile", "divin"],
    adverbe: ["doucement", "éperdument", "lentement", "tendrement", "silencieusement", "follement", "tristement", "passionnément", "vaguement", "infiniment"],
  },
  amour: {
    nom: ["cœur", "baiser", "caresse", "désir", "étreinte", "promesse", "regard", "tendresse", "passion", "amant", "muse", "flamme", "sourire", "main", "souffle"],
    verbe: ["aimer", "embrasser", "étreindre", "désirer", "chérir", "offrir", "frôler", "murmurer", "promettre", "espérer", "donner", "attendre", "couver", "enlacer", "adorer"],
    adjectif: ["tendre", "ardent", "fou", "fidèle", "brûlant", "épris", "doux", "intime", "vrai", "éternel", "secret", "passionné", "complice", "charnel", "lumineux"],
    adverbe: ["tendrement", "passionnément", "fidèlement", "doucement", "follement", "éperdument", "intimement", "longuement", "secrètement", "ardemment"],
  },
  nature: {
    nom: ["forêt", "rivière", "montagne", "vent", "feuille", "racine", "ciel", "orage", "rosée", "mousse", "écorce", "soleil", "ruisseau", "clairière", "horizon"],
    verbe: ["murmurer", "frémir", "couler", "bruisser", "fleurir", "respirer", "germer", "ondoyer", "souffler", "embaumer", "verdoyer", "ruisseler", "s'épanouir", "frissonner", "éclore"],
    adjectif: ["sauvage", "verdoyant", "limpide", "pur", "ample", "vivant", "ombragé", "fertile", "silencieux", "vaste", "sauvageon", "humide", "doré", "automnal", "minéral"],
    adverbe: ["doucement", "lentement", "calmement", "librement", "paisiblement", "naturellement", "vivement", "sereinement", "discrètement", "amplement"],
  },
  spleen: {
    nom: ["ennui", "brume", "gouffre", "cendre", "néant", "abîme", "spleen", "silence", "plomb", "fiel", "absence", "blessure", "ombre", "linceul", "soir"],
    verbe: ["s'éteindre", "languir", "ronger", "sombrer", "errer", "se taire", "saigner", "peser", "se faner", "s'enfuir", "agoniser", "se dissoudre", "ternir", "expirer", "gémir"],
    adjectif: ["morne", "lourd", "amer", "vain", "morose", "blême", "stérile", "funèbre", "glauque", "las", "désolé", "froid", "ténébreux", "sourd", "infini"],
    adverbe: ["lourdement", "vainement", "amèrement", "tristement", "péniblement", "sourdement", "indéfiniment", "lentement", "gravement", "obscurément"],
  },
  musique: {
    nom: ["mélodie", "accord", "silence", "écho", "refrain", "note", "tempo", "voix", "cadence", "rythme", "harmonie", "chant", "archet", "soupir", "résonance"],
    verbe: ["chanter", "vibrer", "résonner", "souffler", "frapper", "moduler", "fredonner", "improviser", "jouer", "accorder", "rythmer", "danser", "battre", "siffler", "écouter"],
    adjectif: ["mélodique", "grave", "aigu", "harmonieux", "doux", "cristallin", "feutré", "vibrant", "sonore", "rauque", "limpide", "chaud", "discordant", "ample", "syncopé"],
    adverbe: ["doucement", "harmonieusement", "fortement", "lentement", "vivement", "gravement", "rythmiquement", "tendrement", "subtilement", "ardemment"],
  },
  mythologie: {
    nom: ["dieu", "titan", "olympe", "muse", "oracle", "héros", "destin", "nymphe", "abîme", "foudre", "lyre", "labyrinthe", "chimère", "styx", "aurore"],
    verbe: ["forger", "régner", "prophétiser", "engendrer", "métamorphoser", "vaincre", "trahir", "punir", "invoquer", "fonder", "errer", "tisser", "défier", "consumer", "ressusciter"],
    adjectif: ["divin", "immortel", "fatal", "sacré", "antique", "héroïque", "olympien", "chthonien", "prophétique", "fabuleux", "monstrueux", "céleste", "tragique", "primordial", "augural"],
    adverbe: ["divinement", "fatalement", "héroïquement", "éternellement", "sacralement", "tragiquement", "irrémédiablement", "anciennement", "majestueusement", "implacablement"],
  },
  surrealisme: {
    nom: ["girafe", "horloge", "miroir", "automate", "papillon", "labyrinthe", "rêve", "ombrelle", "machine", "fenêtre", "poisson", "constellation", "valise", "nuage", "cadavre"],
    verbe: ["dissoudre", "renverser", "flotter", "rêver", "déformer", "tisser", "exploser", "fondre", "transmuter", "métamorphoser", "halluciner", "errer", "rebondir", "écumer", "dériver"],
    adjectif: ["exquis", "automatique", "improbable", "liquide", "absurde", "flottant", "convulsif", "magnétique", "translucide", "imminent", "merveilleux", "inquiétant", "élastique", "diaphane", "cristallin"],
    adverbe: ["étrangement", "absurdement", "magiquement", "lentement", "automatiquement", "convulsivement", "improbablement", "soudainement", "diaphanement", "follement"],
  },
  hugo: {
    nom: ["océan", "exil", "peuple", "tempête", "abîme", "gueux", "génie", "phare", "ténèbre", "siècle", "victoire", "tombeau", "république", "enfant", "barricade"],
    verbe: ["gronder", "proclamer", "vaincre", "tonner", "élever", "dresser", "défendre", "espérer", "rugir", "consoler", "illuminer", "fonder", "soulever", "abattre", "marcher"],
    adjectif: ["immense", "sombre", "vaste", "auguste", "fier", "sacré", "colossal", "grandiose", "noir", "souverain", "héroïque", "infini", "fatal", "sublime", "humain"],
    adverbe: ["fièrement", "puissamment", "gravement", "sublimement", "immensément", "noblement", "vaillamment", "obstinément", "tragiquement", "humainement"],
  },
  gide: {
    nom: ["ferveur", "fruit", "désir", "voyage", "soif", "nourriture", "porte", "instant", "liberté", "jardin", "soleil", "rive", "âme", "inquiétude", "présence"],
    verbe: ["désirer", "goûter", "partir", "découvrir", "saisir", "ouvrir", "renaître", "abandonner", "chercher", "vivre", "s'éveiller", "fuir", "consentir", "se livrer", "errer"],
    adjectif: ["nouveau", "fervent", "nu", "libre", "ouvert", "lucide", "intime", "limpide", "inquiet", "fragile", "sincère", "frais", "secret", "vivant", "tendre"],
    adverbe: ["ardemment", "lucidement", "sincèrement", "intimement", "vivement", "librement", "tendrement", "fébrilement", "pleinement", "calmement"],
  },
  rimbaud: {
    nom: ["voyelle", "saison", "bateau", "aube", "enfer", "alchimie", "ivresse", "vision", "désert", "feu", "vagabond", "étoile", "comète", "ange", "fleuve"],
    verbe: ["voir", "fuir", "brûler", "inventer", "ivrer", "déranger", "dériver", "halluciner", "fulgurer", "transmuter", "errer", "embraser", "s'envoler", "déchirer", "rêver"],
    adjectif: ["voyant", "ivre", "fulgurant", "absolu", "barbare", "sauvage", "phosphorescent", "païen", "métallique", "torrentiel", "incandescent", "fou", "neuf", "âcre", "splendide"],
    adverbe: ["furieusement", "fulgurament", "absolument", "follement", "sauvagement", "violemment", "ardemment", "ivrement", "intensément", "soudainement"],
  },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export type PickedWord = { word: string; category: Category };

const PLAN: { category: Category; count: number }[] = [
  { category: "nom", count: 3 },
  { category: "verbe", count: 3 },
  { category: "adjectif", count: 3 },
  { category: "adverbe", count: 1 },
];

export function pickWords(theme: Theme): PickedWord[] {
  const keys: ThemeKey[] =
    theme === "surprise"
      ? (Object.keys(WORDS) as ThemeKey[])
      : [theme];

  const result: PickedWord[] = [];
  for (const { category, count } of PLAN) {
    const pool: string[] = [];
    for (const k of keys) pool.push(...WORDS[k][category]);
    const picks = shuffle(Array.from(new Set(pool))).slice(0, count);
    for (const w of picks) result.push({ word: w, category });
  }
  return result;
}
