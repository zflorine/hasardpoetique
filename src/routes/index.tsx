import { createFileRoute } from "@tanstack/react-router";
import { PoemStudio } from "@/components/PoemStudio";
import { LanguageProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasard poétique — Poetic Chance — 偶然诗意" },
      {
        name: "description",
        content:
          "Choisis une ambiance, reçois dix mots imposés et écris ton poème. Pick a mood, get ten words, write your poem. 选一种氛围,获得十个词,写下你的诗。",
      },
      { property: "og:title", content: "Hasard poétique" },
      {
        property: "og:description",
        content: "Dix mots, une ambiance, ton poème.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
        <PoemStudio />
      </div>
    </LanguageProvider>
  );
}
