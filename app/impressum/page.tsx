import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Jakob Christ, Architekt aus München.',
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="legal" id="main">
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Jakob Christ<br />
          Architekt<br />
          München, Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/jakob-christ-3ba6a1176/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/jakob-christ-3ba6a1176
          </a>
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>Jakob Christ, Anschrift wie oben.</p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
          Als Diensteanbieter sind wir gemäß § 7 Abs.&nbsp;1 TMG für eigene Inhalte auf diesen
          Seiten nach den allgemeinen Gesetzen verantwortlich.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          der Seiten verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers.
        </p>

        <p style={{ marginTop: '3rem' }}>
          <Link href="/">← Zurück zur Startseite</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
