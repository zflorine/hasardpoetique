import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "zh";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "简体中文", short: "中" },
];

type Dict = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ambianceLabel: string;
  generate: string;
  regenerate: string;
  wordsHeading: string;
  wordsUsed: (used: number, total: number) => string;
  emptyHint: string;
  titlePlaceholder: string;
  contentPlaceholder: string;
  backgroundHeading: string;
  close: string;
  customizeBg: string;
  hideBg: string;
  downloadPng: string;
  downloading: string;
  language: string;
};

export const STRINGS: Record<Lang, Dict> = {
  fr: {
    eyebrow: "Atelier",
    title: "Hasard poétique",
    subtitle: "Choisis une ambiance, reçois dix mots, écris ton poème.",
    ambianceLabel: "Ambiance",
    generate: "Générer mes dix mots",
    regenerate: "Re-générer",
    wordsHeading: "10 mots au hasard",
    wordsUsed: (u, t) => `${u} / ${t} utilisés`,
    emptyHint: "Choisis une ambiance puis génère tes dix mots.",
    titlePlaceholder: "Titre (optionnel)",
    contentPlaceholder: "Laisse couler les mots…\n\nIl n'y a ni limite, ni format.",
    backgroundHeading: "Fond du poème",
    close: "Fermer",
    customizeBg: "Personnaliser le fond",
    hideBg: "Masquer les fonds",
    downloadPng: "Télécharger en PNG",
    downloading: "Export…",
    language: "Langue",
  },
  en: {
    eyebrow: "Studio",
    title: "Poetic Chance",
    subtitle: "Pick a mood, get ten words, write your poem.",
    ambianceLabel: "Mood",
    generate: "Generate my ten words",
    regenerate: "Shuffle again",
    wordsHeading: "10 random words",
    wordsUsed: (u, t) => `${u} / ${t} used`,
    emptyHint: "Pick a mood, then generate your ten words.",
    titlePlaceholder: "Title (optional)",
    contentPlaceholder: "Let the words flow…\n\nNo limit, no format.",
    backgroundHeading: "Poem background",
    close: "Close",
    customizeBg: "Customize background",
    hideBg: "Hide backgrounds",
    downloadPng: "Download as PNG",
    downloading: "Exporting…",
    language: "Language",
  },
  zh: {
    eyebrow: "工作室",
    title: "偶然诗意",
    subtitle: "选一种氛围,获得十个词,写下你的诗。",
    ambianceLabel: "氛围",
    generate: "生成我的十个词",
    regenerate: "重新抽取",
    wordsHeading: "十个随机词",
    wordsUsed: (u, t) => `已用 ${u} / ${t}`,
    emptyHint: "先选一种氛围,再生成十个词。",
    titlePlaceholder: "标题(可选)",
    contentPlaceholder: "让文字自由流淌……\n\n没有格式,没有限制。",
    backgroundHeading: "诗的背景",
    close: "关闭",
    customizeBg: "自定义背景",
    hideBg: "隐藏背景",
    downloadPng: "下载 PNG",
    downloading: "导出中…",
    language: "语言",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: STRINGS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useI18n(): Ctx {
  const c = useContext(LangContext);
  if (!c) throw new Error("useI18n must be used inside LanguageProvider");
  return c;
}
