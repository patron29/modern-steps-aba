import { useState } from 'react';

// 95 Virginia counties with coordinates derived from geographic centroids
const counties = [
  { name: 'Accomack', x: 543.9, y: 179.2 },
  { name: 'Albemarle', x: 348.0, y: 156.2 },
  { name: 'Alleghany', x: 260.8, y: 177.2 },
  { name: 'Amelia', x: 386.8, y: 217.3 },
  { name: 'Amherst', x: 308.5, y: 193.5 },
  { name: 'Appomattox', x: 330.8, y: 214.2 },
  { name: 'Arlington', x: 445.5, y: 80.2 },
  { name: 'Augusta', x: 309.4, y: 143.7 },
  { name: 'Bath', x: 269.1, y: 152.1 },
  { name: 'Bedford', x: 283.2, y: 219.3 },
  { name: 'Bland', x: 175.8, y: 235.6 },
  { name: 'Botetourt', x: 263.8, y: 198.2 },
  { name: 'Brunswick', x: 394.9, y: 268.1 },
  { name: 'Buchanan', x: 120.7, y: 223.4 },
  { name: 'Buckingham', x: 349.5, y: 197.6 },
  { name: 'Campbell', x: 311.8, y: 229.0 },
  { name: 'Caroline', x: 429.2, y: 155.9 },
  { name: 'Carroll', x: 202.0, y: 271.1 },
  { name: 'Charles City', x: 448.3, y: 215.6 },
  { name: 'Charlotte', x: 340.9, y: 246.2 },
  { name: 'Chesterfield', x: 413.0, y: 213.6 },
  { name: 'Clarke', x: 385.5, y: 59.4 },
  { name: 'Craig', x: 235.7, y: 205.1 },
  { name: 'Culpeper', x: 388.1, y: 115.1 },
  { name: 'Cumberland', x: 368.6, y: 202.6 },
  { name: 'Dickenson', x: 93.8, y: 235.9 },
  { name: 'Dinwiddie', x: 410.1, y: 240.5 },
  { name: 'Essex', x: 456.0, y: 163.7 },
  { name: 'Fairfax', x: 433.5, y: 83.1 },
  { name: 'Fauquier', x: 398.1, y: 93.6 },
  { name: 'Floyd', x: 229.7, y: 253.5 },
  { name: 'Fluvanna', x: 366.7, y: 172.4 },
  { name: 'Franklin', x: 259.4, y: 248.0 },
  { name: 'Frederick', x: 367.4, y: 46.1 },
  { name: 'Giles', x: 204.4, y: 218.6 },
  { name: 'Gloucester', x: 484.1, y: 210.7 },
  { name: 'Goochland', x: 391.8, y: 185.0 },
  { name: 'Grayson', x: 169.8, y: 272.0 },
  { name: 'Greene', x: 354.3, y: 131.7 },
  { name: 'Greensville', x: 415.0, y: 272.0 },
  { name: 'Halifax', x: 322.0, y: 268.0 },
  { name: 'Hanover', x: 419.9, y: 179.1 },
  { name: 'Henrico', x: 430.3, y: 197.7 },
  { name: 'Henry', x: 259.8, y: 271.0 },
  { name: 'Highland', x: 280.4, y: 125.9 },
  { name: 'Isle of Wight', x: 471.8, y: 256.0 },
  { name: 'James City', x: 467.6, y: 219.4 },
  { name: 'King and Queen', x: 459.9, y: 183.7 },
  { name: 'King George', x: 441.6, y: 133.3 },
  { name: 'King William', x: 446.5, y: 184.6 },
  { name: 'Lancaster', x: 490.1, y: 181.6 },
  { name: 'Lee', x: 42.0, y: 269.0 },
  { name: 'Loudoun', x: 409.4, y: 62.6 },
  { name: 'Louisa', x: 387.4, y: 157.5 },
  { name: 'Lunenburg', x: 369.0, y: 251.9 },
  { name: 'Madison', x: 367.7, y: 122.0 },
  { name: 'Mathews', x: 500.9, y: 208.2 },
  { name: 'Mecklenburg', x: 360.6, y: 271.0 },
  { name: 'Middlesex', x: 481.2, y: 193.1 },
  { name: 'Montgomery', x: 225.2, y: 231.7 },
  { name: 'Nelson', x: 326.1, y: 176.9 },
  { name: 'New Kent', x: 453.1, y: 201.5 },
  { name: 'Northampton', x: 524.1, y: 220.4 },
  { name: 'Northumberland', x: 493.9, y: 170.8 },
  { name: 'Nottoway', x: 381.2, y: 235.2 },
  { name: 'Orange', x: 384.3, y: 136.6 },
  { name: 'Page', x: 351.8, y: 102.7 },
  { name: 'Patrick', x: 232.1, y: 272.0 },
  { name: 'Pittsylvania', x: 291.6, y: 263.1 },
  { name: 'Powhatan', x: 390.7, y: 198.4 },
  { name: 'Prince Edward', x: 355.7, y: 227.1 },
  { name: 'Prince George', x: 437.4, y: 230.7 },
  { name: 'Prince William', x: 420.0, y: 94.1 },
  { name: 'Pulaski', x: 203.4, y: 241.7 },
  { name: 'Rappahannock', x: 374.7, y: 97.4 },
  { name: 'Richmond County', x: 470.9, y: 163.4 },
  { name: 'Roanoke County', x: 247.8, y: 222.3 },
  { name: 'Rockbridge', x: 288.1, y: 175.1 },
  { name: 'Rockingham', x: 318.1, y: 113.0 },
  { name: 'Russell', x: 126.7, y: 252.9 },
  { name: 'Scott', x: 77.1, y: 268.0 },
  { name: 'Shenandoah', x: 343.3, y: 82.5 },
  { name: 'Smyth', x: 148.3, y: 261.1 },
  { name: 'Southampton', x: 445.1, y: 272.0 },
  { name: 'Spotsylvania', x: 408.4, y: 141.8 },
  { name: 'Stafford', x: 423.7, y: 120.6 },
  { name: 'Surry', x: 462.0, y: 236.6 },
  { name: 'Sussex', x: 434.1, y: 253.7 },
  { name: 'Tazewell', x: 146.6, y: 236.1 },
  { name: 'Warren', x: 371.4, y: 77.7 },
  { name: 'Washington', x: 120.2, y: 268.0 },
  { name: 'Westmoreland', x: 466.5, y: 147.0 },
  { name: 'Wise', x: 75.4, y: 249.4 },
  { name: 'Wythe', x: 178.6, y: 254.6 },
  { name: 'York', x: 483.1, y: 226.9 },
];

// 38 Virginia independent cities
const independentCities = [
  { name: 'Alexandria', x: 449.1, y: 86.8 },
  { name: 'Bristol', x: 114.6, y: 272.0 },
  { name: 'Buena Vista', x: 294.5, y: 181.9 },
  { name: 'Charlottesville', x: 353.3, y: 155.7 },
  { name: 'Chesapeake', x: 500.0, y: 267.8 },
  { name: 'Colonial Heights', x: 424.7, y: 225.5 },
  { name: 'Covington', x: 251.6, y: 176.7 },
  { name: 'Danville', x: 291.8, y: 273.0 },
  { name: 'Emporia', x: 415.9, y: 273.0 },
  { name: 'Fairfax City', x: 431.7, y: 83.1 },
  { name: 'Falls Church', x: 440.8, y: 79.8 },
  { name: 'Franklin City', x: 457.4, y: 273.0 },
  { name: 'Fredericksburg', x: 421.3, y: 131.4 },
  { name: 'Galax', x: 189.3, y: 272.0 },
  { name: 'Hampton', x: 496.1, y: 244.5 },
  { name: 'Harrisonburg', x: 327.0, y: 118.3 },
  { name: 'Hopewell', x: 433.0, y: 220.2 },
  { name: 'Lexington', x: 288.6, y: 177.5 },
  { name: 'Lynchburg', x: 308.7, y: 210.4 },
  { name: 'Manassas', x: 420.4, y: 91.6 },
  { name: 'Manassas Park', x: 420.8, y: 88.6 },
  { name: 'Martinsville', x: 259.8, y: 270.0 },
  { name: 'Newport News', x: 487.5, y: 239.5 },
  { name: 'Norfolk', x: 500.1, y: 260.5 },
  { name: 'Norton', x: 75.1, y: 253.1 },
  { name: 'Petersburg', x: 425.3, y: 226.9 },
  { name: 'Poquoson', x: 496.0, y: 236.3 },
  { name: 'Portsmouth', x: 499.2, y: 261.8 },
  { name: 'Radford', x: 212.6, y: 235.5 },
  { name: 'Richmond City', x: 423.0, y: 199.1 },
  { name: 'Roanoke City', x: 255.1, y: 223.1 },
  { name: 'Salem', x: 247.5, y: 221.1 },
  { name: 'Staunton', x: 313.4, y: 145.0 },
  { name: 'Suffolk', x: 480.1, y: 271.4 },
  { name: 'Virginia Beach', x: 510.0, y: 260.3 },
  { name: 'Waynesboro', x: 325.6, y: 152.2 },
  { name: 'Williamsburg', x: 471.8, y: 223.1 },
  { name: 'Winchester', x: 374.3, y: 52.9 },
];

const allLocations = [
  ...counties.map((c) => ({ ...c, type: 'county' })),
  ...independentCities.map((c) => ({ ...c, type: 'city' })),
];

const VIRGINIA_OUTLINE =
  'M505.8,172.1 L507.4,173.2 L505.8,175.0 L505.8,172.1 Z ' +
  'M526.7,164.0 L528.0,164.2 L529.4,160.4 L553.7,157.8 L553.7,157.8 L550.1,163.3 L546.7,170.0 L544.8,171.9 L543.7,170.4 L540.3,170.9 L536.0,176.3 L533.3,181.1 L530.8,189.7 L531.0,194.1 L525.8,202.9 L527.4,203.9 L523.3,210.1 L520.6,215.6 L518.5,216.3 L518.7,220.2 L516.2,226.1 L512.2,230.5 L508.5,230.4 L509.4,232.8 L507.4,233.2 L507.2,227.4 L504.9,223.6 L504.0,219.4 L504.5,214.6 L506.5,210.5 L507.2,204.4 L509.4,197.2 L510.4,192.0 L514.0,186.6 L518.1,179.0 L517.2,176.7 L521.9,175.5 L525.3,171.0 L525.6,169.1 L521.0,167.7 L526.7,164.0 Z ' +
  'M506.0,163.7 L503.5,166.8 L502.9,163.7 L502.9,163.7 L506.0,163.7 Z ' +
  'M128.5,197.0 L131.0,199.0 L126.9,201.3 L127.1,203.6 L130.5,205.1 L131.0,211.3 L134.2,213.4 L135.8,217.0 L139.8,217.2 L142.6,218.9 L142.6,220.6 L146.9,223.9 L154.6,223.4 L157.5,221.4 L158.0,219.3 L163.2,218.2 L165.0,214.4 L166.8,213.0 L169.3,216.0 L175.5,221.2 L182.5,217.7 L190.9,215.8 L194.7,215.5 L199.1,212.3 L197.0,209.3 L198.6,205.8 L203.4,208.4 L204.3,210.2 L213.6,205.3 L217.9,202.1 L220.6,201.5 L222.9,206.1 L234.0,199.3 L234.9,197.4 L232.0,197.1 L232.2,194.9 L236.3,192.5 L239.0,189.8 L235.1,187.5 L234.2,184.6 L237.0,182.0 L236.5,179.5 L241.3,171.8 L248.1,164.6 L252.2,161.1 L254.4,157.6 L255.8,153.5 L257.6,151.4 L256.2,149.5 L257.8,145.6 L263.5,140.0 L266.2,138.6 L264.9,135.6 L269.8,129.6 L272.6,125.5 L271.9,121.0 L275.1,112.7 L282.1,115.9 L286.0,123.4 L296.4,127.0 L302.7,120.6 L306.2,111.1 L308.4,107.2 L310.2,107.3 L310.5,102.4 L314.3,96.7 L316.4,92.0 L324.3,98.9 L328.8,90.0 L334.1,85.1 L334.1,87.6 L336.3,85.9 L339.7,81.4 L341.3,82.9 L344.5,78.5 L343.1,77.4 L348.6,71.4 L350.2,70.9 L353.8,66.6 L351.5,64.2 L354.0,60.5 L352.7,59.4 L357.9,52.1 L356.3,51.4 L357.7,48.9 L356.5,47.0 L357.4,42.7 L372.4,55.0 L390.1,69.4 L394.9,57.4 L396.9,54.3 L396.9,54.3 L399.9,54.1 L403.5,55.8 L406.9,55.7 L408.3,58.8 L413.5,61.8 L411.9,65.1 L409.8,66.4 L409.6,70.3 L411.9,71.2 L413.2,73.9 L421.0,75.0 L426.9,77.8 L426.6,81.1 L428.4,82.3 L433.0,82.7 L435.0,85.3 L435.0,85.3 L440.0,90.3 L440.0,96.7 L440.0,96.7 L439.8,102.5 L435.7,104.2 L434.1,106.1 L434.3,109.2 L434.3,109.2 L429.8,110.6 L426.9,109.2 L426.9,112.8 L422.8,120.5 L421.9,124.1 L422.3,129.3 L425.7,133.4 L432.3,132.3 L433.7,130.6 L437.1,130.6 L439.8,127.9 L441.8,130.0 L440.5,135.1 L444.8,139.5 L444.8,142.9 L452.7,146.9 L458.4,147.0 L460.0,149.0 L461.3,147.5 L466.8,148.1 L467.7,151.2 L471.3,153.8 L473.1,157.9 L476.1,158.9 L479.5,162.6 L484.0,164.2 L490.8,168.9 L489.7,173.4 L486.3,175.0 L485.8,182.4 L486.8,184.4 L484.3,187.5 L487.2,189.1 L482.9,191.2 L475.9,186.8 L473.4,188.6 L471.8,186.9 L471.8,184.1 L468.8,178.5 L464.5,176.3 L462.7,173.9 L460.0,173.1 L455.2,166.0 L452.7,165.3 L451.8,162.2 L448.9,160.1 L448.4,162.2 L454.8,168.3 L459.3,176.1 L462.7,177.8 L462.9,179.5 L466.6,180.4 L468.8,187.0 L471.3,190.7 L478.1,191.0 L479.7,193.4 L486.8,195.1 L483.6,197.1 L483.4,199.6 L486.3,200.2 L487.2,198.7 L489.0,201.5 L490.2,209.0 L488.3,215.2 L484.3,210.9 L479.5,207.8 L477.5,210.7 L479.9,213.4 L481.5,217.1 L483.6,218.1 L478.6,219.8 L474.5,220.0 L475.9,222.7 L480.9,222.0 L480.4,227.2 L483.6,226.4 L484.5,228.5 L487.2,229.9 L488.6,233.2 L486.5,239.9 L485.6,238.9 L482.0,240.1 L478.6,242.4 L476.3,237.8 L469.7,233.6 L466.6,230.5 L467.5,227.2 L464.5,222.3 L459.5,222.9 L457.7,224.6 L455.4,221.5 L451.4,220.7 L450.5,219.1 L445.7,221.5 L448.2,223.8 L450.9,223.3 L455.0,224.2 L458.4,227.9 L460.4,228.1 L462.2,224.1 L464.1,232.3 L464.3,236.9 L469.3,238.2 L475.0,243.8 L475.2,248.3 L481.3,248.0 L483.4,246.1 L483.6,248.4 L485.6,249.2 L484.9,243.3 L488.8,242.8 L491.7,244.8 L499.7,247.3 L503.5,245.5 L506.0,246.2 L507.9,255.0 L510.6,264.6 L512.6,269.5 L514.2,276.0 L514.2,276.0 L482.0,276.0 L454.8,276.0 L447.7,275.8 L447.7,276.5 L423.7,276.5 L363.8,276.5 L347.0,276.7 L283.7,276.7 L245.1,276.6 L234.2,276.5 L208.4,275.0 L200.0,275.3 L178.4,274.3 L165.9,274.0 L146.9,272.9 L146.9,272.9 L148.7,271.0 L131.2,270.7 L130.5,272.5 L96.3,272.3 L82.4,272.5 L46.8,272.5 L45.7,272.1 L28.0,272.2 L20.5,271.9 L20.5,271.9 L22.3,270.1 L29.8,266.7 L34.6,266.8 L43.4,263.3 L50.9,260.9 L54.5,260.6 L55.0,257.1 L58.6,251.6 L65.2,251.4 L70.9,248.9 L72.2,245.8 L71.5,241.7 L74.3,239.5 L77.0,239.3 L80.6,236.7 L80.6,230.8 L86.3,227.7 L90.6,224.3 L95.6,221.5 L104.0,218.8 L128.5,197.0 Z';

export default function VirginiaMap() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-br from-green-50/60 via-white to-emerald-50/40 rounded-2xl border border-green-100/60 p-4 sm:p-6">
        <svg
          viewBox="5 28 565 260"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          role="img"
          aria-label="Map of Virginia showing service coverage across all counties and independent cities"
        >
          <defs>
            <filter id="stateShadow" x="-4%" y="-4%" width="108%" height="108%">
              <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#0d4f3d" floodOpacity="0.1" />
            </filter>
            <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
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
                  fill="#0d4f3d"
                  opacity={isHovered ? 1 : 0.7}
                  stroke={isHovered ? '#ffffff' : 'none'}
                  strokeWidth={isHovered ? 1.5 : 0}
                  filter={isHovered ? 'url(#pinGlow)' : 'none'}
                  style={{
                    transition: 'r 0.2s ease, opacity 0.2s ease, stroke-width 0.2s ease',
                  }}
                />
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={8}
                  fill="transparent"
                />
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

        {/* Legend */}
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
