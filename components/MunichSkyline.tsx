import Image from 'next/image';

/**
 * Hero-Skizze: handgezeichnete Architektur-Komposition mit fließender
 * Bodenlinie. Hintergrund ist alpha-maskiert (transparent), liegt sauber
 * über jeder Site-Hintergrundfarbe — kein sichtbarer Bildrahmen.
 */
export function MunichSkyline() {
  return (
    <div className="skyline" aria-hidden="true">
      <Image
        className="skyline__image"
        src="/images/hero-skyline.png"
        alt=""
        width={1448}
        height={413}
        priority
        sizes="(min-width: 1400px) 1300px, 96vw"
      />
    </div>
  );
}
