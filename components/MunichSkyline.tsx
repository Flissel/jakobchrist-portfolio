import Image from 'next/image';

/**
 * Hero-Artwork: handgezeichnete Turm-Skizze (THE-SOURCE-Anspielung) mit
 * Konstruktionslinien, sitzt rechts neben dem Namen. Hintergrund ist
 * alpha-maskiert, fügt sich nahtlos in den Site-Hintergrund ein.
 */
export function MunichSkyline() {
  return (
    <div className="hero-art" aria-hidden="true">
      <Image
        src="/images/hero-tower.png"
        alt=""
        width={811}
        height={843}
        priority
        sizes="(min-width: 1200px) 480px, (min-width: 800px) 36vw, 55vw"
      />
    </div>
  );
}
