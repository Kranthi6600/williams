/**
 * Williams Towing — Supabase Service Content Updater
 * Run: node scripts/update-service-content.js
 *
 * Updates the `services` table with 600–800 word SEO content per service.
 * Uses UPSERT on slug — safe to run multiple times.
 */

require("dotenv").config({ path: ".env.local" });
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const services = [
  {
    slug: "car-towing",
    title: "Car Towing Toronto — 24/7 Emergency Car Towing & GTA",
    metatitle: "Car Towing Toronto | 24/7 Emergency Car Tow Truck Near Me — Williams Towing",
    metadescription: "Need car towing near you in Toronto? Williams Towing provides 24/7 emergency car towing, flatbed towing, and roadside assistance across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>When your car breaks down, every minute counts. Williams Towing provides fast, professional car towing services across Toronto and the Greater Toronto Area — 24 hours a day, 7 days a week, 365 days a year. Whether you've been in an accident on the Gardiner Expressway, your engine has seized on the 401 near Scarborough, or your car simply won't start in a parking lot, our GPS-dispatched fleet reaches most Toronto locations in 20–40 minutes.</p>
<p>We tow all makes and models — sedans, SUVs, electric vehicles, pickup trucks, minivans, and sports cars. Our flatbed tow trucks are the safest option for AWD, 4x4, and luxury vehicles, keeping all four wheels off the ground to prevent drivetrain damage. For standard front or rear-wheel-drive vehicles, our wheel-lift trucks provide a fast, efficient tow to your preferred destination — whether that's a dealership, collision centre, mechanic, or your home.</p>
<p>Williams Towing is TSSEA-compliant, fully insured, and works directly with all major insurance providers in Ontario. Call us at +1-416-299-8383 and get a real person, a real quote, and a real ETA — every time.</p>`,
    description: `<h3>Professional Car Towing Across Toronto & the GTA</h3>
<p>Williams Towing has been Toronto's trusted car towing company for decades. Our fleet includes flatbed tow trucks, wheel-lift wreckers, and low-clearance vehicles specifically built for underground parking structures — so we can reach your vehicle no matter where it is.</p>
<p>We provide car towing services across all Toronto neighbourhoods and all nine GTA cities: Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, and Oshawa. From the Beaches to Rexdale, from Willowdale to Long Branch — if you're in the GTA, Williams Towing can get to you fast.</p>
<h3>What Happens When You Call Williams Towing?</h3>
<ul>
<li>Our dispatcher confirms your exact location using GPS coordinates</li>
<li>We provide a clear, upfront price quote before sending a truck</li>
<li>The nearest available operator is dispatched with an accurate ETA</li>
<li>On arrival, our operator performs a pre-tow inspection and documents your vehicle's condition</li>
<li>Your car is secured and transported to your chosen destination safely</li>
<li>We coordinate directly with your insurance company or dealership if needed</li>
</ul>
<h3>Car Towing for All Situations</h3>
<p>Accident towing — we work with collision centres and OPP across the GTA. Breakdown towing — engine failures, transmission issues, flat tires, and dead batteries. Flatbed towing for electric vehicles, luxury cars, and AWD drivetrains. Underground parking towing — our low-clearance trucks fit where standard tow trucks cannot. Lockout assistance, battery boost, gas delivery — available alongside every tow call.</p>
<p>Williams Towing provides transparent, upfront pricing with no hidden dispatch fees and no after-hours surcharges beyond our standard rates. We comply with Ontario TSSEA pricing regulations so you always know what to expect.</p>`,
    benefit: `<p>When you choose Williams Towing for car towing, you get a fully licensed and insured towing company with decades of experience across the GTA. Our response times are among the fastest in Toronto, our operators are professionally trained and TSSEA-compliant, and our pricing is always confirmed before we dispatch. We work with all major insurance providers and coordinate directly with your preferred collision centre or repair shop — making your post-breakdown experience as smooth as possible. Whether it's 2 PM or 2 AM, Williams Towing is the car towing company Toronto drivers trust.</p>`,
  },
  {
    slug: "flatbed-towing",
    title: "Flatbed Towing Toronto — 24/7 Flatbed Tow Truck Service GTA",
    metatitle: "Flatbed Towing Toronto | Flatbed Tow Truck Near Me 24/7 — Williams Towing",
    metadescription: "Need flatbed towing near you in Toronto? Williams Towing provides 24/7 flatbed tow truck service for AWD, EV, luxury & lowered vehicles across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>Flatbed towing is the safest way to transport a vehicle — and for AWD drivetrains, electric vehicles, luxury cars, and lowered vehicles, it's the only recommended method. Williams Towing operates a full fleet of flatbed tow trucks across Toronto and the GTA, available 24/7 for emergency and scheduled transport.</p>
<p>Unlike wheel-lift towing, a flatbed keeps all four wheels fully elevated throughout transport, eliminating any risk of drivetrain, axle, or transmission damage. This matters enormously for vehicles like Audi Quattro, Subaru AWD, Tesla, BMW xDrive, and any vehicle where rotating the rear wheels without the engine running can cause serious mechanical damage.</p>
<p>Our flatbed operators are trained to handle high-value vehicles with care — from securing straps to protective padding and route planning to avoid road conditions that could affect your vehicle in transit. Call Williams Towing at +1-416-299-8383 for a flatbed tow truck near you across all Toronto and GTA locations.</p>`,
    description: `<h3>When Do You Need Flatbed Towing?</h3>
<ul>
<li><strong>AWD & 4WD vehicles</strong> — all-wheel-drive systems can be damaged by wheel-lift towing</li>
<li><strong>Electric vehicles</strong> — regen braking systems in EVs like Tesla, Rivian, and Chevy Bolt require flatbed transport</li>
<li><strong>Luxury & exotic cars</strong> — low ground clearance and sensitive body panels require flatbed for safe loading</li>
<li><strong>Lowered vehicles</strong> — custom suspensions, body kits, and low ride heights make wheel-lift dangerous</li>
<li><strong>Motorcycles</strong> — our flatbeds with wheel chocks provide the safest motorcycle transport</li>
<li><strong>Non-running vehicles</strong> — vehicles with seized engines, broken axles, or locked wheels can only be flatbed towed</li>
<li><strong>Long-distance towing</strong> — flatbed is always recommended for long-distance vehicle transport</li>
</ul>
<h3>Flatbed Towing Across Toronto & the GTA</h3>
<p>Williams Towing provides flatbed tow truck service across all nine GTA cities — Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, and Oshawa. Our GPS-dispatched flatbed trucks reach most locations within 25–40 minutes. We cover all Toronto neighbourhoods, all major highways including the 401, 407, 427, and Gardiner Expressway, and all Durham Region and York Region corridors.</p>
<h3>Flatbed Towing for Accident Scenes</h3>
<p>After a collision, flatbed towing is almost always required for vehicles with structural damage, airbag deployment, or damaged wheels. Williams Towing works directly with OPP, Toronto Police, and all major insurance companies to provide professional accident flatbed towing across the GTA. We document your vehicle's condition before and after loading, providing photo records for your insurance claim.</p>`,
    benefit: `<p>Williams Towing's flatbed towing service is the safe, professional choice for any vehicle that shouldn't be towed on two wheels. Our operators are experienced with all vehicle types, from compact EVs to full-size luxury SUVs, and always secure your vehicle with the correct strapping and padding for zero-damage transport. Upfront pricing, 24/7 availability, and direct insurance coordination make Williams Towing the flatbed towing company Toronto and GTA drivers call first.</p>`,
  },
  {
    slug: "heavy-duty-towing",
    title: "Heavy Duty Towing Toronto — 24/7 Semi Truck & Commercial Towing GTA",
    metatitle: "Heavy Duty Towing Toronto | Semi Truck Towing 24/7 — Williams Towing",
    metadescription: "Heavy duty towing near you in Toronto? Williams Towing provides 24/7 heavy duty towing for semi trucks, tractor trailers, buses, RVs & commercial vehicles across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>Williams Towing operates one of the most capable heavy-duty towing fleets in the Greater Toronto Area. Our heavy-duty division handles semi truck towing, tractor trailer towing, commercial truck towing, bus towing, RV towing, heavy equipment transport, and large-scale accident recovery — 24 hours a day, across Toronto and all nine GTA cities.</p>
<p>Heavy-duty towing requires specialized equipment, certified operators, and precise recovery planning that standard tow truck companies simply cannot provide. Williams Towing's heavy-duty fleet includes Class 8 wreckers, rotators, air-cushion recovery systems, and lowboy trailers capable of recovering and transporting vehicles up to 75 tons. Our Wreckmaster-certified operators are among the most experienced heavy recovery specialists in Ontario.</p>
<p>When a commercial vehicle breaks down on Highway 401, blocks a highway interchange, or requires emergency winching recovery after a rollover, Williams Towing provides the immediate, professional response that businesses and carriers depend on. Call +1-416-299-8383 for priority heavy-duty dispatch, 24/7.</p>`,
    description: `<h3>Heavy Duty Towing Services — What We Handle</h3>
<ul>
<li><strong>Semi truck towing & tractor trailer towing</strong> — loaded and empty rigs across all GTA highways</li>
<li><strong>Commercial truck towing</strong> — cube vans, straight trucks, tankers, flatbeds, and dump trucks</li>
<li><strong>Bus towing</strong> — transit buses, school buses, motor coaches, and shuttle buses</li>
<li><strong>RV towing</strong> — motorhomes, fifth wheels, travel trailers, and camper vans</li>
<li><strong>Heavy equipment transport</strong> — construction machinery, industrial equipment, forklifts</li>
<li><strong>Heavy winching & recovery</strong> — rollovers, off-road recoveries, ditch recoveries, cargo incidents</li>
<li><strong>Heavy duty highway towing</strong> — authorized MTO towing on all GTA and Ontario highways</li>
</ul>
<h3>Heavy Duty Towing Across All GTA Cities</h3>
<p>Williams Towing's heavy-duty fleet covers all GTA heavy towing corridors: Highway 401 from Oshawa through Toronto to Mississauga, Highway 407 ETR, Highway 400, Highway 427, the Gardiner Expressway, Highway 7, and all Durham Region and York Region routes. We're authorized by MTO to operate on all Ontario provincial highways and coordinate with OPP at accident scenes.</p>
<h3>Commercial Fleet & Carrier Accounts</h3>
<p>For trucking companies, carriers, logistics operators, and fleet managers, Williams Towing offers priority heavy-duty dispatch, consolidated monthly billing, and 24/7 account management. When your truck breaks down, you need a recovery company that picks up the phone immediately and dispatches the right equipment — not a general towing company that sends a light-duty wrecker that can't do the job.</p>`,
    benefit: `<p>Williams Towing's heavy-duty towing and recovery team is available 24/7 across Toronto and the GTA with the equipment and certification to handle any commercial vehicle emergency. Our Wreckmaster-certified operators, Class 8 recovery fleet, and direct MTO highway authorization set us apart from general towing companies. We minimize your downtime, work directly with your carrier and insurance contacts, and handle complex recoveries that other companies won't touch. For heavy-duty towing near you in the GTA, Williams Towing is the call that gets results.</p>`,
  },
  {
    slug: "roadside-assistance",
    title: "Roadside Assistance Toronto — 24/7 Emergency Roadside Help GTA",
    metatitle: "Roadside Assistance Near Me Toronto | 24/7 Emergency Roadside Help — Williams Towing",
    metadescription: "Need roadside assistance near you in Toronto? Williams Towing provides 24/7 battery boost, jump start, gas delivery, lockout service & tire change across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>Roadside emergencies don't wait for a convenient time. A dead battery on a cold January morning, running out of gas on the 401 at midnight, locking your keys in the car outside a Toronto restaurant — these are the moments when you need fast, professional roadside assistance from a company you can trust. Williams Towing provides 24/7 emergency roadside assistance across Toronto, Scarborough, North York, Markham, Etobicoke, and all nine GTA cities.</p>
<p>Our roadside assistance team handles battery boosts, jump starts, gas delivery, vehicle lockout service, flat tire changes, and minor mechanical assists — arriving in an average of 20–40 minutes across most GTA locations. When a tow is needed, our roadside operators can dispatch a tow truck at the same time, getting you off the road and to a repair facility as efficiently as possible.</p>
<p>Williams Towing charges transparent, upfront rates for all roadside services. No hidden fees, no dispatch charges without notice, no surprise invoices. Just fast, professional help when you need it most.</p>`,
    description: `<h3>Roadside Assistance Services Available 24/7</h3>
<ul>
<li><strong>Battery boost / jump start</strong> — gas, diesel, hybrid, and EV-compatible surge-protected boosters</li>
<li><strong>Gas & diesel fuel delivery</strong> — enough fuel to reach the nearest gas station</li>
<li><strong>Vehicle lockout service</strong> — professional, damage-free vehicle entry for all makes and models</li>
<li><strong>Flat tire change</strong> — mounting your spare tire on light-duty vehicles</li>
<li><strong>Minor mechanical assists</strong> — cooling system checks, belt inspections, and other basic roadside helps</li>
<li><strong>Towing coordination</strong> — when a roadside fix isn't possible, we dispatch a tow truck immediately</li>
</ul>
<h3>Roadside Assistance Across Toronto & the GTA</h3>
<p>Williams Towing provides roadside assistance across all GTA communities — from the DVP and Gardiner in Toronto to Highway 401 in Scarborough and Durham Region, Highway 407 in Markham and Pickering, and Highway 427 in Etobicoke. Our GPS-tracked operators are staged across the GTA to minimize response times.</p>
<h3>Winter Roadside Assistance</h3>
<p>Ontario winters are hard on vehicles. Cold weather is the leading cause of battery failure and flat tires. Williams Towing's roadside assistance team is equipped with heated battery boosters, portable air compressors, and cold-weather emergency kits — available even during snowstorms, ice storms, and extreme cold weather events. When your vehicle fails in winter, Williams Towing is available and responding.</p>
<p>We work with all major Ontario auto insurance providers for roadside coverage reimbursement. If you have roadside assistance included in your policy, call your insurer first — many dispatch Williams Towing directly.</p>`,
    benefit: `<p>Williams Towing's roadside assistance service combines fast response with professional, damage-free service for your vehicle. Our operators are trained to handle all vehicle types, including hybrids, EVs, diesel trucks, and luxury vehicles with advanced electronics. Transparent pricing, 24/7 availability, and a fleet staged across the GTA mean you're never waiting long for help. For roadside assistance near you in Toronto or anywhere in the GTA, Williams Towing is the call that gets you back on the road.</p>`,
  },
  {
    slug: "accident-recovery",
    title: "Accident Recovery Toronto — 24/7 Accident Towing & Vehicle Recovery GTA",
    metatitle: "Accident Recovery Toronto | 24/7 Accident Towing Near Me — Williams Towing",
    metadescription: "Need accident recovery near you in Toronto? Williams Towing provides 24/7 accident recovery, flatbed accident towing, and direct insurance coordination across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>After a vehicle accident, having the right towing company on scene makes a critical difference. Williams Towing provides professional accident recovery and accident towing services across Toronto and the Greater Toronto Area — 24 hours a day, 7 days a week. Our operators are trained in accident scene safety protocols, work directly with OPP and Toronto Police, and coordinate with your insurance company to simplify the entire recovery process.</p>
<p>Whether your vehicle has minor damage, significant structural damage, airbag deployment, or has rolled over, Williams Towing has the right equipment to recover and transport it safely. Our fleet includes flatbed tow trucks for damaged vehicles, heavy-duty wreckers for large vehicle accidents, and low-clearance units for underground parking incidents.</p>
<p>After an accident, do not move your vehicle until directed by police. Call Williams Towing at +1-416-299-8383 for professional, fast accident recovery across Toronto and the GTA.</p>`,
    description: `<h3>What to Do After an Accident in Toronto</h3>
<ol>
<li>Ensure everyone's safety — move to the side of the road if safe to do so</li>
<li>Call 911 for injuries, or Toronto Police / OPP for property damage</li>
<li>Exchange insurance and contact information with all involved drivers</li>
<li>Do not admit fault — document the scene with photos before moving vehicles</li>
<li>Call Williams Towing at +1-416-299-8383 for accident recovery and towing</li>
<li>We coordinate directly with your insurance company and preferred collision centre</li>
</ol>
<h3>Accident Recovery Across All GTA Cities</h3>
<p>Williams Towing responds to accident scenes across all GTA cities and major highway corridors — Highway 401, 400, 407, 427, Gardiner Expressway, DVP, and all local Toronto and Durham Region roads. We work alongside OPP for highway accident scenes and Toronto Police for urban accidents, ensuring vehicles are recovered safely and efficiently with minimal traffic disruption.</p>
<h3>Insurance Coordination & Collision Centre Referrals</h3>
<p>After an accident, dealing with insurance can be overwhelming. Williams Towing's dispatch team coordinates directly with your insurance provider to verify coverage, authorize towing, and arrange transport to your preferred or insurance-approved collision centre. We provide detailed documentation of your vehicle's condition on-scene and throughout transport, supporting your insurance claim.</p>
<p>We work with all major Ontario auto insurers including Intact, Aviva, Economical, Intact Direct, Belair Direct, CAA, and more. Our towing invoices are formatted for direct insurance submission.</p>`,
    benefit: `<p>Williams Towing's accident recovery service combines professional scene management, safe vehicle recovery, and full insurance coordination in one call. Our operators are trained in accident scene safety, carry proper documentation equipment, and handle your vehicle with the same care regardless of its condition. We provide flatbed transport for damaged vehicles, keeping your car stable and secure throughout. Transparent, insurance-friendly pricing and 24/7 availability make Williams Towing the accident recovery company Toronto and GTA drivers call when it matters most.</p>`,
  },
  {
    slug: "underground-towing",
    title: "Underground Towing Toronto — 24/7 Underground Parking Tow Service GTA",
    metatitle: "Underground Towing Toronto | Underground Parking Tow Truck 24/7 — Williams Towing",
    metadescription: "Need underground parking towing near you in Toronto? Williams Towing provides 24/7 low-clearance underground towing for condos, offices & garages across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>Underground parking structures present a unique towing challenge that most towing companies aren't equipped to handle. Standard tow trucks are too tall to enter underground parkades, leaving many drivers stranded when their vehicle breaks down in a condo parking garage, office building parkade, or shopping centre underground lot.</p>
<p>Williams Towing operates a specialized fleet of low-clearance tow trucks specifically built for underground and multi-level parking structures across Toronto and the GTA. Our underground towing units can access parkades with as little as 6 feet 6 inches of clearance — getting to your vehicle where other towing companies simply cannot go.</p>
<p>Whether your car won't start in a Yonge-Eglinton condo parkade, you've had an accident in a North York office building's underground lot, or your vehicle needs to be removed from a Scarborough shopping centre garage, Williams Towing is the underground towing specialist Toronto drivers call. Available 24/7 at +1-416-299-8383.</p>`,
    description: `<h3>How Underground Towing Works</h3>
<p>Our low-clearance underground towing units are purpose-built to navigate tight turns, low overheads, and steep ramps typical of Toronto's underground parking structures. Here's what happens when you call:</p>
<ul>
<li>Our dispatcher confirms the parkade address and clearance specifications</li>
<li>We dispatch the correct low-clearance unit for your parkade's height restriction</li>
<li>Our operator navigates to your vehicle level and position</li>
<li>Your vehicle is safely secured and extracted using specialized equipment appropriate for the space</li>
<li>If the vehicle cannot be driven, it's transported directly to your preferred repair facility or dealership</li>
</ul>
<h3>Underground Towing for Condos & Property Managers</h3>
<p>Williams Towing works with Toronto condo corporations, property management companies, and commercial building managers to provide reliable underground vehicle removal services. Whether it's removing an abandoned vehicle, towing a vehicle blocking a reserved spot, or emergency extraction of a broken-down resident's car, we respond professionally and quickly.</p>
<p>For property managers requiring regular or on-call underground towing services, Williams Towing offers dedicated property accounts with priority dispatch, consolidated billing, and 24/7 availability.</p>
<h3>Underground Towing Coverage</h3>
<p>We provide underground towing across all Toronto neighbourhoods, North York condos, Markham office parks, Etobicoke condo developments, and all GTA underground parking facilities. Our GPS-dispatched low-clearance fleet covers the entire GTA, with average response times of 25–40 minutes.</p>`,
    benefit: `<p>Williams Towing's underground towing service is the only call you need when your vehicle is stranded in a parking garage. Our purpose-built low-clearance tow trucks access spaces where standard tow trucks cannot operate, and our experienced operators handle tight underground environments safely and efficiently. 24/7 availability, upfront pricing, and property management accounts make Williams Towing Toronto's leading underground parking towing specialist. Call +1-416-299-8383 anytime for underground towing near you.</p>`,
  },
  {
    slug: "motorcycle-towing",
    title: "Motorcycle Towing Toronto — 24/7 Motorcycle Tow Truck Near Me GTA",
    metatitle: "Motorcycle Towing Toronto | Motorcycle Tow Truck Near Me 24/7 — Williams Towing",
    metadescription: "Need motorcycle towing near you in Toronto? Williams Towing provides 24/7 damage-free motorcycle towing for all bike types across Toronto & the GTA. Purpose-built flatbeds with wheel chocks. Call +1-416-299-8383.",
    introduction: `<p>Motorcycles require specialized towing equipment and experienced operators — a standard tow truck that works for cars can cause serious damage to a motorcycle's frame, fairings, and drivetrain. Williams Towing provides dedicated, damage-free motorcycle towing services across Toronto and the GTA, using purpose-built flatbed tow trucks equipped with wheel chocks, soft straps, and frame protectors designed specifically for all motorcycle types.</p>
<p>We tow all motorcycles — sport bikes, cruisers, touring bikes, adventure bikes, dual-sport, mopeds, scooters, and custom builds — across Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, and Oshawa. Whether you've had an accident, your bike won't start, or you need transport to a dealership or mechanic, Williams Towing provides fast, professional motorcycle towing with care.</p>
<p>Call Williams Towing at +1-416-299-8383 for motorcycle towing near you in the GTA — 24/7, with average response times of 25–45 minutes.</p>`,
    description: `<h3>Motorcycle Towing — Why It Requires Specialized Equipment</h3>
<p>Standard wheel-lift tow trucks are designed for four-wheeled vehicles. Using them on a motorcycle risks damage to the frame, exhaust, brake lines, and bodywork. Williams Towing's motorcycle towing fleet uses flatbed trucks with the following purpose-built equipment:</p>
<ul>
<li><strong>Wheel chocks</strong> — properly sized to hold your motorcycle's front wheel securely during loading and transport</li>
<li><strong>Soft recovery straps</strong> — non-abrasive straps that secure the motorcycle without scratching bodywork or chrome</li>
<li><strong>Frame protectors & padding</strong> — prevent contact damage from securing straps on fairings and frame</li>
<li><strong>Low-angle flatbed ramps</strong> — allow safe loading of lowered bikes and custom builds with limited ground clearance</li>
</ul>
<h3>Motorcycle Towing for All Situations</h3>
<p>Williams Towing handles motorcycle towing for breakdowns, accidents, mechanical failures, dead batteries, flat tires, and scheduled transport to dealers and mechanics. After a motorcycle accident, we take particular care to document your bike's condition for insurance purposes before loading. We work with all Ontario motorcycle insurance providers for accident towing reimbursement.</p>
<h3>Motorcycle Towing Coverage Across the GTA</h3>
<p>Our motorcycle towing service covers all nine GTA cities and all major riding routes — Highway 400 series, the Niagara Peninsula, Durham Region, and all Toronto urban and suburban corridors. Whether you ride in the city or tour the countryside north of the GTA, Williams Towing can reach you and safely transport your bike to any destination.</p>`,
    benefit: `<p>Williams Towing's motorcycle towing service treats your bike with the same respect you do. Purpose-built flatbeds, dedicated wheel chocks, soft straps, and experienced operators who understand motorcycle mechanics and value mean your bike arrives at its destination in the same condition it left. Fast response across the GTA, transparent pricing, and 24/7 availability make Williams Towing the motorcycle towing company Toronto riders call when they need help on the road.</p>`,
  },
  {
    slug: "scrap-junk-vehicle-removal",
    title: "Scrap & Junk Vehicle Removal Toronto — Free Car Removal GTA",
    metatitle: "Scrap Car Removal Toronto | Free Junk Vehicle Removal Near Me — Williams Towing",
    metadescription: "Free scrap car removal near you in Toronto? Williams Towing provides free junk vehicle removal across Toronto & the GTA — all paperwork handled, same-day pickup available. Call +1-416-299-8383.",
    introduction: `<p>Got an old car sitting in your driveway that no longer runs? A junk vehicle taking up space in your garage or on your property? Williams Towing offers free scrap and junk vehicle removal across Toronto, Scarborough, North York, Markham, Etobicoke, and all GTA cities — with no hidden charges and no hassle.</p>
<p>Our scrap vehicle removal service handles all the paperwork, including UVIP documentation and vehicle deregistration with the Ontario Ministry of Transportation. We schedule pickup at your convenience, arrive with the right equipment to remove non-running vehicles, and provide proof of removal so you can cancel your insurance and plates with confidence.</p>
<p>Whether your vehicle is a rusted-out car that hasn't started in years, a flood-damaged SUV from last year's storms, or an old pickup truck with a blown engine, Williams Towing will remove it at no cost to you. Call +1-416-299-8383 to schedule your free junk vehicle removal today.</p>`,
    description: `<h3>What Qualifies for Free Junk Vehicle Removal?</h3>
<p>Williams Towing removes the following vehicles at no cost:</p>
<ul>
<li>Non-running cars, trucks, SUVs, and vans in any condition</li>
<li>Vehicles with expired registration or suspended UVIP</li>
<li>Accident-damaged and written-off vehicles</li>
<li>Flood-damaged and fire-damaged vehicles</li>
<li>Vehicles with missing parts, no tires, or on blocks</li>
<li>Classic or vintage vehicles that are beyond restoration</li>
<li>Vehicles on private property (driveway, garage, lot)</li>
</ul>
<h3>How Scrap Vehicle Removal Works</h3>
<ol>
<li>Call Williams Towing at +1-416-299-8383 and provide your vehicle's year, make, model, and location</li>
<li>We schedule a convenient pickup time (same-day and next-day appointments available)</li>
<li>Our team arrives with the equipment to remove non-running vehicles, including flatbeds and dollies</li>
<li>We complete the UVIP transfer documentation with you on-site</li>
<li>Your vehicle is removed, and you receive proof of disposal</li>
<li>Cancel your insurance and surrender your plates to the MTO — you're done</li>
</ol>
<h3>Eco-Responsible Vehicle Disposal</h3>
<p>All vehicles removed by Williams Towing are transferred to licensed Ontario auto recyclers who follow MTO and Ministry of Environment guidelines for fluid recovery, parts salvage, and metal recycling. Your old vehicle's materials are recycled responsibly — better for the environment than letting it sit and leak fluids on your property.</p>`,
    benefit: `<p>Williams Towing's free junk vehicle removal service is the fastest, simplest way to remove an unwanted vehicle from your property. No fees, no hidden charges, full paperwork assistance, and eco-responsible disposal through licensed Ontario recyclers. We cover all nine GTA cities with flexible scheduling including same-day pickup where available. Call Williams Towing at +1-416-299-8383 — we'll have your old vehicle gone before the week is out.</p>`,
  },
  {
    slug: "long-distance-towing",
    title: "Long Distance Towing Toronto — Ontario-Wide Vehicle Transport GTA",
    metatitle: "Long Distance Towing Toronto | Ontario-Wide Towing Near Me — Williams Towing",
    metadescription: "Need long distance towing near you in Toronto? Williams Towing provides flat-rate long distance towing across Ontario from Toronto, Scarborough, Markham, Oshawa & all GTA cities. Call +1-416-299-8383.",
    introduction: `<p>Need to transport your vehicle across Ontario? Williams Towing provides professional, flat-rate long distance towing from Toronto and all GTA cities to any destination in Ontario — including Ottawa, London, Kingston, Windsor, Hamilton, Barrie, and beyond. Our flatbed fleet ensures your vehicle arrives safely, regardless of distance.</p>
<p>Long distance vehicle towing requires more than just a long drive — it requires proper vehicle securing for highway speeds, route planning to avoid height restrictions and low bridges, operator certifications for out-of-area towing, and transparent pricing that doesn't grow after the fact. Williams Towing provides all of this with upfront flat-rate pricing confirmed before dispatch, so you know exactly what you're paying before we put your vehicle on the truck.</p>
<p>Call Williams Towing at +1-416-299-8383 for a long distance towing quote — we'll provide a flat rate based on your vehicle and destination, with no hidden distance charges or fuel surcharges beyond the agreed price.</p>`,
    description: `<h3>Long Distance Towing — Popular Routes from the GTA</h3>
<ul>
<li>Toronto to Ottawa — ~450 km, typically 5–6 hours in transit</li>
<li>Toronto to London — ~190 km, typically 2–3 hours in transit</li>
<li>Toronto to Kingston — ~260 km, typically 3–4 hours in transit</li>
<li>Toronto to Barrie — ~100 km, typically 1.5–2 hours in transit</li>
<li>Toronto to Windsor — ~370 km, typically 4–5 hours in transit</li>
<li>Toronto to Hamilton — ~70 km, typically 1–1.5 hours in transit</li>
<li>Scarborough, Pickering, Ajax, Whitby, Oshawa to Toronto — frequent GTA corridor runs</li>
</ul>
<h3>Why Choose Flatbed for Long Distance Towing?</h3>
<p>For long distance towing, flatbed is always the recommended method. Keeping all four wheels elevated throughout a long highway drive prevents tire wear, protects AWD and 4WD drivetrains, and eliminates the risk of a towed vehicle's steering wandering at highway speed. Williams Towing uses flatbed trucks for all long-distance transport.</p>
<h3>Vehicle Tracking for Long Distance Towing</h3>
<p>Our long-distance tow trucks are GPS-tracked throughout the journey. For high-value vehicles, we provide periodic status updates so you always know where your vehicle is. Insurance documentation, pre-transport photos, and signed condition reports are standard on all long-distance towing jobs.</p>`,
    benefit: `<p>Williams Towing's long distance towing service delivers your vehicle safely anywhere in Ontario with flat-rate pricing confirmed before dispatch. No surprise fuel surcharges, no per-kilometre billing that grows unexpectedly, and no minimum delivery windows that leave your vehicle sitting in a yard. Our flatbed fleet, experienced operators, and GPS tracking ensure your vehicle arrives in the same condition it left — on time and at the agreed price. For long distance towing from Toronto or any GTA city, Williams Towing is Ontario's trusted choice.</p>`,
  },
  {
    slug: "equipment-towing",
    title: "Equipment Towing Toronto — Heavy Equipment Transport GTA",
    metatitle: "Equipment Towing Toronto | Heavy Equipment Transport Near Me — Williams Towing",
    metadescription: "Need equipment towing near you in Toronto? Williams Towing provides heavy equipment transport for construction machinery, forklifts & industrial equipment across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>Moving construction equipment, industrial machinery, and commercial tools requires specialized transport expertise that goes far beyond standard towing. Williams Towing provides professional equipment towing and transport across Toronto, Markham, Scarborough, Etobicoke, Oshawa, Ajax, and all nine GTA cities — with the right equipment, proper permits, and experienced operators for every job.</p>
<p>Our equipment transport fleet includes lowboy trailers, flatdecks, and heavy-duty wreckers capable of transporting excavators, backhoes, skid steers, forklifts, compactors, cranes, and other heavy industrial machinery. We handle route planning, permits for oversized loads, and coordination with municipalities for scheduled equipment moves across the GTA.</p>
<p>For emergency equipment breakdowns at job sites, we provide priority dispatch to minimize operational downtime. Call Williams Towing at +1-416-299-8383 for equipment towing and transport quotes across all GTA locations.</p>`,
    description: `<h3>Equipment We Transport</h3>
<ul>
<li><strong>Construction equipment</strong> — excavators, backhoes, bulldozers, graders, pavers, compactors</li>
<li><strong>Lifting equipment</strong> — forklifts, telehandlers, boom lifts, scissor lifts</li>
<li><strong>Agricultural equipment</strong> — tractors, combines, and farm machinery</li>
<li><strong>Industrial machinery</strong> — generators, compressors, large industrial tools</li>
<li><strong>Trailers</strong> — flatdeck trailers, utility trailers, equipment trailers, and lowboys</li>
<li><strong>Commercial vehicles</strong> — heavy trucks, straight trucks, cube vans</li>
</ul>
<h3>Equipment Transport Process</h3>
<p>Every equipment transport job begins with an assessment of the equipment's dimensions, weight, and loading requirements. Williams Towing coordinates with your site supervisor to plan safe loading and unloading, selects the appropriate transport vehicle, and arranges any required oversized load permits for provincial highways. All equipment is properly secured with certified chains and binders before transport.</p>
<h3>Emergency Equipment Breakdown Response</h3>
<p>When construction equipment breaks down on a job site, at a customer's property, or on a public road, Williams Towing provides emergency heavy-duty recovery and transport to your dealer or repair facility. We operate 24/7, so equipment breakdowns don't have to halt your project for the day. Priority dispatch is available for commercial accounts.</p>`,
    benefit: `<p>Williams Towing's equipment towing service combines the right transport equipment, properly certified operators, and route planning expertise to move your machinery safely and on schedule. Whether it's a scheduled equipment move between job sites or an emergency breakdown recovery at a construction site, Williams Towing delivers professional service with transparent, upfront pricing. 24/7 availability and GTA-wide coverage make us the equipment transport company Toronto contractors and industrial operators call first.</p>`,
  },
  {
    slug: "vehicle-recovery",
    title: "Vehicle Recovery Toronto — 24/7 Car Recovery Near Me GTA",
    metatitle: "Vehicle Recovery Toronto | 24/7 Car Recovery Near Me — Williams Towing",
    metadescription: "Need vehicle recovery near you in Toronto? Williams Towing provides 24/7 off-road vehicle recovery, winching, and accident recovery across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>Vehicle recovery is more than just towing — it's extracting a vehicle from a situation where it cannot be simply hooked up and driven or rolled away. Williams Towing provides professional vehicle recovery services across Toronto and the GTA for vehicles stuck in ditches, off the road, in snow or mud, at accident scenes, or in other difficult recovery situations.</p>
<p>Our recovery fleet includes winch trucks, air-cushion systems, heavy-duty wreckers, and specialized recovery rigging for complex situations. Our operators are trained in safe vehicle recovery techniques that minimize further damage to your vehicle and prevent secondary accidents during the recovery process.</p>
<p>For heavy commercial vehicle recovery, rollover recovery, and large-scale accident scenes, our heavy-duty recovery division deploys specialized equipment capable of righting and recovering vehicles up to 75 tons. Call Williams Towing at +1-416-299-8383 for vehicle recovery near you — 24/7 across all GTA cities.</p>`,
    description: `<h3>Vehicle Recovery Situations We Handle</h3>
<ul>
<li><strong>Ditch recovery</strong> — vehicles that have gone off the road into ditches on highway or rural routes</li>
<li><strong>Snow & mud recovery</strong> — vehicles stuck in snow banks, mud, or soft ground</li>
<li><strong>Off-road recovery</strong> — 4x4 and SUV recoveries from trails, fields, and off-road areas</li>
<li><strong>Accident scene recovery</strong> — extracting and recovering vehicles from collision scenes</li>
<li><strong>Rollover recovery</strong> — righting and recovering overturned vehicles safely</li>
<li><strong>Cargo recovery</strong> — stabilizing and recovering spilled or shifted cargo from commercial vehicles</li>
<li><strong>Water-adjacent recovery</strong> — vehicles near creeks, embankments, and waterways</li>
</ul>
<h3>Recovery Planning & Safety</h3>
<p>Every vehicle recovery operation begins with a scene assessment to identify hazards, evaluate the vehicle's position and condition, and plan the safest recovery method. Williams Towing operators do not rush recoveries — a poorly planned recovery can cause additional damage to the vehicle or create safety hazards for operators and bystanders. We take the time to do it right.</p>
<p>For major highway recoveries, we coordinate with OPP, Toronto Police, and MTO to establish proper traffic control before beginning recovery operations. All equipment is rated and certified for the recovery loads being applied.</p>`,
    benefit: `<p>Williams Towing's vehicle recovery service brings professional technique, proper equipment, and careful planning to every recovery situation. Whether you need a simple winch-out from a ditch or a complex commercial vehicle rollover recovery, Williams Towing deploys the right resources for the job. 24/7 availability, GTA-wide coverage, and coordination with emergency services make Williams Towing the vehicle recovery company Ontario operators trust. Call +1-416-299-8383 for vehicle recovery near you.</p>`,
  },
  {
    slug: "breakdown-services",
    title: "Breakdown Services Toronto — 24/7 Roadside Breakdown Help GTA",
    metatitle: "Breakdown Services Near Me Toronto | 24/7 Roadside Breakdown Help — Williams Towing",
    metadescription: "Need breakdown services near you in Toronto? Williams Towing provides 24/7 roadside breakdown assistance, battery boost, jump start, tire change & towing across Toronto & the GTA. Call +1-416-299-8383.",
    introduction: `<p>A vehicle breakdown can happen anywhere, at any time — on the highway, in a parking lot, at home, or in the middle of a busy Toronto intersection. Williams Towing provides comprehensive breakdown services across Toronto and the GTA, 24 hours a day, 7 days a week, with average response times of 20–40 minutes for most GTA locations.</p>
<p>Our breakdown response team handles the full spectrum of roadside emergencies: dead batteries, flat tires, overheating engines, empty fuel tanks, locked keys, electrical faults, and mechanical failures that require towing. When a roadside fix isn't possible, we dispatch a tow truck alongside our roadside operator so you're moved to a repair facility without a second wait.</p>
<p>Williams Towing's breakdown service is available to all drivers in the GTA — no membership required, no annual fee. Call +1-416-299-8383 and get immediate breakdown assistance with upfront pricing.</p>`,
    description: `<h3>Common Breakdown Situations We Resolve</h3>
<ul>
<li><strong>Dead battery</strong> — battery boost or jump start for gas, diesel, and hybrid vehicles; EV-safe boosters available</li>
<li><strong>Flat tire</strong> — spare tire mounting on light-duty vehicles; flat tire towing when no spare is available</li>
<li><strong>Out of fuel</strong> — emergency gas or diesel delivery to your location</li>
<li><strong>Locked out</strong> — professional, damage-free lockout service for all vehicle makes and models</li>
<li><strong>Overheating</strong> — temporary cooling system assistance and towing to repair facility</li>
<li><strong>Won't start</strong> — diagnostic check and towing if the issue requires shop service</li>
<li><strong>Accident damage</strong> — accident towing and recovery alongside breakdown response</li>
</ul>
<h3>Breakdown Services Coverage</h3>
<p>Williams Towing covers all nine GTA cities for breakdown services — Toronto, Scarborough, North York, Markham, Etobicoke, Pickering, Ajax, Whitby, and Oshawa. We respond to breakdowns on all major GTA highways, urban streets, residential areas, parking lots, and commercial properties.</p>
<h3>Insurance & CAA Coordination</h3>
<p>Many Ontario auto insurance policies include roadside breakdown assistance coverage. Williams Towing works directly with insurance-dispatched breakdown calls and provides invoices formatted for insurance submission. If you have CAA membership or insurance-included roadside coverage, mention it when you call — we can often coordinate direct billing to reduce your out-of-pocket cost.</p>`,
    benefit: `<p>Williams Towing's breakdown services provide comprehensive roadside support for every type of vehicle emergency — from a dead battery to a major mechanical failure requiring towing. Our 24/7 availability, GTA-wide coverage, and transparent pricing make every breakdown call fast and stress-free. We handle the fix when we can, and provide immediate towing when we can't — all in one call. For breakdown services near you in Toronto or anywhere in the GTA, Williams Towing is on the way.</p>`,
  },
];

async function updateServiceContent() {
  console.log(`Updating ${services.length} service pages in Supabase...`);

  for (const service of services) {
    const { slug, ...data } = service;

    const { error } = await supabase
      .from("services")
      .update(data)
      .eq("slug", slug);

    if (error) {
      console.error(`✗ Failed to update ${slug}:`, error.message);
    } else {
      console.log(`✓ Updated: ${slug}`);
    }
  }

  console.log("\nDone. Verify content on the live site by visiting each service page.");
}

updateServiceContent().catch(console.error);
