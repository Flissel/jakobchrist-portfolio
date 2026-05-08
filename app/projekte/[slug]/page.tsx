import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { allSlugs, getProject } from '@/data/projects';

type Params = { slug: string };

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jakobchrist-portfolio.vercel.app';

export function generateStaticParams(): Params[] {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Projekt nicht gefunden' };

  const url = `${SITE_URL}/projekte/${project.slug}`;
  const ogImage = project.cover ? `${SITE_URL}${project.cover}` : `${SITE_URL}/opengraph-image`;

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Jakob Christ`,
      description: project.description,
      url,
      type: 'article',
      images: [{ url: ogImage, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Jakob Christ`,
      description: project.description,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.body ?? project.description,
    dateCreated: String(project.year),
    creator: {
      '@type': 'Person',
      name: 'Jakob Christ',
      url: SITE_URL,
    },
    ...(project.cover && { image: `${SITE_URL}${project.cover}` }),
    url: `${SITE_URL}/projekte/${project.slug}`,
  };

  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <Header />
      <main className="detail" id="main">
        <Link href="/#work" className="detail__back">
          <span aria-hidden="true">←</span>
          <span>Zurück zum Werkverzeichnis</span>
        </Link>

        <div className="detail__meta">
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{project.role}</span>
        </div>

        <h1 className="detail__title">{project.title}</h1>

        <div className="detail__hero">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              sizes="(min-width: 1400px) 1340px, 100vw"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className="project__placeholder" data-placeholder={project.placeholder} aria-hidden="true" />
          )}
        </div>

        <div className="detail__body">
          <div>
            <p>{project.body ?? project.description}</p>
          </div>

          <dl className="detail__facts">
            <div><dt>Jahr</dt><dd>{project.year}</dd></div>
            <div><dt>Rolle</dt><dd>{project.role}</dd></div>
            {project.facts?.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="detail__gallery">
            {project.gallery.map((src, i) => (
              <figure key={i}>
                <Image
                  src={src}
                  alt={`${project.title} — Bild ${i + 1}`}
                  width={1600}
                  height={1200}
                  sizes="(min-width: 800px) 50vw, 100vw"
                />
              </figure>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
