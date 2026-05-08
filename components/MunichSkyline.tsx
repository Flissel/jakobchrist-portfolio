/**
 * Architekten-Skizze einer Münchner Stadtpartie:
 * Pavillon · Baum · Stadionzelt · Glaspavillon · Frauenkirchen-Hauben · BMW-Vierzylinder · Schwung-Ende.
 * Feine Konstruktionslinien als Grid, dann durchgängige Bodenlinie, dann die Objekte —
 * jedes Element zeichnet sich mit Versatz, als würde jemand live skizzieren.
 */
export function MunichSkyline() {
  return (
    <div className="skyline" aria-hidden="true">
      <svg
        viewBox="0 0 1600 220"
        preserveAspectRatio="xMidYEnd meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* — Konstruktions-Grid (feine Vertikalen) — */}
        <g className="skyline__grid">
          {[240, 332, 384, 600, 770, 850, 940, 1000, 1100, 1280, 1340, 1490].map((x) => (
            <line
              key={x}
              x1={x}
              y1={20}
              x2={x}
              y2={205}
              stroke="currentColor"
              strokeWidth={0.4}
              strokeDasharray="2 4"
            />
          ))}
        </g>

        {/* — Bodenlinie (eine Welle, Schwung am Ende) — */}
        <path
          className="skyline__line"
          style={{ ['--d' as string]: '0s', ['--t' as string]: '4.2s' } as React.CSSProperties}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="
            M 0 178
            Q 60 174 130 176
            Q 200 180 240 175
            L 332 175
            Q 360 180 384 173
            Q 480 168 600 175
            L 720 175
            Q 800 178 850 175
            L 940 175
            Q 970 178 1000 175
            L 1100 175
            Q 1190 175 1280 175
            L 1340 175
            Q 1400 175 1455 172
            C 1495 168 1525 162 1530 156
            C 1534 150 1525 146 1520 152
            C 1515 158 1525 162 1532 159
          "
        />

        {/* — Pavillon mit Innen-Streben (Olympia-Zelt Mini) — */}
        <g
          className="skyline__el"
          style={{ ['--d' as string]: '1.4s', ['--t' as string]: '0.8s' } as React.CSSProperties}
        >
          <path
            pathLength={1}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            d="M 240 175 L 240 142 Q 240 118 268 118 Q 296 118 296 142 L 296 175"
          />
          {[252, 261, 270, 279, 288].map((x, i) => (
            <line
              key={i}
              pathLength={1}
              x1={x}
              y1={120 + (i % 2) * 2}
              x2={x}
              y2={172}
              stroke="currentColor"
              strokeWidth={0.6}
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* — Sockelblock — */}
        <path
          className="skyline__el"
          style={{ ['--d' as string]: '1.7s', ['--t' as string]: '0.5s' } as React.CSSProperties}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          d="M 304 175 L 304 165 L 332 165 L 332 175"
        />

        {/* — Baum (lockerer Wolken-Cluster + Stamm) — */}
        <g
          className="skyline__el"
          style={{ ['--d' as string]: '2s', ['--t' as string]: '0.9s' } as React.CSSProperties}
        >
          <path
            pathLength={1}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 590 152 q -6 -10 4 -12 q 0 -12 12 -10 q 8 -10 16 -2 q 12 -2 12 8 q 10 4 4 12 q 6 8 -4 12 q -2 8 -12 6 q -8 6 -16 0 q -12 4 -14 -6 q -10 -2 -2 -8"
          />
          <line
            pathLength={1}
            x1={606}
            y1={158}
            x2={606}
            y2={175}
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
          />
        </g>

        {/* — Stadionzelt (Dreieck) — */}
        <path
          className="skyline__el"
          style={{ ['--d' as string]: '2.3s', ['--t' as string]: '0.7s' } as React.CSSProperties}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 720 175 L 770 108 L 820 175"
        />

        {/* — Glaspavillon (langer flacher Kasten) — */}
        <path
          className="skyline__el"
          style={{ ['--d' as string]: '2.6s', ['--t' as string]: '0.8s' } as React.CSSProperties}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 850 175 L 850 156 L 940 156 L 940 175 M 870 156 L 870 175 M 890 156 L 890 175 M 910 156 L 910 175"
        />

        {/* — Frauenkirche, zwei Hauben — */}
        <g
          className="skyline__el"
          style={{ ['--d' as string]: '3s', ['--t' as string]: '1s' } as React.CSSProperties}
        >
          <path
            pathLength={1}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 1000 175 L 1000 135 Q 1000 108 1020 108 Q 1040 108 1040 135 L 1040 175"
          />
          <path
            pathLength={1}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 1062 175 L 1062 130 Q 1062 102 1082 102 Q 1102 102 1102 130 L 1102 175"
          />
        </g>

        {/* — BMW-Vierzylinder — */}
        <g
          className="skyline__el"
          style={{ ['--d' as string]: '3.4s', ['--t' as string]: '0.9s' } as React.CSSProperties}
        >
          <path
            pathLength={1}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 1280 175 L 1280 80 L 1340 80 L 1340 175"
          />
          <line
            pathLength={1}
            x1={1310}
            y1={80}
            x2={1310}
            y2={64}
            stroke="currentColor"
            strokeWidth={0.8}
            strokeLinecap="round"
          />
          <circle cx={1310} cy={62} r={1.4} fill="currentColor" className="skyline__dot" />
        </g>

        {/* — Schluss-Punkt — */}
        <circle cx={1545} cy={159} r={1.6} fill="currentColor" className="skyline__dot skyline__dot--end" />
      </svg>
    </div>
  );
}
