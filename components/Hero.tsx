import { MunichSkyline } from './MunichSkyline';

export function Hero() {
  return (
    <section className="hero" id="top">
      <MunichSkyline />

      <div className="hero__meta">
        <span>München</span>
        <span aria-hidden="true">·</span>
        <span>Architekt</span>
        <span aria-hidden="true">·</span>
        <span>Werkverzeichnis 2015 – 2025</span>
      </div>

      <h1 className="hero__title">
        <span className="line">Jakob</span>
        <span className="line italic">Christ</span>
      </h1>

      <p className="hero__lede">
        Architektur als Zusammenführung von <em>Entwurf</em>, <em>Technik</em> und{' '}
        <em>Gestaltung</em> zu einem schlüssigen Gesamtbild.
      </p>

      <a className="hero__scroll" href="#about" aria-label="Weiter scrollen">
        <span>Scrollen</span>
        <svg viewBox="0 0 24 40" aria-hidden="true">
          <path d="M12 2v32M6 28l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </a>
    </section>
  );
}
