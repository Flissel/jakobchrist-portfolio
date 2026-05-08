'use client';

import { useMemo, useState } from 'react';
import { ProjectsTimeline } from './ProjectsTimeline';
import { SectionHead } from './SectionHead';
import { CATEGORY_LABELS, type ProjectCategory } from '@/lib/types';
import type { Project } from '@/lib/types';

type Filter = ProjectCategory | 'all';

const FILTERS: Filter[] = ['all', 'henn', 'hochschule', 'stockwerk', 'cd'];

export function Work({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((p) => p.categories.includes(filter as ProjectCategory)),
    [filter, projects]
  );

  return (
    <section className="section work" id="work">
      <SectionHead num="03" label="Ausgewählte Arbeiten" />

      <div className="work__intro">
        <h2>Werkverzeichnis</h2>
        <p>
          Ein chronologischer Querschnitt aus zehn Jahren Praxis — von Hochschularbeiten über
          Wettbewerbe bis zu aktuellen Großprojekten bei HENN.
        </p>
      </div>

      <div className="filters" role="tablist" aria-label="Werkfilter">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter${filter === f ? ' is-active' : ''}`}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
          >
            {CATEGORY_LABELS[f]}
          </button>
        ))}
      </div>

      <ProjectsTimeline projects={filtered} />
    </section>
  );
}
