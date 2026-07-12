import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { ThemeSelector } from "./ThemeSelector";
import { WordBadges } from "./WordBadges";
import { PoemEditor } from "./PoemEditor";
import { BackgroundPicker } from "./BackgroundPicker";
import { LanguageSelector } from "./LanguageSelector";
import { pickWords, getFirstThemeKey, type PickedWord } from "@/lib/mock-words";
import { BACKGROUNDS, type Background } from "@/lib/backgrounds";
import { useI18n } from "@/lib/i18n";

export function PoemStudio() {
  const { lang, t } = useI18n();
  const [theme, setTheme] = useState<string>(getFirstThemeKey(lang));
  const [words, setWords] = useState<PickedWord[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [background, setBackground] = useState<Background>(BACKGROUNDS[0]);
  const [showPicker, setShowPicker] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Reset theme + words when language changes (theme keys differ across langs).
  useEffect(() => {
    setTheme(getFirstThemeKey(lang));
    setWords([]);
  }, [lang]);

  function handleGenerate() {
    setWords(pickWords(lang, theme));
  }

  async function handleDownload() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      const slug = (title.trim() || "poem")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      link.download = `${slug || "poem"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export PNG failed", err);
    } finally {
      setDownloading(false);
    }
  }

  const canExport = content.trim().length > 0 || title.trim().length > 0;

  return (
    <>
      <LanguageSelector />
      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <header className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            {t.eyebrow}
          </p>
          <h1 className="font-serif text-4xl text-[var(--ink)] sm:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[var(--ink)]/60">{t.subtitle}</p>
        </header>

        <section className="mb-10">
          <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink)]/75">
            {t.ambianceLabel}
          </h2>
          <ThemeSelector value={theme} onChange={setTheme} />
          <div className="mt-6">
            <button
              type="button"
              onClick={handleGenerate}
              className="rounded-md bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--paper)] transition-opacity hover:opacity-90"
            >
              {words.length === 0 ? t.generate : t.regenerate}
            </button>
          </div>
        </section>

        <section className="mb-10">
          <WordBadges words={words} poemText={`${title} ${content}`} />
        </section>

        {showPicker && (
          <BackgroundPicker
            value={background}
            onChange={setBackground}
            onClose={() => setShowPicker(false)}
          />
        )}

        <section className="mb-8">
          <PoemEditor
            ref={cardRef}
            title={title}
            content={content}
            onTitleChange={setTitle}
            onContentChange={setContent}
            background={background.css}
            ink={background.ink}
          />
        </section>

        <section className="flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setShowPicker((v) => !v)}
            className="rounded-md border border-[var(--ink)]/20 bg-transparent px-4 py-2 text-sm text-[var(--ink)] transition-colors hover:bg-[var(--ink)]/5"
          >
            {showPicker ? t.hideBg : t.customizeBg}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={!canExport || downloading}
            className="rounded-md bg-[var(--ink)] px-4 py-2 text-sm font-medium text-[var(--paper)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {downloading ? t.downloading : t.downloadPng}
          </button>
        </section>
      </main>
    </>
  );
}
