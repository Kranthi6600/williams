import React, { useMemo, useState } from "react";
import Div from "../Div";

const serviceFaqLibrary = {
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

const getServiceFaqKey = (slug = "") => {
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
  if (slugLower.includes("equipment")) {
    return "equipment-towing";
  }
  if (slugLower.includes("long-distance")) {
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
