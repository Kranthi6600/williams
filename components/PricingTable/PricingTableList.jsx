import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Monthly</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={()=>setTab('yearly')}>Yearly</li>
      </ul>
      <Section className="row">
        {/* Standard Towing Service */}
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Local Towing Assistance'
              price='150' // Monthly price
              currency='$'
              timeline='per tow'
              features={['24/7 Assistance', 'Local Tow', '10 Miles Included', 'Flat Tire Assistance']}
              btnText='Purchase Now'
              btnLink='/purchase/local'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Local Towing Assistance'
              price='500' // Yearly price for a subscription maybe
              currency='$'
              timeline='annual'
              features={['24/7 Assistance', 'Unlimited Local Tows', '20 Miles Included per Tow', 'Flat Tire Assistance']}
              btnText='Purchase Now'
              btnLink='/purchase/local'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        {/* Emergency Towing Service */}
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='Emergency Assistance'
              price='175' // Monthly price
              currency='$'
              timeline='per tow'
              features={['Priority Service', 'Accident Recovery', 'Emergency Towing', 'Lockout Service']}
              btnText='Purchase Now'
              btnLink='/purchase/emergency'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Emergency Assistance'
              price='800' // Yearly price
              currency='$'
              timeline='annual'
              features={['Unlimited Priority Service', 'Accident Recovery', 'Emergency Towing', 'Lockout Service']}
              btnText='Purchase Now'
              btnLink='/purchase/emergency'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        {/* Long Distance Towing Service */}
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Long Distance Towing'
              price='190' // Monthly price
              currency='$'
              timeline='per tow'
              features={['Statewide Service', 'Up to 100 Miles', 'Dedicated Towing Vehicle', '24/7 Service']}
              btnText='Purchase Now'
              btnLink='/purchase/long-distance'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Long Distance Towing'
              price='1500' // Yearly price
              currency='$'
              timeline='annual'
              features={['Unlimited Statewide Service', 'Up to 250 Miles per Tow', 'Dedicated Towing Vehicle', 'Priority Dispatch']}
              btnText='Purchase Now'
              btnLink='/purchase/long-distance'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
