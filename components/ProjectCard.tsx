import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/types';

type Props = {
  project: Project;
  /** Index zur gestaffelten Reveal-Animation. */
  index?: number;
  /** Wird vom Filter gesetzt. */
  hidden?: boolean;
};

export function ProjectCard({ project, index = 0, hidden = false }: Props) {
  const cats = project.categories.join(' ');
  const delay = `${Math.min(index * 40, 360)}ms`;

  return (
    <li
      className={`project reveal${hidden ? ' is-hidden' : ''}`}
      data-cat={cats}
      data-year={project.year}
      style={{ transitionDelay: delay }}
    >
      <Link href={`/projekte/${project.slug}`} className="project__media" aria-label={project.title}>
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(min-width: 1200px) 30vw, (min-width: 800px) 45vw, 90vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <span className="project__placeholder" data-placeholder={project.placeholder} aria-hidden="true" />
        )}
        <span className="project__hover">
          <span>Ansehen</span>
          <span aria-hidden="true">→</span>
        </span>
      </Link>
      <div className="project__meta">
        <span className="project__year">{project.year}</span>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__desc">{project.description}</p>
        <span className="project__role">{project.role}</span>
      </div>
    </li>
  );
}
