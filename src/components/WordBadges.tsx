import type { Category, PickedWord } from "@/lib/mock-words";

const CATEGORY_LABEL: Record<Category, string> = {
  nom: "Noms",
  verbe: "Verbes",
  adjectif: "Adjectifs",
  adverbe: "Adverbe",
};

const ORDER: Category[] = ["nom", "verbe", "adjectif", "adverbe"];

type Props = {
  words: PickedWord[];
};

export function WordBadges({ words }: Props) {
  if (words.length === 0) {
    return (
      <p className="text-sm italic text-[var(--ink)]/50">
        Choisis une ambiance puis génère tes dix mots.
      </p>
    );
  }

  const grouped: Record<Category, PickedWord[]> = {
    nom: [],
    verbe: [],
    adjectif: [],
    adverbe: [],
  };
  for (const w of words) grouped[w.category].push(w);

  return (
    <div className="space-y-4">
      {ORDER.map((cat) => (
        <div key={cat}>
          <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink)]/50">
            {CATEGORY_LABEL[cat]}
          </h3>
          <div className="flex flex-wrap gap-2">
            {grouped[cat].map((w) => (
              <span
                key={`${cat}-${w.word}`}
                className="rounded-md border border-[var(--ink)]/15 bg-[var(--paper-2)] px-3 py-1 font-serif text-base text-[var(--ink)]/70"
              >
                {w.word}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
