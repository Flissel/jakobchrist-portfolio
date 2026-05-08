import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Approach } from '@/components/Approach';
import { Work } from '@/components/Work';
import { Vita } from '@/components/Vita';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { projects } from '@/data/projects';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jakobchrist-portfolio.vercel.app';

export default function HomePage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jakob Christ',
    jobTitle: 'Architekt',
    url: SITE_URL,
    image: `${SITE_URL}/images/profile.jpg`,
    worksFor: {
      '@type': 'Organization',
      name: 'HENN',
      url: 'https://www.henn.com',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Hochschule München',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'München',
      addressCountry: 'DE',
    },
    sameAs: ['https://www.linkedin.com/in/jakob-christ-3ba6a1176/'],
  };

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Werkverzeichnis',
    description:
      'Chronologisches Werkverzeichnis von Jakob Christ — Architekt aus München.',
    url: `${SITE_URL}/#work`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/projekte/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <>
      <JsonLd data={[personSchema, portfolioSchema]} />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Approach />
        <Work projects={projects} />
        <Vita />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
