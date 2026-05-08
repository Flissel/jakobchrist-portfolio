'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/#about', label: 'Profil' },
  { href: '/#approach', label: 'Ansatz' },
  { href: '/#work', label: 'Werk' },
  { href: '/#vita', label: 'Vita' },
  { href: '/#contact', label: 'Kontakt' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <Link href="/" className="brand" aria-label="Jakob Christ — Startseite">
          <span className="brand__mark" aria-hidden="true">JC</span>
          <span className="brand__name">Jakob Christ</span>
        </Link>

        <nav className="nav" aria-label="Hauptnavigation">
          <ul className="nav__list">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobileMenu"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>
      </header>

      <div
        id="mobileMenu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile Navigation">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
