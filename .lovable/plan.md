# Étape 1 — Structure & UI mockée (révisée)

## Périmètre Étape 1

- Page d'accueil unique (`/`) avec toute l'expérience d'écriture.
- Sélecteur d'ambiance étendu : **Romantisme, Amour, Nature, Spleen, Musique, Mythologie, Surréalisme, Victor Hugo, André Gide, Arthur Rimbaud, Surprise**.
- Bouton « Générer » qui tire 10 mots mockés (3 noms, 3 verbes, 3 adjectifs, 1 adverbe) depuis un fichier local.
- Badges des mots regroupés par catégorie, état "non utilisé" (gris) par défaut.
- Zone d'écriture : titre optionnel + textarea libre.
- Placeholders désactivés pour « Personnaliser le fond », « Télécharger », « Sauvegarder » (activés étapes suivantes).

Hors périmètre : détection des mots, fonds personnalisés, export PNG, Supabase, auth.

## Direction visuelle

Esthétique éditoriale / papier littéraire :
- Serif élégante pour le poème (Cormorant Garamond), sans-serif discrète pour l'UI.
- Palette crème + encre, un accent chaud unique.
- Colonne centrée étroite, beaucoup de blanc.

Dis-moi si tu préfères une autre direction (sombre minimal, brutalist, etc.).

## Détails techniques

- Stack du template : **TanStack Start + React + Tailwind v4** (reste 100% React + Tailwind comme demandé).
- **Tailwind v4** : aucun `tailwind.config.js`. Tokens (couleurs crème/encre/accent, familles `--font-serif` / `--font-sans`) déclarés via `@theme` dans `src/styles.css`. Polices chargées via `<link>` dans `src/routes/__root.tsx` (pas d'`@import` URL en CSS, contrainte Lightning CSS).
- Route : `src/routes/index.tsx` remplace le placeholder, `head()` FR (titre + meta description).
- Données mockées : `src/lib/mock-words.ts` — `Record<Theme, { nom; verbe; adjectif; adverbe }>` avec ~15 mots/catégorie/thème (les 10 ambiances ci-dessus ; Surprise = pioche cross-thèmes).
- Composants :
  - `src/components/ThemeSelector.tsx`
  - `src/components/WordBadges.tsx`
  - `src/components/PoemEditor.tsx`
  - `src/components/PoemStudio.tsx` (compose + state local `useState`)
- Fonction `pickWords(theme)` : tirage 3/3/3/1 sans doublons.

## Validation

Je te montre l'UI dans le preview → tu valides → **Étape 2** : détection par radical + animation des badges.
