'use client';

import { useEffect } from 'react';

/**
 * Beobachtet alle Elemente mit `.reveal` und setzt `.is-visible`, sobald
 * sie in den Viewport scrollen. Erkennt auch nachträglich gemountete oder
 * gefilterte Elemente per MutationObserver.
 */
export function Reveal() {
  useEffect(() => {
    const reveal = (el: Element) => el.classList.add('is-visible');

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );

    const observe = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Bereits im Viewport oder darüber → sofort einblenden, sonst beobachten
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          reveal(el);
        } else {
          io.observe(el);
        }
      });
    };

    observe();

    // Neu hinzugefügte .reveal-Elemente aufnehmen
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches?.('.reveal')) observe(node.parentElement ?? document);
            else observe(node);
          }
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
