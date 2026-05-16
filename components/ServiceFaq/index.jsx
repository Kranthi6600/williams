import React, { useMemo, useState } from "react";
import Div from "../Div";

export const serviceFaqLibrary = {
  "light-duty-wrecker-1ton-towing": [
    {
      question: "What vehicles qualify for light duty wrecker or 1-ton towing?",
      answer:
        "Compact cars, sedans, crossovers, light pickup trucks, and cargo vans under 10,000 lbs are ideal for our light duty wreckers and 1-ton wheel-lift units."
    },
    {
      question: "Can your light duty wreckers navigate tight downtown laneways?",
      answer:
        "Yes. Short-wheelbase wreckers with wireless winches maneuver alleyways, condo ramps, and parking garages where flatbeds cannot fit."
    },
    {
      question: "Do you offer dollies or skates for vehicles with locked transmissions?",
      answer:
        "Portable dollies lift non-rolling axles so we can safely relocate seized transmissions or vehicles missing wheels."
    },
    {
      question: "Is 1-ton towing available around the clock?",
      answer:
        "Absolutely. Light duty wreckers run 24/7 across Toronto, Mississauga, Vaughan, and Durham for emergency or scheduled moves."
    },
    {
      question: "Will you tow directly to dealerships or tire shops?",
      answer:
        "Provide the destination and we’ll deliver the vehicle, leave keys with service advisors, and send proof-of-drop photos."
    }
  ],
  "car-towing": [
    {
      question: "How fast can your 24/7 car towing team reach downtown Toronto?",
      answer:
        "Tow trucks are staged along the Gardiner, DVP, and Highway 401 so average ETAs for car towing calls in Toronto, Scarborough, or North York are 20-30 minutes day or night."
    },
    {
      question: "Do you provide flat-rate pricing for sedans and SUVs?",
      answer:
        "Yes. Local car towing within the GTA includes transparent flat-rate quotes that cover hook-up, mileage, and fuel. Pricing is texted or emailed before trucks roll."
    },
    {
      question: "Can you tow AWD, EV, or lowered vehicles without damage?",
      answer:
        "We use low-angle flatbeds, soft straps, and wheel dollies to move AWD drivetrains, Teslas, and lowered performance vehicles without touching the transmission or bumpers."
    },
    {
      question: "Will insurance reimburse my car towing invoice?",
      answer:
        "We issue digital invoices with geo-stamped pickup/drop-off data and photos so insurers reimburse roadside towing claims quickly."
    },
    {
      question: "Can you deliver my vehicle to a dealership or collision centre of choice?",
      answer:
        "Absolutely. Provide the drop address and after-hours instructions—we coordinate with service advisors or storage yards and send proof-of-delivery photos."
    }
  ],
  "flatbed-towing": [
    {
      question: "Why choose flatbed towing for luxury vehicles in Toronto?",
      answer:
        "Flatbed decks keep all four wheels off the ground, protecting AWD systems, low front lips, and air suspensions on high-end vehicles like Porsche, Ferrari, and Range Rover."
    },
    {
      question: "Do your flatbeds access underground parking garages?",
      answer:
        "Yes. We operate low-clearance decks plus portable dollies capable of entering condo garages down to 6'6\" clearance to retrieve cars safely."
    },
    {
      question: "Can you move vehicles long distance on flatbeds?",
      answer:
        "Our long-haul flatbed division transports vehicles anywhere in Ontario and neighbouring provinces with GPS tracking, cargo insurance, and scheduled updates."
    },
    {
      question: "How do you protect paint, carbon brakes, and custom wheels?",
      answer:
        "We use soft loop straps, microfibre fender covers, and non-abrasive deck mats so ceramic-coated paint, carbon-ceramic brakes, and forged wheels remain flawless."
    },
    {
      question: "Can I pre-book a flatbed for a dealership delivery?",
      answer:
        "Yes. Book 12-24 hours in advance so we can assign a dedicated deck, confirm pickup windows, and prep winches or tire skates for non-runners."
    }
  ],
  "roadside-assistance": [
    {
      question: "What does your 24/7 roadside assistance cover in the GTA?",
      answer:
        "Battery boosts, on-site tire swaps, fuel delivery, winch-outs, lockout service, and minor diagnostics. If repairs fail, we tow you directly to your preferred mechanic."
    },
    {
      question: "How quickly can you respond on Highway 401 or the DVP?",
      answer:
        "Response trucks are stationed near major corridors so average ETA on the 401, Gardiner, or DVP is 20-30 minutes, even during late-night calls."
    },
    {
      question: "Are hybrids and EVs safe during boosts or diagnostics?",
      answer:
        "We use surge-protected booster packs and OEM scan tools calibrated for AGM, lithium, and hybrid systems to avoid voltage spikes or CAN bus issues."
    },
    {
      question: "Do you offer roadside memberships for fleets?",
      answer:
        "Fleet clients get priority dispatch, consolidated billing, and service logs for preventative maintenance planning."
    },
    {
      question: "Will you operate during ice storms or heatwaves?",
      answer:
        "Yes. Our winterized trucks run studded tires and chains, while summer crews carry extra coolant and hydration so roadside assistance remains 24/7/365."
    }
  ],
  "jump-start-boost-service": [
    {
      question: "Can you boost luxury vehicles without damaging electronics?",
      answer:
        "We attach smart booster clamps to remote jump posts, protecting sensitive ECUs on Tesla, BMW, Mercedes, Audi, and Porsche platforms."
    },
    {
      question: "Do you stock 24-volt boosters for diesel trucks?",
      answer:
        "Yes. Our technicians carry 12V/24V booster packs capable of spinning Class 8 tractors, sprinter vans, and cube trucks."
    },
    {
      question: "What if the battery fails testing after a boost?",
      answer:
        "We can install OEM-spec batteries on-site, register the new unit with your vehicle computer, and recycle the old core responsibly."
    },
    {
      question: "How much does a professional jump start cost in Toronto?",
      answer:
        "Boost services typically range $75-$95 plus HST depending on location and time of day. Pricing is confirmed via SMS before dispatch."
    },
    {
      question: "Can you protect aftermarket alarms or dash cams during boosts?",
      answer:
        "Yes. Smart clamps monitor polarity and voltage, and technicians isolate auxiliary accessories to avoid power surges."
    }
  ],
  "gas-delivery": [
    {
      question: "How fast can you deliver emergency fuel on the 401 or QEW?",
      answer:
        "Average fuel delivery ETA is 20-30 minutes across Toronto, Mississauga, and Durham thanks to strategically positioned response vehicles."
    },
    {
      question: "Do you supply both gasoline and diesel roadside?",
      answer:
        "Yes. We carry regular, premium, and ultra-low-sulphur diesel so passenger cars, diesel pickups, and commercial vans are all covered."
    },
    {
      question: "Is the service cheaper than calling a tow truck?",
      answer:
        "Fuel delivery typically costs less than a tow. You pay a service call plus pump-equivalent fuel pricing, confirmed before dispatch."
    },
    {
      question: "Can you assist on the 401 shoulder or 407 ETR?",
      answer:
        "We are authorized to service the 401, 404, 407, and QEW shoulders. Our crews deploy safety triangles, high-vis gear, and liaise with OPP if required."
    },
    {
      question: "Will you prime the system after delivering diesel?",
      answer:
        "Yes. Technicians remove air from diesel lines, bleed injectors when necessary, and verify the engine restarts before leaving the scene."
    }
  ],
  "vehicle-lockout-service": [
    {
      question: "How fast can you unlock my car in downtown Toronto?",
      answer:
        "Most lockout calls are resolved within 20 minutes of arrival using non-destructive tools that preserve weatherstripping and airbags."
    },
    {
      question: "Can you unlock modern vehicles with shielded lock cylinders?",
      answer:
        "We use long-reach tools, air wedges, and OEM-approved decoder kits to open new vehicles with frameless windows, deadlocks, and hidden pull handles."
    },
    {
      question: "What if my toddler or pet is trapped inside?",
      answer:
        "Emergency lockouts involving children or pets receive priority dispatch. We may involve local police or fire if heat indexes are dangerous."
    },
    {
      question: "Will unlocking my car trigger alarms or damage sensors?",
      answer:
        "We disable ultrasonic sensors where possible and follow manufacturer procedures to prevent airbag deployment or alarm faults."
    },
    {
      question: "Do you service commercial fleets with keyless fobs?",
      answer:
        "Yes. Fleet accounts enjoy rapid response and can request spare key storage or fob battery replacements during service."
    }
  ],
  "corporate-services": [
    {
      question: "What towing solutions do you provide for corporate fleets?",
      answer:
        "Dedicated account managers, priority dispatch, scheduled vehicle relocations, and consolidated billing keep corporate fleets running with minimal downtime."
    },
    {
      question: "Can you support after-hours vehicle swaps for dealerships or rental fleets?",
      answer:
        "Yes. Overnight tow rotations move vehicles between branches, auction sites, and service bays with secure key handling and digital receipts."
    },
    {
      question: "Do you integrate with fleet maintenance or telematics platforms?",
      answer:
        "We push tow/roadside events into FleetComplete, Geotab, Samsara, and custom APIs so maintenance teams see live status updates."
    },
    {
      question: "Are service level agreements available for corporate clients?",
      answer:
        "Enterprise contracts include response-time SLAs, quarterly KPI reviews, and escalation paths to ensure uptime targets are met."
    },
    {
      question: "Can you provide on-site vehicle staging for corporate events?",
      answer:
        "We deliver display vehicles to trade shows, media launches, and test-drive events, coordinating staging, detailing, and post-event returns."
    }
  ],
  "heavy-duty-towing": [
    {
      question: "What size vehicles can your heavy duty towing fleet handle?",
      answer:
        "Our heavy duty wreckers and rotators handle semi-trucks, tractor trailers, buses, RVs, dump trucks, cube vans, and construction equipment up to 100,000 lbs. We have the right unit for every commercial recovery in the GTA."
    },
    {
      question: "Do you offer 24/7 heavy duty towing on Highway 400 series roads?",
      answer:
        "Yes. Heavy recovery units are positioned across the GTA for rapid response on the 401, 400, 407, QEW, and 427. Average ETA for highway commercial calls is 30-45 minutes."
    },
    {
      question: "Can you recover a jackknifed or overturned tractor trailer?",
      answer:
        "Absolutely. We deploy rotator cranes, air cushions, and heavy rigging to upright and recover overturned or jackknifed semis safely with full traffic management."
    },
    {
      question: "How much does heavy duty towing cost near me in Toronto?",
      answer:
        "Heavy duty towing rates depend on vehicle weight, distance, and recovery complexity. We provide a free upfront quote before dispatch — no hidden fees."
    },
    {
      question: "Do you tow commercial vehicles with hazardous cargo?",
      answer:
        "Yes. Our CVOR-certified operators are trained for TDG-regulated loads. We coordinate with spill response teams and notify authorities when required."
    }
  ],
  "motorcycle-towing": [
    {
      question: "How do you protect my motorcycle during towing?",
      answer:
        "We use purpose-built flatbed decks with wheel chocks, soft loop straps, and handlebar covers — no hooks, no hitch balls. Your frame, fairings, and exhaust are never contacted."
    },
    {
      question: "Can you tow custom, lowered, or sport bikes in Toronto?",
      answer:
        "Yes. Adjustable chocks and low-angle deck loading accommodate cruisers, sport bikes, cafe racers, and customs regardless of ride height or wheelbase."
    },
    {
      question: "What if my motorcycle has a flat tire and can't roll?",
      answer:
        "We carry a dolly that fits under the axle so non-rolling motorcycles can be safely loaded without dragging tires or scratching pipes."
    },
    {
      question: "Do you offer after-hours motorcycle towing near me?",
      answer:
        "Our motorcycle towing crew is available 24/7 across Toronto, Scarborough, Markham, and the entire GTA — even during weekend nights and holidays."
    },
    {
      question: "How much does motorcycle towing cost in the GTA?",
      answer:
        "Local motorcycle towing typically runs $100-$150 for pickup and first 20 km. Pricing is confirmed via text before we dispatch, with no surprise fees."
    }
  ],
  "underground-towing": [
    {
      question: "How low can your underground towing trucks go?",
      answer:
        "Our underground fleet includes purpose-built low-profile units with 5'10\" to 6'6\" roof clearance — enough for most condo parkades, office garages, and hospital parking structures."
    },
    {
      question: "Can you tow from underground parking without damaging the vehicle?",
      answer:
        "Yes. We use wheel-lift equipment and dollies that maneuver in tight turning radii without scraping bumpers, exhaust tips, or lowered front lips."
    },
    {
      question: "Do you handle underground towing in downtown Toronto condos?",
      answer:
        "We regularly serve condo buildings along King West, the Distillery District, Yorkville, and Midtown. We're familiar with condo security protocols and coordinate with superintendents."
    },
    {
      question: "Can you move a non-running car out of an underground parkade?",
      answer:
        "Absolutely. Dollies lift non-rolling axles and our narrow units navigate tight corners to extract seized, accident-damaged, or flat-tired vehicles from underground levels."
    },
    {
      question: "Is underground towing available 24/7 in the GTA?",
      answer:
        "Yes. We dispatch underground tow trucks around the clock — whether it's a dead battery at 2am or a post-accident vehicle in a hospital parkade on a holiday."
    }
  ],
  "scrap-junk-vehicle-removal": [
    {
      question: "Do you offer free scrap car removal anywhere in the GTA?",
      answer:
        "Yes. Williams Towing picks up scrap, junk, and end-of-life vehicles free of charge across Toronto, Scarborough, Markham, Etobicoke, Pickering, Ajax, Whitby, and Oshawa."
    },
    {
      question: "Do I need the title or ownership to scrap my car?",
      answer:
        "You should have the vehicle ownership or bill of sale. We can advise on the paperwork needed to legally transfer and scrap your vehicle in Ontario."
    },
    {
      question: "How quickly can you remove a junk car from my driveway?",
      answer:
        "Most scrap vehicle removals are scheduled within 24-48 hours. In many areas of Toronto and Scarborough, same-day pickup is available."
    },
    {
      question: "Will you remove scrap vehicles from underground or gated lots?",
      answer:
        "Yes. Our low-clearance units handle underground parkades and our team coordinates with property managers for gated access."
    },
    {
      question: "Do you pay cash for scrap cars in Toronto?",
      answer:
        "Scrap value depends on the vehicle's age, weight, and metal prices. Contact us for a free quote — we'll tell you upfront what to expect."
    }
  ],
  "accident-recovery": [
    {
      question: "Do you respond to accident scenes 24/7 in the GTA?",
      answer:
        "Yes. Our accident recovery team dispatches around the clock to highway collisions, intersection accidents, and private property incidents across all GTA cities."
    },
    {
      question: "Can you recover a vehicle that has gone into a ditch or embankment?",
      answer:
        "We use heavy winches, rigging, and off-road capable recovery units to extract vehicles from ditches, embankments, and off-road situations safely."
    },
    {
      question: "Will you coordinate with police and insurance at accident scenes?",
      answer:
        "Yes. Our certified operators work alongside OPP, Toronto Police, and Durham/York Regional Police while communicating tow and recovery details directly to your insurer."
    },
    {
      question: "Can accident-damaged vehicles with no wheels be recovered?",
      answer:
        "Absolutely. We use air dollies, skates, and heavy rigging to move vehicles that have lost wheels, axles, or steering components."
    },
    {
      question: "How much does accident recovery cost near me?",
      answer:
        "Accident recovery costs depend on vehicle size, location, and extraction complexity. We provide a free on-site assessment and quote — and most insurance policies cover recovery costs."
    }
  ],
  "accident-towing": [
    {
      question: "Do you tow accident-damaged cars that can't roll?",
      answer:
        "Yes. We use flatbeds and wheel-lift dollies to safely tow vehicles with damaged front ends, blown tires, bent frames, or missing wheels."
    },
    {
      question: "How fast can you reach an accident scene near me in the GTA?",
      answer:
        "With units staged across Toronto, Scarborough, North York, and Durham, average accident towing ETA is 20-30 minutes day or night."
    },
    {
      question: "Will you tow my vehicle directly to my insurance-preferred shop?",
      answer:
        "Absolutely. Tell us your insurer's preferred collision centre and we'll deliver directly — or hold the vehicle at our secure yard until you decide."
    },
    {
      question: "Do you handle towing from highway accident scenes on the 401?",
      answer:
        "Yes. We are authorized to service all 400-series highways in the GTA. Crews liaise with police and MTO when required for safe recovery."
    },
    {
      question: "What documentation do I receive after accident towing?",
      answer:
        "You receive a digital invoice with pickup location, drop-off confirmation, geo-stamped photos, and timestamp — everything insurers need to process your claim."
    }
  ],
  "equipment-towing": [
    {
      question: "What types of heavy equipment can you transport in the GTA?",
      answer:
        "We transport excavators, skid steers, forklifts, mini excavators, compactors, generators, and construction trailers — any equipment up to 50,000 lbs with proper permitting."
    },
    {
      question: "Do you require special permits for oversized equipment moves?",
      answer:
        "Yes, for overwidth or overweight loads. We handle MTO permit applications, escort vehicle coordination, and route surveys to ensure legal transport."
    },
    {
      question: "Can you transport equipment to and from construction sites in Toronto?",
      answer:
        "We regularly service GTA construction sites, delivering equipment to job sites, storing machinery between phases, and transporting units to repair facilities."
    },
    {
      question: "Is heavy equipment transport available on weekends?",
      answer:
        "Yes. Equipment moves are scheduled 7 days a week including weekends to minimize project downtime and accommodate site-access windows."
    },
    {
      question: "How do you secure equipment on the transport deck?",
      answer:
        "Equipment is chained to rated tie-down points using grade 70 chains, binders, and blocking — compliant with Ontario Transport regulations for cargo securement."
    }
  ],
  "long-distance-towing": [
    {
      question: "Do you offer flat-rate long distance towing from Toronto to other cities?",
      answer:
        "Yes. Long distance towing quotes are flat-rate, covering all fuel, tolls, and driver time. No per-km surprises — pricing is confirmed before departure."
    },
    {
      question: "How far will Williams Towing transport a vehicle from the GTA?",
      answer:
        "We handle long distance towing throughout Ontario, including Ottawa, London, Windsor, Sudbury, Thunder Bay, and cross-border to the US with proper documentation."
    },
    {
      question: "Can you tow a non-running vehicle on a long distance flatbed?",
      answer:
        "Absolutely. Flatbeds handle non-runners, project vehicles, vintage cars, and accident-damaged vehicles over any distance safely and securely."
    },
    {
      question: "Do you provide GPS tracking for long distance vehicle transport?",
      answer:
        "Yes. Clients receive live GPS updates and an estimated arrival window so you always know where your vehicle is during long haul transport."
    },
    {
      question: "Can I pre-schedule a long distance tow for a specific date?",
      answer:
        "Yes. Advance booking ensures we assign the right flatbed, confirm permits if needed, and plan the optimal route for your delivery window."
    }
  ],
  "default": [
    {
      question: "How quickly can Williams Towing arrive anywhere in the GTA?",
      answer:
        "Average ETA is 20-30 minutes thanks to a fleet staged across Toronto, Scarborough, Etobicoke, Markham, Pickering, Ajax, and Whitby."
    },
    {
      question: "Are your towing and roadside services available 24/7?",
      answer:
        "Yes. Dispatch never closes. Crews operate 365 days a year including statutory holidays, overnight, and during severe weather events."
    },
    {
      question: "What payment methods do you accept on-site?",
      answer:
        "We accept Visa, Mastercard, Amex, debit, Interac e-Transfer, corporate PO, and direct insurance billing when applicable."
    },
    {
      question: "Will you tow to my home or directly to a dealership?",
      answer:
        "You choose the destination. We deliver to homes, dealerships, storage yards, body shops, or rental car branches anywhere in Ontario."
    },
    {
      question: "Do you provide bilingual dispatch support?",
      answer:
        "Yes. Dispatch offers English and French support, and we can arrange translation assistance when needed."
    }
  ]
};

export const getServiceFaqKey = (slug = "") => {
  const slugLower = slug.toLowerCase();

  if (serviceFaqLibrary[slugLower]) {
    return slugLower;
  }

  if (slugLower.includes("light-duty") || slugLower.includes("1ton") || slugLower.includes("wrecker")) {
    return "light-duty-wrecker-1ton-towing";
  }
  if (slugLower.includes("heavy") && slugLower.includes("duty")) {
    return "heavy-duty-towing";
  }
  if (slugLower.includes("roadside")) {
    return "roadside-assistance";
  }
  if (slugLower.includes("flatbed")) {
    return "flatbed-towing";
  }
  if (slugLower.includes("motorcycle")) {
    return "motorcycle-towing";
  }
  if (slugLower.includes("underground")) {
    return "underground-towing";
  }
  if (slugLower.includes("scrap") || slugLower.includes("junk")) {
    return "scrap-junk-vehicle-removal";
  }
  if (slugLower.includes("lockout")) {
    return "vehicle-lockout-service";
  }
  if (slugLower.includes("gas")) {
    return "gas-delivery";
  }
  if (slugLower.includes("jump")) {
    return "jump-start-boost-service";
  }
  if (slugLower.includes("accident") && slugLower.includes("recovery")) {
    return "accident-recovery";
  }
  if (slugLower.includes("accident")) {
    return "accident-towing";
  }
  if (slugLower.includes("equipment") || slugLower.includes("transport")) {
    return "equipment-towing";
  }
  if (slugLower.includes("long-distance") || slugLower.includes("long_distance")) {
    return "long-distance-towing";
  }
  if (slugLower.includes("corporate")) {
    return "corporate-services";
  }

  return "default";
};

export default function ServiceFaq({ serviceSlug, serviceTitle }) {
  const [selected, setSelected] = useState(0);
  const faqKey = useMemo(() => getServiceFaqKey(serviceSlug), [serviceSlug]);
  const faqs = serviceFaqLibrary[faqKey] || serviceFaqLibrary.default;

  const handleToggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      <h2 className="cs-section_title cs-m0 mb-4">
        Frequently Asked Questions About {serviceTitle || "This Service"}
      </h2>
      {faqs.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? "active" : ""}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handleToggle(index)}
          >
            <h3 className="cs-accordian_title">{item.question}</h3>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
