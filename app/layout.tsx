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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jakobchrist-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Jakob Christ — Architekt · München',
    template: '%s — Jakob Christ',
  },
  description:
    'Jakob Christ — Architekt aus München. Ein ganzheitlicher Ansatz, der Entwurf, Technik und Gestaltung zu einem schlüssigen Gesamtbild verbindet. Werkverzeichnis von HENN-Großprojekten bis zu Hochschularbeiten.',
  applicationName: 'Jakob Christ — Portfolio',
  authors: [{ name: 'Jakob Christ' }],
  creator: 'Jakob Christ',
  publisher: 'Jakob Christ',
  keywords: [
    'Architekt München',
    'HENN',
    'Architekturbüro',
    'Hochbau',
    'Computational Design',
    'Revitalisierung',
    'Jakob Christ',
    'Portfolio',
    'Werkverzeichnis',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jakob Christ — Architekt · München',
    description:
      'Werkverzeichnis und Portfolio. Bauen als Verbindung von Entwurf, Technik und Gestaltung.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Jakob Christ — Architekt',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakob Christ — Architekt · München',
    description:
      'Werkverzeichnis und Portfolio. Bauen als Verbindung von Entwurf, Technik und Gestaltung.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
