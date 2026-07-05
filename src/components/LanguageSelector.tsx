import { useEffect, useRef, useState } from "react";
import { LANGS, useI18n } from "@/lib/i18n";

export function LanguageSelector() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="fixed right-4 top-4 z-50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.language}
        className="flex items-center gap-1.5 rounded-full border border-[var(--ink)]/15 bg-[var(--paper-2)]/80 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--ink)]/80 backdrop-blur transition-colors hover:border-[var(--ink)]/40 hover:text-[var(--ink)]"
      >
        <span>{current.short}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 min-w-[9rem] overflow-hidden rounded-md border border-[var(--ink)]/15 bg-[var(--paper-2)] shadow-lg">
          {LANGS.map((l) => {
            const active = l.code === lang;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={
                    "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors " +
                    (active
                      ? "bg-[var(--ink)] text-[var(--paper)]"
                      : "text-[var(--ink)]/80 hover:bg-[var(--ink)]/5")
                  }
                >
                  <span>{l.label}</span>
                  <span className="text-xs opacity-60">{l.short}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
