export type Background = {
  id: string;
  label: string;
  /** CSS background value (used for both preview swatch and exported card). */
  css: string;
  /** Suggested ink color over this background. */
  ink: string;
  /** Subtle border color for the preview swatch. */
  swatchBorder?: string;
};

export const BACKGROUNDS: Background[] = [
  {
    id: "paper",
    label: "Papier",
    css: "var(--paper-2)",
    ink: "var(--ink)",
    swatchBorder: "rgba(0,0,0,0.15)",
  },
  {
    id: "aube",
    label: "Aube",
    css: "linear-gradient(135deg, #fde7d3 0%, #f4b8c5 55%, #c79bd1 100%)",
    ink: "#2b1d2e",
  },
  {
    id: "crepuscule",
    label: "Crépuscule",
    css: "linear-gradient(160deg, #2a1a3a 0%, #6b3a6f 50%, #d97a7a 100%)",
    ink: "#fdf2e6",
  },
  {
    id: "ocean",
    label: "Océan",
    css: "linear-gradient(135deg, #cfe9f1 0%, #6fb1c4 55%, #2c4a6b 100%)",
    ink: "#0e1f2e",
  },
  {
    id: "foret",
    label: "Forêt",
    css: "linear-gradient(160deg, #e9efd5 0%, #7fa37a 55%, #2d4a36 100%)",
    ink: "#14211a",
  },
  {
    id: "encre",
    label: "Encre",
    css: "linear-gradient(160deg, #1c1c24 0%, #2a2a3a 60%, #3a2a4a 100%)",
    ink: "#f3ecd9",
  },
  {
    id: "or",
    label: "Or",
    css: "linear-gradient(135deg, #fff6dc 0%, #f0c674 60%, #a07a2a 100%)",
    ink: "#2a1d05",
  },
  {
    id: "lilas",
    label: "Lilas",
    css: "linear-gradient(135deg, #f4ecff 0%, #cbb6e8 55%, #8a6fb3 100%)",
    ink: "#241a36",
  },
];
