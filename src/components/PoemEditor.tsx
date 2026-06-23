type Props = {
  title: string;
  content: string;
  onTitleChange: (v: string) => void;
  onContentChange: (v: string) => void;
};

export function PoemEditor({ title, content, onTitleChange, onContentChange }: Props) {
  return (
    <div className="rounded-lg border border-[var(--ink)]/15 bg-[var(--paper-2)] p-6 shadow-sm sm:p-10">
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Titre (optionnel)"
        className="w-full border-0 border-b border-[var(--ink)]/10 bg-transparent pb-3 font-serif text-2xl text-[var(--ink)] placeholder:text-[var(--ink)]/30 focus:border-[var(--accent)] focus:outline-none"
      />
      <textarea
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder={"Laisse couler les mots…\n\nIl n'y a ni limite, ni format."}
        rows={14}
        className="mt-6 w-full resize-y border-0 bg-transparent font-serif text-lg leading-relaxed text-[var(--ink)] placeholder:text-[var(--ink)]/30 focus:outline-none"
      />
    </div>
  );
}
