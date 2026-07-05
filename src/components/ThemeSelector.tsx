import { getThemes } from "@/lib/mock-words";
import { useI18n } from "@/lib/i18n";

type Props = {
  value: string;
  onChange: (t: string) => void;
};

export function ThemeSelector({ value, onChange }: Props) {
  const { lang } = useI18n();
  const themes = getThemes(lang);
  return (
    <div className="flex flex-wrap gap-2">
      {themes.map((t) => {
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
