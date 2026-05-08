import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Reveal } from '@/components/Reveal';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jakobchrist.com'),
  title: {
    default: 'Jakob Christ — Architekt · München',
    template: '%s — Jakob Christ',
  },
  description:
    'Jakob Christ — Architekt aus München. Ein ganzheitlicher Ansatz, der Entwurf, Technik und Gestaltung zu einem schlüssigen Gesamtbild verbindet.',
  openGraph: {
    title: 'Jakob Christ — Architekt · München',
    description:
      'Werkverzeichnis und Portfolio. Bauen als Verbindung von Entwurf, Technik und Gestaltung.',
    type: 'website',
    locale: 'de_DE',
  },
};

export const viewport: Viewport = {
  themeColor: '#1a1814',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">Zum Inhalt springen</a>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
