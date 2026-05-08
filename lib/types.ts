export type ProjectCategory = 'henn' | 'hochschule' | 'stockwerk' | 'cd';

export type Project = {
  /** URL slug — wird zur Detailseite /projekte/<slug> */
  slug: string;
  title: string;
  year: number;
  /** Eine oder mehrere Kategorien (für den Filter im Werkverzeichnis). */
  categories: ProjectCategory[];
  /** Z. B. "HENN", "HM · Master", "Stockwerk 1" */
  role: string;
  /** Kurzbeschreibung für die Karte. */
  description: string;
  /** Längere Beschreibung für die Detailseite (optional). */
  body?: string;
  /** Hauptbild — Pfad in /public/images/projekte/<slug>/cover.jpg */
  cover?: string;
  /** Weitere Bilder für die Detailseite. */
  gallery?: string[];
  /**
   * Platzhalter-Verlauf, wenn noch kein Bild vorhanden ist.
   * Muss in globals.css unter [data-placeholder="..."] definiert sein.
   */
  placeholder: string;
  /** Optionale Details — Standort, BGF, Status, Auftraggeber. */
  facts?: { label: string; value: string }[];
};

export const CATEGORY_LABELS: Record<ProjectCategory | 'all', string> = {
  all: 'Alle',
  henn: 'HENN',
  hochschule: 'Hochschule',
  stockwerk: 'Stockwerk 1',
  cd: 'Computational',
};
