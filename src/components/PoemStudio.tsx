import { useState } from "react";
import { ThemeSelector } from "./ThemeSelector";
import { WordBadges } from "./WordBadges";
import { PoemEditor } from "./PoemEditor";
import { pickWords, type PickedWord, type Theme } from "@/lib/mock-words";

export function PoemStudio() {
  const [theme, setTheme] = useState<Theme>("romantisme");
  const [words, setWords] = useState<PickedWord[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleGenerate() {
    setWords(pickWords(theme));
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      <header className="mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Atelier
        </p>
        <h1 className="font-serif text-4xl text-[var(--ink)] sm:text-5xl">
          Hasard poétique
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-[var(--ink)]/60">
          Choisis une ambiance, reçois dix mots, écris ton poème.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink)]/50">
          Ambiance
        </h2>
        <ThemeSelector value={theme} onChange={setTheme} />
        <div className="mt-6">
          <button
            type="button"
            onClick={handleGenerate}
            className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--paper)] transition-opacity hover:opacity-90"
          >
            {words.length === 0 ? "Générer mes dix mots" : "Re-générer"}
          </button>
        </div>
      </section>

      <section className="mb-10">
        <WordBadges words={words} />
      </section>

      <section className="mb-8">
        <PoemEditor
          title={title}
          content={content}
          onTitleChange={setTitle}
          onContentChange={setContent}
        />
      </section>

      <section className="flex flex-wrap items-center justify-end gap-3">
        <button
          type="button"
          disabled
          title="Bientôt disponible"
          className="cursor-not-allowed rounded-md border border-[var(--ink)]/20 bg-transparent px-4 py-2 text-sm text-[var(--ink)]/40"
        >
          Personnaliser le fond
        </button>
        <button
          type="button"
          disabled
          title="Bientôt disponible"
          className="cursor-not-allowed rounded-md border border-[var(--ink)]/20 bg-transparent px-4 py-2 text-sm text-[var(--ink)]/40"
        >
          Télécharger en PNG
        </button>
        <button
          type="button"
          disabled
          title="Bientôt disponible — réservé aux comptes connectés"
          className="cursor-not-allowed rounded-md border border-[var(--ink)]/20 bg-transparent px-4 py-2 text-sm text-[var(--ink)]/40"
        >
          Sauvegarder
        </button>
      </section>
    </main>
  );
}
