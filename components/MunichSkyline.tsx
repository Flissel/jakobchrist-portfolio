/**
 * Single-Line-Zeichnung der Münchner Skyline aus Sicht des Olympiaturms:
 * Alpenkette → Theatinerkirchen-Spitze → Frauenkirchen-Türme → BMW-Vierzylinder.
 * Wird per stroke-dashoffset live „gezeichnet". Sitzt als schmales Band
 * am unteren Rand des Hero, damit nichts mit der Typografie kollidiert.
 */
export function MunichSkyline() {
  return (
    <div className="skyline" aria-hidden="true">
      <svg
        viewBox="0 0 1600 200"
        preserveAspectRatio="xMidYEnd meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="skyline__line"
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="
            M 0 165
            Q 80 162 160 164
            Q 240 166 290 152
            L 322 132
            L 348 116
            L 376 134
            L 408 124
            L 444 144
            L 488 156
            Q 560 165 640 168
            L 720 168
            L 732 156
            L 744 168
            L 830 168
            L 846 152
            L 858 152
            L 868 168
            L 950 168
            L 950 138
            C 950 128, 968 126, 968 126
            C 968 126, 986 128, 986 138
            L 986 168
            L 1014 168
            L 1014 132
            C 1014 122, 1036 120, 1036 120
            C 1036 120, 1058 122, 1058 132
            L 1058 168
            L 1148 168
            L 1162 152
            L 1170 140
            L 1176 128
            L 1184 140
            L 1194 152
            L 1208 168
            L 1290 168
            L 1290 96
            L 1310 96
            L 1310 84
            L 1346 84
            L 1346 96
            L 1366 96
            L 1366 168
            Q 1450 170 1600 176
          "
        />
      </svg>
    </div>
  );
}
