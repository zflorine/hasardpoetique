import { useEffect, useRef, useState } from "react";
import type { PickedWord } from "@/lib/mock-words";
import { useI18n, type Lang } from "@/lib/i18n";

function normalizeLatin(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z']/g, "");
}

/** Crude French/English stem: keep at least 3 chars, drop up to 3 trailing chars. */
function radical(word: string): string {
  const n = normalizeLatin(word);
  if (n.length <= 4) return n;
  return n.slice(0, Math.max(3, n.length - 3));
}

function tokenizeLatin(text: string): string[] {
  return text.split(/[^A-Za-zÀ-ÿ']+/).map(normalizeLatin).filter(Boolean);
}

function isUsed(word: string, text: string, lang: Lang): boolean {
  if (lang === "zh") {
    // No stemming in Chinese: substring match is the natural check.
    return text.includes(word);
  }
  const tokens = tokenizeLatin(text);
  const r = radical(word);
  if (!r) return false;
  return tokens.some((t) => t.startsWith(r));
}

type Props = {
  words: PickedWord[];
  poemText: string;
};

export function WordBadges({ words, poemText }: Props) {
  const { lang, t } = useI18n();
  const used = words.map((w) => isUsed(w.word, poemText, lang));

  const prevUsedRef = useRef<boolean[]>([]);
  const [flash, setFlash] = useState<Record<string, "in" | "out" | undefined>>({});

  useEffect(() => {
    const prev = prevUsedRef.current;
    const next: Record<string, "in" | "out" | undefined> = {};
    words.forEach((w, i) => {
      const was = prev[i];
      const now = used[i];
      if (was === undefined) return;
      if (!was && now) next[w.word] = "in";
      else if (was && !now) next[w.word] = "out";
    });
    if (Object.keys(next).length > 0) {
      setFlash((f) => ({ ...f, ...next }));
      const timer = setTimeout(() => {
        setFlash((f) => {
          const copy = { ...f };
          for (const k of Object.keys(next)) delete copy[k];
          return copy;
        });
      }, 600);
      prevUsedRef.current = used;
      return () => clearTimeout(timer);
    }
    prevUsedRef.current = used;
  }, [poemText, words]);

  if (words.length === 0) {
    return <p className="text-sm italic text-[var(--ink)]/50">{t.emptyHint}</p>;
  }

  const usedCount = used.filter(Boolean).length;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink)]/50">
          {t.wordsHeading}
        </h3>
        <span className="text-xs text-[var(--ink)]/50">
          {t.wordsUsed(usedCount, words.length)}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {words.map((w, i) => {
          const isOn = used[i];
          const fx = flash[w.word];
          const base =
            "rounded-md border px-3 py-1 font-serif text-base transition-all duration-300";
          const state = isOn
            ? "border-[var(--accent)]/60 bg-[var(--accent)]/10 text-[var(--ink)] line-through decoration-[var(--accent)]/70 decoration-2"
            : "border-[var(--ink)]/15 bg-[var(--paper-2)] text-[var(--ink)]/70";
          const anim =
            fx === "in"
              ? "animate-scale-in ring-2 ring-[var(--accent)]/50"
              : fx === "out"
                ? "animate-shake-fade ring-2 ring-white/70"
                : "";
          return (
            <span key={`${w.category}-${w.word}-${i}`} className={`${base} ${state} ${anim}`}>
              {w.word}
            </span>
          );
        })}
      </div>
    </div>
  );
}
