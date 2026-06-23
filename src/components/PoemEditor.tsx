import { forwardRef } from "react";

type Props = {
  title: string;
  content: string;
  onTitleChange: (v: string) => void;
  onContentChange: (v: string) => void;
  background?: string;
  ink?: string;
};

export const PoemEditor = forwardRef<HTMLDivElement, Props>(function PoemEditor(
  { title, content, onTitleChange, onContentChange, background, ink },
  ref,
) {
  const inkColor = ink ?? "var(--ink)";
  const bg = background ?? "var(--paper-2)";
  return (
    <div
      ref={ref}
      className="rounded-lg border border-black/10 p-6 shadow-sm transition-colors sm:p-10"
      style={{ background: bg, color: inkColor }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Titre (optionnel)"
        style={{
          color: inkColor,
          borderColor: `color-mix(in srgb, ${inkColor} 20%, transparent)`,
        }}
        className="w-full border-0 border-b bg-transparent pb-3 font-serif text-2xl placeholder:opacity-40 focus:outline-none"
      />
      <textarea
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder={"Laisse couler les mots…\n\nIl n'y a ni limite, ni format."}
        rows={14}
        style={{ color: inkColor }}
        className="mt-6 w-full resize-y border-0 bg-transparent font-serif text-lg leading-relaxed placeholder:opacity-40 focus:outline-none"
      />
    </div>
  );
});
