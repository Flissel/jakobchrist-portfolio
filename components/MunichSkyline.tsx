import Image from 'next/image';

/**
 * Hero-Skizze: handgezeichnete Architektur-Komposition mit fließender
 * Bodenlinie, Pavillon, Baum, Stadionzelt, Frauenkirchen-Hauben und
 * BMW-Vierzylinder. Faded sich beim Aufruf sanft ein.
 */
export function MunichSkyline() {
  return (
    <div className="skyline" aria-hidden="true">
      <Image
        src="/images/hero-skyline.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 1400px) 1300px, 96vw"
        style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
      />
    </div>
  );
}
