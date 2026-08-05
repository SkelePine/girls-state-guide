import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function FilingProcess() {
  const [openItem, setOpenItem] = useState(null)

  const fees = [
    { office: 'Governor', fee: '$500', partisan: true },
    { office: 'Lt. Governor', fee: '$400', partisan: true },
    { office: 'Attorney General', fee: '$400', partisan: true },
    { office: 'Secretary of State', fee: '$400', partisan: true },
    { office: 'Treasurer', fee: '$350', partisan: true },
    { office: 'Controller', fee: '$350', partisan: true },
    { office: 'Superintendent of Public Instruction', fee: '$350', partisan: false },
    { office: 'Justice of the Supreme Court', fee: '$350', partisan: false },
  ]

  const forms = [
    { number: 'Form #3', name: 'Declaration of Candidacy', desc: 'Your official filing form. Includes your Girls State name, city, county, party, and Verification Deputies.' },
    { number: 'Form #4', name: 'Nomination Form', desc: 'Requires 11–15 signatures from at least two counties. Partisan offices: signatures from your party only. Non-partisan: both parties can sign.' },
    { number: 'Form #5', name: 'Verification Deputy\'s Affidavit', desc: 'Signed with a GREEN HAT Notary present. Do NOT sign until you are with the notary.' },
    { number: 'Form #12', name: 'Campaign Contribution Disclosure', desc: 'Track every contributor\'s name, city, and amount. Max $25 per contributor. Must maintain $1 minimum balance.' },
  ]

  const people = [
    { hat: '🟢', role: 'Green Hats', desc: 'Notaries — must sign your Form #5' },
    { hat: '🟣', role: 'Purple Hats', desc: 'Fixers — help correct errors on forms' },
    { hat: '📋', role: 'Clerks & Treasurers', desc: 'Provide forms and collect fees ONLY — do not answer questions or correct forms' },
    { hat: '👋', role: 'Liaisons, JCs, Interns', desc: 'Encouragement and guidance' },
  ]

  return (
    <FadeInSection>
    <section id="filing" style={{ backgroundColor: '#1B2A4A' }} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            State Offices Only
          </p>
          <h2 style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-bold mb-4">
            The State Filing Process
          </h2>
          <p className="text-white opacity-60 max-w-xl mx-auto">
            Running for a state office is a whole process — and it starts before you even campaign. Here's exactly how it works.
          </p>
        </div>

        {/* People to Know */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
            People to Know
          </p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {people.map((person) => (
              <StaggerItem key={person.role} className="flex gap-4 p-4 rounded-xl"
                   style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <span className="text-2xl">{person.hat}</span>
                <div>
                  <p style={{ color: '#C9A84C' }} className="font-semibold text-sm">{person.role}</p>
                  <p className="text-white opacity-60 text-xs mt-1">{person.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* The Three Forms */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
            The Forms You Need
          </p>
          <StaggerContainer className="space-y-3">
            {forms.map((form, index) => (
              <StaggerItem key={form.number} className="rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold px-2 py-1 rounded"
                          style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}>
                      {form.number}
                    </span>
                    <span className="text-white font-medium text-sm">{form.name}</span>
                  </div>
                  <span style={{ color: '#C9A84C' }}>{openItem === index ? '−' : '+'}</span>
                </button>
                {openItem === index && (
                  <div className="px-5 pb-5" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                    <p className="text-white opacity-65 text-sm pt-3">{form.desc}</p>
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Signature Rules */}
        <div className="mb-12 p-6 rounded-2xl"
             style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
            Signature Rules
          </p>
          <StaggerContainer className="space-y-2">
            {[
              'Need 11–15 total signatures from at least TWO counties',
              'Must have a Verification Deputy in each county where you collect signatures',
              'Partisan offices: signatures from your party only',
              'Non-partisan offices: both parties can sign',
              'File all paperwork in your HOME county',
            ].map((rule) => (
              <StaggerItem key={rule} className="flex items-start gap-2 text-sm text-white opacity-75">
                <span style={{ color: '#C9A84C' }}>→</span> {rule}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Filing Fees */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
            Filing Fees (Girls State Currency — G$)
          </p>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {fees.map((item) => (
              <StaggerItem key={item.office} className="p-4 rounded-xl text-center"
                   style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: `1px solid ${item.partisan ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.1)'}` }}>
                <p style={{ color: '#C9A84C' }} className="text-xl font-bold mb-1">{item.fee}</p>
                <p className="text-white opacity-70 text-xs mb-2">{item.office}</p>
                <span className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: item.partisan ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.1)', color: item.partisan ? '#C9A84C' : 'rgba(255,255,255,0.5)' }}>
                  {item.partisan ? 'Partisan' : 'Non-Partisan'}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-xs mt-4 text-white opacity-40">
            Start fundraising at breakfast the morning after state filing is announced. Max $25 per contributor.
          </p>
        </div>

        {/* Tips */}
        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
            Form Tips — Read Carefully
          </p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              'Read aloud — top to bottom, left to right',
              'Print clearly in blue or black pen only',
              'Don\'t leave ANY blank fields',
              'Verify GS signatures and party affiliation',
              'Ask for the correct color paper',
              'File in the correct (HOME) county',
              'Do NOT sign Form #5 until you are with a Green Hat Notary',
              'Only pay your filing fee once, in your HOME county',
            ].map((tip) => (
              <StaggerItem key={tip} className="flex items-start gap-2 text-xs text-white opacity-65">
                <span style={{ color: '#C9A84C' }}>✓</span> {tip}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
    </FadeInSection>
  )
}
