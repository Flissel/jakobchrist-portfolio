'use client';

import { SectionHead } from './SectionHead';

const ARROW = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export function Contact() {
  // Spam-Schutz: Adresse on demand zusammenbauen
  const onMail = (e: React.MouseEvent) => {
    e.preventDefault();
    const u = 'kontakt';
    const d = 'jakobchrist.com';
    window.location.href = `mailto:${u}@${d}?subject=${encodeURIComponent('Anfrage — Architektur')}`;
  };

  return (
    <section className="section contact" id="contact">
      <SectionHead num="05" label="Kontakt" />

      <div className="contact__grid">
        <h2 className="contact__headline">
          Kollaboration, Wettbewerb<br />oder einfach ein Gespräch.
        </h2>

        <div className="contact__cta">
          <a className="btn" href="https://www.linkedin.com/in/jakob-christ-3ba6a1176/" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            {ARROW}
          </a>
          <a className="btn btn--ghost" href="#" onClick={onMail}>
            <span>E-Mail anfragen</span>
            {ARROW}
          </a>
        </div>

        <dl className="contact__info">
          <div><dt>Standort</dt><dd>München, Deutschland</dd></div>
          <div><dt>Sprachen</dt><dd>Deutsch · Englisch</dd></div>
          <div><dt>Antwortzeit</dt><dd>i. d. R. ≤ 48&nbsp;h</dd></div>
        </dl>
      </div>
    </section>
  );
}
