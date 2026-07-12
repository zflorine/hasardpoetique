import { BACKGROUNDS, type Background } from "@/lib/backgrounds";
import { useI18n } from "@/lib/i18n";

type Props = {
  value: Background;
  onChange: (bg: Background) => void;
  onClose: () => void;
};

export function BackgroundPicker({ value, onChange, onClose }: Props) {
  const { t } = useI18n();
  return (
    <div className="mb-6 rounded-lg border border-[var(--ink)]/15 bg-[var(--paper-2)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink)]/60">
          {t.backgroundHeading}
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-[var(--ink)]/75 hover:text-[var(--ink)]"
        >
          {t.close}
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
        {BACKGROUNDS.map((bg) => {
          const active = bg.id === value.id;
          return (
            <button
              key={bg.id}
              type="button"
              onClick={() => onChange(bg)}
              title={bg.label}
              className={`group flex flex-col items-center gap-1.5 focus:outline-none`}
            >
              <span
                className={`h-12 w-12 rounded-full border transition-transform ${
                  active
                    ? "scale-110 border-[var(--ink)] ring-2 ring-[var(--accent)]/60"
                    : "border-[var(--ink)]/20 group-hover:scale-105"
                }`}
                style={{ background: bg.css }}
              />
              <span
                className={`text-[10px] uppercase tracking-wider ${
                  active ? "text-[var(--ink)]" : "text-[var(--ink)]/75"
                }`}
              >
                {bg.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
