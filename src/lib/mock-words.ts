import type { Lang } from "./i18n";

export type Category = "nom" | "verbe" | "adjectif" | "adverbe" | "conjonction";
type BankCategory = Exclude<Category, "conjonction">;
type WordBank = Record<BankCategory, string[]>;

export type PickedWord = { word: string; category: Category };

/* -------------------------------------------------------------------------- */
/*  FRENCH                                                                    */
/* -------------------------------------------------------------------------- */

const FR_THEMES = [
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

const FR_WORDS: Record<string, WordBank> = {
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

const FR_CONJ = [
  "mais", "ou", "et", "donc", "or", "ni", "car",
  "quand", "si", "lorsque", "puisque", "comme",
  "tandis que", "afin que", "bien que", "pourtant",
];

/* -------------------------------------------------------------------------- */
/*  ENGLISH                                                                   */
/* -------------------------------------------------------------------------- */

const EN_THEMES = [
  { key: "romanticism", label: "Romanticism" },
  { key: "love", label: "Love" },
  { key: "nature", label: "Nature" },
  { key: "spleen", label: "Spleen" },
  { key: "music", label: "Music" },
  { key: "mythology", label: "Mythology" },
  { key: "surrealism", label: "Surrealism" },
  { key: "shakespeare", label: "Shakespeare" },
  { key: "whitman", label: "Walt Whitman" },
  { key: "dickinson", label: "Emily Dickinson" },
  { key: "surprise", label: "Surprise" },
];

const EN_WORDS: Record<string, WordBank> = {
  romanticism: {
    nom: ["soul", "sigh", "moon", "shadow", "dream", "fate", "abyss", "star", "memory", "tear", "horizon", "torment", "serenade", "flame", "veil"],
    verbe: ["sigh", "languish", "gaze", "shiver", "wander", "long", "weep", "dream", "sing", "tremble", "burn", "exalt", "implore", "kindle", "watch"],
    adjectif: ["melancholy", "pale", "endless", "celestial", "tender", "vaporous", "sublime", "ardent", "fateful", "gentle", "secret", "distant", "fragile", "divine", "wistful"],
    adverbe: ["gently", "wildly", "slowly", "tenderly", "silently", "madly", "sadly", "passionately", "vaguely", "endlessly"],
  },
  love: {
    nom: ["heart", "kiss", "caress", "desire", "embrace", "promise", "gaze", "tenderness", "muse", "flame", "smile", "hand", "breath", "vow", "touch"],
    verbe: ["love", "kiss", "hold", "desire", "cherish", "give", "brush", "whisper", "promise", "hope", "await", "adore", "long", "cradle", "enfold"],
    adjectif: ["tender", "ardent", "wild", "faithful", "burning", "smitten", "gentle", "intimate", "true", "eternal", "secret", "passionate", "close", "warm", "luminous"],
    adverbe: ["tenderly", "passionately", "faithfully", "gently", "madly", "wildly", "closely", "long", "secretly", "ardently"],
  },
  nature: {
    nom: ["forest", "river", "mountain", "wind", "leaf", "root", "sky", "storm", "dew", "moss", "bark", "sun", "stream", "meadow", "horizon"],
    verbe: ["murmur", "shiver", "flow", "rustle", "bloom", "breathe", "sprout", "sway", "blow", "scent", "green", "cascade", "unfold", "quiver", "hatch"],
    adjectif: ["wild", "verdant", "clear", "pure", "vast", "alive", "shaded", "fertile", "silent", "damp", "golden", "autumnal", "mineral", "windswept", "lush"],
    adverbe: ["softly", "slowly", "calmly", "freely", "peacefully", "naturally", "briskly", "serenely", "quietly", "widely"],
  },
  spleen: {
    nom: ["boredom", "mist", "chasm", "ash", "void", "abyss", "spleen", "silence", "lead", "bile", "absence", "wound", "shadow", "shroud", "evening"],
    verbe: ["fade", "languish", "gnaw", "sink", "wander", "hush", "bleed", "weigh", "wither", "flee", "die", "dissolve", "tarnish", "expire", "groan"],
    adjectif: ["dull", "heavy", "bitter", "vain", "morose", "wan", "barren", "grim", "murky", "weary", "desolate", "cold", "shadowy", "muffled", "endless"],
    adverbe: ["heavily", "vainly", "bitterly", "sadly", "painfully", "dimly", "endlessly", "slowly", "gravely", "obscurely"],
  },
  music: {
    nom: ["melody", "chord", "silence", "echo", "refrain", "note", "tempo", "voice", "cadence", "rhythm", "harmony", "song", "bow", "sigh", "resonance"],
    verbe: ["sing", "vibrate", "resound", "blow", "strike", "modulate", "hum", "improvise", "play", "tune", "beat", "dance", "pulse", "whistle", "listen"],
    adjectif: ["melodic", "grave", "sharp", "harmonic", "sweet", "crystal", "muted", "vibrant", "sonorous", "raspy", "limpid", "warm", "discordant", "ample", "syncopated"],
    adverbe: ["softly", "harmoniously", "loudly", "slowly", "briskly", "gravely", "rhythmically", "tenderly", "subtly", "ardently"],
  },
  mythology: {
    nom: ["god", "titan", "olympus", "muse", "oracle", "hero", "fate", "nymph", "abyss", "thunder", "lyre", "labyrinth", "chimera", "styx", "dawn"],
    verbe: ["forge", "reign", "prophesy", "beget", "transform", "conquer", "betray", "punish", "invoke", "found", "wander", "weave", "defy", "consume", "resurrect"],
    adjectif: ["divine", "immortal", "fated", "sacred", "ancient", "heroic", "olympian", "prophetic", "fabled", "monstrous", "celestial", "tragic", "primordial", "augural", "eternal"],
    adverbe: ["divinely", "fatefully", "heroically", "eternally", "sacredly", "tragically", "irrevocably", "anciently", "majestically", "implacably"],
  },
  surrealism: {
    nom: ["giraffe", "clock", "mirror", "automaton", "butterfly", "labyrinth", "dream", "umbrella", "machine", "window", "fish", "constellation", "suitcase", "cloud", "corpse"],
    verbe: ["dissolve", "overturn", "float", "dream", "warp", "weave", "explode", "melt", "transmute", "morph", "hallucinate", "wander", "bounce", "foam", "drift"],
    adjectif: ["exquisite", "automatic", "unlikely", "liquid", "absurd", "floating", "convulsive", "magnetic", "translucent", "imminent", "marvelous", "uncanny", "elastic", "diaphanous", "crystalline"],
    adverbe: ["strangely", "absurdly", "magically", "slowly", "automatically", "convulsively", "improbably", "suddenly", "diaphanously", "madly"],
  },
  shakespeare: {
    nom: ["rose", "dagger", "crown", "moor", "moon", "tempest", "sonnet", "ghost", "kingdom", "star", "throne", "shadow", "verse", "night", "grave"],
    verbe: ["swear", "woo", "betray", "avenge", "haunt", "conjure", "banish", "crown", "mourn", "bewitch", "brood", "flourish", "die", "kneel", "beseech"],
    adjectif: ["fair", "foul", "cursed", "sovereign", "wanton", "wondrous", "melancholy", "gentle", "fond", "mortal", "quick", "villainous", "brave", "sweet", "bitter"],
    adverbe: ["nobly", "sweetly", "bitterly", "foully", "gently", "swiftly", "gravely", "wondrously", "sorely", "truly"],
  },
  whitman: {
    nom: ["grass", "body", "road", "prairie", "self", "song", "leaf", "workman", "ocean", "crowd", "comrade", "brook", "star", "flesh", "america"],
    verbe: ["celebrate", "sing", "roam", "loaf", "embrace", "sound", "witness", "till", "sail", "hail", "salute", "gather", "camp", "swim", "chant"],
    adjectif: ["vast", "electric", "bare", "open", "manly", "boundless", "democratic", "cosmic", "salt", "sunlit", "rough", "tender", "teeming", "primal", "athletic"],
    adverbe: ["freely", "loudly", "widely", "gladly", "boldly", "openly", "onward", "abundantly", "roughly", "tenderly"],
  },
  dickinson: {
    nom: ["hope", "hummingbird", "circumference", "bee", "belfry", "immortality", "chamber", "carriage", "loneliness", "brain", "prayer", "grass", "eternity", "letter", "dash"],
    verbe: ["dwell", "stop", "hover", "measure", "waltz", "believe", "faint", "pause", "haunt", "flutter", "seal", "compose", "confide", "elude", "brood"],
    adjectif: ["slant", "quiet", "possible", "small", "certain", "eternal", "domestic", "amber", "sacred", "curious", "narrow", "sudden", "immortal", "shy", "hushed"],
    adverbe: ["quietly", "surely", "slantwise", "gently", "sudden", "narrowly", "solemnly", "small", "eternally", "shyly"],
  },
};

const EN_CONJ = [
  "and", "but", "or", "yet", "so", "for", "nor",
  "when", "if", "while", "because", "though",
  "although", "since", "unless", "whereas",
];

/* -------------------------------------------------------------------------- */
/*  CHINESE (Simplified)                                                      */
/* -------------------------------------------------------------------------- */

const ZH_THEMES = [
  { key: "romanticism", label: "浪漫" },
  { key: "love", label: "爱情" },
  { key: "nature", label: "自然" },
  { key: "spleen", label: "忧郁" },
  { key: "music", label: "音乐" },
  { key: "mythology", label: "神话" },
  { key: "surrealism", label: "超现实" },
  { key: "libai", label: "李白" },
  { key: "dufu", label: "杜甫" },
  { key: "sushi", label: "苏轼" },
  { key: "surprise", label: "惊喜" },
];

const ZH_WORDS: Record<string, WordBank> = {
  romanticism: {
    nom: ["月光", "花影", "梦境", "星辰", "情人", "眼泪", "夜色", "灵魂", "琴弦", "微风", "长发", "回忆", "远方", "心跳", "香气"],
    verbe: ["思念", "凝望", "低语", "轻触", "追寻", "拥抱", "沉醉", "颤抖", "呢喃", "徘徊", "燃烧", "呼唤", "守候", "沉醉", "落泪"],
    adjectif: ["温柔", "苍白", "无尽", "缥缈", "深情", "遥远", "朦胧", "炽热", "轻柔", "神秘", "忧郁", "甜蜜", "永恒", "破碎", "清澈"],
    adverbe: ["轻轻", "慢慢", "深深", "静静", "悄悄", "痴痴", "默默", "款款", "缓缓", "淡淡"],
  },
  love: {
    nom: ["心", "吻", "拥抱", "誓言", "眼神", "红颜", "情丝", "温柔", "指尖", "背影", "承诺", "微笑", "手掌", "呼吸", "距离"],
    verbe: ["爱", "亲吻", "依偎", "牵手", "思念", "拥抱", "凝视", "许诺", "守护", "陪伴", "等待", "呵护", "偷看", "耳语", "眷恋"],
    adjectif: ["温暖", "炽热", "忠贞", "缠绵", "羞涩", "真挚", "深切", "痴狂", "隐秘", "永恒", "亲密", "含蓄", "热烈", "柔软", "甜"],
    adverbe: ["深深", "轻轻", "紧紧", "痴痴", "默默", "悄悄", "长久", "偷偷", "热烈", "小心"],
  },
  nature: {
    nom: ["山", "水", "云", "风", "月", "雪", "松", "溪", "露", "苔", "枫", "海", "岭", "林", "泉"],
    verbe: ["流淌", "吹拂", "凋零", "生长", "盛开", "低鸣", "飘落", "涌动", "呼吸", "苏醒", "沉睡", "涌起", "翻腾", "闪耀", "萌发"],
    adjectif: ["苍翠", "清澈", "辽阔", "幽静", "壮丽", "淡雅", "湿润", "斑斓", "空灵", "静谧", "肥沃", "野性", "金黄", "苍茫", "葱郁"],
    adverbe: ["静静", "缓缓", "悠悠", "轻轻", "自由地", "平静地", "温柔地", "清新地", "自然地", "从容地"],
  },
  spleen: {
    nom: ["愁", "雾", "深渊", "灰烬", "虚无", "沉默", "伤痕", "阴影", "夜幕", "叹息", "空洞", "孤独", "余烬", "缺席", "泪痕"],
    verbe: ["熄灭", "沉沦", "腐蚀", "凋零", "徘徊", "沉默", "流血", "凋谢", "逃离", "枯萎", "叹息", "褪色", "消散", "呻吟", "沉睡"],
    adjectif: ["沉重", "苦涩", "空虚", "阴郁", "冰冷", "苍白", "阴冷", "凄凉", "灰暗", "麻木", "萧瑟", "疲惫", "无声", "无边", "颓败"],
    adverbe: ["沉沉", "苦苦", "缓缓", "默默", "悲伤地", "疲惫地", "无力地", "隐隐", "阴沉地", "痛苦地"],
  },
  music: {
    nom: ["旋律", "和弦", "回声", "琴音", "节拍", "低音", "高音", "歌声", "余韵", "鼓点", "琴弦", "和谐", "音符", "呼吸", "静默"],
    verbe: ["歌唱", "震颤", "回响", "轻拨", "敲击", "低吟", "起舞", "跳动", "共鸣", "调弦", "弹奏", "哼唱", "呼吸", "倾听", "即兴"],
    adjectif: ["悠扬", "低沉", "尖锐", "和谐", "轻柔", "清脆", "闷厚", "响亮", "婉转", "沙哑", "明亮", "温暖", "急促", "缓慢", "跳跃"],
    adverbe: ["轻柔地", "响亮地", "缓缓", "急促地", "低低地", "高亢地", "和谐地", "温柔地", "微妙地", "热烈地"],
  },
  mythology: {
    nom: ["神", "龙", "凤", "麒麟", "仙", "天宫", "银河", "月宫", "瑶池", "神谕", "凡人", "长生", "彼岸", "轮回", "神器"],
    verbe: ["降临", "统御", "预言", "化身", "封印", "斩杀", "轮回", "召唤", "凝铸", "征战", "飞升", "陨落", "封神", "羽化", "复生"],
    adjectif: ["神圣", "不朽", "宿命", "古老", "英勇", "威严", "缥缈", "悲壮", "壮阔", "神秘", "苍茫", "浩渺", "光明", "血脉", "永恒"],
    adverbe: ["神圣地", "宿命地", "英勇地", "永恒地", "庄严地", "悲壮地", "无可挽回地", "威严地", "庄重地", "无情地"],
  },
  surrealism: {
    nom: ["长颈鹿", "钟表", "镜子", "机械人", "蝴蝶", "迷宫", "梦境", "雨伞", "机器", "窗户", "鱼群", "星座", "行李箱", "云朵", "尸体"],
    verbe: ["融化", "颠倒", "漂浮", "梦见", "扭曲", "编织", "爆裂", "熔化", "变形", "蜕变", "幻觉", "游荡", "反弹", "泛起", "漂流"],
    adjectif: ["奇异", "自动", "不可能", "液态", "荒诞", "漂浮", "抽搐", "磁性", "半透明", "即将", "奇妙", "诡异", "弹性", "透明", "水晶般"],
    adverbe: ["奇怪地", "荒诞地", "神奇地", "缓缓地", "自动地", "抽搐地", "不可能地", "突然地", "透明地", "疯狂地"],
  },
  libai: {
    nom: ["酒", "剑", "月", "白发", "青天", "长风", "黄河", "蜀道", "孤帆", "边塞", "夜光杯", "银河", "峨眉", "扁舟", "白云"],
    verbe: ["举杯", "邀月", "长啸", "醉卧", "挥剑", "登临", "远游", "放歌", "叹息", "拂袖", "泼墨", "遥望", "浮沉", "飞渡", "独酌"],
    adjectif: ["豪迈", "飘逸", "洒脱", "苍茫", "皎洁", "狂放", "孤高", "壮阔", "神仙", "醉意", "汹涌", "巍峨", "潇洒", "奔放", "空灵"],
    adverbe: ["豪迈地", "潇洒地", "独自", "狂放地", "遥遥", "翩然", "飘然", "醉醉", "长长", "悠然"],
  },
  dufu: {
    nom: ["茅屋", "秋风", "白发", "干戈", "百姓", "长安", "泪痕", "边庭", "残月", "烽火", "老泪", "孤舟", "故园", "寒衣", "乱世"],
    verbe: ["流离", "叹息", "忧愁", "奔波", "哀鸣", "登高", "远望", "怀念", "哭泣", "苦吟", "凋落", "颠沛", "眺望", "枯坐", "感怀"],
    adjectif: ["沉郁", "苍老", "萧瑟", "破败", "凄凉", "沉痛", "苦涩", "深切", "忧国", "潦倒", "衰颓", "悲怆", "苍茫", "肃穆", "沉重"],
    adverbe: ["沉沉", "凄凄", "默默", "苦苦", "长长", "深深", "缓缓", "萧然", "苍然", "潸然"],
  },
  sushi: {
    nom: ["明月", "赤壁", "扁舟", "东坡", "竹杖", "芒鞋", "江水", "清风", "白发", "故人", "羽衣", "缺月", "秋声", "老翁", "山色"],
    verbe: ["把酒", "问天", "泛舟", "长啸", "醉眠", "回首", "追怀", "登高", "笑看", "咏叹", "临风", "洗净", "遥望", "举首", "涤荡"],
    adjectif: ["旷达", "从容", "淡泊", "空灵", "洒脱", "明净", "清幽", "疏朗", "豁达", "苍老", "空明", "闲适", "潇洒", "沉静", "澄澈"],
    adverbe: ["从容地", "旷达地", "淡然", "潇洒地", "静静", "缓缓", "悠悠", "泰然", "怡然", "悄然"],
  },
};

const ZH_CONJ = [
  "而", "但", "或", "与", "和", "因", "故", "若",
  "虽", "然", "却", "却又", "既", "且", "又", "亦",
];

/* -------------------------------------------------------------------------- */
/*  DISPATCH                                                                  */
/* -------------------------------------------------------------------------- */

const BANKS: Record<Lang, { themes: { key: string; label: string }[]; words: Record<string, WordBank>; conj: string[] }> = {
  fr: { themes: FR_THEMES, words: FR_WORDS, conj: FR_CONJ },
  en: { themes: EN_THEMES, words: EN_WORDS, conj: EN_CONJ },
  zh: { themes: ZH_THEMES, words: ZH_WORDS, conj: ZH_CONJ },
};

export function getThemes(lang: Lang) {
  return BANKS[lang].themes;
}

export function getFirstThemeKey(lang: Lang): string {
  return BANKS[lang].themes[0].key;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PLAN: { category: BankCategory; count: number }[] = [
  { category: "nom", count: 3 },
  { category: "verbe", count: 2 },
  { category: "adjectif", count: 3 },
  { category: "adverbe", count: 1 },
];

export function pickWords(lang: Lang, themeKey: string): PickedWord[] {
  const bank = BANKS[lang];
  const keys: string[] =
    themeKey === "surprise"
      ? Object.keys(bank.words)
      : bank.words[themeKey]
        ? [themeKey]
        : Object.keys(bank.words);

  const result: PickedWord[] = [];
  for (const { category, count } of PLAN) {
    const pool: string[] = [];
    for (const k of keys) pool.push(...bank.words[k][category]);
    const picks = shuffle(Array.from(new Set(pool))).slice(0, count);
    for (const w of picks) result.push({ word: w, category });
  }
  const [conj] = shuffle(bank.conj).slice(0, 1);
  if (conj) result.push({ word: conj, category: "conjonction" });
  return result;
}
