import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="brand__mark" aria-hidden="true">JC</span>
          <p>© {year} Jakob Christ — Architekt, München.</p>
        </div>
        <nav aria-label="Rechtliches">
          <ul>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li>
              <a href="https://www.linkedin.com/in/jakob-christ-3ba6a1176/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
