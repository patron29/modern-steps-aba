import { useState } from 'react';

const counties = [
  { name: 'Accomack', x: 529.0, y: 178.6 },
  { name: 'Albemarle', x: 344.4, y: 161.5 },
  { name: 'Alleghany', x: 261.6, y: 177.0 },
  { name: 'Amelia', x: 380.9, y: 213.1 },
  { name: 'Amherst', x: 306.9, y: 191.3 },
  { name: 'Appomattox', x: 327.1, y: 210.3 },
  { name: 'Arlington', x: 437.1, y: 89.7 },
  { name: 'Augusta', x: 307.8, y: 146.8 },
  { name: 'Bath', x: 269.7, y: 155.0 },
  { name: 'Bedford', x: 283.0, y: 213.3 },
  { name: 'Bland', x: 181.7, y: 229.6 },
  { name: 'Botetourt', x: 264.7, y: 195.6 },
  { name: 'Brunswick', x: 388.4, y: 258.8 },
  { name: 'Buchanan', x: 124.3, y: 218.6 },
  { name: 'Buckingham', x: 344.4, y: 194.8 },
  { name: 'Campbell', x: 310.1, y: 223.7 },
  { name: 'Caroline', x: 420.5, y: 157.8 },
  { name: 'Carroll', x: 206.6, y: 261.4 },
  { name: 'Charles City', x: 437.9, y: 211.5 },
  { name: 'Charlotte', x: 337.2, y: 239.3 },
  { name: 'Chesterfield', x: 410.7, y: 209.8 },
  { name: 'Clarke', x: 379.5, y: 70.9 },
  { name: 'Craig', x: 238.1, y: 202.0 },
  { name: 'Culpeper', x: 382.0, y: 121.3 },
  { name: 'Cumberland', x: 363.5, y: 199.0 },
  { name: 'Dickenson', x: 104.4, y: 229.8 },
  { name: 'Dinwiddie', x: 402.8, y: 234.0 },
  { name: 'Essex', x: 446.2, y: 164.9 },
  { name: 'Fairfax', x: 425.8, y: 93.4 },
  { name: 'Fauquier', x: 391.4, y: 101.8 },
  { name: 'Floyd', x: 229.9, y: 245.4 },
  { name: 'Fluvanna', x: 361.8, y: 172.6 },
  { name: 'Franklin', x: 259.7, y: 240.6 },
  { name: 'Frederick', x: 362.6, y: 62.8 },
  { name: 'Giles', x: 209.5, y: 214.3 },
  { name: 'Gloucester', x: 472.5, y: 207.5 },
  { name: 'Goochland', x: 385.8, y: 181.8 },
  { name: 'Grayson', x: 175.7, y: 267.9 },
  { name: 'Greene', x: 351.1, y: 136.2 },
  { name: 'Greensville', x: 406.9, y: 266.3 },
  { name: 'Halifax', x: 320.6, y: 258.8 },
  { name: 'Hanover', x: 412.3, y: 179.4 },
  { name: 'Henrico', x: 422.3, y: 195.4 },
  { name: 'Henry', x: 261.0, y: 265.2 },
  { name: 'Highland', x: 280.3, y: 130.6 },
  { name: 'Isle of Wight', x: 461.0, y: 247.8 },
  { name: 'James City', x: 456.8, y: 215.3 },
  { name: 'King and Queen', x: 449.7, y: 186.2 },
  { name: 'King George', x: 432.6, y: 138.0 },
  { name: 'King William', x: 437.4, y: 183.6 },
  { name: 'Lancaster', x: 479.3, y: 181.9 },
  { name: 'Lee', x: 56.0, y: 263.4 },
  { name: 'Loudoun', x: 402.0, y: 73.8 },
  { name: 'Louisa', x: 381.8, y: 159.4 },
  { name: 'Lunenburg', x: 364.4, y: 244.1 },
  { name: 'Madison', x: 362.7, y: 126.6 },
  { name: 'Mathews', x: 484.4, y: 205.5 },
  { name: 'Mecklenburg', x: 356.0, y: 265.7 },
  { name: 'Middlesex', x: 469.4, y: 191.8 },
  { name: 'Montgomery', x: 228.4, y: 225.8 },
  { name: 'Nelson', x: 323.5, y: 176.8 },
  { name: 'New Kent', x: 443.6, y: 198.5 },
  { name: 'Northampton', x: 516.8, y: 216.0 },
  { name: 'Northumberland', x: 480.5, y: 171.3 },
  { name: 'Nottoway', x: 375.5, y: 228.6 },
  { name: 'Orange', x: 378.6, y: 140.5 },
  { name: 'Page', x: 348.8, y: 110.2 },
  { name: 'Patrick', x: 233.9, y: 266.6 },
  { name: 'Pittsylvania', x: 291.1, y: 254.2 },
  { name: 'Powhatan', x: 384.4, y: 196.5 },
  { name: 'Prince Edward', x: 352.0, y: 222.3 },
  { name: 'Prince George', x: 430.7, y: 225.0 },
  { name: 'Prince William', x: 412.2, y: 103.8 },
  { name: 'Pulaski', x: 207.8, y: 234.8 },
  { name: 'Rappahannock', x: 369.4, y: 104.8 },
  { name: 'Richmond County', x: 460.4, y: 164.6 },
  { name: 'Roanoke County', x: 256.0, y: 217.4 },
  { name: 'Rockbridge', x: 287.5, y: 174.9 },
  { name: 'Rockingham', x: 323.9, y: 119.1 },
  { name: 'Russell', x: 120.3, y: 245.1 },
  { name: 'Scott', x: 87.8, y: 262.7 },
  { name: 'Shenandoah', x: 342.9, y: 91.4 },
  { name: 'Smyth', x: 155.9, y: 252.4 },
  { name: 'Southampton', x: 435.7, y: 262.3 },
  { name: 'Spotsylvania', x: 401.0, y: 145.0 },
  { name: 'Stafford', x: 416.2, y: 126.6 },
  { name: 'Surry', x: 453.2, y: 230.8 },
  { name: 'Sussex', x: 425.8, y: 246.0 },
  { name: 'Tazewell', x: 156.8, y: 229.4 },
  { name: 'Warren', x: 366.1, y: 87.2 },
  { name: 'Washington', x: 129.6, y: 261.9 },
  { name: 'Westmoreland', x: 456.3, y: 151.8 },
  { name: 'Wise', x: 87.4, y: 241.8 },
  { name: 'Wythe', x: 184.0, y: 246.4 },
  { name: 'York', x: 472.8, y: 222.0 },
];

const independentCities = [
  { name: 'Alexandria', x: 439.5, y: 95.6 },
  { name: 'Bristol', x: 114.5, y: 272.3 },
  { name: 'Buena Vista', x: 293.7, y: 181.4 },
  { name: 'Charlottesville', x: 349.1, y: 157.7 },
  { name: 'Chesapeake', x: 488.3, y: 258.6 },
  { name: 'Colonial Heights', x: 416.6, y: 220.5 },
  { name: 'Covington', x: 253.2, y: 176.6 },
  { name: 'Danville', x: 291.2, y: 273.1 },
  { name: 'Emporia', x: 408.5, y: 265.1 },
  { name: 'Fairfax City', x: 423.1, y: 92.3 },
  { name: 'Falls Church', x: 431.7, y: 89.4 },
  { name: 'Franklin City', x: 447.4, y: 265.8 },
  { name: 'Fredericksburg', x: 413.3, y: 135.8 },
  { name: 'Galax', x: 194.4, y: 267.1 },
  { name: 'Hampton', x: 483.8, y: 237.6 },
  { name: 'Harrisonburg', x: 324.3, y: 124.1 },
  { name: 'Hopewell', x: 424.3, y: 215.7 },
  { name: 'Lexington', x: 288.1, y: 177.3 },
  { name: 'Lynchburg', x: 307.1, y: 206.9 },
  { name: 'Manassas', x: 412.5, y: 99.9 },
  { name: 'Manassas Park', x: 414.7, y: 97.3 },
  { name: 'Martinsville', x: 260.9, y: 264.7 },
  { name: 'Newport News', x: 478.2, y: 234.6 },
  { name: 'Norfolk', x: 489.3, y: 252.3 },
  { name: 'Norton', x: 86.7, y: 245.4 },
  { name: 'Petersburg', x: 417.1, y: 221.8 },
  { name: 'Poquoson', x: 481.6, y: 230.2 },
  { name: 'Portsmouth', x: 483.3, y: 253.1 },
  { name: 'Radford', x: 216.4, y: 229.4 },
  { name: 'Richmond City', x: 414.9, y: 196.7 },
  { name: 'Roanoke City', x: 256.6, y: 218.3 },
  { name: 'Salem', x: 249.4, y: 216.6 },
  { name: 'Staunton', x: 311.5, y: 148.0 },
  { name: 'Suffolk', x: 468.8, y: 261.8 },
  { name: 'Virginia Beach', x: 507.1, y: 251.8 },
  { name: 'Waynesboro', x: 323.1, y: 154.6 },
  { name: 'Williamsburg', x: 461.0, y: 218.3 },
  { name: 'Winchester', x: 369.0, y: 65.1 },
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
