import { THEMES, type Theme } from "@/lib/mock-words";

type Props = {
  value: Theme;
  onChange: (t: Theme) => void;
};

export function ThemeSelector({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {THEMES.map((t) => {
        const active = t.key === value;
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onChange(t.key)}
            className={
              "rounded-full border px-4 py-1.5 text-sm transition-colors " +
              (active
                ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
                : "border-[var(--ink)]/20 bg-transparent text-[var(--ink)]/80 hover:border-[var(--ink)]/60")
            }
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
