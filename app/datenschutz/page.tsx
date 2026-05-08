import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Jakob Christ, Architekt aus München.',
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="legal" id="main">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          Jakob Christ, München, Deutschland.
        </p>

        <h2>2. Erfassung allgemeiner Informationen</h2>
        <p>
          Beim Aufruf dieser Website werden automatisch durch den Webserver Informationen erfasst,
          die keinen Rückschluss auf Ihre Person zulassen, wie z.&nbsp;B. der verwendete Browser,
          das Betriebssystem, der Internetdienstanbieter und ähnliche technische Daten. Diese
          Informationen werden ausgewertet, um den Internetauftritt attraktiver zu gestalten.
        </p>

        <h2>3. Cookies</h2>
        <p>
          Diese Website verwendet keine Tracking-Cookies. Es kommen ausschließlich technisch
          notwendige Cookies zum Einsatz, soweit überhaupt erforderlich.
        </p>

        <h2>4. Schriftarten (Google Fonts)</h2>
        <p>
          Diese Seite nutzt die Schriftarten Fraunces und Inter über die in Next.js integrierte
          Schrift-Optimierung. Die Schriften werden lokal vom Server der Website ausgeliefert,
          es findet keine Verbindung zu Google-Servern beim Seitenaufruf statt.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Wenden Sie sich dafür an die unter
          „Verantwortlicher“ genannten Kontaktdaten.
        </p>

        <h2>6. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
          Ihrer personenbezogenen Daten zu beschweren.
        </p>

        <p style={{ marginTop: '3rem' }}>
          <Link href="/">← Zurück zur Startseite</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
