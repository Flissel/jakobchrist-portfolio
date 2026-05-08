/**
 * Eine Single-Line-Zeichnung der Münchner Skyline aus Sicht des Olympiaturms:
 * Alpenkette → Theatinerkirche → Frauenkirche-Türme → BMW-Vierzylinder.
 * Wird per stroke-dashoffset live „gezeichnet". Pencil-Wobble via SVG-Filter.
 */
export function MunichSkyline() {
  return (
    <div className="skyline" aria-hidden="true">
      <svg
        viewBox="0 0 1600 500"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pencil-wobble" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed="3" />
            <feDisplacementMap in="SourceGraphic" scale="1.4" />
          </filter>
        </defs>

        <path
          className="skyline__line"
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#pencil-wobble)"
          d="
            M 0 370
            Q 70 360 130 358
            Q 200 354 250 330
            L 290 290
            L 320 248
            L 358 296
            L 392 264
            L 432 312
            L 478 286
            L 520 320
            Q 600 348 680 358
            L 740 358
            L 752 338
            L 768 358
            L 850 358
            L 868 326
            L 882 326
            L 894 358
            L 970 358
            L 970 296
            C 970 268, 992 264, 992 264
            C 992 264, 1014 268, 1014 296
            L 1014 358
            L 1042 358
            L 1042 290
            C 1042 260, 1066 256, 1066 256
            C 1066 256, 1090 260, 1090 290
            L 1090 358
            L 1180 358
            L 1196 322
            L 1206 304
            L 1212 282
            L 1220 304
            L 1232 322
            L 1248 358
            L 1320 358
            L 1320 226
            L 1340 226
            L 1340 196
            L 1380 196
            L 1380 226
            L 1400 226
            L 1400 358
            Q 1480 360 1600 374
          "
        />
      </svg>
    </div>
  );
}
