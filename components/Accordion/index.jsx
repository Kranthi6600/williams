import React from "react";
import { useState } from "react";
import Div from "../Div";

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const accordionData = [
    {
      question: "What types of vehicles can Williams Towing handle?",
      answer:
        "At Williams Towing, we specialize in a comprehensive range of vehicle towing services. Whether you need assistance with cars, trucks, motorcycles, or heavy-duty vehicles, our skilled team is equipped to handle your needs efficiently. Utilizing state-of-the-art towing equipment, we ensure the safe and secure transportation of your vehicle, regardless of its type.",
    },
    {
      question: "How quickly can you respond to a towing request in Toronto?",
      answer:
        "Our commitment at Williams Towing is to offer swift and reliable service. We understand that time is crucial in towing situations, so we aim to respond to your requests within 30 to 60 minutes across Toronto and the GTA. Our response time may vary based on your specific location and traffic conditions. Rest assured, we prioritize getting to your location as quickly as possible.",
    },
    {
      question: "What towing services do you offer?",
      answer:
        "Williams Towing offers an extensive selection of towing services tailored to accommodate every requirement. From emergency towing during unforeseen breakdowns to precise vehicle recovery and dependable long-distance towing, our services cover all bases. Committed to providing premium towing solutions, we guarantee that your vehicle receives the utmost care. Equipped with a modern, adaptable, and extensive fleet, Williams Towing is ready to tackle any challenge, whether it's straightforward roadside help or complex heavy-duty recovery tasks.",
    },
    {
      question: "How much does towing cost in Toronto?",
      answer:
        "Towing costs in Toronto vary based on factors like the type of service, distance, and vehicle size. Williams Towing offers competitive, transparent pricing with no hidden fees. For standard towing within the GTA, rates typically start from $75-$150. Heavy-duty towing and specialized services may cost more. We provide upfront quotes before any service begins. Contact us at 416-299-8383 for an accurate quote tailored to your specific needs.",
    },
    {
      question: "Do you operate 24/7?",
      answer:
        "Yes, at Williams Towing, we are always ready to assist you. Our services are available around the clock, 24 hours a day, 7 days a week, including holidays. Whether you encounter a roadside emergency in the early morning or need late-night towing assistance, our team is just a call away, ensuring you receive prompt and reliable service whenever you need it.",
    },
    {
      question: "What should I do if my car breaks down on Highway 401?",
      answer:
        "If your car breaks down on Highway 401, first safely move to the right shoulder if possible, turn on hazard lights, and exit your vehicle from the passenger side if safe. Call 911 if you're in danger, then contact Williams Towing at 416-299-8383. As an authorized highway assistance provider, we're experienced in highway recoveries and can reach you quickly. Stay behind the guardrail while waiting and never attempt repairs on the highway.",
    },
    {
      question: "Does insurance cover towing in Ontario?",
      answer:
        "Many auto insurance policies in Ontario include some level of towing coverage, typically under roadside assistance or collision coverage. Coverage amounts usually range from $50 to $200 per incident. Williams Towing works directly with most insurance companies and can bill them directly in many cases. We recommend checking your policy or calling your insurance provider to confirm your coverage before you need service.",
    },
    {
      question: "Can you tow a car without keys?",
      answer:
        "Yes, Williams Towing can tow vehicles without keys. Our flatbed tow trucks are ideal for this situation as we can safely load your vehicle using wheel dollies and winches without needing the keys. This is common for accident recoveries, repossessions, or when keys are lost or locked inside. For all-wheel-drive and 4x4 vehicles, we always use flatbeds to prevent drivetrain damage.",
    },
    {
      question: "What areas do you serve in the Greater Toronto Area?",
      answer:
        "Williams Towing proudly serves all of Toronto and the Greater Toronto Area including Scarborough, North York, Etobicoke, Markham, Mississauga, Brampton, Vaughan, Richmond Hill, Pickering, Ajax, Whitby, and Oshawa. We also provide long-distance towing services throughout Ontario. With multiple strategically located trucks across the GTA, we can reach you quickly no matter where you are.",
    },
    {
      question: "Do you offer flatbed towing for luxury and exotic cars?",
      answer:
        "Absolutely! Williams Towing offers specialized flatbed towing services perfect for luxury vehicles, exotic cars, classic automobiles, and low-clearance sports cars. Flatbed towing keeps all four wheels off the ground, eliminating any risk of transmission damage or road debris. Our operators are trained in proper handling techniques for high-value vehicles, and we carry additional insurance coverage for luxury transports.",
    },
    {
      question: "How do I get a car out of underground parking?",
      answer:
        "Underground parking towing requires specialized low-clearance equipment, which Williams Towing has in our fleet. Our compact tow trucks and wheel-lift systems can access most underground parking structures with ceiling heights as low as 6'6\". Contact us with the parking garage address and approximate ceiling height, and we'll dispatch the appropriate equipment. Additional charges may apply for underground recoveries.",
    },
    {
      question: "What is heavy-duty towing and when do I need it?",
      answer:
        "Heavy-duty towing is required for vehicles over 10,000 lbs, including semi-trucks, buses, RVs, motorhomes, commercial vehicles, and construction equipment. Williams Towing operates specialized heavy-duty wreckers capable of handling loads up to 75 tons. If your commercial vehicle breaks down or is involved in an accident, our heavy-duty team provides professional recovery services 24/7 throughout the GTA and Ontario.",
    },
    {
      question: "Can you help if I'm locked out of my car?",
      answer:
        "Yes! Lockout service is one of our most requested roadside assistance services. Our trained technicians can safely unlock most vehicle makes and models without damaging your car. We use professional lockout tools and techniques. Average arrival time for lockout service in the Toronto area is 30-45 minutes. If we cannot unlock your vehicle, we can tow it to your preferred mechanic or dealership.",
    },
    {
      question: "Do you provide motorcycle towing services?",
      answer:
        "Yes, Williams Towing offers specialized motorcycle towing using wheel chocks, soft straps, and flatbed trucks to ensure your motorcycle is transported safely without scratches or mechanical damage. Whether you have a sport bike, cruiser, or vintage motorcycle, our equipment and trained operators will handle your bike with care. We serve all of Toronto and the GTA for motorcycle towing and recovery.",
    },
    {
      question: "What happens to my car after an accident in Toronto?",
      answer:
        "After an accident in Toronto, police may call a tow truck from their rotation list, or you can request Williams Towing specifically. Your vehicle will be towed to an impound lot, collision center, or location of your choice. We work directly with insurance adjusters and body shops. Important: You have the right to choose your own tow company in most situations. Save our number (416-299-8383) in your phone for emergencies.",
    },
  ];

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? "active" : ""}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
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
