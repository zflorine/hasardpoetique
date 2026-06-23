import { createFileRoute } from "@tanstack/react-router";
import { PoemStudio } from "@/components/PoemStudio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier de poésie sous contrainte" },
      {
        name: "description",
        content:
          "Choisis une ambiance, reçois dix mots imposés et écris ton poème dans un éditeur épuré.",
      },
      { property: "og:title", content: "Atelier de poésie sous contrainte" },
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
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <PoemStudio />
    </div>
  );
}
