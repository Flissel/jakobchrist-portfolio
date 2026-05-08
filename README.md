# Jakob Christ — Portfolio (Next.js)

Architekten-Portfolio für Jakob Christ. Next.js 15 (App Router) · TypeScript ·
`next/image` · `next/font`. Volle statische Generierung — deploybar auf Vercel,
Netlify oder jedem CDN.

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
```

Build und Vorschau:

```bash
npm run build
npm run start
npm run typecheck
```

## Projektstruktur

```
app/
  layout.tsx              Schriften, Metadata, Reveal-Loader
  page.tsx                Startseite (alle Sektionen)
  globals.css             Design-System (Tokens, Typografie, Komponenten-Klassen)
  projekte/[slug]/page.tsx  Projekt-Detailseite (statisch generiert)
  impressum/page.tsx
  datenschutz/page.tsx
  not-found.tsx

components/               Header, Hero, About, Approach, Work, Vita, Contact, Footer …
data/projects.ts          Werkverzeichnis (Single Source of Truth)
lib/types.ts              TypeScript-Typen
public/images/projekte/   Projektbilder (siehe unten)
```

## Bilder pflegen

Workflow für ein neues oder bestehendes Projekt:

1. **Bilder ablegen** — pro Projekt einen Ordner anlegen, z. B.
   ```
   public/images/projekte/munich-arena/
     cover.jpg          ← Hauptbild (4:5 für Karte, 16:9 für Detailseite)
     01.jpg
     02.jpg
   ```
   Empfohlen: JPEG/AVIF, ≥ 1600 px Kantenlänge. Next.js erzeugt
   automatisch optimierte Varianten in WebP/AVIF.

2. **Pfade in `data/projects.ts` eintragen:**
   ```ts
   {
     slug: 'munich-arena',
     title: 'Munich Arena',
     // …
     cover: '/images/projekte/munich-arena/cover.jpg',
     gallery: [
       '/images/projekte/munich-arena/01.jpg',
       '/images/projekte/munich-arena/02.jpg',
     ],
   }
   ```

3. Solange noch kein `cover` gesetzt ist, wird automatisch der
   `placeholder`-Verlauf aus `globals.css` verwendet — die Seite ist also
   immer vorzeigbar.

## Neues Projekt anlegen

In `data/projects.ts` ein neues Objekt am Anfang oder an der gewünschten
chronologischen Position einfügen:

```ts
{
  slug: 'neues-projekt',                     // URL → /projekte/neues-projekt
  title: 'Neues Projekt',
  year: 2026,
  categories: ['henn'],                      // 'henn' | 'hochschule' | 'stockwerk' | 'cd'
  role: 'HENN',
  description: 'Kurzbeschreibung für die Karte.',
  body: 'Längerer Text für die Detailseite (optional).',
  placeholder: 'arena',                      // einer der definierten Verläufe
  cover: '/images/projekte/neues-projekt/cover.jpg',
  gallery: [],
  facts: [
    { label: 'Standort', value: 'München' },
    { label: 'BGF', value: '12.000 m²' },
  ],
}
```

Die Detailseite `/projekte/neues-projekt` entsteht automatisch durch
`generateStaticParams`.

## Inhalte ändern

| Inhalt                            | Datei                              |
| --------------------------------- | ---------------------------------- |
| Hero (Name, Untertitel)           | `components/Hero.tsx`              |
| Profil-Text                       | `components/About.tsx`             |
| Drei Säulen (Ansatz)              | `components/Approach.tsx`          |
| Vita-Stationen                    | `components/Vita.tsx`              |
| E-Mail-Adresse, LinkedIn          | `components/Contact.tsx`           |
| Impressum / Datenschutz           | `app/impressum/page.tsx`, `app/datenschutz/page.tsx` |
| Farben, Schriftgrößen, Spacing    | `app/globals.css` (`:root`)        |

## Deployment

**Vercel:** Repository verbinden — kein Setup nötig.
**Statisch:** `next.config.ts` um `output: 'export'` ergänzen, dann
`npm run build` → Inhalt von `out/` auf einen statischen Host laden.

## Hinweise

- Das Reveal-on-Scroll basiert auf `IntersectionObserver`; Klassen `reveal`
  → `is-visible` werden automatisch gesetzt.
- Schriftarten (Fraunces, Inter) werden über `next/font` selbst-gehostet —
  kein externer Request beim Seitenaufruf.
- Die E-Mail-Adresse wird erst beim Klick zusammengebaut (Spam-Schutz). Vor
  dem Live-Gang in `components/Contact.tsx` an die echte Adresse anpassen.
