import { SectionHead } from './SectionHead';

const ITEMS = [
  {
    year: '2017 — heute',
    title: 'HENN Architekten',
    body: 'Mitarbeiter — Projekte in Forschung, Industrie, Bestand und Kultur. Schwerpunkt München.',
  },
  {
    year: '2019',
    title: 'Master of Arts · Architektur',
    body: 'Hochschule München. Masterarbeit bei Prof. Andreas Meck — Badehaus St. Martin.',
  },
  {
    year: '2019',
    title: 'Tutor · Hochschule München',
    body: 'Lehrtätigkeit im Grundlagenstudium — Entwurf, Darstellung, Modellbau.',
  },
  {
    year: '2016 — 2017',
    title: 'Stockwerk 1',
    body: 'Mitarbeit an Wohn- und Geschäftsbauten sowie Eventarchitekturen für Marc O’Polo und BMW Art Basel.',
  },
  {
    year: '2015',
    title: 'Bachelor of Arts · Architektur',
    body: 'Hochschule München. Bachelorarbeit Popodium.',
  },
  {
    year: '2012',
    title: 'Abitur · Maitenbeth',
    body: 'Beginn des Architekturstudiums in München im Wintersemester 2012/13.',
  },
];

export function Vita() {
  return (
    <section className="section vita" id="vita">
      <SectionHead num="04" label="Vita" />
      <h2 className="vita__headline">Stationen</h2>
      <ol className="timeline">
        {ITEMS.map((it, i) => (
          <li className="timeline__item reveal" key={i}>
            <span className="timeline__year">{it.year}</span>
            <div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
