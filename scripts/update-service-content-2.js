/**
 * Williams Towing — Supabase Service Content Updater (Batch 2)
 * Run: node scripts/update-service-content-2.js
 *
 * Updates the remaining 12 service pages with 600–800 word SEO content.
 */

require("dotenv").config({ path: ".env.local" });
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const services = [
  // ─── ROADSIDE SUB-SERVICES ───────────────────────────────────────────────
  {
    slug: "jump-start-boost-service",
    title: "Jump Start & Battery Boost Toronto — 24/7 Battery Boost Near Me GTA",
    metatitle: "Jump Start & Battery Boost Toronto | 24/7 Near Me — Williams Towing",
    metadescription: "Dead battery near you in Toronto? Williams Towing provides 24/7 jump start and battery boost service across Toronto & the GTA. Fast response, all vehicle types. Call +1-416-299-8383.",
    introduction: `<p>A dead battery is one of the most common roadside emergencies in Ontario — and one of the most frustrating. Whether your battery died overnight in freezing temperatures, drained from leaving your lights on, or simply reached the end of its service life, Williams Towing provides fast, professional jump start and battery boost service across Toronto and the GTA, 24 hours a day, 7 days a week.</p>
<p>Our operators carry commercial-grade surge-protected battery boosters compatible with all vehicle types — gas, diesel, hybrid, and modern luxury vehicles with sensitive electronics. We reach most GTA locations within 20–40 minutes, assess your battery's condition on-site, and if the boost doesn't hold, we can arrange immediate towing to your nearest auto parts store or mechanic.</p>
<p>Don't risk damaging your vehicle's electronics with an improper boost from a passerby. Call Williams Towing at +1-416-299-8383 for a professional jump start near you — available in Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, and Oshawa.</p>`,
    description: `<h3>When Do You Need a Jump Start or Battery Boost?</h3>
<ul>
<li><strong>Cold weather battery failure</strong> — temperatures below -15°C can cut a battery's cranking power by half</li>
<li><strong>Lights or accessories left on</strong> — interior lights, headlights, or phone chargers drain batteries overnight</li>
<li><strong>Old or failing battery</strong> — most car batteries last 3–5 years and decline rapidly after that</li>
<li><strong>Infrequent driving</strong> — vehicles parked for extended periods lose their charge gradually</li>
<li><strong>Faulty alternator</strong> — if the alternator isn't charging the battery while driving, it will drain</li>
</ul>
<h3>Battery Boost Service — What Our Operators Do</h3>
<p>Unlike a passerby with jumper cables, Williams Towing operators follow a professional battery boost protocol:</p>
<ul>
<li>Check for visible battery damage (cracked case, corrosion, leaking acid) before connecting</li>
<li>Use surge-protected commercial boosters that won't spike voltage to your vehicle's control modules</li>
<li>Test battery voltage before and after the boost with a digital multimeter</li>
<li>Advise you on whether the battery is likely to hold charge or needs replacement</li>
<li>If the battery fails the load test, arrange immediate towing to an auto parts store or mechanic</li>
</ul>
<h3>Battery Boost Coverage Across the GTA</h3>
<p>Williams Towing provides jump start and battery boost service across all nine GTA cities. Our GPS-dispatched operators are staged across the GTA to minimize response times. We serve all major highways, parking lots, driveways, underground parkades, and commercial properties — wherever your battery has left you stranded.</p>
<p>In winter, we prioritize cold-weather battery boost calls and dispatch experienced operators with heavy-duty commercial boosters capable of starting diesel engines and large SUVs.</p>`,
    benefit: `<p>Williams Towing's battery boost service is fast, safe, and protects your vehicle's sensitive electronics. Our surge-protected boosters, professional protocol, and on-site battery assessment give you accurate information about your battery's health — not just a boost and a wave goodbye. 24/7 availability across all GTA cities, upfront pricing, and response times of 20–40 minutes make Williams Towing the jump start service Toronto and GTA drivers call first when their battery dies.</p>`,
  },
  {
    slug: "gas-delivery",
    title: "Gas Delivery Toronto — 24/7 Emergency Fuel Delivery Near Me GTA",
    metatitle: "Gas Delivery Toronto | Emergency Fuel Delivery Near Me 24/7 — Williams Towing",
    metadescription: "Run out of gas near you in Toronto? Williams Towing provides 24/7 emergency gas delivery across Toronto & the GTA. Fast fuel delivery to your location. Call +1-416-299-8383.",
    introduction: `<p>Running out of gas on the road is an embarrassing situation that can happen to anyone — and it becomes genuinely dangerous when it happens on a busy Toronto highway or in an unfamiliar area at night. Williams Towing provides fast, professional emergency gas delivery across Toronto and the GTA, 24 hours a day, 7 days a week.</p>
<p>Our roadside operators carry enough gasoline or diesel to get your vehicle to the nearest gas station. We reach most GTA locations within 20–40 minutes, deliver the fuel directly to your vehicle, and make sure you're able to start and drive safely before we leave. No membership required, no waiting for a tow — just fast fuel delivery to get you moving again.</p>
<p>If you've run out of gas in Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, or Oshawa, call Williams Towing at +1-416-299-8383. We'll bring the fuel to you.</p>`,
    description: `<h3>Emergency Gas Delivery — What We Deliver</h3>
<ul>
<li><strong>Regular gasoline (87 octane)</strong> — suitable for most passenger vehicles</li>
<li><strong>Diesel fuel</strong> — for diesel-powered cars, trucks, and commercial vehicles</li>
<li><strong>Enough fuel to reach the nearest station</strong> — typically 5–10 litres delivered</li>
</ul>
<p><em>Note: We do not deliver premium gasoline or DEF (diesel exhaust fluid). If your vehicle requires premium fuel, our operators will deliver regular gasoline sufficient to reach the nearest station. For misfuelling situations (wrong fuel type), call us for towing — the tank must be drained professionally.</em></p>
<h3>Gas Delivery Situations We Handle</h3>
<ul>
<li>Ran out of gas on Highway 401, 407, 427, or the Gardiner Expressway</li>
<li>Out of fuel in a parking lot, driveway, or underground garage</li>
<li>Vehicle stalled on a residential street due to empty tank</li>
<li>Diesel vehicle ran out of fuel and requires bleed-down procedure before starting</li>
<li>Generator or equipment at a job site needs an emergency fuel top-up</li>
</ul>
<h3>Gas Delivery Coverage Across the GTA</h3>
<p>Williams Towing delivers emergency fuel across all nine GTA cities — Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, and Oshawa. We respond to fuel emergencies on all major GTA highways, local streets, commercial properties, and residential areas.</p>
<p>If your vehicle has run completely dry and won't restart after a fuel delivery (possible with diesel engines or vehicles with clogged fuel lines), we dispatch a tow truck at the same time so there's no secondary wait. One call handles everything.</p>`,
    benefit: `<p>Williams Towing's emergency gas delivery service is the fastest way to get fuel to your vehicle without waiting for a tow or arranging a ride to the nearest gas station. Our 24/7 availability, 20–40 minute response times, and coverage across all nine GTA cities mean you're back on the road quickly and safely. Transparent pricing confirmed before dispatch — no surprise charges for after-hours or highway delivery. Call Williams Towing at +1-416-299-8383 for gas delivery near you.</p>`,
  },
  {
    slug: "vehicle-lockout-service",
    title: "Vehicle Lockout Service Toronto — 24/7 Car Lockout Near Me GTA",
    metatitle: "Vehicle Lockout Service Toronto | Car Lockout Near Me 24/7 — Williams Towing",
    metadescription: "Locked out of your car near you in Toronto? Williams Towing provides 24/7 damage-free vehicle lockout service across Toronto & the GTA. Fast response, all vehicles. Call +1-416-299-8383.",
    introduction: `<p>Locking your keys inside your car is one of the most frustrating moments in any driver's day. Whether your keys are on the seat in a shopping centre parking lot, locked in the trunk after loading groceries, or left in the ignition of a running vehicle, Williams Towing provides fast, professional, damage-free vehicle lockout service across Toronto and the GTA — 24 hours a day, 7 days a week.</p>
<p>Our operators use professional lockout tools specifically designed for each vehicle type, allowing them to gain access without scratching paint, bending door frames, or triggering alarms. We service all makes and models — domestic, European, Japanese, luxury, and commercial vehicles — including newer vehicles with advanced electronic locking systems.</p>
<p>For car lockout service near you in Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, or Oshawa, call Williams Towing at +1-416-299-8383. Average response time: 20–35 minutes.</p>`,
    description: `<h3>Vehicle Lockout Situations We Handle</h3>
<ul>
<li>Keys locked inside the car (visible on seat or floor)</li>
<li>Keys locked in the trunk</li>
<li>Keys left in the ignition of a running vehicle (lockout with engine on)</li>
<li>Lost or stolen keys (vehicle secured, needs unlocking)</li>
<li>Electronic fob failure preventing keyless entry</li>
<li>Frozen door lock (winter lockout)</li>
<li>Child or pet locked inside vehicle — <strong>priority dispatch available</strong></li>
</ul>
<h3>Professional Lockout Tools — No Damage to Your Vehicle</h3>
<p>Williams Towing operators use industry-standard professional lockout equipment including slim jims, air wedges, long-reach tools, and electronic lockout kits tailored to each vehicle's door and locking mechanism. We do not use coat hangers, screwdrivers, or improvised tools that risk scratching paint, bending trim, or damaging weather seals.</p>
<p>For newer vehicles with electronic door locks and no physical key access point, our operators use approved electronic access methods. If a vehicle's locking system requires dealer programming to bypass, we inform you before attempting and arrange towing to the dealership if needed.</p>
<h3>Lockout Service Coverage Across the GTA</h3>
<p>We provide car lockout service across all nine GTA cities and all vehicle types. Whether you're locked out in a downtown Toronto parkade, a Markham shopping centre lot, a Scarborough residential driveway, or a Durham Region highway rest stop, Williams Towing dispatches the nearest available operator to your exact location. GPS tracking ensures accurate ETAs every time.</p>`,
    benefit: `<p>Williams Towing's vehicle lockout service is fast, damage-free, and available 24/7 across all nine GTA cities. Our professional lockout tools and trained operators provide entry without harming your vehicle's locks, door frames, or paint. For child or pet lockout emergencies, we dispatch immediately with priority response. Transparent upfront pricing and response times of 20–35 minutes make Williams Towing the lockout service Toronto and GTA drivers call in a pinch. Call +1-416-299-8383 any time — we'll get you back in your vehicle fast.</p>`,
  },
  {
    slug: "light-duty-vehicles-tire-change",
    title: "Tire Change Service Toronto — 24/7 Flat Tire Roadside Service Near Me GTA",
    metatitle: "Tire Change Service Toronto | Flat Tire Roadside Service 24/7 — Williams Towing",
    metadescription: "Flat tire near you in Toronto? Williams Towing provides 24/7 roadside tire change service across Toronto & the GTA for all light duty vehicles. Fast response. Call +1-416-299-8383.",
    introduction: `<p>A flat tire can strand you in the worst possible places — on a busy Toronto highway, in an underground parking garage, or in a dark parking lot late at night. Williams Towing provides professional roadside tire change service for light-duty vehicles across Toronto and the GTA, 24 hours a day, 7 days a week.</p>
<p>Our roadside operators carry all the tools needed to safely mount your spare tire on-site — floor jack, lug wrench, torque wrench, and wheel chocks. We work on all light-duty passenger vehicles: cars, SUVs, crossovers, minivans, and light pickup trucks. If you don't have a usable spare, we can arrange immediate towing to the nearest tire shop or your preferred mechanic.</p>
<p>For a flat tire near you in Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, or Oshawa, call Williams Towing at +1-416-299-8383. We'll have your spare mounted and send you on your way as fast as possible.</p>`,
    description: `<h3>Roadside Tire Change — What We Do</h3>
<ul>
<li>Safely position and chock your vehicle on a stable surface</li>
<li>Remove the flat tire using a professional impact wrench</li>
<li>Inspect your spare tire's condition and pressure before mounting</li>
<li>Mount your spare and torque lug nuts to manufacturer specification</li>
<li>Advise you on whether the spare is a full-size or temporary (donut) spare and safe driving distance</li>
<li>Load the flat tire into your vehicle</li>
</ul>
<h3>What If I Don't Have a Spare?</h3>
<p>Many newer vehicles — particularly EVs and European models — come without a spare tire. If your vehicle has a flat tire and no spare, Williams Towing will arrange towing to the nearest tire shop or your preferred location. Many operators also carry a portable tire inflator and sealant (such as Fix-A-Flat) for temporary inflation of slow leaks, allowing you to reach a tire shop safely without a full tow.</p>
<h3>Tire Change Safety — Highway Flat Tires</h3>
<p>If you experience a blowout or flat tire on Highway 401, the Gardiner Expressway, or any other high-speed GTA highway, do not attempt to change the tire on the highway shoulder. Roadside tire changes on live highway shoulders are extremely dangerous. Pull to the nearest exit, a rest area, or an off-ramp before stopping. Call Williams Towing — our operators are equipped with safety lighting and reflective gear to protect themselves and your vehicle when working roadside.</p>
<h3>Tire Change Coverage</h3>
<p>Roadside tire change service is available across all nine GTA cities, all major highways, local streets, parking lots, and residential driveways — 24 hours a day including weekends and statutory holidays.</p>`,
    benefit: `<p>Williams Towing's roadside tire change service gets your spare mounted quickly, safely, and correctly — with proper torquing to manufacturer specs, not just hand-tight. Our 24/7 availability, 20–40 minute response times, and coverage across all GTA cities mean a flat tire doesn't have to ruin your day. If no spare is available, towing is arranged immediately with one call. Transparent pricing, no hidden fees, and professional service every time — call Williams Towing at +1-416-299-8383 for roadside tire change near you.</p>`,
  },

  // ─── HEAVY DUTY SERVICES ────────────────────────────────────────────────
  {
    slug: "heavy-duty-breakdown-services",
    title: "Heavy Duty Breakdown Services Toronto — 24/7 Commercial Vehicle Breakdown GTA",
    metatitle: "Heavy Duty Breakdown Services Toronto | Commercial Vehicle Breakdown 24/7 — Williams Towing",
    metadescription: "Heavy duty breakdown near you in Toronto? Williams Towing provides 24/7 heavy duty breakdown services for semi trucks, buses & commercial vehicles across the GTA. Call +1-416-299-8383.",
    introduction: `<p>A heavy commercial vehicle breakdown is not just an inconvenience — it's a serious operational disruption that costs carriers, owner-operators, and fleet managers real money with every passing minute. Williams Towing provides 24/7 heavy duty breakdown services across Toronto and the GTA, deploying Wreckmaster-certified operators with specialized equipment to get your commercial vehicle recovered, repaired roadside where possible, or safely transported to your fleet yard or repair facility.</p>
<p>Our heavy-duty breakdown response covers semi-trucks, tractor-trailers, commercial trucks, buses, motor coaches, cube vans, tankers, and specialty commercial vehicles of all sizes. We operate heavy-duty wreckers, Class 8 rotators, and service trucks capable of on-site minor repairs including tire changes, air line repairs, and battery boosts for commercial vehicles.</p>
<p>For heavy duty breakdown response near you across the GTA and Ontario Highway 401 corridor, call Williams Towing at +1-416-299-8383 — priority commercial dispatch available 24/7.</p>`,
    description: `<h3>Heavy Duty Breakdown Response — What We Provide</h3>
<ul>
<li><strong>On-site heavy truck tire service</strong> — commercial tire changes and inflation for drive, steer, and trailer tires</li>
<li><strong>Commercial battery boost</strong> — 24-volt jump starts for semi-trucks and diesel commercial vehicles</li>
<li><strong>Air line and glad-hand repairs</strong> — restoring air brake connections for broken-down trailers</li>
<li><strong>Fuel delivery for diesel commercial vehicles</strong> — emergency diesel delivery to stranded rigs</li>
<li><strong>Heavy recovery and towing</strong> — when the vehicle cannot be repaired roadside, we tow to your preferred facility</li>
<li><strong>Cargo management assistance</strong> — coordinating cargo transfer when a trailer must be abandoned</li>
</ul>
<h3>Highway Heavy Duty Breakdown Response</h3>
<p>Commercial vehicle breakdowns on Highway 401 — particularly between Oshawa and Toronto — create significant traffic safety hazards. Williams Towing's heavy-duty breakdown team coordinates with OPP highway incident management, positions proper safety lighting and cones, and works efficiently to clear the scene as quickly as possible. Our operators are trained in MTO highway towing protocols and understand the urgency of minimizing lane closures.</p>
<h3>Commercial Fleet Accounts</h3>
<p>For carriers and fleet operators requiring regular heavy-duty breakdown coverage, Williams Towing offers priority commercial accounts with direct dispatch lines, consolidated invoicing, and 24/7 dedicated support. When one of your drivers calls in a breakdown, your dispatcher can call us directly with fleet account priority — we pick up faster and dispatch faster for account clients.</p>
<p>Coverage spans all GTA cities and all major Ontario highway corridors including Highway 401, 400, 407, 115, and the QEW.</p>`,
    benefit: `<p>Williams Towing's heavy duty breakdown service minimizes commercial vehicle downtime with fast, professional response from Wreckmaster-certified operators who understand the urgency of commercial fleet operations. We bring the right equipment the first time — not a light-duty wrecker that can't handle the load. 24/7 availability, Ontario highway authorization, and commercial fleet accounts with priority dispatch make Williams Towing the heavy duty breakdown company that GTA carriers and fleet operators trust. Call +1-416-299-8383 for immediate heavy duty breakdown response.</p>`,
  },
  {
    slug: "heavy-duty-winching-recovery-services",
    title: "Heavy Duty Winching & Recovery Toronto — 24/7 Heavy Recovery GTA",
    metatitle: "Heavy Duty Winching & Recovery Toronto | 24/7 Heavy Recovery Near Me — Williams Towing",
    metadescription: "Heavy duty winching and recovery near you in Toronto? Williams Towing provides 24/7 heavy recovery services for semi trucks, rollovers & off-road commercial vehicles across the GTA. Call +1-416-299-8383.",
    introduction: `<p>Heavy duty winching and recovery operations require specialized equipment, certified operators, and precise execution — a task that only a handful of towing companies in the GTA are truly equipped to handle. Williams Towing's heavy recovery division deploys Wreckmaster-certified operators with Class 8 rotators, multi-axle wreckers, air-cushion recovery systems, and high-capacity winching equipment capable of recovering commercial vehicles up to 75 tons.</p>
<p>From semi-truck rollovers on Highway 401 to transport trucks stuck in construction site mud, from tractor-trailers in highway ditches to commercial vehicles overturned at intersection accidents, Williams Towing's heavy recovery team handles the GTA's most complex vehicle recovery situations — 24 hours a day, 7 days a week.</p>
<p>For heavy duty winching and recovery near you across Toronto and the GTA, call Williams Towing at +1-416-299-8383. We respond immediately with the right equipment — not excuses about needing a bigger truck.</p>`,
    description: `<h3>Heavy Recovery Equipment We Deploy</h3>
<ul>
<li><strong>Class 8 heavy rotator wreckers</strong> — 360° rotating boom for precision recovery in confined spaces</li>
<li><strong>Multi-axle heavy wreckers</strong> — underlift and boom recovery for semi-trucks and commercial vehicles</li>
<li><strong>Air-cushion recovery systems</strong> — for uprighting overturned tankers and commercial trailers without secondary damage</li>
<li><strong>High-capacity winching systems</strong> — 50-ton+ winch capacity for extraction from ditches, embankments, and soft ground</li>
<li><strong>Snatch blocks and rigging equipment</strong> — mechanical advantage systems for extreme pull angles</li>
<li><strong>Lowboy trailers</strong> — for transporting recovered heavy vehicles that cannot be driven</li>
</ul>
<h3>Heavy Winching Recovery Situations</h3>
<p>Williams Towing's heavy recovery team responds to: semi-truck and tractor-trailer rollovers on GTA highways, commercial vehicles in highway ditches or embankments, trucks stuck in mud or soft ground at construction sites, transport trucks overloaded and stuck on ramps, cargo spills requiring vehicle stabilization and extraction, and multi-vehicle accident scenes requiring multiple recoveries.</p>
<h3>Recovery Planning & Safety</h3>
<p>Every heavy recovery begins with a site assessment by our lead operator. We identify ground stability, vehicle centre of gravity, cargo load, fuel tank integrity, and secondary hazard risks before attaching any recovery equipment. For highway recoveries, we coordinate with OPP to establish proper traffic control and request lane closures when necessary. Safe recovery takes priority over fast recovery — we do not rush operations that risk secondary incidents or operator injury.</p>`,
    benefit: `<p>Williams Towing's heavy duty winching and recovery service brings certified expertise, the right heavy equipment, and a safety-first approach to the GTA's most complex commercial vehicle recovery situations. Our Wreckmaster-certified operators have handled hundreds of rollover, ditch, and off-road recoveries across the GTA and Highway 401 corridor. We coordinate with OPP, MTO, and insurance adjusters to document the scene and execute recovery efficiently. For heavy duty winching and recovery near you, call Williams Towing at +1-416-299-8383 — 24/7 across all GTA cities and Ontario highways.</p>`,
  },
  {
    slug: "heavy-duty-highway-towing",
    title: "Heavy Duty Highway Towing Toronto — 24/7 Commercial Highway Towing GTA",
    metatitle: "Heavy Duty Highway Towing Toronto | Commercial Truck Highway Towing 24/7 — Williams Towing",
    metadescription: "Heavy duty highway towing near you in Toronto? Williams Towing provides MTO-authorized 24/7 heavy duty highway towing for semi trucks & commercial vehicles on all GTA highways. Call +1-416-299-8383.",
    introduction: `<p>Commercial vehicle breakdowns on Ontario's major highways create immediate safety hazards and traffic disruptions that require a rapid, authorized, professional response. Williams Towing provides MTO-authorized heavy duty highway towing across all major GTA and Ontario highway corridors — Highway 401, Highway 400, Highway 407, Highway 427, the QEW, and the Gardiner Expressway — 24 hours a day, 7 days a week.</p>
<p>Our heavy-duty highway towing fleet includes Class 8 wreckers and rotators specifically equipped for highway operations: extended boom reach for approaching vehicles in live lanes, high-visibility LED lighting packages for nighttime highway towing, and specialized underlift systems for towing damaged semi-trucks and trailers without secondary damage.</p>
<p>When a commercial vehicle breaks down on the highway, every minute in the live lane or shoulder is a safety risk. Call Williams Towing at +1-416-299-8383 for immediate heavy duty highway towing dispatch — we respond fast and we have the right equipment.</p>`,
    description: `<h3>Heavy Duty Highway Towing — Vehicles We Handle</h3>
<ul>
<li>Semi-trucks and tractor-trailers (loaded and empty)</li>
<li>Commercial straight trucks, cube vans, and tankers</li>
<li>Buses, motor coaches, and transit vehicles</li>
<li>RVs and large motorhomes on highway</li>
<li>Heavy equipment transports that have broken down en route</li>
<li>Multi-axle heavy haul vehicles on permit moves</li>
</ul>
<h3>MTO Highway Towing Authorization</h3>
<p>Williams Towing is authorized by the Ontario Ministry of Transportation (MTO) to operate on all provincial highways in our service area. Our operators follow MTO's Highway Traffic Act towing protocols, wear required high-visibility safety gear, and coordinate directly with OPP highway incident management. For major highway accident scenes requiring multiple heavy-duty recoveries, we can deploy multiple units simultaneously.</p>
<h3>Highway 401 Corridor — Our Most Active Route</h3>
<p>The Highway 401 corridor from Oshawa through Toronto to Mississauga is Ontario's busiest highway and the source of the most commercial vehicle breakdown calls we receive. Williams Towing's heavy-duty fleet is specifically staged to minimize response times to 401 breakdowns across the entire GTA section. We respond to breakdowns between all major 401 interchanges including Kennedy, Brock, Liverpool, Whites, and Salem roads through Durham Region, and all Toronto-area interchanges.</p>
<p>For 407 ETR breakdowns, we coordinate directly with 407 ETR incident management to ensure proper clearance authorization and minimize toll penalties for stranded vehicles.</p>`,
    benefit: `<p>Williams Towing's heavy duty highway towing service is the professional, authorized response that commercial highway breakdowns demand. MTO authorization, Class 8 highway-equipped wreckers, Wreckmaster-certified operators, and 24/7 availability across all GTA highways make Williams Towing the first call for carriers and fleet managers when a truck goes down on the highway. We respond fast, we bring the right equipment, and we clear the scene efficiently to get traffic moving. Call +1-416-299-8383 for heavy duty highway towing near you.</p>`,
  },
  {
    slug: "motor-coaches-rv-towing",
    title: "Motor Coach & RV Towing Toronto — 24/7 Motorhome Towing Near Me GTA",
    metatitle: "RV & Motor Coach Towing Toronto | Motorhome Towing Near Me 24/7 — Williams Towing",
    metadescription: "Need RV or motor coach towing near you in Toronto? Williams Towing provides 24/7 motorhome towing, travel trailer towing & motor coach recovery across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>Motor coaches and recreational vehicles present unique towing challenges that require specialized equipment and experienced operators. Their size, weight distribution, high centre of gravity, and complex undercarriages require a towing approach that's completely different from standard vehicle towing. Williams Towing's heavy-duty fleet includes operators experienced in RV and motor coach towing across Toronto and the GTA — 24 hours a day, 7 days a week.</p>
<p>We tow Class A, B, and C motorhomes, fifth-wheel trailers, travel trailers, pop-up campers, diesel pushers, and motor coaches of all sizes — from compact Class B campervans to full-size 45-foot diesel motor coaches. Our operators understand the specific towing requirements of each vehicle type, including proper towbar attachment points, suspension limitations, and transport routing restrictions for oversized recreational vehicles.</p>
<p>For RV towing or motor coach recovery near you in the GTA, call Williams Towing at +1-416-299-8383 — 24/7 dispatch, specialized equipment, fast response.</p>`,
    description: `<h3>RV & Motor Coach Types We Tow</h3>
<ul>
<li><strong>Class A motorhomes</strong> — large diesel and gas-powered coach-style RVs up to 45 feet</li>
<li><strong>Class B motorhomes</strong> — van-based campervans (Mercedes Sprinter, Ford Transit builds)</li>
<li><strong>Class C motorhomes</strong> — truck-cab-based motorhomes with cab-over sleeping area</li>
<li><strong>Fifth-wheel trailers</strong> — king-pin trailer recovery requiring specialized equipment</li>
<li><strong>Travel trailers</strong> — conventional bumper-pull trailers of all sizes</li>
<li><strong>Motor coaches</strong> — commercial passenger coaches, charter buses, and luxury touring coaches</li>
</ul>
<h3>Common RV & Motor Coach Breakdown Situations</h3>
<p>Williams Towing responds to RV and motor coach breakdowns across the GTA and Ontario highway system. Common situations include: engine or transmission failure on Highway 400 or 401 heading to cottage country, tire blowouts on major highways (RV tires must be handled with specialized equipment), generator failures requiring mobile power assistance, slideout mechanism failures preventing road movement, and accident recovery for RVs involved in collisions.</p>
<h3>Routing Considerations for Large RVs</h3>
<p>Towing a large Class A motorhome or fifth-wheel trailer through Toronto requires careful route planning to avoid low clearances, weight-restricted bridges, and narrow residential streets. Williams Towing's operators plan routes in advance for oversized RV tows, ensuring safe transport to your destination without routing surprises or secondary incidents.</p>`,
    benefit: `<p>Williams Towing's motor coach and RV towing service combines specialized heavy-duty equipment with operators who understand the unique requirements of recreational and charter vehicles. We handle everything from compact campervans to full-size luxury motor coaches, with proper attachment, routing, and transport for each vehicle type. 24/7 availability, GTA-wide coverage, and upfront flat-rate pricing make Williams Towing the RV and motor coach towing specialist that Ontario travellers call when they need help on the road. Call +1-416-299-8383 anytime.</p>`,
  },
  {
    slug: "trailer-lifts-school-bus-towing",
    title: "Trailer & School Bus Towing Toronto — 24/7 Bus Towing Near Me GTA",
    metatitle: "School Bus & Trailer Towing Toronto | Bus Towing Near Me 24/7 — Williams Towing",
    metadescription: "Need school bus or trailer towing near you in Toronto? Williams Towing provides 24/7 school bus towing, trailer lifts & transit bus recovery across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>School buses, transit buses, and commercial trailers require specialized towing equipment and procedures that go well beyond what standard tow trucks can safely handle. Williams Towing's heavy-duty division provides professional school bus towing, trailer lifts, and commercial bus recovery across Toronto and the GTA — 24 hours a day, including emergency school hour response.</p>
<p>Our heavy-duty fleet includes underlift wreckers and Class 8 equipment capable of safely recovering school buses, transit buses, motor coaches, flatdeck trailers, refrigerated trailers, and enclosed cargo trailers. We understand that a school bus breakdown demands urgency — students may be on board, and public safety requires fast, professional resolution.</p>
<p>For school bus towing or trailer recovery near you in Toronto and the GTA, call Williams Towing at +1-416-299-8383. Priority response available for school bus emergencies.</p>`,
    description: `<h3>School Bus Towing — Priority Response Protocol</h3>
<p>When a school bus breaks down, student safety is the priority. Williams Towing's school bus response procedure includes:</p>
<ul>
<li>Priority dispatch — school bus calls are elevated in our queue for the fastest available heavy-duty response</li>
<li>Coordination with school bus operator and the school board's transportation office</li>
<li>Ensuring students are safely offloaded and a replacement bus is arranged before we begin towing operations</li>
<li>Safe towing of the disabled bus to the operator's garage or repair facility</li>
<li>Incident documentation for the school board and insurance</li>
</ul>
<h3>Trailer Lift & Recovery Services</h3>
<p>Trailer lifts — towing a trailer that has become disconnected from its tractor, or transporting a trailer that cannot be moved by its own tractor — require specific heavy-duty equipment. Williams Towing's trailer lift capabilities include:</p>
<ul>
<li>Fifth-wheel trailer lifts and repositioning</li>
<li>Bumper-pull trailer recovery</li>
<li>Refrigerated trailer towing (maintaining cold chain awareness)</li>
<li>Flatdeck and curtain-side trailer recovery</li>
<li>Overturned trailer uprighting and recovery</li>
</ul>
<h3>Bus & Transit Vehicle Coverage</h3>
<p>Beyond school buses, Williams Towing provides towing and recovery for Toronto Transit Commission (TTC) support vehicles, municipal bus operators, charter buses, and private transit operators across all nine GTA cities. We work directly with transit operations departments for coordinated breakdown response that minimizes service disruption.</p>`,
    benefit: `<p>Williams Towing's school bus and trailer towing service brings specialized heavy-duty equipment, properly certified operators, and priority response protocols to the GTA's most time-sensitive bus and trailer recovery situations. We understand that school bus breakdowns affect families and schools, and we respond accordingly. Our heavy-duty wreckers, Class 8 underlift equipment, and coordination with school boards and transit operators make Williams Towing the bus and trailer towing company the GTA trusts. Call +1-416-299-8383 for immediate response.</p>`,
  },
  {
    slug: "truck-decking-un-decking-service",
    title: "Truck Decking & Un-decking Service Toronto — Commercial Truck Decking GTA",
    metatitle: "Truck Decking & Un-decking Toronto | Commercial Truck Stacking Service — Williams Towing",
    metadescription: "Need truck decking or un-decking services near you in Toronto? Williams Towing provides professional truck decking and un-decking across Toronto & the GTA for commercial transport. Call +1-416-299-8383.",
    introduction: `<p>Truck decking and un-decking — the process of stacking vehicles or trailers on multi-level carriers for transport, and safely removing them — is a specialized commercial service requiring precision equipment, experienced operators, and careful logistics planning. Williams Towing provides professional truck decking and un-decking services across Toronto and the GTA for auto transport carriers, commercial fleets, and logistics operators.</p>
<p>Whether you need vehicles loaded onto a multi-level auto transport, trucks positioned for rail or ship transport, or cargo-carrying units decked for multi-vehicle shipment, Williams Towing's commercial fleet division has the equipment and expertise to execute these operations safely and efficiently. We handle all standard commercial truck configurations and work alongside auto transport coordinators for high-volume vehicle movements.</p>
<p>For truck decking and un-decking services across Toronto and the GTA, call Williams Towing at +1-416-299-8383 — commercial dispatch available 24/7 for scheduled and emergency decking operations.</p>`,
    description: `<h3>Truck Decking & Un-decking — What We Handle</h3>
<ul>
<li><strong>Auto transport carrier loading/unloading</strong> — positioning vehicles onto and off multi-level car carriers</li>
<li><strong>Commercial truck stacking</strong> — decking commercial vehicles for high-density transport</li>
<li><strong>Disabled vehicle loading</strong> — decking non-running vehicles using winch and underlift equipment</li>
<li><strong>Rail and marine transport loading</strong> — positioning vehicles for ro-ro (roll-on/roll-off) transport</li>
<li><strong>Auction and dealership vehicle movements</strong> — high-volume vehicle decking for dealer-to-dealer and auction transport</li>
</ul>
<h3>Equipment Used for Truck Decking Operations</h3>
<p>Williams Towing's decking operations utilize underlift wreckers, flatbed carriers with adjustable ramps, winch systems for non-running vehicles, and positioning dollies for tight-space maneuvering. Our operators are trained in load weight distribution and proper securing procedures to ensure all decked vehicles are stable and secured to transport standards before any movement begins.</p>
<h3>Commercial Account Services for Decking Operations</h3>
<p>For auto dealerships, auction houses, fleet management companies, and commercial carriers requiring regular or scheduled decking services, Williams Towing offers commercial accounts with priority scheduling, consolidated invoicing, and dedicated operations contacts. High-volume decking operations can be coordinated with advance notice for multi-unit moves across the GTA and province-wide.</p>`,
    benefit: `<p>Williams Towing's truck decking and un-decking service provides the precision equipment, properly trained operators, and logistics coordination that commercial vehicle transport operations require. We handle everything from single vehicle loading for auto transport to high-volume fleet decking operations, with the same professional standard on every job. Commercial accounts available for dealerships, auctions, and carriers requiring regular service. Call Williams Towing at +1-416-299-8383 for truck decking services across Toronto and the GTA.</p>`,
  },
  {
    slug: "heavy-equipment-transport",
    title: "Heavy Equipment Transport Toronto — Construction Machinery Transport GTA",
    metatitle: "Heavy Equipment Transport Toronto | Construction Machinery Transport Near Me — Williams Towing",
    metadescription: "Need heavy equipment transport near you in Toronto? Williams Towing provides professional construction machinery and industrial equipment transport across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>Moving heavy construction equipment and industrial machinery requires more than just a big truck — it requires proper transport equipment, certified operators, route planning for oversized loads, permit coordination, and a deep understanding of how each piece of equipment must be secured for safe highway transport. Williams Towing's heavy equipment transport division serves Toronto and the GTA with professional machinery transport for construction companies, industrial operators, rental yards, and auction houses.</p>
<p>Our heavy equipment transport fleet includes lowboy trailers, flatdeck trailers, and heavy-duty wreckers capable of transporting excavators, backhoes, bulldozers, skid steers, boom lifts, forklifts, compactors, pavers, and other heavy machinery. We handle load securing, route planning, oversize load permits, and pilot car coordination for loads exceeding standard transport dimensions.</p>
<p>For heavy equipment transport near you in the GTA, call Williams Towing at +1-416-299-8383 — scheduled and emergency equipment transport available 24/7 across all nine GTA cities.</p>`,
    description: `<h3>Heavy Equipment We Transport</h3>
<ul>
<li><strong>Earthmoving equipment</strong> — excavators, bulldozers, graders, scrapers, and compactors</li>
<li><strong>Material handling</strong> — forklifts, telehandlers, reach stackers, and warehouse machinery</li>
<li><strong>Lifting equipment</strong> — boom lifts, scissor lifts, telescopic handlers, and mobile cranes</li>
<li><strong>Paving and road construction</strong> — asphalt pavers, road rollers, milling machines</li>
<li><strong>Concrete equipment</strong> — concrete pumps, mixers, and batching plants</li>
<li><strong>Agricultural machinery</strong> — tractors, combines, and specialized farm equipment</li>
<li><strong>Industrial equipment</strong> — generators, compressors, transformers, and large industrial tools</li>
</ul>
<h3>Oversize Load Transport</h3>
<p>Equipment that exceeds Ontario's standard transport dimensions (2.6m wide, 4.15m tall, or 23m long) requires an oversize load permit from MTO and may require pilot vehicles, police escorts, and restricted travel hours. Williams Towing coordinates all permit applications and pilot car arrangements for oversized equipment moves across the GTA and province-wide.</p>
<h3>Emergency Equipment Transport</h3>
<p>When a piece of construction equipment breaks down at a job site and must be transported to a dealer or repair facility, Williams Towing provides emergency heavy equipment transport with priority dispatch. We arrive with the right lowboy or flatdeck for your equipment's weight and dimensions, load and secure the machine safely, and transport it to your specified facility on the same day in most cases.</p>`,
    benefit: `<p>Williams Towing's heavy equipment transport service handles the full complexity of construction and industrial machinery moves — from permits and route planning to loading, securing, and delivery. Our lowboy fleet, certified operators, and experience with oversized load transport make us the equipment transport company GTA contractors and industrial operators call for both scheduled moves and emergency breakdowns. Transparent pricing, 24/7 availability, and province-wide coverage make Williams Towing the right choice for heavy equipment transport near you. Call +1-416-299-8383.</p>`,
  },
  {
    slug: "cargo-services",
    title: "Cargo Services Toronto — Commercial Cargo Towing & Transport GTA",
    metatitle: "Cargo Services Toronto | Commercial Cargo Towing & Transport Near Me — Williams Towing",
    metadescription: "Need cargo services near you in Toronto? Williams Towing provides commercial cargo transport, cargo transfer after breakdowns & cargo recovery across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>When a commercial vehicle carrying cargo breaks down or is involved in an accident, the cargo itself becomes an immediate concern alongside vehicle recovery. Williams Towing's commercial cargo services help carriers, owner-operators, and logistics companies manage cargo safely during breakdown, accident, and recovery situations across Toronto and the GTA.</p>
<p>Our cargo services cover on-site cargo documentation and inventory, emergency cargo transfer from a disabled vehicle to a replacement unit, cargo recovery from overturned or off-road vehicles, refrigerated cargo assistance (coordinating cold chain replacements), and cargo transport to bonded warehouses or consignee locations while the vehicle is repaired.</p>
<p>For cargo services and commercial towing near you in the GTA, call Williams Towing at +1-416-299-8383. We work directly with your dispatch team, cargo broker, and insurance adjuster to minimize cargo loss and liability.</p>`,
    description: `<h3>Cargo Services We Provide</h3>
<ul>
<li><strong>Cargo documentation</strong> — photographing and inventorying cargo at breakdown or accident scenes for insurance purposes</li>
<li><strong>Emergency cargo transfer</strong> — unloading cargo from a disabled vehicle and transferring to a replacement unit</li>
<li><strong>Cargo recovery</strong> — recovering spilled or scattered cargo from accident scenes or off-road situations</li>
<li><strong>Cold chain coordination</strong> — urgent coordination for refrigerated cargo requiring temperature-controlled handling</li>
<li><strong>Bonded warehouse referrals</strong> — arranging secure cargo storage while a vehicle is repaired</li>
<li><strong>Oversized cargo management</strong> — handling and securing cargo that requires special equipment for movement</li>
</ul>
<h3>Cargo Recovery After Accidents</h3>
<p>When a commercial vehicle is involved in a highway accident involving spilled cargo, Williams Towing coordinates the full scene response: vehicle recovery using heavy-duty equipment, cargo recovery and cleanup to restore highway safety, documentation for carrier liability and insurance, and transport of recovered cargo to a secure location. We work alongside OPP highway incident management and MTO for major cargo spill incidents on Ontario highways.</p>
<h3>Refrigerated Cargo Emergencies</h3>
<p>A refrigerated truck breakdown is a race against time for perishable goods. Williams Towing prioritizes refrigerated vehicle breakdowns and coordinates with cold storage facilities and replacement reefer unit providers to minimize cargo temperature exposure. We document cargo temperatures at the scene and coordinate with your food safety or pharmaceutical compliance contacts as required.</p>`,
    benefit: `<p>Williams Towing's cargo services provide comprehensive support for commercial carriers dealing with vehicle breakdowns, accidents, and cargo emergencies across the GTA. We handle cargo documentation, transfer, recovery, and coordination alongside vehicle towing so carriers and drivers have one professional contact managing the entire incident. Direct insurance coordination, 24/7 availability, and commercial fleet accounts make Williams Towing the cargo services partner Toronto carriers rely on when things go wrong on the road. Call +1-416-299-8383.</p>`,
  },
];

async function updateServiceContent() {
  console.log(`Updating ${services.length} service pages in Supabase...`);
  let success = 0;
  let failed = 0;

  for (const service of services) {
    const { slug, ...data } = service;

    const { error } = await supabase
      .from("services")
      .update(data)
      .eq("slug", slug);

    if (error) {
      console.error(`✗ Failed: ${slug} —`, error.message);
      failed++;
    } else {
      console.log(`✓ Updated: ${slug}`);
      success++;
    }
  }

  console.log(`\nDone. ${success} updated, ${failed} failed.`);
  if (failed > 0) {
    console.log("Check that these slugs exist in your Supabase services table.");
  }
}

updateServiceContent().catch(console.error);
