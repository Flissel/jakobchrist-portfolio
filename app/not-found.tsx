import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="legal" id="main">
        <h1>404 — nicht gefunden</h1>
        <p>Die gesuchte Seite existiert nicht oder wurde verschoben.</p>
        <p style={{ marginTop: '2rem' }}>
          <Link href="/">← Zurück zur Startseite</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
