type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Server-Component, die `<script type="application/ld+json">` rendert.
 * Wird in Layout/Pages eingebunden, um strukturierte Daten für Suchmaschinen
 * bereitzustellen.
 */
export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify ist hier sicher, da `data` keine HTML-Inhalte enthält.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
