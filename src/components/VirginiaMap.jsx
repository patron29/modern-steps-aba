import { useState } from 'react';

/**
 * All 95 Virginia counties with approximate (x, y) positions
 * within a 600x300 viewBox representing Virginia's shape.
 * Western mountains on left, Northern Virginia upper-right,
 * Hampton Roads lower-right, Eastern Shore far right.
 */
const counties = [
  // === FAR SOUTHWEST (Appalachian) ===
  { name: 'Lee', x: 18, y: 192 },
  { name: 'Scott', x: 42, y: 182 },
  { name: 'Wise', x: 48, y: 168 },
  { name: 'Dickenson', x: 62, y: 162 },
  { name: 'Buchanan', x: 52, y: 152 },
  { name: 'Russell', x: 72, y: 172 },
  { name: 'Tazewell', x: 82, y: 155 },

  // === SOUTHWEST ===
  { name: 'Washington', x: 72, y: 192 },
  { name: 'Smyth', x: 88, y: 185 },
  { name: 'Bland', x: 100, y: 168 },
  { name: 'Grayson', x: 96, y: 202 },
  { name: 'Carroll', x: 108, y: 202 },
  { name: 'Wythe', x: 106, y: 180 },
  { name: 'Pulaski', x: 114, y: 168 },
  { name: 'Giles', x: 110, y: 152 },
  { name: 'Montgomery', x: 126, y: 165 },
  { name: 'Floyd', x: 124, y: 185 },
  { name: 'Patrick', x: 132, y: 204 },
  { name: 'Henry', x: 148, y: 208 },

  // === WESTERN MOUNTAINS / VALLEY ===
  { name: 'Craig', x: 138, y: 142 },
  { name: 'Alleghany', x: 148, y: 130 },
  { name: 'Bath', x: 162, y: 118 },
  { name: 'Highland', x: 168, y: 98 },
  { name: 'Rockbridge', x: 170, y: 138 },
  { name: 'Botetourt', x: 152, y: 148 },
  { name: 'Roanoke County', x: 144, y: 162 },
  { name: 'Franklin', x: 156, y: 182 },
  { name: 'Bedford', x: 162, y: 168 },

  // === SHENANDOAH VALLEY ===
  { name: 'Frederick', x: 248, y: 32 },
  { name: 'Shenandoah', x: 232, y: 56 },
  { name: 'Warren', x: 250, y: 56 },
  { name: 'Clarke', x: 262, y: 42 },
  { name: 'Page', x: 236, y: 78 },
  { name: 'Rockingham', x: 218, y: 82 },
  { name: 'Augusta', x: 198, y: 108 },

  // === PIEDMONT WEST ===
  { name: 'Nelson', x: 220, y: 148 },
  { name: 'Amherst', x: 200, y: 158 },
  { name: 'Appomattox', x: 218, y: 178 },
  { name: 'Campbell', x: 202, y: 188 },
  { name: 'Pittsylvania', x: 182, y: 210 },
  { name: 'Halifax', x: 220, y: 218 },
  { name: 'Charlotte', x: 238, y: 200 },
  { name: 'Lunenburg', x: 262, y: 210 },
  { name: 'Mecklenburg', x: 252, y: 232 },
  { name: 'Brunswick', x: 290, y: 226 },

  // === CENTRAL PIEDMONT ===
  { name: 'Albemarle', x: 238, y: 132 },
  { name: 'Greene', x: 246, y: 108 },
  { name: 'Madison', x: 254, y: 94 },
  { name: 'Rappahannock', x: 266, y: 80 },
  { name: 'Culpeper', x: 282, y: 82 },
  { name: 'Orange', x: 272, y: 104 },
  { name: 'Louisa', x: 286, y: 120 },
  { name: 'Fluvanna', x: 262, y: 140 },
  { name: 'Buckingham', x: 242, y: 162 },
  { name: 'Cumberland', x: 266, y: 162 },
  { name: 'Prince Edward', x: 252, y: 186 },
  { name: 'Nottoway', x: 274, y: 192 },
  { name: 'Amelia', x: 290, y: 176 },
  { name: 'Powhatan', x: 304, y: 160 },
  { name: 'Goochland', x: 298, y: 142 },

  // === NORTHERN VIRGINIA ===
  { name: 'Loudoun', x: 300, y: 38 },
  { name: 'Fauquier', x: 292, y: 64 },
  { name: 'Prince William', x: 318, y: 62 },
  { name: 'Fairfax', x: 330, y: 46 },
  { name: 'Arlington', x: 340, y: 38 },
  { name: 'Stafford', x: 322, y: 82 },
  { name: 'Spotsylvania', x: 310, y: 102 },

  // === NORTHERN NECK / MIDDLE PENINSULA ===
  { name: 'King George', x: 342, y: 92 },
  { name: 'Caroline', x: 330, y: 112 },
  { name: 'Hanover', x: 322, y: 132 },
  { name: 'Henrico', x: 328, y: 148 },
  { name: 'Chesterfield', x: 318, y: 164 },
  { name: 'Dinwiddie', x: 308, y: 190 },
  { name: 'Prince George', x: 332, y: 186 },
  { name: 'Greensville', x: 308, y: 228 },
  { name: 'Sussex', x: 338, y: 210 },
  { name: 'Surry', x: 358, y: 196 },
  { name: 'Southampton', x: 332, y: 236 },

  // === EASTERN / TIDEWATER ===
  { name: 'Westmoreland', x: 370, y: 96 },
  { name: 'Richmond County', x: 382, y: 110 },
  { name: 'Northumberland', x: 398, y: 106 },
  { name: 'Lancaster', x: 406, y: 118 },
  { name: 'Essex', x: 370, y: 122 },
  { name: 'King and Queen', x: 374, y: 138 },
  { name: 'King William', x: 354, y: 138 },
  { name: 'Middlesex', x: 396, y: 138 },
  { name: 'Mathews', x: 414, y: 148 },
  { name: 'Gloucester', x: 398, y: 158 },
  { name: 'New Kent', x: 356, y: 156 },
  { name: 'Charles City', x: 350, y: 168 },
  { name: 'James City', x: 370, y: 172 },
  { name: 'York', x: 388, y: 170 },
  { name: 'Isle of Wight', x: 370, y: 206 },

  // === HAMPTON ROADS / SE ===
  { name: 'Accomack', x: 450, y: 140 },
  { name: 'Northampton', x: 440, y: 178 },
];

/**
 * All 38 Virginia independent cities with approximate (x, y) positions.
 */
const independentCities = [
  // === FAR SOUTHWEST ===
  { name: 'Bristol', x: 58, y: 194 },
  { name: 'Norton', x: 42, y: 160 },

  // === SOUTHWEST / WEST ===
  { name: 'Radford', x: 118, y: 160 },
  { name: 'Galax', x: 104, y: 198 },
  { name: 'Martinsville', x: 142, y: 212 },

  // === WESTERN / VALLEY ===
  { name: 'Covington', x: 152, y: 134 },
  { name: 'Roanoke City', x: 144, y: 158 },
  { name: 'Salem', x: 138, y: 158 },
  { name: 'Lexington', x: 176, y: 140 },
  { name: 'Buena Vista', x: 180, y: 136 },
  { name: 'Lynchburg', x: 196, y: 172 },
  { name: 'Danville', x: 178, y: 222 },

  // === SHENANDOAH VALLEY ===
  { name: 'Winchester', x: 252, y: 28 },
  { name: 'Harrisonburg', x: 222, y: 88 },
  { name: 'Staunton', x: 202, y: 114 },
  { name: 'Waynesboro', x: 212, y: 120 },

  // === CENTRAL ===
  { name: 'Charlottesville', x: 244, y: 136 },

  // === NORTHERN VIRGINIA ===
  { name: 'Alexandria', x: 344, y: 44 },
  { name: 'Fairfax City', x: 326, y: 50 },
  { name: 'Falls Church', x: 336, y: 42 },
  { name: 'Manassas', x: 314, y: 56 },
  { name: 'Manassas Park', x: 318, y: 52 },

  // === FREDERICKSBURG AREA ===
  { name: 'Fredericksburg', x: 318, y: 96 },

  // === RICHMOND AREA ===
  { name: 'Richmond City', x: 326, y: 152 },
  { name: 'Colonial Heights', x: 322, y: 176 },
  { name: 'Hopewell', x: 336, y: 178 },
  { name: 'Petersburg', x: 318, y: 184 },

  // === SOUTHSIDE ===
  { name: 'Emporia', x: 310, y: 234 },
  { name: 'Franklin City', x: 352, y: 228 },

  // === HAMPTON ROADS ===
  { name: 'Hampton', x: 396, y: 186 },
  { name: 'Newport News', x: 386, y: 182 },
  { name: 'Poquoson', x: 404, y: 178 },
  { name: 'Williamsburg', x: 376, y: 174 },
  { name: 'Norfolk', x: 412, y: 210 },
  { name: 'Portsmouth', x: 400, y: 214 },
  { name: 'Chesapeake', x: 408, y: 232 },
  { name: 'Virginia Beach', x: 432, y: 222 },
  { name: 'Suffolk', x: 378, y: 226 },
];

const allLocations = [
  ...counties.map((c) => ({ ...c, type: 'county' })),
  ...independentCities.map((c) => ({ ...c, type: 'city' })),
];

/**
 * Simplified SVG path for the outline of Virginia.
 * Approximate shape within a 600x300 viewBox.
 */
const VIRGINIA_OUTLINE =
  'M 8,196 ' +
  // Far SW tip (Lee County)
  'L 18,202 28,196 38,190 52,196 68,200 80,198 96,210 112,210 ' +
  // Southern border going east
  '128,212 142,218 160,224 178,228 196,222 212,226 228,238 ' +
  '248,240 264,238 282,234 296,232 310,238 326,242 340,242 ' +
  '354,236 368,232 380,230 396,222 410,238 428,232 440,226 ' +
  // Virginia Beach corner
  '448,218 ' +
  // East coast going north
  '436,206 424,196 416,192 ' +
  // Hampton Roads inlet
  '408,196 398,194 392,190 382,188 376,182 370,178 ' +
  // Chesapeake Bay - east side going north
  '380,168 392,162 400,158 416,152 420,142 ' +
  // Eastern Shore
  '432,134 446,128 456,118 452,108 444,102 436,112 428,124 ' +
  '420,132 414,138 ' +
  // Back across the bay
  '410,136 402,132 396,126 400,116 404,104 396,96 388,90 ' +
  // Northern Neck / Rappahannock
  '378,92 368,88 358,84 ' +
  // Potomac River - going northwest
  '348,80 342,72 340,62 336,54 340,44 344,36 340,30 ' +
  // Northern tip (Arlington/Alexandria)
  '336,28 328,32 318,36 308,34 298,30 288,28 278,26 268,28 ' +
  // Northwest along WV border
  '258,24 248,22 240,28 232,38 224,48 218,56 210,60 ' +
  '204,66 198,72 192,78 186,84 180,88 174,92 ' +
  // Alleghany highlands
  '168,86 160,82 154,88 148,96 142,104 136,112 130,118 ' +
  '124,124 118,130 112,138 106,144 100,148 ' +
  // WV border going SW
  '92,150 84,148 78,146 70,148 62,150 54,146 46,150 ' +
  '38,158 30,166 22,174 16,182 10,190 ' +
  'Z';

export default function VirginiaMap() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div className="w-full">
      {/* Map Container */}
      <div className="relative bg-gradient-to-br from-green-50/60 via-white to-emerald-50/40 rounded-2xl border border-green-100/60 p-4 sm:p-6">
        <svg
          viewBox="-10 5 490 260"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          role="img"
          aria-label="Map of Virginia showing service coverage across all counties and independent cities"
        >
          <defs>
            {/* Subtle shadow for the state outline */}
            <filter id="stateShadow" x="-4%" y="-4%" width="108%" height="108%">
              <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#0d4f3d" floodOpacity="0.1" />
            </filter>
            {/* Glow effect for hovered pins */}
            <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Radial gradient for state fill */}
            <radialGradient id="stateFill" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#e8f5e9" />
              <stop offset="100%" stopColor="#dcedc8" />
            </radialGradient>
          </defs>

          {/* Virginia state outline */}
          <path
            d={VIRGINIA_OUTLINE}
            fill="url(#stateFill)"
            stroke="#0d4f3d"
            strokeWidth="1.5"
            strokeLinejoin="round"
            filter="url(#stateShadow)"
            opacity="0.9"
          />

          {/* Location pins */}
          {allLocations.map((loc) => {
            const isHovered = hoveredLocation === loc.name;
            return (
              <g
                key={loc.name}
                onMouseEnter={() => setHoveredLocation(loc.name)}
                onMouseLeave={() => setHoveredLocation(null)}
                style={{ cursor: 'pointer' }}
              >
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={isHovered ? 5 : 3}
                  fill={loc.type === 'city' ? '#0d4f3d' : '#0d4f3d'}
                  opacity={isHovered ? 1 : 0.7}
                  stroke={isHovered ? '#ffffff' : 'none'}
                  strokeWidth={isHovered ? 1.5 : 0}
                  filter={isHovered ? 'url(#pinGlow)' : 'none'}
                  style={{
                    transition: 'r 0.2s ease, opacity 0.2s ease, stroke-width 0.2s ease',
                  }}
                />
                {/* Invisible larger hit area for easier hover */}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={8}
                  fill="transparent"
                />
                {/* Tooltip on hover */}
                {isHovered && (
                  <g>
                    <rect
                      x={loc.x - (loc.name.length * 3.2 + 8)}
                      y={loc.y - 22}
                      width={loc.name.length * 6.4 + 16}
                      height={16}
                      rx="4"
                      fill="#0d4f3d"
                      opacity="0.95"
                    />
                    <text
                      x={loc.x}
                      y={loc.y - 11}
                      textAnchor="middle"
                      fill="white"
                      fontSize="8"
                      fontFamily="Inter, system-ui, sans-serif"
                      fontWeight="500"
                    >
                      {loc.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Legend / Caption */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
          <p className="text-primary font-semibold text-sm sm:text-base font-heading">
            Serving families across all of Virginia
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: '#0d4f3d', opacity: 0.7 }}
              />
              Counties &amp; Cities ({allLocations.length})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
