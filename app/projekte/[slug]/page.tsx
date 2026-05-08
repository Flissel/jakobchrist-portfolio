import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { allSlugs, getProject } from '@/data/projects';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Projekt nicht gefunden' };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
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
