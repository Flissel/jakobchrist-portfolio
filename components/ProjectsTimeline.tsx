import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';

type Props = {
  projects: Project[];
};

/**
 * Vertikale, alternierende Timeline mit kreisförmigen Projekt-Bildern,
 * Diamant-Markern auf der Mittelachse und gestrichelten Verbindern.
 * Jeder Eintrag wechselt die Seite automatisch (odd → rechts, even → links).
 */
export function ProjectsTimeline({ projects }: Props) {
  return (
    <ol className="timeline-list">
      {projects.map((p, i) => (
        <li
          key={p.slug}
          className="tl-item reveal"
          data-side={i % 2 === 0 ? 'right' : 'left'}
        >
          <span className="tl-axis-rule" aria-hidden="true" />
          <span className="tl-diamond" aria-hidden="true" />
          <Link href={`/projekte/${p.slug}`} className="tl-link">
            <span className="tl-circle">
              {p.cover ? (
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1200px) 280px, (min-width: 700px) 22vw, 60vw"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <span
                  className="project__placeholder"
                  data-placeholder={p.placeholder}
                  aria-hidden="true"
                />
              )}
            </span>
            <span className="tl-meta">
              <span className="tl-year">{p.year}</span>
              <span className="tl-title">{p.title}</span>
              <span className="tl-role">{p.role}</span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
