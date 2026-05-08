import Image from 'next/image';
import { SectionHead } from './SectionHead';

const PILLARS = [
  {
    num: 'I',
    title: 'Entwurf',
    body:
      'Ein Gebäude beginnt mit einer klaren Idee — Ort, Programm und Atmosphäre werden in eine räumliche Logik überführt, die trägt, ohne sich aufzudrängen.',
    image: '/images/approach/entwurf.jpg',
  },
  {
    num: 'II',
    title: 'Technik',
    body:
      'Konstruktion, Tragwerk und Klima sind keine Nachträge zur Gestaltung, sondern ihr Rückgrat. Computational Design erweitert die Werkzeuge, nicht die Komplexität.',
    image: '/images/approach/technik.jpg',
  },
  {
    num: 'III',
    title: 'Gestaltung',
    body:
      'Material, Maß und Detail schließen den Kreis. Erst hier entsteht das, woran man ein Haus erkennt: Haltung.',
    image: '/images/approach/gestaltung.jpg',
  },
];

export function Approach() {
  return (
    <section className="section approach" id="approach">
      <SectionHead num="02" label="Ansatz" />
      <h2 className="approach__headline">Drei Linien, die jedes Projekt tragen.</h2>
      <ol className="pillars">
        {PILLARS.map((p) => (
          <li className="pillar reveal" key={p.num}>
            <span className="pillar__num">{p.num}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <figure className="pillar__image">
              <Image
                src={p.image}
                alt=""
                width={1400}
                height={1050}
                sizes="(min-width: 800px) 30vw, 90vw"
              />
            </figure>
          </li>
        ))}
      </ol>
    </section>
  );
}
